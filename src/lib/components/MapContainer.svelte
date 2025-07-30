<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
</svelte:head>

<script>
  import { onMount, onDestroy } from 'svelte';

  let mapElement;
  let map;
  let loading = true;
  let error = null;

  onMount(async () => {
    if (typeof window === 'undefined') {
      // Ensure this only runs on the client
      return;
    }

    try {
      // Dynamically import Leaflet only on the client
      const L = await import('leaflet');

      // A short delay ensures that the DOM element is available after rendering
      await new Promise(resolve => setTimeout(resolve, 50));

      if (!mapElement) {
        throw new Error('Map container element not found in the DOM.');
      }

      // Initialize the map
      map = L.map(mapElement).setView([36.1699, -115.1398], 10); // Centered on Las Vegas

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(map);

      const cactusIcon = L.icon({
        iconUrl: 'https://emojicdn.elk.sh/🌵',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      L.marker([36.1699, -115.1398], { icon: cactusIcon })
        .addTo(map)
        .bindPopup('🌵 Welcome to Las Vegas! <br>Click anywhere to add more cacti!')
        .openPopup();

      map.on('click', (e) => {
        L.marker(e.latlng, { icon: cactusIcon }).addTo(map)
          .bindPopup(`🌵 Cactus at ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`)
          .openPopup();
      });

    } catch (err) {
      console.error('Leaflet initialization failed:', err);
      error = err.message;
    } finally {
      loading = false;
    }
  });

  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });
</script>

<div class="relative h-96 rounded-lg border-2 border-sage-300">
  <!-- Map container - always present -->
  <div bind:this={mapElement} class="absolute inset-0 w-full h-full"></div>
  
  <!-- Loading overlay -->
  {#if loading}
    <div class="absolute inset-0 flex items-center justify-center bg-sage-50 rounded-lg">
      <div class="text-center text-sage-600">
        <div class="text-4xl mb-2 animate-pulse">🌵</div>
        <p class="text-sm">Loading interactive map...</p>
      </div>
    </div>
  {/if}
  
  <!-- Error overlay -->
  {#if error}
    <div class="absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg">
      <div class="text-center text-red-600">
        <div class="text-4xl mb-2">⚠️</div>
        <p class="text-sm">Failed to load map: {error}</p>
      </div>
    </div>
  {/if}
</div>
