component props = passes component only component={component}

render props = pass an anonomous function who's responsibility to return component to which we want mounted. 
Declaring route when you have some data and you want to pass that into your component.  

BEFORE
```<Route render={(props) => (
  <MyComponent 
    someProp={someData} 
    someOtherProp={moreData} 
    match={props.match}
    history={props.history}
    location={props.location}
  />
)} />
```

AFTER
```
<Route render={(props) => (
  <MyComponent 
    {...props}
    someProp={someData} 
    someOtherProp={moreData} 
  />
)} />
```

Not exclusive to react router. AFTER render props with spred operator


Accompanying resources - 
https://reacttraining.com/react-router/web/api/match

https://www.notion.so/cglecturenotes/React-Router-II-with-Hooks-7abaacdb367442ee9cb953259ffe1054