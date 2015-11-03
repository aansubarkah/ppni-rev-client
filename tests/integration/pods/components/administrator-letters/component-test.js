import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('administrator-letters', 'Integration | Component | administrator letters', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{administrator-letters}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#administrator-letters}}
      template block text
    {{/administrator-letters}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
