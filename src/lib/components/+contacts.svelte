<script>
    import { siGmail, siGithub, siInstagram  } from "simple-icons";
</script>
    
<div class="container px-6 py-12 mx-auto mt-15" id="contacts">
    <div class="text-center">
        <h2 class="font-semibold text-2xl font-mono text-white">Contact Me</h2>

        <p class="mt-3 text-gray-500 font-grotesk">Feel free to reach out through any of these channels.</p>
    </div>

    <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 text-center max-w-3xl mx-auto">
        <a href="mailto:syakiebinsyirahi326@gmail.com" class="p-4 rounded-lg bg-transparent hover:bg-gray-900/30 transition-colors">
            <span class="inline-block p-3 text-white rounded-lg bg-red-600/80">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor">
                    <path d={siGmail.path} />
                </svg>
            </span>

            <h2 class="mt-4 text-base font-medium text-white font-grotesk">Email</h2>
            <p class="mt-2 text-sm text-gray-400 font-grotesk">Contact me by email.</p>
            <p class="mt-2 text-sm text-blue-400 font-grotesk">syakiebinsyirahi326@gmail.com</p>
        </a>

        <a href="https://github.com/Kibbweeb" target="_blank" rel="noopener noreferrer" class="p-4 rounded-lg bg-transparent hover:bg-gray-900/30 transition-colors">
            <span class="inline-block p-3 text-white rounded-lg bg-gray-800">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor">
                    <path d={siGithub.path} />
                </svg>
            </span>
            
            <h2 class="mt-4 text-base font-medium text-white font-grotesk">GitHub</h2>
            <p class="mt-2 text-sm text-gray-400 font-grotesk">Check out my repositories.</p>
            <p class="mt-2 text-sm text-blue-400 font-grotesk">@Kibbweeb</p>
        </a>

        <a href="https://instagram.com/kibbweeb_" target="_blank" rel="noopener noreferrer" class="p-4 rounded-lg bg-transparent hover:bg-gray-900/30 transition-colors">
            <span class="inline-block p-3 text-white rounded-lg bg-linear-to-br from-purple-600 via-pink-600 to-orange-500">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor">
                    <path d={siInstagram.path} />
                </svg>
            </span>
            
            <h2 class="mt-4 text-base font-medium text-white font-grotesk">Instagram</h2>
            <p class="mt-2 text-sm text-gray-400 font-grotesk">Follow me on Instagram.</p>
            <p class="mt-2 text-sm text-blue-400 font-grotesk">@kibbweeb_</p>
        </a>
    </div>
</div>
