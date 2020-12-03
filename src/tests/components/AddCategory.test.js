const {shallow} = require("enzyme");
const {AddCategory} = require("../../components/AddCategory");

describe("Test en componente AddCategory", () => {
    const setCategories = () => {};

    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

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
});
