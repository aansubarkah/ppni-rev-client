import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		var query = {};
		if (Ember.isPresent(params.page)) {
			query.page = params.page;
		}
		if (Ember.isPresent(params.limit)) {
			query.limit = params.limit;
		}
		if (Ember.isPresent(params.query)) {
			query.query = params.query;
		}
		return Ember.RSVP.hash({
			letters: this.store.query('letter', query),
			vias: this.store.findAll('via'),
			senders: this.store.findAll('sender')
		});
	},
	setupController: function (controller, model) {
		this._super.apply(this, arguments);
		controller.set('total', model.letters.meta.total);
	},
	queryParams: {
		page: {
			refreshModel: true
		},
		limit: {
			refreshModel: true
		},
		query: {
			refreshModel: true
		}
	},
	actions: {
	}
});
