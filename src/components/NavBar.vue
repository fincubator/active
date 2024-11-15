<template>
  <nav class="navbar">
    <div class="logo">
      <a href="/"><img src="/logo.png" alt="Logo"></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>

.navbar {
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
}

.logo img {
  height: 80px;
  filter: brightness(0.9);
}

@media (max-width: 767.98px) {
  .logo img {
    height: 50px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar {
    padding: 15px;
  }

  .logo img {
    height: 50px;
  }

}

@media (min-width: 992px) {
  .logo img {
    height: 65px;
  }
}
</style>
