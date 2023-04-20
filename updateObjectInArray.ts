export default function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: string,
    value: unknown,
    patch: any
) {
    type T = keyof ObjectShape;
    const newInitialArray = [...initialArray];
    const searchedElement = newInitialArray.find((e) => e[key as T] === value);
    const index = searchedElement && newInitialArray.indexOf(searchedElement);

    if (
        searchedElement !== undefined &&
        index !== undefined &&
        searchedElement !== null
    ) {
        searchedElement[key as T] = patch;
        newInitialArray[index] = searchedElement;
    }
    return newInitialArray;
}
