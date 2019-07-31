var recipes = {
  quesadilla: ['tortilla', 'cheese'],
  omelette: ['eggs', 'cheese', 'peppers']
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, { [key]: value})
}
