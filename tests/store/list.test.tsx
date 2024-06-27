import { describe, expect, test } from "vitest";
import reducer, {
  setList,
  addTask,
  initialState,
  ITask,
} from "../../src/store/list.store";

const tasks: ITask[] = [
  {
    createdAt: "2021-10-12T00:00:00.000Z",
    name: "Task 1",
    avatar: "avatar1",
    id: "1",
  },
  {
    createdAt: "2021-10-12T00:00:00.000Z",
    name: "Task 2",
    avatar: "avatar2",
    id: "2",
  },
];

describe("list.store test:", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle a tasks data being added to an empty list", () => {
    expect(reducer(initialState, setList(tasks))).toEqual({
      ...initialState,
      tasks: tasks,
    });
  });

  test("should handle a custom task being added to an empty list", () => {
    expect(reducer(initialState, addTask([tasks[0]]))).toEqual({
      ...initialState,
      myTasks: [tasks[0]],
    });
  });
});
