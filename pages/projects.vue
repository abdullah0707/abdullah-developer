<template>
  <div class="custom-section h-screen overflow-scroll absolute z-10 left-0 right-0">
    <div class="w-full text-center mt-3">
      <input class="checkbox-all" id="all" type="radio" name="checkbox" checked="" />
      <label for="all">
        <span style="mix-blend-mode: difference"> all </span>
      </label>
      <input class="checkbox-html" id="html" type="radio" name="checkbox" />
      <label for="html">
        <span style="mix-blend-mode: difference"> HTML/CSS </span>
      </label>
      <input class="checkbox-js" id="js" type="radio" name="checkbox" />
      <label for="js">
        <span style="mix-blend-mode: difference"> javascript </span>
      </label>
      <input class="checkbox-vue" id="vue" type="radio" name="checkbox" />
      <label for="vue">
        <span style="mix-blend-mode: difference"> vue </span>
      </label>
      <input class="checkbox-fullter" id="fullter" type="radio" name="checkbox" />
      <label for="fullter">
        <span style="mix-blend-mode: difference"> Fullter </span>
      </label>
      <div class="seperator"></div>
      <!-- project  cards-->
      <div
        class="cards grid grid-flow-row-dense grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center mb-8 w-full">

        <div class="project html w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Photographer">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Photographer
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Photographer's portfolio
                  </p>
                  <a href="https://abdullah0707.github.io/Project-photographer/" target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="project html w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Music">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Music
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Music's portfolio
                  </p>
                  <a href="https://abdullah0707.github.io/Project-Music/" target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="project html w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Studio">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Studio
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Studio's portfolio
                  </p>
                  <a href="https://abdullah0707.github.io/Project-Studio/" target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="project html w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Payment">

              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Payment
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Payments management system
                  </p>
                  <a href="#open-modal-payment" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="open-modal-payment" class="modal-window">
          <div class=" rounded-2xl">
            <a href="#" title="Close" class="modal-close p-1 text-white hover:text-yellow-500 ">
              <i class="fa-solid fa-xmark fa-2xl"></i>
            </a>
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="payments" :ui="{ item: 'basis-full' }"
              class="w-full max-h-full mx-auto rounded-lg overflow-hidden" indicators>
              <img :src="item" class="my-3 mx-auto h-full max-h-[95%]" draggable="false">
            </UCarousel>
          </div>
        </div>
        <div class="project js w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Lawer">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>

              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Lawer
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Law management system
                  </p>
                  <a href="#open-modal-lawer" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="open-modal-lawer" class="modal-window">
          <div class="rounded-2xl w-11/12 h-5/6">
            <a href="#" title="Close" class="modal-close p-1 text-white hover:text-yellow-500 ">
              <i class="fa-solid fa-xmark fa-2xl"></i>
            </a>
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="laws" :ui="{ item: 'basis-full' }"
              class="w-full max-h-full mx-auto rounded-lg overflow-hidden" indicators>
              <img :src="item" class="mx-auto h-full max-h-[75%] my-3 " draggable="false">
            </UCarousel>
          </div>
        </div>
        <div class="project js w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Buy_Or_Bye">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex md:justify-center">
                <div class="movie-card__header w-4/6 text-wrap text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Buy Or Bye
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Shopping and competitions site withdraws
                  </p>
                  <a href="https://buyorbye.com/ar" target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="project js w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Belle">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    Belle
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    E-commerce site for perfumes
                  </p>
                  <a href="https://belleksa.com/" target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="project js w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="iipa">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>
              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header w-4/6 text-wrap text-center">
                  <h1 class="movie-card__title text-lg font-medium">
                    جمعية حماية المستثمرين الأفراد
                  </h1>
                  <p class="movie-card__desc text-sm py-8 font-medium">
                    Individual Investor Services Website in Saudi Arabia
                  </p>
                  <a href="https://iipa.org.sa/ar" target="_blank" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="project js w-11/12">
          <div id="movie-card-list">
            <div
              class="movie-card rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none grid content-center h-72"
              data-movie="Meeting">
              <div class="movie-card__overlay rounded-tl-2xl rounded-tr-2xl sm:rounded-bl-2xl sm:rounded-tr-none h-72">
              </div>

              <div class="movie-card__content h-full flex justify-center">
                <div class="movie-card__header text-center">
                  <h1 class="movie-card__title text-2xl font-medium">
                    One Meeting Rooms
                  </h1>
                  <p class="movie-card__desc text-sm py-10 font-medium">
                    Meeting room management system
                  </p>
                  <a href="#open-modal-meeting" class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-sm tracking-wider">
                      Reference
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="open-modal-meeting" class="modal-window">
          <div class="rounded-2xl w-11/12 h-5/6">
            <a href="#" title="Close" class="modal-close p-1 text-white hover:text-yellow-500 ">
              <i class="fa-solid fa-xmark fa-2xl"></i>
            </a>
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="meetings" :ui="{ item: 'basis-full' }"
              class="w-full max-h-full mx-auto rounded-lg overflow-hidden" indicators>
              <img :src="item" class="mx-auto h-full max-h-[75%] my-3 " draggable="false">
            </UCarousel>
          </div>
        </div>
        <div class="project fullter absolute">
          <h1 class='text-white font-bold text-7xl w-full h-full'>
            Soon
          </h1>
        </div>
        <div class="project vue absolute">
          <h1 class='text-white font-bold text-7xl w-full h-full'>
            Soon
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s Projects",
});
definePageMeta({
  layout: "app",
});

