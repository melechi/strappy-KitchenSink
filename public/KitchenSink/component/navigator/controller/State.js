$JSKK.Class.create
(
	{
		$namespace:	'KitchenSink.component.navigator.controller',
		$name:		'State',
		$extends:	strappy.mvc.stateful.Controller
	}
)
(
	{},
	{
		init: function()
		{
			this.init.$parent();
			this.getView('Default').observe('onReady',this.onViewReady.bind(this));
		},
		onBeforeChange: function(state,key,value)
		{
			
		},
		onViewReady: function(view)
		{
			this.setReady();
		}
	}
);