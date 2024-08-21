<template>
  <div class="width-full mt-5">
    <h1 class="font-sm-res persian-font">اطلاعات اولیه</h1>
    <div class="bg-white" style="padding: 15px">
      <div
        class="d-grid flex-center"
        style="grid-template-columns: 200px 1fr; grid-template-rows: 1fr"
      >
        <div>
          <img
            src="https://cvbuilder.me/images/male.jpg"
            @click="open = true"
            alt=""
            class="avatar"
          />
        </div>
        <div class="d-grid width-full gap-4 grid-4">
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            نام
            <input
              type="text"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            نام خانوادگی
            <input
              type="text"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            عنوان رزومه
            <input
              type="text"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            جنسیت
            <select
              type="number"
              class="input cv-form-input persian-font width-full"
            >
              <option value=""></option>
              <option value="مرد">مرد</option>
              <option value="زن">زن</option>
            </select>
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            وضعیت تاهل
            <select
              type="number"
              class="input cv-form-input persian-font width-full"
            >
              <option value=""></option>
              <option value="مجرد">مجرد</option>
              <option value="متاهل">متاهل</option>
            </select>
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            خدمت سربازی
            <select
              type="number"
              class="input cv-form-input persian-font width-full"
            >
              <option value=""></option>
              <option value="ارائه نشده است">ارائه نشده است</option>
              <option value="خدمت کردن">خدمت کردن</option>
              <option value="خدمت کرده است">خدمت کرده است</option>
              <option value="معافیت">معافیت</option>
              <option value="معافیت تحصیلی">معافیت تحصیلی</option>
              <option value="معافیت غیر پزشکی">معافیت غیر پزشکی</option>
              <option value="معافیت پزشکی">معافیت پزشکی</option>
            </select>
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            تاریخ تولد
            <input
              type="date"
              class="input cv-form-input persian-font width-full"
            />
          </label>
        </div>
      </div>
    </div>
    <h1 class="font-sm-res persian-font mt-5">راه ارتباطی</h1>
    <div class="bg-white" style="padding: 15px">
      <div
        class="d-grid flex-center"
        style="grid-template-columns: 200px 1fr; grid-template-rows: 1fr"
      >
        <div>
          <img
            src="https://cvbuilder.me/images/male.jpg"
            @click="open = true"
            alt=""
            class="avatar"
          />
        </div>
        <div class="d-grid width-full gap-4 grid-4">
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            ایمیل
            <input
              type="email"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            شماره موبایل
            <input
              type="tel"
              maxlength="11"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            شماره تلفن
            <input
              type="text"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            سایت
            <input
              type="url"
              class="input persian-font cv-form-input width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            کشور
            <input
              type="text"
              class="input cv-form-input persian-font width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            استان
            <input
              type="text"
              class="input cv-form-input persian-font width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            شهر
            <input
              type="text"
              class="input cv-form-input persian-font width-full"
            />
          </label>
          <label
            class="persian-font d-flex flex-center align-start flex-column width-full"
          >
            ادرس
            <input
              type="text"
              class="input cv-form-input persian-font width-full"
            />
          </label>
        </div>
      </div>
    </div>
    <h1 class="font-sm-res persian-font mt-5">خلاصه ایی از خود</h1>
    <div class="bg-white" style="padding: 15px">
      <div class="d-grid grid-1 flex-center">
        <textarea name="" id="" class="width-full cv-form-input" style="min-height: 100px;"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const open = ref();
const File = ref();
</script>

<style lang="scss" scoped>
@import url("../../assets/interfaces/cvForm.scss");
</style>
