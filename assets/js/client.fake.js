
window.settings = {};
settings = deepmerge(settings, defaultSettings);
settings = deepmerge(settings, themeSettings);
settings = deepmerge(settings, clientSettings);
if (window.settings.debug) {
  console.log(settings);
}

if (typeof pokedex !== 'undefined') {
  pokedex = collect(pokedex);
}

if (typeof movedex !== 'undefined') {
  movedex = collect(movedex);
}

if (typeof itemdex !== 'undefined') {
  itemdex = collect(itemdex);
}

var events = [];
let fakeEvents = [{name: 'connect', payload: null}, {
  "event": "client:badges:updated",
  "payload": {
      "id": "m-v-k2S8aRFRVTFrAAAF",
      "username": "Jez",
      "trainer": {
          "badges": null,
          "game": null,
          "trainerName": null,
          "trainer_id": null,
          "secret_id": null,
          "money": null
      },
      "party": [],
      "boxes": [],
      "pokedex": {
          "stats": {
              "seen": 0,
              "caught": 0,
              "dead": 0
          },
          "seen": [],
          "caught": [],
          "dead": []
      }
  }
}, {
  "event": "player:trainer:updated",
  "payload": {
      "id": "m-v-k2S8aRFRVTFrAAAF",
      "username": "Jez",
      "trainer": {
          "badges": null,
          "game": null,
          "trainerName": null,
          "trainer_id": null,
          "secret_id": null,
          "money": null
      },
      "party": [],
      "boxes": [],
      "pokedex": {
          "stats": {
              "seen": 0,
              "caught": 0,
              "dead": 0
          },
          "seen": [],
          "caught": [],
          "dead": []
      }
  }
}, {
  "event": "player:trainer:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "id": "m-v-k2S8aRFRVTFrAAAF",
          "username": "Jez",
          "trainer": {
              "badges": [],
              "game": {
                  "id": "POKEMON EMER",
                  "friendlyName": "Pokémon Emerald",
                  "generation": 3,
                  "gen3_game_key": 2,
                  "gen3_subgame_key": 0,
                  "gen45_game_key": 0,
                  "gen45_subgame_key": 0
              },
              "trainerName": null,
              "trainer_id": null,
              "secret_id": null,
              "money": null
          },
          "party": [],
          "boxes": [],
          "pokedex": {
              "stats": {
                  "seen": 0,
                  "caught": 0,
                  "dead": 0
              },
              "seen": [],
              "caught": [],
              "dead": []
          }
      }
  }
}, {
  "event": "client:badges:updated",
  "payload": {
      "id": "m-v-k2S8aRFRVTFrAAAF",
      "username": "Jez",
      "trainer": {
          "badges": [ {
              "name": "Stone",
              "value": false
          }, {
              "name": "Knuckle",
              "value": false
          }, {
              "name": "Dynamo",
              "value": false
          }, {
              "name": "Heat",
              "value": false
          }, {
              "name": "Balance",
              "value": false
          }, {
              "name": "Feather",
              "value": false
          }, {
              "name": "Mind",
              "value": false
          }, {
              "name": "Rain",
              "value": false
          } ],
          "game": {
              "id": "POKEMON EMER",
              "friendlyName": "Pokémon Emerald",
              "generation": 3,
              "gen3_game_key": 2,
              "gen3_subgame_key": 0,
              "gen45_game_key": 0,
              "gen45_subgame_key": 0
          },
          "trainerName": null,
          "trainer_id": null,
          "secret_id": null,
          "money": null
      },
      "party": [],
      "boxes": [],
      "pokedex": {
          "stats": {
              "seen": 0,
              "caught": 0,
              "dead": 0
          },
          "seen": [],
          "caught": [],
          "dead": []
      }
  }
}, {
  "event": "player:trainer:updated",
  "payload": {
      "id": "m-v-k2S8aRFRVTFrAAAF",
      "username": "Jez",
      "trainer": {
          "badges": [ {
              "name": "Stone",
              "value": false
          }, {
              "name": "Knuckle",
              "value": false
          }, {
              "name": "Dynamo",
              "value": false
          }, {
              "name": "Heat",
              "value": false
          }, {
              "name": "Balance",
              "value": false
          }, {
              "name": "Feather",
              "value": false
          }, {
              "name": "Mind",
              "value": false
          }, {
              "name": "Rain",
              "value": false
          } ],
          "game": {
              "id": "POKEMON EMER",
              "friendlyName": "Pokémon Emerald",
              "generation": 3,
              "gen3_game_key": 2,
              "gen3_subgame_key": 0,
              "gen45_game_key": 0,
              "gen45_subgame_key": 0
          },
          "trainerName": null,
          "trainer_id": null,
          "secret_id": null,
          "money": null
      },
      "party": [],
      "boxes": [],
      "pokedex": {
          "stats": {
              "seen": 0,
              "caught": 0,
              "dead": 0
          },
          "seen": [],
          "caught": [],
          "dead": []
      }
  }
}, {
  "event": "client:players:list",
  "payload": [ {
      "id": "m-v-k2S8aRFRVTFrAAAF",
      "username": "Jez",
      "trainer": {
          "badges": [ {
              "name": "Stone",
              "value": false
          }, {
              "name": "Knuckle",
              "value": false
          }, {
              "name": "Dynamo",
              "value": false
          }, {
              "name": "Heat",
              "value": false
          }, {
              "name": "Balance",
              "value": false
          }, {
              "name": "Feather",
              "value": false
          }, {
              "name": "Mind",
              "value": false
          }, {
              "name": "Rain",
              "value": false
          } ],
          "game": {
              "id": "POKEMON EMER",
              "friendlyName": "Pokémon Emerald",
              "generation": 3,
              "gen3_game_key": 2,
              "gen3_subgame_key": 0,
              "gen45_game_key": 0,
              "gen45_subgame_key": 0
          },
          "trainerName": null,
          "trainer_id": null,
          "secret_id": null,
          "money": null
      },
      "party": [],
      "boxes": [],
      "pokedex": {
          "stats": {
              "seen": 0,
              "caught": 0,
              "dead": 0
          },
          "seen": [],
          "caught": [],
          "dead": []
      }
  } ]
}, {
  "event": "client:players:list",
  "payload": [ {
      "id": "m-v-k2S8aRFRVTFrAAAF",
      "username": "Jez",
      "trainer": {
          "badges": [ {
              "name": "Stone",
              "value": false
          }, {
              "name": "Knuckle",
              "value": false
          }, {
              "name": "Dynamo",
              "value": false
          }, {
              "name": "Heat",
              "value": false
          }, {
              "name": "Balance",
              "value": false
          }, {
              "name": "Feather",
              "value": false
          }, {
              "name": "Mind",
              "value": false
          }, {
              "name": "Rain",
              "value": false
          } ],
          "game": {
              "id": "POKEMON EMER",
              "friendlyName": "Pokémon Emerald",
              "generation": 3,
              "gen3_game_key": 2,
              "gen3_subgame_key": 0,
              "gen45_game_key": 0,
              "gen45_subgame_key": 0
          },
          "trainerName": null,
          "trainer_id": null,
          "secret_id": null,
          "money": null
      },
      "party": [],
      "boxes": [],
      "pokedex": {
          "stats": {
              "seen": 0,
              "caught": 0,
              "dead": 0
          },
          "seen": [],
          "caught": [],
          "dead": []
      }
  } ]
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 292,
                  "hp": {
                      "max": 24,
                      "current": 0
                  },
                  "nature": "Rash",
                  "move2": {
                      "name": "SmokeScreen",
                      "pp": 20
                  },
                  "isGenderless": true,
                  "speciesName": "Seadra",
                  "species": 117,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Angela",
                  "levelMet": 3,
                  "isShiny": false,
                  "move4": {
                      "name": "Water Gun",
                      "pp": 25,
                      "max_pp": 25,
                      "type": "Water"
                  },
                  "ability": "--",
                  "level": 6,
                  "hiddenpower": "Ice",
                  "move1": {
                      "name": "Bubble",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Water"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 2,
                      "spatk": 2,
                      "spd": 0,
                      "spdef": 2,
                      "hp": 1
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 845143144,
                  "ivs": {
                      "atk": 3,
                      "def": 4,
                      "spatk": 25,
                      "spd": 7,
                      "spdef": 9,
                      "hp": 26
                  },
                  "locationMet": 17,
                  "move3": {
                      "name": "Leer",
                      "pp": 23,
                      "max_pp": 30,
                      "type": "Normal"
                  },
                  "transformed": true,
                  "normalizeName": "seadra",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/seadra.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 0
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 769,
                  "hp": {
                      "max": 29,
                      "current": 29
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 1,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 25,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 0
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 444,
                  "hp": {
                      "max": 30,
                      "current": 30
                  },
                  "nature": "Careful",
                  "move2": {
                      "pp": 0
                  },
                  "isGenderless": true,
                  "speciesName": "Gyarados",
                  "species": 130,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Gary",
                  "levelMet": 3,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 7,
                  "hiddenpower": "Fire",
                  "move1": {
                      "name": "Thrash",
                      "pp": 20,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 3,
                      "def": 1,
                      "spatk": 2,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 2
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 4233361973,
                  "ivs": {
                      "atk": 9,
                      "def": 4,
                      "spatk": 6,
                      "spd": 22,
                      "spdef": 19,
                      "hp": 5
                  },
                  "locationMet": 16,
                  "move3": {
                      "pp": 0
                  },
                  "transformed": true,
                  "normalizeName": "gyarados",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/gyarados.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  }, {
                      "label": "Flying",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/flying.png"
                  } ]
              },
              "slotId": 3,
              "changeId": 0
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 99,
                  "hp": {
                      "max": 17,
                      "current": 17
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 4,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 0,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 4,
              "changeId": 0
          }, {
              "pokemon": null,
              "slotId": 5,
              "changeId": 0
          }, {
              "pokemon": null,
              "slotId": 6,
              "changeId": 0
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 292,
                  "hp": {
                      "max": 24,
                      "current": 0
                  },
                  "nature": "Rash",
                  "move2": {
                      "name": "SmokeScreen",
                      "pp": 20
                  },
                  "isGenderless": true,
                  "speciesName": "Seadra",
                  "species": 117,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Angela",
                  "levelMet": 3,
                  "isShiny": false,
                  "move4": {
                      "name": "Water Gun",
                      "pp": 25,
                      "max_pp": 25,
                      "type": "Water"
                  },
                  "ability": "--",
                  "level": 6,
                  "hiddenpower": "Ice",
                  "move1": {
                      "name": "Bubble",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Water"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 2,
                      "spatk": 2,
                      "spd": 0,
                      "spdef": 2,
                      "hp": 1
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 845143144,
                  "ivs": {
                      "atk": 3,
                      "def": 4,
                      "spatk": 25,
                      "spd": 7,
                      "spdef": 9,
                      "hp": 26
                  },
                  "locationMet": 17,
                  "move3": {
                      "name": "Leer",
                      "pp": 23,
                      "max_pp": 30,
                      "type": "Normal"
                  },
                  "transformed": true,
                  "normalizeName": "seadra",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/seadra.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 0
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 769,
                  "hp": {
                      "max": 29,
                      "current": 29
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 1,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 25,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 0
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 444,
                  "hp": {
                      "max": 30,
                      "current": 30
                  },
                  "nature": "Careful",
                  "move2": {
                      "pp": 0
                  },
                  "isGenderless": true,
                  "speciesName": "Gyarados",
                  "species": 130,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Gary",
                  "levelMet": 3,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 7,
                  "hiddenpower": "Fire",
                  "move1": {
                      "name": "Thrash",
                      "pp": 20,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 3,
                      "def": 1,
                      "spatk": 2,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 2
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 4233361973,
                  "ivs": {
                      "atk": 9,
                      "def": 4,
                      "spatk": 6,
                      "spd": 22,
                      "spdef": 19,
                      "hp": 5
                  },
                  "locationMet": 16,
                  "move3": {
                      "pp": 0
                  },
                  "transformed": true,
                  "normalizeName": "gyarados",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/gyarados.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  }, {
                      "label": "Flying",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/flying.png"
                  } ]
              },
              "slotId": 3,
              "changeId": 0
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 99,
                  "hp": {
                      "max": 17,
                      "current": 17
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 4,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 0,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 4,
              "changeId": 0
          }, {
              "pokemon": null,
              "slotId": 5,
              "changeId": 0
          }, {
              "pokemon": null,
              "slotId": 6,
              "changeId": 0
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 99,
                  "hp": {
                      "max": 17,
                      "current": 17
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 4,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 0,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 1
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 292,
                  "hp": {
                      "max": 24,
                      "current": 0
                  },
                  "nature": "Rash",
                  "move2": {
                      "name": "SmokeScreen",
                      "pp": 20
                  },
                  "isGenderless": true,
                  "speciesName": "Seadra",
                  "species": 117,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Angela",
                  "levelMet": 3,
                  "isShiny": false,
                  "move4": {
                      "name": "Water Gun",
                      "pp": 25,
                      "max_pp": 25,
                      "type": "Water"
                  },
                  "ability": "--",
                  "level": 6,
                  "hiddenpower": "Ice",
                  "move1": {
                      "name": "Bubble",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Water"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 2,
                      "spatk": 2,
                      "spd": 0,
                      "spdef": 2,
                      "hp": 1
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 845143144,
                  "ivs": {
                      "atk": 3,
                      "def": 4,
                      "spatk": 25,
                      "spd": 7,
                      "spdef": 9,
                      "hp": 26
                  },
                  "locationMet": 17,
                  "move3": {
                      "name": "Leer",
                      "pp": 23,
                      "max_pp": 30,
                      "type": "Normal"
                  },
                  "transformed": true,
                  "normalizeName": "seadra",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/seadra.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  } ]
              },
              "slotId": 4,
              "changeId": 1
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 99,
                  "hp": {
                      "max": 17,
                      "current": 17
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 4,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 0,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 1
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 292,
                  "hp": {
                      "max": 24,
                      "current": 0
                  },
                  "nature": "Rash",
                  "move2": {
                      "name": "SmokeScreen",
                      "pp": 20
                  },
                  "isGenderless": true,
                  "speciesName": "Seadra",
                  "species": 117,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Angela",
                  "levelMet": 3,
                  "isShiny": false,
                  "move4": {
                      "name": "Water Gun",
                      "pp": 25,
                      "max_pp": 25,
                      "type": "Water"
                  },
                  "ability": "--",
                  "level": 6,
                  "hiddenpower": "Ice",
                  "move1": {
                      "name": "Bubble",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Water"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 2,
                      "spatk": 2,
                      "spd": 0,
                      "spdef": 2,
                      "hp": 1
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 845143144,
                  "ivs": {
                      "atk": 3,
                      "def": 4,
                      "spatk": 25,
                      "spd": 7,
                      "spdef": 9,
                      "hp": 26
                  },
                  "locationMet": 17,
                  "move3": {
                      "name": "Leer",
                      "pp": 23,
                      "max_pp": 30,
                      "type": "Normal"
                  },
                  "transformed": true,
                  "normalizeName": "seadra",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/seadra.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  } ]
              },
              "slotId": 4,
              "changeId": 1
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 769,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 1,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 24,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 1
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 769,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 1,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 24,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 1
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 135,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 2
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 769,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 1,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 23,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 2
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 135,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 2
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 769,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 1,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 23,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 2
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 3
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 824,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 23,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 3
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 3
          }, {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 824,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 23,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 3
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 824,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 22,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 4
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 824,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 22,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 4
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 824,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 21,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 5
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 824,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 2,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 21,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 5
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 914,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 3,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 21,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 6
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 914,
                  "hp": {
                      "max": 29,
                      "current": 26
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Smog",
                      "pp": 20,
                      "max_pp": 20,
                      "type": "Poison"
                  },
                  "isGenderless": true,
                  "speciesName": "Slugma",
                  "species": 218,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Precious",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 9,
                  "hiddenpower": "Psychic",
                  "move1": {
                      "name": "Yawn",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Normal"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 3,
                      "def": 1,
                      "spatk": 9,
                      "spd": 2,
                      "spdef": 2,
                      "hp": 4
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 801794939,
                  "ivs": {
                      "atk": 6,
                      "def": 29,
                      "spatk": 17,
                      "spd": 24,
                      "spdef": 27,
                      "hp": 31
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Ember",
                      "pp": 21,
                      "max_pp": 25,
                      "type": "Fire"
                  },
                  "transformed": true,
                  "normalizeName": "slugma",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/slugma.gif",
                  "types": [ {
                      "label": "Fire",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/fire.png"
                  } ]
              },
              "slotId": 2,
              "changeId": 6
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 4
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 30,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 4
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 29,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 5
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 29,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 5
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 4
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 6
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 4
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 6
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 2
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 7
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 2
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 7
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 8
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 19
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 8
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 17
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 9
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 17
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 19,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 9
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 9
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 18,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 10
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 9
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 18,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 10
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 7
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 17,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 11
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 7
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 17,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 11
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 0
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 17,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 12
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 154,
                  "hp": {
                      "max": 19,
                      "current": 0
                  },
                  "nature": "Lax",
                  "move2": {
                      "name": "Lick",
                      "pp": 28,
                      "max_pp": 30,
                      "type": "Ghost"
                  },
                  "isGenderless": true,
                  "speciesName": "Haunter",
                  "species": 93,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "Greg",
                  "levelMet": 2,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Steel",
                  "move1": {
                      "name": "Hypnosis",
                      "pp": 17,
                      "max_pp": 20,
                      "type": "Psychic"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 3,
                      "spd": 1,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 3478394284,
                  "ivs": {
                      "atk": 11,
                      "def": 15,
                      "spatk": 13,
                      "spd": 9,
                      "spdef": 22,
                      "hp": 4
                  },
                  "locationMet": 16,
                  "move3": {
                      "name": "Spite",
                      "pp": 10,
                      "max_pp": 10,
                      "type": "Ghost"
                  },
                  "transformed": true,
                  "normalizeName": "haunter",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/haunter.gif",
                  "types": [ {
                      "label": "Ghost",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ghost.png"
                  }, {
                      "label": "Poison",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/poison.png"
                  } ]
              },
              "slotId": 1,
              "changeId": 12
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 125,
                  "hp": {
                      "max": 25,
                      "current": 19
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Tail Whip",
                      "pp": 29,
                      "max_pp": 30,
                      "type": "Normal"
                  },
                  "isGenderless": true,
                  "speciesName": "Quagsire",
                  "species": 195,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "GAZ",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Electric",
                  "move1": {
                      "name": "Water Gun",
                      "pp": 22,
                      "max_pp": 25,
                      "type": "Water"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 0,
                      "spd": 0,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 1085280739,
                  "ivs": {
                      "atk": 31,
                      "def": 29,
                      "spatk": 16,
                      "spd": 3,
                      "spdef": 29,
                      "hp": 17
                  },
                  "locationMet": 19,
                  "move3": {
                      "pp": 0
                  },
                  "transformed": true,
                  "normalizeName": "quagsire",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/quagsire.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  }, {
                      "label": "Ground",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ground.png"
                  } ]
              },
              "slotId": 5,
              "changeId": 1
          } ]
      }
  }
}, {
  "event": "client:party:updated",
  "payload": {
      "username": "Jez",
      "update": {
          "party": [ {
              "pokemon": {
                  "isEgg": 0,
                  "exp": 125,
                  "hp": {
                      "max": 25,
                      "current": 19
                  },
                  "nature": "Naive",
                  "move2": {
                      "name": "Tail Whip",
                      "pp": 29,
                      "max_pp": 30,
                      "type": "Normal"
                  },
                  "isGenderless": true,
                  "speciesName": "Quagsire",
                  "species": 195,
                  "status": {
                      "psn": 0,
                      "slp": 0,
                      "par": 0,
                      "fzn": 0,
                      "brn": 0,
                      "img": "0"
                  },
                  "nickname": "GAZ",
                  "levelMet": 5,
                  "isShiny": false,
                  "move4": {
                      "pp": 0
                  },
                  "ability": "--",
                  "level": 5,
                  "hiddenpower": "Electric",
                  "move1": {
                      "name": "Water Gun",
                      "pp": 22,
                      "max_pp": 25,
                      "type": "Water"
                  },
                  "pokerus": 0,
                  "evs": {
                      "atk": 0,
                      "def": 0,
                      "spatk": 0,
                      "spd": 0,
                      "spdef": 0,
                      "hp": 0
                  },
                  "isFemale": false,
                  "heldItem": {
                      "id": 0,
                      "img": "https://pokelink.cybershade.org/assets/sprites/items/gen3/0.png",
                      "name": "Nothing"
                  },
                  "pid": 1085280739,
                  "ivs": {
                      "atk": 31,
                      "def": 29,
                      "spatk": 16,
                      "spd": 3,
                      "spdef": 29,
                      "hp": 17
                  },
                  "locationMet": 19,
                  "move3": {
                      "pp": 0
                  },
                  "transformed": true,
                  "normalizeName": "quagsire",
                  "img": "https://pokelink.cybershade.org/assets/sprites/pokemon/gen5/animated/quagsire.gif",
                  "types": [ {
                      "label": "Water",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/water.png"
                  }, {
                      "label": "Ground",
                      "img": "https://pokelink.cybershade.org/assets/sprites/types/ground.png"
                  } ]
              },
              "slotId": 5,
              "changeId": 1
          } ]
      }
  }
} ]

