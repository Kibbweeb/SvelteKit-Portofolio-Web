<script>
  import Hero from '$lib/components/+hero.svelte';
  import Detail from '$lib/components/+detail.svelte';
  import Tech from '$lib/components/+tech.svelte';
  import Projects from '$lib/components/+projects.svelte';
</script>

<Hero />
<Detail />
<div class="flex items-center justify-center mt-8">
  <a href="/about" class="px-6 py-3 bg-indigo-600 text-white rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 font-mono">
    More About Me
  </a>
</div>
<Tech />
<Projects />