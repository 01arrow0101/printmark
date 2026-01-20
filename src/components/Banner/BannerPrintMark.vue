<template>
  <section class="pm-banner">
    <div class="pm-banner__border">
      <div class="pm-banner__content">
        <div class="pm-banner__visual">
          <img src="@/assets/img/logo-ribbons.png" alt="PrintMark Ribbons" />
        </div>

        <div class="pm-banner__info">
          <h2 class="pm-banner__title">PrintMark</h2>
          <div class="pm-banner__divider"></div>
          <div class="pm-banner__text">
            <span class="pm-banner__specialists"
              >THERMAL TRANSFER TECHNOLOGY</span
            >
            <span class="pm-banner__types"
              >Wax | Wax-Resin | Resin | HotStamp | Textile | In-Line | Label</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$gold-gradient: linear-gradient(135deg, #d4af37 0%, #fcf6ba 50%, #aa771c 100%);
$dark-inner: #121212;

.pm-banner {
  width: 100%;
  padding: 40px 20px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;

  &__border {
    padding: 2px;
    background: $gold-gradient;
    width: 100%;
    max-width: 1200px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  &__content {
    background: $dark-inner url("~@/assets/img/texture.png") center/cover;
    display: flex;
    align-items: center;
    padding: 60px 40px;
    gap: 50px;

    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
      padding: 40px 20px;
      gap: 30px;
    }
  }

  &__visual {
    flex: 0 0 300px;
    img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.8));
    }
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: "Times New Roman", serif;
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -1px;
    margin: 0;

    // Металлический золотой градиент
    background: linear-gradient(
      to bottom,
      #c5a059 0%,
      #fcf6ba 45%,
      #d4af37 50%,
      #8a6e2f 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));

    @media (max-width: 600px) {
      font-size: 42px;
    }
  }

  &__divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 20px 0;
  }

  &__text {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__specialists {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  &__types {
    font-size: 14px;
    color: #a0a0a0;
    letter-spacing: 1px;
  }
}
</style>
