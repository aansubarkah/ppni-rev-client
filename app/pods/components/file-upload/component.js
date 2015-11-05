import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import config from '../../../config/environment';

export default EmberUploader.FileField.extend({
	url: config.APP.host + '/' + config.APP.namespace + '/evidences/add',
	filesDidChange: function(files) {
		var uploadUrl = this.get('url');

		var uploader = EmberUploader.Uploader.create({
			url: uploadUrl
		});

		if (!Ember.isEmpty(files)) {
			uploader.upload(files[0]);
		}
	}
});
