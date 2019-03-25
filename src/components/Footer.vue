<template>
    <div>
        <footer class="bg-light">
            <div class="info">
                <router-link v-bind:to="aboutUsURI" class="link">About Us</router-link>
                <router-link v-bind:to="FAQsURI" class="link">FAQs</router-link> | 
                <router-link v-bind:to="termsURI" class="link">Terms of Use</router-link> | 
                <span>Contact Us:</span> grupogrooving@gmail.com 
            </div>

            <div>Copyright © 2019:
                <a v-bind:href="groovingURI">Grooving</a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props: {
        aboutUsURI: {
            type: String,
            default: 'aboutUs'
        },

        FAQsURI: {
            type: String,
            default: 'FAQs'
        },

        termsURI: {
            type: String,
            default: 'termsOfUse'
        },

        groovingURI: {
            type: String,
            default: '#'
        }
    }
}
</script>

<style scoped>
    * {
        font-family: "Archivo"
    }


    footer {
        padding: 15px;  
    }

    .info {
        padding: 10px;
        color: #606060;
    }

    .link {
        color: #606060;
    }

    span {         
        font-weight: bold;
    }

    @media (max-width: 768px) {
        footer {
            padding-top: 5px;  
        }
    }

</style>
