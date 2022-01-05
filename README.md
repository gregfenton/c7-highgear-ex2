# HighGear Exercise 2

This project shows the use of `useEffect()` for initializing a long-running process, and properly cleaning up when the component is unmounted.

`<App>` is the main component.  It provides a button that when pushed toggles the mounting/unmounting of `<FetchTime>`.

`<FetchTime>` on mount starts a long-running process (`setInterval()`) that continually fetches data from a remote API call (`/slow`).  When `<FetchTime>` is unmounted, it calls `clearInterval()`.

To run the project:

1. To start the API server, in one terminal:

   * `cd server`
   * `npm install` (only need to run the first time you use the server)
   * `npm start`

2. To start the UI, in a second terminal:

   * `cd client`
   * `npm install` (only need to run the first time you use the client)
   * `npm start` -- if prompted to start on another port, enter `y`

Your browser should now open to the UI running at `http://localhost:3001`