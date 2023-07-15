import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as Stories from "./menu.stories";

const { Default } = composeStories(Stories);

describe("feature/menu", () => {
  test("メニューが全部表示される", () => {
    render(<Default />);
    expect(screen.getAllByRole("listitem").length).toBe(4);
  });
});
