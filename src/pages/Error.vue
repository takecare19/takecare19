<template>
  <Layout>
    <div class="wrapper">
      <h1 class="mb-8">Something went wrong</h1>
      <div class="flex">
        <div>
          <p>
            Oops, there's been an error on our end. Please try your request again later or
            <a class="link" href="/about#contact">let us know about the issue</a>.
          </p>
          <v-btn color="primary" to="/">Back home</v-btn>
        </div>
        <img src="../assets/sadface.svg" alt="sad face" />
      </div>
    </div>
  </Layout>
</template>


<script>
import Layout from '../components/Layout'
export default {
  name: 'Submit',
  components: { Layout }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
.wrapper {
  margin: 300px auto 100px;
}

h1 {
  color: $denim;
  text-align: center;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  text-decoration: underline;
}

img {
  width: 50%;
}

p {
  font-size: 2.4rem;
  font-weight: lighter;
}

@media (max-width: 768px) {
  .flex {
    flex-direction: column-reverse;
  }

  img {
    margin: 25px 0;
    display: block;
  }
}
</style>
