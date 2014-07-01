var EquipoView = Backbone.View.extend({
    template: _.template($('#team_template').html()),
    render: function() {            
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    },
    events : {
        'tap' : 'tapOnTeam',
    },
    tapOnTeam : function() {
        var url= "http://worldcup.kimonolabs.com/api/players?sort=nickname,1&teamId=" + this.model.get('id') + "&apikey=1e11ea14a75e367af4fcfd72306fdb0e";
        var players = new Players();
        Lungo.Service.json(url, {}, function(data) {
            for(var i in data) {
                var player = new Player ({
                    id      :   data[i].id,
                    name    :   data[i].nickname,
                    image   :   data[i].image,
                    country :   data[i].nationality,
                    goals   :   data[i].goals,
                    teamID  :   data[i].teamId,
                    clubID  :   data[i].clubId
                });
                players.add(player);
            }
        var view = new PlayerlistView2({collection: players});
        });
    }
});