export default function updateObjectInArray(initialArray, key, value, patch) {
    const newInitialArray = [...initialArray];
    const searchedElement = newInitialArray.find((e) => e[key] === value);
    if (!searchedElement) {
        throw new Error(`There is no obj with key ${key} and its value ${value}`);
    }
    const index = searchedElement && newInitialArray.indexOf(searchedElement);
    searchedElement[key] = patch;
    newInitialArray[index] = searchedElement;
    return newInitialArray;
}
