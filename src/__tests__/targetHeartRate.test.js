import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TargetHeartRate from "../components/targetHeartRate";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(container => {
  // cleanup on exiting

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render user data", async () => {
  const fakeUser = {
    THR: {
      age: "37"
    }
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  await act(async () => {
    render(<TargetHeartRate thr={fakeUser} />, container);
  });

  expect(container.querySelector("SingleInput").textContent).toBe(
    fakeUser.THR.age
  );

  global.fetch.mockRestore();
});
