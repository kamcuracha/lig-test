var elixir = require('laravel-elixir');

elixir((mix) => {
	mix
	.sass('main.scss', 'assets/css/main.css', 'assets/scss')
});
