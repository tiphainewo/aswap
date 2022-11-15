import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#D4D352',
            secondary: '#D94693',
            accent: '#50398E',
          },
        },
      },
});
