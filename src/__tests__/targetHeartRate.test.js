import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
//import User from "./user";

import TargetHeartRate from "../components/targetHeartRate";

const container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render user data", async () => {
  const fakeUser = {
    THR: {
      age: "37",
      RestingHr: "97"
    },
    targetHr: "180"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  await act(async () => {
    render(<TargetHeartRate user={fakeUser} />, container);
  });

  expect(container.querySelector("div").textContent).toBe(
    `${fakeUser.THR.age} ${fakeUser.THR.RestingHr}`
  );
  expect(fakeUser.THR).toContain(fakeUser.THR.targetHr);
  global.fetch.mockRestore();
});
