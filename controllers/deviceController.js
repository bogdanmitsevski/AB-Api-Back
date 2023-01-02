const db = require('../models')
class DeviceController {
    async sendData(req, res) {
        try {
            const currentDevice = await db.devices.findOne({
                where: { uuid: req.headers['device-token'] }
            })

            if (currentDevice) {
                const findExperimentKey = await db.experiments.findOne({
                    where: {
                        id: currentDevice.experimentId
                    }
                })
                res.json({ device: currentDevice,  experimentValue: findExperimentKey.value});
            }
            else {
                const devicesCount = await db.devices.count();
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
                res.json({ device: newDevice, experimentValue: findExperimentKey.value });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new DeviceController;