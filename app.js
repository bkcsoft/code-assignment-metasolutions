/*jslint browser:true, white:true */
/*global angular, rangy, window, console */

angular.module('app', [])
	.controller('Comments', ['$scope', function($scope) {
		"use strict";
		$scope.comments = [];
		$scope.added = true;
		$scope.temp = {comment: '', selection: null};
		$scope.setTempComment = function() {
			var sel = rangy.getSelection().saveRanges();
			console.log(sel);
			$scope.temp.selection = sel;
		};
		$scope.showAddBox = function() {
			if($scope.temp.selection !== null) {
				$scope.added = false;
			} else {
				console.log("Nothing selected stopid...");
			}
		}
		$scope.closeAddBox = function() {
			$scope.added = true;
			$scope.temp = {comment: '', selection: null};
		}
		$scope.addComment = function() {
			if($scope.temp.selection !== null && $scope.temp.comment !== '') {
				$scope.comments.push($scope.temp);
				$scope.closeAddBox();
			}
		};
		$scope.showComment = function(idx) {
			var comment = $scope.comments[idx];
			console.log("Showing " + comment.comment);
			var sel = rangy.getSelection();
			sel.restoreRanges($scope.comments[idx].selection);
			$scope.temp.selection = sel.saveRanges();
		};
		$scope.remComment = function(idx) {
			$scope.comments.splice(idx, 1);
		};
	}]);
