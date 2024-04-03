import { appendDataToProperty, flattenArray } from "../dist";
import { it, expect, test } from "vitest";

var obj: { first: string, last: string } = {
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
