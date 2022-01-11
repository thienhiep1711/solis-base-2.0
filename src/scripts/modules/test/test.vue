<template>
  <div>Vue components {{ message }}</div>
</template>

<script>
import { useStore } from 'vuex'
import testStore from './@store'

export default {
  name: 'Test',
  setup () {
    const localStore = useStore(testStore)
    console.log(localStore)
  },
  data () {
    return {
      message: 'test module'
    }
  },
  mounted () {
    console.log('test')
    // console.log(this.localStore)
  }
}
</script>
