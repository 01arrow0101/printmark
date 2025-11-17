<template>
  <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3 class="modal-title">{{ title }}</h3>
        <button class="close-btn" @click="closeModal" aria-label="Close modal">
          &times;
        </button>
      </div>
      <div class="modal-content">
        <slot>
          <!-- Default content example -->
          <div class="modal-hero">
            <img
              src="/src/assets/img/Gemini_Generated_Image_5saua15saua15sau.png"
              alt="Modal Hero"
              class="hero-image"
            />
          </div>
          <h4 class="section-subtitle">Заповніть форму</h4>
          <form class="modal-form">
            <div class="form-group">
              <label for="name">Ім'я</label>
              <input type="text" id="name" placeholder="Ваше ім'я" />
            </div>
            <div class="form-group">
              <label for="email">Електронна пошта</label>
              <input
                type="email"
                id="email"
                placeholder="example@example.com"
              />
            </div>
            <div class="form-group">
              <label for="message">Повідомлення</label>
              <textarea
                id="message"
                placeholder="Ваше повідомлення..."
              ></textarea>
            </div>
          </form>
        </slot>
      </div>
      <div class="modal-footer">
        <appButton @click="closeModal" class="secondary-btn">
          Відмінити
        </appButton>
        <appButton class="primary-btn"> Відправити </appButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  showModal: Boolean,
  title: String,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-container {
  background-color: #fff;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  transform: scale(1);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #eee;
  background: linear-gradient(135deg, $primary-color, $accent-color);
  color: white;
}

.modal-title {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }
}

.modal-content {
  padding: 32px;
  color: $secondary-color;
  font-size: 16px;
  line-height: 1.7;
}

.modal-hero {
  width: 100%;
  height: 200px;
  text-align: center;
  margin-bottom: 24px;
  overflow: hidden;
}

.hero-image {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 6px;
  color: $primary-color;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  &:focus {
    border-color: $accent-color;
    outline: none;
    box-shadow: 0 0 0 3px rgba($accent-color, 0.2);
  }
}

.modal-footer {
  padding: 24px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}

.secondary-btn {
  background-color: $bg-color;
  color: $accent-color;
  border: 2px solid $accent-color;
  padding: 10px 24px;
  transition: all 0.3s ease;
  &:hover {
    background-color: $accent-color;
    color: #fff;
  }
}

.primary-btn {
  background-color: $accent-color;
  color: white;
  border: 2px solid $accent-color;
  padding: 10px 24px;
  transition: all 0.3s ease;
  &:hover {
    background-color: darken($accent-color, 10%);
  }
}
</style>
