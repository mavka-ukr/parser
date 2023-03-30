export function title(line) {
    return line.substring(0, 1).toUpperCase() + line.substring(1);
}

export function extractStringValue(value) {
    if (value.startsWith('"""')) {
        return value.substring(3, value.length - 3);
    }

    return value.substring(1, value.length - 1);
}
