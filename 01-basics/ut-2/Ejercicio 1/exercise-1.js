console.log("%cWelcome to the application", "color: blue; font-size: 18px;");
console.log("%cThis is an informational message", "color: green; font-size: 16px;");
console.warn("This is a warning. Be cautious.");
console.error("Error! Something went wrong.");

const data = [
    { Nombre: "Javi", Edad: 22, Ciudad: "Málaga" },
    { Nombre: "Maricelis", Edad: 20, Ciudad: "Málaga" },
    { Nombre: "Manolo", Edad: 57, Ciudad: "Málaga" }
];

console.table(data);
