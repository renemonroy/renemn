import { render } from "@testing-library/react";

import UseResizeObserver from "./use-resize-observer";

describe("UseResizeObserver", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UseResizeObserver />);
    expect(baseElement).toBeTruthy();
  });
});
