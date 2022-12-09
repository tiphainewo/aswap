<template>
  <div class="h-full">
    <p class="pt-4 pl-4 font-semibold text-[#D94693] text-lg !m-0">
      <v-icon color="secondary">mdi-forum</v-icon>
      Discussions</p>
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title" v-on:click="openChat(item.id)">
          <v-list-item-avatar size="50">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { header: "Aujourd'hui" },
      {
        id: 2,
        avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        title: "Lucas Corless",
        subtitle: `Bonjour, je serais intéressé par votre Mono...`,
      },
      { divider: true, inset: true },
      {
        id: 3,
        avatar: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
        title: 'Reggis Moseley',
        subtitle: `Oui bien sûr! Par contre je ne serai pas e...`,
      },
      { header: "18 novembre" },
      {
        id: 1,
        avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        title: "Lucie Martin",
        subtitle:
          'Merci beaucoup!',
      },
    ],
  }),

  methods: {
    openChat(id){
      this.$router.push({ path: `/chat/${id}`, query: { game: 'Monopoly' }})
    }
  }
};
</script>
