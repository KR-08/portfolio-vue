<template>
  <div
    class="page aboutpage"
  >
    <div class="page-wrapper">
      <PageHeader :title="'About me'" :secondaryTitle="'resume'" />
      <section>
        <!-- personal info -->
        <div class="row">
          <div class="col-12 col-lg-12 pers-info">
            <div style="color:green; display: inline-block;" class="section-title">

              <h3>Personal Info</h3>
              
            </div>

            <!--Resume Button-->
            <div class="resume-btn">
                <a :href="resumePdf" target="_blank" rel="noopener noreferrer">
                  <span class="btn-text">Download Resume</span>
                  <font-awesome-icon
                    :icon="['fas', 'download']"
                    class="btn-icon"
                    bounce
                  />
                </a>
            </div>

            
            <div class="personal-info">
              <ul>
                <li>
                  <a> <font-awesome-icon :icon="['fas','address-card']" style="color: rgb(255, 212, 59);" bounce/> </a>
                  <span class="label-value"> Kavinraj Vijayalakshmi</span>
                </li>

                <li>
                   <a> <font-awesome-icon :icon="['fas','envelope']" style="color: rgb(255, 212, 59);" bounce/> </a>

                  <span class="label-value">
                    <a href="mailto:kavinraj_08@outlook.com" target="_blank" rel="noopener noreferrer">
                      <font-awesome-icon :icon="['fas', 'link']" />kavinraj_08@outlook.com</a
                    >
                  </span>
                </li>

                <li>
                  
                  <a> <font-awesome-icon :icon="['fab','square-github']" style="color: rgb(255, 212, 59);" bounce/> </a>

                  <span class="label-value">
                    <a href="https://github.com/KR-08" target="_blank" rel="noopener noreferrer">
                      <font-awesome-icon :icon="['fas', 'link']" />KR-08</a
                    >
                  </span>
                </li>
              </ul>
            </div>

            <!-- Experience -->
            <div class="section-title">
              <h3 style="color:green;">Experience</h3>
            </div>

            <div style="margin-left:1rem" class="personal-info">
              <h5>Web Developer Intern - Swas Info Technology</h5>
              <p>Gained basic knowledge of front-end development experience by building responsive web pages with HTML,CSS, and JavaScript.</p>

              <div class="certificate-btn">
                <a href="https://drive.google.com/file/d/1RpAGqPtJ-0VShHvhKgrWEqyKuwiLr5FX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span class="btn-text">Download Certificate</span>
                  <font-awesome-icon
                    :icon="['fas', 'download']"
                    class="btn-icon"
                  />
                </a>
              </div>
              
            </div>  

            <!--Projects-->
            <div style="padding-top:1rem;" class="section-title">
              <h3 style="color:green;">Projects</h3>
            </div>

            <div style="margin-left:1rem" class="personal-info">
              <div v-for="(repo, index) in store.repos" :key="index">  
                <a href="#" @click.prevent="redirect">
                  <h5><font-awesome-icon :icon="['fas','star']" style="color: rgb(255, 212, 59);" bounce/> {{ repo.name }}</h5>
                </a>
              </div>
            </div>

            <!--Certificates-->
            <div style="padding-top:1rem;" class="section-title">
              <h3 style="color:green;">Certificates</h3>
            </div>

            <div class="certificate-details">

              <!-- 1 -->
              <div class="certificate">
                <a>
                  <h5><font-awesome-icon :icon="['fas','star']" style="color: rgb(255, 212, 59);" bounce/> Problem Solving Through Programming in C - NPTEL</h5>
                </a>
                <div class="certificate-btn">
                  <a href="https://drive.google.com/file/d/1mMqtCvAvd_VPZrDGhJez6jxYb-hJyba7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span class="btn-text">Download Certificate</span>
                    <font-awesome-icon
                      :icon="['fas', 'download']"
                      class="btn-icon"
                    />
                  </a>
                </div>
              </div>

              <!-- 2 -->
              <div class="certificate">
                <a>
                  <h5><font-awesome-icon :icon="['fas','star']" style="color: rgb(255, 212, 59);" bounce/> Responsible & Safe AI Systems - NPTEL</h5>
                </a>
                <div class="certificate-btn">
                  <a href="https://drive.google.com/file/d/1iMBgn2D_dYW2IBH8b0AOL6r6DBOkGN_A/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span class="btn-text">Download Certificate</span>
                    <font-awesome-icon
                      :icon="['fas', 'download']"
                      class="btn-icon"
                    />
                  </a>
                </div>
              </div>

              <!-- 3 -->
              <div class="certificate">
                <a>
                  <h5><font-awesome-icon :icon="['fas','star']" style="color: rgb(255, 212, 59);" bounce/> Java Basic Certification - HackerRank</h5>
                </a>
                <div class="certificate-btn">
                  <a href="https://drive.google.com/file/d/1TOj2zVBoH0Rq_F1Svp6wDj_LI9PENeHv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span class="btn-text">Download Certificate</span>
                    <font-awesome-icon
                      :icon="['fas', 'download']"
                      class="btn-icon"
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>


        <!-- Skills -->

        <div class="skills-section">
          <div class="flex">
            <div class="section-title">
              <h3 class="text-center">Skills</h3>
              <div class="skills-wrapper">
                <ul class="skills-list">
                  <li v-for="el in skills" :key="el.name">
                    <SkillCard
                      :text="el.name"
                      :logo="el.logo"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script setup>
import SkillCard from "../cards/Skill.vue";
import PageHeader from "../PageHeader.vue";

import myPortrait from "~/assets/my-image.jpeg"
import resumePdf from "~/assets/Kavinraj_T - Resume.pdf"

import cssLogo from "~/assets/img/svg/css.svg";
import htmlLogo from "~/assets/img/svg/html.svg";
import cLogo from "~/assets/img/svg/c.svg";
import javaLogo from "~/assets/img/svg/java.svg";
import cPlusPlusLogo from "~/assets/img/svg/c++.svg";
import pythonLogo from "~/assets/img/svg/python.svg";
import vueLogo from "~/assets/img/svg/vue.svg";
import jsLogo from "~/assets/img/svg/js.svg";

import { useMainStore } from "~/stores/store";

const store = useMainStore();


const skills = [
        {
          name: "c",
          logo: cLogo,
        },
        {
          name: "c++",
          logo: cPlusPlusLogo,
        },
        {
          name: "java",
          logo: javaLogo,
        },
        {
          name: "python",
          logo: pythonLogo,
        },
        {
          name: "html",
          logo: htmlLogo,
        },
        {
          name: "css",
          logo: cssLogo,
        },
        {
          name: "vue",
          logo: vueLogo,
        },
        {
          name: "javascript",
          logo: jsLogo,
        },
      ]

  import {useRouter} from 'vue-router'

  const router = useRouter();

  const redirect = () => {
    router.push('/portfolio')
  }

</script>
