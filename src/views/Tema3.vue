<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Rendimiento
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes4
        img.img-flotante4(src='@/assets/curso/tema1/img47.png', alt='Imagen decorativa')  
    .bg9
      p.mb-3 El rendimiento del proceso productivo depende del control de las variables, la ejecución de las acciones correctivas y la frecuencia de verificación. 
      p.mb-5 Las siguientes son las variables que se deben controlar en cada una de las fases de producción, las cuales garantizarán la calidad del producto una vez terminen las respectivas fases:
      .row.justify-content-center.align-items-center          
        .col-lg-12.imgs-flotantes4
          img.img-flotante4(src='@/assets/curso/tema1/img47.png', alt='Imagen decorativa') 
      .row.justify-content-center.align-items-center.mb-0         
        .col-lg-10  
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla 1.
            span Fases y variables de control
        .col-lg-8 
          .tabla-a.color-secundario.mb-5 
            table.table1
              thead
                tr
                  th Fases
                  th Variables de control 
              tbody
                tr
                  td.px-5.text-bold.text-center Limpieza y clasificación 
                  td.px-5.text-center Fermentación (%) <br>Humedad (%) <br>Impurezas/pizarrosos (%)
    
                tr.bgt1
                  td.px-5.text-bold.text-center Tostión
                  td.px-5.text-center Temperatura de tostado <br>Tiempo de tostado
                tr
                  td.px-5.text-bold.text-center Trillado y molienda
                  td.px-5.text-center Cascarilla en <em>nibs</em> (%)
                tr.bgt1
                  td.px-5.text-bold.text-center Refinación
                  td.px-5.text-center Tiempo de refinación
                tr
                  td.px-5.text-bold.text-center Moldeado
                  td.px-5.text-center Peso de la pastilla
                tr.bgt1
                  td.px-5.text-bold.text-center Desmolde 
                  td.px-5.text-center Humedad en superficie
                tr
                  td.px-5.text-bold.text-center Empaque 
                  td.px-5.text-center Sellado completo    
                tr.bgt1
                  td.px-5.text-bold.text-center Almacenamiento
                  td.px-5.text-center Temperaturas de almacenamiento    
    p.mb-5 Respecto a la interpretación y reportes que se deben realizar en cada una de las fases, los siguientes son los límites de control que ayudarán a interpretar cada una de las variables de control, sus respectivos instrumentos de control que servirán para realizar los reportes y la verificación con la periodicidad de estos.  
    .row.justify-content-center.align-items-center.mb-0         
      .col-lg-10  
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Tabla 2.
          span Fases y límites de control
      .col-lg-8 
        .tabla-a.color-secundario.mb-5 
          table.table1
            thead
              tr
                th Fases
                th Límites de control
            tbody
              tr
                td.px-5.text-bold.text-center Limpieza y clasificación 
                td.px-5.text-center Mínimo 90 % de fermentación <br>Máx. 7 %<br>Máx. 0.3 %
  
              tr.bgt1
                td.px-5.text-bold.text-center Tostión
                td.px-5.text-center Mínimo 110 °C - máx. 120 °C <br>Mínimo 55 min - máx. 65 min
              tr
                td.px-5.text-bold.text-center Trillado y molienda
                td.px-5.text-center Máx. 3 %
              tr.bgt1
                td.px-5.text-bold.text-center Refinación
                td.px-5.text-center Mínimo 6 horas
              tr
                td.px-5.text-bold.text-center Moldeado
                td.px-5.text-center Mínimo 8 g - máx. 9 g
              tr.bgt1
                td.px-5.text-bold.text-center Desmolde 
                td.px-5.text-center Libre de humedad
              tr
                td.px-5.text-bold.text-center Empaque 
                td.px-5.text-center Sin agujeros   
              tr.bgt1
                td.px-5.text-bold.text-center Almacenamiento
                td.px-5.text-center Mín. 10 °C - Máx. 18 °C
    p.mb-5 De igual manera, para las fases antes mencionadas, se referencia también el instrumento de control y frecuencia de verificación en cada una de ellas, lo que permite que el proceso se desarrolle adecuadamente, como se observa en la siguiente tabla.
    .row.justify-content-center.align-items-center.mb-0         
      .col-lg-10  
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Tabla 3.
          span Fases, instrumento de control y frecuencia de verificación
      .col-lg-10
        .tabla-a.color-secundario.mb-5 
          table.table1
            thead
              tr
                th Fases
                th Instrumento de control
                th Frecuencia de verificación
            tbody
              tr
                td.px-5.text-bold.text-center Limpieza y clasificación 
                td.px-5.text-center Técnica visual <br>Humidímetro<br> Técnica visual/Pesaje
                td.px-5.text-center Cada vez que ingrese cacao <br> Cada vez que ingrese cacao <br> Cada vez que ingrese cacao
              tr.bgt1
                td.px-5.text-bold.text-center Tostión
                td.px-5.text-center Termómetro láser <br>Desprendimiento de cascarilla en muestra
                td.px-5.text-center Cada vez que tueste cacao <br> Cada vez que tueste cacao
              tr
                td.px-5.text-bold.text-center Trillado y molienda
                td.px-5.text-center Pesaje de residuos de cascarilla en muestra
                td.px-5.text-center Cada lote de proceso
              tr.bgt1
                td.px-5.text-bold.text-center Refinación
                td.px-5.text-center Revisión visual de la textura
                td.px-5.text-center Cada lote de proceso
              tr
                td.px-5.text-bold.text-center Moldeado
                td.px-5.text-center Pesaje
                td.px-5.text-center Muestra/lote de proceso
              tr.bgt1
                td.px-5.text-bold.text-center Desmolde 
                td.px-5.text-center Inspección visual
                td.px-5.text-center Muestra/lote de proceso
              tr
                td.px-5.text-bold.text-center Empaque 
                td.px-5.text-center Inspección visual
                td.px-5.text-center Muestra/lote de proceso
              tr.bgt1
                td.px-5.text-bold.text-center Almacenamiento
                td.px-5.text-center Termómetro láser
                td.px-5.text-center Cada día de operaciones en planta
    p.mb-5 Para continuar con cada uno de los procesos de las fases que se han venido relacionando, ahora se refiere a las fallas, tipos y ajustes, donde se relacionan desde las fallas que puedan darse a partir de los tipos y ajustes, que se consideran desde las fases, variables de control, límites de control y acción correctiva. Observe la siguiente tabla.
    .bg10
      .row.justify-content-center.align-items-center.mb-0         
        .col-lg-12  
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla 4.
            span Fallas: tipos y ajustes
        .col-lg-12
          .tabla-a.color-secundario.mb-5 
            table.table1
              thead
                tr
                  th Fases
                  th Variables de control 
                  th Límites de control
                  th Acción correctiva
              tbody
                tr.bgt2
                  td.px-5.text-bold.text-center Limpieza y clasificación 
                  td.px-5.text-center 
                    p.mb-0.mb-lg-3 Fermentación (%) 
                    p.mb-0 Humedad (%) 
                    p.mb-0 Impurezas/pizarrosos (%)
                  td.px-5.text-center 
                    p.mb-0.mb-lg-2 Mínimo 90 % de fermentación 
                    p.mb-0 Máx. 7 %
                    p Máx. 0.3 %
                  td.px-5.text-center 
                    p.mb-4 Por debajo se rechaza 
                    p.mb-0 Por encima se rechaza 
                    p.mb-0 Retirar impurezas (granos pizarrosos)
                tr.bgt1
                  td.px-5.text-bold.text-center Tostión
                  td.px-5.text-center Temperatura de tostado <br>Tiempo de tostado
                  td.px-5.text-center Mínimo 110 °C - máx. 120 °C <br> Mínimo 55 min - máx. 65 min
                  td.px-5.text-center Aumentar o disminuir fuente de calor
                tr.bgt2
                  td.px-5.text-bold.text-center Trillado y molienda
                  td.px-5.text-center Cascarilla en <em>nibs</em> (%)
                  td.px-5.text-center Máx. 3 %
                  td.px-5.text-center Repetir operación de descascarillado
                tr.bgt1
                  td.px-5.text-bold.text-center Refinación
                  td.px-5.text-center Tiempo de refinación
                  td.px-5.text-center Mínimo 6 horas
                  td.px-5.text-center Dejar más tiempo hasta obtener textura
                tr.bgt2
                  td.px-5.text-bold.text-center Moldeado
                  td.px-5.text-center Peso de la pastilla
                  td.px-5.text-center Mínimo 8 g - máx. 9 g
                  td.px-5.text-center Fundir y moldear nuevamente
                tr.bgt1
                  td.px-5.text-bold.text-center Desmolde 
                  td.px-5.text-center Humedad en superficie
                  td.px-5.text-center Libre de humedad
                  td.px-5.text-center Dejar secar al ambiente
                tr.bgt2
                  td.px-5.text-bold.text-center Empaque 
                  td.px-5.text-center Sellado completo
                  td.px-5.text-center Sin agujeros
                  td.px-5.text-center Repetir operación de sellado
              
                tr.bgt1
                  td.px-5.text-bold.text-center Almacenamiento
                  td.px-5.text-center Temperaturas de almacenamiento
                  td.px-5.text-center Mín. 10 °C - Máx. 18 °C 
                  td.px-5.text-center Revisar tablero digital de temperatura y reprogramar
    .row.justify-content-center.align-items-center          
      .col-lg-12.imgs-flotantes5
        img.img-flotante5(src='@/assets/curso/tema2/img9.png', alt='Imagen decorativa')  
      
    
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
