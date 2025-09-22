<script lang="ts">
  import { onMount } from 'svelte';
  
  let heroElement: HTMLElement;
  
  onMount(() => {
    // Add some subtle scroll effects or animations here if desired
  });
</script>

<style>
  .gradient-text-hero {
    background: linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #3b82f6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>

<section bind:this={heroElement} class="flex flex-col items-center justify-center text-center py-24 px-4 min-h-screen relative overflow-hidden">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
  </div>
  
  <div class="relative z-10">
    <h1 class="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
      <span class="gradient-text-hero">
        MysteriousZero
      </span>
    </h1>
    
    <p class="text-xl md:text-2xl max-w-2xl mb-10 text-gray-400 leading-relaxed">
      Building, sharing, and showcasing amazing projects for developers and organizations.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#features" 
         class="group relative inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 overflow-hidden transition-all duration-300 transform hover:scale-105">
        <span class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-30 blur-lg transform scale-110 transition-all duration-300"></span>
        <span class="relative z-10 text-white">Explore Features</span>
      </a>
      
      <a href="https://github.com/mysteriouszero" 
         target="_blank"
         rel="noopener noreferrer"
         class="group relative inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider border-2 border-gray-600 hover:border-blue-500 overflow-hidden transition-all duration-300 transform hover:scale-105">
        <span class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-all duration-300"></span>
        <span class="relative z-10 text-white">View GitHub</span>
      </a>
    </div>
  </div>
</section>