const payments = [
  'https://i.ibb.co/RN5KnC9/payment1.png',
  'https://i.ibb.co/RN5KnC9/payment2.png',
  'https://i.ibb.co/RN5KnC9/payment3.png',
  'https://i.ibb.co/RN5KnC9/payment4.png'
]
const laws = [
  'https://i.ibb.co/n0bTg8X/law1.png',
  'https://i.ibb.co/w6qsrqZ/law2.png',
  'https://i.ibb.co/82VmmP2/law4.png',
  'https://i.ibb.co/2nvBtmR/law5.png',
  'https://i.ibb.co/v1C8yBN/law6.png',
  'https://i.ibb.co/drdLHRn/law7.png',
]
const meetings = [
  'https://i.ibb.co/PZf2n5p/meeting1.png',
  'https://i.ibb.co/3pNQGm9/meeting2.png',
  'https://i.ibb.co/NYj69Bc/meeting3.png',
  'https://i.ibb.co/gM8CCbP/meeting4.png',
  'https://i.ibb.co/NT4pp82/meeting5.png',
  'https://i.ibb.co/KbD9VjL/meeting6.png',
  'https://i.ibb.co/1sWMrZ7/meeting7.png',
  'https://i.ibb.co/8Mn3V80/meeting8.png',
  'https://i.ibb.co/85vjtP9/meeting9.png',
  'https://i.ibb.co/CBC81td/meeting10.png',
  'https://i.ibb.co/n6P1Rg9/meeting11.png',
  'https://i.ibb.co/bm3HHk9/meeting12.png',
]
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");


a {
  text-decoration: none;
}

.movie-card {
  min-height: 300px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);
  position: relative;
}

.movie-card[data-movie="Payment"] {
  background-image: url("../assets/image/9.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.movie-card[data-movie="Lawer"] {
  background-image: url("../assets/image/7.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="Music"] {
  background-image: url("../assets/image/4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="Photographer"] {
  background-image: url("../assets/image/3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="Studio"] {
  background-image: url("../assets/image/2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="iipa"] {
  background-image: url("../assets/image/6.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="Belle"] {
  background-image: url("../assets/image/10.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="Meeting"] {
  background-image: url("../assets/image/8.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.movie-card[data-movie="Buy_Or_Bye"] {
  background-image: url("../assets/image/5.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>



<!-- <div class="container-share gap-2 text-sm">
                    <i>
                      <SocialShare network="email" :styled="false" :label="false" />
                    </i>
                    <i>
                      <SocialShare network="whatsapp" :styled="false" :label="false" />
                    </i>
                    <i>
                      <SocialShare network="facebook" :styled="false" :label="false" />
                    </i>
                    <i>
                      <SocialShare network="twitter" :styled="false" :label="false" />
                    </i>
                    <i>
                      <SocialShare network="linkedin" :styled="false" :label="false" />
                    </i>
                  </div> -->