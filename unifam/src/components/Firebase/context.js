import React from "react";

// creates two components.The FirebaseContext.Provider component is used to provide a Firebase instance once at the top-level of your
// React component tree, which we will do in this section;  and the FirebaseContext.Consumer component is used to retrieve the Firebase
// instance if it is needed in the React component.
const FirebaseContext = React.createContext(null);

// HOC
export const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

// The Firebase Context from the Firebase module (folder) is used to provide a Firebase instance to your entire application in the src/index.js file.
export default FirebaseContext;
