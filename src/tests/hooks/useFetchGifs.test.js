import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe("Testing useFetchGifs", () => {
    test("should return the initial state", () => {
        // Esta función es de testing-library y se utiliza para testear hooks
        const {result} = renderHook(() => useFetchGifs("One Punch"));
        const {data, loading} = result.current;

        console.log(data, loading);

        //El arreglo de imagenes debe ser vacío
        expect(data).toEqual([]);
        // El loading debe ser true
        expect(loading).toBe(true);
    });
});
