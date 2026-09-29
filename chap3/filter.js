const filterItems = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40}
]

const filteredItems = filterItems.filter((item) => {
    return item.name === "jon"
});