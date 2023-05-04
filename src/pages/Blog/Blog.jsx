import React from "react";
import NavBar from "../shared/Navbar/Navbar";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="px-40 mt-12 mb-40">
      <NavBar></NavBar>

      {/* Blog q&a page */}
      <div className="w-1/2 mx-auto" ref={ref}>
        <h3 className="font-extrabold text-5xl text-center">
          Question & Answer
        </h3>

        <hr className="border-t mb-16 border-gray-400 w-8/12 mx-auto" />

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Tell us the differences between uncontrolled and controlled
            components.
          </div>
          <div className="collapse-content">
            <p>
              A controlled functional component is a component that receives its
              current value and update callback via props.
              <br /> <br />
              Where, an uncontrolled functional component is a component that
              maintains its own internal state.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How to validate React props using PropTypes
          </div>
          <div className="collapse-content">
            <p>
              Basically, propTypes is used for props validation.
              <br />
              <br />
              First, we need to install the PropTypes library. Next, we need to
              import PropTypes into your component. If its done then, we need to
              define propTypes for our component. To define propTypes, we need
              to add a propTypes property to our component class and need to set
              it to an object that specifies the props and their types. Thus,
              propTypes will automatically check the propTypes of component's
              props when component is rendered. If any of the props fail
              validation, we can see a warning by console.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Tell us the difference between nodejs and express js
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              NodeJS is the package, which provides the JavaScript run-time
              environment, whereas Express is a framework that sits on top of
              NodeJS and helps us to handle requests and responses.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content">
            <p>
              In a basic concept, custom hooks offer reusability, it can be
              reused easily, which makes the code cleaner and reduces the time
              to write the code. It also enhances the rendering speed of the
              code as a custom hook does not need to be rendered again and again
              while rendering the whole code.
            </p>
          </div>
        </div>
      </div>

      {/* Converting blog page to pdf and downloading it */}
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="text-center mt-12">
            <button
              onClick={toPdf}
              className="px-5 py-4 bg-gray-900 text-white text-xl font-medium rounded hover:bg-transparent hover:border hover:text-gray-800 hover:border-gray-900 inline-flex items-center gap-1"
            >
              Download The Page
            </button>
          </div>
        )}
      </Pdf>
    </div>
  );
};

export default Blog;
