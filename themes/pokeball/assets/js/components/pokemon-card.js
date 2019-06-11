Vue.component( "pokemon-card", {
  template: `
  <div>
    <div :class="{ 'pokemon__slot': true, 'type_border': isBorderColorType() }" :style="styleBorder(pokemon)" v-if="pokemon !== null">
      <div :class="{ 'pokemon__image': true, 'pokemon__dead': (pokemon.hp.current == 0)}">
          <img :src="pokemon.img">
      </div>
      <div class="pokemon__nick">
          <span class="pokemon__nick-shiny" v-if="pokemon.isShiny == 1">★</span>
          <span v-if="pokemon.nickname">{{pokemon.nickname}}</span>
          <span v-else>{{pokemon.speciesName}}</span>
          <span class="pokemon__gender pokemon__gender-male" v-if="pokemon.isGenderless == 0 && pokemon.isFemale == 0">♂</span>
          <span class="pokemon__gender pokemon__gender-female" v-if="pokemon.isGenderless == 0 && pokemon.isFemale == 1">♀</span>

      </div>
      <div v-if="pokemon.hp.current != 0">
          <div class="pokemon__level-bar" v-if="pokemon.level != 100">
              <span class="pokemon__level">L{{pokemon.level}}</span>
              <span class="pokemon__hp" style="float: right;">{{pokemon.hp.current}}/{{pokemon.hp.max}}</span>
          </div>
          <div class="pokemon__level-bar" v-else>
              <div class="pokemon__hp">{{pokemon.hp.current}}/{{pokemon.hp.max}}</div>
          </div>
      </div>
      <div v-else>
          <div class="pokemon__dead-label"> DEAD </div>
      </div>
      <div class="pokemon__hp-bar">
          <div class="progress" style="height: 9px;">
              <div :class="healthBarClass(pokemon)" v-bind:style="{width: healthBarPercent(pokemon) + '%'}" role="progressbar" :aria-valuenow="pokemon.hp.current" :aria-valuemin="0" :aria-valuemax="pokemon.hp.max"></div>
          </div>
      </div>
    </div>
    <div class="pokemon__slot pokemon__empty" v-else>
      <div class="pokemon__image">
      </div>
    </div>
  </div>
  `,
  props: {
    pokemon: {
      default: null,
      type: Object,
      required: false
    }
  },
  methods: {

    styleBorder(pokemon) {
      var routeColor = settings.pokeImg.routeColor;
      var pokemonColor = settings.pokeImg.pokemonColor;
      var typeColor = settings.pokeImg.typeColor;

      if (routeColor == true) {
        return { 'border-color': string2Hex(pokemon.locationMet.toString()) };
      }

      if (pokemonColor == true) {
        return { 'border-color': pokemon.color };
      }

      if (typeColor == true) {
        var count = pokemon.types.length;
        var type1 = getTypeColor(pokemon.types[0].label);

        if (count === 2) {
          var type2 = getTypeColor(pokemon.types[1].label);
          return {
            'background': 'linear-gradient(to right, '+type1+' 50%, '+type2+' 50%)',
            'border-color': 'black',
          };
        }
        return { 'background': type1, 'border-color': 'black', };
      }

      return { 'border-color': 'black' };
    },
    healthBarPercent: function (pokemon) {
      if (pokemon.hp.max === pokemon.hp.current) {
        return 100;
      }

      return (100/pokemon.hp.max) * pokemon.hp.current;
    },
    healthBarClass: function (pokemon) {
        var percent = this.healthBarPercent(pokemon);

        if (percent == 0) {
            return 'progress-bar grey';
        }
        if (percent <= 25) {
            return 'progress-bar red';
        }
        if (percent <= 50) {
            return 'progress-bar yellow';
        }

        return 'progress-bar green';
    },
    isBorderColorType: function() {
      return settings.pokeImg.typeColor == true;
    },

    getTypeColor: function(type) {
      return getTypeColor(type);
    },

    getStatusColor: function(status) {
      return getStatusColor(status);
    },
    string2Hex: function(str) {
      return string2Hex(str);
    }
  },
  computed: {

  }
});
