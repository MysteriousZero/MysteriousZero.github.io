<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  interface Feature {
    title: string;
    description: string;
    icon: string;
  }
  
  const features: Feature[] = [
    { 
      title: "Showcase Your Work", 
      description: "Display your projects, demos, and creative packages with style.",
      icon: "🚀"
    },
    { 
      title: "Collaborate Easily", 
      description: "Invite team members, share ideas, and iterate quickly.",
      icon: "🤝"
    },
    { 
      title: "Documentation Hub", 
      description: "Centralize your guides and resources for easy reference.",
      icon: "📚"
    },
    { 
      title: "Open Source Friendly", 
      description: "Host, share, and contribute to open-source projects.",
      icon: "💻"
    }
  ];
</script>

<svelte:head>
  <title>MysteriousZero - Building Amazing Projects</title>
  <meta name="description" content="Building, sharing, and showcasing amazing projects for developers and organizations." />
</svelte:head>

<main class="min-h-screen flex flex-col bg-black text-white font-sans">
  <Hero />
  <Features {features} />
  <CTA />
  <Footer />
</main>