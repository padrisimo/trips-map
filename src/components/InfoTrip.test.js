import React from "react";
import { render } from "@testing-library/react";
import InfoTrip from "./InfoTrip";
import { activeTrip as MOCK } from "../mocks/activeTrip";

describe("InforTrip", () => {
  it("renders correctly", () => {
    const { queryByTestId } = render(<InfoTrip activeTrip={MOCK} />);

    expect(queryByTestId("info-trip")).toBeInTheDocument();
  });

  it("not renders without props", () => {
    const { queryByTestId } = render(<InfoTrip />);

    expect(queryByTestId("info-trip")).toBeNull();
  });
});
