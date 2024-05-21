# voice123-test

### GOAL

Implement a text search functionality by using Voice123 API.

## Application setup guide.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Worklog.

### GOAL

Implement a text search functionality by using Voice123 API.

### Requirements:

1. The prototype/app must have a search input field and a search button. A
query must be executed after either hit the enter key or click on the "search"
button.
2. Show for every result:
a. Voice Actor Name. It must be a link on a new Tab/Window to the Voice
Actor profile page: VA profile link follows the next structure:
```sh
https://voice123.com/{username}
```
b. Voice Actor profile picture.
c. The first paragraph that matches the search with the searched text
highlighted.
d. An audio player for listening to the relevant sample URL.
3. Results page/component must have a results paginator that follows shared image

***Deadline: May 21, 12.01pm***
The followink links have information and notes related to my process while facing the challenge

[Challenge aditional details](https://www.notion.so/voice123-test-64de3c5fb37c495f8f6a149ce3450956?pvs=4)

### Visual Sketch:
[Sketch visuals](https://excalidraw.com/#room=3b6b19a81b4813e42882,sJ6F93Zv0ZLBbj8INXrdnA)


### Task List

Compliance:

- [x]  Create public repo
- [x]  Update readme template

Design:

- [x]  Sketch visuals
- [x]  Define components
- [x]  Define project structure
- [x]  Check endpoint structure
- [x]  Check for useful material design

Development:

- [x]  Build project structure
- [x]  Build feature components
    - [x]  voice actor canvas
    - [x]  search bar
    - [x]  pagination
- [x]  Build page
- [x]  Build interfaces
- [x]  Build service to fetch voice actors
- [x]  migrate documentation  info to README.md


## Future improvements and recommendations.

- [ ]  Highlight similarities in summary
- [ ]  Reproduce sound
- [ ]  Update Pagination - change icons for “prev/next” as the shared image
- [ ]  General tech debt