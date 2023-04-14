import type {ImageWithLocation} from "@/types/geoTypes";

const randomLocations = (() => {
    const usedImages = new Set();
    const usedLocations = new Set();
    const locations = [] as ImageWithLocation[];
    let nextId = 1;

    // Define an array of 50 unique sample locations and images
    const sampleLocations: {lat: number, lng: number, coordinates: [number, number]}[] = [
        { lat: 40.7128, lng: -74.0060, coordinates: [40.7128, -74.0060] },
        { lat: 51.5074, lng: -0.1278, coordinates: [51.5074, -0.1278] },
        { lat: 48.8566, lng: 2.3522, coordinates: [48.8566, 2.3522] },
        { lat: 52.5200, lng: 13.4050, coordinates: [52.5200, 13.4050] },
        { lat: 41.9028, lng: 12.4964, coordinates: [41.9028, 12.4964] },
        { lat: 37.7749, lng: -25.4194, coordinates: [37.7749, -25.4194] },
        { lat: 34.0522, lng: -86.2437, coordinates: [34.0522, -86.2437] },
        { lat: 40.4168, lng: -3.7038, coordinates: [40.4168, -3.7038] },
        { lat: 35.6895, lng: 68.6917, coordinates: [35.6895, 68.6917] },
        { lat: 55.7558, lng: 37.6173, coordinates: [55.7558, 37.6173] },
        { lat: 59.3293, lng: 18.0686, coordinates: [59.3293, 18.0686] },
        { lat: 50.8503, lng: 4.3517, coordinates: [50.8503, 4.3517] },
        { lat: 48.2082, lng: 16.3738, coordinates: [48.2082, 16.3738] },
        { lat: 60.1699, lng: 24.9384, coordinates: [60.1699, 24.9384] },
        { lat: 45.4642, lng: 9.1895, coordinates: [45.4642, 9.1895] },
        { lat: 52.2297, lng: 21.0122, coordinates: [52.2297, 21.0122] },
        { lat: 44.4268, lng: 26.1025, coordinates: [44.4268, 26.1025] },
        { lat: 38.7223, lng: -9.1393, coordinates: [38.7223, -9.1393] },
        { lat: 38.7072, lng: -9.1355, coordinates: [38.7072, -9.1355] },
        { lat: 75.8092, lng: -8.3556, coordinates: [75.8092, -8.3556] },
        // add more locations as needed
    ];

    // Define a function that generates a random image URL
    const getRandomImage = (): string => {
        let randomImage;
        do {
            randomImage = `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 1000)}`;
        } while (usedImages.has(randomImage));
        usedImages.add(randomImage);
        return randomImage;
    };

    // Define a function that generates a random location
    const getRandomLocation = (): {lat: number, lng: number, coordinates: [number, number]} => {
        let randomLocation;
        do {
            randomLocation = sampleLocations[Math.floor(Math.random() * sampleLocations.length)];
        } while (usedLocations.has(`${randomLocation.lat},${randomLocation.lng},${randomLocation.coordinates}`));
        usedLocations.add(`${randomLocation.lat},${randomLocation.lng},${randomLocation.coordinates}`);
        return randomLocation;
    };

    // Generate 50 random locations with images and IDs
    for (let i = 0; i < 20; i++) {
        const location = getRandomLocation();
        const image = getRandomImage();
        locations.push({
            id: nextId + 1,
            lat: location.lat,
            lng: location.lng,
            coordinates: location.coordinates,
            image,
        });
    }

    // Define a function that returns a random location from the list
    const getLocationsWithImages = (): ImageWithLocation[] => {
        return locations;
    };

    return {
        getRandomImage,
        getLocationsWithImages,
    };
})();

export default randomLocations;
