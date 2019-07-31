var recipes = {
  quesadilla: ['tortilla', 'cheese'],
  omelette: ['eggs', 'cheese', 'peppers']
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key],
  return object
}
