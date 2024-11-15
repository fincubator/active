<template>
    <div class="blockchains-table">
        <h2>Networks</h2>
        <div class="search-container">
            <input type="text" v-model="searchQuery" placeholder="Search for a network..." class="search-input">
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Network</th>
                        <th>CPU</th>
                        <th>RAM</th>
                        <th>SSD</th>
                        <th>Validators</th>
                        <th>Min in active set</th>
                        <th @click="sortTable('enterCost')">
                            <span>{{ sortedColumn === 'enterCost' ? (sortOrder === 'asc' ? '▲' : '▼') : '▼' }}
                                Cost</span>
                        </th>
                        <th>5th place from the end</th>
                        <th @click="sortTable('fifthTokenCost')">
                            <span>{{ sortedColumn === 'fifthTokenCost' ? (sortOrder === 'asc' ? '▲' : '▼') : '▼' }}
                                Cost</span>
                        </th>
                        <th @click="sortTable('emptyPlaces')">
                            <span>{{ sortedColumn === 'emptyPlaces' ? (sortOrder === 'asc' ? '▲' : '▼') : '▼' }} Empty
                                places</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="blockchain in sortedBlockchains" :key="blockchain.name"
                        :class="{ 'manual-data': blockchain.manualData }" @mouseover="showTooltip($event, blockchain)"
                        @mouseleave="hideTooltip" @click="goToDetails(blockchain.name)">
                        <td>{{ blockchain.name }}</td>
                        <td>{{ blockchain.requirements.cpu }}</td>
                        <td>{{ blockchain.requirements.ram }}</td>
                        <td>{{ blockchain.requirements.ssd }}</td>
                        <td :style="{ backgroundColor: blockchain.manualData ? 'rgba(255, 0, 0, 0.1)' : '' }">
                            {{ blockchain.quantityOfValidators ? blockchain.quantityOfValidators : 'Loading...' }}
                        </td>
                        <td :style="{ backgroundColor: blockchain.manualData ? 'rgba(255, 0, 0, 0.1)' : '' }">
                            {{ blockchain.minimumTokensToBeActive ? blockchain.minimumTokensToBeActive.toLocaleString()
                            : 'Loading...' }} {{ blockchain.cryptocurrency }}
                        </td>
                        <td :style="{ backgroundColor: blockchain.manualData ? 'rgba(255, 0, 0, 0.1)' : '' }">
                            {{ blockchain.enterCost ? `$${Number(blockchain.enterCost.toFixed(2)).toLocaleString()}` :
                            'Loading...' }}
                        </td>
                        <td :style="{ backgroundColor: blockchain.manualData ? 'rgba(255, 0, 0, 0.1)' : '' }">
                            {{ blockchain.votingPowerFifth ? blockchain.votingPowerFifth.toLocaleString() : 'Loading...'
                            }} {{ blockchain.cryptocurrency }}
                        </td>
                        <td :style="{ backgroundColor: blockchain.manualData ? 'rgba(255, 0, 0, 0.1)' : '' }">
                            {{ blockchain.fifthTokenCost ?
                                `$${Number(blockchain.fifthTokenCost.toFixed(2)).toLocaleString()}` : 'Loading...' }}
                        </td>
                        <td :style="{ backgroundColor: blockchain.manualData ? 'rgba(255, 0, 0, 0.1)' : '' }">
                            {{ blockchain.emptyPlaces !== null ? blockchain.emptyPlaces.toLocaleString() : 'Loading...'
                            }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="tooltip-container" v-if="tooltipVisible">
            <div class="tooltip bs-tooltip-bottom show" role="tooltip">
                <div class="tooltip-inner">
                    {{ tooltipMessage }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'BlockchainsTable',
    data() {
        return {
            blockchains: [],
            searchQuery: '',
            tooltipVisible: false,
            tooltipMessage: '',
            sortedColumn: '',
            sortOrder: 'asc'
        };
    },
    computed: {
        filteredBlockchains() {
            return this.blockchains.filter(blockchain =>
                blockchain.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        sortedBlockchains() {
            const sorted = [...this.filteredBlockchains];
            if (this.sortedColumn) {
                sorted.sort((a, b) => {
                    let modifier = this.sortOrder === 'asc' ? 1 : -1;
                    if (a[this.sortedColumn] === null) return 1;
                    if (b[this.sortedColumn] === null) return -1;
                    if (a[this.sortedColumn] < b[this.sortedColumn]) return -1 * modifier;
                    if (a[this.sortedColumn] > b[this.sortedColumn]) return 1 * modifier;
                    return 0;
                });
            }
            return sorted;
        }
    },
    created() {
        axios.get('/validate.json')
            .then(response => {
                this.blockchains = response.data.blockchains;
                this.blockchains.forEach(blockchain => {
                    blockchain.quantityOfValidators = null;
                    blockchain.minimumTokensToBeActive = null;
                    blockchain.emptyPlaces = null;
                    this.fetchValidatorData(blockchain)
                        .then(() => {
                            if (blockchain.minimumTokensToBeActive) {
                                this.fetchTokenPrice(blockchain);
                            }
                        })
                        .catch(error => {
                            console.error(`Error processing blockchain ${blockchain.name}:`, error);
                        });
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    methods: {
        sortTable(column) {
            if (this.sortedColumn === column) {
                this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortedColumn = column;
                this.sortOrder = 'asc';
            }
        },
        fetchValidatorData(blockchain) {
            return new Promise((resolve) => {
                if (blockchain.api_validators) {
                    axios.get(blockchain.api_validators, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(response => {
                            if (response && response.data.validators) {
                                const validators = response.data.validators;
                                const votingPower = Number(validators[validators.length - 1]?.voting_power);
                                const votingPowerFifth = Number(validators[validators.length - 5]?.voting_power);
                                let total = Number(response.data.pagination.total);

                                if (total === 0 || total === undefined) {
                                    total = validators.length;
                                }

                                blockchain.quantityOfValidators = `${total} / ${blockchain.max_validators}`;
                                blockchain.emptyPlaces = blockchain.max_validators - total;
                                blockchain.minimumTokensToBeActive = blockchain.emptyPlaces > 0 ? 1 : votingPower;
                                blockchain.votingPowerFifth = votingPowerFifth;

                                blockchain.manualData = false;
                                resolve();
                            } else {
                                this.setManualData(blockchain);
                                resolve();
                            }
                        })
                        .catch(error => {
                            console.error(`Error fetching validators data for ${blockchain.name}:`, error);
                            this.setManualData(blockchain);
                            resolve();
                        });
                } else {
                    this.setManualData(blockchain);
                    resolve();
                }
            });
        },
        setManualData(blockchain) {
            const total = blockchain.max_validators;
            const currentValidators = blockchain.current_amount_of_validators || 0;
            blockchain.quantityOfValidators = `${currentValidators} / ${total}`;
            blockchain.minimumTokensToBeActive = blockchain.minimum_token || 'N/A';
            blockchain.votingPowerFifth = blockchain.fifth_place_tokens || 'N/A';
            blockchain.emptyPlaces = total - currentValidators;
            blockchain.manualData = true;
        },
        fetchTokenPrice(blockchain) {
            const osmosisApiUrl = `https://api-osmosis.imperator.co/tokens/v2/price/${blockchain.cryptocurrency.toLowerCase()}`;

            axios.get(osmosisApiUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    const tokenPrice = Number(response.data?.price);

                    if (tokenPrice) {
                        blockchain.enterCost = tokenPrice * blockchain.minimumTokensToBeActive;
                        blockchain.fifthTokenCost = tokenPrice * blockchain.votingPowerFifth;
                    } else {
                        console.warn(`Price not found on Osmosis API for ${blockchain.name}. Falling back to CoinGecko.`);
                        this.fetchTokenPriceFromCoinGecko(blockchain);
                    }
                })
                .catch(error => {
                    console.error(`Error fetching price data for ${blockchain.name} from Osmosis API:`, error);
                    this.fetchTokenPriceFromCoinGecko(blockchain);
                });
        },
        fetchTokenPriceFromCoinGecko(blockchain) {
            const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${blockchain.ids_coingecko}&vs_currencies=usd&x_cg_demo_api_key=${process.env.VUE_APP_COINGECKO_API_KEY}`;
            axios.get(apiUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    const tokenPrice = Number(response.data[blockchain.ids_coingecko]?.usd);
                    if (tokenPrice) {
                        blockchain.enterCost = tokenPrice * blockchain.minimumTokensToBeActive;
                        blockchain.fifthTokenCost = tokenPrice * blockchain.votingPowerFifth;
                    } else {
                        blockchain.enterCost = null;
                        blockchain.fifthTokenCost = null;
                    }
                })
                .catch(error => {
                    console.error(`Error fetching price data for ${blockchain.name} from CoinGecko API:`, error);
                });
        },
        goToDetails(name) {
            this.$router.push({ name: 'BlockchainDetails', params: { name } });
        },
        showTooltip(event, blockchain) {
            if (blockchain.manualData) {
                this.tooltipMessage = "Data is entered manually and may not be up-to-date, check the information in explorer or official website.";
                this.tooltipVisible = true;
            }
        },
        hideTooltip() {
            this.tooltipVisible = false;
        }
    }
};
</script>

<style scoped>
.blockchains-table {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    position: relative;
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

.table-container {
    max-height: 400px;
    overflow-y: auto;
    margin-top: 20px;
    background-color: rgba(102, 81, 153, 0.1);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
    color: #ffffff;
    word-break: keep-all;
}

th {
    background-color: rgba(117, 123, 158, 0.267);
}

tr.manual-data:hover {
    background-color: rgba(255, 0, 0, 0.1);
    cursor: pointer;
}

tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.1);
}

tr:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
}

.tooltip-container {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 1em;
}

.tooltip.bs-tooltip-bottom .tooltip-inner {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    /* Make the tooltip span the entire width */
    display: inline-block;
    text-align: center;
    /* Center the text */
}

.tooltip.bs-tooltip-bottom.show {
    position: relative;
    display: inline-block;
    bottom: -20px;
    /* Adjust to ensure it appears right under the table */
}

/* Custom scrollbar styles */
.table-container::-webkit-scrollbar {
    width: 10px;
}

.table-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.table-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
}

.table-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.7);
}

/* Responsive styles */
@media (max-width: 767.98px) {
    .blockchains-table {
        padding: 10px;
    }

    .search-input {
        font-size: 0.5em;
    }

    th,
    td {
        font-size: 0.5em;
    }

    h2 {
        font-size: 1em;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .blockchains-table {
        padding: 20px;
    }

    .search-input {
        font-size: 0.75em;
    }

    th,
    td {
        font-size: 0.75em;
    }

    h2 {
        font-size: 1em;
    }

    .tooltip-container {
        font-size: 0.75em;
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
    .blockchains-table {
        padding: 10px;
    }

    .search-input {
        font-size: 0.75em;
    }

    th,
    td {
        font-size: 0.75em;
    }

    h2 {
        font-size: 1.25em;
    }

    .tooltip-container {
        font-size: 0.75em;
    }
}

@media (min-width: 1200px) {
    .blockchains-table {
        padding: 30px;
    }

    .search-input {
        font-size: 1em;
    }

    th,
    td {
        font-size: 1em;
    }

    h2 {
        font-size: 1.5em;
    }
}
</style>
