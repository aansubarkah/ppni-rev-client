import DS from 'ember-data';

export default DS.Model.extend({
    children: DS.hasMany('disposition', {inverse: 'parent'}),
    parent: DS.belongsTo('disposition', {inverse: 'children'}),
    letter: DS.belongsTo('letter'),
    user: DS.belongsTo('user'),
    evidences: DS.hasMany('evidence'),
    recipient: DS.belongsTo('recipient'),
    parent_id: DS.attr('number'),
    letter_id: DS.attr('number'),
    user_id: DS.attr('number'),
    lft: DS.attr('number'),
    rght: DS.attr('number'),
    recipient_id: DS.attr('number'),
    content: DS.attr('string'),
    created: DS.attr('string', {defaultValue: null}),
    modified: DS.attr('string', {defaultValue: null}),
    isRead: DS.attr('boolean', {defaultValue: false}),
    finish: DS.attr('boolean', {defaultValue: false}),
    active: DS.attr('boolean', {defaultValue: true})
});
