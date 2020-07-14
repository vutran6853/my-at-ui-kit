<template>
  <div class="home-container">
    <form class="home-email-container" v-if='state.isAtDefaultView'>
      <h3>Enter your Email</h3>
      <input v-model='state.userEmail' placeholder="Please enter email" type="email"/>
      <at-button v-on:click='enableShareEmailView'>Start new Session</at-button>
    </form>

    <div v-else-if='state.isAtShareEmailView' class="home-share-container">
      <form class="home-share-email-container">
        <p>Share link</p>
        <a>{{ state.userEmail }}</a>
      </form>
      <at-button type="primary" v-on:click='enableEntryView'>Next</at-button>
    </div>

    <div v-else-if='state.isAtEntryPinView' class="home-entry-container">
      <form class="home-entry-pin-container">
        <h3>Set entry Pin</h3>
        <at-input v-model='state.userPin' placeholder="Please enter new PIN"></at-input>
        <p>This will make sure only who should join is able to join.</p>
      </form>
      <at-button type="primary" v-on:click='routeToChatRoom'>Next</at-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      state: {
        userEmail: '',
        userPin: '',
        isAtDefaultView: true,
        isAtShareEmailView: false,
        isAtEntryPinView: false
      }
    }
  },
  methods: {

    /** render share email view if meet */
    enableShareEmailView() {
      if (this.state.userEmail !== '' && this.state.userEmail.includes('@')) {
        this.state.isAtShareEmailView = true
        this.state.isAtDefaultView = false
      } else {

        // show error message
        this.$Notify({
          title: 'Warning',
          message: 'Please enter vaild email'
        })
      }
    },

    /** render Entry view if meet */
    enableEntryView() {
      this.state.isAtShareEmailView = false
      this.state.isAtEntryPinView = true
    },
    routeToChatRoom() {
      if (this.state.userPin !== '') {
        this.$router.push({
          path: '/chatroom'
        })
      } else {
        
        // show error message
        this.$Notify({
          title: 'Warning',
          message: 'Please enter new PIN.'
        })
      }
     
    }
  }
}
</script>

<style>
.home-container {
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.home-email-container {
  height: 10rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}

.home-email-container > button {
  color: whitesmoke;
  background-color: #8DABC4;
}

.home-email-container > button:hover {
  color: black;
}

.home-share-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.home-share-email-container {
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}

.home-entry-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.home-entry-pin-container {
  width: 20rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
