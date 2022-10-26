import React from "react";
// import "./styles.css";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";

export default function App() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Email and Password",
            name: "Email and Password",
            content: step1Content
          },
          {
            label: "Personal Information",
            name: "Personal Information",
            content: step2Content
          },
          {
            label: "Finish",
            name: "Finish",
            content: step3Content
          }
        ]}
      />
    </div>
  );
}
