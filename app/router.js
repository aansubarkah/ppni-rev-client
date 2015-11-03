import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('departements');
  this.route('users');
  this.route('hierarchy');
  this.route('letters');
  this.route('dispositions');
  this.route('vias');
  this.route('senders');
  this.route('recipients');
  this.route('evidences');
  this.route('groups');
});

export default Router;
