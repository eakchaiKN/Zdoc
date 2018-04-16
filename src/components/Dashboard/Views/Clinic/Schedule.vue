<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Opening hours</h4>
    </div>

    <div class="content">
      <form>

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
          <button type="submit" class="btn btn-info btn-fill btn-wd" >
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
    "open_hours": {
      "fri": "",
      "mon": "",
      "sat": "",
      "fri": "",
      "mon": "",
      "sat": "",
      "sat": "",



    }

  }
  cliRef.once("value").then(function(snapshot) {
    data.open_hours = snapshot.child("open_hours").val();
    console.log("opend", data.open_hours.mon);
    var mon = data.open_hours.mon.split("-");
    var monS = mon[0];
    console.log("monS",monS);

  });
  export default {
    data: function() {
      return {
        data :{
        monS: '',
        monE: '',
        tueS: '',
        tueE: '',
        wedS: '',
        wedE: '',
        thuS: '',
        thuE: '',
        friS: '',
        friE: '',
        satS: '',
        satE: '',
        sunS: '',
        sunE: ''
     } };
    }
  }
</script>
