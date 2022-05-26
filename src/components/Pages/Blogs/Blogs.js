import React from "react";

const Blogs = () => {
  return (
    <div className="space-y-10 mb-24">
      <div className=" bg-emerald-50 mx-6 rounded p-8">
        <h1 className="text-2xl font-semibold ">
          1. How will you improve the performance of a React Application?
        </h1>
        <p className="text-lg text-justify mx-4 p-6">
          When we create a rendered component, React creates a virtual DOM for
          its element tree in the component. Now, whenever the state of the
          component changes, React recreates the virtual DOM tree and compares
          the result with the previous render. It then only updates the changed
          element in the actual DOM. This process is called diffing. React uses
          the concept of a virtual DOM to minimize the performance cost of
          re-rendering a webpage because the actual DOM is expensive to
          manipulate. Keeping the component state local where it is necessary.
          Memorizing the react component to prevent unnecessary re-rendering.
          Memoization is an optimization strategy that caches a
          component-rendered operation, saves the result in memory, and returns
          the cached result for the same input. Code-splitting is another
          important optimization technique for a React application. By default,
          when a React application renders in a browser, a “bundle” file
          containing the entire application code loads and serves to users at
          once. This file generates by merging all the code files needed to make
          a web application work. Imagine we have an application where we render
          several rows of items on a page. Whether or not any of the items
          display in the browser viewport, they render in the DOM and may affect
          the performance of our application. To optimize the performance an
          application that consists of several images, we can avoid rendering
          all of the images at once to improve the page load time.
        </p>
      </div>
      <div className="bg-emerald-50 mx-6 rounded p-8">
        <h1 className="text-2xl font-semibold  ">
          2. What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="text-lg text-justify mx-4 p-6">
          The state is an object that holds information about a certain
          component. Plain JavaScript functions don't have the ability to store
          information. The code within them executes and "dissapears" once the
          execution is finished. But thanks to state, React functional
          components can store information even after execution. When we need a
          component to store or "remember" something, or to act in a different
          way depending on the environment, state is what we need to make it
          work this way. There are four main types of state Local state, Global
          state, Server state and URL state. Local state is most often managed
          in React using the useState hook. Global state is data we manage
          across multiple components. Like the authenticated user in our app.
          Data that comes from an external server that must be integrated with
          our UI state. Data that exists on our URLs, including the pathname and
          query parameters.
        </p>
      </div>
      <div className="bg-emerald-50 mx-6 rounded p-8">
        <h1 className="text-2xl font-semibold  ">
          3. How does prototypical inheritance work?
        </h1>
        <p className="text-lg text-justify mx-4 p-6">
          When we read a property from object, and it’s missing, JavaScript
          automatically takes it from the prototype. In programming, this is
          called “prototypal inheritance”. Prototypical inheritance refers to
          the ability to access object properties from another object. We use a
          JavaScript prototype to add new properties and methods to an existing
          object constructor. We can then essentially tell our JS code to
          inherit properties from a prototype. Prototypical inheritance allows
          us to reuse the properties or methods from one JavaScript object to
          another through a reference pointer function.
        </p>
      </div>
      <div className="bg-emerald-50 mx-6 rounded p-8">
        <h1 className="text-2xl font-semibold  ">
          4. Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts ?
        </h1>
        <p className="text-lg text-justify mx-4 p-6">
          Hook is a function that lets you access state without using a class
          component. Hooks are a more natural way of thinking about React. It
          helps us to write cleaner code and we donot need to use the class
          component.We write like this const [state, setState] =
          useState(initialState);. The useState hook The reason we dont update
          the state is that if we update it directly it will not change the
          state immediately.Then it will create pending state and to access it
          later it will give only the present value.Thats why we dont set the
          data directly to a state.
        </p>
      </div>
      <div className="bg-emerald-50 mx-6 rounded p-8">
        <h1 className="text-2xl font-semibold  ">
          5. You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p className="text-lg text-justify mx-4 p-6">
          The filter method is a powerful tool for filtering arrays in
          JavaScript. We can use the filter method to filter the array of
          products by name. We know that filter method has several components to
          its syntax. avaScript filter() does not affect the initial array. It
          applies the callback function to every element to create a new
          collection with filtered elements. The JavaScript array filter
          function is closely related to map, push and length methods. These
          functions will give you more control over your arrays and contribute
          to the production of shorter code.
        </p>
      </div>
      <div className="bg-emerald-50 mx-6 rounded p-8 ">
        <h1 className="text-2xl font-semibold  ">
          6. What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-lg text-justify mx-4 p-6">
          Unit test involves testing individual components of the software
          program or application. The main purpose behind this is to check that
          all the individual parts are working as intended. A unit is known as
          the smallest possible component of software that can be tested. The
          main objective of unit testing is to ensure that each individual part
          is working well and as it’s supposed to work. The entire system will
          only be able to work well if the individual parts are working well.
          Unit testing is performed by the software developers themselves.
          Sometimes, independent software testers also perform these tests. The
          workflow of unit testing in software testing usually follows this
          framework: Create the test cases, Review or rework,, Baseline Execute
          test cases. Unit test makes the process agile, maintain the quality of
          code, finds software bugs easily,for design,debuggin and also it
          reduces the costs.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
