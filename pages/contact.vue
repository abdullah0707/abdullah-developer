<template>
  <div class="custom-section h-screen overflow-scroll">
    <h1 class="text-center font-semibold text-white text-6xl py-3">Contact Me</h1>
    <p class="text-center font-semibold text-white text-xl py-3">
      Whether you're interested in working with me or just want to say hello, I'd love to hear from you!
    </p>
    <div class=" flex flex-col h-100 justify-center px-6 lg:px-8 ">
      <div class=" lg:mt-10 mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6 text-sm mx-2" action="#" method="POST" @submit.prevent="SubmitForm(form)">
      <div>
        <label for="name" class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Name
          </span>
          <input type="name" name="name" id="name" v-model="form.name" required
            class="mt-1 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Name" />
        </label>
      </div>
      <div>
        <label for="email" class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Email
          </span>
          <input type="email" name="email" id="email" v-model="form.email" required
            class="peer mt-1 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com" />
        </label>
      </div>
      <div>
        <label for="phone" class="block text-sm font-semibold leading-6 text-white">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Phone number
          </span>
          <div class="relative mt-2.5">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select id="country" name="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:outline-none sm:text-sm"
                v-model="form.country">
                <option>EG</option>
                <option>AS</option>
                <option>US</option>
              </select>
            </div>
            <input type="number" name="phone" id="phone" autocomplete="phone" v-model="form.phone" required
              class="block w-full px-3.5 py-2 pl-20 text-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 rounded-md sm:text-sm focus:ring-1 sm:leading-6"
              placeholder="Your Number">
          </div>
        </label>
      </div>
      <div>
        <label for="subject" class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Subject
          </span>
          <input type="text" name="subject" id="subject" v-model="form.subject" required
            class="mt-1 px-3 py-2   border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-5"
            placeholder="Topic title" />
        </label>
      </div>

      <div>
        <label for="message" class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Message
          </span>
          <textarea id="message" name="message" v-model="form.message" type="textarea" required
            class="mt-1 px-3 py-2   border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full rounded-md sm:text-sm focus:ring-5"
            placeholder="Your letter" />
        </label>
      </div>

      <div>
        <button type="submit"
          class="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-gray-600">
          <template v-if="waiting">
            <i class="fa-solid fa-spinner fa-spin-pulse p-1"></i>
            Loading...
          </template>
          <template v-if="!waiting">
            Sand Your Message
          </template>
        </button>
      </div>
    </form>
  </div>
  <div class="my-4 mx-auto w-full md:w-3/6">
    <UNotification v-if="succsess" icon="i-heroicons-check-circle" color="primary" :id="3"
      title="Your message was sent successfully!"
      description="Thank you for sending. Your message has been received. I will contact you as soon as possible."
      :close-button="null" :callback="onCallback()" :timeout="timer" />
  </div>
  <div class="my-4 mx-auto w-full md:w-3/6">
    <UNotification v-if="errors" label="Show toast" icon="i-heroicons-x-circle" color="red" :id="6"
      title="Your message was not sent!"
      description="I am sorry that your message did not reach me. Please try sending it again." :timeout="timer"
      :callback="onCallback()" :close-button="null" />
  </div>
  </div>
  </div>
</template>

<script setup>

const waiting = ref(false);
const errors = ref(false);
const succsess = ref(false);
const timer = ref(3000);

useHead({
  titleTemplate: "%s Contact us",
})
definePageMeta({
  layout: "app",
});
const form = ref({
  name: '',
  email: '',
  phone: '',
  country: 'EG',
  subject: '',
  message: '',
});
function onCallback() {
  setTimeout(() => {
    succsess.value = false;
    errors.value = false;
  }, timer.value);
}
async function SubmitForm(form) {
  waiting.value = true;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abdullahelgammal25@gmail.com",
    Password: "B029B2FF0363704FC6D2DB25949CE702253F",
    To: 'abdullahelgammal25@gmail.com',
    From: 'abdullahelgammal25@gmail.com',
    Subject: form.subject,
    Body: form
  }).then(
    succsess.value = true,
    waiting.value = false,
    form.name = '',
    form.email = '',
    form.phone = '',
    form.country = 'EG',
    form.subject = '',
    form.message = '',
  ).catch(error => {
    console.log(error),
      errors.value = true;
  })
}
</script>

<style></style>