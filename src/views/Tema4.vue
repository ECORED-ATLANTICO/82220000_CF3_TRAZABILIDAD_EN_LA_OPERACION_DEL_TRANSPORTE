<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Reporte del sistema de trazabilidad
    
    img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text.box-shadow En la supervisión de la operación del transporte, los reportes del sistema de trazabilidad se consolidan como una herramienta estratégica. Estos documentos no solo registran la información generada en cada etapa del proceso logístico, sino que también constituyen la base para garantizar la transparencia, fortalecer la gestión de riesgos, optimizar la toma de decisiones y promover la mejora continua.
    
    separador
    
    .row.justify-content-center
      .col-lg-10
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Concepto
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-0 Un reporte de trazabilidad es un documento estructurado que integra y organiza los datos capturados por el sistema a lo largo de la cadena de transporte. Su valor principal radica en la capacidad de reconstruir el recorrido completo de un producto, envío o activo, desde el punto de origen hasta el destino final, incorporando cada etapa intermedia con precisión y confiabilidad.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Elementos 
    
    p.mb-5 Un reporte de trazabilidad debe contener información precisa y completa que permita reconstruir el historial del envío desde su origen hasta el destino final. Aunque los detalles pueden variar según la industria y el tipo de carga, existen elementos esenciales que garantizan su utilidad y confiabilidad:

    PasosA.color-secundario.mb-5(tipo="n")
      .row.align-items-center.justify-content-center
        .col-lg-8.mb-4.mb-lg-0
          h3 Identificación del envío/carga
          p Incluye el número único de envío o guía de transporte, la descripción de la carga (tipo, cantidad, peso, dimensiones, entre otros), el valor declarado para seguros y contabilidad, así como los datos completos del remitente y del destinatario. Este bloque garantiza la individualización de cada operación de transporte.
        .col-md-8.col-lg-4
          figure
            img(src='@/assets/curso/tema4/2.png', alt='Texto que describa la imagen')

      .row.align-items-center.justify-content-center
        .col-md-8.col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/3.png', alt='Texto que describa la imagen')
        .col-lg-8
          h3 Información de origen y destino
          p Registra los puntos clave del recorrido: dirección, fecha y hora de recogida en el origen; ubicación, fecha y hora de llegada y salida en puntos de transbordo (si los hay); y la dirección, fecha y hora estimada y real de entrega en el destino. Permite reconstruir la trazabilidad geográfica y temporal.
      .row.align-items-center.justify-content-center
        .col-lg-8.mb-4.mb-lg-0
          h3 Detalles de la ruta y el viaje
          p Contiene la comparación entre la ruta planificada y la ejecutada, los kilómetros recorridos, los tiempos de tránsito totales y parciales, las paradas realizadas (con motivo y duración), y la velocidad promedio. Aporta información clave para evaluar la eficiencia operativa.
        .col-md-8.col-lg-4
          figure
            img(src='@/assets/curso/tema4/4.png', alt='Texto que describa la imagen')

      .row.align-items-center.justify-content-center
        .col-md-8.col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/5.png', alt='Texto que describa la imagen')
        .col-lg-8
          h3 Información del activo de transporte
          p Describe los recursos utilizados: identificación del vehículo (placa y tipo), datos del conductor (nombre y licencia), estado del vehículo (kilometraje inicial/final y consumo de combustible), así como condiciones ambientales relevantes como temperatura y humedad en contenedores refrigerados.
      .row.align-items-center.justify-content-center
        .col-lg-8.mb-4.mb-lg-0
          h3 Incidentes y desviaciones
          p Registra eventos no planificados como accidentes, robos, averías, retrasos o daños. Se documenta la fecha, hora y ubicación, la causa raíz (si se conoce), las acciones correctivas o de mitigación y el impacto en la operación (costos, retrasos o pérdidas). Facilita la gestión de riesgos.
        .col-md-8.col-lg-4
          figure
            img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')

      .row.align-items-center.justify-content-center
        .col-md-8.col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
        .col-lg-8
          h3 Estados de la carga
          p Verifica la condición de la mercancía y su embalaje desde el inicio hasta el final del transporte. También incluye el control de sellos de seguridad y confirma la integridad de la carga, reduciendo incertidumbres sobre pérdidas o daños.
      .row.align-items-center.justify-content-center
        .col-lg-8.mb-4.mb-lg-0
          h3 Fechas y horas clave
          p Resume los hitos temporales de la operación: inicio, fin y duración total. Estos datos permiten medir tiempos de ciclo y comparar contra los parámetros planificados.
        .col-md-8.col-lg-4
          figure
            img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema4',
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
