## Understanding how to use useEffect hook:

Our react component should be a pure function. A pure function should not have any sideEffect and it should give us the same result if given the same set of input

To keep component pure we should keep changes outside of the render phase.

Some examples of sideEffects can be

- storing data in local storage
- call the server to fetch/save data
- manually modify dom elements

Now, none of the situation is about rendering the component. They have nothing to do with returning some JSX markup. So, where can we implement above effects/code? That's where useEffect is used.

```
useEffect(()=>{})

With the effect hook we can tell react to execute a piece of code
**after** a component is rendered

```

useEffect runs a piece of code that changes something outside the component.

The name of this hook is a little confusing, a lot of people argue that this hook should be called afterRender.

We can not call it inside a for loop, function etc. We can only use it at the top level of our component

### Effect Dependencies

```
    useEffect(()=>{}) // runs every time

    useEffect(()=>{}, []) // runs on first render only

    useEffect(()=>{}, [a, b]) // if any of the dependencies changes, react will re-run our effect. Dependencies can be props or state of the component.
```

### Effect Cleanup

Our cleanup function can optionally return a callback function for cleanup. This is not always necessary.

Generally speaking, our cleanup function should stop or undo whatever the effect was doing.

Sometimes the code we write in useEffect does not need any clean up.

But, what if we are connecting a chat server in our useEffect, at some time we need to disconnect from our chat server. For example if the user navigates away from the chat page then we should disconnect from the chat server.

### Sending Requests To The Server Using useEffect Hook

we can use

- fetch() - implemented in all modern browsers
- axios - library

### Using Axios

Send a get request to the server
axios.get("https://jsonplaceholder.typicode.com/users");

Calling a server does not gonna happen immediatly perhaps, it is going to take half a second or longer so, axios.get() method returns a promise

### Promise

A promise is an object that holds the eventual result or failure of an asynchronous operation

All promises have a method called .then(). This method takes a callback that will be executed when the request is resolved an the data is ready.
