import { getColors } from "./database.js"

const sizes = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            window.alert(`User chose color ${event.target.value}`)
        }
    }
)



export const Colors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = colors.map((color) => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color} ${color.price}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}