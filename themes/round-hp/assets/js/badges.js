new Vue({
  el: "#badges",
  data: function () {
    return {
      connected: false,
      loaded: false,
      settings: {},
      badges: [],
      gymLimits: [],
    };
  },
  created: function () {
    this.loaded = true;
    this.settings = window.settings;
  },
  mounted: function () {
    var vm = this;
    let badgesClient = client
      .setup(
        settings.port,
        "badges-" + settings.currentUser + "-browser",
        settings.server,
        (data) => {
          vm.connected = true;
        }
      )
      .on("player:trainer:updated", (payload) => {
        this.updateBadges(payload);
      })
      .on("client:players:list", (users) => {
        users.forEach((user) => {
          this.updateBadges(user);
        });
      });
  },
  updated: function () {
    var vm = this;
  },
  methods: {
    updateBadges(payload) {
      if (this.settings.debug) {
        console.log(`Trainer Update recieved for ${payload.username}`);
        console.log(payload, this.settings);
      }
      if (payload.username !== settings.currentUser) return;

      if (this.settings.game.generation === 3) {
        this.gymLimits = [14, 21, 24, 29, 43, 43, 47, 50];
      }

      this.badges = payload.trainer.badges.map(function (badge) {
        var badgeObj = {};
        badgeObj.img =
          this.settings.imgPaths.badges + badge.name.toLowerCase() + ".png";
        badgeObj.label = badge.name + " Badge";
        badgeObj.active = badge.value;
        return badgeObj;
      });
    },
  },
});