var client = {
  connection: null,
  players: [],
  connected: false,
  username: null,
  currentUser: settings.currentUser,
  events: new EventEmitter(),

  setup (serverPort, username, host, cb) {
    host = host || 'http://127.0.0.1';
    this.username = username;
    let address = host + ':' + serverPort;

    this.connection = new EventEmitter()

    this.startEvents()

    this.connection.on('connect', socket => {
      this.log('Client Connected');
      this.connected = true;

      this.connection
        .on('client:party:updated', (data) => {
          let event = {
            event: 'client:party:updated',
            payload: data
          };
          events.push(event)
          console.log(event)
          this.handleRemotePlayerParty(socket, data, cb)
        })
        .on('client:badges:updated', (data) => {
          let event = {
            event: 'client:badges:updated',
            payload: data
          };
          events.push(event)
          console.log(event)
          this.handleRemotePlayerTrainer(socket, data, cb)
        })
        .on('client:players:list', (players) => {
          let event = {
            event: 'client:players:list',
            payload: players
          };
          events.push(event)
          console.log(event)
          this.addPlayersInBulk(socket, players, cb)
        })
        .on('player:trainer:updated', (data) => {
          let event = {
            event: 'player:trainer:updated',
            payload: data
          };
          events.push(event)
          console.log(event)
          this.handleRemotePlayerTrainer(socket, data, cb)
        })
        .on('player:settings:updated', (data) => {
          let event = {
            event: 'player:settings:updated',
            payload: data
          };
          events.push(event)
          console.log(event)
          this.handleRemotePlayerSettings(socket, data, cb)
        })
      ;
    })

    return this;
  },

  on (eventName, callback) {
    this.events.on(eventName, callback);

    return this;
  },

  join () {
  },

  startEvents () {

    setTimeout(() => {
      let event = fakeEvents.shift()
      this.connection.emit(event.name, event.payload)
      this.startEvents()
    }, 2000)
  },

  handleRemotePlayerTrainer (socket, payload, cb) {
    if (window.settings.debug) {
      console.log('Player Trainer Updated');
      console.log(payload);
    }
    this.events.emit('player:trainer:updated', payload);
  },

  handleRemotePlayerParty (socket, payload, cb) {
    if (window.settings.debug) {
      console.log('Party Updated');
    }
    let newPlayerParty = {};

    if (this.players.hasOwnProperty(payload.username) === false) {
      this.players[payload.username] = payload.update.party;
    }

    payload.update.party.forEach(mon => {
      newPlayerParty[mon.slotId - 1] = mon;
    });

    newPlayerParty = {...this.players[payload.username], ...newPlayerParty};
    this.players = {...this.players, [payload.username]: newPlayerParty};

    this.log('Client Rcv: Player %s updated their party', payload.username);
    cb(payload.username, Object.values(this.players[payload.username]));
    this.events.emit('client:party:updated', this.players[payload.username]);
  },

  handleRemotePlayerSettings (socket, settingsPayload, cb) {
    window.settings = deepmerge(
      window.settings,
      settingsPayload
    )
    console.log(window.settings)
    // this.players = {...this.players}
    console.info(`Settings updated`)
    this.events.emit('settings:updated', window.settings)
  },

  addPlayersInBulk (socket, players, cb) {
    if (window.settings.debug || true) {
      console.log('Initial Bulk Load');
      console.log(players);
    }
    players.forEach((player) => {
      let tempPlayer = {
        id: player.id,
        username: player.username,
        update: {
          party: player.party
        }
      }

      if (player.username === settings.currentUser) {
        settings.game = {
          id: player.trainer.game.id,
          name: player.trainer.game.friendlyName,
          generation: player.trainer.game.generation,
        };
        if (window.settings.debug) {
          console.log(['setting game to gen: '+ settings.game.generation +' - '+settings.game.name]);
        }
        this.events.emit('player:trainer:updated', player);
        this.events.emit('client:party:updated', player.party);
      }

      this.handleRemotePlayerParty(socket, tempPlayer, (username, newPlayerList) => {
        cb(username, newPlayerList);
      });
    });
    this.events.emit('client:players:list', players);
  },

  log (title, msg, ...params) {
    params = params || [];
    console.log.apply(this, [title, msg].concat(params));
  }
}
