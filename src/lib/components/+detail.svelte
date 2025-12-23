<script lang="ts">
  type tabOption = 'education' | 'achievements';
  let activeTab: tabOption = 'education';

  function setTab(tabName: tabOption) {
    activeTab = tabName;
  }
</script>

<div class="w-1/2 mx-auto {activeTab === 'education' ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-red-600' : 'bg-gradient-to-r from-lime-600 via-yellow-600 to-orange-600'} rounded-md p-0.5 shadow-lg shadow-indigo-900/20">
  <div class="bg-black rounded-md">
    <div class="relative right-0">
    <ul class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-auto" role="tablist">
      <li class="z-30 flex-auto text-center">
        <button
          class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer {activeTab === 'education' ? 'text-white bg-slate-700' : 'text-slate-600 bg-inherit'}"
          on:click={() => setTab('education')}
          role="tab"
          aria-selected={activeTab === 'education'}
          aria-controls="education"
        >
          Education
        </button>
      </li>
      <li class="z-30 flex-auto text-center">
        <button
          class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer {activeTab === 'achievements' ? 'text-white bg-slate-700' : 'text-slate-600 bg-inherit'}"
          on:click={() => setTab('achievements')}
          role="tab"
          aria-selected={activeTab === 'achievements'}
          aria-controls="achievements"
        >
          Achievements
        </button>
      </li>
    </ul>
 
    <div class="p-5">
      {#if activeTab === 'education'}
        <div id="education" role="tabpanel">
          <ul class="list-disc list-inside space-y-2 ">
            <li class="-indent-8 pl-5 marker:text-2xl marker:text-red-500 text-lg text-white font-grotesk ml-6">
                <span class="text-xl font-semibold text-red-600">
                    State University of Surabaya
                </span>
                <br>
                <span class="text-sm font-light text-slate-400">
                    (2021 - Present)
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
                    (2018 - 2021)
                </span>
                <br>
                <span class="text-base font-normal text-gray-300">
                    My High School Where I Graduated in Science Major
                </span>
          </ul>
        </div>
      {:else if activeTab === 'achievements'}
        <div id="achievements" role="tabpanel">
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