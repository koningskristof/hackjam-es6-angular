import BookFactory from './services/bookservice.js';
import BookListController from './list/booklistcontroller.js';
import BookDetailsController from './detail/bookdetailscontroller.js';
import BookAddController from './add/bookaddcontroller.js';

angular.module('book', [])
    .factory('BookFactory', BookFactory)
    .controller('BookListController',BookListController)
    .controller('BookDetailsController',BookDetailsController)
    .controller('BookAddController',BookAddController);
