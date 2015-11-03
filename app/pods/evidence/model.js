import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo('user'),
    dispositions: DS.hasMany('disposition'),
    letters: DS.hasMany('letter'),
    letter: DS.belongsTo('letter'),
    user_id: DS.attr('number'),
    name: DS.attr('string', {defaultValue: null}),
    extension: DS.attr('string'),
    created: DS.attr('string', {defaultValue: null}),
    modified: DS.attr('string', {defaultValue: null}),
    active: DS.attr('boolean', {defaultValue: true})
});
