import { render, waitFor } from "@testing-library/react";
import { AsyncHelloWorld } from "./components/AsyncHelloWorld";

/**
 * ---------------------------------
 * waitFor and findBy
 * ---------------------------------
 */
it("example 1", async () => {
  const { getByText } = render(<AsyncHelloWorld />);

  expect(getByText(/loading/i)).toBeDefined();

  await waitFor(
    () => {
      expect(getByText(/hello world/i)).toBeDefined();
    },
    { timeout: 3000 }
  );
});

it("example 2", async () => {
  const { getByText, findByText } = render(<AsyncHelloWorld />);

  expect(getByText(/loading/i)).toBeDefined();

  expect(
    await findByText(/hello world/i, undefined, {
      timeout: 3000,
    })
  ).toBeDefined();
});
