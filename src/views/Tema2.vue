<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Soporte de análisis de datos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.justify-content-start
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen_t_2-1.png')})`, 'left': 'auto', 'right': '0'}"
      )
      .bloque-texto-g__texto.py-4.px-3.px-md-5
        p.mb-0 El área de soporte técnico es la encargada de ofrecer ayuda a clientes cuando presentan inconvenientes al usar un producto o servicio, tal como un software o hardware en un equipo de cómputo, un servidor de Internet o un dispositivo. 
        br
        br
        | Con el creciente uso de la tecnología en los tiempos modernos, hay una necesidad cada vez mayor de proporcionar soporte técnico. Muchas organizaciones ubican sus departamentos de soporte técnico o centros de llamadas en países o regiones con costes más bajos. Dell fue una de las primeras empresas en externalizar sus departamentos de soporte técnico y atención al cliente a la India, en 2004. También han aumentado las empresas especializadas en ofrecer soporte técnico a otras organizaciones. 
        br
        br
        | Para las empresas que necesitan proporcionar soporte técnico, la externalización les permite mantener una alta disponibilidad del servicio. Esta necesidad puede ser el resultado de picos en el volumen de llamadas durante el día, periodos de gran actividad debido a la introducción de nuevos productos o paquetes de servicios de mantenimiento, o el requisito de proporcionar a los clientes un alto nivel de servicio a un bajo costo para la empresa. 

    p.py-5.mb-0 Los tipos de soporte de datos más conocidos son: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/tarjeta_t_2-1.png', alt='Texto que describa la imagen', style="max-height: 126px; max-width: 126px")
          
        h2.text-center.mb-5 Vía telefónica
        p.text-center Es la alternativa más ágil de solucionar cualquier requerimiento que presente el cliente.

      .col-md.tarjeta.color-acento-contenido.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/tarjeta_t_2-2.png', alt='Texto que describa la imagen', style="max-height: 126px; max-width: 126px")
          
        h2.text-center.mb-5 Visita en presencia física
        p.text-center Se generan algunos problemas que no pueden solucionarse a distancia. Por lo tanto, existe   la alternativa de que un experto técnico del área se desplace al domicilio del cliente o al sitio donde esté ubicado el sistema objeto de soporte

      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/tarjeta_t_2-3.png', alt='Texto que describa la imagen', style="max-height: 126px; max-width: 126px")
          
        h2.text-center Correo o texto a través de un dispositivo o vía remota.  
        p.text-center Con este sistema, el cliente no deberá estar en espera para contactar con un técnico, puede resolver su duda en el chat o en el sitio web y hacerlo en el momento que presente la necesidad.

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Características del soporte
    
    .d-block.d-md-flex.mb-0.container-decorador
      img(src="@/assets/curso/tema2/decorador_t_2_1.svg", style="max-width: 45px").me-5.d-none.d-md-flex
      p El soporte técnico se suele subdividir en niveles, para poder atender mejor a una empresa o a una base de clientes. El número de niveles que una empresa utiliza para organizar su grupo de soporte técnico depende de las necesidades de la empresa, en cuanto a su capacidad para atender suficientemente a sus clientes o usuarios. 
        br
        br
        |La razón para proporcionar un sistema de soporte de varios niveles, en lugar de un grupo de soporte general, es proporcionar el mejor servicio posible y de la manera más eficiente posible; el éxito de la estructura organizativa depende de que los técnicos comprendan su nivel de responsabilidad, sus compromisos de tiempo de respuesta al cliente, cuándo escalar adecuadamente un problema y a qué nivel.  
        br
        br
        |Una estructura de soporte común gira en torno a un sistema de soporte técnico de tres niveles, como se comparte en la siguiente imagen: 
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
