<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Informe de operación
    
    .bloque-texto-g.color-secundario.bg-color-7.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un informe de operación es un documento estructurado que organiza y presenta los datos y eventos relevantes ocurridos durante un período específico en la operación de transporte. Su propósito es evaluar el rendimiento, identificar desviaciones, comunicar el estado de la operación y servir como base para la toma de decisiones estratégicas y tácticas. Más que una simple recopilación de datos, representa un análisis e interpretación que permite comprender lo sucedido en la carretera, en el almacén o en la ruta de entrega.
    
   
        
    separador

    .row.justify-content-center.mb-5
      .col-lg-10
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Características 

        .row.align-items-center.justify-content-center
          .col-md-8.col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema5/2.svg").mx-auto
          .col-lg
            p.mb-0 Para que un informe de operación cumpla con su propósito, debe reunir una serie de cualidades que aseguren su utilidad y credibilidad. Estas características permiten que la información sea clara, precisa y confiable, además de facilitar su análisis y el seguimiento continuo de la gestión operativa:
    
    .row.align-items-start.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/3.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        AcordionA(tipo="b").bg-color-6
          .div(titulo="Claridad ")
            p La información debe expresarse en lenguaje sencillo y preciso, evitando jerga técnica innecesaria. Los datos complejos se presentan en gráficos o tablas para facilitar su comprensión y asegurar que el mensaje sea entendido sin ambigüedades.
    
          .div(titulo="Concisión")
            p Resume únicamente la información esencial, sin redundancias ni detalles irrelevantes. La brevedad garantiza que el informe sea leído en su totalidad y que cumpla su objetivo comunicativo.
    
          .div(titulo="Objetividad")
            p La presentación de datos debe basarse en hechos y mediciones verificables, evitando opiniones o sesgos personales. Se incluyen tanto los logros como los desafíos, lo que refuerza la credibilidad del documento.
          .div(titulo="Periodicidad")
            p Los informes se generan en intervalos regulares (diarios, semanales, mensuales o trimestrales), lo que permite dar seguimiento a tendencias, detectar problemas a tiempo y evaluar el impacto de las acciones implementadas.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Estructura

    p.mb-5 La clave del informe radica en mantener una organización lógica y clara, donde cada sección cumpla un propósito definido y aporte información que facilite la toma de decisiones.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Estructura del informe de operación

    .tabla-a.color-primario.mb-5
      table
        caption Fuente: SENA,2025.
        thead
          tr
            th.bg-color-8 Sección
            th.bg-color-8 Descripción
            th.bg-color-8 Elementos clave
        tbody
          tr
            td Título y datos de identificación
            td Permite reconocer el informe y a quién está dirigido. Incluye título claro, fechas relevantes, responsables y destinatarios.
            td
              ul
                li • Título
                li • Fechas
                li • Autor
                li • Destinatario
          tr
            td Resumen ejecutivo
            td Síntesis breve (máximo una página) con los puntos más importantes del informe, conclusiones principales y recomendaciones clave.
            td
              ul
                li • Puntos clave
                li • Conclusiones
                li • Recomendaciones
                li • Métricas
          tr
            td Objetivos del informe
            td Define la meta y alcance del documento. Puede incluir preguntas que el informe busca responder.
            td
              ul
                li • Propósito
                li • Alcance
                li • Preguntas clave
          tr
            td Metodología
            td Explica cómo se recopilaron y analizaron los datos, con fuentes, período, herramientas y KPIs usados.
            td
              ul
                li • Fuentes
                li • Período
                li • <em>Software</em>
                li • KPIs
          tr
            td Resultados
            td Presenta los datos de forma objetiva, apoyados en tablas y gráficos. Muestra cifras claras y desglose de métricas.
            td
              ul
                li • Datos
                li • Gráficos
                li • Tablas
                li • Desglose
          tr
            td Análisis y discusión
            td Interpreta los resultados, explica tendencias, compara con estándares, identifica causas raíz y evalúa el impacto.
            td
              ul
                li • Interpretación
                li • Comparación
                li • Tendencias
                li • Causas raíz
                li • Impacto
          tr
            td Conclusiones
            td Resume los hallazgos más importantes, responde a los objetivos planteados y ofrece un balance del estado general de la operación.
            td
              ul
                li • Síntesis
                li • Respuesta
                li • Estado general
          tr
            td Recomendaciones
            td Propone acciones concretas con responsables, plazos y beneficios para mejorar la operación.
            td
              ul
                li • Acciones
                li • Responsables
                li • Plazos
                li • Beneficios
    
    .row.justify-content-center
      .col-lg-10
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--2.rounded-4.overflow-hidden.mb-5
          .row.align-items-center
            .col-sm-11.col-lg-9.ms-auto.order-2
              p.mb-0 Un informe de operación bien estructurado garantiza que los datos no solo se registren, sino que se transformen en información clara y útil para evaluar el desempeño, optimizar procesos y respaldar decisiones estratégicas en la gestión del transporte.
            .d-none.d-lg-block.col-lg-3.order-1
              .d-flex.justify-content-center
                img(data-aos="fade-up")(src="@/assets/curso/tema5/4.png" alt="Imagen decorativo")


</template>

<script>
export default {
  name: 'Tema5',
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
