var MatchView = Backbone.View.extend({
    template: _.template($('#match_template').html()),
    render: function() {            
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});