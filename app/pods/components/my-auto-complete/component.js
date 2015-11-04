import AutoComplete from "ember-cli-auto-complete/components/auto-complete";

export default AutoComplete.extend({
  valueProperty: "name",
  determineSuggestions: function(options, input) {
      var list = options.filter(function(item) {
          return item.get("name").toLowerCase().indexOf(input.toLowerCase()) > -1;
      });
      return Ember.A(list);
  }
});
