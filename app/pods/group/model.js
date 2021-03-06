import DS from 'ember-data';

export default DS.Model.extend({
    users: DS.hasMany('user'),
    name: DS.attr('string'),
    active: DS.attr('boolean', {defaultValue: true})
});
