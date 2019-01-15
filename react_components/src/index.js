import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        time={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        time={faker.date.weekday()}
        content={faker.lorem.sentence()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// Creating components each time:

// 1. Isolate duplicated JSX
// 2. What is the purpose of that JSX code? Name it.
// 3. Create new file for this component; should have same name
// 4. Create new component in new file; paste JSX intoi t
// 5. Set up the plumbing with 'props'
