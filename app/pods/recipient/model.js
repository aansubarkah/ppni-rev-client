import DS from 'ember-data';

export default DS.Model.extend({
	disposition: DS.hasMany('disposition'),
	username: DS.attr('string'),
	fullname: DS.attr('string'),
	active: DS.attr('boolean', {defaultValue: true})
});
