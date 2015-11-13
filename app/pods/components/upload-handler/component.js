import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
    didInsertElement: function() {
        var self = this;
        this.$('input').fileupload({
            dataType: 'json',
            //url: this.get('uploadUrl'),
            url: config.APP.host + '/' + config.APP.namespace + '/evidences/upload',
            formData: function() {
                return [{name: self.get('hiddenName'), value: self.get('hiddenValue')}];
            },
            done: function(e, data) {
                //self.sendAction('uploaded', data.result);
                //self.markCompleted(data.result.filenames);
                self.$('#progress .bar').html('berhasil mengunggah&nbsp;' + data.files[0].name);
            },
            fail: function (e, data) {
                self.sendAction('failed', data.result);
            },
            add: function(e, data) {
                data.process().done(function () {
                    self.$('#progress .bar').html('sedang mengunggah&nbsp;' + data.files[0].name);
                    data.submit();
                });
            },
            progress: function (e, data) {
                var prog = parseInt(data.loaded / data.total * 100, 10);
                self.$('#progress .bar').html(
                    prog + '%');
                    console.log(prog);
                    /*self.$('#progress .bar').css(
                      'width',
                      prog + '%'
                      );*/
            }
        });
    },
    actions: {
        filesUploaded: function() {
            console.log('sukses');
        }
    }
});
