<template>
      <!--adding of button -->
    <v-dialog
      v-model="dialog"
      width="500"
      > 
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add A New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h2>Add A New Project</h2>
        </v-card-title>
        <!-- form -->
        <v-card-text>
                           <!-- vanillia js-->
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
          

             <v-menu v-model="menu" :close-on-content-click="false">
            <v-text-field slot="activator" :rules="inputRules"
              :value="formattedDate" clearable label="Due date" prepend-icon="mdi-calendar">
            </v-text-field>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

            <!-- add another form  //                  on click button and loader -->
            <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format';
import db from '@/fb'
  export default {
    data () {
      return {
        title: '',
        content: '',
        due: null,
        inputRulers: [
          v => v.length >= 3 || 'Minium length is 3 character'
        ],
        loading: false,
        dialog: false
      }
    },
    methods: {
      submit() {
        if(this.$refs.form.validate()){
          this.loading="true";

          const project = {
            title: this.title,
            content: this.content,
            due: format(this.due, 'Do MM YYYY'),
            person: 'The Net Ninja',
            status: 'ongoing'

          }

          db.collection('projects').add(project).then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit('projectAdded')
          })
        }
      }
    },
    computed: {
      formattedDate() {
        return this.due ? format(this.due, 'Do MM YYYY'): ''
      }
    }
  }
</script>

<style scoped>
</style>