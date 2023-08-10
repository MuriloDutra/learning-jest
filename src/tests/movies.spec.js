import movies from "../resources/movies";

describe("Favorite Movies", () => {
  let myMovies = [];
  beforeEach(() => {
    myMovies = [
      {
        title: "Age of Ultron",
        rate: null,
      },
    ];
  });

  test("Can add a movie", () => {
    movies.add(myMovies, "Django");
    expect(myMovies).toMatchSnapshot();
  });

  test("Rate a movie", () => {
    movies.rate(myMovies[0], 5);
    expect(myMovies).toMatchSnapshot();
  });
});
