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
    enhancement: 19
}
it('should restore durability to 100', () => {
    expect(enhancer.repair(item)).toEqual({...item, durability: 100})
})

it('should increase enhancement by 1 if less than 20', () => {
    expect(enhancer.succeed(item)).toEqual({...item, enhancement: +1})
})