<template>
  <ThreadList :threads="threads"/> 
</template>

<script>

import ThreadList from '@/components/ThreadList'
import sourceData from '@/data.json'
export default {
  components: {
    ThreadList
  },
  data () {
    return {
      threads: sourceData.threads,
    }
  },
}
</script>

<style scoped>

</style>