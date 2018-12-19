// const csvFilePath = './example/example-geekbot.csv';
const csv = require('csvtojson');
const fs = require('fs');

export const getTeamConfidenceFromStr = (csvStr) => {
  return csv()
    .fromString(csvStr)
    .then((jsonObj) => {
      return parseObject(jsonObj);
    })
}

export const getTeamConfidenceFromFile = (csvFile) => {

  csv()
    .fromFile(csvFile)
    .then((jsonObj) => {
      return parseObject(jsonObj);
    })
}

export const parseObject = obj => {
  const CONFIDENCE_STRING = 'How confident are you that we can meet our goals this sprint?';

  console.log(obj)
  return obj.filter(x => /\d+/g.test(x[CONFIDENCE_STRING])).map(x => ({
    date: x.date,
    [CONFIDENCE_STRING]: x[CONFIDENCE_STRING].split('-')[0].trim()
  })).filter(x => x.date.trim().length && /\d+/g.test(x[CONFIDENCE_STRING]))
}