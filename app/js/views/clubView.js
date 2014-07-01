var ClubView = Backbone.View.extend({
    el: '#artClub',
    template: _.template($('#club_template').html()),
    initialize: function() {    	
    	this.render();
    },
    render: function() {
      	$(this.el).html(this.template(this.model.toJSON()));
        var club = new Club({model: this.model});
        return this;
    }
});