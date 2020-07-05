Vue.component( "Pokemon", {
  template: `
    <div :class="{ 'pokemon': true }" :style="mainStyle">
      <label v-if="typeof pokemon == 'object'">
        <img v-if="pokemon.isEgg" class="sprite" :src="pokemon.img" style="max-height: 80px;" />
        <img v-else class="sprite" :src="pokemon.img" />
      </label>
      <label v-else></label>
    </div>
  `,
  props: {
    pokemon: {},
    key: {}
  },
  computed: {
    healthPercent() {
      return (100/this.pokemon.hp.max) * this.pokemon.hp.current + "%";
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
      if (typeof this.pokemon === "undefined") { return ''; }
      if (this.pokemon.img) {
        return this.pokemon.img;
      }

      return '';
    },
    mainStyle () {
      return {
        'opacity': this.opacity,
        'background-image': `url(${this.sprite})`
      };
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
