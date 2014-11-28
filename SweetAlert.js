(function () {
	'use strict';

	angular.module('jutaz.ngSweetAlertAsPromised', []).factory('SweetAlert',
	['$window', '$q', function ($window, $q) {

		var swal = $window.swal;

		var self = {
			swal: function (options) {
				var defer = $q.defer();
				swal(options, function (isConfirm) {
					if (!isConfirm) {
						defer.reject();
					} else {
						defer.resolve();
					}
				});
				return defer.promise;
			},
			success: function(options) {
				options.type = 'success';
				return self.swal(options);
			},
			error: function(options) {
				options.type = 'error';
				return self.swal(options);
			},
			warning: function(options) {
				options.type = 'warning';
				return self.swal(options);
			},
			info: function(options) {
				options.type = 'info';
				return self.swal(options);
			}
		};

		return self;
	}]);
})();
