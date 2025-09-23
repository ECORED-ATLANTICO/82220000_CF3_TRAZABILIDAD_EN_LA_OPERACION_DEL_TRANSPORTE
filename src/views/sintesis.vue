<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El componente formativo “Supervisión de la operación de transporte” permite comprender los procesos de control logístico, desde su monitoreo hasta la generación de informes. Se inicia con el monitoreo, abordando concepto, clases, herramientas y procedimientos; seguido del rastreo, que garantiza la visibilidad en tiempo real de los activos.
    
        .cajon.color-secundario.p-5.mb-4.bg-color-1.mb-3
          p.mb-0 Luego, se estudian las contingencias aplicadas, su tipología, planes de respuesta, criterios de evaluación y protocolos de atención. También se analizan los reportes del sistema de trazabilidad, identificando sus elementos clave para la toma de decisiones y el cumplimiento normativo.
        p Finalmente, se presenta el informe de operación, detallando sus características y estructura como herramienta para comunicar el desempeño y promover la mejora continua.


    .row.justify-content-center.bg-color-sintesis.tarjeta
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo “Supervisión de la operación de transporte” ofrece una aproximación integral a los conocimientos fundamentales sobre el control logístico y la gestión de la trazabilidad. Este módulo analiza detalladamente el monitoreo y el rastreo, resaltando su importancia en cuanto a la visibilidad de los procesos, y se desglosan sus conceptos, clases, herramientas y procedimientos. Asimismo, se estudian las contingencias aplicadas, lo que permite comprender los tipos de riesgos, los planes de respuesta, los criterios de evaluación y los protocolos que deben activarse en situaciones imprevistas. La propuesta profundiza en los reportes del sistema de trazabilidad, así como en los elementos clave que garantizan la transparencia, la toma de decisiones y el cumplimiento normativo. Además, se destacan los informes de operación, junto con sus características y estructura, enfatizando la claridad y objetividad para comunicar el desempeño de la operación y facilitar la mejora continua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
