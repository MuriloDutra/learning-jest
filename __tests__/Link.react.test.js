import React from "react";
import renderer from "react-test-renderer";
import Link from "../src/Link";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("Inline snapshot", () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();

  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="http://www.facebook.com"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Facebook
    </a>
  `);
});

it('will fail every time', () => {
    const user = {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20),
        name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot({
        createdAt: expect.any(Date),
        id: expect.any(Number)
    });
  });