import Ember from 'ember';

export default Ember.Component.extend({
    totalPages: function () {
        return Math.ceil(this.get('total') / this.limit);
    }.property('total'),
    lastRowNumber: function () {
        var number = 0;
        if ((this.limit * this.page) > this.total) {
            number = this.total;
        } else {
            number = this.limit * this.page;
        }
        return number;
    }.property('page', 'total', 'limit')
});
