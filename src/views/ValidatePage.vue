<template>
  <div class="validate">
    <h2>Active</h2>
    <p>Useful information for validators</p>
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Search for a network..." class="search-input">
    </div>
    <div class="validate-list">
      <div class="blockchain-link" v-for="blockchain in filteredBlockchains" :key="blockchain.name"
        @click="goToBlockchainDetails(blockchain.name)">
        <div class="blockchain">
          <img :src="blockchain.logo" :alt="blockchain.name">
          <div class="blockchain-details">
            <h3>{{ blockchain.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <button class="view-all-button" @click="goToTable">View All Blockchains Table</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ValidatePage',
  data() {
    return {
      blockchains: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredBlockchains() {
      return this.blockchains.filter(blockchain => blockchain.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  created() {
    axios.get('/validate.json')
      .then(response => {
        this.blockchains = response.data.blockchains;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  methods: {
    goToBlockchainDetails(blockchainName) {
      this.$router.push(`/${blockchainName}`);
    },
    goToTable() {
      this.$router.push({ name: 'BlockchainsTable' });
    }
  }
};
</script>

<style scoped>
.validate {
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}

.search-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-input {
  padding: 10px;
  width: 80%;
  max-width: 400px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 16px;
  transition: border-color 0.3s, background-color 0.3s;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  border-color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.7);
  outline: none;
}

.validate-list {
  max-height: 300px;
  max-width: 500px;
  overflow-y: auto;
  margin-top: 20px;
  padding-right: 10px;
  background-color: rgba(102, 81, 153, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Custom scrollbar styles */
.validate-list::-webkit-scrollbar {
  width: 10px;
}

.validate-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.validate-list::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.validate-list::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.7);
}

.blockchain-link {
  text-decoration: none;
  color: inherit;
  width: 30%;
  box-sizing: border-box;
  margin: 10px;
  min-width: 200px;
  /* Ensure the block doesn't get too narrow */
}

.blockchain {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(117, 123, 158, 0.267);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
  flex-direction: column;
  text-align: center;
}

.blockchain:hover {
  transform: scale(1.05);
}

.blockchain img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.blockchain-details {
  color: #ffffff;
}

button.view-all-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: rgba(117, 123, 158, 0.267);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, border-color 0.3s;
}

button.view-all-button:hover {
  background-color: rgba(117, 123, 158, 0.4);
  border-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 767.98px) {
  .validate {
    padding: 10px;
  }

  .validate-list {
    max-height: 300px;
    padding: 5px;
  }

  .blockchain-link {
    width: 100%;
    margin: 0;
  }

  .blockchain {
    width: 90%;
    flex-direction: row;
    align-items: center;
  }

  .blockchain img {
    margin-right: 10px;
  }

  .blockchain-details {
    text-align: left;
  }

  h2 {
    font-size: 1em;
  }

  p {
    font-size: 0.7em;
  }

  .search-input {
    font-size: 0.7em;
  }

  .blockchain-details h3 {
    font-size: 0.7em;
  }

  .blockchain-details p {
    font-size: 0.875em;
  }

  button.view-all-button {
    font-size: 0.7em;
  }

  .blockchain img {
    width: 30px;
    height: 30px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .validate {
    padding: 10px;
  }

  .blockchain-link {
    width: 45%;
    margin: 10px;
  }

  h2 {
    font-size: 1.25em;
  }

  p {
    font-size: 1em;
  }

  .search-input {
    font-size: 1em;
  }

  .blockchain-details h3 {
    font-size: 1em;
  }

  button.view-all-button {
    font-size: 0.8em;
  }

  .blockchain img {
    width: 40px;
    height: 40px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {


  .blockchain-link {
    width: 30%;
    margin: 10px;
  }

  h2 {
    font-size: 1.25em;
  }

  p {
    font-size: 1em;
  }

  .search-input {
    font-size: 1em;
  }

  .blockchain-details h3 {
    font-size: 1em;
  }

  .blockchain-details p {
    font-size: 1em;
  }

  button.view-all-button {
    font-size: 1em;
  }

  .blockchain img {
    width: 30px;
    height: 30px;
  }
}

@media (min-width: 1200px) {
  .validate {
    padding: 20px;
    margin-top: 10px;
  }

  .blockchain-link {
    width: 30%;
    margin: 10px;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }

  .search-input {
    font-size: 1em;
  }

  .blockchain-details h3 {
    font-size: 1em;
  }

  .blockchain-details p {
    font-size: 1em;
  }

  button.view-all-button {
    font-size: 1em;
  }
}
</style>
