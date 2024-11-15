<template>
  <footer class="footer">
    <div class="social-icons">
      <p>Developed by:</p>
      <a :href="contactLinks.github" target="_blank">
        <img :src="githubIcon" alt="GitHub">
      </a>
    </div>
  </footer>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppFooter',
  data() {
    return {
      contactLinks: {}
    };
  },
  computed: {
    githubIcon() {
      return `${window.location.origin}/github-mark-white.svg`;
    },
    emailIcon() {
      return `${window.location.origin}/email.png`;
    }
  },
  created() {
    axios.get('/BlockchainsData.json').then(response => {
      this.contactLinks = response.data.contactLinks;
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }
}
</script>

<style scoped>
.footer {
  background-color: transparent;
  text-align: right;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.footer p {
  color: rgba(255, 255, 255, 0.6);
  margin: 5px 0 0;
  font-size: 14px;
  font-weight: bold;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
}

.social-icons img {
  transition: transform 0.3s;
  filter: brightness(0.6);

}

.social-icons img:hover {
  transform: scale(1.2);
}

@media (max-width: 767.98px) {
  .footer {
    padding: 10px;
  }

  .social-icons img {
    width: 24px;
    height: 24px;
    margin: 0 10px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .footer {
    padding: 15px;
  }

  .social-icons img {
    width: 28px;
    height: 28px;
    margin: 0 15px;
  }

  .footer p {
  font-size: 12px;
}
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .footer {
    padding: 20px;
  }

  .social-icons img {
    width: 28px;
    height: 28px;
    margin: 0 20px;
  }

  .footer p {
  font-size: 12px;
}
}

@media (min-width: 1200px) {
  .footer {
    padding: 20px;
  }

  .social-icons img {
    width: 28px;
    height: 28px;
    margin: 0 20px;
  }
}
</style>
