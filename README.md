# Caro Hive Front End

[Caro Hive Backend](https://github.com/An-Be/CaroHive-backend)

## `Technologies`
- React
  - react router dom 
- Redux Toolkit
  - RTK Query
- Stripe
- Strapi
- Tailwindcss
- Daisy UI
- Sass
- 
## `Get set up`
- Make sure you are in correct directory
- ```npm install```
- add a ```.env```
  - ```.env``` will need environment variables from Strapi
- run ```npm start`` to get app running on ```localhost:3000```

## `Features`
- Landing page with Heros
- About us Page
- Login/Registration - authentication done through Strapi
- Shop page with all items listed
- Single Item page to view more info on item and add to cart
- Redux Store
  - cart slice
  - user slice
  - api - holding RTK query code to fetch data from Strapi
 
## `Additional features to work on`
- Filtering on Shop page
- User profile
  - To include User information
  - Orders submitted
  - update user info
