# WEB103 Project 1 - Earthy Eating

Submitted by: Samir Hassan

About this web app: Welcome to Earthy Eating, a web app that helps users explore and learn about various fruits and vegetables. The app provides detailed information on each produce item, including its category (fruit or vegetable), calories per 100g, seasonality, taste profile, nutritional value, and price range (cheap, fair, or expensive). This app is designed to give users a deeper understanding of the nutritional benefits of different produce, and help them make informed dietary choices.

Time spent: 2 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app displays a title**
- [X] **The web app displays at least five list items, each with at least three attributes (such as title, text, and image url)**
- [X] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  -[X] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [X] **The web app serves an appropriate 404 page when no matching route is defined**
- [X] **The web app is appropriately styled using Picocss**

The following **optional** features are implemented:

- [X] The web app displays items in a unique format, such as cards rather than lists

## Video Walkthrough

Here's a walkthrough of the implemented required features:

[Video Walkthrough](https://www.loom.com/share/2d2ebf472db248a4bbae9bb9abde9a17?sid=eeb06296-5b2d-480e-b89e-5cfab6c4c887)

Video created with Loom

## Notes

I encountered two challenges/roadblocks when working on this project.
1. I wanted the detailed produce page to be styled in a similar manner to the home page. However, this wasn't working and it was styling with essentially no styling. I realized it's because I was referencing the style sheet using ./ when I should've been using ../ The stylesheet was one directory up and since I wasn't referencing it correctly, it wasn't taking in the styling for it.
2. Initially, I was setting up a 404 error whenever the user would visit a page that wasn't at / The logic was that the user is visiting a page other than the home page and therefore we'll give them a 404 error and ask them to return to home page. This didn't work though when the user was visiting the detailed produce page as the route was /produce/produceId. To fix this, I created a handleRouting function that would check if the user was either at the home / or the produce /produce/. If not, then we'd give them a 404 error.

## License

Copyright 2024 Samir Hassan

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.