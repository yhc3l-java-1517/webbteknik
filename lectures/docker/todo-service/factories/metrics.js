const os = require('os');
const getMetrics = require('metrics-process');
const metrics = require('./models/metrics-redis');

const hostname = os.hostname();

const updateProcess = () => {
  getMetrics((err, data) => {
    const processInfo = {
      hostname,
      pid: process.pid,
      cpu: data.cpu.utilization,
      lag: data.lag,
      heapFree: data.mem.heapFree,
      heapUtilization: data.mem.heapUtilization,
      memUtilization: data.mem.utilization
    };
    metrics.removeProcess(processInfo);
  });
};

const removeProcess = () => {
  const processInfo = {
    hostname,
    pid: process.pid
  };
  metrics.removeProcess(processInfo);
};

setInterval(updateProcess, 30000);
process.on('uncaughtException', removeProcess);
process.on('exit', removeProcess);
