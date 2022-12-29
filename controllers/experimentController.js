const { Experiments } = require('../models');
const { Devices } = require('../models');
class DataController {
    async getData(req, res) {
        try {
            const allExperiments = await Experiments.findAll();
            const totalDevicesByGroupA = await Devices.count({
                where: {
                    experimentId: 1,
                    newdevice: true
                }
            })
            const totalDevicesByGroupB = await Devices.count({
                where: {
                    experimentId: 2,
                    newdevice: true
                }
            })
            const totalDevicesByGroupC = await Devices.count({
                where: {
                    experimentId: 3,
                    newdevice: true
                }
            })
            const totalNewDevices = await Devices.count({
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