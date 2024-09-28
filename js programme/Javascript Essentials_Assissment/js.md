### 1.What is JavaScript? 
Ans:-
JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

### 2. What is the use of isNaN function?
Ans:-
The isNaN() function determines whether a value is NaN, first converting the value to a number if necessary. Because coercion inside the isNaN() function can be surprising, you may prefer to use Number.isNaN().

### 3. What is negative Infinity? 
Ans:-
 NEGATIVE_INFINITY is a special numeric value that is returned when an arithmetic operation or mathematical function generates a negative value greater than the largest representable number in JavaScript (i.e., more negative than -Number)

 ### 4.Which company developed JavaScript?
 Ans:-
 JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape and Eich designed JavaScript as a scripting language for use with the company's flagship web browser, Netscape Navigator.

### 5.What are undeclared and undefined variables? 
Ans:-
`*In JavaScript, undeclared and undefined variables are different in how they are treated and what they mean: `*

#### *Undeclared
A variable is undeclared if it has not been declared with a keyword like var, let, or const. Accessing an undeclared variable will throw a ReferenceError.

#### * Undefined 
A variable is undefined if it has been declared but not assigned a value. Undefined is a primitive data type that represents the absence of a value. 

#### *Null
A variable is null if it has been declared and assigned a value of null, which represents the intentional absence of a value. 

### 6. Write the code for adding new elements dynamically? 
Ans:-
Dynamic element creation in JavaScript allows you to generate new HTML elements on the get-go. Whether you need to add content to a web page based on user interactions or dynamically generate elements for a specific task, it can help enhance the flexibility and interactivity of web applications.

```
<html lang="en">
   <head>
      <title>How to dynamically create new elements in JavaScript?</title>
   </head>
   <body>
      <h3>How to dynamically create new elements in JavaScript?</h3>
      <div id="container">
      <!-- Newly created elements will be appended here -->
   </div>
   <button onclick="createNewElement()">Create Element</button>

   <script>
      function createNewElement() {
      // Create a new paragraph element
      var newParagraph = document.createElement('p');
```     
### 7. What is the difference between ViewState and SessionState?
Ans:-
**``The basic difference between these two is that the ViewState is to manage state at the client’s end, making state management easy for end-user while SessionState manages state at the server’s end, making it easy to manage content from this end too. ``**

#### *ViewState: 
It is maintained at only one level that is page-level. Changes made on a single page is not visible on other pages. Information that is gathered in view state is stored for the clients only and cannot be transferred to any other place. View state is synonymous with serializable data only.

#### *SessionState: 
It is maintained at session-level and data can be accessed across all pages in the web application. The information is stored within the server and can be accessed by any person that has access to the server where the information is stored.

### 8. What is === operator? 
Ans:-
JavaScript operators are special symbols used in scripts to perform operations on operands, such as arithmetic calculations, logical comparisons, or value assignments. It plays a crucial role in controlling the flow and processing of data within the language. 

### 9.How can the style/class of an element be changed?
Ans:-
**`` In this article, we will learn how we can change the style/class of an element. If you want to build a cool website or app then UI plays an important role. We can change, add or remove any CSS property from an HTML element on the occurrence of any event with the help of JavaScript. There are two common approaches that allow us to achieve this task. ``** 

```
document.getElementById("id").style.property = new_style
```

### 10. How to read and write a file using JavaScript? 
Ans:-
**``The fs.readFile() and rs.writeFile() methods are used to read and write of a file using javascript.``**

The file is read using the fs.readFile() function, which is an inbuilt method. This technique reads the full file into memory and stores it in a buffer. 

```fs.readFile( file_name, encoding, callback_function ) ```

The fs.writeFile() function is used to write data to a file in an asynchronous manner. If the file already exists, it will be replaced.

``` fs.writeFile( file_name, data, options, callback ) ```


### 11. What are all the looping structures in JavaScript? 
Ans:-
There are three types of loops in most programming languages: for , while , and do-while loops. The for loop is used when the number of iterations is known beforehand. The while loop is used when you don't know how many times the loop needs to execute beforehand.

### 12.What is the function of the delete operator? 
Ans:-
The delete operator removes a property from an object. If the property's value is an object and there are no more references to the object, the object held by that property is eventually released automatically.

```
const Employee = {
  firstname: 'Maria',
  lastname: 'Sanchez',
};

console.log(Employee.firstname);
// Expected output: "Maria"

delete Employee.firstname;

console.log(Employee.firstname);
// Expected output: undefined
```

### 13. What are all the types of Pop up boxes available in JavaScript? 
Ans:-
**`` JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box. ``**

#### Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed

#### Confirm Box

A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

#### Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

### 14.  What is the use of Void (0)? 
Ans:-
This is where the JavaScript:void(0) will come in handy. When you use JavaScript void 0, it will return an undefined primitive value. This will prevent the browser from opening a new or reloading the web page and allowing you to call the JavaScript through it.

### 15. How can a page be forced to load another page in JavaScript? 
Ans:-
Navigating to a new page can be done using window. location. assign() . By using assign() , the user will be able to get back to the landing page using the “back” button, as this does not change the browser's history.

### 16 . What are the disadvantages of using innerHTML in JavaScript? 
Ans:-
It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time. When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML