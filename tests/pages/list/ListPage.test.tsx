import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { ListPage } from "../../../src/pages/list/ListPage";
import { renderWithProviders } from "../../RenderWithProvider";

describe("ListPage test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    expect(renderWithProviders(<ListPage />)).toBeTruthy();
  });

  it("has title", () => {
    renderWithProviders(<ListPage />);
    expect(screen.getByTestId("task-list-title")).toBeTruthy();
  });

  it("Button exit exists", () => {
    renderWithProviders(<ListPage />);
    expect(screen.getByTestId("task-list-btn-exit")).toBeTruthy();
  });
});
