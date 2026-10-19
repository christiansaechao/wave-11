/*
Requirements:
- Combine props + map:
- Build a <MovieCard /> that takes `movie: Movie` as a prop (create the Movie type)
- In the main component, .map over `movies` and render a <MovieCard /> for each one
- Use movie.id as the key (no key warnings in the console)
- Lay them out in a responsive Tailwind grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Show a "Sold out" badge when seatsLeft is 0
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-fi", price: 12.5, seatsLeft: 14 },
  { id: 2, title: "Spirited Away", genre: "Animation", price: 10, seatsLeft: 0 },
  { id: 3, title: "The Dark Knight", genre: "Action", price: 12.5, seatsLeft: 3 },
  { id: 4, title: "Coco", genre: "Animation", price: 9, seatsLeft: 22 },
  { id: 5, title: "Arrival", genre: "Sci-fi", price: 11, seatsLeft: 7 },
];

export default function CardList() {
  return <div>{/* CODE HERE */}</div>;
}
