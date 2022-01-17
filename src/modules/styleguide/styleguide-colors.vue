<template>
  <section class="style-guide__section">
    <div class="container">
      <div class="style-guide__colours">
        <h3 class="style-guide__section-header">Colours</h3>
        <div class="grid grid--4 style-guide__colours-data">
          <div class="grid__item style-guide__colours-item">
            <h5 class="style-guide__colours-headline">BRAND COLOURS</h5>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--primary"></div>
                <label class="style-guide__colours-label">Primary</label>
              </div>
              <p class="style-guide__colours-content">Used for buttons, top bar, some icons and text.</p>
            </div>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--secondary"></div>
                <label class="style-guide__colours-label">Secondary</label>
              </div>
              <p class="style-guide__colours-content"></p>
            </div>
          </div>
          <div class="grid__item style-guide__colours-item">
            <h5 class="style-guide__colours-headline">TYPOGRAPHY COLOURS</h5>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--heading"></div>
                <label class="style-guide__colours-label">Headings</label>
              </div>
              <p class="style-guide__colours-content">Used for H1, H2, H3, H4 and H5 text.</p>
            </div>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--body"></div>
                <label class="style-guide__colours-label">Body</label>
              </div>
              <p class="style-guide__colours-content">Used for paragraph text.</p>
            </div>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--link"></div>
                <label class="style-guide__colours-label">Link Text</label>
              </div>
              <p class="style-guide__colours-content">Used for paragraph text that needs to be lighter.</p>
            </div>
          </div>
          <div class="grid__item style-guide__colours-item">
            <h5 class="style-guide__colours-headline">BACKGROUND COLOURS</h5>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background"></div>
                <label class="style-guide__colours-label">Background 1</label>
              </div>
              <p class="style-guide__colours-content">Used for the background colour on some content blocks.</p>
            </div>
          </div>
          <div class="grid__item style-guide__colours-item">
            <h5 class="style-guide__colours-headline">ADDITIONAL COLOURS</h5>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--border"></div>
                <label class="style-guide__colours-label">Line Fill</label>
              </div>
              <p class="style-guide__colours-content">Used for dividing lines and field outlines/borders.</p>
            </div>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--error"></div>
                <label class="style-guide__colours-label">Error/Sale</label>
              </div>
              <p class="style-guide__colours-content">Used for error messages and sale badge/price.</p>
            </div>
            <div class="style-guide__colours-wrapper">
              <div class="style-guide__colours-box">
                <div class="style-guide__colours-background style-guide__colours-background--white"></div>
                <label class="style-guide__colours-label">White</label>
              </div>
              <p class="style-guide__colours-content">Used for page background colour.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StyleguideColors"
}
</script>
