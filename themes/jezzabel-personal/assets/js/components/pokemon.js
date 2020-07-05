Vue.component( "Pokemon", {
  template: `
    <div :class="{ 'pokemon': true, 'isDead': isDead, isDamaged: justTookDamage }">
      <div v-if="typeof pokemon == 'object'">
        <div class="hp" v-if="!pokemon.isEgg">
          <div :style="{width:healthPercent}" :class="{ hp__inner: true, low: parseFloat(healthPercent) <= 50, critical: parseFloat(healthPercent) <= 15 }"></div>
        </div>

        <div class="pokemon__row">
          <div class="pokemon__level">
            <small>Lv.</small>{{pokemon.level}}
          </div>
          <div class="pokemon__image">
            <img v-if="pokemon.isEgg" class="sprite" :src="pokemon.img" style="transform: scale(0.8); bottom: 0px;" />
            <img v-else class="sprite" :src="pokemon.img" />
          </div>
        </div>

        <div class="pokemon__name" :style="nameStyle">
          {{pokemon.nickname}}
        </div>

        <!--<div class="pokemon__heldItem" v-if="hasItem"><img :src="pokemon.heldItem.img" /></div>-->

        <div class="exp" v-if="!pokemon.isEgg">
          <div :style="{width:experienceRemaining}" class="exp__inner"></div>
        </div>
      </div>
      <div v-else></div>
    </div>
  `,
  props: {
    pokemon: {},
    key: {}
  },
  data () {
    return {
      settings: {},
      justTookDamage: false
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
    experienceRemaining () {
      const expGroup = exp_groups_table.find(group => this.pokemon.species === group.id)
      const levelExp = experience_table.filter((expRange) => {
        return expRange.level === this.pokemon.level+1
            || expRange.level === this.pokemon.level
      })

      const totalExpForThisRange = levelExp[1][expGroup['levelling_type']] - levelExp[0][expGroup['levelling_type']]
      const expLeftInThisRange = this.pokemon.exp - levelExp[0][expGroup['levelling_type']]

      return (100/totalExpForThisRange) * expLeftInThisRange + '%'
    },
    mainStyle () {
      // let styles = {
      //   'opacity': this.opacity,
      // }

      // if (this.pokemon) {
      //   let primaryType = this.pokemon.types[0].label.toLowerCase()
      //   styles = {...styles, 'background-image': 'linear-gradient(180deg, ' + this.settings.typeColors[primaryType] + ', white)'}
      // }

      // return styles;
    },

    nameStyle () {
      let styles = {
        'opacity': this.opacity,
      }

      if (this.pokemon) {
        let primaryType = this.pokemon.types[0].label.toLowerCase()
        let secondaryType = primaryType;
        if (this.pokemon.types.length < 1) {
          secondaryType = this.pokemon.types[1].label.toLowerCase()
        }

        styles = {...styles, 'background-image': 'linear-gradient(180deg, ' + this.settings.typeColors[primaryType] + ', ' + this.settings.typeColors[secondaryType]  + ')'}
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
  },
  watch: {
    pokemon (newVal, oldVal) {
      try {
        if (newVal.hp.current < oldVal.hp.current) {
          this.justTookDamage = true
          setTimeout(() => {
            this.justTookDamage = false
          }, 3000)
        }
      } catch (e) {
        return
      }
    }
  },
});
