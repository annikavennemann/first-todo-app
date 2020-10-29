export default function loadLocally(key) {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString) // parse macht aus dem JSON-String wieder ein Array und returnt diesen
}