export default function BookListController(BookFactory) {
    BookFactory.getBooks().then(function (response) {
        this.books = response.data;
    }.bind(this));

    function BookListController(BookFactory) {

        BookFactory.getBooks()
            .then(function (books) {
                this.books = books;
            }.bind(this));

    }
}
