<template>
  <main class="home-page">

    <b-container class="crud-action-panel">
        <b-form-row>
          <b-col md="3">
            <b-input
              id="inline-form-input-project-name"
              class="mb-2 mr-sm-2"
              placeholder="Project name"
              v-model.trim="project.name"
            ></b-input>
          </b-col>
          <b-col md="3">
            <b-input
              id="inline-form-input-project-description"
              class="mb-2"
              placeholder="Project description"
              v-model="project.description"
            ></b-input>
          </b-col>
          <b-col md="3">
            <b-button
              variant="primary"
              class="mb-2"
              @click="addProject"
            >
              Add project
            </b-button>
          </b-col>
          <b-col md="3" class="ml-auto">
            <b-input
              id="inline-form-input-search"
              placeholder="Search project by name..."
              v-model="searchQuery"
            ></b-input>
          </b-col>
        </b-form-row>
    </b-container>

    <b-container class="portfolio-list">
        <b-row v-if="projects.length">
          <b-col
            v-for="(project, index) in filteredProjects"
            :key="project.name"
            xl="4" lg="4" md="6" sm="6" cols="12"
          >
            <b-card
              header-tag="header"
              footer-tag="footer"
            >
              <h6 slot="header">{{ project.name }}</h6>
              <b-card-text>{{ project.description }}</b-card-text>
              <span
                slot="footer"
                class="delete-btn"
                @click="rmvPortfolioItem(index)"
              >
                Delete Project
              </span>
            </b-card>
          </b-col>
        </b-row>
    </b-container>

  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      searchQuery: '',
      project: {
        name: '',
        description: '',
      },
      projects: [],
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => (
        project.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
      ));
    },
  },
  methods: {
    addProject() {
      if (this.project.name || this.project.description) this.projects.unshift(this.project);
    },
    rmvPortfolioItem(index) {
      this.projects.splice(index, 1);
    },
  },
  created() {
    axios.get('/projects.json').then((resolve) => {
      this.projects = resolve.data;
    });
  },
};
</script>
