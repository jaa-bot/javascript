console.log("%cWelcome to the application", "color: blue; font-size: 18px;");

console.log("%cThis is an informational message", "color: green; font-size: 16px;");

console.warn("This is a warning. Be cautious.");

console.error("Error! Something went wrong.");

const data = [
    { Nombre: "Juan", Edad: 25, Ciudad: "Madrid" },
    { Nombre: "María", Edad: 30, Ciudad: "Barcelona" },
    { Nombre: "Luis", Edad: 22, Ciudad: "Valencia" }
];

console.table(data);
