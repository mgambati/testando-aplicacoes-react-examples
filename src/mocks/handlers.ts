import { rest } from "msw";

export const handlers = [
  rest.get("/foo", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        foo: "Bar",
      })
    );
  }),
];
