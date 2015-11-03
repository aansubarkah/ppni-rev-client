import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('administrator-letters-delete', 'Integration | Component | administrator letters delete', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{administrator-letters-delete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#administrator-letters-delete}}
      template block text
    {{/administrator-letters-delete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
