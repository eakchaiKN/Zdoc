<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Pending</h4>
    </div>

    <div class="content">
      <form>

        <div class="panel-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Book Slots</th>
                <th>Name</th>
                <th>ID card number</th>
                <th>Tel.</th>
                <th>Symptom</th>
                <th>Status</th>
                <th>Confirm</th>
                <th>Cancel</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="app in appointments" v-bind:key="app['.key']">
                <td><a>{{app.booked_slot}}</a></td>
                <td><a>{{app.firstname}} {{app.lastname}}</a></td>
                <td><a>{{app.id_card_number}}</a></td>
                <td><a>{{app.phone_number}}</a></td>
                <td><a>{{app.symptom}}</a></td>
                <td><a>{{app.status}}</a></td>
                <td><button class="btn btn-sm btn-success" v-on:click="updateAppointment(app)">
                  <i class="ti-check-box"></i>
                </button></td>
                <td><button  class="btn btn-sm btn-danger" v-on:click="removeAppointment(app)">
                  <i class="ti-trash"></i>
                </button></td>
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

  const appointmentRef = db.ref("appointments");

  var app = {

    "status": "",

  }



  /*test db */
  appointmentRef.on("value", function(snap) {
    console.log(snap.val());
  });
  appointmentRef.once("value").then(function(snapshot) {
    var key = snapshot.key;
    console.log("key", key);
    app.status = snapshot.child("status").val();

  });

  /*--------------------- */
  export default {
    name: 'pending',
    data: function() {
      return {
        app
      }
    },
    firebase: {
      appointments: appointmentRef,

      /*
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
        */
    },
    methods: {
      updateAppointment: function (app) {
        appointmentRef.child(app['.key']).update({"status": "Accept",})

      },removeAppointment: function (app) {
        appointmentRef.child(app['.key']).remove()
        toastr.success('Pending for appointment removed successfully')
      }
    }
  };
</script>

<style scoped>
  #map {
    height: 300px;
    width: 100%;
  }
</style>
