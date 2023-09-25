<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="user.UserId"
        label="Your User ID *"
        hint="Login ID"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        outlined
        v-model="user.UserName"
        label="Your User Name *"
        hint="User Name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="user.Job"
        label="Your Job *"
        hint="Job"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <q-btn
          label="Cancel"
          color="primary"
          flat
          class="q-ml-sm"
          :to="{ name: 'users' }"
        />
      </div>
    </q-form>
  </div>
</template>
<script>
import Post from "@/api/http-post";
import Get from "@/api/http-get";
import Update from "@/api/http-update";
import { Notify } from "quasar";

export default {
  data() {
    return {
      user: {
        UserId: "",
        UserName: "",
        Job: "",
      },
    };
  },
  async mounted() {
    // console.log(this.$route.params.id)
    const id = this.$route.params.id;
    if (id) {
      const response = (await Get.userById(id)).data;
      this.user = response;
    }
  },
  methods: {
    onSubmit() {
      let data = {
        UserId: this.user.UserId,
        UserName: this.user.UserName,
        Job: this.user.Job,
      };

      const id = this.$route.params.id;
      // console.log("id", id);

      let status = "";
      let message = "";

      if (id > 0) {
        // console.log('update', id, 'data==>', data)
        Update.users(id, data)
          .then((res) => {
            status = res.data.status;
            message = res.data.message;
            // console.log("after update", status);

            if (status) {
              Notify.create({
                message,
                color: "blue-8",
                textColor: "white",
                icon: "cloud_done",
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        // console.log('post', data)
        Post.users(data)
          .then((res) => {
            status = res.data.status;
            message = res.data.message;
            // console.log("after post", status);
            if (status) {
              Notify.create({
                message,
                color: "blue-8",
                textColor: "white",
                icon: "cloud_done",
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }

      // console.log("status", status);

      this.$router.push({ name: "users" });
    },
    onReset() {
      this.user.UserId = null;
      this.user.UserName = null;
      this.user.Job = null;
    },
  },
};
</script>
<style></style>
