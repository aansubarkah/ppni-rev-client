import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function(){
        var len = this.query.length;
        this.$('input').focus();
        this.$('input')[0].setSelectionRange(len, len);
    }
});
