export default function loadLocally(key) {
    const jsonString = localStorage.getItem(key)
    try {
        return JSON.parse(jsonString) // parse macht aus dem JSON-String wieder ein Array und returnt diesen
    } catch (error) {
        console.log('Checkout Jerrys App.js branch to see how to throw the code into the App.js')
    }
}

// wenn man JSON-parse macht sollte man immer einen Sicherheitsmechanismus einbauen, da JSON fehleranfällig ist