const {getGifs} = require("../../helpers/getGifs");

describe("Test on getGifs", () => {
    test("should return 10 elements", async () => {
        const gifs = await getGifs("One Punch");

        expect(gifs.length).toBe(10);
    });
});
