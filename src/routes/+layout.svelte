<script lang="ts">
	import './layout.css';
	import Meteors from '$lib/components/+meteors.svelte';
	import Navbar from '$lib/components/+navbar.svelte';
	import Footer from '$lib/components/+footer.svelte';

	let { children } = $props();
</script>

<div class="relative min-h-screen bg-black">
	<div class="absolute top-0 left-0 w-full min-h-full z-0 pointer-events-none overflow-hidden">
		<Meteors number={50} class="opacity-30" />
	</div>
	
	<div class="relative z-10">
		<Navbar />
		<main>
			{@render children()}
		</main>
		<Footer />
	</div>
</div>