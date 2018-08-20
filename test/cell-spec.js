import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React, { Component } from 'react'
import Cell from '../src/Cell'

import { expect } from 'chai'

Enzyme.configure({ adapter: new Adapter() })

describe('Cell', () => {
    
    it('should be blank initially', () => {
        let cellComponent = shallow(<Cell />)
        expect(cellComponent.find('.cell').text()).to.be.equal("")
    })

    it('should display X when clicked', () => {
        let cellComponent = shallow(<Cell foo="bar" />)
        cellComponent.find(".cell").simulate("click")
        expect(cellComponent.find(".cell").text()).to.be.equal("X")
    })

})