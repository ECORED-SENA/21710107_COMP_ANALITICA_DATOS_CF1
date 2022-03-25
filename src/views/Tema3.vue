<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1 Redes de datos

    .container-imagen-texto_t_3-1.mb-5(style="background: linear-gradient(90deg, #D8D7D7, #FFFAFA)")
      .col-12.col-md-11.ms-auto.d-flex.flex-wrap.py-4
        .col-12.col-md-5
          img(src="@/assets/curso/tema3/img_t_3-1.png")
        .col-12.col-md-7.d-flex
          p.my-auto.ps-0.ps-md-4 Las redes de datos son sistemas diseñados para transferir datos entre dos o más puntos de acceso, mediante el uso de controles de sistema, líneas de transmisión y conmutación de datos. Lo que hace que una red de datos sea única con respecto a otros tipos de redes es que está configurada para transmitir únicamente datos.
          img(src="@/assets/curso/tema3/decorador_t_3-1.svg" style="max-width: 78px; position: absolute; right: 1rem; bottom: 2rem")

    .col-12.col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/img_t_3-2.svg')})`}"
          style="background-position-x: left; background-size: auto; background-repeat: no-repeat; background-color: #E2DDE4;"
        )
        .d-flex.flex-wrap.justify-content-end
          .bloque-texto-g__texto.py-4.py-md-5.px-3.ps-md-5
            p.mb-0 ¿Cómo funciona? En general, las redes de datos se definen por su capacidad de transmitir señales mediante la conmutación de paquetes. El mensaje de datos se descompone en bits discretos, llamados paquetes, y estos paquetes se envían por una red digital que utiliza una ruta óptima para minimizar el retraso en la velocidad de la red de datos. Una vez transmitidos, los paquetes de datos se vuelven a ensamblar cuando llegan al destino.

    .container-text-arrow.pe-0
      img(src="@/assets/curso/tema3/decorador_t_3-1.svg" style="min-width: 62px")
      p.d-block.text-center El uso de las redes de datos tiene una amplia gama de ventajas que vale la pena comprender antes de empezar a adoptar este enfoque. Para empezar, es útil conocer las tres principales; para ello, observe la siguiente infografía:

    .col-12.col-md-11.mx-auto
      ImagenInfografica.color-primario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/img_t_3-3.png')

        .tarjeta.color-acento-botones.p-3(x="25%" y="20%" numero="1")
          p
            span.fw-bold Comunicación: 
            | Tal vez la mayor ventaja de utilizar una red de datos es su capacidad para permitir una comunicación rápida y fluida. Los ordenadores conectados a través de una red de datos pueden comunicarse entre sí y transferir archivos sin necesidad de medios físicos de transferencia  
        
        .tarjeta.color-acento-botones.p-3(x="86%" y="30%" numero="2")
          p
            span.fw-bold Colaboración: 
            | Una red de datos puede permitir la colaboración sin fisuras entre dos individuos o equipos separados geográficamente. Varios usuarios (conectados a través de una red de datos) pueden trabajar simultáneamente en el mismo proyecto o documento, a distancia.
        
        .tarjeta.color-acento-botones.p-3(x="50%" y="55%" numero="3")
          p
            span.fw-bold Compartir recursos: 
            | Una red de datos no requiere una conexión física para compartir información. Esto significa que recursos como Internet, medios de almacenamiento e impresoras pueden ser compartidos entre dos o más nodos.

    p Finalmente, las redes de datos son procesos de comunicación que están conectados entre sí por equipos físicos que envían y reciben impulsos u ondas para el transporte de datos, con el fin de distribuir información y ofrecer servicios.

    Separador

    // Tema #3.1
    .titulo-segundo.color-primario
      h2#t_3_1 3.1 Características de redes de datos

    .container-text-arrow.pe-0
      div
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); width: 36px")
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); margin-top: -5px")
      p.d-block.text-center Una red de datos se compone de varias partes clave, como los terminales de datos (por ejemplo, ordenadores personales), el cableado de acceso y los nodos de distribución de datos (por ejemplo, enrutadores y conmutadores), adaptadores de red, cableado de acceso y nodos de distribución de datos (por ejemplo, enrutadores, <em>brouters</em> y <em>switches</em>). Los sistemas de gestión/control de la red se utilizan para configurar, supervisar, coordinar y controlar los elementos de la red.

    .col-12.col-md-11.mb-5
      img(src="@/assets/curso/tema3/img_t_3-4.png")
    
    .container-text-arrow.pe-0
      img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); width: 36px")
      p.d-block.text-center La comunicación de datos consiste en la transmisión de mensajes digitales entre dispositivos como ordenadores, teléfonos inteligentes, dispositivos móviles, radios y otros. La forma en que se comunican y fluyen los datos en las redes puede clasificarse en comunicación "símplex" o "dúplex". Para ampliar lo que representa cada una de ellas, ingrese a las siguientes pestañas.

    TabsA.color-primario.mb-5.tabsA_t_3
      .tarjeta.color-primario--borde.d-flex.flex-wrap.flex-md-nowrap.px-4.px-md-5.py-4(titulo="Comunicación Sìmplex " style="background: transparent;")
        .d-block.pe-4
          p.fw-bold Comunicación Sìmplex
          p Los datos solo fluyen en una dirección: del emisor al receptor. Sin embargo, este flujo se convierte en bidireccional cuando se trata de una comunicación dúplex, lo que significa que los datos pueden fluir de ida y vuelta entre el emisor y el receptor.
        img(src="@/assets/curso/tema3/img_t_3-5.png" style="max-width: 409px")

      .tarjeta.color-primario--borde.d-flex.flex-wrap.flex-md-nowrap.px-4.px-md-5.py-4(titulo="Comunicación dúplex " style="background: transparent;")
        .d-block.pe-4
          p.fw-bold Comunicación dúplex 
          p También puede funcionar en modo full-duplex o half-duplex. En el modo full-duplex, tanto el emisor como el receptor trabajan simultáneamente. En el modo half-duplex, solo uno puede funcionar a la vez.
        img(src="@/assets/curso/tema3/img_t_3-6.png" style="max-width: 409px")
    
    //- .container-text-arrow.pe-0.mb-3
    //-   p.d-block.pe-4.mb-0 Una vez que se genera una incidencia, se traslada a un técnico, de acuerdo con el tipo o nivel de incidencia en el caso concreto, y se asigna de manera directa; dicho técnico diagnostica el problema, identificando la causa que lo genera, y trata de resolverlo. En caso de conseguirlo, se cierra la incidencia como solucionada. Si el problema no se puede solucionar, se pasa al siguiente grado de soporte, para que se encargue de esa incidencia, contando con la información aportada por el grado inferior.
    //-   img(src="@/assets/curso/introduccion/arrow-text.svg").ms-4.me-auto(style="filter: rotate(222deg);").me-auto
    
    .cajon-b.color-primario.p-3.mb-5.cajon-b-left_t_3
      p.mb-0 Los avances e innovaciones en la tecnología de las redes de datos han hecho evolucionar continuamente la forma de transmitir y recibir datos. Las redes de datos actuales son una verdadera hazaña de ingenio: van desde simples conexiones individuales hasta sistemas increíblemente complejos de enrutadores, conmutadores y concentradores de red.
    
    //- .container-text-arrow.pe-0
    //-   img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg)")
    //-   p.d-block.text-center El uso de las redes de datos tiene una amplia gama de ventajas que vale la pena comprender antes de empezar a adoptar este enfoque. Para empezar, es útil conocer las tres principales; para ello, observe la siguiente infografía:

    // Tema #3.2
    .titulo-segundo.color-primario
      h2#t_3_2 3.2 Tipos y usos de redes de datos

    .container-card-img-left-r.mb-4
      .text-card-img
        span PAN
      .content-card-img
        img(src="@/assets/curso/tema3/decorador-card-img-1.svg" style="max-width: 100px")
        p <b>PAN (red de área personal) -</b> Es un modelo de red de comunicación diseñado para intercambio de datos con tecnología moderna, principalmente, para portátiles, tabletas,   equipos de cómputo, impresoras, celulares, con el requisito de estar cerca al punto de conexión o acceso.
        img(src="@/assets/curso/tema3/decorador-card-img-2.svg" style="max-width: 44px").ms-auto
      .img-card-img
        img(src="@/assets/curso/tema3/img-card-1.png")

    .container-card-img-right-l.mb-4
      .img-card-img
        img(src="@/assets/curso/tema3/img-card-2.png")
      .content-card-img
        img(src="@/assets/curso/tema3/decorador-card-img-1.svg" style="max-width: 100px").ms-auto
        p <b>LAN (red de área local) -</b> Puede llegar hasta un radio de 1 KM. Se trata de un grupo de ordenadores y dispositivos asociados, que comparten una línea de comunicaciones común o un enlace inalámbrico con un servidor. Normalmente, una LAN engloba ordenadores y periféricos conectados a un servidor dentro de una zona geográfica definida, como una oficina o un establecimiento comercial.
        img(src="@/assets/curso/tema3/decorador-card-img-2.svg" style="max-width: 44px")
      .text-card-img
        span LAN
    
    .container-card-img-left-r.mb-4
      .text-card-img
        span WAN
      .content-card-img
        img(src="@/assets/curso/tema3/decorador-card-img-1.svg" style="max-width: 100px")
        p <b>WAN (red de área amplia) - Sin límite</b>. Es una red que existe en un área geográfica a gran escala. Una WAN conecta diferentes redes más pequeñas, incluidas las redes de área local (LAN) y las redes de área metropolitana (MAN). Esto garantiza que los ordenadores y usuarios de un lugar puedan comunicarse con los de otros lugares. La implementación de la WAN puede hacerse con la ayuda del sistema público de transmisión o de una red privada.
        img(src="@/assets/curso/tema3/decorador-card-img-2.svg" style="max-width: 44px").ms-auto
      .img-card-img
        img(src="@/assets/curso/tema3/img-card-3.png")

    .container-card-img-right-l.mb-4
      .img-card-img
        img(src="@/assets/curso/tema3/img-card-4.png")
      .content-card-img
        img(src="@/assets/curso/tema3/decorador-card-img-1.svg" style="max-width: 100px").ms-auto
        p <b>SAN (Red de área de almacenamiento) -</b> Es la mejor opción, ofrece gran velocidad y rendimiento.  Está compuesta por dispositivos, hosts y conmutadores de almacenamiento, que son conectados a través de distintos protocolos. La disponibilidad de este tipo de red es casi total, dado que los datos que almacena en bloque hacen que se entreguen los recursos de manera eficaz.
        img(src="@/assets/curso/tema3/decorador-card-img-2.svg" style="max-width: 44px")
      .text-card-img
        span SAN

    .container-card-img-left-r.mb-4
      .text-card-img
        span WLAN
      .content-card-img
        img(src="@/assets/curso/tema3/decorador-card-img-1.svg" style="max-width: 100px")
        p <b>WLAN (red de área local inalámbrica) -</b> Es una red informática inalámbrica que enlaza dos o más dispositivos mediante comunicación inalámbrica dentro de un área limitada, como un hogar, una escuela, un laboratorio informático o un edificio de oficinas. Esto permite a los usuarios desplazarse dentro de un área de cobertura local y seguir conectados a la red. A través de una pasarela, una WLAN también puede proporcionar una conexión a Internet más amplia. La mayoría de las WLAN modernas se basan en las normas IEEE 802.11 y se comercializan bajo la marca Wi-Fi.
        img(src="@/assets/curso/tema3/decorador-card-img-2.svg" style="max-width: 44px").ms-auto
      .img-card-img
        img(src="@/assets/curso/tema3/img-card-5.png")

    .container-card-img-right-l.mb-5
      .img-card-img
        img(src="@/assets/curso/tema3/img-card-6.png")
      .content-card-img
        img(src="@/assets/curso/tema3/decorador-card-img-1.svg" style="max-width: 100px").ms-auto
        p <b>MAN (red de área metropolitana) -</b> Es una red informática que interconecta a los usuarios con los recursos informáticos de un área geográfica o región mayor que la que cubre, incluso una gran red de área local (LAN), pero menor que el área que cubre una red de área amplia (WAN). El término se aplica a la interconexión de las redes de una ciudad en una única red más grande (que luego puede ofrecer también una conexión eficaz a una red de área amplia). También se utiliza para referirse a la interconexión de varias redes de área local mediante puentes con líneas troncales. Este último uso también se denomina a veces red de campus. 
        img(src="@/assets/curso/tema3/decorador-card-img-2.svg" style="max-width: 44px")
      .text-card-img
        span MAN

    .container-text-arrow.pe-0.mb-0(:style="{'background-image': `url(${require('@/assets/curso/tema3/bg_t_3-1.svg')})`}" style="background-position: bottom; background-repeat: no-repeat")
      div.ms-4
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); width: 36px")
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); margin-top: -5px")
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); margin-top: -5px")
      p.d-block El empalme físico en el que se fundamentan dichos tipos de redes puede manifestarse mediante cables o implementarse  con tecnología inalámbrica. Comúnmente, las redes físicas componen la base para algunas redes lógicas de comunicación, denominadas Virtual Private Networks (VPN). Se usan para la transmisión de datos, a través de medios como la fibra óptica, y se vinculan de manera lógica a diversos tipos de redes virtuales mediante un programa o <em>software</em>. <br>
        | Cada uno de los diferentes tipos de redes está diseñado para ámbitos de aplicación particulares, se basan en técnicas y estándares propios y plantean ventajas y restricciones variadas.
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

