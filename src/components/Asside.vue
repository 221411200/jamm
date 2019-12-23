<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-row v-if="item.heading" :key="item.heading" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-col>
          <v-col cols="6" class="text-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-col>
        </v-row>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item v-for="(child, i) in item.children" :key="i" link>
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="child.to">
                  {{ child.text }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Asside",

    data() {
      return {
        items: [
          {
            icon: "mdi-contacts",
            "icon-alt": "mdi-contacts",
            text: "Colaboradores",
            model: true,
            children: [
              {
                icon: "mdi---",
                text: "Alta",
                to: "/colaborador/create"
              },
              {
                icon: "mdi---",
                text: "Listar",
                to: "/colaborador"
              }
            ]
          },
          {
            icon: "mdi-history",
            text: "App Modulo"
          },
          {
            icon: "mdi-content-copy",
            text: "App Modulo"
          },
          {
            icon: "mdi-chevron-up",
            "icon-alt": "mdi-chevron-down",
            text: "Labels",
            // model: false,
            children: [
              {
                icon: "mdi-plus",
                text: "Accion",
                to: "/"
              }
            ]
          },
          {
            icon: "mdi-chevron-up",
            "icon-alt": "mdi-chevron-down",
            text: "App Modulo",
            model: false,
            children: [
              {
                text: "Opcion",
                to: "/"
              },
              {
                text: "Opcion",
                to: "/"
              },
              {
                text: "Opcion",
                to: "/"
              },
              {
                text: "Opcion",
                to: "/"
              }
            ]
          },
          {
            icon: "mdi-settings",
            text: "App Modulo"
          },
          {
            icon: "mdi-message",
            text: "App Modulo"
          },
          {
            icon: "mdi-help-circle",
            text: "App Modulo"
          },
          {
            icon: "mdi-cellphone-link",
            text: "App Modulo"
          },
          {
            icon: "mdi-keyboard",
            text: "App Modulo"
          }
        ]
      };
    }
  };
</script>

<style lang="css" scoped></style>
