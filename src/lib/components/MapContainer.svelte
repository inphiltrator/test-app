<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
</svelte:head>

<script>
  import { onMount, onDestroy } from 'svelte';

  let mapElement;
  let map;
  let loading = true;
  let error = null;
  let mapInitialized = false;

  async function initializeMap() {
    if (mapInitialized || !mapElement) return;
    
    try {
      const L = await import('leaflet');

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

      // Add initial marker for Las Vegas
      L.marker([36.1699, -115.1398], { icon: cactusIcon })
        .addTo(map)
        .bindPopup('🌵 Welcome to Las Vegas! <br>Click anywhere to add more cacti!')
        .openPopup();

      map.on('click', (e) => {
        L.marker(e.latlng, { icon: cactusIcon }).addTo(map)
          .bindPopup(`🌵 Cactus at ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}`)
          .openPopup();
      });

      mapInitialized = true;
      loading = false;
    } catch (err) {
      error = err.message;
      loading = false;
    }
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      loading = false;
    }
  });

  // Initialize map when mapElement becomes available
  $: if (mapElement && !mapInitialized && !loading) {
    initializeMap();
  }

  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });
</script>

{#if loading}
  <div class="h-96 rounded-lg border-2 border-sage-300 flex items-center justify-center bg-sage-50">
    <div class="text-center text-sage-600">
      <div class="text-4xl mb-2 animate-pulse">🌵</div>
      <p class="text-sm">Loading interactive map...</p>
    </div>
  </div>
{:else if error}
  <div class="h-96 rounded-lg border-2 border-red-300 flex items-center justify-center bg-red-50">
    <div class="text-center text-red-600">
      <div class="text-4xl mb-2">⚠️</div>
      <p class="text-sm">Failed to load map: {error}</p>
    </div>
  </div>
{:else}
  <div bind:this={mapElement} class="h-96 rounded-lg border-2 border-sage-300"></div>
{/if}
