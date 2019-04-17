const enhancer = require('./enhancer.js');
// test away!

//uncomment to check if yarn test works -- works
// function honest() {
//     return true;
// }

// test('an honest function should aways tell the truth', () => {
//         expect(honest()).toBeTruthy()
//     })

//checking if function repair works 
//toBe does not work but toEqual works
const item = {
    name: 'Dragon Blade',
    durability: 50,
    enhancement: 14
}

//test for repair function -- working
it('should restore durability to 100', () => {
    expect(enhancer.repair(item)).toEqual({...item, durability: 100})
})

// test for succeed function  -- working 
it('should increase enhancement by 1 if less than 20', () => {
    expect(enhancer.succeed(item)).toEqual({...item, enhancement: item.enhancement+1})
})

// test for fail function -- working
it('should decrease durability by 5 if enhancement is  less than 15', () => {
    expect(enhancer.fail(item)).toEqual({...item, durability: 45})
})

it('should decrease durability by 10 if enhancement is 15 or more', () => {
    expect(enhancer.fail({name:'Pole', durability: 30, enhancement: 15})).toEqual({name:'Pole', durability: 20, enhancement: 15})
})

it('should decrease durability by 10 and enhancement by 1 if enhancement is more than 16', () => {
    expect(enhancer.fail({name:'sword', durability: 30, enhancement: 18})).toEqual({name:'sword', durability: 20, enhancement: 17})
})

