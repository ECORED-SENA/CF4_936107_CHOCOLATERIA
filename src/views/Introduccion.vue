<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg2 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 Uno de los sistemas productivos nacionales con mejor proyección es el cacao, además, se ha convertido en una nueva oportunidad de emprendimiento para las personas del campo, quienes lo utilizan para su comercialización como producto principal o secundario (resultado del proceso del producto principal). Un valor agregado que puede ser diferenciador es que no es perjudicial para el medio ambiente. 
          p La industria chocolatera colombiana se ha caracterizado por apostarle a la innovación, bien sea en el proceso de siembra o en el de producción, esto con el fin de optimizar los tiempos en los procesos y a la vez obtener una mayor productividad y eficiencia en las etapas de transformación.
        
        .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img1.png")
        
      p.text-center Para conocer más acerca de los elementos principales para el componente formativo, observe el siguiente video.

      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
