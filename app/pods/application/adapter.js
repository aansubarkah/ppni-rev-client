import DS from 'ember-data';
import config from '../../config/environment';

export default DS.RESTAdapter.extend({
    host: config.APP.host,
    namespace: config.APP.namespace
});
