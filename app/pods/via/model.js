import DS from 'ember-data';

export default DS.Model.extend({
	letters: DS.hasMany('letter'),
	name: DS.attr('string'),
	active: DS.attr('boolean', {defaultValue: true})
});
