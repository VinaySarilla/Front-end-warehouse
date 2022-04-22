import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import renderer from 'react-test-renderer';
import App from '../App';


configure({adapter: new Adapter()});

it("renders without crashing", () => {
    shallow(<App />);
  });
