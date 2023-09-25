<template>
  <div class="q-pa-md">
    <q-table
      title="Agreements"
      :rows="rows"
      :columns="columns"
      row-key="total_amount"
      dense
      class="my-sticky-dynamic"
      style="height: 80vh"     
      :rows-per-page-options="[10,20,50,100,0]"
      :filter="filter"      
      v-model:pagination="pagination"
      :loading="loading"
      @request="onRequest"
    >
      <template #loading>
        <q-inner-loading showing color="secondary" />
      </template>
    </q-table>
  </div>
</template>
<script>
import Get from "@/api/http-get";
import { Notify } from "quasar";
import { ref } from "vue";
import axios from 'axios'

export default {
  data() {
    return {
      columns: [
        {
          name: "ProjId",
          label: "Project",
          field: "PROJ_ID",
          align: "left",
          headerStyle: "font-weight: bold"
        },
        {
          name: "PoNumber",
          label: "PO Number",
          field: "PO_NUMBER",
          align: "left",
        },
        {
          name: "PoSupp",
          label: "PO Supp",
          field: "PO_SUPP",
          align: "left",
        },
        {
          name: "TotalAmount",
          label: "Total Amount",
          field: "TOTAL_AMOUNT",
          align: "right",
        },
        {
          name: "Quantity",
          label: "Quantity",
          field: "QUANTITY",
          align: "left",
        },
        {
          name: "Actions",
          align: "left",
          label: "Action",
        },
      ],
      rows: [],
      selected: [],
      filter: "",
      separator: "horizontal",
      loading: true,
      pagination: {
        page: 1, 
        rowsPerPage: 20, 
        rowsNumber: 0     
      }
    };
  },
  async mounted() {

    this.getRows(this.pagination.page, this.pagination.rowsPerPage)

  },
  methods:{
    // onRowClick(props){
    //   console.log('onClick pencet', props)
    // },

    onScroll(props){
      console.log('onScroll gulung', props)
      // this.getRows(props.pagination.page, props.pagination.rowsPerPage)
    },

    onRequest(props){
      // console.log('onRequest minta', props)
      this.getRows(props.pagination.page, props.pagination.rowsPerPage)
    },

    getRows(page = 0, size = 0){
      // console.log('getPage', page)
      // axios.get(`http://localhost:3001/api/agreements`, {
      //   params: { 
      //     page: page,
      //     size: size
      //   }
      // })
      axios.get(`http://localhost:3001/api/agreementByPaging?page=${page}&size=${size}?`)
      .then(res => {
        // console.log(res)
        // console.log(res.data.data)
        // console.log(res.data.currentPage)
        // console.log(res.data.limit)
        // console.log(res.data.totalItems)

        this.rows = res.data.data

        this.pagination.page = res.data.currentPage
        this.pagination.rowsPerPage = res.data.limit
        this.pagination.rowsNumber = res.data.totalItems
        // this.loading = false
      })
      .finally(() => {
        this.loading = false
      })
    }
  }

  // setup() {
  //   const rows = ref(null);

  //   // rows.value = Get.users()
  //   //   .then((res) => {
  //   //     // console.log(res.data);
  //   //     rows.value = res.data;
  //   //   })
  //   //   .catch((e) => {
  //   //     console.log(e);
  //   //   });
  //   //onMounted(async () => {
  //   // rows.value = axios.get("https://jsonplaceholder.typicode.com/comments")
  //   // .then((res) => (rows.value = res.data));
  //   // // console.log(rows);
  //   // //});

  //   // return {
  //   //   columns,
  //   //   rows,
  //   //   selected: ref([]),
  //   // };
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
  background-color: #a2aa33;
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
