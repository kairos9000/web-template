import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

test("heading of App", () => {
    const result = render(<App />);
    const heading = result.getByRole("heading");

    expect(heading).toHaveTextContent("Hello World");
});

test("button of App", async () => {
    const user = userEvent.setup();
    const result = render(<App />);
    const button = result.getByRole("button");

    expect(button).toHaveTextContent("1");

    await user.click(button);

    expect(button).toHaveTextContent("2");
});
