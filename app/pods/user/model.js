import DS from 'ember-data';

export default DS.Model.extend({
	departements: DS.hasMany('departement'),
	dispositions: DS.hasMany('disposition'),
	evidences: DS.hasMany('evidence'),
	group: DS.belongsTo('group'),
	letters: DS.hasMany('letter'),
    group_id: DS.attr('number'),
    username: DS.attr('string'),
    password: DS.attr('string'),
    fullname: DS.attr('string'),
    active: DS.attr('boolean', {defaultValue: true})
});
