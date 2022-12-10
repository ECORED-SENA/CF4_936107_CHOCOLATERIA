<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Residuos sólidos 
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes6
        img.img-flotante6(src='@/assets/curso/tema2/img9.png', alt='Imagen decorativa')
    p.mb-5 En el proceso productivo, se generan residuos sólidos que se reutilizan, bien sea en el mismo proceso o en otros diferentes a este; para ello, se comparte el tipo de residuo de acuerdo con sus características y uso:   
    .row.justify-content-center.align-items-center(data-aos="zoom-in").mb-5
      .col-12.col-lg-6.mb-3.mb-lg-0
        .bg11
          .row.m-1.hoverScale2
            .col-12.p-3.bgcontenido(style="height: 450px")
              img.mb-4(src="@/assets/curso/tema4/img1.png" alt='Texto que describa la imagen')
              h4.text-center Cascarilla  
              p Es antioxidante, ayuda a regular el sistema digestivo. Tiene vitaminas A y C, fibra, potasio, calcio, teobromina y ácido oleico. Se consume por infusión, se recomienda no cocinarla para evitar la pérdida de sus nutrientes.
      .col-12.col-lg-6.mb-3.mb-lg-0
        .bg11
          .row.m-1.hoverScale2 
            .col-12.p-3.bgcontenido2(style="height: 450px")
              img.mb-4(src="@/assets/curso/tema4/img2.png" alt='Texto que describa la imagen')
              h4.text-center Cenizas de cáscara de cacao  
              p Se utiliza para elaborar jabón o como fertilizante en cultivos, incluyendo el del cacao.
    .row.justify-content-center.align-items-center.mb-3.mb-lg-5
      .col-lg-5.col-9.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img3.png")
      .col-lg-7(data-aos="fade-right")
        p En el manejo del cacao, se hace necesario tener en cuenta que la cáscara de cacao es la piel que rodea y protege a la almendra; en peso, representa un 13 % del total del fruto, se obtiene como resultado de la fase del tostado y trillado. Su manejo se basa en evitar que se contamine con otros componentes del proceso, ya que se utiliza muchas veces como alimento de animales; cuando se usa como abono, el manejo es más sencillo, porque su finalidad es que se descomponga en la tierra y sus nutrientes sean absorbidos por los cultivos. 
        p Finalmente, se espera que con los elementos antes desarrollados se tenga mejor y mayor claridad sobre las etapas del procesamiento del cacao, las acciones que se utilizan en cada fase y toda la importancia en este proceso con relación a la chocolatería. 
    
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
