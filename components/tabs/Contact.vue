<template>
  <div
    class="page contactpage"
  >
    <div class="page-wrapper">
      <PageHeader :title="'get in touch'" :secondaryTitle="'contact'" />
      <div class="row">
        <div class="contact col-12 col-lg-5 addr">
          <h3 style="color: green;">REACH OUT!</h3>
          <address>
            <font-awesome-icon :icon="['fas', 'envelope']" bounce style="color:green;"/>
            <h5>Send a mail</h5>
            <a href="mailto:kavinraj_08@outlook.com" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fas', 'link']" />kavinraj_08@outlook.com</a
            >
          </address>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/kavinraj-vijayalakshmi"
                target="_blank"
                ><img :src="linkedinLogo"
              /></a>
            </li>
            <li>
              <a href="https://twitter.com/kavinraj_08" target="_blank"
                ><img :src="twitterLogo"
              /></a>
            </li>
            <li>
              <a href="https://github.com/KR-08" target="_blank"
                ><img :src="gitHubLogo"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <form class="contactform" @submit.prevent="handleFormSubmit">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="Enter Name"
                    name="name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-12">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="subject"
                    placeholder="Subject"
                    name="subject"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    type=""
                    v-model="message"
                    placeholder="Type a message..."
                    rows="5"
                    name="message"
                    aria-required="true"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <button class="button" :disabled="isLoading">
                  <div v-if="isLoading">
                    <span>Loading...</span>
                    <font-awesome-icon
                      :icon="['fas', 'spinner']"
                      class="btn-icon spin"
                    />
                  </div>
                  <div v-else>
                    <span class="btn-text">Send Message</span>
                    <font-awesome-icon
                      :icon="['fas', 'paper-plane']"
                      class="btn-icon"
                    />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from "../PageHeader.vue";
import Swal from 'sweetalert2'

import twitterLogo from "~/assets/img/svg/twitter.svg"
import linkedinLogo from "~/assets/img/svg/linkedin.svg"
import gitHubLogo from "~/assets/img/svg/github.svg"

const name = ref("")
const email = ref("")
const subject = ref("")
const message = ref("")
const isLoading = ref(false)

const handleFormSubmit = () => {
    isLoading.value = true;
    fetch("https://formsubmit.co/ajax/6c14746b621adff25e6daf259935ee6d ", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    }),
    })
    .then((response) => response.json())
    .then((data) => {
        Swal.fire(
        "Thank You!",
        "Your message has been sent successfully!",
        "success"
        );
        name.value = "";
        subject.value = "";
        message.value = "";
        email.value = "";
        isLoading.value = false;
    })
    .catch((error) => {
        isLoading.value = false;
        Swal.fire("Something went wrong!", "Please try again!", "error");
    });
}
</script>
