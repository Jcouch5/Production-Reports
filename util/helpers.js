let averageSpeed = 0.0;
let uptimePer = 0.0;
let speedPer = 0.0;
let qualityPer = 0.0;

module.exports = {
  format_date: (date) => {
    if (typeof date === 'string') {
      const dateArr = date.split('-');
      const year = dateArr[0];
      const month = dateArr[1];
      const day = dateArr[2];
      return `${month}/${day}/${year}`;
    }
    return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`;
  },
  format_date2: (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  calculate_average_speed: (total_cuts, uptime) => {
    averageSpeed = total_cuts / uptime;
    return `${averageSpeed.toFixed(2)}`;
  },
  calculate_uptime: (oee_mins) => {
    uptimePer = (averageSpeed / oee_mins) * 100;
    return `${uptimePer.toFixed(2)}%`;
  },
  calculate_speed: (max_speed) => {
    speedPer = (averageSpeed / max_speed) * 100;
    return `${speedPer.toFixed(2)}%`;
  },
  calculate_quality: (total_waste) => {
    qualityPer = 100 - total_waste;
    return `${qualityPer.toFixed(2)}%`;
  },
  calculate_oee: () => {
    oee = (uptimePer / 100) * (speedPer / 100) * (qualityPer / 100) * 100;
    if (oee > 100) {
      return 0;
    }
    return `${oee.toFixed(2)}%`;
  },
};
