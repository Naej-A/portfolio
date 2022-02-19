<template>
<!--  animate__fadeInUp-->
  <div class="relative min-h-[40vh] max-h-[50vh]
              flex flex-col justify-around
              overflow-hidden  bg-primary ">
    <div class="
                absolute  z-0 object-contain
                -left-1/2 -bottom-[185vw] object-center
                bg-secondary footer--background--rond">

    </div>

    <a class="text-2xl text-action/80 hover:text-action hover:underline  underline-offset-4 hover:" href="http://antoine.jean.contact@gmail.com">
      antoine.jean.contact@gmail.com (pas encore fonctionnel)
    </a>

<!--    animate__animated animate__fadeInUp-->
    <div class="flex  justify-center self-end
                min-w-full
                mt-8
                animate__animated animate__fadeInUp
                z-10 ">


<!--      github-->
      <a class="mx-2  p-2  rounded-lg transition delay-100 hover:scale-125 hover:bg-primary/90" href="https://github.com/antolefou" >
        <svg class="stroke-black transition delay-50  hover:scale-120   fill-action" width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_34_10)">
            <path d="M16.2456 22.478V18.608C16.2831 18.1311 16.2187 17.6518 16.0566 17.2018C15.8945 16.7517 15.6385 16.3414 15.3056 15.998C18.4456 15.648 21.7456 14.458 21.7456 8.99797C21.7453 7.60179 21.2083 6.25916 20.2456 5.24796C20.7015 4.02647 20.6692 2.67631 20.1556 1.47796C20.1556 1.47796 18.9756 1.12796 16.2456 2.95797C13.9536 2.33679 11.5376 2.33679 9.24561 2.95797C6.51561 1.12796 5.33561 1.47796 5.33561 1.47796C4.82198 2.67631 4.78975 4.02647 5.24561 5.24796C4.27573 6.26666 3.73813 7.62143 3.74561 9.02797C3.74561 14.448 7.0456 15.638 10.1856 16.028C9.8566 16.3679 9.60287 16.7734 9.44091 17.2179C9.27896 17.6624 9.21241 18.136 9.24561 18.608V22.478M9.24561 19.478C4.24561 20.978 4.24561 16.978 2.24561 16.478L9.24561 19.478Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_34_10">
              <rect width="24" height="24" fill="white" transform="translate(0.245605 0.478027)"/>
            </clipPath>
          </defs>
        </svg>
      </a>

<!--      twitter -->
      <a class="mx-2  p-2 rounded-lg transition delay-100 hover:scale-125 hover:bg-primary/90" href="https://twitter.com/AntoineJEAN_Dev">
        <svg class="stroke-black transition delay-50  hover:scale-120   fill-action" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998V2.9998Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

<!--      linkedin -->
      <a class="mx-2  p-2 rounded-lg transition delay-100 hover:scale-125 hover:bg-primary/90" href="https://www.linkedin.com/in/antoine-jean-1217781aa/">
        <svg class="stroke-black transition delay-50  hover:scale-120  fill-action " width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 9H2V21H6V9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

<!--      mail -->

    </div>

  </div>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer--background--rond {
  height: 200vw;
  width: 200vw;
  border-radius: 50%;

}
</style>