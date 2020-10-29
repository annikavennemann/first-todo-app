export default function getToDos() {
    return fetch('/toDos') // hier bekommen wir ein Promise zurück - Proxy mit http://localhost:4000 - port in package.json ergänzt
    .then(res => res.json()) // Datenstring der zurückkommt soll direkt in JS-Daten umgewandelt werden
}