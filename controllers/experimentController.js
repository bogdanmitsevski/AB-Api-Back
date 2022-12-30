const db = require('../models');
class DataController {
    async getData(req, res) {
        try {
            const allExperiments = await db.experiments.findAll();
            const totalDevicesByGroupA = await db.devices.count({
                where: {
                    experimentId: 1,
                    newdevice: true
                }
            })
            const totalDevicesByGroupB = await db.devices.count({
                where: {
                    experimentId: 2,
                    newdevice: true
                }
            })
            const totalDevicesByGroupC = await db.devices.count({
                where: {
                    experimentId: 3,
                    newdevice: true
                }
            })
            const totalNewDevices = await db.devices.count({
                where: { newdevice: true }
            })
            res.json({ totalDevicesByGroupA, totalDevicesByGroupB, totalDevicesByGroupC, allExperiments, totalNewDevices });
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new DataController;