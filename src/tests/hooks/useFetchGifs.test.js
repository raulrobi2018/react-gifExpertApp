import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe("Testing useFetchGifs", () => {
    test("should return the initial state", () => {
        // Esta función es de testing-library y se utiliza para testear hooks
        const {res} = renderHook(() => useFetchGifs("One Punch"));
        const {data, loading} = res.current;

        console.log(data, loading);
    });
});
