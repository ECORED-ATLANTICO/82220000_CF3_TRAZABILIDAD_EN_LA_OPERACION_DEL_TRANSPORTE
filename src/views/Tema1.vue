<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Monitoreo

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El monitoreo constituye un pilar esencial en la gestión de operaciones de transporte, ya que permite supervisar de manera continua el desarrollo de las actividades logísticas. A través de este proceso, las empresas pueden optimizar recursos, prevenir riesgos, garantizar la seguridad de la carga y del personal, y asegurar el cumplimiento de los objetivos establecidos.
    
    separador
    
    .row.justify-content-center
      .col-lg-10
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto
        
        .row.mb-5.justify-content-center
          .col-md-8.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El monitoreo se entiende como el proceso sistemático de observación, registro y análisis del transporte en tiempo real. Su finalidad es generar información precisa y oportuna sobre el estado, rendimiento y ubicación de los activos móviles, vehículos, carga y personal, durante toda la operación. Gracias a esta información, los supervisores logran identificar desviaciones, anticiparse a riesgos y tomar decisiones estratégicas que fortalezcan la eficiencia y la seguridad. En este sentido, el monitoreo integra aspectos clave como la localización geográfica, el comportamiento del conductor y las condiciones de la carga, convirtiéndose en una herramienta indispensable para la trazabilidad y la gestión efectiva de la operación.
    
    separador

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.mb-5
          .col-lg-10
            #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
              h2 1.2 Concepto
            
            .p-4.py-lg-0.bg-cuadros.bg-cuadros--4.rounded-4.overflow-hidden
              .row.align-items-center
                .col-sm-11.col-lg-9.ms-auto.order-2
                  p.mb-0 El monitoreo en el transporte se clasifica según el enfoque y el momento en que se realiza la recopilación y análisis de los datos. Cada tipo responde a necesidades específicas de la operación logística, facilitando tanto la gestión inmediata como la planificación estratégica y preventiva:
                .d-none.d-lg-block.col-lg-3.order-1
                  .d-flex.justify-content-center
                    img(data-aos="fade-up")(src="@/assets/curso/tema1/3.png" alt="Imagen decorativo")
        
        .row.justify-content-center.align-items-stretch.z-2
          .col-xl-10
            TabsA.color-primario
              .tarjeta.bg-color-4.p-4.h-100.d-flex.align-items-center(titulo="Tiempo  real")
                div
                  p Supervisión dinámica que muestra la ubicación de vehículos y estado de la carga en el momento presente. Facilita la gestión de imprevistos, replanificación de rutas y atención de emergencias. 
                  p <b>Ejemplos</b>: seguimiento GPS en vivo, actualización de temperatura en contenedores, alertas por apertura no autorizada.
              .tarjeta.bg-color-4.p-4.h-100.d-flex.align-items-center(titulo="Histórico")
                div
                  p Recopila y almacena datos de la operación en un periodo definido. Permite analizar tendencias, identificar patrones y optimizar procesos futuros. 
                  p <b>Ejemplos</b>: análisis de consumo de combustible, detección de tiempos muertos, evaluación de respeto a límites de velocidad.

              .tarjeta.bg-color-4.p-4.h-100.d-flex.align-items-center(titulo="Preventivo")
                div
                  p Detecta tempranamente anomalías que podrían generar riesgos o fallas, usando datos históricos y en tiempo real. Su meta es anticiparse a interrupciones y optimizar la seguridad. 
                  p <b>Ejemplos</b>: consumo atípico de combustible, patrones de conducción riesgosa, alerta por bajo nivel de líquido de frenos.

    separador
    
    .row.justify-content-center
      .col-lg-10
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 Herramientas

    .row.mb-5.justify-content-center
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") El éxito del monitoreo en el transporte depende directamente de las tecnologías implementadas. Estas herramientas trabajan en conjunto para ofrecer una visión integral de la operación, mejorando la seguridad, eficiencia y control:s.
      .col-lg-1.mb-3.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/10.svg", data-aos="zoom-in")

    .row.justify-content-center.mb-5.z-2.conectadas-horizontal
      .col-lg-10.position-relative
        .avatar.d-none.d-lg-block
          figure
            img(src="@/assets/curso/tema1/5.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/6.svg", alt="alt").img100
            .col
              h5.mb-1 Sistemas  de posicionamiento global (GPS)
              p.mb-0 Permite ubicar vehículos en tiempo real, registrar rutas, velocidades y tiempos de parada. Facilita geocercas, optimización de rutas y recuperación de flotas.

        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/7.svg", alt="alt").img100
            .col
              h5.mb-1 Telemetría 
              p.mb-0 Transmite datos del vehículo como consumo de combustible, temperatura del motor y estilo de conducción. Apoya el mantenimiento predictivo y la reducción de costos.

        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/6.svg", alt="alt").img100
            .col
              h5.mb-1 Sensores
              p.mb-0 Miden variables clave:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  p.mb-0 Temperatura: asegura cadena de frío.
                li.mb-0.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  p.mb-0 Humedad: protege cargas sensibles.
                li.mb-0.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  p.mb-0 Puertas: alerta accesos no autorizados.
                li.mb-0.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  p.mb-0 Neumáticos: controla presión y seguridad.
                li.mb-0.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  p.mb-0 Combustible: previene robos.
                li.mb-0.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  p.mb-0 Peso: garantiza límites legales.


        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/7.svg", alt="alt").img100
            .col
              h5.mb-1 Software de gestión de flotas
              p.mb-0 Integra GPS, telemetría y sensores en una sola plataforma. Genera informes, alertas, planes de mantenimiento, optimiza rutas y permite comunicación con conductores.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Procedimiento 
    
    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/8.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La implementación de un sistema de monitoreo eficaz en transporte requiere pasos estructurados que garanticen precisión, seguridad y mejora continua. Desde la definición de objetivos hasta la optimización del sistema, cada fase asegura que la tecnología, los procesos y el talento humano trabajen en conjunto para fortalecer la supervisión de la operación de transporte:
    
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .d-none.d-xl-block.col-xl-3.order-lg-2
        figure
          img(src='@/assets/curso/tema1/9.png', alt='Imagen decorativa')(data-aos="fade-left")
      .col-xl-9.mb-3.mb-lg-0.order-lg-1
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/01.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Definir objetivos 
            p.mb-4 Establecer metas claras como seguridad, eficiencia o reducción de costos, que orienten todo el sistema de monitoreo.

          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/02.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Analizar necesidades	
            p.mb-4 Identificar qué vehículos, rutas, cargas y riesgos deben controlarse, así como los indicadores más relevantes.

          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/03.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Seleccionar tecnología	
            p.mb-4 Escoger las herramientas adecuadas (GPS, sensores, <em>software</em>, entre otros) que permitan recopilar y procesar la información requerida.

          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/04.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Instalar y configurar	
            p.mb-4 Implementar los equipos en los vehículos y configurar el <em>software</em> con parámetros, alertas y reportes útiles.

          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/05.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Capacitar personal	
            p.mb-4 Formar a conductores y supervisores en el manejo de las herramientas y en la correcta interpretación de los datos.

          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/06.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Establecer protocolos	
            p.mb-4 Definir roles, responsabilidades y procedimientos de acción frente a alertas, imprevistos o emergencias.

          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/07.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Monitorear y reportar	
            p.mb-4 Realizar el seguimiento en tiempo real, verificar el desempeño y generar informes periódicos de la operación.
          .tarjeta.bg-cuadros.bg-cuadros--1.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema1/08.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Revisar y optimizar	
            p.mb-4 Evaluar resultados, detectar áreas de mejora y ajustar el sistema para asegurar precisión y eficiencia continua.
        
        
        
    
    

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
