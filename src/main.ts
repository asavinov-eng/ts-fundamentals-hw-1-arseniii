import { Book } from "./book";
import { Library } from "./library";

const library = new Library();

const book1 = new Book("1", "1984", "George Orwell", 1949, "dystopian");
const book2 = new Book("2", "Dune", "Frank Herbert", 1965, "fantasy");
const book3 = new Book("3", "Sapiens", "Yuval Noah Harari", 2011, "history");

library.add(book1);
library.add(book2);
library.add(book3);

console.log("All books:");
library.listAll().forEach((book) => console.log(book.getInfo()));

console.log("\nBorrowing book 1...");
library.borrow("1", "Arsenii");

library.listAll().forEach((book) => console.log(book.getInfo()));

console.log("\nReturning book 1...");
library.return("1");

library.listAll().forEach((book) => console.log(book.getInfo()));

console.log("\nRemoving book 2...");
library.remove("2");

console.log("\nFinal list:");
library.listAll().forEach((book) => console.log(book.getInfo()));
