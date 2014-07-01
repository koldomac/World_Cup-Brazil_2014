var Match = Backbone.Model.extend ({
	defaults: {
		match_number	:	0,
		location		:	'',
		datetime		:	'',
		status			:	'',
		home_team		: 	[{
			country		: 	'',
			goals		:	0
		}],
		away_team		: 	[{
			country		: 	'',
			goals		:	0
		}],
	}
});