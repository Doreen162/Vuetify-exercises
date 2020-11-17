<template>
  <div class="dashboard">
     <!--subheading/colour -->
    <h1 class="subheading grey--text">Dashboard</h1>
   <!-- margin -->
     <v-container class="my-5">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptatum eligendi voluptatibus quos ratione possimus quasi illum, animi alias optio hic quam laboriosam velit necessitatibus architecto, repellendus quia, reprehenderit totam.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda consectetur eos nisi ullam dolorum impedit iste culpa at. Sit dolorum odio ducimus exercitationem fugit asperiores consequuntur vel placeat eaque.</p>
    </v-container>

    <v-container>
        content
    </v-container>

       <v-container class="my-5">
         <v-layout row wrap>
           <!--extra small screen(12) columns in width(6)-->
          <v-flex xs12 md6>
              <v-btn outline block class="primary">1</v-btn>
              </v-flex>
              <v-flex xs4 md2>
              <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
              <v-btn outline block class="primary">3</v-btn>
            </v-flex>
            <v-flex xs4 md2>
              <v-btn outline block class="primary">4</v-btn>
            </v-flex>
         </v-layout>
          <!--space between grid /use justify center or end/space-between-->
         <v-layout row wrap justify-space-around>
           <!--extra small screen(4) columns in width(3)-->
           <v-flex xs4 md3>
             <v-btn outline block class="success">1</v-btn>
           </v-flex>
           <v-flex xs4 md3>
             <v-btn outline block class="success">2</v-btn>
           </v-flex>
           </v-layout>
           <v-container>

           <!--grid system part 2 example 1-->
           <v-card flat class="pa-3">
             <v-layout row flat>
               <v-flex xs12 md6>
                 <div class="caption grey--text">Project Title</div>
                 <div>Create a New Website</div>
                 </v-flex>
                 <v-flex xs6 sm4 md2>
                   <div class="caption grey--text">Person</div>
                   <div>The Net Ninja</div>
                   </v-flex>
                    <v-flex xs6 sm4 md2>
                   <div class="caption grey--text">Due By</div>
                   <div>1 Jan 2020</div>
                   </v-flex>
                    <v-flex xs2 sm4 md2>
                   <div class="caption grey--text">Status</div>
                   <div>Ongoing</div>
                   </v-flex>
                     </v-layout>
           </v-card>
           </v-container>
           <!--Ending of example 1-->

            <!--grid system example 2 -->

              <!--project icon -->
              <v-container class="my-5"> 
                <v-layout row class="my-3">
    
             <!--sorting out names -->
               <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon small left>mdi-folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>
                </v-layout>
              
                <v-layout row class="my-3">
                   <!--sorting out names -->
                   <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon small left>mdi-account</v-icon>
            <span class="caption text-lowercase">By Person</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>
                </v-layout>
                
                  <v-spacer></v-spacer>
              <v-card flat v-for="project in projects" :key="project.title">
                <!-- complete/ overdue dates codes-->
             <v-layout row wrap :class="`pa-3 project ${project.status}`">
               <v-flex xs12 md6>
                 <div class="caption grey--text">Project Title</div>
                 <div>{{ project.title }}</div>
                 </v-flex>
                 <v-flex xs6 sm4 md2>
                   <div class="caption grey--text">Person</div>
                   <div>{{ project.person }}</div>
                   </v-flex>
                    <v-flex xs6 sm4 md2>
                   <div class="caption grey--text">Due By</div>
                   <div>{{ project.due  }}</div>
                   </v-flex>
                   <!-- chips (circle around)-->
                    <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
                   </v-flex>
             </v-layout>
             <v-divider></v-divider>
           </v-card>
           </v-container>
    </v-container>
  </div>
</template>

<!--grid system part of example 2 -->
<script>
import db from '@/fb'

export default {
  data() {
    return {
      projects: [
       // { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
       // { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
       // { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
       // { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();
   // Firebase data 
      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })

  }
}

</script>
<!-- CSS of project -->
<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>