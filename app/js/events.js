Lungo.dom('#liTeams').tap(function(event) {
    var url="http://worldcup.kimonolabs.com/api/teams?sort=groupPoints,-1&apikey=1e11ea14a75e367af4fcfd72306fdb0e";
    var equipos = new Equipos();
    Lungo.Service.json(url, {}, function(data) {
        for(var i in data) {
            var equipo = new Equipo ({
                id      :   data[i].id,
                name    :   data[i].name,
                logo    :   data[i].logo,
                group   :   data[i].group,
                points  :   data[i].groupPoints,
                rank    :   data[i].groupRank
            });
            equipos.add(equipo);
        }
        var view = new TeamlistView({collection: equipos});
        
        equipos.comparator = "rank";
        equipos.sort();
        equipos.comparator = "group";
        equipos.sort();
        var view = new TeamlistView1({collection: equipos});
    });
});

Lungo.dom ('#liPlayers').tap(function(event) {
    var url ="http://worldcup.kimonolabs.com/api/players?sort=goals,-1&apikey=1e11ea14a75e367af4fcfd72306fdb0e";
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
        var view = new PlayerlistView({collection: players});
        
        players.comparator = "name";
        players.sort();
        var view = new PlayerlistView1({collection: players});
    });
});

Lungo.dom('#liToday').tap(function(event) {
    var url ="http://worldcup.sfg.io/matches/today/?by_date=ASC";
    var matches = new Matches();
    Lungo.Service.json(url, {}, function(data) {
        for(var i in data) {
            var match = new Match ({
                match_number    :   data[i].match_number,
                location        :   data[i].location,
                datetime        :   data[i].datetime.substring(11,16),
                status          :   data[i].status,
                home_team       :   data[i].home_team,
                away_team       :   data[i].away_team
            });
            matches.add(match);
        }
        var view = new MatchListView({collection: matches});
    });
});

Lungo.dom('#liCurrent').tap(function(event) {
    var url ="http://worldcup.sfg.io/matches/current";
    var matches = new Matches();
    Lungo.Service.json(url, {}, function(data) {
        for(var i in data) {
            var match = new Match ({
                match_number    :   data[i].match_number,
                location        :   data[i].location,
                datetime        :   data[i].datetime.substring(11,16),
                status          :   data[i].status,
                home_team       :   data[i].home_team,
                away_team       :   data[i].away_team
            });
            matches.add(match);
        }
        var view = new MatchListView1({collection: matches});
    });
});

Lungo.dom('#liTomorrow').tap(function(event) {
    var url ="http://worldcup.sfg.io/matches/tomorrow/?by_date=ASC";
    var matches = new Matches();
    Lungo.Service.json(url, {}, function(data) {
        for(var i in data) {
            var match = new Match ({
                match_number    :   data[i].match_number,
                location        :   data[i].location,
                datetime        :   data[i].datetime.substring(11,16),
                status          :   data[i].status,
                home_team       :   data[i].home_team,
                away_team       :   data[i].away_team
            });
            matches.add(match);
        }
        var view = new MatchListView2({collection: matches});
    });
});