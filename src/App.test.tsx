import { render, fireEvent } from "@testing-library/react";
import { App } from "./App";

test("heading of App", () => {
    const result = render(<App />);
    const heading = result.getByRole("heading");

    expect(heading).toHaveTextContent("Hello World");
});

test("button of App", () => {
    const result = render(<App />);
    const button = result.getByRole("button");

    expect(button).toHaveTextContent("1");

    fireEvent.click(button);

    expect(button).toHaveTextContent("2");
});
