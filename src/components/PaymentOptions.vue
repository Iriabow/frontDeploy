<template>
    <div class="content">
        <div class="paymentOptions">
            <p>Choose between</p>
            <div class="continueButtonDiv"><router-link v-bind:to="continueURI" class="btn btn-primary continueButton"><span class="continueText">PAYPAL</span></router-link></div>
            <br>
            <div class="continueButtonDiv"><router-link v-bind:to="continueURI" 
            class="btn btn-primary continueButton"><span class="continueText">CREDIT CARD</span></router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentOptions",
    props: {
        continueURI: {
            type: String,
            default: 'payment'
        } 
    },
    components: {
    },
}
</script>

<style scoped>

    .continueButton{
        width: 60%;
        color: white !important;
        font-weight: bold;
        border-radius: 25px;

        font-size: 22px;
                
        border: none;


        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .continueButton:hover{
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
    }

    

    @media (max-width:768px)  {
        .content{
            padding-top: 5%;
            margin-right: 3%;
            margin-left: 3%;
        }   
    }
        
    @media (min-width:768px)  {

        .content{
            background-color:white;
            height: 305px;
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 35px;
            padding-right: 35px;
            border-radius: 10px;
            box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .3);

        }

        .continueButton{
            width: 100%;
            color: white !important;
            font-weight: bold;
            border-radius: 25px;

            font-size: 22px;
                    
            border: none;


            background-image: linear-gradient(to right, #00fb82, #187fe6);
        }

        .continueButton:hover{
            background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        }
    }


</style>
