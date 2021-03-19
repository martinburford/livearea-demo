// import React from "react";

// Configuration
import { viewports } from "./configuration";

// Storybook decorators
// import { addDecorator } from "@storybook/react";

// Styles
import "../src/scss/app.scss";

// addDecorator((story) => (
//   <Provider store={store}>
//     <MemoryRouter initialEntries={["/"]}>
//       {story()}
//     </MemoryRouter>
//   </Provider>
// ));

export const parameters = {
  viewport: {
    defaultViewport: "iPhone X",
    viewports
  },
}