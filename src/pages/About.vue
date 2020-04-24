<template>
  <Layout>
    <div class="wrapper">
      <section>
        <h1 class="mb-8">About</h1>
        <p>
          Since the COVID-19 pandemic hit the world in early 2020, it has been a challenging time
          for everyone in different ways. This website is a compilation of accessible—mostly free or
          low-cost, and inclusive resources to help cope and support mental wellness through
          COVID-19 (and beyond).
        </p>
        <p>
          This project started out as a small crowd-sourced Google Doc that has since grown and been
          shared through various networks. It is now in its next evolution as a website to help
          create a better and easier way to search for more relevant resources to you, and to expand
          to other locations.
        </p>

        <h2>
          Why is this project important?
        </h2>
        <ul>
          <li>
            To help mental health resources be accessible, especially inclusive ones
          </li>
          <li>
            To help de-stigmatize mental health
          </li>
        </ul>
        <h2>The objective is to compile resources that are:</h2>
        <ul>
          <li>
            free, low-cost, or at a reduced cost, across a range of platforms, methods, audiences,
            and topics related to COVID-19;
          </li>
          <li>
            and/or offered by/for folks in traditionally marginalized communities as the pandemic
            affects these groups even more (i.e., BIPOCs, LGBTQ2S+, folks with disabilities,
            seniors, etc.)
          </li>
        </ul>
        <p>
          This project is not an affiliate or sponsored—just a passion project to compile resources
          that may help with everyone's mental and emotional wellness.
        </p>

        <p>
          Listed resources do not constitute or imply endorsement or recommendation. Because it's a
          crowd-sourced compilation, we can't verify every single one, but try our best to.
        </p>

        <p>
          This project continues to be open to resource suggestions as a way to foster collaboration
          and growth of the database. It will continue to be updated regularly (every couple of
          days). To get updates on this project, please
          <a
            target="_blank"
            href="https://takecare19.us19.list-manage.com/subscribe/post?u=9e6c5cab524d54802fecc9d5f&id=ed8948d007"
            >subscribe to our mailing list</a
          >. Unfortunately, not all suggestions will be added to keep the list at a manageable size
          and not overwhelming to use.
        </p>

        <p>
          Thanks so much to those who have supported, shared, and contributed so far!
        </p>

        <h2>What you can do to help:</h2>
        <ul>
          <li>
            Share this website; use it as a way to start a conversation at your workplace, social
            networks, etc.
          </li>
          <li>
            If you come across any great free, discounted, and/or inclusive resources, suggest it
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSepscN5ZHSy7hQ2rxS40Z93ItSWljyvHAsN8gBy6k1HngdV4Q/viewform"
              target="_blank"
              >here</a
            >
          </li>
          <li>
            Perhaps you can ask business/service providers to offer a discount if they are able
          </li>
          <li>
            Help verify resources listed, by letting us know if you come across any that are
            out-of-date/not accurate/problematic
          </li>
          <li>
            If/when you're financially able, support the businesses/providers that have been
            generous during this time
          </li>
        </ul>
      </section>
      <section class="mt-12">
        <h1 class="mb-5">Team</h1>
        <div class="flex">
          <div class="headshot"></div>
          <div class="bio">
            <h3 class="mb-1">Vivian Ngai</h3>
            <p class="pronoun">She/her | Creator & designer</p>
            <p>
              I am motivated to make mental health more accessible, inclusive, and talked about.
              It's something that was/is a challenge in my own life and of loved ones'. With the
              pandemic, our mental well-being will no doubt be affected, and I've been inspired by
              those who have stepped up during this time to help others. So, this is my way to give
              back, especially those in marginalized communities who are hit the hardest and have a
              harder time finding relevant mental health resources. This project organically became
              of collaboration and sharing which is what we need more of to get through this time. A
              few of my favourite self-care practices are: journalling, setting boundaries,
              gratitude lists, and puppy videos.
            </p>
            <p>
              Connect with me on
              <a href="https://twitter.com/byVivianDesign" target="_blank">Twitter</a>,
              <a href="https://www.linkedin.com/in/vivianngai/" target="_blank">LinkedIn</a>,
              <a href="mailto:vivian@byvivian.com" target="_blank">Email</a>, or my
              <a href="http://www.byvivian.com/" target="_blank">Website</a>.
            </p>
          </div>
        </div>
      </section>
      <section class="mt-12">
        <h1 class="mb-5">Contact</h1>
        <v-form
          action="https://formspree.io/xnqbelpg"
          method="POST"
          ref="form"
          v-model="valid"
          :lazy-validation="false"
          @submit="handleSubmit"
        >
          <div class="flex">
            <div class="name">
              <label for="name">Name</label>
              <v-text-field
                id="name"
                solo
                outlined
                name="name"
                v-model="name"
                :rules="[v => !!v || 'Name is required']"
              ></v-text-field>
            </div>
            <div class="email">
              <label for="name">Email</label>
              <v-text-field
                id="email"
                solo
                outlined
                name="email"
                v-model="email"
                :rules="[
                  v => !!v || 'Email is required',
                  v => /.+@.+\..+/.test(v) || 'Email must be valid'
                ]"
              ></v-text-field>
            </div>
          </div>
          <label for="message">Message</label>
          <v-textarea
            id="message"
            class="mb-5"
            solo
            outlined
            name="message"
            v-model="message"
            :rules="[v => !!v || 'Description is required']"
          ></v-textarea>
          <v-btn :disabled="!valid || sending" color="primary" class="mr-4" type="submit">
            {{ sending ? 'Submiting...' : 'Submit' }}
          </v-btn>
          <v-alert type="success" v-if="success" class="mt-8" text outlined>
            Thanks for your message, we'll get back to you as soon as possible.
          </v-alert>
          <v-alert type="error" v-if="error" class="mt-8" text outlined>
            Sorry, something went wrong. Please email us directly at hello@takecare19.com
          </v-alert>
        </v-form>
      </section>
    </div>
  </Layout>
