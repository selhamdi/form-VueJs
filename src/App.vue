<template>
  <div id="nav">
    <router-link to="/">Renseignements personnels</router-link> |
    <router-link to="/ProInfo">Renseignements professionnelles</router-link> |
    <router-link to="/Profile">Profil de l'utilisateur</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: blueviolet;
}

#nav a {
  font-size: 17px;
  color: white;
}

#nav a.router-link-exact-active {
  color: grey;
}

</style>
