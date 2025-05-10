// Завдання:

// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

// Функція fetchPosts робить GET-запит до API та повертає список постів.

import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
