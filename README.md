# Multi-Entertainment Tracking Web

## Description

A personal tracker for books, tvseries, movies, anime and manga. The site allow users to add list of completed and ongoing shows they are watching. Such that users do not log in to multiple platform to check what shows they are left with. A better overview of everything.

### Features

- Users are able to input which episode the user has completed or indicate which platform they used to watch it on.
![Animation3](https://user-images.githubusercontent.com/78722564/118399568-60c4fb00-b690-11eb-9e7c-7f1c6ccacf94.gif)

- When searching for shows, users are able to watch the trailers first to check if it interest them.
- Users are able to leave their own reviews and comments on the shows.
![Animation5 (1)](https://user-images.githubusercontent.com/78722564/118399639-b39eb280-b690-11eb-9cc7-3765167cb464.gif)

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
