const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const card = (data) => {
  let cards = document.createElement("div");
  cards.className = "p-3 mb-2 border border-dark text-dark ";
  let name = document.createElement("p");
  name.className = "fs-3 fw-bold";
  name.textContent = data.name;
  let author = document.createElement("p");
  author.textContent = data.authors[0];
  let released = document.createElement("p");
  released.textContent = data.released;
  let pages = document.createElement("p");
  pages.textContent = data.numberOfPages;

  cards.appendChild(name);
  cards.appendChild(author);
  cards.appendChild(released);
  cards.appendChild(pages);
  app.appendChild(cards);
};

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  /**
   * fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((element) => {
        console.log(element.name);
      });
    })
    .catch((error) => console.error("Error:", error));
   */

  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((element) => {
      /*console.log(
        element.name,
        element.authors[0],
        element.released,
        element.numberOfPages
      );*/
      card(element);
    });

    let loader = document.querySelector("#loading");
    app.removeChild(loader);
  } catch (error) {
    console.log("Error:", error);

    let loader = document.querySelector("#loading");
    let message = document.createElement("p");
    message.textContent = "Fail To Load The Data";
    message.className = "fs-3 fw-bold";
    app.appendChild(message);
    app.appendChild(loader);
  }
};
fetchData(url);
