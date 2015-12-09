import Ember from 'ember';

export default Ember.Component.extend({
	title: 'Surat Masuk',
	searchPlaceholder: 'Search by Perihal',
	isShowingAdd: false,
	isShowingView: false,
	columnsName: ["Tanggal", "Nomor", "Perihal"],
	actions: {
		toggleAdd: function() {
			this.toggleProperty('isShowingAdd');
		},
		toggleView: function() {
			this.toggleProperty('isShowingView');
		}
	}
});
