# ProIot

## Project overview

- This project uses `concurrently` to run the backend and frontend at the same time.
- The backend application is a simple node app that returns mocked data via websockets each ten seconds.
- The frontend application was created using `Vite` and tested using `vitest`.

## How to run

``` bash
    # execute the following command to install all dependencies before running
    npm install

    # to start the project:
    npm start

    # then Vite will display a way to access the app, eg.: ➜ Local: http://127.0.0.1:5173/
```

## How to test
``` bash
    # execute the following command to run all tests
    npm run test

```