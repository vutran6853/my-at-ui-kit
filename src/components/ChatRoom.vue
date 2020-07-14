<template>
  <div class="chat-room-container">
    <div class="chat-room-inner-container">
      <div class="chat-room-inner-left-container">
        <p>User 1</p>
        <p>User 2</p>
      </div>
      <div class="chat-room-inner-right-container">
        <p>Live Text by all Attendees</p>
      </div>
    </div>
    <at-button type="success" v-on:click='routeTo'>Start testing</at-button>
  </div>
</template>

<script>
export default {
  name: 'Chatroom',
  methods: {
    routeTo() {
      this.$router.push({
        path: '/finalScreen'
      })
    }
  }
}
</script>

<style>
.chat-room-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  height: 100vh;
  justify-content: space-around;
}

.chat-room-inner-container {
  display: grid;
  width: 100%;
  grid-template-columns: 10rem 1fr;
  gap: 10px;
  height: calc(100vh - 10rem);
  justify-content: space-around;
}

.chat-room-inner-container > div {
  border: 1px solid black;
}

.chat-room-inner-left-container {
  padding: 10px;
}

.chat-room-inner-left-container > p {
  background-color: greenyellow;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.chat-room-inner-right-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>