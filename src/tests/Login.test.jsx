import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import renderer from 'react-test-renderer';

import Login from "../pages/Login";


configure({adapter: new Adapter()});


describe('Login component', () => {
    //test that login form exists
    it('Should render without an error', () => {
        expect(shallow(<Login />).find('form.login').exists()).toBe(true)
    })

    //tests that the input for Id exists
    it('renders id input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('#Id').length).toEqual(1)
    })

    //tests that the input for password exists
    it('renders password input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('#password').length).toEqual(1)
    })

    //test for change of login state on Id entry
    describe('Id input', () => {
        it('should repsond to user input and change the state of Login', () => {
            const wrapper = shallow(<Login />);
            wrapper.find('#Id').simulate('change', {target: {name: 'Id', value: '1'}});
            expect(wrapper.state('Id')).to.Equal('1');
        })
    })

    //test for change of login state on password entry
    describe('Password input', () => {
        it('should respond to user input and change state of Login', () => {
            const wrapper =shallow(<Login />);
            wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'admin'}});

            expect(wrapper.state('passwrod')).toEqual('admin');
        })
    })

    //test for if user enters incorrect data
    it('login check with wrong data',()=>{
        const wrapper = shallow(<Login/>);
        wrapper.find('#Id').simulate('change', {target: {name: 'Id', value: '1'}});
        wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'admin'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(false);
        })
        

    //test for if user enters correct data
    it('login check with right data',()=>{
        const wrapper = shallow(<Login/>);
        wrapper.find('#Id').simulate('change', {target: {name: 'Id', value: '1'}});
        wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'admin'}});
        wrapper.find('#button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(true);
        })
})
