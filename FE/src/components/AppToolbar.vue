<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary glossy text-white">
      <q-avatar style="margin-left: 3px">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
      </q-avatar>
      <q-toolbar-title style="margin-left: 5px"
        >Application Name</q-toolbar-title
      >
      <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
      <q-btn flat round dense icon="gamepad" />
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: "AppToolbar",
};
</script>
