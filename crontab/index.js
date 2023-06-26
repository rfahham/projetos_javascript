const cron = require("node-cron");

cron.schedule("* * * * * *", () => console.log("Executando a tarefa a cada segundo"));

