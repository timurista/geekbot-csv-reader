const csvFilePath = './example/example-geekbot.csv';
const csv = require('csvtojson');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(JSON.stringify(parseObject(jsonObj), undefined, 2));
  })

const parseObject = obj => {
  const CONFIDENCE_STRING = 'How confident are you that we can meet our goals this sprint?';

  return obj.map(x => ({
    date: x.date,
    [CONFIDENCE_STRING]: x[CONFIDENCE_STRING].split('-')[0].trim()
  })).filter(x => x.date.trim().length && /\d+/g.test(x[CONFIDENCE_STRING]))
}