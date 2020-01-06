module.exports = {
  delay: 50, // delay in ms between sending requests
  domain: 'kith.com',
  timeout: 5000,
  thresholds: { // times in ms
    good: 3000, // less than this is good
    bad: 5000 // greater than this is bad
  }
};
