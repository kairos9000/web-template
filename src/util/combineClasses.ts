export function combineClasses(...classes: (string | null | undefined | boolean)[]) {
    let result = "";

    for (const className of classes) {
        if (className) {
            if (result.length !== 0) {
                result += " ";
            }
            result += className;
        }
    }

    return result;
}
