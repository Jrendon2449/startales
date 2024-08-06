const celestialBodies = [
    {
        name: "Sun",
        distanceFromEarth: "149.6 million km",
        apparentMagnitude: "-26.74",
        type: "Star"
    },
    {
        name: "Moon",
        distanceFromEarth: "384,400 km",
        apparentMagnitude: "-12.74",
        type: "Moon"
    },
    {
        name: "Mars",
        distanceFromEarth: "54.6 million km",
        apparentMagnitude: "-2.91",
        type: "Planet"
    },
    {
        name: "Alpha Centauri",
        distanceFromEarth: "4.37 light-years",
        apparentMagnitude: "0.27",
        type: "Star"
    },
    // Add more celestial bodies here to reach the desired count
    // Example: Planets
    {
        name: "Mercury",
        distanceFromEarth: "77.3 million km",
        apparentMagnitude: "-0.42",
        type: "Planet"
    },
    {
        name: "Venus",
        distanceFromEarth: "38.2 million km",
        apparentMagnitude: "-4.40",
        type: "Planet"
    },
    {
        name: "Jupiter",
        distanceFromEarth: "628.7 million km",
        apparentMagnitude: "-2.94",
        type: "Planet"
    },
    {
        name: "Saturn",
        distanceFromEarth: "1.2 billion km",
        apparentMagnitude: "0.46",
        type: "Planet"
    },
    {
        name: "Uranus",
        distanceFromEarth: "2.9 billion km",
        apparentMagnitude: "5.32",
        type: "Planet"
    },
    {
        name: "Neptune",
        distanceFromEarth: "4.4 billion km",
        apparentMagnitude: "7.78",
        type: "Planet"
    },
    // Example: Stars
    {
        name: "Sirius",
        distanceFromEarth: "8.6 light-years",
        apparentMagnitude: "-1.46",
        type: "Star"
    },
    {
        name: "Proxima Centauri",
        distanceFromEarth: "4.24 light-years",
        apparentMagnitude: "11.05",
        type: "Star"
    },
    // Example: Galaxies/Nebulae
    {
        name: "Andromeda Galaxy",
        distanceFromEarth: "2.537 million light-years",
        apparentMagnitude: "3.44",
        type: "Galaxy/Nebula"
    },
    {
        name: "Whirlpool Galaxy",
        distanceFromEarth: "23.05 million light-years",
        apparentMagnitude: "8.4",
        type: "Galaxy/Nebula"
    },
    // Add more celestial bodies here to reach the desired count
];

const celestialBodiesJSON = JSON.stringify(celestialBodies);

export default celestialBodiesJSON;