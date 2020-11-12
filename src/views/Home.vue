<template>
  <div class="home">
    <h1>Homepage</h1>
    <p class="red white--text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo atque ut quos tenetur debitis iure provident, delectus assumenda culpa rem dolor tempora eveniet non quis optio, beatae enim aut eum.</p>
    <p class="pink lighten-4 red--text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, exercitationem officiis molestiae obcaecati necessitatibus tempore, delectus incidunt vitae dignissimos aperiam nam laudantium? Quisquam sequi commodi magni, optio dolorem suscipit in?</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Small display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-bold">This is a subheading</p>
    <p class="caption">this is a caption</p>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn flat color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text">
         <v-icon left>mdi-email</v-icon>
         <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
         <v-icon small left>mdi-email</v-icon>
         <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
         <span>email me</span>
         <v-icon large right>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
         <v-icon>mdi-heart</v-icon>
    </v-btn>
     <v-spacer/>
    <v-btn class="hidden-md-and-down">click me</v-btn>
    <v-spacer/>
    <v-btn class="hidden-md-and-up">click me</v-btn>
    <v-spacer/>
    <v-btn class="hidden-sm-only">click me</v-btn>


   

  </div>
</template>

