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

        <div class="content table-responsive table-full-width">
<div class="col-md-2"></div>
          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Mon</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.mon" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Tue</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.tue" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Wed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.wed" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>


          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Thu</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.thu" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Fri</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.fri" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>
          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Sat</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.sat" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="col-md-1">
            <table class="table" :class="tableClass">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in data.booking_time_slots.sun" v-bind:key="d['.key']">
                  <td><button type="button" class="btn btn-round btn-block btn-outline-default"><!---->{{d}}</button></td>
                </tr>

              </tbody>
            </table>
          </div>


          <div class="clearfix"></div>
        </div>
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
