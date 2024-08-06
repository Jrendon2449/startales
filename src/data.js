const celestialBodies = [
    // Existing celestial bodies...
    {
        name: "Beta Aquarii",
        distanceFromEarth: "541 light-years",
        apparentMagnitude: "2.89",
        type: "Star"
    },
    // Add more celestial bodies here
    // Example:
    {
        name: "Alpha Orionis",
        distanceFromEarth: "643 light-years",
        apparentMagnitude: "-1.46",
        type: "Star"
    },
    {
        name: "Gamma Crucis",
        distanceFromEarth: "88.6 light-years",
        apparentMagnitude: "1.63",
        type: "Star"
    },
    // Add more celestial bodies here
];

const celestialBodiesJSON = JSON.stringify(celestialBodies);

export default celestialBodiesJSON;
