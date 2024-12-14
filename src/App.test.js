import App from "./App";
import { screen, render } from "@testing-library/react";

test("App is rendered", () => {
  render(<App />);
  const header = screen.getByText(/hello world/i);
  expect(header).toBeInTheDocument();
});
