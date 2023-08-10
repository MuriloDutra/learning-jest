const user = {
  name: "Murilo Alves",
  age: 22,
  job: "Programmer",
};

test("user matches", () => {
  expect(user).toMatchSnapshot();
});
