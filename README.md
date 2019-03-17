# Immersive Labs Front End Technical Test

## Description

To create a small react application that fetches public information about a user from the GitHub API.

[Original Instructions](https://github.com/stonefarmer9/frontend-tech-test/blob/master/Instructions.md)

## Getting Started

```
- clone or download this repo
- run npm install in console
- run npm start in console
- visit localhost:3000 (as default, please check your settings.)
```

## Technology used
```
- JS React
- Jest testing framework
- Enzyme - testing framework for front-end testing
```
## Approach

Before approaching the problem I took the time to go through the Immersive labs tech stack. Admittedly the list included a lot of unknowns but my research told me I would likely not need all of them as they seemed too involved for the simple task given unto me. I also decided to use the testing framework enzyme as I am comfortable with it and find it makes testing any outputs to the page easy.

I wanted to Test drive this functionality as I it is a process I am fond of and I do believe in its benefits. However my attempts to deploy this approach were mixed. I understood going in that I would need a lifecycle and fetch method, therefore I did not need to test that these functions worked as they have been already by people far more skilled than I.

 This process was halted somewhat by my own lack of understanding and so I had difficulty deriving a truly good first test. This difficulty swallowed around half an hour of the 2 hour time limit. Recognising the need for progression I decided to begin spiking into the functionality I desired. After a solid 20 minutes of spiking and playing around with the github response (this was my first time using the github API and I felt the need to research and get to grips with what information is public before testing.) With 50 minutes taken I decided to work with a simple test sitting somewhere between a unit and feature test. Once implemented I began building the functions. I identified that the in built react lifecycle methods are perfect for my need and implemented the functionality using a  componentDidMount and setState to ensure the page re-rendered once the response was dealt with.

Along this journey I ran into a new problem, the data returned was not in the expected format. Expecting to be able to iterate over the parsed response, I found I could not, and spent a good 20-25 minutes debugging this issue. Managing to overcome the ability to map the data I was then able to complete my function and get all public information displaying as a list on the page.

Spending the last 20 minutes or so going over the code to ensure it was tidy, and then refactoring. After a couple of failed refactor attempts I managed to refactor some logic out of the render method.

As always, my approach was also one of function over form. With any styling left until last. Sadly I ran out of time for this test to implement anything more than the basic HTML.



## What I would do with more time

With more time available to me, or if I was to continue work on this. I would implement the following:

- Further testing, even after the fact, mocking the API call and response and testing that the associated functions operate as expected.
- More refactoring - looking at the render function there is the .map method that would be extracted out to another function or component.
- Styling - I would take the time to learn how to use CSS and its relatives to get to grips with full styling.
- Linting - I would install ESLint and make sure my code is linted thoroughly
