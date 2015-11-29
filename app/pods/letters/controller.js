import Ember from 'ember';

export default Ember.Controller.extend({
	applicationController: Ember.inject.controller('application'),
	isAdministrator: Ember.computed.reads('applicationController.isAdministrator'),
	isManager: Ember.computed.reads('applicationController.isManager'),
	isUser: Ember.computed.reads('applicationController.isUser'),
	isGuest: Ember.computed.reads('applicationController.isGuest'),
	queryParams: ['page', 'limit', 'query'],
	page: 1,
	limit: 1,
	query: '',
	firstRowNumber: function () {
		return (((this.page - 1) * this.limit) + 1);
	}.property('page', 'limit')
});