</template>


<script>
import Layout from '../components/Layout'
export default {
  name: 'About',
  components: { Layout },
  data() {
    return {
      sending: false,
      valid: false,
      name: null,
      email: null,
      message: null,
      error: false,
      success: false
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.sending = true
      const form = e.target
      const data = new FormData()
      data.append('name', this.name)
      data.append('email', this.email)
      data.append('message', this.message)
      console.log(data)
      const xhr = new XMLHttpRequest()
      xhr.open(form.method, form.action)
      xhr.setRequestHeader('Accept', 'application/json')
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          form.reset()
          this.success = true
          this.sending = false
        } else {
          this.sending = false
          this.error = xhr.status
        }
      }
      xhr.send(data)
    }
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
ul {
  list-style-type: disc;
  margin-left: 25px;
  margin-bottom: 16px;
  font-family: Poppins, sans-serif;
  li + li {
    margin-top: 5px;
  }
}

h2 {
  margin: 25px 0 15px;
  font-size: 1.8rem;
}

a {
  text-decoration: underline;
  color: black;
}

.wrapper {
  margin-top: 30vh;
}

@media (max-width: 768px) {
  .wrapper {
    margin-top: 150px;
  }
  main {
    background-image: url('../assets/mobile-top-background.svg');
    background-size: 768px;
    background-position: 50% -100px;
  }
}

.headshot {
  width: 300px;
  height: 300px;
  background: #f4f4f4;
}

.flex {
  display: flex;
  height: 100%;
  justify-content: space-between;

  .bio {
    width: calc(100% - 350px);
  }

  .name,
  .email {
    width: calc(50% - 10px);
  }
}

.role,
.pronoun {
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: $denim;
}

label {
  font-weight: bold;
  font-family: Poppins, sans-serif;
}

@media (max-width: 1024px) {
  .flex {
    flex-direction: column;
    align-items: center;

    .bio {
      width: 100%;
    }

    .name,
    .email {
      width: 100%;
    }
  }
}
</style>
