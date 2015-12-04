// to make JSHINT happy
// global moment: false

import Ember from 'ember';

export function dateFormater(params/*, hash*/) {
    let rawDate = params[0];
    let onlyDate = moment(rawDate).format('Do MMMM YYYY')
    return onlyDate;
}

export default Ember.Helper.helper(dateFormater);
