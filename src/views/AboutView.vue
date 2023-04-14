<template>
  <div class="about">
    <h1>In this application we tried to render images on a map</h1>
    <p>
        The first steps were trying to display personal photos from google photos from google API.
    </p>
    <p>
        But after setting up the google authentications and credentials, we found out that the Google photos does not provide the geo location of the photos
    </p>
    <p>
        Then we decided to use random images from unsplash API with some random geo locations!
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
  }
}
</style>
