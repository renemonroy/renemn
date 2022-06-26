import { render } from "@testing-library/react";

import UseDebouncedCallback from "./use-debounced-callback";

describe("UseDebouncedCallback", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UseDebouncedCallback />);
    expect(baseElement).toBeTruthy();
  });
});
