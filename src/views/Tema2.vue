<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Rastreo

    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text.box-shadow El rastreo se concibe como un proceso complementario al monitoreo. Mientras el monitoreo proporciona una visión amplia y en tiempo real del estado operativo de la cadena de transporte, el rastreo se orienta a la identificación, seguimiento y localización específica de objetos, bienes o personas durante todo su recorrido.
    
    separador
    
    .row.justify-content-center
      .col-lg-10
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Concepto
        
    .row.justify-content-center.align-items-center.mb-4.z-2
      .d-none.d-lg-block.col-lg-4
        figure
          img(data-aos="fade-up")(src="@/assets/curso/tema2/2.png" alt="Imagen decorativo")
      .col-lg-6
        .p-4.bg-decorado.rounded-4.overflow-hidden
          p.mb-0 El rastreo es la capacidad de seguir la trayectoria y el estado de un objeto, carga o persona desde su origen hasta el destino final, registrando cada evento significativo en su tránsito. Su propósito es garantizar la trazabilidad completa, permitiendo reconstruir el historial, las transiciones y la localización precisa del elemento en cualquier momento.
    
    separador
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-10
            #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
              h2 2.2 Clases
            
            p.mb-5 El rastreo puede aplicarse a distintos elementos dentro de la operación de transporte, según las necesidades de identificación y seguimiento. Sus principales clases son:
        
        .row.align-items-start.mb-5.justify-content-center
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
          .col-lg-8
            AcordionA(tipo="b").bg-color-6
              .div(titulo="Rastreo  de vehículos")
                p Es la aplicación más frecuente y se realiza mediante sistemas GPS y telemática. Permite conocer la ubicación exacta, velocidad, dirección, paradas y estado de sensores del vehículo (por ejemplo, puertas o nivel de combustible). Contribuye a la seguridad de la unidad, la optimización de rutas y la puntualidad en las entregas.
        
              .div(titulo="Rastreo de carga o mercancías")
                p Se centra en unidades de carga individuales o consolidadas (cajas, palets, contenedores y paquetes). Utiliza dispositivos adheridos o integrados a la carga para registrar ubicación, procesos de carga y descarga, así como condiciones específicas (temperatura, golpes, entre otros). Es esencial para garantizar la integridad de la cadena de frío, prevenir pérdidas y mantener informados a los clientes.
        
              .div(titulo="Rastreo de personal")
                p Aunque menos habitual en el transporte masivo de mercancías, se aplica en distribución o servicios de campo. Consiste en el seguimiento de conductores o personal de entrega mediante dispositivos móviles o wearables. Mejora la seguridad del trabajador, optimiza la logística de última milla y facilita el control de horarios.
    
    .row.justify-content-center
      .col-lg-10
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3 Herramientas 
      
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--2.rounded-4.overflow-hidden.mb-5
          .row.align-items-center
            .col-sm-11.col-lg-9.ms-auto.order-2
              p.mb-0 El rastreo eficiente se apoya en diversas tecnologías que permiten identificar, registrar y seguir con precisión los elementos en la cadena de transporte. Estas herramientas proporcionan la base para la trazabilidad y la gestión operativa en tiempo real y a lo largo de todo el recorrido logístico.
            .d-none.d-lg-block.col-lg-3.order-1
              .d-flex.justify-content-center
                img(data-aos="fade-up")(src="@/assets/curso/tema2/4.png" alt="Imagen decorativo")
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-5
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 RFID (<em>Radio-Frequency Identification</em>).
              p Emplea etiquetas con microchips y antenas capaces de transmitir datos de forma inalámbrica a lectores especializados. Estas etiquetas pueden ser activas, con batería y mayor alcance, o pasivas, que se activan al contacto con el lector. Su principal ventaja es que permiten rastrear grandes volúmenes de artículos en almacenes y transbordos sin necesidad de una línea de vista directa, agilizando el control logístico.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Códigos de Barras.
              p Son representaciones gráficas de información que pueden ser leídas mediante escáneres ópticos. Constituyen una tecnología económica, confiable y ampliamente utilizada para la gestión de inventarios, envíos y recepción de mercancías. Aunque requieren lectura visual directa, ofrecen gran precisión en la identificación de productos individuales dentro de la cadena logística.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Códigos QR (<em>Quick Response Codes</em>).
              p Son una evolución bidimensional de los códigos de barras que permiten almacenar mayor cantidad de información y se pueden leer con escáneres o cámaras de teléfonos inteligentes. Su versatilidad facilita el acceso a detalles de productos, la consulta de datos de envíos o el enlace con plataformas en línea, favoreciendo la trazabilidad y la interacción con el cliente final.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Plataformas de <em>software</em> de trazabilidad.
              p Integran la información proveniente de tecnologías como RFID, códigos de barras, códigos QR y GPS. Estas soluciones registran el historial completo de un producto o envío a lo largo de toda la cadena de suministro, generando reportes automatizados, gestionando alertas y garantizando visibilidad integral de extremo a extremo. Representan la base tecnológica para una gestión logística eficiente y segura.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Procedimiento 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/9.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El procedimiento de rastreo en la operación de transporte asegura la correcta instalación, configuración y uso de las herramientas tecnológicas para garantizar trazabilidad, seguridad y control operativo. Mediante una secuencia de acciones, se asegura que la información generada por los dispositivos se transforme en decisiones efectivas para la supervisión de las rutas y el cumplimiento de los objetivos logísticos:
    
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .d-none.d-xl-block.col-xl-4.order-lg-2
        figure
          img(src='@/assets/curso/tema2/10.png', alt='Imagen decorativa')(data-aos="fade-left")
      .col-xl-8.mb-3.mb-lg-0.order-lg-1
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema2/01.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Configuración  inicial del dispositivo
            p.mb-4 Instalar el GPS o equipo telemático en el vehículo, conectándolo a la fuente de energía y a sensores adicionales cuando sea necesario. Ajustar los parámetros de transmisión de datos.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema2/02.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Activación y verificación de la señal	
            p.mb-4 Encender el dispositivo y confirmar que envía información a la plataforma, validando ubicación, velocidad y estado del encendido.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema2/03.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Planificación	
            p.mb-4 Definir la ruta programada y establecer geocercas para puntos clave o zonas restringidas, configurando alertas automáticas.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema2/04.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Monitoreo en tiempo real
            p.mb-4 Supervisar desde la plataforma la ubicación, estado y recorrido del vehículo, así como los datos de sensores vinculados.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema2/05.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Gestión de alertas e incidentes	
            p.mb-4 Revisar las notificaciones generadas por el sistema, evaluar cada caso y tomar medidas correctivas oportunas.

          .tarjeta.bg-cuadros.bg-cuadros--3.p-4.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/tema2/06.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Comunicación y soporte al conductor
            p.mb-4 Mantener contacto constante con el conductor para resolver imprevistos y proporcionar información útil durante el trayecto.

        


</template>

<script>
export default {
  name: 'Tema2',
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
