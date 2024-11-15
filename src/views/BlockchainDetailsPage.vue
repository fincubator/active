<template>
  <div class="blockchain-details" v-if="blockchain">
    <div class="details-section">
      <h2>{{ blockchain.name }}</h2>
    </div>
    <div v-if="blockchain.description" class="details-section">
      <h3>Short description</h3>
      <p>{{ blockchain.description }}</p>
    </div>
    <div v-if="blockchain.cryptocurrency" class="details-section">
      <h3>Token</h3>
      <p>{{ blockchain.cryptocurrency }}</p>
    </div>
    <div v-if="blockchain.website" class="details-section">
      <h3>Website</h3>
      <p><a :href="blockchain.website" target="_blank">{{ blockchain.website }}</a></p>
    </div>
    <div class="details-section">
      <h3>Useful links</h3>
      <p v-if="blockchain.github"><strong>Github:</strong> <a :href="blockchain.github" target="_blank">{{ blockchain.github }}</a></p>
      <p v-if="blockchain.mintscan"><strong>Mintscan:</strong> <a :href="blockchain.mintscan" target="_blank">{{ blockchain.mintscan }}</a></p>
      <p v-if="blockchain.pingpub"><strong>Ping.pub:</strong> <a :href="blockchain.pingpub" target="_blank">{{ blockchain.pingpub }}</a></p>
      <p v-if="blockchain.documentation"><strong>Docs:</strong> <a :href="blockchain.documentation" target="_blank">{{ blockchain.documentation }}</a></p>
      <p v-if="blockchain.twitter"><strong>Twitter (X):</strong> <a :href="blockchain.twitter" target="_blank">{{ blockchain.twitter }}</a></p>
      <p v-if="blockchain.discord"><strong>Discord:</strong> <a :href="blockchain.discord" target="_blank">{{ blockchain.discord}}</a></p>
      <p v-if="blockchain.telegram"><strong>Telegram:</strong> <a :href="blockchain.telegram" target="_blank">{{ blockchain.telegram }}</a></p>
    </div>
    <div v-if="blockchain.ecosystem" class="details-section">
      <h3>Ecosystem</h3>
      <ul>
        <li v-for="eco in blockchain.ecosystem" :key="eco.name">
          <strong>{{ eco.name }} ({{ eco.type }}):</strong> <a :href="eco.link" target="_blank">{{ eco.link }}</a>
        </li>
      </ul>
    </div>
    <div v-if="quantityOfValidators && minimumTokensToBeActive" class="details-section">
      <h3>Validators information</h3>
      <p><strong>Quantity of validators:</strong> {{ quantityOfValidators }}</p>
      <p><strong>Minimum tokens in active set:</strong> {{ minimumTokensToBeActive.toLocaleString() }} {{ blockchain.cryptocurrency }} / ${{ enterCost !== null ? Number(enterCost.toFixed(2)).toLocaleString() : 'Loading...' }}</p>
      <p><strong>Amount of tokens in 5th place from the end:</strong> {{ votingPowerFifth.toLocaleString() }} {{ blockchain.cryptocurrency }} / ${{ fifthTokenCost !== null ? Number(fifthTokenCost.toFixed(2)).toLocaleString() : 'Loading...' }}</p>
      <p v-if="emptyPlaces !== null"><strong>Empty places:</strong> {{ emptyPlaces }}</p>
      <p v-else><strong>Empty places:</strong> Loading...</p>
      <p v-if="manualData" style="color: red;"><strong>Data is entered manually and may not be up-to-date, check the information in explorer.</strong></p>
    </div>
    <div v-if="blockchain.requirements.cpu || blockchain.requirements.ram || blockchain.requirements.ssd" class="details-section">
      <h3>System requirements for nodes</h3>
      <ul>
        <li><strong>CPU:</strong> {{ blockchain.requirements.cpu }}</li>
        <li><strong>RAM:</strong> {{ blockchain.requirements.ram }}</li>
        <li><strong>SSD:</strong> {{ blockchain.requirements.ssd }}</li>
      </ul>
    </div>
    <div v-if="blockchain.installation_tutorials" class="details-section">
      <h3>Guides</h3>
      <ul>
        <li v-for="tutorial in blockchain.installation_tutorials" :key="tutorial.tutorial">
          <p>{{ tutorial.tutorial }}</p>
          <a :href="tutorial.link" target="_blank">{{ tutorial.link }}</a>
        </li>
      </ul>
    </div>
    <div v-if="blockchain.technical_contributions" class="details-section">
      <h3>Technical contributions</h3>
      <ul>
        <li v-for="contribution in blockchain.technical_contributions" :key="contribution.contribution">
          <p>{{ contribution.contribution }}</p>
        </li>
      </ul>
    </div>
    <div v-if="blockchain.community_contributions" class="details-section">
      <h3>Community contributions</h3>
      <ul>
        <li v-for="contribution in blockchain.community_contributions" :key="contribution.contribution">
          <p>{{ contribution.contribution }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BlockchainDetailsPage',
  data() {
    return {
      blockchain: null,
      quantityOfValidators: null,
      minimumTokensToBeActive: null,
      enterCost: null,
      emptyPlaces: null,
      votingPowerFifth: null,
      fifthTokenCost: null,
      manualData: false
    };
  },
  created() {
    const blockchainName = this.$route.params.name;
    axios.get('/validate.json')
      .then(response => {
        this.blockchain = response.data.blockchains.find(bc => bc.name === blockchainName);
        if (this.blockchain) {
          this.fetchValidatorData();
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
  methods: {
    fetchValidatorData() {
      if (this.blockchain.api_validators) {
        axios.get(this.blockchain.api_validators)
          .then(response => {
            if (response && response.data.validators) {
              const validators = response.data.validators;
              const votingPower = Number(validators[validators.length - 1]?.voting_power);
              const votingPowerFifth = Number(validators[validators.length - 5]?.voting_power);
              let total = response.data.pagination.total;

              if (total === 0 || total === undefined) {
                total = validators.length;
              }

              this.quantityOfValidators = `${total} / ${this.blockchain.max_validators}`;
              this.emptyPlaces = this.blockchain.max_validators - total;
              this.minimumTokensToBeActive = this.emptyPlaces > 0 ? 1 : votingPower;
              this.votingPowerFifth = votingPowerFifth;
              this.calculateEnterCost();
            } else {
              this.setManualData();
            }
          })
          .catch(error => {
            console.error('Error fetching validators data:', error);
            this.setManualData();
          });
      } else {
        this.setManualData();
      }
    },
    setManualData() {
      const total = this.blockchain.max_validators;
      const currentValidators = this.blockchain.current_amount_of_validators || 0;
      this.quantityOfValidators = `${currentValidators} / ${total}`;
      this.minimumTokensToBeActive = this.blockchain.minimum_token;
      this.votingPowerFifth = this.blockchain.fifth_place_tokens || 'N/A';
      this.emptyPlaces = total - currentValidators;
      this.manualData = true;
      this.calculateEnterCost();
    },
    calculateEnterCost() {
      if (this.minimumTokensToBeActive) {
        const osmosisApiUrl = `https://api-osmosis.imperator.co/tokens/v2/price/${this.blockchain.cryptocurrency.toLowerCase()}`;
        
        axios.get(osmosisApiUrl)
          .then(response => {
            const tokenPrice = response.data.price;
            if (tokenPrice) {
              this.enterCost = tokenPrice * this.minimumTokensToBeActive;
              this.fifthTokenCost = tokenPrice * this.votingPowerFifth;
            } else {
              this.fetchTokenPriceFromCoinGecko();
            }
          })
          .catch(() => {
            this.fetchTokenPriceFromCoinGecko();
          });
      }
    },
    fetchTokenPriceFromCoinGecko() {
      const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${this.blockchain.ids_coingecko}&vs_currencies=usd&x_cg_demo_api_key=${process.env.VUE_APP_COINGECKO_API_KEY}`;

      axios.get(apiUrl)
        .then(response => {
          const tokenPrice = response.data[this.blockchain.ids_coingecko]?.usd;
          if (tokenPrice) {
            this.enterCost = tokenPrice * this.minimumTokensToBeActive;
            this.fifthTokenCost = tokenPrice * this.votingPowerFifth;
          } else {
            this.enterCost = null;
            this.fifthTokenCost = null;
          }
        })
        .catch(error => {
          console.error('Error fetching price data from CoinGecko:', error);
          this.enterCost = null;
          this.fifthTokenCost = null;
        });
    }
  }
};
</script>

<style scoped>
.blockchain-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.95);
  border-radius: 10px;
  color: white;
  max-height: 500px;
  max-width: 80%;
  overflow-y: auto;
}

/* Custom scrollbar styles */
.blockchain-details::-webkit-scrollbar {
  width: 10px;
}

.blockchain-details::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.blockchain-details::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.blockchain-details::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.7);
}

.details-section {
  background-color: rgba(133, 121, 153, 0.15);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1 1 auto;
}

.details-section h2 {
  margin: 0;
  text-align: center;
}

.details-section ul {
  list-style-type: none;
  padding: 0;
}

.details-section li {
  margin-bottom: 10px;
}

a {
  color: #3b82f6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  line-height: 28px;
}

/* Responsive styles */
@media (max-width: 767.98px) {
  .blockchain-details {
    max-height: 400px;
    max-width: 80%;
    padding: 10px;
  }

  .details-section {
    padding: 15px;
  }

  h2 {
    font-size: 1.25em;
  }

  h3 {
    font-size: 1em;
  }

  p,
  a {
    font-size: 0.875em;
  }

  li {
    font-size: 0.875em;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .blockchain-details {
    padding: 15px;
    margin-top: 20px;
  }

  .details-section {
    padding: 20px;
  }

  h2 {
    font-size: 1.25em;
  }

  h3 {
    font-size: 1.25em;
  }

  p,
  a {
    font-size: 1em;
  }

  li {
    font-size: 1em;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .blockchain-details {
    padding: 20px;
    max-height: 500px;
    margin-top: 40px;
  }

  .details-section {
    padding: 10px 10px;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  p,
  a {
    font-size: 1em;
  }

  li {
    font-size: 1em;
  }
}

@media (min-width: 1200px) {
  .blockchain-details {
    padding: 25px;
    max-width: 70%;
    margin-top: 40px;
  }

  .details-section {
    padding: 15px 15px;
  }

  h2 {
    font-size: 1.25em;
  }

  h3 {
    font-size: 1.25em;
  }

  p,
  a {
    font-size: 1em;
  }

  li {
    font-size: 1em;
  }
}
</style>
