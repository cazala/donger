const dongers = require('./dongers');
const categories = Object.keys(dongers);

function getRandom(array) {
  return array[array.length * Math.random() | 0];
}

function donger(category, index) {
  const key = category || getRandom(categories);
  const list = dongers[key];
  return isNaN(index) ? getRandom(list) : list[index];
}

donger.categories = categories;
donger.dongers = dongers;

module.exports = donger; // ┗(＾0＾)┓