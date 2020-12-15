import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe("Testing useFetchGifs", () => {
    test("should return the initial state", async () => {
        // Esta función es de testing-library y se utiliza para testear hooks
        const {result, waitForNextUpdate} = renderHook(() =>
            useFetchGifs("One Punch")
        );
        const {data, loading} = result.current;

        await waitForNextUpdate();

        //El arreglo de imagenes debe ser vacío
        expect(data).toEqual([]);
        // El loading debe ser true
        expect(loading).toBe(true);
    });

    test("should return the array with images and the loading in false", async () => {
        // "waitForNextUpdate" indica cuando sucedió un cambio en el estado de mi custon hook, en este
        // caso en el setState dentro del useFetchGifs. Esta función retorna un Promise
        const {result, waitForNextUpdate} = renderHook(() =>
            useFetchGifs("One Punch")
        );

        await waitForNextUpdate();

        const {data, loading} = result.current;

        //El arreglo de imagenes debe tener 10 elementos
        expect(data.length).toBe(10);
        // El loading debe ser false
        expect(loading).toBe(false);
    });
});
