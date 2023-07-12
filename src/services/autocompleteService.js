// Please note that I do not have an billing account for google places map I do not wish to open and use in this project as it is money mattter.
// import axios from 'axios';

// const API_KEY = '<MY_GOOGLE_PLACES_API_KEY>';

// export const searchPlacesApi = (searchText) => {
//   const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&key=${API_KEY}`;
//   return axios.get(url);
// };

export const searchPlacesApi = (searchText) => {
  // Simulate an API call delay
  const delay = Math.random() * 1000 + 500;
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResults = generateMockResults(searchText);
      resolve({ data: { predictions: mockResults } });
    }, delay);
  });
};

const generateMockResults = (searchText) => {
  const mockResults = [
    {
      description: "New York, NY, USA",
      place_id: "1",
      types: ["locality", "political"],
      matched_substrings: [{ offset: 0, length: searchText.length }],
      structured_formatting: {
        main_text: "New York",
        secondary_text: "NY, USA",
      },
    },
    {
      description: "New York City, NY, USA",
      place_id: "2",
      types: ["locality", "political"],
      matched_substrings: [{ offset: 0, length: searchText.length }],
      structured_formatting: {
        main_text: "New York City",
        secondary_text: "NY, USA",
      },
    },
    // Add more mock results as needed
  ];

  return mockResults.filter((result) =>
    result.description.toLowerCase().includes(searchText.toLowerCase())
  );
};
