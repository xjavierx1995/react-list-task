import React from "react";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { AddTaskModal } from "../../src/components/AddTaskModal";
import { renderWithProviders } from "../RenderWithProvider";
import { setupStore } from "../../src/store";
describe("AddTaskModal test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    expect(renderWithProviders(<AddTaskModal />)).toBeTruthy();
  });

  it("Has btn open", () => {
    renderWithProviders(<AddTaskModal />);
    expect(screen.getByTestId("btn-add-task")).toBeTruthy();
  });

  it("Is modal visible", () => {
    renderWithProviders(<AddTaskModal />);
    const btnOpen = screen.getByTestId("btn-add-task");
    fireEvent.click(btnOpen);
    expect(screen.getByTestId("modal-add")).toBeTruthy();
  });

  it("Save a task", () => {
    const store = setupStore();
    renderWithProviders(<AddTaskModal />, { store });
    const btnOpen = screen.getByTestId("btn-add-task");
    fireEvent.click(btnOpen);
    const input = screen.getByTestId("input-task-name");
    fireEvent.change(input, { target: { value: "Task 1" } });
    const btnSave = screen.getByTestId("btn-save-task");
    fireEvent.click(btnSave);
    expect(store.getState().taskList.myTasks.length).toBe(1);
  });
});
