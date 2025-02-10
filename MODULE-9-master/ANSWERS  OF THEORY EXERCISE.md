#  <U> (Module-9) React - Components, State, Props.</U>

#### QUESTION-1  What is React.js? How is it different from other JavaScript frameworks and libraries?

##### ANSWER : 

REACT.JS : React is a popular javaScriptt library for building user interfaces, particularly for single-page applications. it was developed and is maintained by meta.

 It stands out from other JavaScript frameworks and libraries due to a few key features

 - virtual DOM
 - component-Based Architecture
 - JSX
 - large and Active Community

so its different from other JavaScript frameworks and libraries because of its unique approach to building user interfaces.


#### QUESTION-2 Explain the core principles of React such as the virtual DOM and component-based architecture. 

##### ANSWER : 

DOM :  react maintains a lightweight copy of the actual DOM in memory, called the Virtual DOM. 

When data changes, react updates this virtual copy first. by comparing the old and new virtual representations, react identifies only the necessary changes in the actual DOM.

COMPONET-BASED ARCHITECTURE  : react encourages breaking down UIs into reusable, self-contained components. Each component manages its own state and logic, making code more modular, organized, and easier to maintain. This promotes code reusability and simplifies development and testing.


#### QUESTION-3 What are the advantages of using React.js in web development?

##### ANSWER : 

- efficient and fast
- easy to Learn and use
- large and Active cmmmmunity
- Reusable code
- scalability
- seo friendly
_____________________________________

# JSX (JavaScript XML)

#### QUESTION-1 What is JSX in React.js? Why is it used?

##### ANSWER : 

 JSX : JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files .

 ITS USE :

readability: Makes React code more readable and easier to understand.
developer Experience: Improves the way UI structures are defined.
error Handling: Provides better error messages.
Integration: Seamlessly embeds JavaScript expressions within HTML-like code.

#### QUESTION-2 How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

##### ANSWER : 

JSX : HTML like syntax within JavaScript.

Regular JS : Uses JavaScript objects to create and manipulate DOM. so it's diffrent. 

Yes, you can write JavaScript inside JSX using curly braces {}.

#### QUESTION-3 Discuss the importance of using curly braces {} in JSX expressions.

ANSWER :



- Embedding JavaScript: Including JavaScript code within JSX (e.g., variables, functions, conditions) 

- Dynamic Content: Rendering dynamic content based on data changes.

- Event Handling: Passing functions as event handlers for HTML element

 -- EXAMPLE :


 ```JS

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>; 
}

```

_____________________________

# Components (Functional & Class Components)


#### QUESTION-1 What are components in React? Explain the difference between functional components and class components. 

##### ANSWER : 

COMPONENTS : Reusable pieces of code that represent UI elements or parts of an application. 

- FUNCTIONAL COMPONENTS : 

A simple Javascript function that accepts props as input and returns JSX

initially stateless, but can now manage state using React Hooks.

generally simpler and more concise.

limited lifecycle hooks available, but can now use Hooks for more complex lifecycle management (e.g., useEffect).

- CLASS COMPONENTS : 

a JavaScript class that extends React.Component.

manages internal state using the this.state object.

can be more complex due to the use of this, constructors, and lifecycle methods.

access to a full range of lifecycle methods (e.g., componentDidMount, componentDidUpdate).


#### QUESTION-2  How do you pass data to a component using props? 

##### ANSWER : 

######  We are doing this in three ways : 

1. Define the Prop in the Child Component :

EXAMPLE : 

```JS

function Welcome(props) {
  return <h1>HI!, {props.name}</h1>;
}

``` 


2. Pass the Prop from the Parent Component :

EXAMPLE :  

```JS 

function App() {
  return (
    <div>
      <Welcome name="RAJ" />
      <Welcome name="PATEL" />
    </div>
  );
}

```



3. Access the Prop in the Child Component :

EXAMPLE : 

```JS

function Welcome(props) {
  return <h1>HI!, {props.name}</h1>;
}

```

#### QUESTION-3 What is the role of render() in class components?

##### ANSWER :

Defining the UI : It describes what the component should look like on the screen by returning JSX.

Accessing data: It accesses and uses props and state to determine the component's output.

Controlling output: It controls the structure, content, and appearance of the component's UI.

_______________________________________________

# Props and State

#### QUESTION-1 What are props in React.js? How are props different from state?

##### ANSWER : 

 PROPS : Props are read-only properties passed from a parent component to a child component in React. 

 ###### DIFFERENT : 

 - PROPS : 

1. Passed from parent components to child components.   
2. read-only within the child component.
3. to  pass data and configuration information from parent to child.

- STATE :

1. managed internally within a component.   
2. can be modified by the component itself.
3. to store and manage data that can change over time within a component. 


#### QUESTION-2  Explain the concept of state in React and how it is used to manage component data.

##### ANSWER :

  State in React is an object that holds dynamic data and determines a component's behavior and rendering. It allows components to store, update, and manage data without reloading the page.

State is managed using the useState hook in functional components:

const [count, setCount] = useState(0);  


#### QUESTION-3  Why is this.setState() used in class components, and how does it work?

##### ANSWER : 

this.setState() is used in React class components to update the component's state and trigger a re-render. It merges the new state with the existing state asynchronously. Directly modifying this.state does not trigger a re-render, so setState().....













