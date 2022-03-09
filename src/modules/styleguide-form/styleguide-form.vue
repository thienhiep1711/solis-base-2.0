<template>
  <section class="style-guide__section">
    <div class="style-guide__section-header">
      <div class="container">
        <h3 class="style-guide__section-header-title">INPUTS AND SELECTORS</h3>
      </div>
    </div>
    <div class="container">
      <div class="grid grid--2">
        <div class="grid__item">
          <div class="grid grid--2 style-guide__section-content">
            <div class="grid__item">
              <sel-text-input
                v-model="textInput"
                class="style-guide__section-input"
              >
                Label
              </sel-text-input>
              <sel-text-input
                v-model="textInput"
                class="style-guide__section-input"
                :required="true"
              >
                Require Field
              </sel-text-input>
              <sel-text-input
                v-model="textInput"
                class="style-guide__section-input"
                :lines="10"
              >
                Textarea Field
              </sel-text-input>
            </div>
            <div class="grid__item">
              <sel-select
                v-model="selectValue"
                :options="selectOptions"
                :required="enableValidateSelect"
                class="style-guide__section-input"
              >
                Select Options
                <template v-if="enableValidateSelect" #empty-option>
                  <option value="">Select Option</option>
                </template>
              </sel-select>
            </div>
          </div>
        </div>
        <div class="grid__item">
          <div class="style-guide__section-content style-guide__section-content--selector">
            <div class="style-guide__section-group">
              <sel-checkbox
                v-model:checked="checkboxValue"
                class="style-guide__section-selector"
              >
                Inactive
              </sel-checkbox>
              <sel-checkbox
                v-model:checked="checkboxValueActive"
                class="style-guide__section-selector"
              >
                Active
              </sel-checkbox>
              <sel-checkbox
                v-model:checked="checkboxValue"
                class="style-guide__section-selector"
                :disabled="true"
              >
                Inactive disabled
              </sel-checkbox>
              <sel-checkbox
                v-model:checked="checkboxValueActive"
                class="style-guide__section-selector"
                :disabled="true"
              >
                Active disabled
              </sel-checkbox>
            </div>
            <div class="style-guide__section-group">
              <sel-radio
                v-model="radioValue"
                class="style-guide__section-selector"
                value="0"
              >
                Inactive
              </sel-radio>
              <sel-radio
                v-model="radioValue"
                class="style-guide__section-selector"
                value="1"
              >
                Active
              </sel-radio>
              <sel-radio
                v-model="radioValue"
                class="style-guide__section-selector"
                value="0"
                :disabled="true"
              >
                Inactive disabled
              </sel-radio>
              <sel-radio
                v-model="radioValue"
                class="style-guide__section-selector"
                value="1"
                :disabled="true"
              >
                Active disabled
              </sel-radio>
            </div>
            <div class="style-guide__section-group">
              <sel-checkbox
                v-model:checked="checkboxValue"
                class="sel-checkbox--switch style-guide__section-selector"
              >
                Inactive
              </sel-checkbox>
              <sel-checkbox
                v-model:checked="checkboxValueActive"
                class="sel-checkbox--switch style-guide__section-selector"
              >
                Active
              </sel-checkbox>
              <sel-checkbox
                v-model:checked="checkboxValue"
                class="sel-checkbox--switch style-guide__section-selector"
                :disabled="true"
              >
                Inactive disabled
              </sel-checkbox>
              <sel-checkbox
                v-model:checked="checkboxValueActive"
                class="sel-checkbox--switch style-guide__section-selector"
                :disabled="true"
              >
                Active disabled
              </sel-checkbox>
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
    const checkboxValueActive = ref(true)
    const radioValue = ref(1)
    const quantity = ref(0)
    const textInput = ref('')
    const selectValue = ref(1)
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
      checkboxValueActive,
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
