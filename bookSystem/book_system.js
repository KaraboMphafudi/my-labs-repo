// Step 1: Empty array to store books
let books = [];

// Step 2: Add book function
function addBook() {
    // Get values from input fields
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Validate all fields are filled correctly
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {

        // Create book object
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Add book to array
        books.push(book);

        // Show books and clear inputs
        showbooks();
        clearInputs();

    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to show all books
function showbooks() {
    const booksDiv = books.map((book, index) => 
        `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];

    // Fill form with book details
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    // Remove old entry
    books.splice(index, 1);

    // Refresh list
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
