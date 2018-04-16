<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Opening hours</h4>
    </div>

    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-6">
            <label>Monday   :</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Tuesday  :</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Wednesday:</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Thursday:</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Friday:</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Saturday:</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Sunday:</label>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
            <span> to </span>
            <vue-timepicker :minute-interval="5"></vue-timepicker>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Email" v-model="data.clinic_name">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Tel" v-model="data.clinic_name">
            </fg-input>
          </div>
        </div>
      </form>
    </div>
    {{data.mon}}

<!--
<p v-for="(day, index) in yourDaysArray">
  <label>Day {{ index + 1 }}: </label>
  <vue-timepicker v-model="day.start_time"></vue-timepicker>
  <span> to </span>
  <vue-timepicker v-model="day.end_time"></vue-timepicker>
</p>
-->
    <div id="app">
      <vue-timepicker v-model="monS" format="HH:mm" :minute-interval="5"></vue-timepicker>
    </div>
    <div class="content">
      <form>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateClinic">
                                            Update Profile
                                          </button>
        </div>

        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import Firebase from "firebase"
  import VueTimepicker from 'vue2-timepicker'
  import db from '../Clinic/config.js'

  const youId = "axx5UyE0qiaapoyWQHkLwl8twsG2"
  const cliRef = db.ref("clinics/" + youId);

  var data = {
    "clinic_name": "",
    "mon": "",
  }


  /*test db */
  cliRef.on("value", function(snap) {
    console.log(snap.val());
  });


  /*--------------------- */
  export default {
    data: function() {

      cliRef.once("value").then(function(snapshot) {
    var key = snapshot.key;
    console.log("key", key);
    data.clinic_name = snapshot.child("clinic_name").val();
    data.mon = snapshot.child("open_hours/mon").val();
    data.tue = snapshot.child("open_hours/tue").val();
    data.wed = snapshot.child("open_hours/wed").val();
    data.thu = snapshot.child("open_hours/fri").val();
    data.fri = snapshot.child("open_hours/sat").val();
    data.sat = snapshot.child("open_hours/tue").val();
    data.sun = snapshot.child("open_hours/sun").val();

    var mon = data.mon
    var monHHS = mon.substring(0, 2)
    var monmmS = mon.substring(3, 5)
    var monHHE = mon.substring(6, 8)
    var monmmE = mon.substring(9, 11)

    var tue = data.tue
    var tueHHS = tue.substring(0, 2)
    var tuemmS = tue.substring(3, 5)
    var tueHHE = tue.substring(6, 8)
    var tuemmE = tue.substring(9, 11)

    var wed = data.wed
    var wedHHS = wed.substring(0, 2)
    var wedmmS = wed.substring(3, 5)
    var wedHHE = wed.substring(6, 8)
    var wedmmE = wed.substring(9, 11)

    var thu = data.thu
    var thuHHS = thu.substring(0, 2)
    var thummS = thu.substring(3, 5)
    var thuHHE = thu.substring(6, 8)
    var thummE = thu.substring(9, 11)

    var fri = data.fri
    var friHHS = fri.substring(0, 2)
    var frimmS = fri.substring(3, 5)
    var friHHE = fri.substring(6, 8)
    var frimmE = fri.substring(9, 11)

    var sat = data.sat
    var satHHS = sat.substring(0, 2)
    var satmmS = sat.substring(3, 5)
    var satHHE = sat.substring(6, 8)
    var satmmE = sat.substring(9, 11)

    var sun = data.sun
    var sunHHS = sun.substring(0, 2)
    var sunmmS = sun.substring(3, 5)
    var sunHHE = sun.substring(6, 8)
    var sunmmE = sun.substring(9, 11)

    console.log("monHHS", monHHS)
    console.log("monmmS", monmmS)
    console.log("monHHE", monHHE)
    console.log("monmmE", monmmE)


  });
      return {
        data,
        monS: {
          HH: '02',
          mm: '15'
        }, yourDaysArray: [
    {start_time: {HH: '08', mm: '00'}, end_time: {HH: '09', mm: '00'}},
    {start_time: {HH: '15', mm: '00'}, end_time: {HH: '', mm: ''}},
    {start_time: {HH: '', mm: ''}, end_time: {HH: '13', mm: '30'}},
    {start_time: {HH: '', mm: ''}, end_time: {HH: '', mm: ''}}
  ]

      }
    },
    components: {
      VueTimepicker
    },
    firebase: {
      clinics: cliRef,

      /*
        // Optional, allows you to handle any errors.
        cancelCallback(err) {
          console.error(err);
        }
        */
    },
    methods: {
      updateClinic() {
        cliRef.update({
          "clinic_name": data.clinic_name,

        })
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
