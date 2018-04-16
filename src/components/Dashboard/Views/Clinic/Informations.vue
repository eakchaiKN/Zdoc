<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Details</h4>
    </div>

    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Clinic Name" v-model="data.clinic_name">
            </fg-input>
          </div>
          <div>

          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Description</label>
              <textarea rows="3" class="form-control border-input" v-model="data.clinic_description">
                            </textarea>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text" label="Address" v-model="data.clinic_address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Email" v-model="data.clinic_email">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text" label="Tel" v-model="data.clinic_phone">
            </fg-input>
          </div>
        </div>
      </form>
    </div>

    <div class="header">
      <h4 class="title">Map</h4>
    </div>

    <div class="content">
      <form>
        <div id="map"></div>
      </form>
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
  import db from '../Clinic/config.js'

  const youId = "axx5UyE0qiaapoyWQHkLwl8twsG2"
  const cliRef = db.ref("clinics/" + youId);

  var data = {
    "clinic_name": "",
    "clinic_description": "",
    "clinic_address": "",
    "clinic_email": "",
    "clinic_phone": "",
    "latitude": "",
    "longitude": "",
  }


  /*test db */
  cliRef.on("value", function(snap) {
    console.log(snap.val());
  });
  cliRef.once("value").then(function(snapshot) {
    var key = snapshot.key;
    console.log("key", key);
    data.clinic_name = snapshot.child("clinic_name").val();
    data.clinic_description = snapshot.child("clinic_description").val();
    data.clinic_address = snapshot.child("clinic_address").val();
    data.clinic_email = snapshot.child("clinic_email").val();
    data.clinic_phone = snapshot.child("clinic_phone").val();
    data.latitude = snapshot.child("location/latitude").val();
    data.longitude = snapshot.child("location/longitude").val();

  });

  /*--------------------- */
  export default {
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
    },
    mounted: function() {
      console.log("map: ", google.maps)
      cliRef.once("value").then(function(snapshot) {
        var key = snapshot.key;
        console.log("key", key);
        var cliniclatitude = snapshot.child("location/latitude").val();
        var cliniclongitude = snapshot.child("location/longitude").val();
        console.log("latitude", cliniclatitude);
        console.log("longitude", cliniclongitude);

        var lat = cliniclatitude
        var lng = cliniclongitude

        var myLatLng = {
          lat: lat,
          lng: lng
        };
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 15
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: myLatLng,
          title: data.clinic_name
        });
        marker.addListener('dragend', toggleBounce);
        console.log(myLatLng);

        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
      });

    },
    methods: {
      updateClinic() {
        cliRef.update({
          "clinic_name": data.clinic_name,
          "clinic_description": data.clinic_description,
          "clinic_address": data.clinic_address,
          "clinic_email": data.clinic_email,
          "clinic_phone": data.clinic_phone,

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
