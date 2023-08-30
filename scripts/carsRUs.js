import { Colors } from "./colors";
import { Technologies } from "./technology";
import { Wheels } from "./wheels";
import { Interiors } from "./interiors";
import { Orders } from "./orders";
import { addCustomOrder } from "./database";

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target

        if (itemClicked.id.startsWith("orderButton")){
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1> Cars-R-Us </h1>

        <article class="choices">
            <section class="choices_colors options"
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices_technology options"
                <h2>Sizes</h2>
                ${Technologies()}
            </section>
            <section class="wheels options"
                <h2>Styles</h2>
                ${Wheels()}
            </section>
            <section class="interiors options"
                <h2>Styles</h2>
                ${Interiors()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2> Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

