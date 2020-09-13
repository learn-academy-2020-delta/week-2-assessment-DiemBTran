# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer:
    super() is used as a method within a class. This allows the class to access the variables and data from the other class that was super()'d in.
  Researched answer:
    super() is a method that is used in class inheritance. After a child class is extended from its parent class, super() is evoked within its constructor() to  inherit the attributes from its parent. You can also use super() to call on methods from the parent class.



2. What is the DOM? What is the virtual DOM?

  Your answer:
    The DOM is something we can manpipulate as coders to change the layout of the webpage.
  Researched answer:
    DOM stands for Document Object Mode. It's a programming interface that treats HTML or XML documents like a tree structure where each node acts as an object in the document. Manipulating the DOM directly can be cumbersome because the page must render after every change. The the virtual DOM is React's local copy of the HTML DOM. Having a virtual DOM allows React to do its computations while skipping the real DOM's operations.



3. What is a higher-order function?

  Your answer:
    A higher-order function is a function that uses a callback function within its own lines of code. Callback functions include .map(), .filter(), and .forEach(). These built-in methods are useful to reduce code. They perform some sort of iteration, so you don't have to create for-loops and save some memory in run-time and production. 
  Researched answer:
    A higher-order function is a function that uses a callback function within its function body or returns a function, as opposed to first order functions that do neither. Callback functions include .map(), .filter(), and .forEach(). These built-in methods are useful to reduce code. They perform some sort of iteration, so you don't have to create for-loops and save some memory and efficiency in run-time and production. 


4. What is JSX?

  Your answer:
    JSX is a the bridge between HTML and Javascript. JSX looks like HTML, but it works within JavaScript folders. It's used in React projects, and you can find them within the return in the render in the component definition. One difference that it has from HTML is that it uses "className" instead of "class".

  Researched answer:
    JSX is a syntax extension that the bridge between HTML and Javascript. JSX looks like HTML, but it works within JavaScript folders. It's used in React projects, and you can find them within the return in the render in the component definition. WIthout JSX, you would have to create long, nested codeblocks to return any HTML-like code. One difference that it has from HTML is that it uses "className" instead of "class".


5. What is React?

  Your answer:
    React is an opensource JavaScript library created by Facebook in 2015. It allows coders to create components that come together to form full user-interfaces. In order to use React within a JavaSctipt file, you need to import React libraries and default files. There is a shortcut to create a new React file using Yarn (also created by Facebook) in your terminal.
    
  Researched answer:
    React is an opensource JavaScript library created by Facebook in 2015. It allows coders to create components that come together to form full user-interfaces. Compononents are either functional or class-based. React makes app-development very efficient with its use of components and virtual DOM. In order to use React within a JavaSctipt file, you need to import React libraries and default files. There is a shortcut to create a new React file using Yarn (also created by Facebook) in your terminal.


6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer:
    Yarn is a technology created by Facebook. It manages and compiles files (like how yarn would stitch things together) together in your compiler. When you run '$ yarn' in a directory, your operating system will download Yarn dependencies so that you can initialize Yarn actiions in that directory. You only need to run '$ yarn' once in your directory to retrieve all the Yarn files and dependencies. Once you run '$ yarn', you can string components together to compile React apps.

  Researched answer:
    Yarn is a package manager created by Facebook in order to replace JavaSript Node Package Manager, which is the default method for managing packages in Node.js. Yarn was created to fix the shortcomings of npr. It manages and compiles files (like how yarn would stitch things together) together in your compiler. When you run '$ yarn' in a directory, your operating system will download Yarn dependencies so that you can initialize Yarn actiions in that directory. You only need to run '$ yarn' once in your directory to retrieve all the Yarn files and dependencies. Once you run '$ yarn', you can string components together to compile React apps.


7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer:
    localhost:3000 is your local server, or your operating system. We use localhost:3000 to "locally host", which means that it runs your file on a web browser directly from your computer. This is important in the development process because you want to be able to test your code as much as possible before needing to finally push it onto a public domain. When you locally host, you can look at the console to debug portions of your code and you can also preview what the user-interface will look like.

  Researched answer:
    localhost:3000 is a loopback to your local server, or your operating system. It's used instead of the hostname for the computer. We use localhost:3000 to "locally host", which means that it runs your file on a web browser directly from your computer. This is important in the development process because you want to be able to test your code as much as possible before needing to finally push it onto a public domain. When you locally host, you can look at the console to debug portions of your code and you can also preview what the user-interface will look like.


8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer:
    An iterable is something that repeats itself. You can find iteration functionality in for-loops and callback functions suck as .map() and .filter(). You use iteration to cycle through a data set until a certain condition is met. By using iteration, you are saving yourself time as a programmer from having to access data one value at a time. By utilizing the program's abiility to iterate, the programmer saves time from having to type extra code and memory as well.

  Researched answer:
    An iterable is something that repeats itself. An iterator is an object that defines a sequence and potentially a return once the iteration ends.You can find iteration functionality in for-loops and callback functions suck as .map() and .filter(). You use iteration to cycle through a data set until a certain condition is met. By using iteration, you are saving yourself time as a programmer from having to access data one value at a time. By utilizing the program's abiility to iterate, the programmer saves time from having to type extra code and memory as well.


9. STRETCH: What is hoisting in JavaScript?

  Your answer:
    I don't know what hoisting is in JavaScript, but I can find out for you.

  Researched answer:
    By default, Javascript hoists by moving declarations to the top of the run. Even if a function or variable is declared before it is defined or assigned, JavasScript will try to run by prioritizing the declaration's runtime before the definition/assignment. This is so that your code can run even if you misplace the declaration.


10. STRETCH: What are closures in JavaScript?

  Your answer:
    I don't know what closures are in JavaScript, but I will look into it immediately.

  Researched answer:
    Javascript variables either have a local or global scope, which affects where they can be called. Global variables can be made local or private with the use of closures.  If a global and local variable have the same name, they are on different scopes so they are not the same and do not affect each other.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- React state:
    State is an object, so it has a key:value pair that holds a component's dyanimc data. Components in React either have state or they don't. setState() is a method used to change the value of state as this.state should never be manipulated directly.
- React props:
    Props are used to pass information, such as data and behavior, to another component. They can only be passed in one direction. 
- React lifecycle methods:
    React components have a lifecycle of three main phases: mounting, updating, and unmounting. The constructor is a part of the mounting phase. Rendering happpens during the mounting and updating phase. 
- API:
    API stands for Application Programming Interface. It allows two applicationst o talk to each other. It's a messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.
- e.preventDefault()
    This is a method that cancels the event so that the default action of that event will not occur.
- DOM events
    HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
