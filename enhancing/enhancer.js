module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  return { ...item };
}

function fail(item) {
  return { ...item };
}

//accepts an item object and restores durability to 100
function repair(item) {
  

  return { ...item };
}

function get(item) {
  return { ...item };
}
