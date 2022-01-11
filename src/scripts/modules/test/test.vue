<template>
  <div>Vue components {{ message }}</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      message: 'test module'
    }
  },
  mounted () {
    console.log('test')
  }
}
</script>
