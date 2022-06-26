import { render } from "@testing-library/react";

import OneChart from "./one-chart";

describe("OneChart", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<OneChart />);
    expect(baseElement).toBeTruthy();
  });
});
