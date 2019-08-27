<template>
  <div class="hello">
    Checking for '1' => {{checkForAccess('1')}}
    <br>
    Checking for 1 => {{checkForAccess(1)}}
    <br>
    Checking for '2' => {{checkForAccess('2')}}
  </div>
</template>

<script>
class ConversationView {
  static get modelName() {
		return 'ConversationView'
	}
  constructor(props) {
    Object.assign(this, props);
  }
}
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    checkForAccess(id) {
      return this.$can("view", new ConversationView({ userId: id }));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
