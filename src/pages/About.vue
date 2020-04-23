<template>
  <Layout>
    <div class="wrapper">
      <h1 class="mb-8">About</h1>
      <p>
        Since the COVID-19 pandemic hit the world in early 2020, it has been a challenging time for
        everyone in different ways. This website is a compilation of accessible—mostly free or
        low-cost, and inclusive resources to help cope and support mental wellness through COVID-19
        (and beyond).
      </p>
      <p>
        This project started out as a small crowd-sourced Google Doc that has since grown and been
        shared through various networks. It is now in its next evolution as a website to help create
        a better and easier way to search for more relevant resources to you, and to expand to other
        locations.
      </p>

      <h3>
        Why is this project important?
      </h3>
      <ul>
        <li>
          To help mental health resources be accessible, especially inclusive ones
        </li>
        <li>
          To help de-stigmatize mental health
        </li>
      </ul>
      <h3>The objective is to compile resources that are:</h3>
      <ul>
        <li>
          free, low-cost, or at a reduced cost, across a range of platforms, methods, audiences, and
          topics related to COVID-19;
        </li>
        <li>
          and/or offered by/for folks in traditionally marginalized communities as the pandemic
          affects these groups even more (i.e., BIPOCs, LGBTQ2S+, folks with disabilities, seniors,
          etc.)
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
        and growth of the database. It will continue to be updated regularly (every couple of days).
        To get updates on this project, please
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

      <h3>What you can do to help:</h3>
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
        <li>Perhaps you can ask business/service providers to offer a discount if they are able</li>
        <li>
          Help verify resources listed, by letting us know if you come across any that are
          out-of-date/not accurate/problematic
        </li>
        <li>
          If/when you're financially able, support the businesses/providers that have been generous
          during this time
        </li>
      </ul>
    </div>
  </Layout>
</template>


<script>
import Layout from '../components/Layout'
export default {
  name: 'About',
  components: { Layout }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: disc;
  margin-left: 25px;
  margin-bottom: 16px;
}

h3 {
  margin: 25px 0 15px;
  font-size: 1.8rem;
}

a {
  text-decoration: underline;
}

.wrapper {
  margin-top: 200px;
}
</style>
