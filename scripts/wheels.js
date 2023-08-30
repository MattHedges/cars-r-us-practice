import { getWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            window.alert(`User chose wheels package ${event.target.value}`)
        }
    }
)



export const Wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map((wheel) => {
        return `<li>
            <input type="radio" name="wheels" value="${wheel.id}" /> ${wheel.package} ${wheel.includes} ${wheel.price}
        </li>`  
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}