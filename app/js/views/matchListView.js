var MatchListView = Backbone.View.extend({
    el: '#artMatchesToday',
    tagName: 'ul',
    template: _.template($("#match_list_template").html()),
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
            match = new MatchView({
                model: item
            });
            Lungo.dom('section#secMatchesToday article#artMatchesToday ul#match_list_ul').append(match.render().el);
        }, this);
    }
});
var MatchListView1 = Backbone.View.extend({
    el: '#artCurrentMatch',
    tagName: 'ul',
    template: _.template($("#match_list_template").html()),
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
            match = new MatchView({
                model: item
            });
            Lungo.dom('section#secCurrentMatch article#artCurrentMatch ul#match_list_ul').append(match.render().el);
        }, this);
    }
});
var MatchListView2 = Backbone.View.extend({
    el: '#artMatchesTomorrow',
    tagName: 'ul',
    template: _.template($("#match_list_template").html()),
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
            match = new MatchView({
                model: item
            });
            Lungo.dom('section#secMatchesTomorrow article#artMatchesTomorrow ul#match_list_ul').append(match.render().el);
        }, this);
    }
});