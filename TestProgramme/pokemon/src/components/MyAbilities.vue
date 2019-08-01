<template>
  <abilities ref="abilities"
    :api-url="url"
    :fields="champabilitie"
      data-path="abilities"
  ></abilities>
</template>

<script>
import Abilities from 'vuetable-2/src/components/Vuetable'

export default {
  props: ['url']
  ,
  components: {
    Abilities 
  },

  data(){
    return {
      champabilitie: [
      {
        name: 'ability.name',
        title: 'Talent'
      }
      ]
    }
  }

}
</script>
