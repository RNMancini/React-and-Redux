const express = require("express");
const router = express.Router();
const mainWorker = require('../../workerx/mainWorkers');

router.get("/", (req, res) => res.json({status: "main route"}));

router.get('/start', (req, res) => {
    if (mainWorker.running) {
return res.json({status: "worker already running"});
}
    mainWorker.start();
    res.json({status: "started worker"});
});

router.get('/start', (req, res) => {
    if(!mainWorker.running) {
        return res.json({status:"Worker not running"});
    }
    mainWorker.start();
    res.json({status: "started worker"});
});
