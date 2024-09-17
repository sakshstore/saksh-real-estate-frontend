# Real Estate Property Management

Welcome to the **Real Estate Property Management** project! This Vue.js application is designed to help you manage real estate properties efficiently. It features property listings, detailed views, and an interactive Google Map for easy navigation.


This is demo frontend for our pacakge  https://www.npmjs.com/package/saksh-real-estate  
 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Google Maps Integration](#google-maps-integration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/real-estate-property-management.git
   cd real-estate-property-management
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the backend:**
   Ensure you have the backend server running as described in the backend README file.

## Usage

To run the application, execute the following command:

```bash
npm run serve
```

Then, open your browser and navigate to [http://localhost:8080](http://localhost:8080) to view the application.

## Components

### PropertyList.vue

This component fetches and displays a list of properties, integrating Google Maps to show property locations.

**Data:**
- `properties`: Array of property objects fetched from the backend.
- `mapCenter`: Coordinates for the center of the Google Map.

**Methods:**
- `fetchProperties()`: Fetches the list of properties from the backend.

**Template:**
- Displays a table of properties with links to property details.
- Displays a Google Map with markers for each property.

### PropertyDetail.vue

This component displays detailed information about a single property.

**Data:**
- `property`: Object containing property details fetched from the backend.

**Methods:**
- `fetchProperty()`: Fetches the property details from the backend.

## API Endpoints

- `GET /properties`: Fetches a list of all properties.
- `GET /properties/:id`: Fetches details of a single property by ID.
- `POST /properties`: Creates a new property.
- `PATCH /properties/:id`: Updates an existing property.
- `DELETE /properties/:id`: Deletes a property by ID.

## Google Maps Integration

This project utilizes the `vue3-google-map` library for Google Maps integration. Ensure you have a valid Google Maps API key and include it in the `GoogleMap` component.

**Example:**
```html
<GoogleMap
  api-key="YOUR_GOOGLE_MAPS_API_KEY"
  style="width: 100%; height: 500px"
  :center="mapCenter"
  :zoom="15"
>
  <Marker
    v-for="property in properties"
    :key="property.propertyID"
    :options="{ position: { lat: property.latitude, lng: property.longitude } }"
  />
</GoogleMap>
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. 
