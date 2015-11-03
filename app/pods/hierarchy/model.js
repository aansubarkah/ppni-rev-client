import DS from 'ember-data';

export default DS.Model.extend({
    parent: DS.attr('string'),
    text: DS.attr('string'),
    state: DS.attr()
});
