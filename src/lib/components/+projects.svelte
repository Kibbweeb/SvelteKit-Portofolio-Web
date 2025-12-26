<script>
    import screenshotImg from '$lib/assets/Screenshot 2025-12-26 100744.png';
    import Nothing from '$lib/assets/coming-soon-notification-template-modern-style_1017-53352.jpg';
    import { siReact, siGo, siPostgresql, siTailwindcss } from 'simple-icons';
</script>

<div class="w-5/6 md:w-3/5 mx-auto px-5 mt-20">
    <div class="flex flex-col justify-center">
        <div class="text-center">
            <h2 class="font-semibold text-2xl font-mono text-white">Projects</h2>
            <p class="max-w-md mx-auto mt-2 text-gray-500 font-grotesk">
                Here are some pf my projects that i've worked on recently.
            </p>
            <span class="max-w-md mx-auto mt-2 text-gray-500 text-sm font-grotesk">
                (Stay tuned for more projects from me.)
            </span>
        </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            
        <a href="https://github.com/Kibbweeb/fixmyunesa" target="_blank" rel="noopener noreferrer" class="block">
            <div class="p-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-red-600 rounded-lg hover:scale-105 transition-transform">
                <div class="block w-full rounded-lg shadow-lg overflow-hidden bg-slate-950">
                
                <div class="relative h-48 bg-gray-950">
                    <img class="w-full h-full object-cover" src={screenshotImg} alt="Project screenshot" />
                
                    <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent">
                    </div>
                </div>
                
                <div class="p-6">
                    <h3 class="text-2xl font-bold font-mono text-blue-600 mb-4">FixMyUnesa</h3>
                    
                    <p class="text-gray-300 text-sm mb-6 font-grotesk">
                        FixMyUnesa is a web-based application designed to streamline the process of reporting and managing facility-related issues within the State University of Surabaya (Unesa) campus.
                    </p>
                    
                    <div class="grid grid-cols-4 gap-4 mb-6">
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siReact.hex}">
                                <path d={siReact.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">React</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siGo.hex}">
                                <path d={siGo.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">Go</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siPostgresql.hex}">
                                <path d={siPostgresql.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">PostgreSQL</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siTailwindcss.hex}">
                                <path d={siTailwindcss.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">TailwindCSS</span>
                        </div>

                    </div>
                    
                </div>
            </div>
            </div>
        </a>

        <a href="#top" class="block cursor-not-allowed opacity-65">
            <div class="p-0.5 bg-linear-to-r from-green-600 via-cyan-600 to-indigo-600 rounded-lg hover:scale-105 transition-transform">
            <div class="block w-full rounded-lg shadow-lg overflow-hidden bg-slate-950">
                
                <div class="relative h-48 bg-gray-950">
                    <img class="w-full h-full object-cover" src={Nothing} alt="Coming Soon" />
                
                    <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 to-transparent">
                    </div>
                </div>
                
                <div class="p-6">
                    <h3 class="text-2xl font-bold font-mono text-green-600 mb-4">Coming Soon!</h3>
                    
                    <p class="text-gray-300 text-sm mb-6 font-grotesk">
                        More exciting projects are on the way! Stay tuned for updates as I continue to develop and share new applications and tools. Don't forget to check back here for the latest additions to my portfolio.
                    </p>

                    <div class="grid grid-cols-4 gap-4 mb-6">
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siReact.hex}">
                                <path d={siReact.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">React</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siGo.hex}">
                                <path d={siGo.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">Go</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siPostgresql.hex}">
                                <path d={siPostgresql.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">PostgreSQL</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" style="color: #{siTailwindcss.hex}">
                                <path d={siTailwindcss.path} />
                            </svg>
                            <span class="text-xs text-gray-400 mt-1 font-grotesk">TailwindCSS</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        </a>

        </div>
    </div>
</div>
