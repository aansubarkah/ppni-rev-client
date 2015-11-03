import Ember from 'ember';

export default Ember.Component.extend({
    date: null,
	actions: {
		toggleAdd: function() {
			this.sendAction('toggleAdd');
		}
	}
});
