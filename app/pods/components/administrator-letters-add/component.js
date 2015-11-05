import Ember from 'ember';

export default Ember.Component.extend({
    date: null,
    via_id: 3,
    items: ['lorem', 'ipsum', 'dolor'],
    viaItems: function() {
        var data = this.get('model').vias.toArray();
        return data;
    }.property('model'),
    actions: {
        toggleAdd: function() {
            this.sendAction('toggleAdd');
        },
        setSingleChoice: function() {
            console.log(this.get('via_id'));
        },
        autocompleteEmptyResult: function() {
            console.log('tidak ada return');
        }
    }
});
