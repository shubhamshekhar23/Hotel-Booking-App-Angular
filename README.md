# AngularHotelBookingMap

![Project preview](docs/hotel-booking-map-angular.gif)

- This project was generated with Angular version 16.2.6.

## Development server

- First Run `npm install`
- Run `npm run start` for a dev server.
- Navigate to `http://localhost:4200/`.

## Project Features

- When the app loads, It makes a request to the backend to fetch the hotel lists (currently data is mocked)
- It automatically selects the first hotel in the fecthed list and the icon changes accordingly in the map
- When user clicks on the map icon, the list of hotels automatically scrolls and the corresponding hotel is selected
- For Mobile, As user scrolls the hotel list, the hotel gets selected automatically based on its position in the view
- For Desktop, The above feature is disabled and user has to manually clicks on the hotel to select it and the corresponding icon in the map gets updated
- When user clicks on the Book button in any hotel, That particular hotel gets selected in the background and a booking form dialog gets opened.
- When user provides its info in the form, proper validation is in its place and user gets to see the error message if he doesn't provide any info
- The request booking button is disabled until all valdiation in the form passes
- Unit Tests are added for all the components and service
