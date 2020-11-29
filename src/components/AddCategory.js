import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // Cuando utilizamos un elemento form, no es necesario utilizar un
    // Fragment porque el form agrupa todos los elementos
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
