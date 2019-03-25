<template>
  <div class="SentOfferNotif">
      <h2 class="titleType">Type of Hiring</h2>

     <div class="accordion" id="accordionExample">
  <div class="tarjetaB" >
    <div class="heads" id="headingOne">
      <h5 class="mb-0">
        <button class="Hbutton" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <h5 style="font-weight: bold ;">Performance</h5>
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="bodies">{{performanceDescription}}  
           <div class="continueButtonDiv"><router-link v-bind:to="continueURI" 
            class="btn btn-primary continueButton"><span class="continueText">CONTINUE</span></router-link></div>
      </div>  
    </div>
  </div>
  <div class="tarjetaB">
    <div class="heads" id="headingTwo">
      <h5 class="mb-0">
        <button class="Hbutton" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <h5 style="font-weight: bold">Fare</h5>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="bodies">{{fareDescription}} 
           <div class="continueButtonDiv"><router-link v-bind:to="continueURI" 
            class="btn btn-primary continueButton"><span class="continueText">CONTINUE</span></router-link></div>
      </div>
    </div>
  </div>
  <div class="tarjetaB">
    <div class="heads"  id="headingThree">
      <h5 class="mb-0">
        <button class="Hbutton" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <h5 style="font-weight: bold">Custom</h5>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="bodies">{{customDescription}}
           <div class="continueButtonDiv"><router-link v-bind:to="continueURI" 
            class="btn btn-primary continueButton"><span class="continueText">CONTINUE</span></router-link></div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'SentOfferNotif',
  props: {
        performanceDescription: {
            type: String,
            default: "Descripción de la modalidad performance."
        },
        fareDescription: {
            type: String,
            default: "Descripción de la modalidad fare.",
        },
        customDescription: {
            type: String,
            default: "Descripción de la modalidad custom."
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
            default: 'dateSelection'
        },
        price: {
          type: String,
          default: '$63.00/h'
        },
    }, methods: {
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
.heads {
    background-color:white; text-align: left; border-bottom: none; 
    padding-top: 3%; padding-bottom: 0.5%; margin-left: 15px;
}

.Hbutton{
    color: black; text-decoration: none; color: none; border: 0; background: transparent; outline:none;
}

.bodies{
    text-align: left;  padding-top: 1%; padding-bottom: 3%;
    margin-bottom: 1%; margin-left: 20px;
    
}

.tarjeta {
    display: inline-block;
    width: 100%;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
    margin-bottom: 3%;

}

.tarjetaB {
    display: inline-block;
    width: 100%;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
    margin-bottom: 3%;
    border-radius: 10px;
    padding-right: 2%;
}

#test {
    background-color: black;
    font-weight: bold;
    
}

.accordion {
    margin: 2.5%;
    margin-left: 5%;
    margin-right: 5%;
}

h2 {
    text-align: left;
    margin-left: 5%;
    margin-top: 2.5%
}

.card-img-top {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
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
    font-size: 18px;
    padding-left: 4%;
    padding-right: 4%;
    border: none;
    border-radius: 30px;
    width: fit-content;
    margin-top: 2%;
    
    background-image: linear-gradient(to right, #00fb82, #187fe6);
}

.continueButton:hover{
    background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
}


 @media (min-width:768px)  {
    .heads {
        background-color:white; text-align: left; border-bottom: none; 
        padding-top: 2%; padding-bottom: 0.5%; margin-left: 15px;
    }

    .Hbutton{
        color: black; text-decoration: none; color: none; border: 0; background: transparent; outline:none;
    }

    .bodies{
        text-align: left; margin-left: 20px; padding-top: 1%; padding-bottom: 3%;
        margin-bottom: 1%;
        
    }

    .tarjeta {
        display: inline-block;
        width: 100%;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
        margin-bottom: 3% 
    }

    .tarjetaB {
        display: inline-block;
        width: 100%;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
        margin-bottom: 3%;
        border-radius: 10px;
        padding-right: 2%;
        margin-right: 10%;
    }

    #test {
        background-color: black;
        font-weight: bold;
        
    }

    .accordion {
        width: 320px;
        margin-top: 1.5%;
        margin-bottom: 2.5%;

        align-items: center;
    }

    h2 {
        text-align: left;
        margin-top: 1.5%
    }

    .card-img-top {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
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
        font-size: 18px;
        padding-left: 4%;
        padding-right: 4%;
        border: none;
        border-radius: 30px;
        width: fit-content;
        margin-top: 2%;
        
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .continueButton:hover{
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
    }

 }

</style>
