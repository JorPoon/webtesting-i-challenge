module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
let newItem = {
  ...item
}
if (item.enhancement < 20) {
   newItem = {
    ...item,
    enhancement: +1
  }
} else {
  console.log('Enhancement level is already level 20')
}
  return newItem  ;
}

function fail(item) {
  return { ...item };
}

//accepts an item object and restores durability to 100
function repair(item) {
  //console.log(item);
  let newItem = {
    ...item,
    durability: 100
  }
  // let {name, durability, enhancement} = item;

  // durability = 100;
  
  //console.log(item)
  return newItem;
}

function get(item) {
  return { ...item };
}
