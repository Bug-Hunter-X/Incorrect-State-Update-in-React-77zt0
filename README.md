# Incorrect State Update in React

This example demonstrates a common mistake in React: directly modifying a state variable instead of using the `setState` function. This leads to unexpected behavior because React's internal state management won't detect the change and trigger a re-render.

**bug.js** contains the incorrect code. 

**bugSolution.js** shows the correct implementation.