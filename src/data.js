const celestialBodies = [
    {
        name: "Sun",
        location: "Solar System",
        diameter: "1.39 million km",
        mass: "1.989 × 10^30 kg",
        distanceFromEarth: "149.6 million km",
        size: "Medium",
        apparentMagnitude: "-26.74",
        constellation: "N/A"
    },
    {
        name: "Moon",
        location: "Earth",
        diameter: "3,474 km",
        mass: "7.342 × 10^22 kg",
        distanceFromEarth: "384,400 km",
        size: "Small",
        apparentMagnitude: "-12.74",
        constellation: "N/A"
    },
    {
        name: "Mars",
        location: "Solar System",
        diameter: "6,779 km",
        mass: "6.39 × 10^23 kg",
        distanceFromEarth: "54.6 million km",
        size: "Medium",
        apparentMagnitude: "-2.91",
        constellation: "N/A"
    },
    {
        name: "Alpha Centauri",
        location: "Milky Way Galaxy",
        diameter: "Unknown",
        mass: "Unknown",
        distanceFromEarth: "4.37 light-years",
        size: "Unknown",
        apparentMagnitude: "0.27",
        constellation: "Centaurus"
    }
];

const celestialBodiesJSON = JSON.stringify(celestialBodies);

export default celestialBodiesJSON;