<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Opening hours</h4>
    </div>

    <div class="content">

      <form>
        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Monday   :</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.monS" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                      }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.monE" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: data.monS
                      }">
            </el-time-select>
          </div>
        </div>

        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Tuesday  :</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.tueS" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                      }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.tueE" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: data.tueS
                      }">
            </el-time-select>
          </div>
        </div>

        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Wednesday:</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.wedS" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                      }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.wedE" :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: data.wedS
                      }">
            </el-time-select>
          </div>
        </div>

        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Thursday:</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.thuS" :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30'
                    }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.thuE" :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30',
                      minTime: data.thuS
                    }">
            </el-time-select>
          </div>
        </div>

        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Friday:</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.friS" :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.friE" :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: data.friS
                  }">
            </el-time-select>
          </div>
        </div>

        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Saturday:</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.satS" :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.satE" :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: data.satS
                }">
            </el-time-select>
          </div>
        </div>

        <div class="col-md-3"></div>
        <div class="row">
          <div class="col-md-1">
            <label>Sunday:</label>
          </div>
          <div class="col-md-6">
            <el-time-select placeholder="Start time" v-model="data.sunS" :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }">
            </el-time-select>
            <el-time-select placeholder="End time" v-model="data.sunE" :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: data.sunS
                }">
            </el-time-select>
          </div>
        </div>


      </form>
    </div>

    <div class="content">
      <form>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateSchedule">
                                                                  Update Schedles
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
      "open_hours/mon": "",
      "open_hours/tue": "",
      "open_hours/wed": "",
      "open_hours/thu": "",
      "open_hours/fri": "",
      "open_hours/sat": "",
      "open_hours/sun": ""
    }


  console.log('ffff',data);

  cliRef.once("value").then(function(snapshot) {
    data.open_hours = snapshot.child("open_hours").val();
    console.log("opend", data.open_hours);

data.monS = snapshot.child("open_hours/mon").val().split("-")[0];
data.monE = snapshot.child("open_hours/mon").val().split("-")[1];

data.tueS = snapshot.child("open_hours/tue").val().split("-")[0];
data.tueE = snapshot.child("open_hours/tue").val().split("-")[1];

data.wedS = snapshot.child("open_hours/wed").val().split("-")[0];
data.wedE = snapshot.child("open_hours/wed").val().split("-")[1];

data.thuS = snapshot.child("open_hours/thu").val().split("-")[0];
data.thuE = snapshot.child("open_hours/thu").val().split("-")[1];

data.friS = snapshot.child("open_hours/fri").val().split("-")[0];
data.friE = snapshot.child("open_hours/fri").val().split("-")[1];

data.satS = snapshot.child("open_hours/sat").val().split("-")[0];
data.satE = snapshot.child("open_hours/sat").val().split("-")[1];

data.sunS = snapshot.child("open_hours/sun").val().split("-")[0];
data.sunE = snapshot.child("open_hours/sun").val().split("-")[1];



  });
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
    methods: {
      updateSchedule() {
        cliRef.update({
            "open_hours/mon": data.monS+"-"+data.monE,
            "open_hours/tue": data.tueS+"-"+data.tueE,
            "open_hours/wed": data.wedS+"-"+data.wedE,
            "open_hours/thu": data.thuS+"-"+data.thuE,
            "open_hours/fri": data.friS+"-"+data.friE,
            "open_hours/sat": data.satS+"-"+data.satE,
            "open_hours/sun": data.sunS+"-"+data.sunE,
        })
      }
    }

  }
</script>
