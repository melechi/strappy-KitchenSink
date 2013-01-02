$JSKK.Class.create
(
	{
		$namespace:	'KitchenSink.component.search.controller',
		$name:		'Default',
		$extends:	strappy.mvc.Controller
	}
)
(
	{},
	{
		init: function()
		{
			this.init.$parent();
			this.getController('State').observe('onReadyState',this.onReadyState.bind(this));
		},
		onTemplatesLoaded: function(view)
		{
			
		},
		onReadyState: function()
		{
			this.getView('Default').syncView();
		},
		onSignalShow: function()
		{
			this.getView('Default').show();
		},
		onSignalHide: function()
		{
			this.getView('Default').hide();
		}
	}
);