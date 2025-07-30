<script>
	import { onMount } from 'svelte';

	let mapElement;
	let map;

	onMount(async () => {
		if (mapElement) {
			const leaflet = await import('leaflet');
			
			map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

			leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			map.on('click', (e) => {
				const marker = leaflet.marker(e.latlng).addTo(map);
				marker.bindPopup("You clicked here!").openPopup();
			});
		}
	});
</script>

<svelte:head>
	<title>SvelteKit Test App</title>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />
</svelte:head>

<main>
	<h1>Welcome to your SvelteKit Test App!</h1>
	<p>This is a simple SvelteKit application with Leaflet maps.</p>
	<div id="map" style="height: 400px;" bind:this={mapElement}></div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
