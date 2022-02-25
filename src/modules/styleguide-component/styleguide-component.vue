<template>
  <section class="style-guide__section">
    <div class="container">
      <div class="grid grid--2">
        <div class="grid__item">
          <h3 class="style-guide__section-header">Icons</h3>
          <div class="style-guide__section-content style-guide__section-content--responsive">
            Icons
          </div>
        </div>
        <div class="grid__item">
          <h3 class="style-guide__section-header">Components</h3>
          <div class="style-guide__section-content style-guide__section-content--responsive style-guide__section-table">
            <div class="style-guide__group">
              <h4>Image</h4>
              <figure class="sample-image">
              <sel-image
                :sources="[
                  'https://via.placeholder.com/500x500',
                ]"
                :breakpoints="[
                  '(min-width: 320px)'
                ]"
                class="image-custom"
              ></sel-image>
            </figure>
            </div>
            <div class="style-guide__group">
              <h4>Slideout</h4>
              <sel-button class="js-test">Open slideout outside</sel-button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <sel-slideout
                v-model:is-active="isSlideoutActive"
                activator-selector=".js-test"
                class="slide-custom"
              >
                <div class="menu-list">
                  Menu list
                </div>
                <template v-slot:activator="{ open }">
                  <sel-button @click="open">Open slideout in slot</sel-button>
                </template>
              </sel-slideout>
            </div>
            <div class="style-guide__group">
              <h4>Panel</h4>
              <nav
                ref="panelRootElement"
                class="panel-wrapper"
              >
              </nav>
              <sel-panel
                :root-element="panelRootElement"
                :is-always-active="true"
                class="panel-custom"
              >
                <sel-panel
                  :root-element="panelRootElement"
                  v-model:is-active="isPanelActive['menu-1']"
                >
                  <template v-slot:activator="{ open }">
                    <a
                      @click.prevent="open"
                      class="menu-item"
                      href="#"
                    >
                      Menu item 1
                    </a>
                  </template>
                  <sel-panel
                    :root-element="panelRootElement"
                    v-model:is-active="isPanelActive['menu-1-2']"
                  >
                    <template v-slot:activator="{ open }">
                      <a
                        @click.prevent="open"
                        class="menu-item"
                        href="#"
                      >
                        Menu item 1-2
                      </a>
                    </template>
                    <a class="menu-item" href="#">Menu item 2-1</a>
                    <a class="menu-item" href="#">Menu item 2-2</a>
                    <a class="menu-item" href="#">Menu item 2-3</a>
                  </sel-panel>
                  <a class="menu-item" href="#">Menu item 1-3</a>
                  <a class="menu-item" href="#">Menu item 1-4</a>
                </sel-panel>
                <sel-panel
                  :root-element="panelRootElement"
                  v-model:is-active="isPanelActive['menu-2']"
                >
                  <template v-slot:activator="{ open }">
                    <a
                      @click.prevent="open"
                      class="menu-item" href="#"
                    >
                      Menu item 2
                    </a>
                  </template>
                  <a class="menu-item" href="#">Menu item 2-1</a>
                  <a class="menu-item" href="#">Menu item 2-2</a>
                  <a class="menu-item" href="#">Menu item 2-3</a>
                </sel-panel>
                <a class="menu-item" href="#">Menu item 3</a>
              </sel-panel>
            </div>
            <div class="style-guide__group">
              <h4>Expansion</h4>
              <sel-button @click="addExpansionParagraph">Add Paragraph</sel-button>
              <sel-button @click="removeExpansionParagraph">Remove Paragraph</sel-button>

              <sel-expansion class="expansion-custom" modifier="modifier" v-model:is-active="isExpansionActive">
                <template v-slot:activator="{ toggle }">
                  <button class="style-guide__section-title" :aria-expanded="isExpansionActive" @click="toggle">Expansion Heading</button>
                </template>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam felis, cursus vitae enim vitae, sollicitudin
                  molestie augue. Praesent egestas tincidunt est, a imperdiet nibh congue vel. Donec sem mi, volutpat sed nisl a,
                  fringilla commodo lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                  egestas.</p>

                <p>Vivamus et elit in mi varius pulvinar et et enim. Phasellus pulvinar est libero, commodo sodales est auctor
                  eget. Proin eros dolor, pellentesque eget elit vel, fermentum vehicula orci. Nulla vel diam ac mauris
                  consectetur fermentum. In condimentum varius ante, eget semper urna malesuada quis. Suspendisse potenti. Quisque
                  felis lectus, tincidunt in vestibulum vitae, tincidunt in justo. Donec congue, augue et mattis ultricies, dui
                  massa iaculis magna, ac efficitur metus enim id mi. Cras sed dictum metus.</p>

                <p v-for="(paragraph, index) in expansionAdditionalParagraphs" :key="index">{{ paragraph }}</p>
              </sel-expansion>
            </div>
            <div class="style-guide__group">
              <h4>Dialog/Modal</h4>
              <sel-button class="js-modal-trigger">Open modal outside</sel-button>
              <sel-dialog
                v-model:is-active="isModalActive"
                activator-selector=".js-modal-trigger"
                class="dialog-custom"
              >
                <div class="menu-list">
                  Modal content
                </div>
                <template v-slot:activator="{ open }">
                  <sel-button @click="open">Open modal in slot</sel-button>
                </template>
              </sel-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup () {
    const isSlideoutActive = ref(false)
    const isModalActive = ref(false)
    const panelRootElement = ref(null)
    const isPanelActive = reactive({})
    const isExpansionActive = ref(false)
    const expansionAdditionalParagraphs = ref([])

    const addExpansionParagraph = () => {
      expansionAdditionalParagraphs.value.push(`Additional paragraph #${expansionAdditionalParagraphs.value.length + 1}`)
    }

    const removeExpansionParagraph = () => {
      expansionAdditionalParagraphs.value.pop()
    }

    return {
      isSlideoutActive,
      isModalActive,
      panelRootElement,
      isPanelActive,
      isExpansionActive,
      expansionAdditionalParagraphs,
      addExpansionParagraph,
      removeExpansionParagraph
    }
  }
}
</script>
