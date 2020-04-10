<template>
  <v-footer>
    <div class="wrapper">
      <div class="flex-column-container">
        <p>please take care of yourself and others</p>
        <nav>
          <ul>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/submit">Add a resource</router-link>
            </li>
            <li>
              <router-link to="/submit">Contact</router-link>
            </li>
            <li>
              <router-link to="/">Share</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <p class="copyright">
        Created and designed by Vivian Ngai, and developed by Susie Kim and Negin Sauermann, with
        love ♥
      </p>
      <p class="copyright">&copy; {{ new Date().getFullYear() }} takecare19.com</p>
    </div>
  </v-footer>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
footer.v-footer {
  background-size: cover;
  text-align: center;
  padding: 200px 0 50px;
  display: block;

  .flex-column-container {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: 85%;
    max-width: 850px;
    margin: 0 auto;
  }

  p {
    margin: 0 auto;
    font-size: 3rem;
    font-family: 'PT Serif', serif;
    color: $denim;
  }

  .copyright {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    color: $dark;
  }

  .copyright + .copyright {
    margin-top: 25px;
  }
}

nav {
  margin: 50px auto 100px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.8rem;
  }
}

.theme--light.v-footer {
  background-color: #fff !important;
}

@media (min-width: 769px) {
  footer {
    background: url('../assets/desktop-footer-background.svg');
  }
}

@media (max-width: 768px) {
  footer.v-footer p {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  footer {
    background: url('../assets/mobile-footer-background.svg');

    nav {
      text-align: left;
      margin: 0 auto 50px;
    }

    nav ul {
      flex-direction: column;
    }

    .flex-column-container {
      flex-direction: column-reverse !important;
    }
  }
}
</style>