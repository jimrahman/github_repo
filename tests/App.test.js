import App from "../App";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Sanity description", () => {
  it("Sanity test", () => {
    expect(true).toBe(true);
  });
});

describe("App", () => {
  it("renders serach bar", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("search-bar")).toBeTruthy();
  });
});
