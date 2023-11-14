# Fiachna Carter Medibank Code Test

Simple application that requests and renders an alphabetical list of cats grouped by their owner's gender

Uses Vite, React and Typescript. Built using Node 18+

# Running the application

1. Clone the repository locally
1. run `npm install`
1. run `npm run dev`

The application will run at http://localhost:5173 by default

# Notes
 - I kept the styling super simple since it actually looks pretty nice and doesn't need to be super flashy
 - mocking fetch was a nuisance, since Node 18 it's no longer included as a global with jest, so I've had to add a 
 ghetto polyfill which might be better added to a pre-run file
 - components running async calls in jest using initial state need to be wrapped in an `act` call since they immediately
 execute an async call
 - the `useRequest` hook is kept super simple, I didn't want to overengineer it but it opens itself up to be extended
 easily