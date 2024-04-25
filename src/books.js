import { BOOKS } from "./components/bookObjects.js";
import { INSITUIMAGES } from "./components/inSituImages.js"

export async function getBooks() {
    let books = BOOKS
    return books
}

export async function getBook(id) {
    await `book:${id}`;

    let book = BOOKS.find(book => book.id === Number(id));
    return book ?? null;
}

export async function getInSituImages() {
    let inSituImages = INSITUIMAGES
    return inSituImages
}