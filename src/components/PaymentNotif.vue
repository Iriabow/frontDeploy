<template>
  <div class="SentOfferNotif">
      <div class="tarjeta">
        <div class="hello">
        <div class="confirmation"><img class="tick" src="@/assets/img/approved_tick.png"/>
            <p class="price">{{sentText}}</p>
        </div>
        <p class="notice">{{noticeText}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SentOfferNotif',
  props: {
        artistURI: {
            type: String,
            default: '#'
        },
        artistImage: {
            type: String,
            default: 'https://img.europapress.es/fotoweb/fotonoticia_20181107115306_1920.jpg',
        },
        artistName: {
            type: String,
            default: 'ROSALÍA'
        },
        artistGenres: {
            type: Array,
            default: ['Pop', 'Flamenco']
        },
        continueURI: {
            type: String,
            default: '#'
        },
        price: {
          type: String,
          default: '$63.00/h'
        },
        sentText: {
          type: String,
          default: 'Thank You'
        },
        noticeText: {
          type: String,
          default: "You won't be charged until the artist arrives at the venue."
        }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
        font-family: "Archivo"
    }
    .notice {
        color: grey; 
        font-weight: bold; 
        font-size: 125%; 
        padding-bottom: 10px; 
        margin-left: 3%; 
        margin-right: 3%;
    }
    .tick{
        width: 140px;
        margin-top: 10px;
    }

    .confirmation {
        padding-top: 10%;
        padding-bottom: 10%;
        width: 100%;
    }

    .card-img-top {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

    .tarjeta {
        display: inline-block;
        width: 100%;
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

    @media (min-width:768px)  {
        .tarjeta {
            width: 340px;
            box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
            border-radius: 10px;
            display: inline-block;
        }
        .everything {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10%;
            text-align: center;
            padding: 15px;
        }

        .confirmation {
            padding-top: 2.5%;
            padding-bottom: 2.5%;
            width: 100%
        }

        .notice {
            color: grey; 
            font-weight: bold; 
            font-size: 125%; 
            width: 80%;
            display: inline-block;
        }
    }

</style>
