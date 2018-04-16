<template>
    <div class="panel no-margin" :class="[event.color]" @click="showEventDetails">
        <div class="panel-heading event-title" :class="{'clickable-event':isDaySelected}">{{event.title}}</div>
    </div>
</template>

<script>
/* eslint-disable */
   

    import Firebase from "firebase"
    import {config} from '../Clinic/config.js'
    var data = {
        "clinic_name": "",
        "clinic_description": "",
        "clinic_address": "",
        "clinic_email": "",
        "clinic_phone": "",
        "latitude": "",
        "longitude": "",
    }
    export default {
        props: {
            event: {
                type: Object
            },
            isDaySelected: {
                type: Boolean
            }
        },
        methods: {
            showEventDetails() {
                if(this.isDaySelected){
                    // TODO: implement event details presentation
                    alert(this.event.title+'\n ID:1929900486234 \n Time:10:30 \n Tel:0873833867');
                }
            }
        }
    }
    
</script>
<style>
    .event-title {
        padding: 0px 5px;
        font-size: 12px
    }
    .clickable-event {
        text-decoration: underline;
    }
   


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>