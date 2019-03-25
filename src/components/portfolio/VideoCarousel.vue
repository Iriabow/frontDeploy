<template>
  <div class="container-fluid">
      <div class="owl-wrapper horizontal-center">
          <div class="row" style="padding-bottom: 15px">
            <div class="col-sm-12 col-md-8 horizontal-center">
              <h3 style="text-align: left"><strong>Video Showcase</strong></h3>
            </div>
          </div>
          <div class="row">
              <div class="col-sm-12 col-md-8 horizontal-center">
                  <div class="col-sm-12"> 
                    <div class="owl-carousel owl-theme"> 
                      <div v-for="videoInfo in videosInfo" :key="videoInfo.id" class="item-video" data-merge="1">
                        <a class="owl-video" :href="videoInfo.videoURL"></a>
                      </div>
                    </div> 
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'

/* Makes Slides responsive */
$(window).on('resize', function(){
  var windowWidth = $(window).width();

  /* Substracts some amount to ensure component's width
  is smaller than the window */
  windowWidth -= 100;

  $('.owl-wrapper').css('width', windowWidth);

});

export default {
  name: "VideoCarousel",
  props:{
    videosInfo: {
            /* Array of dictionaries of type { id:int, imageURL: String, link: String} */
            type: Array,
            default: [
              {id: 0, videoURL: "https://www.youtube.com/watch?v=qfAqtFuGjWM"},
              {id: 1, videoURL: "https://www.youtube.com/watch?v=IFr3GnboNRU"}
            ],
    },
  },
  mounted: function(){
    /* Initializes Owl Carousel */
    var windowWidth = $( window ).width();
    windowWidth -= 100;

    $('.owl-wrapper').css('width', windowWidth);

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 10,
      video: true,
      autoplay: true,
      nav: false,
      responsive:{
          0:{
              items:1,
              nav: true,
              navText: ["<span style='font-size: 3rem; padding-right: 15px;'><</span>","<span style='font-size: 3rem; padding-left: 15px;'>></span>"],
          },
          600:{
              items:2,
          },
          992:{
              items:3,
          }
      },

    });
  }
}
</script>

<style scoped>
  .horizontal-center{
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    .owl-carousel .item-video{
      height: 15em;
    }
  }

  @media (min-width: 576px) {
    .owl-carousel .item-video{
      height: 18rem;
    }
  }
</style>


