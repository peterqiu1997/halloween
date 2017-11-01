var app = angular.module('halloween', [])
	.controller('MainCtrl', ['$scope', function ($scope) {

		$scope.cards = [
			'./img/cards/candy2.png',
			'./img/cards/spooky.png',
			'./img/cards/text.png',
			'./img/cards/witch.png',
			'./img/cards/witch2.png',
			'./img/cards/channel.png',
			'./img/cards/clown.png',
			'./img/cards/creep.png',
			'./img/cards/friends.png',
			'./img/cards/clout.png',
			'./img/cards/wieners.png',
			'./img/cards/meme.jpg',
		];

	}]);
