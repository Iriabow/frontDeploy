<template>
    <div class="content">
    <form>
        <div class="form-row">
            <div class="form-group col-8">
                <input maxlength="16" type="text" class="form-control" placeholder="Card number" :value="creditCardNumber">
            </div>
            <div class="form-group col-4">
                <select id="inputState" class="form-control">
                    <option v-if="creditCardBrand === 'visa'" selected>VISA</option>
                    <option v-else>VISA</option>
                    <option v-if="creditCardBrand === 'mastercard'" selected>Master Card</option>
                    <option v-else>Master Card</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-12">
                <input :value="name" type="text" class="form-control" placeholder="Name">
            </div>
            
        </div>

        <div class="form-row">
            <div class="form-group col entrada">
                <input :value="month" min="1" max="12" type="number" class="form-control" placeholder="Month">
            </div>
            <div class="form-group col entrada">
                <input :value="year" min="2019" type="number" class="form-control" placeholder="Year">
            </div>
            <div class="form-group col entrada">
                <input :value="cvv" maxlength="3" type="text" class="form-control" placeholder="CVV">
            </div>
        </div>
        <router-link v-bind:to="continueURI" 
            class="btn btn-primary continueButton"><span class="continueText">SUBMIT</span></router-link>

    </form>
    </div>
</template>

<script>
export default {
    name: "CreditCardPayment",
    props: {
        creditCardNumber: {
            type: String,
            default: '4590114832997756'
        },
        creditCardBrand: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: 'John Doe'
        },
        month: {
            type: String,
            default: '10'
        },
        year: {
            type: String,
            default: '2020'
        },
        cvv: {
            type: String,
            default: '754'
        },
        continueURI: {
            type: String,
            default: 'sentOffer'
        } 
    },
    components: {
    },
}
</script>

<style scoped>
    
    input:hover{
        border-color: #187fe6;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .3) !important;
    }

    select:hover{
        border-color: #187fe6;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .5) !important;
    }

    input:focus{
        border-color: #00fb82;
        font-weight: semibold;
        color:black;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        
    }

    select:focus{
        border-color: #00fb82;
        font-weight: semibold;
        color:black;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        
    }

    .continueButton {
        font-size: 18px;
        padding-left: 4%;
        padding-right: 4%;
        border: none;
        border-radius: 30px;
        width: fit-content;
        margin-top: 2%;
        font-weight: bold;
        margin-top: 10%;
    
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .continueButton:hover{
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
    }

    

    @media (max-width:767px)  {
        .content{
            padding-top: 5%;
            margin-right: 3%;
            margin-left: 3%;
    }
    }

    @media (min-width:768px)  {

        .continueButton{
            
            margin-right: 25%;
            margin-left: 25%;
        }
        
        form{
            margin-right: 4%;
            margin-left: 4%;
        }

        .content{
            margin-left: 3%;
            height: 300px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .3);
            
            
        }

        .entrada{
            width: 5px !important;
        }
    }


</style>
