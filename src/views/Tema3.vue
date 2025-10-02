<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contingencias aplicadas
    
    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.align-items-center.justify-content-center
          .col-md-8.col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/1.svg").mx-auto
          .col-lg
            p.mb-0 En el transporte, la operación no siempre transcurre según lo previsto, pues existen factores internos y externos que pueden generar interrupciones o riesgos. Para hacerles frente, es necesario comprender claramente qué son las contingencias y cómo afectan el sistema.
        
        separador

        .row.justify-content-center
          .col-lg-10
            #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
              h2 3.1 Concepto

        .row.justify-content-center
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") Una contingencia es cualquier evento o situación no planificada e indeseada que tiene el potencial de afectar negativamente la continuidad, la seguridad, la eficiencia o el cumplimiento de una operación de transporte. Estos eventos pueden variar en su origen, desde fallas internas del sistema hasta factores externos incontrolables, y su impacto puede ir desde un leve retraso hasta la pérdida total de la carga o del vehículo. Su característica principal es su naturaleza inesperada y la necesidad de una respuesta rápida y efectiva.
          .col-lg-1.mb-3.mb-lg-0
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/18.svg", data-aos="zoom-in")
    
    separador

    .row.justify-content-center
      .col-lg-10
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Tipos 
        
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--2.rounded-4.overflow-hidden.mb-5
          .row.align-items-center
            .col-sm-11.col-lg-9.ms-auto.order-2
              p.mb-0 Las operaciones de transporte están expuestas a múltiples situaciones inesperadas que pueden afectar la seguridad, la continuidad y la eficiencia del servicio. Estas contingencias se clasifican en diferentes categorías para facilitar su identificación, prevención y gestión:
            .d-none.d-lg-block.col-lg-3.order-1
              .d-flex.justify-content-center
                img(data-aos="fade-up")(src="@/assets/curso/tema3/3.png" alt="Imagen decorativo")
    
    .row.justify-content-center.mb-5.z-2.conectadas-horizontal
      .col-lg-10.position-relative
        .avatar.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema3/4.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/5.svg", alt="alt").img100
            .col
              h5.mb-1 Accidentes  de tráfico
              p.mb-0 Colisiones, vuelcos o salidas de la vía que ocasionan daños materiales, lesiones o pérdida de carga.

        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/6.svg", alt="alt").img100
            .col
              h5.mb-1 Fallas mecánicas 
              p.mb-0 Averías en motor, frenos, neumáticos o sistema eléctrico que ponen en riesgo la operación.

        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/5.svg", alt="alt").img100
            .col
              h5.mb-1 Retrasos operacionales
              p.mb-0 Demoras por tráfico, congestión en carga/descarga, problemas en aduanas o esperas prolongadas.
              
        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/6.svg", alt="alt").img100
            .col
              h5.mb-1 Robos y asaltos
              p.mb-0 Sustracción de carga o vehículo, generando pérdidas económicas y riesgos al personal.
    
  
    .row.align-items-start.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", alt="").mb-4.mb-lg-0
      .col-lg-7
        AcordionA(tipo="b").bg-color-6
          .div(titulo="Condiciones climáticas adversas")
            p Tormentas, nevadas, inundaciones o niebla que dificultan o imposibilitan el tránsito.
    
          .div(titulo="Desastres naturales")
            p Terremotos, deslizamientos o erupciones que bloquean rutas o destruyen infraestructura.
    
          .div(titulo="Problemas con la carga")
            p Daños, contaminación o errores en conteo y etiquetado durante el transporte.
          .div(titulo="Problemas con el personal")
            p Ausencia del conductor, problemas de salud o incidentes de seguridad que afectan la operación.
          .div(titulo="Problemas de documentación")
            p Pérdida o errores en manifiestos, permisos o licencias que generan sanciones o detenciones.

    separador
    
    .row.justify-content-center
      .col-lg-10
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Planes de respuesta 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .d-none.d-lg-block.col-lg-2
        figure
          img(data-aos="fade-up")(src="@/assets/curso/tema3/8.png" alt="Imagen decorativo")
      .col-lg-8
        .p-4.bg-decorado--1.rounded-4.overflow-hidden.mb-3
          p.mb-0 Un plan de respuesta es un conjunto de procedimientos y recursos asignados para gestionar de manera eficiente un evento inesperado. Su diseño asegura una reacción rápida y coordinada, minimizando impactos negativos sobre la operación. 
    
        .tarjeta.bg-fondo-2
          SlyderA(tipo="b").p-4
            .row.align-items-center.justify-content-center
              .col-lg-10.mb-4.mb-lg-0
                h5 Planes  de emergencia general
                p Abordan desastres naturales, fallas masivas de sistemas o crisis sanitarias. Definen protocolos de comunicación, roles, puntos de evacuación y recursos de respaldo.
              .col-md-6.col-lg-2
                figure
                  img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
            .row.align-items-center.justify-content-center
              .col-lg-10.mb-4.mb-lg-0
                h5 Accidentes de tráfico
                p Incluyen la atención de heridos, gestión de la escena, notificación a autoridades / aseguradoras y recuperación del vehículo y la carga.
              .col-md-6.col-lg-2
                figure
                  img(src='@/assets/curso/tema3/10.svg', alt='Texto que describa la imagen')
            .row.align-items-center.justify-content-center
              .col-lg-10.mb-4.mb-lg-0
                h5 Robo o asalto de vehículos/carga
                p Procedimientos para notificación inmediata, colaboración con autoridades, rastreo y recuperación de activos.
              .col-md-6.col-lg-2
                figure
                  img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
            .row.align-items-center.justify-content-center
              .col-lg-10.mb-4.mb-lg-0
                h5 Derrames de sustancias peligrosas
                p Guías para contención y limpieza, notificación a entidades ambientales y protección del personal y entorno.
              .col-md-6.col-lg-2
                figure
                  img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
            .row.align-items-center.justify-content-center
              .col-lg-10.mb-4.mb-lg-0
                h5 Fallas mecánicas mayores
                p Protocolos para evaluación técnica, asistencia en ruta, traslado del vehículo y continuidad de la operación.
              .col-md-6.col-lg-2
                figure
                  img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        separador
        
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.4 Criterios de evaluación 
        
        .bg-color-5.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/14.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La evaluación de riesgos en transporte se organiza en niveles que permiten medir el impacto potencial de un evento y definir la respuesta adecuada. A continuación, se presentan los criterios de forma estructurada:
        
        .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
          .d-none.d-xl-block.col-xl-4.order-lg-2
            figure
              img(src='@/assets/curso/tema3/15.png', alt='Imagen decorativa')(data-aos="fade-left")
          .col-xl-8.mb-3.mb-lg-0.order-lg-1
            SlyderF(columnas="col-lg-6")
              .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
                .row.justify-content-end.mb-2
                  .col-4
                    img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/19.svg' alt='Ilustacion de acompañamiento')
                h4.mb-1 Baja  / Insignificante 
                p.mb-4 Impacto mínimo sin afectar la operación. Ejemplo: retraso breve o daño estético sin comprometer la carga.

              .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
                .row.justify-content-end.mb-2
                  .col-4
                    img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/19.svg' alt='Ilustacion de acompañamiento')
                h4.mb-1 Moderada / Menor
                p.mb-4 Impacto controlable. Puede causar interrupciones cortas, costos menores o lesiones leves sin incapacidad.

              .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
                .row.justify-content-end.mb-2
                  .col-4
                    img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/19.svg' alt='Ilustacion de acompañamiento')
                h4.mb-1 Significativa / Media	
                p.mb-4 Impacto considerable: interrupciones prolongadas, costos altos, daños parciales a la carga o incapacidad temporal del personal.

              .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
                .row.justify-content-end.mb-2
                  .col-4
                    img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/19.svg' alt='Ilustacion de acompañamiento')
                h4.mb-1 Alta / Grave
                p.mb-4 Impacto severo: pérdida total de carga, daños graves al vehículo, lesiones serias y afectación de la reputación.

              .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
                .row.justify-content-end.mb-2
                  .col-4
                    img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/19.svg' alt='Ilustacion de acompañamiento')
                h4.mb-1 Crítica / Catastrófica
                p.mb-4 Impacto devastador: pérdida de vidas, desastres ambientales, daños irreparables y paralización total de la operación.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Protocolos 
    
    
    img(data-aos="fade-up")(src="@/assets/curso/tema3/16.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text.box-shadow Los protocolos de atención son procedimientos operativos activados al detectarse una contingencia; definen responsabilidades, recursos y secuencia de acciones para gestionar el evento de manera coordinada, restablecer la operación y extraer lecciones que mejoren la resiliencia del servicio.
    
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .d-none.d-xl-block.col-xl-4.order-lg-2
        figure
          img(src='@/assets/curso/tema3/17.png', alt='Imagen decorativa')(data-aos="fade-left")
      .col-xl-8.mb-3.mb-lg-0.order-lg-1
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/01.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Detección y notificación
            p.mb-4 La contingencia se identifica mediante sistemas de monitoreo, alertas del conductor o reportes externos. Se notifica de inmediato a los responsables definidos en el plan de comunicación.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/02.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Verificación y evaluación inicial
            p.mb-4 Se confirma qué tipo de evento ocurrió y se mide su magnitud, determinando los riesgos inmediatos para las personas, la carga o el vehículo.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/03.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Activación del plan de respuesta
            p.mb-4 Se ponen en marcha los procedimientos según el tipo de contingencia: asistencia técnica, coordinación con autoridades o activación de rutas alternativas.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/04.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Comunicación constante
            p.mb-4 Se mantiene contacto continuo con el conductor, el cliente y las autoridades, informando en tiempo real las acciones y estado de la situación.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/05.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Control y contención
            p.mb-4 Se aplican medidas inmediatas para evitar que el evento se agrave: señalizar un área, asegurar la carga o desviar el tráfico.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/06.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Recuperación
            p.mb-4 Se ejecutan acciones para retomar la operación: remolcar el vehículo, transbordar la carga o reprogramar rutas.
          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/07.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Documentación
            p.mb-4 Se registra cada detalle: hora, lugar, causas, acciones aplicadas y resultados. Esta información se usa para seguros, auditorías y mejoras.
          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema3/08.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Análisis post-incidente
            p.mb-4 Se revisa el caso en detalle para identificar causas raíz, evaluar la efectividad de la respuesta y definir mejoras futuras.

    
        

</template>

<script>
export default {
  name: 'Tema3',
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
