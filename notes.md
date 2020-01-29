# Day 1

Server side routing - load and flash feature. Typical way sites were created for a long time. 
You go to the page you create a network req to the server, and you load in everything. html, js, script tags,  css, page. This is mostly done with the `<a>` tag.

Client side routing- you're not seeing a flash-- first time page loads one time, creates empty div and react takes over. and then load/updates in component used at a time. It is alot faster. This is mostly done with the `<component>` tag

# Day 2

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

Not exclusive to react router. AFTER render props with spread operator


Accompanying resources - 
https://reacttraining.com/react-router/web/api/match

https://www.notion.so/cglecturenotes/React-Router-II-with-Hooks-7abaacdb367442ee9cb953259ffe1054