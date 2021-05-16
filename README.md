# Multi-Entertainment Tracking Web

## Description

A personal tracker for books, tvseries, movies, anime and manga. The site allow users to add list of completed and ongoing shows they are watching. Such that users do not log in to multiple platform to check what shows they are left with. A better overview of everything.

### Features

- When searching for shows, users are able to watch the trailers first to check if it interest them.
- Users are able to input which episode the user has completed or indicate which platform they used to watch it on.
- Users are able to leave their own reviews and comments on the shows.

## Technologies used

ReactJS, React hooks and NodeJS
API used: Jikan, TMDB and youtube APIs

## Install

To run this, NodeJS and npm are required

```
npm install
```

Next, create a .env file and put in your secret keys for TMDB and youtube

```
REACT_APP_TMDB_KEY=<YOUR SECRET KEY>
REACT_APP_YOUTUBE_KEY=<YOUR SECRET KEY>
```

After completed, just do a npm run

## Future improvements

Moving this to a database so the data can be stored in server instead on local storage.
