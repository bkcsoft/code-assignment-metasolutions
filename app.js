/*jslint browser:true, white:true */
/*global angular, rangy, window, console */

angular.module('app', [])
	.controller('Comments', ['$scope', function($scope) {
		"use strict";
		$scope.comments = [];
		$scope.added = true;
		$scope.temp = {};
		$scope.tempComment = "";
		$scope.setTempComment = function() {
			var sel = rangy.getSelection().saveRanges();
			console.log(sel);
			$scope.temp = sel;
		};
		$scope.showAddBox = function() {
			if($scope.temp !== {}) {
				$scope.added = false;
			}
		}
		$scope.closeAddBox = function() {
			$scope.added = false;
			$scope.temp = {};
			$scope.tempComment = "";
		}
		$scope.addComment = function() {
			if($scope.temp !== {} && $scope.tempComment !== '') {
				$scope.temp.comment = $scope.tempComment;
				$scope.comments.push($scope.temp);
				$scope.temp = {};
				$scope.tempComment = "";
				$scope.added = true;
			}
		};
		$scope.showComment = function(idx) {
			var comment = $scope.comments[idx];
			console.log("Showing " + comment.comment);
			var sel = rangy.getSelection();
			sel.restoreRanges($scope.comments[idx]);
			$scope.temp = sel.saveRanges();
		};
		$scope.remComment = function(idx) {
			$scope.comments.splice(idx, 1);
		};
	}]);
