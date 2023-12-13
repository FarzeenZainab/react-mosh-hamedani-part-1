## Understanding how to use useEffect hook:

Our react component should be a pure function. A pure function should not have any sideEffect and it should give us the same result if given the same set of input

To keep component pure we should keep changes outside of the render phase.

Some examples of sideEffects can be

- storing data in local storage
- call the server to fetch/save data
- manually modify dom elements

Now, none of the situation is about rendering the component. They have nothing to do with returning some JSX markup. So, where can we implement above effects/code? That's where useEffect is used.

``
useEffect(()=>{})

With the effect hook we can tell react to execute a piece of code **after** a component is rendered

``

useEffect runs a piece of code that changes something outside the component

The name of this hook is a little confusing, a lot of people argue that this hook should be called afterRender.

We can not call it inside a for loop, function etc. We can only use it at the top level of our component
