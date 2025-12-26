<script lang="ts">
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  let className: string | undefined = undefined;
  export { className as class }; 
  
  export let number = 20;

  type MeteorStyle = {
    top: string;
    left: string;
    delay: string;
    duration: string;
  };

  let meteorStyles: MeteorStyle[] = [];

  onMount(() => {
    const fullHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
    
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * fullHeight) + "px",
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      delay: Math.random() * 0.6 + 0.2 + "s",
      duration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    meteorStyles = styles;
  });
</script>

{#each meteorStyles as style, idx}
  <span
    class={cn(
      "meteor-item pointer-events-none absolute size-1 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
      className
    )}
    style="top: {style.top}; left: {style.left}; --meteor-duration: {style.duration}; --meteor-delay: {style.delay};"
  >
    <div
      class="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-gradient-to-r from-slate-500 via-blue-500 to-transparent"
    ></div>
  </span>
{/each}