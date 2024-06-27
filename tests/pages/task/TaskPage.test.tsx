import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { TaskPage } from "../../../src/pages/task/TaskPage";
import { renderWithProviders } from "../../RenderWithProvider";

describe("TaskPage test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    expect(renderWithProviders(<TaskPage />)).toBeTruthy();
  });

  it("has title", () => {
    renderWithProviders(<TaskPage />);
    expect(screen.getByTestId("my-task-title")).toBeTruthy();
  });

  it("Button exit exists", () => {
    renderWithProviders(<TaskPage />);
    expect(screen.getByTestId("my-task-btn-exit")).toBeTruthy();
  });
});
