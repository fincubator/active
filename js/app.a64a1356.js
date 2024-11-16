(function(){"use strict";var t={2214:function(t,e,o){var n=o(5130),a=o(6768);const i={id:"app"},l={autoplay:"",muted:"",loop:"",id:"background-video",ref:"backgroundVideo"},r={class:"main-content"};function c(t,e,o,n,c,s){const u=(0,a.g2)("NavBar"),h=(0,a.g2)("router-view"),k=(0,a.g2)("AppFooter");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("video",l,e[0]||(e[0]=[(0,a.Lk)("source",{src:"/background1.mp4",type:"video/mp4"},null,-1),(0,a.eW)(" Your browser does not support the video tag. ")]),512),e[1]||(e[1]=(0,a.Lk)("div",{class:"overlay"},null,-1)),(0,a.bF)(u),(0,a.Lk)("div",r,[(0,a.bF)(h)]),(0,a.bF)(k)])}const s={class:"navbar"};function u(t,e,o,n,i,l){return(0,a.uX)(),(0,a.CE)("nav",s,e[0]||(e[0]=[(0,a.Lk)("div",{class:"logo"},[(0,a.Lk)("a",{href:"/"},[(0,a.Lk)("img",{src:"/logo.png",alt:"Logo"})])],-1)]))}var h={name:"NavBar"},k=o(1241);const d=(0,k.A)(h,[["render",u],["__scopeId","data-v-2b79c9b6"]]);var m=d;const p={class:"footer"},b={class:"social-icons"},v=["href"],f=["src"];function g(t,e,o,n,i,l){return(0,a.uX)(),(0,a.CE)("footer",p,[(0,a.Lk)("div",b,[e[0]||(e[0]=(0,a.Lk)("p",null,"Developed by:",-1)),(0,a.Lk)("a",{href:i.contactLinks.github,target:"_blank"},[(0,a.Lk)("img",{src:l.githubIcon,alt:"GitHub"},null,8,f)],8,v)])])}var L=o(4373),y={name:"AppFooter",data(){return{contactLinks:{}}},computed:{githubIcon(){return`${window.location.origin}/github-mark-white.svg`},emailIcon(){return`${window.location.origin}/email.png`}},created(){L.A.get("/BlockchainsData.json").then((t=>{this.contactLinks=t.data.contactLinks})).catch((t=>{console.error("Error fetching data:",t)}))}};const C=(0,k.A)(y,[["render",g],["__scopeId","data-v-2f4d2a95"]]);var _=C,T={name:"App",components:{NavBar:m,AppFooter:_},mounted(){this.$refs.backgroundVideo.playbackRate=.5}};const E=(0,k.A)(T,[["render",c]]);var w=E,A=o(1387),P=o(4232);const D={class:"validate"},X={class:"search-container"},B={class:"validate-list"},F=["onClick"],O={class:"blockchain"},V=["src","alt"],$={class:"blockchain-details"};function Q(t,e,o,i,l,r){return(0,a.uX)(),(0,a.CE)("div",D,[e[2]||(e[2]=(0,a.Lk)("h2",null,"Active",-1)),e[3]||(e[3]=(0,a.Lk)("p",null,"Useful information for validators",-1)),(0,a.Lk)("div",X,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.searchQuery=t),placeholder:"Search for a network...",class:"search-input"},null,512),[[n.Jo,l.searchQuery]])]),(0,a.Lk)("div",B,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.filteredBlockchains,(t=>((0,a.uX)(),(0,a.CE)("div",{class:"blockchain-link",key:t.name,onClick:e=>r.goToBlockchainDetails(t.name)},[(0,a.Lk)("div",O,[(0,a.Lk)("img",{src:t.logo,alt:t.name},null,8,V),(0,a.Lk)("div",$,[(0,a.Lk)("h3",null,(0,P.v_)(t.name),1)])])],8,F)))),128))]),(0,a.Lk)("button",{class:"view-all-button",onClick:e[1]||(e[1]=(...t)=>r.goToTable&&r.goToTable(...t))},"View All Blockchains Table")])}o(4114),o(8992),o(4520);var S={name:"ValidatePage",data(){return{blockchains:[],searchQuery:""}},computed:{filteredBlockchains(){return this.blockchains.filter((t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase())))}},created(){L.A.get("/validate.json").then((t=>{this.blockchains=t.data.blockchains})).catch((t=>{console.error("Error fetching data:",t)}))},methods:{goToBlockchainDetails(t){this.$router.push(`/${t}`)},goToTable(){this.$router.push({name:"BlockchainsTable"})}}};const q=(0,k.A)(S,[["render",Q],["__scopeId","data-v-9d5927fa"]]);var M=q;const x={key:0,class:"blockchain-details"},W={class:"details-section"},N={key:0,class:"details-section"},j={key:1,class:"details-section"},I={key:2,class:"details-section"},G=["href"],K={class:"details-section"},U={key:0},H=["href"],R={key:1},J=["href"],Y={key:2},z=["href"],Z={key:3},tt=["href"],et={key:4},ot=["href"],nt={key:5},at=["href"],it={key:6},lt=["href"],rt={key:3,class:"details-section"},ct=["href"],st={key:4,class:"details-section"},ut={key:0},ht={key:1},kt={key:2,style:{color:"red"}},dt={key:5,class:"details-section"},mt={key:6,class:"details-section"},pt=["href"],bt={key:7,class:"details-section"},vt={key:8,class:"details-section"};function ft(t,e,o,n,i,l){return i.blockchain?((0,a.uX)(),(0,a.CE)("div",x,[(0,a.Lk)("div",W,[(0,a.Lk)("h2",null,(0,P.v_)(i.blockchain.name),1)]),i.blockchain.description?((0,a.uX)(),(0,a.CE)("div",N,[e[0]||(e[0]=(0,a.Lk)("h3",null,"Short description",-1)),(0,a.Lk)("p",null,(0,P.v_)(i.blockchain.description),1)])):(0,a.Q3)("",!0),i.blockchain.cryptocurrency?((0,a.uX)(),(0,a.CE)("div",j,[e[1]||(e[1]=(0,a.Lk)("h3",null,"Token",-1)),(0,a.Lk)("p",null,(0,P.v_)(i.blockchain.cryptocurrency),1)])):(0,a.Q3)("",!0),i.blockchain.website?((0,a.uX)(),(0,a.CE)("div",I,[e[2]||(e[2]=(0,a.Lk)("h3",null,"Website",-1)),(0,a.Lk)("p",null,[(0,a.Lk)("a",{href:i.blockchain.website,target:"_blank"},(0,P.v_)(i.blockchain.website),9,G)])])):(0,a.Q3)("",!0),(0,a.Lk)("div",K,[e[17]||(e[17]=(0,a.Lk)("h3",null,"Useful links",-1)),i.blockchain.github?((0,a.uX)(),(0,a.CE)("p",U,[e[3]||(e[3]=(0,a.Lk)("strong",null,"Github:",-1)),e[4]||(e[4]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.github,target:"_blank"},(0,P.v_)(i.blockchain.github),9,H)])):(0,a.Q3)("",!0),i.blockchain.mintscan?((0,a.uX)(),(0,a.CE)("p",R,[e[5]||(e[5]=(0,a.Lk)("strong",null,"Mintscan:",-1)),e[6]||(e[6]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.mintscan,target:"_blank"},(0,P.v_)(i.blockchain.mintscan),9,J)])):(0,a.Q3)("",!0),i.blockchain.pingpub?((0,a.uX)(),(0,a.CE)("p",Y,[e[7]||(e[7]=(0,a.Lk)("strong",null,"Ping.pub:",-1)),e[8]||(e[8]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.pingpub,target:"_blank"},(0,P.v_)(i.blockchain.pingpub),9,z)])):(0,a.Q3)("",!0),i.blockchain.documentation?((0,a.uX)(),(0,a.CE)("p",Z,[e[9]||(e[9]=(0,a.Lk)("strong",null,"Docs:",-1)),e[10]||(e[10]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.documentation,target:"_blank"},(0,P.v_)(i.blockchain.documentation),9,tt)])):(0,a.Q3)("",!0),i.blockchain.twitter?((0,a.uX)(),(0,a.CE)("p",et,[e[11]||(e[11]=(0,a.Lk)("strong",null,"Twitter (X):",-1)),e[12]||(e[12]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.twitter,target:"_blank"},(0,P.v_)(i.blockchain.twitter),9,ot)])):(0,a.Q3)("",!0),i.blockchain.discord?((0,a.uX)(),(0,a.CE)("p",nt,[e[13]||(e[13]=(0,a.Lk)("strong",null,"Discord:",-1)),e[14]||(e[14]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.discord,target:"_blank"},(0,P.v_)(i.blockchain.discord),9,at)])):(0,a.Q3)("",!0),i.blockchain.telegram?((0,a.uX)(),(0,a.CE)("p",it,[e[15]||(e[15]=(0,a.Lk)("strong",null,"Telegram:",-1)),e[16]||(e[16]=(0,a.eW)()),(0,a.Lk)("a",{href:i.blockchain.telegram,target:"_blank"},(0,P.v_)(i.blockchain.telegram),9,lt)])):(0,a.Q3)("",!0)]),i.blockchain.ecosystem?((0,a.uX)(),(0,a.CE)("div",rt,[e[19]||(e[19]=(0,a.Lk)("h3",null,"Ecosystem",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.blockchain.ecosystem,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t.name},[(0,a.Lk)("strong",null,(0,P.v_)(t.name)+" ("+(0,P.v_)(t.type)+"):",1),e[18]||(e[18]=(0,a.eW)()),(0,a.Lk)("a",{href:t.link,target:"_blank"},(0,P.v_)(t.link),9,ct)])))),128))])])):(0,a.Q3)("",!0),i.quantityOfValidators&&i.minimumTokensToBeActive?((0,a.uX)(),(0,a.CE)("div",st,[e[26]||(e[26]=(0,a.Lk)("h3",null,"Validators information",-1)),(0,a.Lk)("p",null,[e[20]||(e[20]=(0,a.Lk)("strong",null,"Quantity of validators:",-1)),(0,a.eW)(" "+(0,P.v_)(i.quantityOfValidators),1)]),(0,a.Lk)("p",null,[e[21]||(e[21]=(0,a.Lk)("strong",null,"Minimum tokens in active set:",-1)),(0,a.eW)(" "+(0,P.v_)(i.minimumTokensToBeActive.toLocaleString())+" "+(0,P.v_)(i.blockchain.cryptocurrency)+" / $"+(0,P.v_)(null!==i.enterCost?Number(i.enterCost.toFixed(2)).toLocaleString():"Loading..."),1)]),(0,a.Lk)("p",null,[e[22]||(e[22]=(0,a.Lk)("strong",null,"Amount of tokens in 5th place from the end:",-1)),(0,a.eW)(" "+(0,P.v_)(i.votingPowerFifth.toLocaleString())+" "+(0,P.v_)(i.blockchain.cryptocurrency)+" / $"+(0,P.v_)(null!==i.fifthTokenCost?Number(i.fifthTokenCost.toFixed(2)).toLocaleString():"Loading..."),1)]),null!==i.emptyPlaces?((0,a.uX)(),(0,a.CE)("p",ut,[e[23]||(e[23]=(0,a.Lk)("strong",null,"Empty places:",-1)),(0,a.eW)(" "+(0,P.v_)(i.emptyPlaces),1)])):((0,a.uX)(),(0,a.CE)("p",ht,e[24]||(e[24]=[(0,a.Lk)("strong",null,"Empty places:",-1),(0,a.eW)(" Loading...")]))),i.manualData?((0,a.uX)(),(0,a.CE)("p",kt,e[25]||(e[25]=[(0,a.Lk)("strong",null,"Data is entered manually and may not be up-to-date, check the information in explorer.",-1)]))):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0),i.blockchain.requirements.cpu||i.blockchain.requirements.ram||i.blockchain.requirements.ssd?((0,a.uX)(),(0,a.CE)("div",dt,[e[30]||(e[30]=(0,a.Lk)("h3",null,"System requirements for nodes",-1)),(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[e[27]||(e[27]=(0,a.Lk)("strong",null,"CPU:",-1)),(0,a.eW)(" "+(0,P.v_)(i.blockchain.requirements.cpu),1)]),(0,a.Lk)("li",null,[e[28]||(e[28]=(0,a.Lk)("strong",null,"RAM:",-1)),(0,a.eW)(" "+(0,P.v_)(i.blockchain.requirements.ram),1)]),(0,a.Lk)("li",null,[e[29]||(e[29]=(0,a.Lk)("strong",null,"SSD:",-1)),(0,a.eW)(" "+(0,P.v_)(i.blockchain.requirements.ssd),1)])])])):(0,a.Q3)("",!0),i.blockchain.installation_tutorials?((0,a.uX)(),(0,a.CE)("div",mt,[e[31]||(e[31]=(0,a.Lk)("h3",null,"Guides",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.blockchain.installation_tutorials,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t.tutorial},[(0,a.Lk)("p",null,(0,P.v_)(t.tutorial),1),(0,a.Lk)("a",{href:t.link,target:"_blank"},(0,P.v_)(t.link),9,pt)])))),128))])])):(0,a.Q3)("",!0),i.blockchain.technical_contributions?((0,a.uX)(),(0,a.CE)("div",bt,[e[32]||(e[32]=(0,a.Lk)("h3",null,"Technical contributions",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.blockchain.technical_contributions,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t.contribution},[(0,a.Lk)("p",null,(0,P.v_)(t.contribution),1)])))),128))])])):(0,a.Q3)("",!0),i.blockchain.community_contributions?((0,a.uX)(),(0,a.CE)("div",vt,[e[33]||(e[33]=(0,a.Lk)("h3",null,"Community contributions",-1)),(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.blockchain.community_contributions,(t=>((0,a.uX)(),(0,a.CE)("li",{key:t.contribution},[(0,a.Lk)("p",null,(0,P.v_)(t.contribution),1)])))),128))])])):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0)}o(2577);var gt={name:"BlockchainDetailsPage",data(){return{blockchain:null,quantityOfValidators:null,minimumTokensToBeActive:null,enterCost:null,emptyPlaces:null,votingPowerFifth:null,fifthTokenCost:null,manualData:!1}},created(){const t=this.$route.params.name;L.A.get("/validate.json").then((e=>{this.blockchain=e.data.blockchains.find((e=>e.name===t)),this.blockchain&&this.fetchValidatorData()})).catch((t=>{console.error("Error fetching data:",t)}))},methods:{fetchValidatorData(){this.blockchain.api_validators?L.A.get(this.blockchain.api_validators).then((t=>{if(t&&t.data.validators){const e=t.data.validators,o=Number(e[e.length-1]?.voting_power),n=Number(e[e.length-5]?.voting_power);let a=t.data.pagination.total;0!==a&&void 0!==a||(a=e.length),this.quantityOfValidators=`${a} / ${this.blockchain.max_validators}`,this.emptyPlaces=this.blockchain.max_validators-a,this.minimumTokensToBeActive=this.emptyPlaces>0?1:o,this.votingPowerFifth=n,this.calculateEnterCost()}else this.setManualData()})).catch((t=>{console.error("Error fetching validators data:",t),this.setManualData()})):this.setManualData()},setManualData(){const t=this.blockchain.max_validators,e=this.blockchain.current_amount_of_validators||0;this.quantityOfValidators=`${e} / ${t}`,this.minimumTokensToBeActive=this.blockchain.minimum_token,this.votingPowerFifth=this.blockchain.fifth_place_tokens||"N/A",this.emptyPlaces=t-e,this.manualData=!0,this.calculateEnterCost()},calculateEnterCost(){if(this.minimumTokensToBeActive){const t=`https://api-osmosis.imperator.co/tokens/v2/price/${this.blockchain.cryptocurrency.toLowerCase()}`;L.A.get(t).then((t=>{const e=t.data.price;e?(this.enterCost=e*this.minimumTokensToBeActive,this.fifthTokenCost=e*this.votingPowerFifth):this.fetchTokenPriceFromCoinGecko()})).catch((()=>{this.fetchTokenPriceFromCoinGecko()}))}},fetchTokenPriceFromCoinGecko(){const t=`https://api.coingecko.com/api/v3/simple/price?ids=${this.blockchain.ids_coingecko}&vs_currencies=usd&x_cg_demo_api_key=CG-grQASTBESmV8pnyVLq6LEtWH`;L.A.get(t).then((t=>{const e=t.data[this.blockchain.ids_coingecko]?.usd;e?(this.enterCost=e*this.minimumTokensToBeActive,this.fifthTokenCost=e*this.votingPowerFifth):(this.enterCost=null,this.fifthTokenCost=null)})).catch((t=>{console.error("Error fetching price data from CoinGecko:",t),this.enterCost=null,this.fifthTokenCost=null}))}}};const Lt=(0,k.A)(gt,[["render",ft],["__scopeId","data-v-3594b512"]]);var yt=Lt;const Ct={class:"blockchains-table"},_t={class:"search-container"},Tt={class:"table-container"},Et=["onMouseover","onClick"],wt={key:0,class:"tooltip-container"},At={class:"tooltip bs-tooltip-bottom show",role:"tooltip"},Pt={class:"tooltip-inner"};function Dt(t,e,o,i,l,r){return(0,a.uX)(),(0,a.CE)("div",Ct,[e[12]||(e[12]=(0,a.Lk)("h2",null,"Networks",-1)),(0,a.Lk)("div",_t,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.searchQuery=t),placeholder:"Search for a network...",class:"search-input"},null,512),[[n.Jo,l.searchQuery]])]),(0,a.Lk)("div",Tt,[(0,a.Lk)("table",null,[(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[e[5]||(e[5]=(0,a.Lk)("th",null,"Network",-1)),e[6]||(e[6]=(0,a.Lk)("th",null,"CPU",-1)),e[7]||(e[7]=(0,a.Lk)("th",null,"RAM",-1)),e[8]||(e[8]=(0,a.Lk)("th",null,"SSD",-1)),e[9]||(e[9]=(0,a.Lk)("th",null,"Validators",-1)),e[10]||(e[10]=(0,a.Lk)("th",null,"Min in active set",-1)),(0,a.Lk)("th",{onClick:e[1]||(e[1]=t=>r.sortTable("enterCost"))},[(0,a.Lk)("span",null,(0,P.v_)("enterCost"===l.sortedColumn&&"asc"===l.sortOrder?"▲":"▼")+" Cost",1)]),e[11]||(e[11]=(0,a.Lk)("th",null,"5th place from the end",-1)),(0,a.Lk)("th",{onClick:e[2]||(e[2]=t=>r.sortTable("fifthTokenCost"))},[(0,a.Lk)("span",null,(0,P.v_)("fifthTokenCost"===l.sortedColumn&&"asc"===l.sortOrder?"▲":"▼")+" Cost",1)]),(0,a.Lk)("th",{onClick:e[3]||(e[3]=t=>r.sortTable("emptyPlaces"))},[(0,a.Lk)("span",null,(0,P.v_)("emptyPlaces"===l.sortedColumn&&"asc"===l.sortOrder?"▲":"▼")+" Empty places",1)])])]),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.sortedBlockchains,(t=>((0,a.uX)(),(0,a.CE)("tr",{key:t.name,class:(0,P.C4)({"manual-data":t.manualData}),onMouseover:e=>r.showTooltip(e,t),onMouseleave:e[4]||(e[4]=(...t)=>r.hideTooltip&&r.hideTooltip(...t)),onClick:e=>r.goToDetails(t.name)},[(0,a.Lk)("td",null,(0,P.v_)(t.name),1),(0,a.Lk)("td",null,(0,P.v_)(t.requirements.cpu),1),(0,a.Lk)("td",null,(0,P.v_)(t.requirements.ram),1),(0,a.Lk)("td",null,(0,P.v_)(t.requirements.ssd),1),(0,a.Lk)("td",{style:(0,P.Tr)({backgroundColor:t.manualData?"rgba(255, 0, 0, 0.1)":""})},(0,P.v_)(t.quantityOfValidators?t.quantityOfValidators:"Loading..."),5),(0,a.Lk)("td",{style:(0,P.Tr)({backgroundColor:t.manualData?"rgba(255, 0, 0, 0.1)":""})},(0,P.v_)(t.minimumTokensToBeActive?t.minimumTokensToBeActive.toLocaleString():"Loading...")+" "+(0,P.v_)(t.cryptocurrency),5),(0,a.Lk)("td",{style:(0,P.Tr)({backgroundColor:t.manualData?"rgba(255, 0, 0, 0.1)":""})},(0,P.v_)(t.enterCost?`$${Number(t.enterCost.toFixed(2)).toLocaleString()}`:"Loading..."),5),(0,a.Lk)("td",{style:(0,P.Tr)({backgroundColor:t.manualData?"rgba(255, 0, 0, 0.1)":""})},(0,P.v_)(t.votingPowerFifth?t.votingPowerFifth.toLocaleString():"Loading...")+" "+(0,P.v_)(t.cryptocurrency),5),(0,a.Lk)("td",{style:(0,P.Tr)({backgroundColor:t.manualData?"rgba(255, 0, 0, 0.1)":""})},(0,P.v_)(t.fifthTokenCost?`$${Number(t.fifthTokenCost.toFixed(2)).toLocaleString()}`:"Loading..."),5),(0,a.Lk)("td",{style:(0,P.Tr)({backgroundColor:t.manualData?"rgba(255, 0, 0, 0.1)":""})},(0,P.v_)(null!==t.emptyPlaces?t.emptyPlaces.toLocaleString():"Loading..."),5)],42,Et)))),128))])])]),l.tooltipVisible?((0,a.uX)(),(0,a.CE)("div",wt,[(0,a.Lk)("div",At,[(0,a.Lk)("div",Pt,(0,P.v_)(l.tooltipMessage),1)])])):(0,a.Q3)("",!0)])}o(3949);var Xt={name:"BlockchainsTable",data(){return{blockchains:[],searchQuery:"",tooltipVisible:!1,tooltipMessage:"",sortedColumn:"",sortOrder:"asc"}},computed:{filteredBlockchains(){return this.blockchains.filter((t=>t.name.toLowerCase().includes(this.searchQuery.toLowerCase())))},sortedBlockchains(){const t=[...this.filteredBlockchains];return this.sortedColumn&&t.sort(((t,e)=>{let o="asc"===this.sortOrder?1:-1;return null===t[this.sortedColumn]?1:null===e[this.sortedColumn]?-1:t[this.sortedColumn]<e[this.sortedColumn]?-1*o:t[this.sortedColumn]>e[this.sortedColumn]?1*o:0})),t}},created(){L.A.get("/validate.json").then((t=>{this.blockchains=t.data.blockchains,this.blockchains.forEach((t=>{t.quantityOfValidators=null,t.minimumTokensToBeActive=null,t.emptyPlaces=null,this.fetchValidatorData(t).then((()=>{t.minimumTokensToBeActive&&this.fetchTokenPrice(t)})).catch((e=>{console.error(`Error processing blockchain ${t.name}:`,e)}))}))})).catch((t=>{console.error("Error fetching data:",t)}))},methods:{sortTable(t){this.sortedColumn===t?this.sortOrder="asc"===this.sortOrder?"desc":"asc":(this.sortedColumn=t,this.sortOrder="asc")},fetchValidatorData(t){return new Promise((e=>{t.api_validators?L.A.get(t.api_validators,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((o=>{if(o&&o.data.validators){const n=o.data.validators,a=Number(n[n.length-1]?.voting_power),i=Number(n[n.length-5]?.voting_power);let l=Number(o.data.pagination.total);0!==l&&void 0!==l||(l=n.length),t.quantityOfValidators=`${l} / ${t.max_validators}`,t.emptyPlaces=t.max_validators-l,t.minimumTokensToBeActive=t.emptyPlaces>0?1:a,t.votingPowerFifth=i,t.manualData=!1,e()}else this.setManualData(t),e()})).catch((o=>{console.error(`Error fetching validators data for ${t.name}:`,o),this.setManualData(t),e()})):(this.setManualData(t),e())}))},setManualData(t){const e=t.max_validators,o=t.current_amount_of_validators||0;t.quantityOfValidators=`${o} / ${e}`,t.minimumTokensToBeActive=t.minimum_token||"N/A",t.votingPowerFifth=t.fifth_place_tokens||"N/A",t.emptyPlaces=e-o,t.manualData=!0},fetchTokenPrice(t){const e=`https://api-osmosis.imperator.co/tokens/v2/price/${t.cryptocurrency.toLowerCase()}`;L.A.get(e,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>{const o=Number(e.data?.price);o?(t.enterCost=o*t.minimumTokensToBeActive,t.fifthTokenCost=o*t.votingPowerFifth):(console.warn(`Price not found on Osmosis API for ${t.name}. Falling back to CoinGecko.`),this.fetchTokenPriceFromCoinGecko(t))})).catch((e=>{console.error(`Error fetching price data for ${t.name} from Osmosis API:`,e),this.fetchTokenPriceFromCoinGecko(t)}))},fetchTokenPriceFromCoinGecko(t){const e=`https://api.coingecko.com/api/v3/simple/price?ids=${t.ids_coingecko}&vs_currencies=usd&x_cg_demo_api_key=CG-grQASTBESmV8pnyVLq6LEtWH`;L.A.get(e,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>{const o=Number(e.data[t.ids_coingecko]?.usd);o?(t.enterCost=o*t.minimumTokensToBeActive,t.fifthTokenCost=o*t.votingPowerFifth):(t.enterCost=null,t.fifthTokenCost=null)})).catch((e=>{console.error(`Error fetching price data for ${t.name} from CoinGecko API:`,e)}))},goToDetails(t){this.$router.push({name:"BlockchainDetails",params:{name:t}})},showTooltip(t,e){e.manualData&&(this.tooltipMessage="Data is entered manually and may not be up-to-date, check the information in explorer or official website.",this.tooltipVisible=!0)},hideTooltip(){this.tooltipVisible=!1}}};const Bt=(0,k.A)(Xt,[["render",Dt],["__scopeId","data-v-7377be80"]]);var Ft=Bt;const Ot=[{path:"/",name:"Validate",component:M},{path:"/:name",name:"BlockchainDetails",component:yt,props:!0},{path:"/blockchains-table",name:"BlockchainsTable",component:Ft}],Vt=(0,A.aE)({history:(0,A.LA)("/"),routes:Ot});var $t=Vt;(0,n.Ef)(w).use($t).mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,i){if(!n){var l=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],i=t[u][2];for(var r=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(r=!1,i<l&&(l=i));if(r){t.splice(u--,1);var s=a();void 0!==s&&(e=s)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,a,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,l=n[0],r=n[1],c=n[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(c)var u=c(o)}for(e&&e(n);s<l.length;s++)i=l[s],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},n=self["webpackChunkactive"]=self["webpackChunkactive"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(2214)}));n=o.O(n)})();
//# sourceMappingURL=app.a64a1356.js.map