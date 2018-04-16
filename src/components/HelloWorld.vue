<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <div class="panel-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cus in customer">
                <td><a v-bind:href="cus.url">{{cus.name}}</a></td>
                <td>{{cus.lastname}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyAHdrRJ7JCL2HVazvaoqhj8vhz8FM7PgMM",
    authDomain: "book-dentist.firebaseapp.com",
    databaseURL: "https://book-dentist.firebaseio.com",
    projectId: "book-dentist",
    storageBucket: "book-dentist.appspot.com",
  };

let app = Firebase.initializeApp(config)
let db = app.database()
let cusRef = db.ref('customer')

export default {
  name: 'HelloWorld',
  firebase: {
    customer: cusRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
