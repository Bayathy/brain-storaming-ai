import { render, screen } from "@testing-library/react";

import { Button } from ".";

test("[role='button']", () => {
  render(<Button>test</Button>);
  expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
});
