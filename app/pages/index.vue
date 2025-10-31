<template>
  <main class="min-h-screen bg-white">
    <BlockHero
      title="Transform Your Space with Expert Painting"
      subtitle="Professional interior and exterior painting services that bring your vision to life"
      image="/modern-house-exterior-freshly-painted.jpg"
      :primary-button="{ text: 'Get Free Quote', link: '/contact' }"
      :secondary-button="{ text: 'View Gallery', link: '/gallery' }"
    />

    <BlockServices
      title="Our Services"
      description="Comprehensive painting solutions for every need"
      :services="[
        { icon: '🏠', title: 'Interior Painting', description: 'Transform your living spaces with beautiful, lasting finishes' },
        { icon: '🏗️', title: 'Exterior Painting', description: 'Protect and enhance your property\'s curb appeal' },
        { icon: '✨', title: 'Specialty Finishes', description: 'Custom textures, murals, and decorative painting' }
      ]"
    />

    <BlockStats
      title="Our Track Record"
      :stats="[
        { value: '500+', label: 'Projects Completed', description: 'Happy customers' },
        { value: '15+', label: 'Years Experience', description: 'Industry expertise' },
        { value: '50+', label: 'Team Members', description: 'Professional crew' },
        { value: '98%', label: 'Satisfaction Rate', description: 'Quality guaranteed' }
      ]"
    />

    <BlockFeatures
      title="Why Choose Debo Painting"
      description="We're committed to delivering exceptional results"
      :features="[
        { icon: '⚡', title: 'Fast & Efficient', description: 'We respect your time and complete projects on schedule' },
        { icon: '✓', title: 'Quality Materials', description: 'We use only premium paints and supplies' },
        { icon: '💰', title: 'Transparent Pricing', description: 'Clear quotes with no hidden fees or surprises' },
        { icon: '🛡️', title: 'Fully Insured', description: 'Licensed and insured for your peace of mind' },
        { icon: '🎨', title: 'Expert Team', description: 'Skilled professionals with years of experience' },
        { icon: '🌟', title: 'Satisfaction Guaranteed', description: 'We\'re not done until you\'re completely happy' }
      ]"
    />

    <BlockProcess
      title="How We Work"
      description="A simple, stress-free process from start to finish"
      :steps="[
        { title: 'Free Consultation', description: 'We visit your property to discuss your vision, assess the work, and provide a detailed quote' },
        { title: 'Preparation', description: 'Thorough surface preparation and careful protection of your furniture and floors' },
        { title: 'Professional Painting', description: 'Expert application using premium materials and proven techniques' },
        { title: 'Final Inspection', description: 'Complete walkthrough to ensure everything meets our high standards and your expectations' }
      ]"
    />
  </main>
</template>

<script setup lang="ts">
// Components are auto-imported from app/components/content/
</script>
