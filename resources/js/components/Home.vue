<template>
  <section>
		<h1>รายชื่อผู้ใช้งานทั้งหมด</h1>
    <ul>
      <li v-for="(user, i) in users" :key="i">{{ user.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
		return {
			users: []
		}
	},
	mounted() {
		this.getUsers()
	},
  methods: {
    getUsers() {
      axios.get('/users').then(({ data }) => {
        this.users = data
      }).catch(error => {
        console.log(error)
        if (error.response) {
          console.log(error.response)
        }
      })
    }
  }
}
</script>

<style>
</style>
