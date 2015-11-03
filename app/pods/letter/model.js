import DS from 'ember-data';

export default DS.Model.extend({
    dispositions: DS.hasMany('disposition'),
    evidences: DS.hasMany('evidence'),
    sender: DS.belongsTo('sender'),
    user: DS.belongsTo('user'),
    via: DS.belongsTo('via'),
    sender_id: DS.attr('number'),
    user_id: DS.attr('number'),
    via_id: DS.attr('number'),
    number: DS.attr('string'),
    date: DS.attr('date'),
    content: DS.attr('string'),
    created: DS.attr('string', {defaultValue: null}),
    modified: DS.attr('string', {defaultValue: null}),
    isRead: DS.attr('boolean', {defaultValue: false}),
    active: DS.attr('boolean', {defaultValue: true})
});
