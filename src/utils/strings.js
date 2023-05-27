export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function formatToUrl(str) {
    return str.replace(new RegExp("\\ ","g"), "+").toLowerCase();
}

export function addSpaces(str) {
    return str.replace(new RegExp("\\+","g"), " ")
}