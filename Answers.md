1. What problem does the context API help solve?
    Solves the problem of `prop drilling`
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The `store` is the Apps data, the `actions` allow components to dispatch to `reducers` which then update the `store`, the `store` is the source because that's were the state/data is stored
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    `Application State` is state that will be needed to be used by multiple components, `Component State` is state that only a certain component needs, for example, a input variable
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    `redux-thunk` is a middleware, allows us to call an action that returns a function instead of an object, which dispatches to the reducers, allows to have async
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    At first i liked `Context API` but then started to like `Redux` as I noticed apps could get very large, to me `Redux` is easier to handle once the app state is bigger
