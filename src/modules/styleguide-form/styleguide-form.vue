<template>
  <section class="style-guide__section">
    <div class="container">
      <div class="grid grid--2">
        <div class="grid__item">
          <h3 class="style-guide__section-header">Inputs</h3>
          <div class="style-guide__section-content style-guide__section-content--responsive">
            <sel-text-input
              v-model="textInput"
              placeholder="This is input field"
              class="input-custom"
            >
              Input title 1
            </sel-text-input>
            <sel-text-input
              v-model="textInput"
              placeholder="This is input field"
              :required="true"
            >
              Input title 2
            </sel-text-input>
            <sel-text-input
              v-model="textInput"
              :lines="10"
              placeholder="Form Textarea"
            >
              Textarea title
            </sel-text-input>
          </div>
        </div>
        <div class="grid__item">
          <h3 class="style-guide__section-header">Selector</h3>
          <div class="style-guide__section-content style-guide__section-content--responsive style-guide__section-table">
            <div class="style-guide__group">
              <h4>Checkbox</h4>
              <sel-checkbox class="checkbox-custom" data-x="11" name="test-checkbox" v-model:checked="checkboxValue">
                Checkbox label
              </sel-checkbox>
              <p>parent value: {{ checkboxValue }}</p>
            </div>
            <div class="style-guide__group">
              <h4>Checkbox groups</h4>
              <sel-checkbox v-model:checked="checkboxGroup" value="option-1">Option 1</sel-checkbox>
              <sel-checkbox v-model:checked="checkboxGroup" value="option-2">Option 2</sel-checkbox>
              <sel-checkbox v-model:checked="checkboxGroup" value="option-3">Option 3</sel-checkbox>
              <sel-checkbox v-model:checked="checkboxGroup" value="option-4">Option 4</sel-checkbox>
              <sel-checkbox v-model:checked="checkboxGroup" value="option-5">Option 5</sel-checkbox>
              <p>Selected Values: {{ checkboxGroup }}</p>
            </div>
            <div class="style-guide__group">
              <h4>Radio Button</h4>
              <sel-radio
                name="test-radio"
                v-model="radioValue"
                v-for="n in 3"
                :key="n"
                :value="n"
                class="radio-custom"
                data-x="15"
              >
                Radio label {{ n }}
              </sel-radio>
              <p>parent value: {{ radioValue }}</p>
            </div>
            <div class="style-guide__group">
              <h4>Select</h4>
              <sel-checkbox
                name="test-checkbox"
                v-model:checked="enableValidateSelect"
              >
                Validate Select: {{ enableValidateSelect }}
              </sel-checkbox>
              <sel-select
                :key="enableValidateSelect"
                name="test-select"
                v-model="selectValue"
                :options="selectOptions"
                :required="enableValidateSelect"
                class="select-custom"
              >
                Select Options
                <template v-if="enableValidateSelect" #empty-option>
                  <option value="">Select Option</option>
                </template>
              </sel-select>
              <p>parent value: {{ selectValue }}</p>
            </div>
            <div class="style-guide__group">
              <h4>Number Control</h4>
              <sel-number-control v-model="quantity" :max="5">
                <template v-slot:exceeded="{ max }">
                  <p>Only allow {{max}}</p>
                </template>
              </sel-number-control>
              <p>parent value: {{ quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const checkboxValue = ref(false)
    const checkboxGroup = ref([])
    const radioValue = ref(1)
    const quantity = ref(0)
    const textInput = ref('')
    const selectValue = ref('')
    const enableValidateSelect = ref(false)
    const selectOptions = ref([
      {
        label: 'Option 1',
        value: 1
      },
      {
        label: 'Option 2',
        value: 2
      },
      {
        label: 'Option 3',
        value: 3
      },
      {
        label: 'Option 4',
        value: 4
      },
      {
        label: 'Option 5',
        value: 5
      }
    ])

    return {
      checkboxValue,
      checkboxGroup,
      radioValue,
      quantity,
      textInput,
      selectValue,
      enableValidateSelect,
      selectOptions
    }
  }
}
</script>
