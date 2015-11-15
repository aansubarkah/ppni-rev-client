import DS from 'ember-data';
import {
    validator, buildValidations
} from 'ember-cp-validations';

var Validations = buildValidations({
    number: [
        validator('presence', true),
        validator('length', {
            min: 1
        })
    ]
});

export default DS.Model.extend(Validations, {
    dispositions: DS.hasMany('disposition', {inverse: null}),
    evidences: DS.hasMany('evidence', {inverse: null}),
    sender: DS.belongsTo('sender', {inverse: null}),
    user: DS.belongsTo('user', {inverse: null}),
    via: DS.belongsTo('via', {inverse: null}),
    sender_id: DS.attr('number'),
    user_id: DS.attr('number'),
    via_id: DS.attr('number'),
    number: DS.attr('string'),
    date: DS.attr('date'),
    content: DS.attr('string'),
    created: DS.attr('string', {defaultValue: null}),
    modified: DS.attr('string', {defaultValue: null}),
    isread: DS.attr('boolean', {defaultValue: false}),
    active: DS.attr('boolean', {defaultValue: true}),
    // dummy fields
    senderName: DS.attr('string', { defaultValue: null}),
    fileName: DS.attr('string', { defaultValue: null})
});
