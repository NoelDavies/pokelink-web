Vue.component( 'TrimmedSprite', {
    template: `<div class="pokemon__image" ref="container">
          <img
              v-if="pokemon.isEgg && !fixedSprite"
              @load="trim" class="sprite"
              :src="pokemon.img"
              style="transform: scale(0.8); bottom: 0px; visibility: hidden"
          />
          <img
              v-if="!pokemon.isEgg && !fixedSprite"
              class="sprite"
              @load="trim"
              :src="pokemon.img" style="visibility: hidden"
          />
          <canvas
              ref="canvas"
              width="500"
              height="500"
              :class="{sprite: fixedSprite}"
          ></canvas>
      </div>`,
      props: {
          pokemon: {
              required: true
          },
          maxBoundingBoxHeight: {
              required: false,
              type: Number,
              default () {
                  return 500
              }
          }
      },
      data () {
          return {
              fixedSprite: false
          }
      },
      methods: {
          trim () {
              let vm = this
              var img = new Image();
              img.crossOrigin = "Anonymous";
              img.onload = function() {
                var canvas = vm.$refs.canvas;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                let trimmed = trimCanvas(canvas)
                canvas.width = trimmed.width
                // canvas.height = vm.maxBoundingBoxHeight
                canvas.height = trimmed.height

                var newImage = new Image()
                newImage.onload = function () {
                    ctx.drawImage(newImage, 0, 0);
                    vm.fixedSprite = true
                    vm.$emit('done')
                    // ctx.drawImage(newImage, 0, 0);

                    // let secondaryTrim = trimCanvas(canvas)
                    // canvas.width = secondaryTrim.width
                    // canvas.height = secondaryTrim.height

                    // var secondaryImage = new Image()
                    // secondaryImage.onload = function () {
                    //     ctx.drawImage(secondaryImage, 0, 0);
                    //     vm.fixedSprite = true
                    //     vm.$emit('done')
                    // }
                    // secondaryImage.src = secondaryTrim.toDataURL()
                }
                newImage.src = trimmed.toDataURL()
              }

              img.src = this.pokemon.img
          }
      }
  })