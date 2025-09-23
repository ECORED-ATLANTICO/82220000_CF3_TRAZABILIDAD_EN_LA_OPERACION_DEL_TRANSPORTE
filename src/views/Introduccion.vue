<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img(data-aos="fade-up")(src="@/assets/curso/intro/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text El componente formativo “Supervisión de la operación de transporte” ofrece al aprendiz herramientas técnicas y prácticas para abordar de manera integral la gestión de la trazabilidad en los procesos logísticos. A partir del conocimiento de conceptos como el monitoreo, el rastreo y la aplicación de procedimientos operativos estandarizados, se fortalecen las competencias necesarias para identificar desviaciones, controlar riesgos y garantizar el cumplimiento de la normativa. Esto permite al aprendiz actuar de manera oportuna y estratégica para mantener la eficiencia y la seguridad en cada fase del transporte.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Este componente también enfatiza el análisis de contingencias y en la generación de reportes e informes que respaldan la toma de decisiones con información precisa y confiable. Con un enfoque en la mejora continua, promueve la capacidad de evaluar el desempeño operativo y aplicar correctivos de forma proactiva. Así, se contribuye a la formación de profesionales capaces de asegurar la competitividad y sostenibilidad en la cadena de suministro.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
