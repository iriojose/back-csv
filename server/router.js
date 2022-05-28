const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get('/files/data', async (req, res) =>{
    try {
        const results = await controller.getCSV(req);
        return res.status(200).json({ files:results });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
});

router.get('/files/list', async (req, res) =>{
    try {
        const files = await controller.getFilenames();
        return res.status(200).json({ files: files });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error });
    }
});

module.exports = router;
