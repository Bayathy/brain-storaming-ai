import { userEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe("ui/button", () => {
  test("[role='button']", () => {
    render(<Button>test</Button>);
    expect(screen.getByRole("button", { name: "test" })).toBeInTheDocument();
  });

  test("test clicked", async () => {
    const clickEvent = jest.fn();
    render(<Button onClick={clickEvent}>test</Button>);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(clickEvent).toHaveBeenCalled();
  });
});
