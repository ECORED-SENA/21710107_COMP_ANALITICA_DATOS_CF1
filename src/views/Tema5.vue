<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 Procedimiento documental 

    .col-12.mx-auto.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-1.png')})`}"
          style="background-position-x: inherit; width: 433px"
        )
        .d-flex.flex-wrap.justify-content-end
          .bloque-texto-g__texto.py-4.py-md-5.px-3.px-md-5
            p.mb-0 ¿Cómo funciona? En general, las redes de datos se definen por su capacidad de transmitir señales mediante la conmutación de paquetes. El mensaje de datos se descompone en bits discretos, llamados paquetes, y estos paquetes se envían por una red digital que utiliza una ruta óptima para minimizar el retraso en la velocidad de la red de datos. Una vez transmitidos, los paquetes de datos se vuelven a ensamblar cuando llegan al destino

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1. Proceso documental
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