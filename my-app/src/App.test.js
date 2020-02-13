import React from 'react';
import * as rtl from '@testing-library/react';
import  App from './App';

test('renders learn react link', () => {
  const { getByText } = rtl.render(<App />);
  const TestingElement = getByText(/Testing Title/i);
  expect(TestingElement).toBeInTheDocument();
});


describe('App', () => {
  it('renders a header Baseball App', () =>{
    //1.set up render app at the virtual Dom
    const wrapper=rtl.render(<App />);
    //2.capture the element of interest
    const elementWithBaseballApp = wrapper.getByText(/Baseball App/i);
    //3.assert thing in DOM
      expect(elementWithBaseballApp).toBeInTheDocument()
  })
  it('renders a increase strike by 1 when button is clicked and decrease than 2',()=>{
    //1.set up render app at the virtual DOM
    const wrapper=rtl.render(<App />)
    //2.capture the element of interest
    const element
  })
})