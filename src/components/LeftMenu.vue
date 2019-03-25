<template>
  <div class="LeftMenu">
   
     <div class="collapse navbar-collapse width px-2 bg-light" id="sidebarleft">
         <p>
         <h2>Menu</h2>
            <ul class="navbar-nav mr-auto p-2 col align-self-center justify-content-center">
                <li class="nav-item">
                    <router-link class="nav-link" to="artist_search">Top Artists</router-link> 
                </li>
                <b-dropdown-divider class="divider"/>
                <li class="nav-item">
                    <router-link class="nav-link" to="offers">My Offers</router-link>
                </li>
                <b-dropdown-divider class="divider"/>
                <li class="nav-item">
                    <a class="nav-link" href="#">QR Scan</a>
                </li>
                <b-dropdown-divider class="divider"/>
                <li class="nav-item">
                    <a class="nav-link" href="#">FAQ</a>
                </li>
            </ul>
        </div>
  </div>
</template>


<!-- Script -->
 
<script>
export default {
  name: 'LeftMenu',
    props: {
        blur: Boolean
    }
}

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 60) {
        $('#sidebarleft').addClass('fixed');
    } else {
        $('#sidebarleft').removeClass('fixed');
    }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    font-family: "Archivo"
}

#sidebarleft.collapse {
    text-align: left;
    position: fixed;
    z-index: 2000;
    transition: all .3s ease;
    left: -130%; /* -width of sidebar */
    width: 100%;
    height: fit-content !important;
    display: block;
    overflow: auto
}

#sidebarleft.collapsing {
    text-align: left;
    transition: all .18s ease-in;
    position: fixed;
    left: -130%;  /* -width of sidebar */
    width: 100%;  /* width of sidebar */
    height: fit-content !important;
    display: block;
    overflow: auto
}

#sidebarleft.collapse.show {
    text-align: left;
    left: 0;
    width: 100%;  /* width of sidebar */
}
#sidebarleft {
    width: auto;
    position: relative;
    left: 0;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .3);
}


@media (min-width: 768px) {
    

    #sidebarleft.collapse {
        display: none;
    }

    #sidebarleft.collapsing {
        display: none;
    }

    #sidebarleft.collapse.show {
        display: none;
    }
    #sidesidebarleftbar {
        display: none;

    }
   
}

</style>
