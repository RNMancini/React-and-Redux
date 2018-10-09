const CronJob = require('cron').CronJob;

const mainWorker = new CronJob('1*****', function() {
    console.log("you will see this message each second in the console");
}, 
null, 
false, 
"America/New_York"
);

module.exports = mainWorker;
