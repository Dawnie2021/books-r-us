const { Book } = require('../models');


const bookData = [
    {
        book_name: 'The Da Vinci Code',
        book_author: 'Dan Brown',
        book_description: 'Follows symbologist Robert Langdon as he unravels a murder mystery in the Louvre Museum, delving into a conspiracy involving the Catholic Church and the search for the Holy Grail.',
        genre: 'mystery'
    },

    {
        book_name: 'Pride and Prejudice',
        book_author: 'Jane Austen',
        book_description: 'Tells the story of Elizabeth Bennet and Mr. Darcy as they naviagte misunderstandings, societal expectations, and their own feelings towards each other in 19th century England.',
        genre: 'romance'
    },

    {
        book_name: 'Dune',
        book_author: 'Frank Herbert',
        book_description: 'It is set in a distant future where noble families control planets and a valuable resource called spice is central to interstellar travel and power struggles.',
        genre: 'science fiction'
    },

    {
        book_name: 'The Hobbit',
        book_author: 'J.R.R. Tolkien',
        book_description: 'Follows Bilbo Baggins on a quest to reclaim a treasure guarded by a dragon, encountering various creatures along the way.',
        genre: 'fantasy'
    },

    {
        book_name: 'The Shining',
        book_author: 'Stephen King',
        book_description: 'It tells the story of a family who becomes the winter caretakers of an isolated hotel, where supernatural forces drive the father to madness.',
        genre: 'horror'
    },

    {
        book_name: 'Treasure Island',
        book_author: 'Robert Louis Stevenson',
        book_description: 'It follows young Jim Hawkins as he embarks on a preilous journey to find buried treasure, encountering pirates, mutiny, and treacherous seas along the way.',
        genre: 'adventure'
    },

    {
        book_name: 'The Girl with the Dragon Tattoo',
        book_author: 'Stieg Larsson',
        book_description: 'It follows journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades old disappearance uncovering dark family secrets and encountering dangerous adversaries.',
        genre: 'crime'
    },

    {
        book_name: 'Educated',
        book_author: 'Tara Westover',
        book_description: ' It recounts Westovers journey from growing up in a strict and isolated household in rural Idaho to eventually pursuing higher education, despite the obstacles and abuse she faced from her family.',
        genre: 'memoir'
    },

    {
        book_name: 'The Notebook',
        book_author: 'Nicholas Sparks',
        book_description: 'A timeless romance about Noah Calhoun and Allie Nelson, who fall in love on Summer in the 1940s. Despite obstacles and time apart, their enduring love is tested years later, bringing them back together in a heartwarming tale of love and commitment.',
        genre: 'romance'
    },
]








const seedBook = () => Tag.bulkCreate(bookData);

module.exports = seedBook;
