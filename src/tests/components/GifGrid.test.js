import {shallow} from "enzyme";
import GifGrid from "../../components/GifGrid";
import React from "react";
import {useFetchGifs} from "../../hooks/useFetchGifs";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";

//Simula cualquier llamada al useFetchGifs
jest.mock("../../hooks/useFetchGifs");

describe("Testing GifGrid", () => {
    const categ = "Cats";

    test("should return the GifGrid correctly", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={categ} />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should display the items when images are loaded with useFetchGifs", () => {
        const gifs = [
            {
                id: "ABC",
                url: "http://localhost/cualquiercosa",
                title: "Cualquier cosa"
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={categ} />);

        //Busca si existe el párrafo del loading
        expect(wrapper.find("p").exists()).toBe(false);

        //Comprueba la cantidad de gifs
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});
