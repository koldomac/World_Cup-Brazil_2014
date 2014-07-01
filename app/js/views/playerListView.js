var PlayerlistView = Backbone.View.extend({
    el: '#artPlayersGoals',
    tagName: 'ul',
    template: _.template($("#player_list_template").html()),
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
            player = new PlayerView({
                model: item
            });
            Lungo.dom('section#secPlayers article#artPlayersGoals ul#player_list_ul').append(player.render().el);
        }, this);
    }
});
var PlayerlistView1 = Backbone.View.extend({
    el: '#artPlayersAlpha',
    tagName: 'ul',
    template: _.template($("#player_list_template").html()),
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
            player = new PlayerView({
                model: item
            });
            Lungo.dom('section#secPlayers article#artPlayersAlpha ul#player_list_ul').append(player.render().el);
        }, this);
    }
});
var PlayerlistView2 = Backbone.View.extend({
    el: '#artPlayersByTeam',
    tagName: 'ul',
    template: _.template($("#player_list_template").html()),
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
            player = new PlayerView({
                model: item
            });
            Lungo.dom('section#secPlayersByTeam article#artPlayersByTeam ul#player_list_ul').append(player.render().el);
            Lungo.Router.section('secPlayersByTeam');
        }, this);
    }
});