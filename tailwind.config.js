module.exports = {
  content: ["./**.{html,js}", "./node_modules/flowbite/**/*.js"],
  //content section is where you configure the paths to all your HTML templates, javascript components,
  //and other files that contain Tailwind class names.
  //flowbite is library of components  on top of utility classes from tailwind css and includes javascript file
 //If you’d like to preserve the default values for a theme option but also add new values, add 
 //your extensions under the extend key in the theme section of your configuration file.
  theme: {
    extend: {
      fontFamily: {
        carter: ["Carter One", "cursive"],
      },
      //adding a font family to the default font stack of Tailwind
      spacing: {
        "128": "32rem",
        //allows me to customize global spacing and sixing scale for my project
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};

// Installled tailwind css via npm and created tailwind.config.js file 
// https://tailwindcss.com/docs/installation
//configured template path https://tailwindcss.com/docs/content-configuration
//In order for Tailwind to generate all of the CSS you need, it needs to know 
//about every single file in your project that contains any Tailwind class names.
//The theme section of your tailwind.config.js file is where you define your project’s color 
//palette, type scale, fonts, breakpoints, border radius values, and more.
