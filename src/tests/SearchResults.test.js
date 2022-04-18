import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    results: ["i1", "i2, i3"],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.results} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
