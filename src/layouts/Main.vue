<script>
import { defineComponent, ref } from 'vue'

const tabsDefinition = [
  { name: 'services', label: 'SERVICES', to: '/services' },
  { name: 'products', label: 'PRODUCTS', to: '/products' },
  { name: 'partners', label: 'PARTNERS', to: '/partners' },
  { name: 'resources', label: 'RESOURCE', to: '/resources' },
  { name: 'shop', label: 'SHOP', to: '/shop' },
  { name: 'about', label: 'ABOUT', to: '/about' },
  { name: 'contact', label: 'CONTACT', to: '/contact' },
]

export default defineComponent({
  setup() {
    return {
      text_search: ref(''),
      tab_name: ref(tabsDefinition[0].name),
      tab_label: ref(tabsDefinition[0].label),
      tabs: tabsDefinition,
    }
  }
})
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-white q-px-md q-pt-md q-gutter-sm" elevated>
      <q-toolbar>
        <q-img src="@/assets/logo.png" width="50px" />

        <q-toolbar-title class="text-h4 text-secondary">cquickcoding</q-toolbar-title>

        <q-input dense outlined v-model="text_search">
          <template v-slot:append>
            <q-icon v-if="text_search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text_search = ''" />
          </template>
        </q-input>
      </q-toolbar>

      <q-tabs v-model="tab_name" class="text-primary" :align="'left'">
        <q-route-tab v-for="tab in tabs" :key="tab.name" v-bind="tab" @click="tab_label = tab.label" />
      </q-tabs>
    </q-header>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>My Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <div class="full-width bg-primary q-px-md q-py-lg">
        <div class="text-h3 text-white">{{ tab_label }}</div>
      </div>
      <router-view />
      <div class="q-pa-md">
        <p class="q-mb-sm" v-for="n in 15" :key="n">
          <template v-if="n % 2 === 0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vero dignissimos architecto itaque? Sed
            nam
            voluptas deserunt amet quia commodi odit quam qui numquam officia esse laborum dignissimos, dolores est!
          </template>
          <template v-else>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, velit totam. Voluptas atque dolore hic
            magni minima porro odit totam, quaerat sint sequi quo facere voluptatem, tempora asperiores nobis magnam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore
            vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi
            perferendis voluptate?
          </template>
        </p>

      </div>
    </q-page-container>
  </q-layout>
</template>
