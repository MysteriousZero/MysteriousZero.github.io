<script lang="ts">
  const currentYear: number = new Date().getFullYear();
  
  interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }
  
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/mysteriouszero', icon: '🐙' },
    { name: 'Discord', url: '#', icon: '💬' },
    { name: 'Twitter', url: '#', icon: '🐦' }
  ];
</script>

<footer class="bg-gradient-to-t from-gray-900 to-black text-gray-400 py-12 border-t border-gray-800">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- Brand -->
      <div class="text-center md:text-left">
        <h3 class="text-2xl font-bold text-white mb-2">MysteriousZero</h3>
        <p class="text-sm">Building amazing projects together</p>
      </div>
      
      <!-- Quick Links -->
      <div class="text-center">
        <h4 class="text-white font-semibold mb-3">Quick Links</h4>
        <div class="space-y-2">
          <a href="#features" class="block hover:text-blue-400 transition-colors duration-300 text-sm">Features</a>
          <a href="https://github.com/mysteriouszero" target="_blank" rel="noopener noreferrer" class="block hover:text-blue-400 transition-colors duration-300 text-sm">GitHub</a>
          <a href="#" class="block hover:text-blue-400 transition-colors duration-300 text-sm">Documentation</a>
        </div>
      </div>
      
      <!-- Social -->
      <div class="text-center md:text-right">
        <h4 class="text-white font-semibold mb-3">Connect</h4>
        <div class="flex justify-center md:justify-end gap-4">
          {#each socialLinks as link}
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-2xl hover:scale-110 transition-transform duration-300"
              title={link.name}
            >
              {link.icon}
            </a>
          {/each}
        </div>
      </div>
    </div>
    
    <!-- Bottom -->
    <div class="text-center pt-8 border-t border-gray-800">
      <p class="text-sm">&copy; {currentYear} MysteriousZero. All rights reserved.</p>
      <p class="text-xs mt-2">Explore more about our work and resources.</p>
    </div>
  </div>
</footer>