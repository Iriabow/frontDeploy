<template>
  <div class="RightMenu">
   
     <div class="collapse navbar-collapse width px-2 bg-light" id="sidebar">
         <p>
         <h2>Hello, Pug</h2>
            <ul class="navbar-nav mr-auto p-2 col align-self-center justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#">My Account</a>
                </li>
                <b-dropdown-divider class="divider"/>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Portfolio</a>
                </li>
                <b-dropdown-divider class="divider"/>
                <li class="nav-item">
                    <a class="nav-link" href="#">Messages</a>
                </li>
                <b-dropdown-divider class="divider"/>
                <li class="nav-item">
                    <a class="nav-link" href="" v-on:click="logout()">Log Out</a>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'RightMenu',
    props: {
        blur: Boolean
    },
    methods: {
    logout() {
      this.$emit("authenticated", "false");
          this.$router.replace({ name: "#" });
    }
  },
}

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 75) {
        $('#sidebar').offset({top:window.pageYOffset});        
    } else {
        
        $('#sidebar').offset({top:75});
    }
});


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    font-family: "Archivo"
}

#sidebar.collapse {
    text-align: right;
    position: fixed;
    z-index: 2000;
    transition: right .3s ease;
    right: -130%; /* -width of sidebar */
    width: 100%;
    height: fit-content !important;
    display: block;
    overflow: auto
}

#sidebar.collapsing {
    text-align: right;
    transition: right .18s ease-in;
    position: fixed;
    right: -130%;  /* -width of sidebar */
    width: 100%;  /* width of sidebar */
    height: fit-content !important;
    display: block;
    overflow: auto
}

#sidebar.collapse.show {
    text-align: right;
    right: 0;
    width: 100%;  /* width of sidebar */
}
#sidebar {
    width: auto;
    position: relative;
    right: 0;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .3);
}

.divider {
    width: 100%;
}


@media (min-width: 768px) {

    #sidebar.collapse {
        
        text-align: right ;
        z-index: 2000;
        transition: right .3s ease;
        right: -30%; /* -width of sidebar */
        width: 0;
        height: 100% !important;
        display: block;
        overflow: auto
    }

    #sidebar.collapsing {
        text-align: right;
        transition: right .18s ease-in;
        right: -30%;  /* -width of sidebar */
        width: 25%;  /* width of sidebar */
        height: 100% !important;
        display: block;
        overflow: auto
    }

    #sidebar.collapse.show {
        text-align: right;
        width: 25%;  /* width of sidebar */
    }
    #sidebar {
        width: auto;
        float: right;
    }

}

</style>
