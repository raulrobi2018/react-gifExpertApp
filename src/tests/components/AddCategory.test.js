import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";
import React from "react";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";

describe("Test en componente AddCategory", () => {
    const setCategories = jest.fn();

    // Acordarse que cuando modificamos el wrapper, hay que declararlo con let para que pueda mutarse
    let wrapper;

    beforeEach(() => {
        // Esta función limpia cualquier mock o simulación de algo que hayamos hecho antes
        jest.clearAllMocks();
        // Vuelvo a inicializar el componente original
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test("should return AddCategory correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should change the input text", () => {
        const input = wrapper.find("input");
        /* El segundo argumento tendrá el valor del event recibido en la función
        handleInputChange */
        const value = "Hola mundo";
        input.simulate("change", {target: {value}});

        expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test("should not show the information onSubmit", () => {
        wrapper.find("form").simulate("submit", {preventDefault: () => {}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test("should call the setCategories and clear the input text", () => {
        const value = "Hola mundo";
        // Simulates the input change
        wrapper.find("input").simulate("change", {target: {value}});
        // Simulates the submit form
        wrapper.find("form").simulate("submit", {preventDefault: () => {}});
        // Checks the setCategories call
        expect(setCategories).toHaveBeenCalled();
        // Checks if the setCategories was called 1 time
        expect(setCategories).toHaveBeenCalledTimes(1);
        // Checks if the setCategories was called with a function
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // Checks if the input value is empty
        expect(wrapper.find("input").prop("value")).toBe("");
    });
});
