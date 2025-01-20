import { describe, it, expect } from "vitest";
import { getRandomFact } from "../src/js/api";
import { addFavourite } from "../src/js/favourites";
import { changeRandomFact } from "../src/js/functions";





describe("Start", () => {
    it("should be declared", () => {
        expect(typeof getRandomFact).toBe('function');
    });
    it("should show a fact", () => {
        expect(getRandomFact).not.toBeNull();
    });
});
describe("Second Page", () => {
    it("should be declared", () => {
        expect(typeof addFavourite).toBe('function');
    });
    it("should add a fact", () => {
        expect(addFavourite).not.toBeNull();
    });
})
