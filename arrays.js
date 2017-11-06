var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(my_array, my_element) {
  return [my_element, ...my_array]
}

function destructivelyAddElementToBeginningOfArray(my_array, my_element) {
  return my_array.unshift(my_element)
}

function addElementToEndOfArray(my_array, my_element) {
  return [...my_array, my_element]
}

function destructivelyAddElementToEndOfArray(my_array, my_element) {
  return my_array.unshift(my_element)
}