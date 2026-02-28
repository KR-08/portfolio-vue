<template>
  <div class="modal portfolio-details"  @click="$emit('close-modal')">
    <div
      class="modal-dialog modal-dialog-centered portfolio-modal modal-dialog-scrollable"
    >
      <div class="modal-content portfolio-modal">
        <span class="close" aria-label="close">&times;</span>
        <!-- details -->
        <div class="modal-body" @click.stop>
          <div>
            <div>
              <figure>
                <figcaption>
                  <h3>{{ details.name }}</h3>

                  <span class="project-label">Description : </span>
                  <h4>{{ details.description }}</h4>
                  <ul class="column">
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Tools Used:</span>
                      <span class="project-label-value">
                        <ul class="topics">
                          <li
                            v-for="(tool, index) in details.tools"
                            :key="index"
                          >
                            <span class="badge"><font-awesome-icon :icon="['fas','star']" style="color: rgb(255, 212, 59);" />{{ tool }}</span>
                          </li>
                        </ul>
                      </span>
                    </li>
                    <li>
                      <span class="project-label">Features:</span>
                      <span class="project-label-value">
                        <ul class="topics">
                          <li
                            v-for="(feature, index1) in details.features"
                            :key="index1"
                          >
                            <span class="badge"><font-awesome-icon :icon="['fas','star']" style="color: rgb(255, 212, 59);" />{{ feature }}</span>
                          </li>
                        </ul>
                      </span>
                    </li>
                    <li class="col-12 col-sm-6">
                      <span class="project-label">Date Completed : </span>
                      <span style="font-size: 20px; font-style: italic;"> {{ details.dateCompleted }} </span>
                    </li>

                    <li>
                      <span class="project-label">Github Link : </span>

                      <span class="project-label-value">
                        <a :href=details.githubLink target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fas', 'link']" />{{ details.name }}</a>
                      </span>
                    </li>
                  </ul>
                </figcaption>
                <div class="img-wrapper">
                  <!-- Display video if it's a video file -->
                  <video 
                    v-if="details.video && isVideo(details.video)" 
                    :src="details.video" 
                    controls
                    autoplay
                    muted
                    loop
                  ></video>
                  <!-- Display image if it's an image file
                  <img 
                    v-else-if="details.image" 
                    :src="details.image" 
                  /> -->
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


defineProps(['details'])

const isVideo = (url) => {
  if (!url) return false
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov']
  return videoExtensions.some(ext => url.toLowerCase().includes(ext))
}
</script>
