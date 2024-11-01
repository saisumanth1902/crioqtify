// src/helpers/helpers.js
export function truncate(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
