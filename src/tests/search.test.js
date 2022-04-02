import React from "react";
import Render, { render } from "@testing-library/react";
import Search from "../components/search";

describe('Search', () => {
  const { asFragment } = render(<Search />);

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
