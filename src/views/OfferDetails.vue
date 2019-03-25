<template>
    <div>
        <hr />
        <TabbedSubMenu />
        <div style="width:100%">
            <ExtendedOffer/>
        </div>
    </div>
</template>

<script>

import TabbedSubMenu from '@/components/menus/TabbedSubMenu.vue';
import ExtendedOffer from '@/components/ExtendedOffer.vue'

export default {
  name: 'OfferDetails',
  components: {
    TabbedSubMenu,
    ExtendedOffer,
  },

  data: function(){
    return {
      }
    },
}
</script>

<style scoped>
    hr {
      margin: 0px;
    }
</style>

<style>
</style>


