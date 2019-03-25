<template>
  <div class="AcceptedNotif">
    <div class="tarjeta">
        <a v-bind:href="artistURI"><img src="@/assets/img/approved_tick.png" width="100px" class="card-img-top artistImage" alt="Artist's Image"></a>
        <div class="card-body cuerpoTarjeta">
            <div class="leftContent">
                <h5 class="card-title artistName">Yo</h5>
                <span class="card-text artistGenres">Hola</span>
            </div>
            <div class="rightContent">
                <p class="price">60</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcceptedNotif',
  props: {

  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
        font-family: "Archivo"
    }
    .card-img-top {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

    .tarjeta {
        width: 100%;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
    }

    .artistImage {
        object-fit: cover;
        max-height: 200px;
    }

    .cuerpoTarjeta {
        display: flex;
        align-items: center;
    }

    .leftContent {
        text-align: left;
        overflow: auto;
    }

    .artistName {
        font-size: 32px;
        margin-bottom: 0px;
        padding-bottom: 0px;
        word-wrap: break-word;
    }

    .artistGenres {
        color: #187FE6;
        font-size: 18px;
        word-wrap: break-word;
    }

    .rightContent {
        padding-left: 20px;
        margin-left: auto;
        margin-right: 0px;
    }

    .price {
        font-size: 35px;
        margin-bottom: 0px;
        color: #187FE6;
    }

    .continueButton {
        font-size: 22px;
        border: none;
        border-radius: 30px;
        width: 65%;

        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .continueButton:hover{
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
    }

    @media (min-width:768px)  {
        .tarjeta {
            min-width: 335px;
            width: 25%;
            box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
            margin-right: 10px;
        }

        .calendarButton  {
            margin-left: 10px;
        }
      
        .continueButtonDiv {
            margin-top: 15px;
        }
      
        .everything {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10%;
            text-align: center;
            padding: 15px;
        }
    }

</style>
