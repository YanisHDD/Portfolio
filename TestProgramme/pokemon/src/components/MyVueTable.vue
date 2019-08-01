<template>
  <vuetable ref="vuetable"
    :api-url="url"
    :fields="champstat"
      data-path="stats"
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'

export default {
  props: ['url']
  ,
  components: {
    Vuetable 
  },

  data(){
    return {
      champstat: [
      {
        name: 'stat.name',
        title: 'Caractéristiques'
      },
      {
        name:'base_stat',
        title: 'Stat au niveau 1'
      }
      ]
    }
  }
}
</script>
