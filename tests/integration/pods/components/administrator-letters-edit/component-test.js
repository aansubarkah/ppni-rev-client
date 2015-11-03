import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('administrator-letters-edit', 'Integration | Component | administrator letters edit', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{administrator-letters-edit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#administrator-letters-edit}}
      template block text
    {{/administrator-letters-edit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
