<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Details</h4>
    </div>

    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Email" v-model="email">
            </fg-input>
          </div>
          </div>
           <div class="row">
          <div class="col-md-6">
            <fg-input type="password" label="Password" v-model="password">
            </fg-input>
          </div>
          </div>
          
           <div class="row">
          <div class="col-md-6">
            <fg-input type="text" label="Clinicname" v-model="clinic_name">
            </fg-input>
          </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <fg-input type="text" label="Adress" v-model="clinic_address">
              </fg-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <fg-input type="text" label="Telphone" v-model="clinic_phone">
              </fg-input>
            </div>
          </div>
        
      </form>
    </div>


    <div class="content">
      <form>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" v-on:click="signUp">
                                Register Now
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
  import {config} from '../Clinic/config.js'
//console.log("config",config);

export default{
  name: 'signUp',
    data: function() {

      return{
        
        email:'',
        password:'',
        clinic_name: '',
        clinic_address: '',
        clinic_phone: ''
        
      }
    },
    methods: {
      signUp: function(){
        //console.log(this.email,this.password);
        
        Firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
          (user)=>{
            
            var userId = Firebase.auth().currentUser.uid;
            Firebase.database().ref('clinics/' + userId).set({
              clinic_name : this.clinic_name,
              clinic_email: this.email,
              clinic_address:this.clinic_address,
              clinic_phone:this.clinic_phone,
              clinic_image:"",
              location:{
                latiude:"7.830245",
                longtitude:"98.0797327"

              },
              open_hours:{
                mon:"08:00-17:00",
                tue:"08:00-17:00",
                wed:"08:00-17:00",
                thu:"08:00-17:00",
                fri:"08:00-17:00",
                sat:"Close",
                sun:"Close"
              }
            });
            this.$router.replace('dashboard')
          },
          (err)=>{
            alert('Oops' + err.message)
          }
          )
        

      }





    }
}




</script>

<style lang="scss"></style>
