import {shallow} from "enzyme";
import GifGrid from "../../components/GifGrid";
import React from "react";
import {useFetchGifs} from "../../hooks/useFetchGifs";

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
        expect(wrapper).toMatchSnapshot();
    });
});
