<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Time Slots</h4>
    </div>
    <!--
<p v-for="d in data.booking_time_slots" v-bind:key="d['.key']">{{d}}</p>
-->
    <div class="content">
      <form>
        <div class="panel-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="d in data.booking_time_slots.mon" v-bind:key="d['.key']">
                <td><a>{{d}}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import Firebase from "firebase"
  import db from '../Clinic/config.js'

  const youId = "axx5UyE0qiaapoyWQHkLwl8twsG2"
  const cliRef = db.ref("clinics/" + youId);

  var data = {
    "booking_time_slots": {
      "fri": [],
      "mon": [],
      "sat": []
    }
  }



  /*test db */
  cliRef.on("value", function(snap) {
    console.log(snap.val());
  });
  cliRef.once("value").then(function(snapshot) {
    var key = snapshot.key;
    console.log("key", key);

    // show array
    data.booking_time_slots = snapshot.child("booking_time_slots").val();

  });

  /*--------------------- */
  export default {
    name: 'infromations',
    data: function() {
      return {
        data
      }
    },
    firebase: {
      clinics: cliRef,

      /*
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
        */
    }
  };
</script>


<style scoped>
  #map {
    height: 300px;
    width: 100%;
  }
</style>
