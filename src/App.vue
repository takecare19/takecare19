<template>
  <v-app id="app">
    <div class="coming-soon">
      <h1>takecare19 coming soon</h1>
      <a
        href="https://docs.google.com/document/d/1_uD7IAe8SqTGsbZOeTXW5lCRCnLzv0MZJ8Rx8SFurkc/edit#heading=h.vcwavvxpz2mh"
        target="_blank"
        >Accessible Mental health Resources for Coping with COVID-19 List</a
      >
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
            <label for="mce-EMAIL"
              >Subscribe to the mailing list to know when the website is launched!</label
            >
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
    </div>
    <!--End mc_embed_signup-->
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* .v-btn {
  text-transform: none !important;
}

a {
  text-decoration: none !important;
  color: inherit !important;
} */

#mc_embed_signup {
  font-family: 'Poppins', sans-serif;
}

#mc_embed_signup label {
  font-weight: normal;
}

#mc_embed_signup .button {
  background: #6f8f9a;
}

h1 {
  font-size: 3rem;
}

h1,
h2 {
  font-family: 'PT Serif', serif;
}

.v-application--wrap {
  background-image: url('./assets/desktop-footer-background.svg');
  background-size: cover;
  background-position: center bottom;
}

.coming-soon {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
}
</style>
