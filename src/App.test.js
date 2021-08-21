// import { render, screen } from '@testing-library/react';
// import App from './App';

function cloneArray (array){
  return [...array]
}

function tax (price) {
  return parseInt(price * 1.17)
}

test('properly clone array', () => {
 const array = [1,2,3]
 expect(cloneArray(array)).toEqual(array)
 expect(cloneArray(array)).not.toBe(array) //not the same memory address
});

test('tax calc' , () =>{
  expect(tax(100)).toBe(117)
})
