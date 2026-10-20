import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Example Domain Smoke Test", () => {
  it("should load the example domain page and verify content", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://example.com" });

    const assertResult = await testdriver.assert("The text 'This domain is for use in documentation examples without needing permission' is visible on the page");
    expect(assertResult).toBeTruthy();
  });
});
