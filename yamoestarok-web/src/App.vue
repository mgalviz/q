<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  // Import Bulma's core
  
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #ffce76;
  $primary-invert: findColorInvert($primary);
  $twitter: #1d1919;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert),

      //Colores Estados
      "p": (#0095FF, rgb(0, 0, 0)),
      "ae": (#00FF4D, rgb(0, 0, 0)),
      "e": (#2DAD54, rgb(0, 0, 0)),
      "pr": (#F7FF00, rgb(0, 0, 0)),
      "ar": (#FFCC00, rgb(0, 0, 0)),
      "v": (#FF0000, rgb(255, 255, 255)),
      "ru": (#FF00F7, rgb(255, 255, 255)),
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
