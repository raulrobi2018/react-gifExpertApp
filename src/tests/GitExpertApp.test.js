import GifExpertApp from "../GifExpertApp";
import React from "react";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";
import {shallow} from "enzyme";

describe("GifExpertApp testing", () => {
    test("should display GigExpertApp correctly", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should display the list of categories (GifGrid) correctly and the length must be equal", () => {
        const categories = ["One Punch", "Dragon Ball"];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={categories} />
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
