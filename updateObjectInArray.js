export default function updateObjectInArray(initialArray, key, value, patch) {
    const newInitialArray = [...initialArray];
    const searchedElement = newInitialArray.find((e) => e[key] === value);
    const index = searchedElement && newInitialArray.indexOf(searchedElement);
    if (searchedElement !== undefined &&
        index !== undefined &&
        searchedElement !== null) {
        searchedElement[key] = patch;
        newInitialArray[index] = searchedElement;
    }
    return newInitialArray;
}
