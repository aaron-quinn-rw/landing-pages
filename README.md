# RotoWire PPC Landing Pages

This the code that powers the landing pages on TryRotowire.com.

## About the tech

This a Vue 3 app with Vue Router 4 -- powered by Vite.

## Sports Covered

So far, just MLB and NFL.

## Pages

To look at all the different pages for each sport, look at these files: `/src/router/sections/[sport name].js`.

## How To Edit Landing Page Content

The landing page content is controlled by two types of files:

1. `/src/helpers/[sport]/get-defaults.js`<br>
   This file controls the default content for all landing pages for the sport.

2. `/src/views/[sport]/[Landing Page].vue`<br>
   This page controls any customization of the landing page content that varies from the defaults set in the file above.

## How To Add A New Sport

1. Create a new folder in `/src/helpers/` and make copies of all the files from an existing sport. Then just adjust the content of those files to fit the sport you're creating.

2. Create a new file in `/src/router/sections/`. Just follow the same pattern as the existing sports.

3. Create a new folder in `/src/views/`. Follow the pattern set by the existing sports here as well.