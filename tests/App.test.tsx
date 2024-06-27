import React from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import App from "../src/App";

describe("App test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    expect(render(<App />)).toBeTruthy();
  });
});
