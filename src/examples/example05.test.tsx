import { render, waitFor } from "@testing-library/react";
import { Foo } from "./components/Foo";

/**
 * ---------------------------------
 * MSW examples
 * ---------------------------------
 */

it("should fetch foo", async () => {
  const { getByText } = render(<Foo />);

  expect(getByText(/foo/i)).toHaveTextContent("Foo");

  await waitFor(async () => {
    expect(getByText(/foo/i)).toHaveTextContent("Foo Bar");
  });
});
