var app = angular.module('halloween', [])
	.controller('MainCtrl', ['$scope', function ($scope) {

		$scope.cards = [
			'./img/cards/boo.png',
			'./img/cards/bourgeois.png',
			'./img/cards/brains.png',
			'./img/cards/seize.png',
			'./img/cards/trump.png',
			'./img/cards/witches.png',
      './img/cards/boos.png',
      './img/cards/halloween.png',
      './img/cards/werewolf.png',
      './img/cards/harambe.png',
      './img/cards/skull.png',
      './img/cards/trick.png',
      './img/cards/hollow.png',
      './img/cards/bow.png',
      './img/cards/hang.png'
		];

	}]);
