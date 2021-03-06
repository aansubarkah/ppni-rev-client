import DS from 'ember-data';

export default DS.Model.extend({
    users: DS.hasMany('user'),
    children: DS.hasMany('departement', {inverse: 'parent'}),
    parent: DS.belongsTo('departement', {inverse: 'children'}),
    parent_id: DS.attr('number'),
    lft: DS.attr('number'),
    rght: DS.attr('number'),
    name: DS.attr('string'),
    active: DS.attr('boolean',{defaultValue: true})
});

