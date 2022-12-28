class DataController {
    async getData(req, res) {
        try {
            res.json('Hello, getData router');
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new DataController;