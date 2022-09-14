// Importing the react library
import React from "react";
// The storiesOf API is used to display stories in storybook
import { storiesOf } from "@storybook/react";
// Importing our react component
import Welcome from "../../components/Welcome";
// Displaying the component
storiesOf("Welcome", module).add("Welcome component", () => (
  <Welcome name="Harsha"></Welcome>
));