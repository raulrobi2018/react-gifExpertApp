import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";
import React from "react";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";

describe("Testing GifGridItem", () => {
    test("Should return GifGridItem correctly", () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });
});
