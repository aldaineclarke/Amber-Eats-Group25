var faker = require('faker');

var database = { products: [] , menu:[], sides:[] };
for (var i = 1; i <= 50; i++) {
    database.products.push({
        id: i,
        sideId:Math.floor(Math.random() * 50) + 1,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?food=" + Math.floor(Math.random() * 1000),
        quantity: faker.datatype.number(),
        totalRatings:Math.floor(Math.random() * 10) + 1,
        ratingCount:Math.floor(Math.random() * 10) + 1
    })
}

for (var i = 1; i <= 20; i++) {
    database.menu.push({
        id: i,
        menu_name: faker.commerce.productName(),
        menu_description: faker.lorem.sentences(),
        menu_size:  faker.datatype.number(),
        imageUrl: "https://source.unsplash.com/1600x900/?food=" + Math.floor(Math.random() * 1000),
        cost: faker.commerce.price(),
    })
}

for (var i = 1; i <= 50; i++) {
    database.sides.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?food=" + Math.floor(Math.random() * 1000),
        quantity: faker.datatype.number(),
        totalRatings:Math.floor(Math.random() * 10) + 1,
        ratingCount:Math.floor(Math.random() * 10) + 1,
    })
}



console.log(JSON.stringify(database)); //db variable from line 3