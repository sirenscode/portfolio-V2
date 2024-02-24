import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(200px)',opacity:"0" },
          '100%': { transform: 'translateY(0)' , opacity:"1"},
        },
        split: {
          '0%': { width:'0px',height:'0px' },
          '100%': { width: '100px',height:'1px'},
        },
        navDisplay: {
          '0%': { transform: 'translateX(100%)',opacity:"0" },
          '100%': { transform: 'translateX(0)' , opacity:"1"},
        },
        floatRight: {
          '0%': { transform: 'translateX(-100px)',opacity:"0" },
          '100%': { transform: 'translateX(0px)' , opacity:"1"},
        },
        floatDown: {
          '0%': { transform: 'translateY(-50px)',opacity:"0" },
          '100%': { transform: 'translateY(0)' , opacity:"1"},
        },

        fadeOut: {
          '0%': { transform: 'translateY(0)',opacity:"1" },
          '100%': { transform: 'translateY(200px)' , opacity:"0"},
        },
        
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        split: 'split 1s ease-in',
        navDisplay: 'navDisplay 1s ease-in',
        floatRight: 'floatRight 1s ease-in',
        floatDown: 'floatDown 1s ease-in',

        fadeOut: 'fadeOut 1s ease-in-out',
      }
      

    },
    


  },
  
  plugins: [],
};
export default config;
