<template>
    <nav>

       <!-- snackbar on top of Home Page -->
      <v-snackbar v-model="snackbar" timeout="4000" top color="success">
        <span>Awesome! You added a new project.</span>
        <v-btn flat color="black" @click="snackbar = false">Close</v-btn>
      </v-snackbar>


        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>

         
      <!--    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> 

    
     dropdown menu-->

             <!-- <v-menu offset-y>
        <v-btn text slot="activator" color="grey">
          <v-icon left>mdi-expand_more</v-icon>
          <span>Menu</span>
          
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu> -->

         <v-btn flat color="grey">
          <span>Sign Out</span>
          <v-icon right>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar>
   <!-- link icons-->
      <v-navigation-drawer app v-model="drawer" class="green">
        <!--add avatar to nav bar -->
          <v-layout column align-center>
            <!--margin -->
        <v-flex class="mt-5">
          <!-- size -->
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatar-1.png">
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>

        <v-flex mt-4 mb-3>
          <!--make Snackbar true(working) -->
           <Popup @projectAdded="snackbar = true"/> 
        </v-flex>

      </v-layout>
          <v-list>
          <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
              <v-list-item-action>
               <v-icon class="white--text">{{ link.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title class="white--text">
                      {{ link.text}}
                  </v-list-item-title>
              </v-list-item-content>
                  </v-list-item>
          </v-list>
      </v-navigation-drawer>

    </nav>
</template>

<script>
import Popup from './Popup'
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ],
      snackbar: false
    }
  }
}
</script>