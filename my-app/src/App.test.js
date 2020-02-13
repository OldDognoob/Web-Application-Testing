import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom";
import  App from './App';

describe('App', () => {
  test('renders an element with specific text', () => {
    //1.set up render app at the virtual DOM
    const wrapper = rtl.render(<App />);
    //2.capture the element of interest
    const element = wrapper.queryByText(/strikes/i);
      //3.assert thing in DOM
      expect(element).toBeInTheDocument();
  });
  
})