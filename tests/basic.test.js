import { describe, it, expect, beforeAll, test } from "vitest";
import { getRandomFact } from "../src/js/api";
import { addFavourite } from "../src/js/favourites";

describe("Start", () => {
    it('should be declared', () => {
        expect(typeof getRandomFact).toBe('function');
    });
    it('should show a fact', () => {
        expect(getRandomFact).not.toBeNull();
    });
});

describe("Second Page", () => {
    it('should be declared', () => {
        expect(typeof addFavourite).toBe('function');
    });
    it('should add a fact', () => {
        expect(addFavourite).not.toBeNull();
    });
})

describe("API Call", () => {

    const BEFORE_ALL_TIMEOUT = 30000;
    let response = Response;
    let body;
    
    beforeAll(async () => {
        response = await fetch(
          'https://uselessfacts.jsph.pl/api/v2/facts/random',
        );
        body = response.json();
        }, BEFORE_ALL_TIMEOUT);
    
        test('should have response status 200', () => {
            expect(response.status).toBe(200);
      });
         test('should have content-type', () => {
            expect(response.headers.get('Content-Type')).toBe('application/json; charset=UTF-8');
      });
});

