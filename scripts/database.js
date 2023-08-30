const database = {
    colors: [
        { id: 1, color: "Silver" , price: 250},
        { id: 2, color: "Midnight Blue", price: 500},
        { id: 3, color: "Firebrick Red", price: 750},
        { id: 4, color: "Spring Green", price: 0}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric", price: 350 },
        {id: 2, material: "Charcoal Fabric", price: 400 },
        {id: 3, material: "White Leather", price: 550 },
        {id: 4, material: "Black Leather", price: 700 }
    ],
    technologies: [
        { id: 1, package: "Basic", includes: "basic sound system", price: 1000},
        { id: 2, package: "Navigation", includes: "integrated navigation controls", price: 2000},
        { id: 3, package: "Visibility", includes: "side and rear cameras", price: 2500},
        { id: 4, package: "Ultra", includes:"integrated navigation controls and side and rear cameras", price: 4500}
    ],
    wheels: [
        {id: 1, type: "17-inch Pair Radial", price: 650},
        {id: 2, type: "17-inch Pair Radial Black", price: 750},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 850},
        {id: 4, type: "18-inch Pair Spoke Black", price: 950},
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setColor = () => {
    return database.orderBuilder.colorId = id
}

export const setInterior = () => {
    return database.orderBuilder.interiorId = id
}

export const setTechnology = () => {
    return database.orderBuilder.technologyId = id
}

export const setWheels = () => {
    return database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}