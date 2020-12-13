import React, {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2)
            setCategories((cats) => [inputValue, ...cats]);
        setInputValue("");
    };

    return (
        // Cuando utilizamos un elemento form, no es necesario utilizar un
        // Fragment porque el form agrupa todos los elementos
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

//Establece setCategories como requiered
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
