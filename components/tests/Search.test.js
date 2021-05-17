import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Search from "../Search";
import nock from "nock";

describe("Search", () => {
  describe("when the search button is clicked", () => {
    describe("and when github api returns list of repo successfully", () => {
      it("shows the list of th repo", async () => {
        let stubbedGithubResponse = {
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
        nock("https://api.github.com")
          .get(
            "/search/repositories?q=&page=1&per_page=10&sort=stargazers_count"
          )
          .reply(200, stubbedGithubResponse);

        const { getByTestId, findByText } = render(<Search />);
        fireEvent.press(getByTestId("search-button"));

        expect(await findByText("Name: A test name")).toBeTruthy();
      });
    });
  });
});
