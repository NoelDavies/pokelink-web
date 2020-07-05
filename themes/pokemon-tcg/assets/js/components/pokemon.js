Vue.component( "Pokemon", {
  template: `
    <div :class="{ 'pokemon': true, 'isDead': isDead }" :style="mainStyle">
      <div class="pokemon" :style="innerMonStyle">
      <label v-if="typeof pokemon == 'object'">
        <div class="hp" v-if="!pokemon.isEgg && settings.hideHPBar === true">
          <div :style="{height:healthPercent}" :class="{ hp__inner: true, low: parseFloat(healthPercent) <= 50, critical: parseFloat(healthPercent) <= 15 }"></div>
        </div>
      </label>
      <label v-else></label>
    </div>
  `,
  props: {
    pokemon: {},
    key: {}
  },
  data () {
    return {
      settings: {},
      selectedSet: 'base1',
      sets: [
        'base5',
        'xy7',
        'swsh1',
        'base2'
      ],
      party: [25, 1, 54, 21, 5, 53]
    }
  },
  created () {
    this.settings = window.settings;
  },
  computed: {
    // (100/194) * 194
    healthPercent() {
      return (100/this.pokemon.hp.max) * this.pokemon.hp.current + "%";
    },
    isDead () {
      if (typeof this.pokemon === "undefined") { return false; }

      return parseFloat(this.healthPercent) === 0
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
        styles = {...styles, 'background-image': 'url(' + this.pokemon.img + ')'}
      }

      return styles;
    },
    innerMonStyle () {
      let styles = {}

      if (this.pokemon) {
        styles = {
          'background-image': 'url(' + this.pokemon.img + ')',
          'height': 100 - ( (100/this.pokemon.hp.max) * this.pokemon.hp.current) + '%',
          'filter': 'grayscale(1)'
        }

        console.log(styles)
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
