import { shallow } from "enzyme";
import React from "react";
import Button from "./index";

describe("button component", () => {
  it("renders as a <button>.", () => {
    const wrapper = shallow(<Button text="12345" />);
    expect(wrapper.is("button")).toEqual(true);
  });
});
