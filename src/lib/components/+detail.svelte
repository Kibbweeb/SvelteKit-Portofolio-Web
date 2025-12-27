<script lang="ts">
  import { slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  type tabOption = 'education' | 'achievements';
  let activeTab: tabOption = 'education';

  function setTab(tabName: tabOption) {
    activeTab = tabName;
  }
</script>

<div class="mt-13">
<div class="w-5/6 lg:w-1/2 md:w-3/4 mx-auto rounded-md p-0.5 shadow-lg shadow-indigo-900/20 transition-all duration-700 ease-in-out {activeTab === 'education' ? 'bg-linear-to-r from-blue-600 via-purple-600 to-red-600 opacity-85' : 'bg-linear-to-r from-lime-600 via-yellow-600 to-orange-600 opacity-85'}">
  <div class="bg-black opacity-95 rounded-md">
    <div class="relative right-0">
    <ul class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-auto divide-x divide-slate-700" role="tablist">
      <li class="z-30 flex-auto text-center">
        <button
          class="relative z-30 flex items-center justify-center w-full px-0 py-3 text-sm mb-0 transition-all ease-in-out border-0 cursor-pointer {activeTab === 'education' ? 'text-white' : 'text-slate-500'} hover:text-white duration-300"
          on:click={() => setTab('education')}
          role="tab"
          aria-selected={activeTab === 'education'}
          aria-controls="education"
        >
          Education
          {#if activeTab === 'education'}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-red-600" transition:slide={{ duration: 300, easing: cubicOut }}></span>
          {/if}
        </button>
      </li>
      <li class="z-30 flex-auto text-center">
        <button
          class="relative z-30 flex items-center justify-center w-full px-0 py-3 mb-0 text-sm transition-all ease-in-out border-0 cursor-pointer {activeTab === 'achievements' ? 'text-white' : 'text-slate-500'} hover:text-white duration-300"
          on:click={() => setTab('achievements')}
          role="tab"
          aria-selected={activeTab === 'achievements'}
          aria-controls="achievements"
        >
          Achievements
          {#if activeTab === 'achievements'}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-lime-600 via-yellow-600 to-orange-600" transition:slide={{ duration: 300, easing: cubicOut }}></span>
          {/if}
        </button>
      </li>
    </ul>
 
    <div class="p-5">
      {#if activeTab === 'education'}
        <div role="tabpanel" class="transition-opacity duration-200">
          <ul class="list-disc list-inside space-y-2 ">
            <li class="-indent-8 pl-5 marker:text-2xl marker:text-red-500 text-lg text-white font-grotesk ml-6">
                <span class="text-xl font-semibold text-red-600">
                    State University of Surabaya
                </span>
                <br>
                <span class="text-sm font-light text-slate-400">
                    (2024 - Present)
                </span>
                <br>
                <span class="text-base font-normal text-gray-300">
                    On my way to Earn a Bachelor's Degree in Informatics Engineering. <br> Stay Tuned!
                </span>
            </li>
            <li class="-indent-8 pl-5 marker:text-2xl marker:text-blue-600 text-lg text-white font-grotesk ml-6">
                <span class="text-xl font-semibold text-blue-600">
                    SMA Negeri  1 Aikmel
                </span>
                <br>
                <span class="text-sm font-light text-slate-400">
                    (2021 - 2024)
                </span>
                <br>
                <span class="text-base font-normal text-gray-300">
                    Graduated with a Science Major
                </span>
            </li>
          </ul>
        </div>
      {:else}
        <div role="tabpanel" class="transition-opacity duration-200">
            <ul class="list-disc list-inside space-y-2 ">
                <li class="-indent-8 pl-5 marker:text-2xl marker:text-orange-600 text-lg text-white font-grotesk ml-6">
                    <span class="text-xl font-semibold text-orange-600">
                        OSN-K - Physics - 2nd Place
                    </span>
                    <br>
                    <span class="text-sm font-light text-slate-400">
                        (2023)
                    </span>
                    <br>
                    <span class="text-base font-normal text-gray-300">
                        Secured 2nd place in the Regency level Science Olympiad for Physics during High School.
                    </span>
                </li>
                <li class="-indent-8 pl-5 marker:text-2xl marker:text-lime-600 text-lg text-white font-grotesk ml-6">
                    <span class="text-xl font-semibold text-lime-600">
                        UNRAM Mission (Competition) - Physics - 4th Place
                    </span>
                    <br>
                    <span class="text-sm font-light text-slate-400">
                        (2022)
                    </span>
                    <br>
                    <span class="text-base font-normal text-gray-300">
                        Achieved 4th place in the UNRAM Mission Physics Competition at the University of Mataram.
                    </span>
                </li>
            </ul>
        </div>
      {/if}
    </div>
  </div>
  </div>
</div>
</div>