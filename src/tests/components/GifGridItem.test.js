import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";
import React from "react";

//Para que me de la ayuda de funciones hago esta importación
import "@testing-library/jest-dom";

describe("Testing GifGridItem", () => {
            const title = "Title";
            const url = "https://localhost/algo.jpg";
            const wrapper = shallow( < GifGridItem title = { title }
                url = { url }
                />);

                test("Should return GifGridItem correctly", () => {
                    expect(wrapper).toMatchSnapshot();
                });

                test('Should have a p element with the title', () => {
                    const p = wrapper.find('p');
                    expect(p.text().trim()).toBe(title);
                });

                test('the img element should have the url and alt attribute as the props', () => {
                    const img = wrapper.find('img');
                    expect(img.prop('src')).toBe(url);
                    expect(img.prop('alt')).toBe(title);
                });

                test('should have the animate__bounce class', () => {
                    const div = wrapper.find('div');
                    expect(div.prop('className').includes('animate__bounce')).toBe(true);
                });

            });