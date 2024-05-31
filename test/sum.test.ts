import sum from "./sum";
import { it, expect, test } from "vitest";
import { describe } from "node:test";

test('returns the sum of all numbers passed to it', () => {
    expect(sum(10,20,20)).toBe(50);
})

// Returns the sum of two positive integers
it('should return the sum of two positive integers', () => {
    expect(sum(2, 3)).toBe(5);
});

// Returns the sum of multiple positive integers
it('should return the sum of multiple positive integers', () => {
    expect(sum(2, 3, 4, 5)).toBe(14);
});

// Returns undefined when passed non-numeric arguments
it('should return undefined when passed non-numeric arguments', () => {
    expect(sum(2, '3' as unknown as number))
});

// Returns 0 when no arguments are passed
it('should return 0 when no arguments are passed', () => {
    expect(sum()).toBe(0);
});