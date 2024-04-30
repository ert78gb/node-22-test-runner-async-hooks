import assert from "node:assert/strict";
import test from "node:test";
import { setTimeout } from "node:timers/promises";

await test("test suite", async (t) => {
  t.before(async () => {
    console.log("before start");
    await setTimeout(100);
    console.log("before end");
  });

  t.beforeEach(async () => {
    console.log("beforeEach start");
    await setTimeout(100);
    console.log("beforeEach end");
  });

  t.afterEach(async () => {
    console.log("afterEach start");
    await setTimeout(100);
    console.log("afterEach end");
  });

  t.after(async () => {
    console.log("after start");
    await setTimeout(100);
    console.log("after end");
  });

  await t.test("test case", async () => {
    console.log("test case start");
    await setTimeout(100);
    assert.ok(true);
    console.log("test case end");
  });
});
