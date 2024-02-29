import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store/store";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
