// tailwind.config.cjs
module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
    ],
    theme: {
      extend: {
        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
        safelist: ['max-h-0', 'max-h-40', 'overflow-hidden', 'mt-2'],
        animation: {
          typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        },
      },

    plugins: [],
      },
    }