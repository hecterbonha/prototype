import { describe, expect, it } from "vitest";
import { proxy } from "@/packages/utils/instances";

describe("instances test", () => {
  it("should have client instances", () => {
    // Arrange
    const customHeader = "self";
    // Acts
    // Assert
    expect(proxy.defaults.headers["X-Custom-Header"]).toBe("self");
  });
});