<style lang="sass">
.container-imagen-texto_t_3-1
  display: flex
  flex-wrap: wrap
  align-items: center
  position: relative
.container-text-arrow
  display: flex
  align-items: center
  margin-bottom: 3rem
  img
    max-width: 36px
    max-height: 41px
    min-height: 41px
@media (max-width: 768px)
  .container-text-arrow
    align-items: start
    img
      margin-top: 3rem
      max-width: 35px
      max-height: 62px
      min-height: 62px
  br
    display: none
.cajon-b-left_t_3
  &::before
    background-color: #B973E6 !important
.tabsA_t_3
  .tabs-a__tab
    background-color: #E8E8E8
.container-card-img-left-r
  background-color: #E8E8E8
  border-radius: 24px
  display: flex
  justify-content: space-between
  min-height: 289px
  .text-card-img
    background-color: #a3bcf4
    min-width: 162px
    border-top-left-radius: 24px
    border-bottom-left-radius: 24px
    position: relative
    display: flex
    justify-content: center
    align-items: center
    span
      font-size: 2rem
      font-weight: bold
    &::before
      content: ''
      position: absolute
      top: 50%
      right: -50px
      height: 60px
      width: 60px
      background-color: #a3bcf4
      transform: rotate(45deg) translateX(-50%)
  .content-card-img
    max-width: calc( 100% - 457px)
    padding-left: calc(40px + 1rem)
    padding-right: 1.5rem
    display: flex
    flex-wrap: wrap
    align-items: center
  .img-card-img
    max-width: 295px
    img
      border-top-right-radius: 24px
      border-bottom-right-radius: 24px
