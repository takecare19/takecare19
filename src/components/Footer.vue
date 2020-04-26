<template>
  <v-footer>
    <div class="wrapper">
      <div class="flex">
        <div id="mc_embed_signup">
          <form
            action="https://takecare19.us19.list-manage.com/subscribe/post?u=9e6c5cab524d54802fecc9d5f&amp;id=ed8948d007"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <label for="mce-EMAIL">
                Join mailing list for updates
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_9e6c5cab524d54802fecc9d5f_ed8948d007"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
        <nav>
          <ul>
            <li class="back-to-top">
              <a href="#app">
                Back to top ↑
              </a>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSepscN5ZHSy7hQ2rxS40Z93ItSWljyvHAsN8gBy6k1HngdV4Q/viewform"
                >Add a resource</a
              >
            </li>
            <li>
              <router-link to="/about">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="copyright">
        <p class="mb-6">
          Created and designed by
          <a target="_blank" href="http://www.byvivian.com/">Vivian Ngai</a> and developed by
          <a target="_blank" href="http://susiekim.co/">Susie Kim</a>, with love ♥
        </p>
        <p>&copy; {{ new Date().getFullYear() }} takecare19.com. All rights reserved.</p>
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

#mc_embed_signup_scroll {
  font-family: 'Poppins', sans-serif;
  text-align: left;
}

form {
  padding: 0 !important;
}

#mc_embed_signup input.email {
  border-radius: 0;
  margin-right: 5px;
}

#mc_embed_signup label {
  font-weight: normal;
  padding-bottom: 0;
  margin-right: 20px;
}

#mc_embed_signup .button {
  background: $navy;
  border-radius: 0;
}

footer.v-footer {
  background-size: cover;
  text-align: center;
  padding: 200px 0 50px;
  display: block;
}

.wrapper {
  max-width: 1000px;
  width: 85%;
  margin: 50px auto;
}

.copyright {
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  color: $dark;
  margin: 0 auto;

  a {
    font-weight: bold;
    text-decoration: underline;
  }
}

.flex {
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;
}

nav {
  width: 100%;
  font-family: Poppins, sans-serif;
  text-align: right;
  ul {
    font-weight: bold;
    font-size: 1.8rem;
  }
  li + li {
    margin-top: 10px;
  }
}

.theme--light.v-footer {
  background-color: #fff !important;
}

#mc_embed_signup input.email {
  margin: 10px 0;
}

@media (min-width: 769px) {
  footer {
    background: url('../assets/desktop-footer-background.svg');
  }

  .back-to-top {
    display: none;
  }
}

@media (max-width: 768px) {
  footer.v-footer {
    padding-top: 125px;
  }

  .back-to-top {
    display: block;
  }

  footer {
    background: url('../assets/mobile-footer-background.svg');

    nav {
      text-align: left;
      margin: 0 auto;
    }

    nav ul {
      li + li {
        margin-top: 20px;
      }
    }
  }

  #mc_embed_signup label {
    font-weight: 500;
  }

  #mc_embed_signup_scroll {
    margin-bottom: 50px;
  }

  .copyright {
    font-size: 1.4rem;
  }

  .flex {
    flex-direction: column;
    margin-bottom: 50px;
  }
}
</style>