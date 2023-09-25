<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      dense
      flat
      bordered
      class="my-sticky-dynamic"
      style="height: 80vh"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      selection="single"
      v-model:selected="selected"
    />
    <template v-slot:top>
      <q-btn
        color="primary"
        :disable="loading"
        label="Add row"
        @click="addRow"
      />
      <q-btn
        v-if="rows.length !== 0"
        class="q-ml-sm"
        color="primary"
        :disable="loading"
        label="Remove row"
        @click="removeRow"
      />
      <q-space />
      <q-input borderless dense debounce="300" color="primary" v-model="filter">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </div>
</template>
<script>
import Get from "@/api/http-get";

export default {
  data() {
    return {
      selected: [],
      columns: [
        // {
        //   name: "index",
        //   label: "#",
        //   field: "index",
        // },
        {
          name: "postId",
          align: "center",
          label: "PostID",
          field: "postId",
          sortable: true,
        },
        {
          name: "id",
          align: "center",
          label: "ID",
          field: "id",
          sortable: true,
        },
        {
          name: "name",
          align: "left",
          label: "Name",
          field: "name",
          sortable: true,
        },
        {
          name: "email",
          align: "left",
          label: "Email",
          field: "email",
          sortable: true,
        },
        {
          name: "body",
          align: "left",
          label: "Body",
          field: "body",
          sortable: true,
        },
      ],
      rows: [],
    };
  },
  async mounted() {
    Get.comments()
      .then((res) => {
        // console.log(res.data);
        this.rows = res.data;
      })
      .catch((e) => {
        console.log(e);
      });
    // Get.comments()
    //   .then((res) => {
    //     // console.log(res.data);
    //     this.rows = res.data;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // this.rows = (await Get.comments()).data;
    //console.log(this.rows)
    // services.comments()
    //   .then((res) => {
    //     console.log(res.data)
    //     this.rows = res.data
    //   })
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((res) => {
    //     console.log(res.data)
    //     this.rows = res.data
    //   });
  },
  // setup() {
  //   const rows = ref(null);

  //   onMounted(async () => {
  //     rows.value = await axios.get(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     // .get("https://jsonplaceholder.typicode.com/comments")
  //     // .then((res) => (rows.value = res.data));
  //     console.log(rows)
  //   });

  //   return {
  //     columns,
  //     rows,
  //   };
  // },
};
</script>
<style>
.my-sticky-dynamic {
  /* height or max-height is important */
  height: 410px;
  /* this will be the loading indicator */
  /* prevent scrolling behind sticky top row on focus */
}
.my-sticky-dynamic .q-table__top,
.my-sticky-dynamic .q-table__bottom,
.my-sticky-dynamic thead tr:first-child th {
  background-color: #00b4ff;
}
.my-sticky-dynamic thead tr th {
  position: sticky;
  z-index: 1;
}
.my-sticky-dynamic thead tr:last-child th {
  /* height of all previous header rows */
  top: 48px;
}
.my-sticky-dynamic thead tr:first-child th {
  top: 0;
}
.my-sticky-dynamic tbody {
  /* height of all previous header rows */
  scroll-margin-top: 48px;
}
</style>
