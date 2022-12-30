const db = require('../models')
class DeviceController {
    async sendData(req, res) {
        try {
            const checkDeviceToken = await db.devices.findOne({
                where: { uuid: req.headers['device-token'] }
            })

            if (checkDeviceToken) {
                const oldDevice = await db.devices.create({
                    uuid: req.headers['device-token'],
                    experimentId: checkDeviceToken.experimentId,
                    newdevice: false

                })
                await oldDevice.save();
                const findExperimentKey = await db.experiments.findOne({
                    where: {
                        id: oldDevice.experimentId
                    }
                })
                res.json({ oldDevice, experimentValue: findExperimentKey.value });
            }
            else {
                const devicesCount = await db.devices.count({
                    where: {
                        newdevice: true
                    }
                });
                const experimentId = (devicesCount % 3) + 1;
                const newDevice = await db.devices.create({
                    uuid: req.headers['device-token'],
                    experimentId: experimentId,
                    newdevice: true
                })
                await newDevice.save();
                const findExperimentKey = await db.experiments.findOne({
                    where: {
                        id: newDevice.experimentId
                    }
                })
                res.json({ newDevice, experimentValue: findExperimentKey.value });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new DeviceController;