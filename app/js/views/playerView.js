var PlayerView = Backbone.View.extend({
    template: _.template($('#player_template').html()),
    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    },
    events : {
        'tap' : 'tapOnPlayer',
    },
    tapOnPlayer : function() {
        var url= "http://worldcup.kimonolabs.com/api/clubs?id=" + this.model.get('clubID') + "&apikey=1e11ea14a75e367af4fcfd72306fdb0e";
        Lungo.Service.json(url, {}, function(data) {
            for(var i in data) {
                var club = new Club ({
                    id              :   data[i].id,
                    name            :   data[i].name,
                    country         :   data[i].country,
                    stadium         :   data[i].stadiumName,
                    stadiumImage    :   data[i].stadiumImage,
                    stadiumCapacity :   data[i].stadiumCapacity,
                    image           :   data[i].logo,
                    foundedYear     :   data[i].foundedYear
                });
            }
            var view = new ClubView({model: club});            
            Lungo.dom('section#secClub').append(view.render().el);
            Lungo.Router.section('secClub');
        });
    }
});