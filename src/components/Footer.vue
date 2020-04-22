<template>
  <v-footer>
    <div class="wrapper">
      <div class="grid">
        <p class="message mb-0">please take care of yourself and others</p>
        <!-- Begin Mailchimp Signup Form -->
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
            <li v-if="$vuetify.breakpoint.smAndDown" class="back-to-top">
              <a href="#app">
                Back to top
              </a>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSepscN5ZHSy7hQ2rxS40Z93ItSWljyvHAsN8gBy6k1HngdV4Q/viewform"
                >Add a resource</a
              >
            </li>
            <li>
              <router-link to="/about">Contact</router-link>
            </li>
          </ul>
        </nav>

        <div class="copyright">
          <p class="mb-5">
            Created and designed by <a href="http://www.byvivian.com/">Vivian Ngai</a> and developed
            by <a href="http://susiekim.co/">Susie Kim</a>, with love ♥
          </p>
          <p>&copy; {{ new Date().getFullYear() }} takecare19.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

#mc_embed_signup_scroll {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

#mc_embed_signup input.email {
  border-radius: 0;
  margin-right: 5px;
}

#mc_embed_signup label {
  font-weight: lighter;
  padding-bottom: 0;
  font-family: 'PT serif', serf;
  margin-right: 20px;
}

#mc_embed_signup .button {
  background: $navy;
  border-radius: 0;
}

.grid {
  display: grid;
  grid-template-rows: 4fr;
  grid-row-gap: 60px;
}

footer.v-footer {
  background-size: cover;
  text-align: center;
  padding: 200px 0 75px;
  display: block;
}

.wrapper {
  width: 90%;
  max-width: 750px;
  margin: 0 auto;
}

.message {
  font-size: 2.4rem;
  font-family: 'PT Serif', serif;
  color: $denim;
}

.copyright p {
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  color: $dark;
  margin: 0 auto;

  a {
    font-weight: bold;
    text-decoration: underline;
  }
}

nav {
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
  footer.v-footer {
    padding-top: 150px;
  }

  footer {
    background: url('../assets/mobile-footer-background.svg');

    nav {
      text-align: left;
      margin: 0 auto;
    }

    nav ul {
      flex-direction: column;

      li + li {
        margin-top: 10px;
      }
    }
  }

  .grid {
    grid-row-gap: 50px;
  }

  #mc_embed_signup_scroll {
    flex-direction: column;
    align-items: flex-start;
  }

  #mc_embed_signup input.email {
    margin: 10px 0;
  }

  #mc_embed_signup {
    grid-row: 1;
  }

  .message {
    grid-row: 3;
    font-size: 1.5rem;
  }
}
</style>