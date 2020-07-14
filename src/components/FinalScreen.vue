<template>
  <div class="finalscreen-container">
    <span class="outer-icon">
      <img src="../assets/check.svg" alt="check">
    </span>
    <div>
      <h6>Great session</h6>
      <p>The notes have new been send to everyone.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinalScreen',
  mounted() {
    
    // route to home page after 5 sec
    setTimeout(() => {
      this.$router.push({
        path: '/'
      })
    }, 5000)
  }
}
</script>

<style>
.finalscreen-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.outer-icon {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: lightgreen;
  margin-right: 2rem;
}

.outer-icon > img {
  height: 200px;
  width: 200px;
}
</style>