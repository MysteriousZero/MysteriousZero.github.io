<script lang="ts">
  interface Feature {
    title: string;
    description: string;
    icon: string;
  }
  
  export let features: Feature[] = [];
  
  import { fly } from 'svelte/transition';
</script>

<style>
  .gradient-text {
    background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
</style>

<section id="features" class="py-24 px-6 max-w-6xl mx-auto">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
      What We <span class="gradient-text">Offer</span>
    </h2>
    <p class="text-gray-400 text-lg max-w-2xl mx-auto">
      Everything you need to build, share, and showcase your amazing projects
    </p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {#each features as feature, index}
      <div 
        class="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-gray-700 hover:border-blue-500/50"
        in:fly={{ y: 50, duration: 600, delay: index * 150 }}
      >
          <!-- Icon -->
          <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          
          <!-- Content -->
          <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
            {feature.title}
          </h3>
          <p class="text-gray-300 leading-relaxed text-sm">
            {feature.description}
          </p>
          
          <!-- Hover effect overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    {/each}
  </div>
</section>