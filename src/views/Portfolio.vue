<template>
  <div>
    <ArtistInfo />
    <ImageCarousel class="imageCarousel" :photosInfo="image_data" />
    <VideoCarousel class="videoCarousel" :videosInfo="video_data"/>
    <AvailableDates class="availableDates" />
  </div>
</template>

<script>

import ArtistInfo from '@/components/portfolio/ArtistInfo.vue';
import ImageCarousel from '@/components/portfolio/ImageCarousel.vue';
import VideoCarousel from '@/components/portfolio/VideoCarousel.vue';
import AvailableDates from '@/components/portfolio/AvailableDates.vue';


export default {
  name: 'Portfolio',
  components: {
    ArtistInfo,
    ImageCarousel,
    VideoCarousel,
    AvailableDates,
  },

  data: function(){
    return {
        image_data:[
          {id: 0, imageURL: "https://i.ytimg.com/vi/IFr3GnboNRU/maxresdefault.jpg"},
          {id: 1, imageURL: "https://timedotcom.files.wordpress.com/2018/10/charli-xcx-1999-credit-andrew-thomas-huang.jpg?quality=85"},
          {id: 2, imageURL: "https://d1kt6vnx6cjjqh.cloudfront.net/wp-content/uploads/charli-xcx.jpg"},
          {id: 3, imageURL: "https://images.genius.com/8b176d8caa8ce3f958749227a5569a85.1000x667x1.jpg"},
          {id: 4, imageURL: "https://4c79id2ej5i11apui01ll2wc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Charli-XCX-Gallery-1.jpg"}


        ],

        video_data:[
          {id: 0, videoURL: "https://www.youtube.com/watch?v=qfAqtFuGjWM"},
          {id: 1, videoURL: "https://www.youtube.com/watch?v=AOPMlIIg_38"},
          {id: 2, videoURL: "https://www.youtube.com/watch?v=6-v1b9waHWY"},
          {id: 3, videoURL: "https://www.youtube.com/watch?v=KP0r5LSbWL4"}

        ]
      }
  },
}
</script>

<style scoped>

  .imageCarousel{
    padding-top: 20px;
  }

  .videoCarousel{
    padding-top: 30px;
  }

  .availableDates{
    padding-top: 30px;
    margin-bottom: 35px;
  }

</style>

