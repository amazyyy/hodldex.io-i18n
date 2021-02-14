const fs = require('fs')
const path = require('path')
const i18nRoot = '..'

const srcKey = process.env.srcKey
const toFile = process.env.toFile
const srcFile = process.env.srcFile || 'en.json'
const srcJSON = require(path.resolve(__dirname, i18nRoot, srcFile))

function ref(obj, str) {
  return str.split('.').reduce(function (o, x) {
    return o[x]
  }, obj)
}

function smartlyOverwrite(obj, val) {
  const newObj = {
    ...val,
    ...obj
  }
  const validateKeys = Object.keys(val)
  Object.keys(newObj).forEach((k) => {
    if (validateKeys.indexOf(k) < 0) {
      delete newObj[k]
    }
  })
  return newObj
}

function set(obj, str, val) {
  str = str.split('.')
  while (str.length > 1) obj = obj[str.shift()]
  const k = str[0]
  return (obj[str.shift()] = smartlyOverwrite(obj[k], val))
}

const resourceObj = ref(srcJSON, srcKey)

const toI18nFiles =
  toFile === 'all'
    ? fs
        .readdirSync(path.resolve(__dirname, i18nRoot))
        .filter((f) => f !== 'en.json')
        .filter((f) => f.includes('.json'))
    : [toFile]
const allDestinationFilesWithPaths = toI18nFiles.map((f) =>
  path.resolve(__dirname, i18nRoot, f)
)

const promiseArr = []

allDestinationFilesWithPaths.forEach((filePath) => {
  const json = require(filePath)
  set(json, srcKey, resourceObj)
  console.log(`ALTER ${srcKey} IN ${filePath}`)
  promiseArr.push(fs.writeFileSync(filePath, JSON.stringify(json, null, 2)))
})
Promise.all(promiseArr).then(() => console.log('done'))
