import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('administrator-senders', 'Integration | Component | administrator senders', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{administrator-senders}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#administrator-senders}}
      template block text
    {{/administrator-senders}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
