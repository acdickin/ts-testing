import * as React from 'react';
import Counter from './Counter'
import {shallow} from 'enzyme'

describe('Counter component',()=>{
  it('starts with a count of 0',()=>{
    const wrapper = shallow(<Counter/>)
    const countState =wrapper.state().counter
    expect(countState).toEqual(0)
  })
})
