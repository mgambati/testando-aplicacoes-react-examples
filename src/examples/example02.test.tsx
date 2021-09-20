import ReactDOM from "react-dom";
import { Counter } from "./components/Counter";

/**
 * ---------------------------------
 * Events with JSDOM
 * ---------------------------------
 */

test("example 02 - jsdom - 1", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  ReactDOM.render(<Counter />, div);

  const countResult = document.getElementById("count-result");

  expect(countResult?.innerHTML).toEqual("Count: 0");
});

test("example 02 - jsdom - 2", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  ReactDOM.render(<Counter />, div);

  const [increment, decrement] = document.body.querySelectorAll("button")!!;
  const countResult = document.getElementById("count-result");

  
  const incrementClickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    button: 0,
  });
  
  increment.dispatchEvent(incrementClickEvent);
  expect(countResult?.innerHTML).toEqual("Count: 1");

  const decrementClickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    button: 0,
  });
  decrement.dispatchEvent(decrementClickEvent);
  expect(countResult?.innerHTML).toEqual("Count: 0");
});
