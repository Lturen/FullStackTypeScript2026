const employees = [
    { name: "tim", id: 1 },
    { name: "cindy", id: 2 },
    { name: "rob", id: 3 },
]

const employeeNames = employees.map((employee) => {
return `<div>${employee.name}</div>`
});