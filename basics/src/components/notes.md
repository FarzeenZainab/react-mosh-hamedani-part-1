## Understanding the State hook

### React updates state asynchronously (not immediately)

```
    const App = () => {
          const [isVisible, setVisibility] = useState(false)

          handleClick = () => {
              setVisibility(true)
              console.log(isVisible) // result: false
          }

          return <button onClick={handleClick}>click</button>
      }

    export default App;

```

The update is not applied immediately but in the future. This is done due to performance reason. We can have more than one state update in a function. Once that function finishes executing react will then go and execute state updates all at once and then re-render the component. On the other hand if suppose we have another state update right after setVisibility and react updates the component immediately we will simply end up with too many rerenders.

### The state is actually stored outside of the component

Let's declare a local variable count set to 0

```
    const App = () => {
          const [isVisible, setVisibility] = useState(false)
          count = 0

          handleClick = () => {
              setVisibility(true)
              count++
              console.log(isVisible) // result: false
          }

          return <button onClick={handleClick}>click</button>
      }

    export default App;

```

When the function finishes execution our local variable is removed from the memory and when the component rerenders it will rest the value of count to 0 becuase it will recreate it. This is the reason react state variables are stored some where outside the component function.

### We can only use hooks at the top level of our components

```
    const App = () => {
          const [isVisible, setVisibility] = useState(false)
          const [isApproved, setApproved] = useState(false)

          handleClick = () => {
              setVisibility(true)
              count++
              console.log(isVisible) // result: false
          }

          return <button onClick={handleClick}>click</button>
      }

    export default App;

```

[isVisible, setVisibility], [isApproved, setApproved] are just local identifiers in the component. React is not aware of them. We tell react that we have to store 2 boolean values. So somewhere react is going to store these value most likely inside an array like this [false, false]. So next time react rerenders the array it is going to look in this array, grabs the first item and matches it with the current value and store inside the state variable. So react relies on the order of the items in the array so it can properly maps the values of our state variables. This is why we can not use the state hooks inside control statements, switch, loops

## Updating an array of object

Let's say we have an array of object and we want to update

    const [bugs, setBugs] = useState([
        {
            id: 1,
            title: 'Bug 1',
            fixed: false
        }
        {
            id: 2,
            title: 'Bug 2',
            fixed: false
        }
        {
            id: 3,
            title: 'Bug 3',
            fixed: true
        }

    ])

When we do state update of array, object or arr of objects, we should return a new object/array so react can pick up and update return the new state.

To update an array of object we can use the map method. map() returns a new array so we do not have to spread the prevState when updating function

setBugs(bugs.map(bug=>{bug.id === 1 ? {...bug, fixed: true} : bug}))

We donot have to create a brand new copy of each object in this array, only the object that should be modified. In this case bug with id 1
