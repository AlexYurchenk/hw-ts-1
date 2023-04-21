export default function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: string,
    value: unknown,
    patch: any
): ObjectShape[] | never {
    type T = keyof ObjectShape;
    const newInitialArray = [...initialArray];
    const searchedElement = newInitialArray.find((e) => e[key as T] === value);
    if (!searchedElement) {
        throw new Error(
            `There is no obj with key ${key} and its value ${value}`
        );
    }
    const index = searchedElement && newInitialArray.indexOf(searchedElement);
    const updatedElement = { ...searchedElement, [key as T]: patch };
    newInitialArray[index] = updatedElement;
    return newInitialArray;
}
