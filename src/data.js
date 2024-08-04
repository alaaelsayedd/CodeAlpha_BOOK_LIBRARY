import book1 from './images/book1.jpg'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'
import book7 from './images/book7.jpg'
import book8 from './images/book8.jpg'
import book9 from './images/book9.jpg'
import book10 from './images/book10.jpg'
import book11 from './images/book11.jpg'
import book12 from './images/book12.jpg'




const data = {
    "personal_library": {
      "books": [
        {
          "title": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "year": 1951,
          "genre": "Fiction",
          "isbn": "978-0316769488",
          "status": "read",
          "category": "Classic Literature",
          "image": book1,
          "borrow_history": [
            {
              "borrower": "Ahmed",
              "borrow_date": "2023-06-15",
              "return_date": "2023-06-30"
            },
            {
              "borrower": "Sara",
              "borrow_date": "2023-07-05",
              "return_date": "2023-07-20"
            }
          ]
        },
        {
          "title": "Sapiens: A Brief History of Humankind",
          "author": "Yuval Noah Harari",
          "year": 2011,
          "genre": "Non-Fiction",
          "isbn": "978-0062316097",
          "status": "unread",
          "category": "History",
          "image": book2,
          "borrow_history": []
        },
        {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year": 1925,
          "genre": "Classic",
          "isbn": "978-0743273565",
          "status": "read",
          "category": "Classic Literature",
          "image": book3,
          "borrow_history": [
            {
              "borrower": "Mona",
              "borrow_date": "2023-05-10",
              "return_date": "2023-05-25"
            }
          ]
        },
        {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year": 1960,
          "genre": "Fiction",
          "isbn": "978-0061120084",
          "status": "read",
          "category": "Classic Literature",
          "image": book4,
          "borrow_history": []
        },
        {
          "title": "1984",
          "author": "George Orwell",
          "year": 1949,
          "genre": "Dystopian",
          "isbn": "978-0451524935",
          "status": "unread",
          "category": "Science Fiction",
          "image": book5,
          "borrow_history": []
        },
        {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": 1813,
          "genre": "Romance",
          "isbn": "978-1503290563",
          "status": "read",
          "category": "Classic Literature",
          "image": book6,
          "borrow_history": [
            {
              "borrower": "Layla",
              "borrow_date": "2023-03-22",
              "return_date": "2023-04-05"
            }
          ]
        },
        {
          "title": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "year": 1937,
          "genre": "Fantasy",
          "isbn": "978-0547928227",
          "status": "read",
          "category": "Fantasy",
          "image": book7,
          "borrow_history": [
            {
              "borrower": "Omar",
              "borrow_date": "2023-01-10",
              "return_date": "2023-01-25"
            }
          ]
        },
        {
          "title": "The Da Vinci Code",
          "author": "Dan Brown",
          "year": 2003,
          "genre": "Thriller",
          "isbn": "978-0307474278",
          "status": "read",
          "category": "Mystery",
          "image": book8,
          "borrow_history": []
        },
        {
          "title": "The Alchemist",
          "author": "Paulo Coelho",
          "year": 1988,
          "genre": "Adventure",
          "isbn": "978-0062315007",
          "status": "unread",
          "category": "Philosophy",
          "image": book9,
          "borrow_history": []
        },
        {
          "title": "Brave New World",
          "author": "Aldous Huxley",
          "year": 1932,
          "genre": "Dystopian",
          "isbn": "978-0060850524",
          "status": "read",
          "category": "Science Fiction",
          "image": book10,
          "borrow_history": []
        },
        {
          "title": "Moby Dick",
          "author": "Herman Melville",
          "year": 1851,
          "genre": "Adventure",
          "isbn": "978-1503280786",
          "status": "read",
          "category": "Classic Literature",
          "image": book11,
          "borrow_history": []
        },
        {
          "title": "The Road",
          "author": "Cormac McCarthy",
          "year": 2006,
          "genre": "Post-Apocalyptic",
          "isbn": "978-0307387899",
          "status": "unread",
          "category": "Literary Fiction",
          "image": book12,
          "borrow_history": []
        }
      ]
    }
  };
  
  export default data;
  