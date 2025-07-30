<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
</svelte:head>

<script>
  import { onMount, onDestroy } from 'svelte';

  let mapElement;
  let map;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const L = await import('leaflet');

      map = L.map(mapElement).setView([36.1699, -115.1398], 10); // Centered on Las Vegas

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const cactusIcon = L.icon({
        iconUrl: 'https://emojicdn.elk.sh/🌵',
        iconSize: [32, 32]
      });

      map.on('click', (e) => {
        L.marker(e.latlng, { icon: cactusIcon }).addTo(map)
          .bindPopup(`Marker at ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`)
          .openPopup();
      });
    }
  });

  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });
</script>

<div bind:this={mapElement} class="h-96 rounded-lg border-2 border-sage-300"></div>
