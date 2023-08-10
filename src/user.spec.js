import User from "./user";

describe("User", () => {
  test("name returns full name", () => {
    const user = new User({ firstName: "Bruce", lastName: "Wayne" });
    expect(user.name).toBe("Bruce Wayne");
  });
});
