<template>
  <div id="dash">
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item">
          <!--<img src="img/logo_yaok.png" alt="YAOK" width="25" height="25">-->
          <h1 class="title is-3">YAOK</h1>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Agregar</a>
          <a class="navbar-item">Visualizar</a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" id="logout" @click="logout">
            <b-icon pack="fas" icon="power-off"></b-icon>
          </a>
        </div>
      </div>
    </nav>

    <div class="center">
      <div class="is-main-content">
        <router-view></router-view>
      </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          &copy;2019 —
          <strong>YAMOESTAROK</strong>
        </p>
      </div>
    </footer>

    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,

      preLoading: 0,
      isLoading: false,
      isFullPage: true,

      userData: "",
      userInfoData: ""
    };
  },
  methods: {
    logout() {
      this.go("login");
    },

    go(route) {
      this.$router.push({ name: route });
    },

    //Metodo para abrir el menu en vista movil
    burger() {
      let burger = document.querySelector(".burger");
      let nav = document.querySelector("#" + burger.dataset.target);

      burger.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    },

    isNotLoading() {
      if (this.preLoading == 2) {
        this.isLoading = false;
      }
      //this.go('users')
    }
  },

  created() {},
  watch: {},
  components: {}
};
</script>


<style scoped>
#logout {
  margin-right: 10px;
}

.navbar {
  height: 1em;
  -webkit-box-shadow: 0px 7px 36px -13px rgba(29, 25, 25, 0.75);
  -moz-box-shadow: 0px 7px 36px -13px rgba(29, 25, 25, 0.75);
  box-shadow: 0px 7px 36px -13px rgba(29, 25, 25, 0.75);
  margin-bottom: 10px;

  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 4;
}

.menu-label {
  color: white;
}

.menu-list li a {
  color: white;
}

.menu-list li a:hover {
  color: black;
}

/*.is-sidebar-menu {
  padding: 2.5rem;
  background-color: rgba(79, 147, 237);
  -webkit-box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  -moz-box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  box-shadow: 9px 10px 46px -6px rgba(74, 74, 74, 0.84);
  margin: 80px 20px 20px 20px;
  position: fixed;
  max-height: auto;
  z-index: 2;
}*/

.is-main-content {
  margin: 80px 10px 10px 10px;
  z-index: 1;
}

.container {
  width: 100vw;

  max-width: 100vw;
  padding: 0px 10px 0px 10px;
}

/*@media screen and (min-width: 1280px){
  .container {
      width: 95vw;
      max-width: 100vw;
  }
}

@media screen and (min-width: 1088px){
  .container {
      max-width: 960px;
      width: 960px;
  }
}*/

.footer {
  background-color: white;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 3px;
  z-index: 4;
}

.photo {
  width: 60%;
  border-radius: 50px;
  margin: auto;
  display: block;
}

.container-photo {
  margin: auto;
  display: block;
  margin-bottom: 25px;
  text-align: center;
}

.fullname {
  color: white;
}

hr {
  background-color: black;
  opacity: 0.3;
}

.border {
  border: solid 1px #1d1919;
  border-radius: 50px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.datefilterinput {
  margin-left: 1em;
  width: 1em;
}
</style>

