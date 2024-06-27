import React from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { ListItem } from "../../src/components/ListItem";
import { renderWithProviders } from "../RenderWithProvider";
import { ITask } from "../../src/store/list.store";

const fakeTask: ITask = {
  name: "Task 1",
  createdAt: "2021-10-01",
  avatar: "https://via.placeholder.com/150",
  id: "1",
};

describe("ListItem test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    expect(renderWithProviders(<ListItem task={fakeTask} />)).toBeTruthy();
  });
});
