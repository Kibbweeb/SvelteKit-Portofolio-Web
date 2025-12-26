<script lang="ts">
	import './layout.css';
	import Meteors from '$lib/components/+meteors.svelte';
	import Navbar from '$lib/components/+navbar.svelte';

	let { children } = $props();
</script>

<div class="relative min-h-screen bg-black overflow-hidden">
	<div class="absolute inset-0 overflow-hidden">
		<Meteors number={85} class="opacity-30" />
	</div>
	
	<div class="relative z-20">
		<Navbar />
		<main>
			{@render children()}
		</main>
	</div>
</div>