.container-card-img-right-l
  background-color: #E8E8E8
  border-radius: 24px
  display: flex
  justify-content: space-between
  min-height: 289px
  .text-card-img
    background-color: #a3bcf4
    min-width: 162px
    border-top-right-radius: 24px
    border-bottom-right-radius: 24px
    position: relative
    display: flex
    justify-content: center
    align-items: center
    span
      font-size: 2rem
      font-weight: bold
    &::before
      content: ''
      position: absolute
      top: 50%
      left: -8px
      height: 60px
      width: 60px
      background-color: #a3bcf4
      transform: rotate(45deg) translateX(-50%)
  .content-card-img
    max-width: calc( 100% - 457px)
    padding-right: calc(40px + 1rem)
    padding-left: 1.5rem
    display: flex
    flex-wrap: wrap
    align-items: center
  .img-card-img
    max-width: 295px
    img
      border-top-left-radius: 24px
      border-bottom-left-radius: 24px
@media (max-width: 768px)
  .container-card-img-left-r
    flex-wrap: wrap
    .text-card-img
      max-width: 100%
      width: 100%
      min-height: 162px
      border-top-right-radius: 24px
      border-bottom-left-radius: 0px
      &::before
        top: auto
        right: 47%
        bottom: -50px
        transform: rotate(-45deg) translateX(50%)
    .content-card-img
      max-width: 100%
      padding-left: 1rem
      padding-right: 1rem
      padding-top: 50px
      padding-bottom: 1rem
    .img-card-img
      max-width: 100%
      width: 100%
      img
        width: 100%
        border-top-left-radius: 0
        border-top-right-radius: 0
        border-bottom-left-radius: 24px
  .container-card-img-right-l
    flex-wrap: wrap
    .text-card-img
      max-width: 100%
      width: 100%
      min-height: 162px
      border-top-right-radius: 0
      border-top-left-radius: 0
      border-bottom-left-radius: 24px
      border-bottom-right-radius: 24px
      &::before
        top: -30px
        left: 42%
        transform: rotate(-45deg)
    .content-card-img
      max-width: 100%
      padding-left: 1rem
      padding-right: 1rem
      padding-top: 1rem
      padding-bottom: 50px
    .img-card-img
      max-width: 100%
      width: 100%
      img
        width: 100%
        border-top-left-radius: 24px
        border-top-right-radius: 24px
        border-bottom-left-radius: 0
        border-bottom-right-radius: 0
</style>
