const {shallow} = require("enzyme");
const {AddCategory} = require("../../components/AddCategory");

describe("Test en componente AddCategory", () => {
    const setCategories = () => {};

    const wrapper = shallow(<AddCategory category={setCategories} />);

    test("should return AddCategory correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
