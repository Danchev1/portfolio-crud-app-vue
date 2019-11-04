<template>
  <header>
    <b-container>
      <b-row>
        <b-col>
          <b-jumbotron header-level="4">
            <template slot="header">
              <strong>
                My portfolio
              </strong>
            </template>
            <template slot="lead">
              Welcome to my site.
            </template>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
