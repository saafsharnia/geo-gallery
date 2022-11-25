export interface GeoLocationsType {
    type: string,
    coordinates: [number, number]
}

export interface GeoJSONType {
    id: number,
    type: string,
    name: string,
    geometry: GeoLocationsType
}