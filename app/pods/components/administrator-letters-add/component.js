//to make JSHint happy
/*global moment:false*/
/*global Hashids:false*/
import Ember from 'ember';
moment.locale('id');
//var hashids = new Hashids("PPNIJ4T1M");

export default Ember.Component.extend({
    // table letters fields
    via_id: 3,
    user_id: 1,
    sender: null,
    sender_id: 1,
    number: null,
    date: null,
    content: null,
    // ./table letters fields
    viaItems: function() {
        var data = this.get('model').vias.toArray();
        return data;
    }.property('model'),
    actions: {
        toggleAdd: function() {
            this.sendAction('toggleAdd');
        },
        setSingleChoice: function() {
            // console.log(this.get('via_id'));
        },
        autocompleteEmptyResult: function() {
            // console.log('tidak ada return');
        },
        saving: function() {
            var model = this.model;
            var store = this.store;
            var via_id = this.get('via_id');
            var sender = this.get('sender');
            var sender_id = this.get('sender_id');
            var number = this.get('number');
            var date = this.get('date');
            var content = this.get('content');
            var user_id = 1;
            var created = null;
            var modified = null;
            var isread = false;
            var active = true;

            // reformat date
            if(date === null) {
                date = moment().format('YYYY-MM-DD');
            } else {
                date = moment(date).format('YYYY-MM-DD');
            }
            store.createRecord('letter', {
                number: number
            });
            // console.log(sender);

        }
    }
});
