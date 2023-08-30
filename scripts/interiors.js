import { getInterior } from "./database.js"

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)



export const Interiors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiors.map((interior) => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.material} ${interior.price}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}