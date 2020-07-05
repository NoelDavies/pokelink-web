Vue.component( "Pokemon", {
  template: `
    <div :style="mainStyle">
      <div :class="{ 'pokemon': true, 'isDead': isDead }" v-if="typeof pokemon == 'object'">
        <div class="pokemon__image">
          <img v-if="pokemon.isEgg" class="sprite" :src="pokemon.img" style="transform: scale(0.8); bottom: 0px;" />
          <img v-else class="sprite" :src="pokemon.img" />
        </div>
        <div class="pokemon__details">
          <div class="pokemon__name">
            {{ pokemon.nickname }} <span class="pokemon__gender-icon"></span>

            <span class="pokemon__gender-icon pokemon__gender-icon--male" v-if="pokemon.isGenderless == 0 && pokemon.isFemale == 0">♂</span>
            <span class="pokemon__gender-icon pokemon__gender-icon--female" v-if="pokemon.isGenderless == 0 && pokemon.isFemale == 1">♀</span>
          </div>

          <div class="pokemon__level">
            Lv {{ level }}
          </div>

          <div class="pokemon__hp-bar hp-bar">
            <span class="hp-bar__label">HP</span>
            <div class="hp-bar__container">
              <div :style="{width:healthPercent}" :class="{ hp__inner: true, low: parseFloat(healthPercent) <= 50, critical: parseFloat(healthPercent) <= 15 }"></div>
            </div>
          </div>

          <div class="pokemon__hp-text">
            <div class="hp-text__first">{{ pokemon.hp.current }}/</div>
            <div class="hp-text__second">{{ pokemon.hp.max }}</div>
          </div>
        </div>
      </div>
      <div v-else><div>
    </div>
  `,
  props: {
    pokemon: {},
    key: {}
  },
  data () {
    return {
      settings: {}
    }
  },
  created () {
    this.settings = window.settings;
  },
  computed: {
    healthPercent() {
      return (100/this.pokemon.hp.max) * this.pokemon.hp.current + "%";
    },
    isDead () {
      if (typeof this.pokemon === "undefined") { return false; }

      return parseFloat(this.healthPercent) === 0
    },
    level () {
      return this.pokemon.level || '0';
    },
    nickname() {
      return this.pokemon.nickname || this.pokemon.speciesName;
    },
    sex() {
      return (this.pokemon.isGenderless ? '' : (this.pokemon.isFemale ? 'female' : 'male'));
    },
    ident() {
      if (typeof this.pokemon === "undefined") { return null; }
      return this.pokemon.species;
    },
    opacity() {
      if (typeof this.pokemon === "undefined") { return '0.4'; }
      return '1';
    },
    hasItem() {
      if (typeof this.pokemon === "undefined") { return false; }
      if (typeof this.pokemon.heldItem === "undefined") { return false; }
      if (typeof this.pokemon.heldItem.id === "undefined") { return false; }
      return this.pokemon.heldItem.id !== 0;
    },
    sprite () {
      console.log(this.pokemon)
      if (typeof this.pokemon === "undefined") { return ''; }
      if (this.pokemon.img) {
        return this.pokemon.img;
      }

      return '';
    },
    mainStyle () {
      let styles = {
        'opacity': this.opacity,
      }

      if (this.pokemon) {
        let primaryType = this.pokemon.types[0].label.toLowerCase()
        styles = {...styles, }//'background-image': 'linear-gradient(180deg, ' + this.settings.typeColors[primaryType] + ', white)'}
      }

      return styles;
    },

    selectedPokemon: {
      get: function() {
        return this.nickname
      },
      set: function() {
        this.$emit( "change", this.nickname )
      }
    }
  }
});
