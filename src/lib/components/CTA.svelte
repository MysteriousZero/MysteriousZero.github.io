<style>
  .gradient-text-red {
    background: linear-gradient(135deg, #fb7185 0%, #ec4899 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
</style>

<section class="py-24 text-center px-4 relative">
  <!-- Background effects -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
  </div>
  
  <div class="relative z-10">
    <h2 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
      Start Your <span class="gradient-text-red">Journey</span> Today
    </h2>
    
    <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-400 leading-relaxed">
      Join MysteriousZero and create, share, and collaborate on amazing projects effortlessly.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="https://github.com/mysteriouszero"
         target="_blank"
         rel="noopener noreferrer"
         class="group relative inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 overflow-hidden transition-all duration-300 transform hover:scale-105">
        <span class="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-lg transform scale-110 transition-all duration-300"></span>
        <span class="relative z-10 text-white">Get Started</span>
      </a>
      
      <a href="#features"
         class="group relative inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider border-2 border-gray-600 hover:border-red-500 overflow-hidden transition-all duration-300 transform hover:scale-105">
        <span class="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-all duration-300"></span>
        <span class="relative z-10 text-white">Learn More</span>
      </a>
    </div>
  </div>
</section>