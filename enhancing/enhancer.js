module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
let newItem = {}
if (item.enhancement < 20) {
   newItem = {
    ...item,
    enhancement: item.enhancement +1
  }
} else {
  newItem = {...item}
}
  return newItem  ;
}

function fail(item) {
  let newItem = {}

  if (item.enhancement < 15) {
    newItem = {
      ...item,
      durability: item.durability - 5
    }
 } else if (item.enhancement >= 15 ) {
    newItem = {
    ...item,
      durability: item.durability - 10
    }
 }
 
 if(item.enhancement > 16 ) {
    newItem = {
     ...item,
     durability: item.durability - 10,
     enhancement: item.enhancement -1
    }
 }

  return newItem;
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
