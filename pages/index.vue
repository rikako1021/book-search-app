<template>
  <div>
    <CategorySearch></CategorySearch>
    <nuxt-link to="/novel" class="aa">小説</nuxt-link>
    <nuxt-link to="/comic" class="aa">漫画</nuxt-link>
    <nuxt-link to="/education" class="aa">教育本</nuxt-link>
    <nuxt-link to="/magagine" class="aa">雑誌</nuxt-link>
    <nuxt-link to="/essay" class="aa">エッセイ</nuxt-link>
    <nuxt-link to="/photobook" class="aa">写真集</nuxt-link>
    <v-spacer />
    <Storage></Storage>
    <v-row justify="center" align="center">
      <v-col
        v-for="(item, index) in booksArray"
        :key="index"
        cols="8"
        sm="6"
        md="4"
        lg="3"
        xl="1"
      >
        <v-flex>
          <v-card class="mt-2 mx-2" height="300px" width="300px" :elevation="5">
            <v-img
              class="white--text align-end"
              height="100px"
              :src="item.img"
            ></v-img>
            <v-card-title class="font-weight-bold">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle
              >{{ item.person }}<v-spacer />カテゴリー：{{ item.category }}
            </v-card-subtitle>
            <v-card-subtitle>在庫：{{ item.storage }}</v-card-subtitle>
          </v-card>
        </v-flex>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from 'firebase'
import CategorySearch from '../components/CategorySearch.vue'
import Storage from '../components/Storage.vue'
export default {
  components: { CategorySearch, Storage },
  data() {
    return {
      booksArray: [],
    }
  },
  created() {
    const that = this
    const books = firebase.firestore().collection('books')
    books.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const books = doc.data()
        that.booksArray = [
          ...that.booksArray,
          {
            title: books.title,
            storage: books.storage,
            img: books.image,
            person: books.person,
            category: books.category,
          },
        ]
      })
    })
  },
}
</script>

<style>
a.aa {
  display: inline-block;
  padding: 0.1em 0.3em;
  transition: all 0.3s;
}
a.aa:hover {
  color: #fff;
  background-color: #a2f2aa;
}

.v-application a.aa {
  color: #777;
  text-decoration: none;
}
</style>
