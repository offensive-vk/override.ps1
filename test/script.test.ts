import { appendDataToProperty, flattenArray } from "../dist";
import {it, expect, test} from "vitest";

var obj: {first: string, last: string} = {
    first: "Madhav",
    last: " "
}
test('should append the data to the property.', () => {
    expect(appendDataToProperty(obj, "last", "Programmer"))
    console.dir(obj);

})

test('should not add anything', () => {
    expect(appendDataToProperty(obj, "first", "null"));
})

// getValue() test cases;
var arr = [5345, 4235,63, 6436, [6436,633,717,74], 64, 11, 11];
it('should return the new array', () => {
    flattenArray(arr);
})
