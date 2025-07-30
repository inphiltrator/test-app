<script>
	import '../app.css';
	import MapContainer from '$lib/components/MapContainer.svelte';
</script>

<main class="min-h-screen p-8">
	<!-- Header -->
	<header class="glass-effect p-6 mb-8 max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold text-canyon-800 text-center mb-2">
			🌵 Southwest Explorer
		</h1>
		<p class="text-terracotta-600 text-center text-lg">
			Discover the beauty of the American Southwest
		</p>
	</header>

	<!-- Interactive Map -->
	<section class="glass-effect p-6 max-w-4xl mx-auto">
		<h2 class="text-2xl font-semibold text-sage-700 mb-4">
			🗺️ Interactive Map
		</h2>
		<p class="text-sm text-sage-600 mb-4">
			Click anywhere on the map to add a 🌵 cactus marker!
		</p>
		<MapContainer />
	</section>

	<!-- Features Section -->
	<section class="mt-8 max-w-4xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="glass-effect p-6 text-center">
				<div class="text-3xl mb-3">🏔️</div>
				<h3 class="text-lg font-semibold text-desert-700 mb-2">Desert Landscapes</h3>
				<p class="text-sm text-desert-600">Explore stunning desert vistas and rock formations</p>
			</div>
			<div class="glass-effect p-6 text-center">
				<div class="text-3xl mb-3">🌅</div>
				<h3 class="text-lg font-semibold text-canyon-700 mb-2">Golden Sunsets</h3>
				<p class="text-sm text-canyon-600">Witness breathtaking sunsets over vast horizons</p>
			</div>
			<div class="glass-effect p-6 text-center">
				<div class="text-3xl mb-3">🦎</div>
				<h3 class="text-lg font-semibold text-sage-700 mb-2">Wildlife</h3>
				<p class="text-sm text-sage-600">Discover unique desert flora and fauna</p>
			</div>
		</div>
	</section>
</main>
