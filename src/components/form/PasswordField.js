import React from "react";
//import "./styles.css";

export default function App() {
  const [meter, setMeter] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: password.match(eightCharsOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;

  return (
    <>
      <div class="relative z-0 w-1/3 mx-auto mt-20">
        <input
          name="password"
          type="password"
          id="password"
          className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onFocus={() => setMeter(true)}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label
          for="password"
          className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {meter && (
          <div>
            <div className="password-strength-meter"></div>
            <div>
              {passwordStrength < 5 && "Must contain "}
              {!passwordTracker.uppercase && "uppercase, "}
              {!passwordTracker.lowercase && "lowercase, "}
              {!passwordTracker.specialChar && "special character, "}
              {!passwordTracker.number && "number, "}
              {!passwordTracker.eightCharsOrGreater &&
                "eight characters or more"}
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          input {
            padding: 0.5rem;
            
            border: 1px solid grey;
            max-width: 50%;
            width: 100%;
          }
          .password-strength-meter {
            height: 0.3rem;
            background-color: lightgrey;
            border-radius: 3px;
            margin: 0.5rem 0;
          }

          .password-strength-meter::before {
            content: "";
            background-color: ${[
              "red",
              "orange",
              "#03a2cc",
              "#03a2cc",
              "#0ce052",
            ][passwordStrength - 1] || ""};
            height: 100%;
            width: ${(passwordStrength / 5) * 100}%;
            display: block;
            border-radius: 3px;
            transition: width 0.2s;
          }
        `}
      </style>
    </>
  );
}
