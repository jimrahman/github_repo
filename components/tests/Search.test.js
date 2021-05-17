import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Search from "../Search";

describe("Search", () => {
  describe("when the search button is clicked", () => {
    describe("and when github api returns list of repo successfully", () => {
      it("shows the list of th repo", () => {
        const { getByTestId } = render(<Search />);
        fireEvent.press(getByTestId("search-button"));
      });
    });
  });
});
