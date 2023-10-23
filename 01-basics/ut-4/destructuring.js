const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];

/**
 * Usando Destructuración de arrays,
 * debes devolver todas las tecnologías
 * @returns
 */
export const getAllTechnologies = () => {
  const [, technologies] = student;
  return technologies;
};
/**
 * Usando Destructuración de arrays,
 * debes devolver todos los valores
 * @returns
 */
export const getAllValues = () => {
  const [, technologies, values] = student;
  return [...technologies, ...values];
};

/**
 * Usando Destructuración de arrays,
 * debes devolver solo React
 * @returns
 */
export const getReact = () => {
  const [, technologies, values] = student;
  const [, , , react] = technologies;
  return react;
};

/**
 * Usando Destructuración de arrays,
 * debes devolver CSS y 85
 * @returns
 */
export const getCSSAnd85 = () => {
  const [, technologies, values] = student;
  const [css] = technologies.slice(1, 2);
  const [eightyFive] = values.slice(1, 2);
  return [css, eightyFive];
};

/*****************************************************
 * ***************************************************
 ******************************************************/
const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título del primer libro
 * @returns
 */
export const getTitleFirstBook = () => {
  const [firstBook] = books;
  const { title } = firstBook;
  return title;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el año de publicación del segundo libro
 * @returns
 */
export const getPublishedSecondBook = () => {
  const [, secondBook] = books;
  const { published } = secondBook;
  return published;
};

/**
 * Usando Destructuración de arrays y objetos,
 * debes devolver el título y el autor del último libro
 * @returns
 */
export const getAuthorsAndTitleLastBook = () => {
  const [lastBook] = books.slice(-1);
  const { title, author } = lastBook;
  return { title, author };
};
