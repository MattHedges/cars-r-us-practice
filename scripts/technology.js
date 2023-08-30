import { getTechnology } from "./database.js"

const technology = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`User chose technology package ${event.target.value}`)
        }
    }
)



export const Technologies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technology.map((tech) => {
        return `<li>
            <input type="radio" name="technology" value="${tech.id}" /> ${tech.package} ${tech.includes} ${tech.price}
        </li>`  
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}