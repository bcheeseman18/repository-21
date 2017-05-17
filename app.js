let app = angular.module('MediaPlayer', []);

app.controller('PlayerController', function ($scope) {

    $scope.songs = [
        { title: 'Shop Around', artist: 'Smokey Robinson', album: 'The Ultimate Collection', durationMin: 4, durationSec: 10, art: 'https://images-na.ssl-images-amazon.com/images/I/41KCCFT2KTL.jpg', playing_now: false },
        { title: 'Shop Around', artist: 'Smokey Robinson', album: 'The Ultimate Collection', durationMin: 3, durationSec: 22, art: 'https://images-na.ssl-images-amazon.com/images/I/41KCCFT2KTL.jpg', playing_now: false },
        { title: 'Amigo', artist: 'Kings of Leon', album: 'KOL', durationMin: 2, durationSec: 47, art: 'https://images-na.ssl-images-amazon.com/images/I/41KCCFT2KTL.jpg', playing_now: false },
    ];



    $scope.play = function (song) {
        song.playing_now = true;
        console.log('played');
        $scope.add(song); 
    };

    $scope.stop = function (song) {
        song.playing_now = false;
        console.log('stopped');
    };

    $scope.added = [];

    $scope.add = function (song) {
        $scope.added.push(song);
        console.log('added');
    };



});

