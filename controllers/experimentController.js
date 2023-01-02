const db = require('../models');
class DataController {
    async getData(req, res) {
        try {
            const allExperiments = await db.experiments.findAll();
            const totalDevicesByGroupA = await db.devices.count({
                where: {
                    experimentId: 1,
                }
            })
            const totalDevicesByGroupB = await db.devices.count({
                where: {
                    experimentId: 2,
                }
            })
            const totalDevicesByGroupC = await db.devices.count({
                where: {
                    experimentId: 3,
                }
            })
            const totalNewDevices = await db.devices.count();
            res.json({ totalDevicesByGroupA, totalDevicesByGroupB, totalDevicesByGroupC, allExperiments, totalNewDevices });
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new DataController;