<template>
<div class="prueba">
    <div class="title"><p>Your offer has been sent to the artist</p></div>
    
    <div class="everything">
        <div class="tarjeta">
            <router-link v-bind:to="artistURI"><img v-bind:src="artistImage" class="card-img-top artistImage" alt="Artist's Image"></router-link>
            <div class="card-body cuerpoTarjeta">
                <div class="leftContent">
                    <h5 class="card-title artistName">{{ artistName }}</h5>
                    <span class="card-text artistGenres">{{ genresToString() }}</span>
                </div>
                <div class="rightContent">
                    <p class="price">{{ price }}</p>
                </div>
            </div>
        </div>
        <div class="sentOffer"><PaymentNotif/></div>

    </div>
</div>
</template>

<script>
import PaymentNotif from '@/components/PaymentNotif.vue'

export default {
  name: 'sentOffer',
  components: {
    PaymentNotif
  },
  props: {
        artistURI: {
            type: String,
            default: 'showPortfolio'
        },
        artistImage: {
            type: String,
            default: 'http://www.tiumag.com/wp-content/uploads/rosalia-2018-2-705x564.jpg',
        },
        artistName: {
            type: String,
            default: 'ROSALÍA'
        },
        artistGenres: {
            type: Array,
            default: ['Pop', 'Flamenco']
        },
        price: {
          type: String,
          default: '$63.00/h'
        },

    },

    methods: {
        genresToString() {

            var res = "";
            var i = 0;

            for (i = 0; i < this.artistGenres.length; i++) { 
                if (i != this.artistGenres.length - 1) {
                    res += this.artistGenres[i] + ", ";
                } else {
                    res += this.artistGenres[i];
                }
            }

            return res;
        }
    }
}
</script>

<style>

.vdp-datepicker__calendar {
  width: 100%;
  border: 0px;
  margin-top: 10px;
}

</style>

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
        box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .3);
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

    .continueButtonDiv {
        margin-top: 30px;
        margin-bottom: 10%;
    }

    .title {
        display: none;
    }

    @media (min-width:768px)  {
        .tarjeta {
            min-width: 335px;
            width: 25%;

            box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
            margin-right: 10px;
        }

        .calendarButton  {
            margin-left: 5%;
            width: 50%;
            margin-top: 0%;
            margin-right: 0%;
            display: inline-block;
        }
      
        .continueButtonDiv {
            margin-top: 15px;
        }
      
        .everything {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 5%;
            text-align: center;
            padding: 15px;
            margin-left: 10%;
            margin-right: 10%;
            margin-top:0%;
        }
        .title {
            display: inline-block;
            margin-right: 12%;
            margin-left: 10%;
            text-align: left;
            font-size: 50px;
            margin-top: 5%;
            margin-bottom: 0%;

            font-weight: bold;
        }
    }

</style>
