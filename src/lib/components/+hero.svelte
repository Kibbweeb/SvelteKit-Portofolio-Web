<script>
    import {Github, Linkedin, Mail} from 'lucide-svelte';
    
    let showMore = false;
    
    function toggleMore() {
        showMore = !showMore;
    }

</script>

  <div class="flex items-center justify-center px-4 mt-20 w-full mx-auto relative z-10" id="about">
    <div class="z-10 text-center max-w-4xl">
      <div class="flex items-center justify-center gap-4 mb-6">
        <a href="https://github.com/Kibbweeb" target="_blank" rel="noopener noreferrer" class="text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-110">
          <Github size={40} />
        </a>
        <a href="mailto:syakiebinsyirahi326@gmail.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-110">
          <Mail size={40} />
        </a>
      </div>
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-white font-orbitron mb-6">
        Ahmad Syakiebul Insyirahi
      </h1>

      <span class="inline-block bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-base font-semibold font-mono">
         i swear i'm a good developer, trust me bro
      </span>

      <p class="mt-8 text-lg font-medium text-pretty text-gray-300 lg:text-xl font-mono">
        I'm Ahmad Syakiebul Insyirahi, a student who enjoys learning new technologies and building web applications.
        {#if showMore}
          <span class="transition-opacity duration-300 text-md lg:text-lg font-grotesk">
            <br><br><br>
            I am currently navigating and surviving as an Informatics Engineering undergraduate at the State University of Surabaya (Unesa). <br><br>
            My journey started with a curiosity for how things work, which quickly turned into a passion for Backend Development. While many admire the paint on the walls, I’m the one obsessed with the foundation. I genuinely enjoy the 'invisible magic' of development—architecting efficient databases, writing clean APIs, and ensuring that a system remains scalable even when the user base grows. For me, there is a distinct satisfaction in knowing that the engine under the hood is purring perfectly. <br><br>

            However, I don't plan to stay hidden in the server room forever. <br><br>

            My long-term ambition is to evolve into a proficient Full-Stack Developer. I believe that to build truly seamless web experiences, one must understand the journey of a byte from the database all the way to the user's screen. I am currently bridging the gap between robust logic and dynamic design, aiming to craft applications that are not only powerful in performance but also intuitive and beautiful in interaction.<br><br>

            In short? I’m building the heavy machinery today so I can drive the whole car tomorrow. I’m always open to discussing new technologies, complex architectural challenges, or just the best way to center a div.
          </span>
        {/if}
      </p>
      <button on:click={toggleMore} class="mt-4 text-blue-600 hover:text-blue-400 focus:outline-none transition-colors duration-200 font-grotesk">
        {showMore ? 'Hide' : 'Read More'}
      </button>
    </div>
  </div>