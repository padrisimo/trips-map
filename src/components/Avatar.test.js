import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Avatar from "./Avatar";

const pic =
  "https://avatars2.githubusercontent.com/u/15703165?s=460&u=d08f78e7dd9f1f4dc3e06376cf282173af644c6f&v=4";

describe("Avatar", () => {
  it("renders correctly", () => {
    const { queryByTestId } = render(<Avatar />);

    expect(queryByTestId("avatar-wrap")).toBeTruthy();
  });

  it("shows default witouth image prop", () => {
    const { queryByTestId } = render(<Avatar />);

    expect(queryByTestId("avatar-initial")).toBeTruthy();
  });

  it("links to users profile", () => {
    const { queryByTestId } = render(
      <Avatar img={pic} link="https://github.com/padrisimo" />
    );

    expect(queryByTestId("avatar-link")).toHaveAttribute(
      "href",
      "https://github.com/padrisimo"
    );
  });
});
