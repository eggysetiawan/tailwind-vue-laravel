<template>
  <div class="py-4">
    <div class="container">
      <table class="table-auto border border-black">
        <thead>
          <tr>
            <th class="border border-black">ID</th>
            <th class="border border-black">Title</th>
            <th class="border border-black">Text</th>
            <th class="border border-black">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="post in posts.data">
            <td class="border border-black">{{ post.id }}</td>
            <td class="border border-black">{{ post.title }}</td>
            <td class="border border-black">{{ post.text }}</td>
            <td class="border border-black"></td>
          </tr>
        </tbody>
      </table>
      <pagination
        :data="posts"
        @pagination-change-page="getResults"
      ></pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    };
  },

  mounted() {
    // Fetch initial results
    this.getResults();
  },

  methods: {
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      axios.get("api/posts?page=" + page).then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>
