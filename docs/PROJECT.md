# Project Overview

## What it is

A website that catalogs every AI architecture in a browsable, filterable interface. Users can filter by tag, search by name, or browse by year.

## Architecture

- **Frontend only**: HTML + CSS + JS, no framework, no build step
- **Data**: Plain JS array in `js/data.js`, each entry has: name, year, tags, description, authors, paper link
- **Rendering**: Vanilla JS DOM manipulation in `js/app.js`
- **Styling**: Dark theme (background `#1e1e2e`), CSS variables for consistency

## Design decisions

- Separated HTML/CSS/JS for maintainability
- Dark but not too dark — `#1e1e2e` background with `#2a2a3c` cards
- Responsive grid layout, mobile-friendly
- No dependencies — just open the file

## Direction

- Progressively add more architectures
- Eventually add detail pages, sorting, and more filters
- May migrate to a framework if data grows large enough to justify it
