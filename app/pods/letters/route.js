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
		//return Ember.RSVP.hash({
		return {
			letters: this.store.query('letter', query),
			vias: this.store.findAll('via')
			//vias: this.store.findAll('vias')
			//vias: this.store.query('via', query)
		};
		//return this.store.query('letter', query);
	},
	setupController: function (controller, model) {
		this._super.apply(this, arguments);
		controller.set('total', model.letters.get('meta.total'));
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
