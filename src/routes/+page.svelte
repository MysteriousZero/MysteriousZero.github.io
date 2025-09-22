<script>
  const features = [
    { title: "Showcase Your Work", description: "Display your projects, demos, and creative packages with style." },
    { title: "Collaborate Easily", description: "Invite team members, share ideas, and iterate quickly." },
    { title: "Documentation Hub", description: "Centralize your guides and resources for easy reference." },
    { title: "Open Source Friendly", description: "Host, share, and contribute to open-source projects." }
  ];
</script>

<main class="min-h-screen flex flex-col bg-black text-white font-sans">
  <!-- Hero Section -->
  <section class="flex flex-col items-center justify-center text-center py-24 px-4">
    <h1 class="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
      MysteriousZero
    </h1>
    <p class="text-xl md:text-2xl max-w-2xl mb-10 text-gray-400 leading-relaxed">
      Building, sharing, and showcasing amazing projects for developers and organizations.
    </p>
    <a href="#features" 
       class="relative inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider bg-blue-600 text-black overflow-hidden">
      <span class="absolute inset-0 bg-blue-500 opacity-30 blur-lg transform scale-110 transition-all duration-300"></span>
      <span class="relative z-10 text-white">Explore Features</span>
    </a>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-24 px-6 max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
      What We Offer
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {#each features as feature}
        <div class="relative bg-gray-900 rounded-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
          <h3 class="text-2xl font-semibold mb-4">{feature.title}</h3>
          <p class="text-gray-300 leading-relaxed">{feature.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-24 text-center px-4">
    <h2 class="text-5xl font-bold mb-6 leading-tight">
      Start Your Journey Today
    </h2>
    <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-400 leading-relaxed">
      Create, share, and collaborate on amazing projects effortlessly.
    </p>
    <a href="#"
       class="relative inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider bg-red-600 text-black overflow-hidden">
      <span class="absolute inset-0 bg-red-500 opacity-30 blur-lg transform scale-110 transition-all duration-300"></span>
      <span class="relative z-10 text-white">Get Started</span>
    </a>
  </section>

  <!-- Footer -->
  <footer class="bg-black text-gray-400 py-8 text-center">
    <p>&copy; {new Date().getFullYear()} MysteriousZero. All rights reserved.</p>
    <p>Explore more about our work and resources.</p>
  </footer>
</main>
