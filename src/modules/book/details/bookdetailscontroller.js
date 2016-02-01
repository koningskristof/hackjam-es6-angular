export default function  BookDetailsController($routeParams, BookFactory) {

    if ($routeParams.id) {

      BookFactory.getBook($routeParams.id)
        .then(function(book){
          angular.extend(this, book);
        }.bind(this));

    }
  }
