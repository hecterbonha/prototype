import {describe, it, expect} from "vitest";
import {calculate} from "$lib/utils/index";

describe("calculate the result", () => {
    it("calculate sum of 2 number", () => {
        expect(calculate(2,3)).toBe(5)
    })

    it("calculate sum of 2 value of string", () => {
        expect(calculate("2.1","3.4")).toBe(5.5)
    })

    it("calculate sum of 2 value of string and number", () => {
        expect(calculate("2",3.5)).toBe(5.5)
    })
})