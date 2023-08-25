# Bakery Front-End

## Tech Stack:

- React.js
- [Next.js](https://nextjs.org/) is a framework for react. It gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript suppor, smart bundling, route pre-fetching, and more. No config needed. It does routing, lazy loading, server side rendering.
- The [Apollo](https://www.apollographql.com/) Data Graph Platform. Simplify app development by combining APIs, databases, and microservices into a single data graph that you can query with GraphQL.
  - apollo-upload-client
  - withApollo - Allows us to crawl every component to look for available queries
- [Styled Components](https://styled-components.com/) - Use ES6 and CSS to style your app.
- [React NProgress](https://www.npmjs.com/package/react-nprogress) is a slim progress bar for Ajax applications so we can let our user know that somethig is happening when they send a request to the API.
- [downshift](https://www.npmjs.com/package/downshift) library will take care of search functionality including autocomplete, state and dropdown component.
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce) method of Function in `lodash` is used to create a <strong>debounced</strong> function which delays the given func until after the stated wait time in milliseconds have passed since the last time this debounced function was called.
- [Stripe](https://stripe.com/) - Payments infrastructure for the internet.
- [Stripe test cards](https://stripe.com/docs/testing) to test our stripe payment method || 4242 4242 4242 4242 ex.date: 02/22 cvc: 222 zip: 22222. With error: 4000 0084 0000 1280 zip: 2222 error: "Your postal code is incomplete."

## Getting Started:

- Clone or fork the repo
- Refresh dependencies

```
npm install
```

- Start server on localhost:7777

```
npm run dev
```

Clear cache: Press Cmd + Shift + P, Type command Clear Editor History, Press Enter.

### Backend

[Backend](https://github.com/SandraCoburn/graphql-backend) `tech stack:` GraphQl, Keystone, MongoDB, Typescript
