import ReactDOM from "react-dom";
import { HelloWorld } from "./components/HelloWorld";

/**
 * ---------------------------------
 * Basic Examples with JSDOM
 * ---------------------------------
 */
test("example 01 - jsdom - 1", () => {
  const div = document.createElement("div");
  
  document.body.appendChild(div);

  expect(document.body.innerHTML).toEqual('<div></div>')
});

// test("example 01 - jsdom - 2", () => {
//   const div = document.createElement("div");

//   ReactDOM.render(<HelloWorld />, div);
  
//   document.body.appendChild(div);
//   expect(document.body.innerHTML).toEqual('<div><div><h1>Hello World</h1></div></div>')
// });
