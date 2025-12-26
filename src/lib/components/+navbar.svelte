<script>
  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav class="block w-full px-4 py-0 mx-auto text-white lg:px-8 lg:py-3 sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-gray-100 max-w-5xl">
    <a href="/"
      class="mr-4 block cursor-pointer py-2 text-xl text-white font-orbitron font-bold">
      Kibbweeb
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="flex items-center p-1 text-sm gap-x-2 text-white font-mono">
          <a href="#about" class="flex items-center hover:text-indigo-400 transition-colors duration-300 ease-in-out">
            About
          </a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-white font-mono">
          <a href="#projects" class="flex items-center hover:text-indigo-400 transition-colors duration-300 ease-in-out">
            Projects
          </a>
        </li>
        <li class="flex items-center p-1 text-sm gap-x-2 text-white font-mono">
          <a href="#contacts" class="flex items-center hover:text-indigo-400 transition-colors duration-300 ease-in-out">
            Contacts
          </a>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu Button -->
    <button
      on:click={toggleMobileMenu}
      class="lg:hidden text-white hover:text-indigo-400 transition-colors duration-300 ease-in-out p-2"
      aria-label="Toggle menu"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {#if mobileMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden bg-transparent">
      <ul class="flex flex-col gap-2 px-4 py-4">
        <li class="flex items-center p-2 text-sm gap-x-2 text-white font-mono">
          <a
            href="#about"
            on:click={closeMenu}
            class="flex items-center hover:text-indigo-400 transition-colors duration-300 ease-in-out w-full"
          >
            About
          </a>
        </li>
        <li class="flex items-center p-2 text-sm gap-x-2 text-white font-mono">
          <a
            href="#projects"
            on:click={closeMenu}
            class="flex items-center hover:text-indigo-400 transition-colors duration-300 ease-in-out w-full"
          >
            Projects
          </a>
        </li>
        <li class="flex items-center p-2 text-sm gap-x-2 text-white font-mono">
          <a
            href="#contacts"
            on:click={closeMenu}
            class="flex items-center hover:text-indigo-400 transition-colors duration-300 ease-in-out w-full"
          >
            Contacts
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>