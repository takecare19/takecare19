<template>
  <div>
    <v-app-bar flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Take Care 19</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" fab dark v-on="on">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <h1>Welcome to takecare 19!</h1>
    <ResourceList :resources="this.resources" />
  </div>
</template>

<script>
import db from "../firebase/init";
import ResourceList from "@/components/ResourceList";

export default {
  name: "Main",
  components: { ResourceList },
  data() {
    return {
      resources: []
    };
  },
  created() {
    db.collection("resources")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.resources.push(doc.data());
          console.log(doc.data());
        });
      });
  }
};
</script>
