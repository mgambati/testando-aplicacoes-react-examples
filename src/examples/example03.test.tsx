import ReactDOM from "react-dom";
import { HelloWorld } from "./components/HelloWorld";

/**
 * ---------------------------------
 * Test isolation examples
 * ---------------------------------
 */

test("example 02 - jsdom - 1", () => {
  const div = document.createElement("div");

  ReactDOM.render(<HelloWorld />, div);

  document.body.appendChild(div);
  console.log(document.body.innerHTML);

  // div.remove()
});


test("example 02 - jsdom - 2", () => {
  const div = document.createElement("div");

  ReactDOM.render(<HelloWorld />, div);
  
  document.body.appendChild(div);
  console.log(document.body.innerHTML);
});
