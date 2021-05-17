import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Search from "../Search";
import nock from "nock";

describe("Search", () => {
  describe("when the search button is clicked", () => {
    describe("and when github api returns list of repo successfully", () => {
      const stubbedGithubResponse = {
        items: [
          {
            id: 15971461,
            full_name: "A test name",
          },
          {
            id: 137040717,
            full_name: "Name is not important",
          },
        ],
      };

      it("shows the list of the repo", async () => {
        nock("https://api.github.com")
          .get(
            "/search/repositories?q=a-great-query&page=1&per_page=10&sort=stargazers_count"
          )
          .reply(200, stubbedGithubResponse);

        const { getByTestId, findByText, getByPlaceholderText } = render(
          <Search />
        );
        fireEvent.changeText(getByPlaceholderText("Search"), "a-great-query");
        fireEvent.press(getByTestId("search-button"));

        expect(await findByText("Name: A test name")).toBeTruthy();
        expect(await findByText("Name: Name is not important")).toBeTruthy();
      });
    });
  });
});
