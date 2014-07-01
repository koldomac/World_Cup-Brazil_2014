var TeamlistView = Backbone.View.extend({
    el: '#artTeamsPoints',
    tagName: 'ul',
    template: _.template($("#team_list_template").html()),
    initialize: function(){
        this.render();
        this.render_feed_items();
    },        
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    render_feed_items: function() {
        _.each(this.collection.models, function (item) {
            team = new EquipoView({
                model: item
            });
            Lungo.dom('section#secTeams article#artTeamsPoints ul#team_list_ul').append(team.render().el);
        }, this);
    }
});

var TeamlistView1 = Backbone.View.extend({
    el: '#artTeamsGroups',
    tagName: 'ul',
    template: _.template($("#team_list_template").html()),
    initialize: function(){
        this.render();
        this.render_feed_items();
    },        
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    render_feed_items: function() {
        _.each(this.collection.models, function (item) {
            team = new EquipoView({ model: item });
            Lungo.dom('section#secTeams article#artTeamsGroups ul#team_list_ul').append(team.render().el);
        }, this);
    }
});