//mob menu
function openMobMenu(){
  document.getElementById('js-menu-burger').classList.toggle('open');
  document.getElementById('js-mob-menu').classList.toggle('open');
}

//drop
document.addEventListener('click', function(event){
  let allDrops = document.querySelectorAll('.js-drop');
  if(event.target.classList.contains('js-drop')){
    if(event.target.classList.contains('open')){
      event.target.nextElementSibling.classList.remove('open');
      event.target.classList.remove('open');
    } else {
      Array.prototype.forEach.call(allDrops, function(e) {
        e.nextElementSibling.classList.remove('open');
        e.classList.remove('open');
      });
      event.target.nextElementSibling.classList.add('open');
      event.target.classList.add('open');
    }
  } else{    
    Array.prototype.forEach.call(allDrops, function(e) {
      e.nextElementSibling.classList.remove('open');
      e.classList.remove('open');
    });
  }
});

//show all text
if(document.getElementById('js-more-txt')){
  document.getElementById('js-more-txt').addEventListener('click', function(event){
    document.getElementById('js-hide-txt').classList.toggle('open');
    if(event.target.classList.contains('open')){
      event.target.classList.remove('open');
      event.target.innerHTML = 'READ MORE...';
    } else{
      event.target.classList.add('open');
      event.target.innerHTML = 'HIDE...';
    }
  });
}

//mob search open
function openMobSearch(){
  document.getElementById('js-mob-search').classList.toggle('open');
}

//rait
function rait($this){  
  let allStars = document.querySelectorAll('.js-review-star');
  Array.prototype.forEach.call(allStars, function(e) {
    e.classList.remove('active');
  });
  $this.classList.add('active');
  $this.parentElement.classList.add('active');
}

//show userform in add bot
function showUserForm(){
  if (document.getElementById('js-user-radio').checked) {
    document.getElementById('js-user-rait').classList.add('show');
  } else{
    document.getElementById('js-user-rait').classList.remove('show');
  }
}

//copy in buffer
function copyCode($this){
  if( !($this.classList.contains('copyed')) ){ 
    $this.classList.add('copyed');
    let code = $this.getElementsByTagName('span')[0].textContent;
    navigator.clipboard.writeText(code); 

    let elem = document.createElement('div');                
    elem.classList.add('copycode__hint');
    elem.textContent = 'Copied to clipboard';
    $this.insertBefore(elem, $this.firstChild);

    function delHint(){
      $this.querySelector('.copycode__hint').remove();
      $this.classList.remove('copyed');
    }
    setTimeout(delHint, 1500);
  }
}

//input select
class DataList {
  constructor(containerId, containerList, inputId, listId, options) {
    this.containerId = containerId;
    this.containerList = containerList;
    this.inputId = inputId;
    this.listId = listId;
    this.options = options;
  }
  
  create(filter = "") {
    const list = document.getElementById(this.listId);
    const filterOptions = this.options.filter(
      d => filter.toLowerCase() === "" || d.text.toLowerCase().includes(filter.toLowerCase())
    );
      
    if (filterOptions.length === 0) {
      list.classList.remove("active");
    } else {
      list.classList.add("active");
    }

    list.innerHTML = filterOptions.map(o => `<li>${o.text}</li>`).join("");
  }

  addListeners(datalist) {
    const container = document.getElementById(this.containerId);
    const input = document.getElementById(this.inputId);
    const list = document.getElementById(this.listId);
    const selectsList = document.getElementById(this.containerList);
    document.addEventListener("click", e => {
      if (e.target.id === this.inputId) {
        container.classList.add("active");
      } else {
        container.classList.remove("active");
        //input.focus();
      }
    });

    input.addEventListener("input", function(e) {
      if (!container.classList.contains("active")) {
        container.classList.add("active");        
      }
      datalist.create(input.value);      
    });

    list.addEventListener("click", function(e) {
      if (e.target.nodeName.toLocaleLowerCase() === "li") {
        let text = e.target.innerText;
        //input.value = text;
        //input.value = '';
        if(input.nextElementSibling.classList.contains('add-bot-form__selected')){
          input.value = '';          
        } else{
          input.value = text;
        }
        container.classList.remove("active");
        
        
        if(selectsList){
          let allItems = selectsList.querySelectorAll('.add-bot-form__selitem');
          if(allItems.length){
            let allreadyIs = false;
            for (let i = 0; i < allItems.length; i++) {
                if(allItems[i].getElementsByTagName('span')[0].textContent == text){
                  allreadyIs = true;
                  break;
                }
            }
            if(!allreadyIs){
               let elem = document.createElement('div');                
                elem.classList.add('add-bot-form__selitem');
                elem.innerHTML = (`<span>${text}</span><button type="button" class="btn add-bot-form__selitem-del" title="Del" onclick="this.parentElement.remove();">Del</button>`);
                selectsList.insertBefore(elem, selectsList.firstChild);
              }
          } else{
            selectsList.innerHTML = (`<div class="add-bot-form__selitem"><span>${text}</span><button type="button" class="btn add-bot-form__selitem-del" title="Del" onclick="this.parentElement.remove();">Del</button></div>`);
          }
        }
        
        
      }
    });
  }
}

const countriesList = [
  { text: "Afghanistan" },
  { text: "Albania" },
  { text: "Algeria" },
  { text: "Andorra" },
  { text: "Angola" },
  { text: "Antigua & Deps" },
  { text: "Argentina" },
  { text: "Armenia" },
  { text: "Australia" },
  { text: "Austria" },
  { text: "Azerbaijan" },
  { text: "Bahamas" },
  { text: "Bahrain" },
  { text: "Bangladesh" },
  { text: "Barbados" },
  { text: "Belarus" },
  { text: "Belgium" },
  { text: "Belize" },
  { text: "Benin" },
  { text: "Bhutan" },
  { text: "Bolivia" },
  { text: "Bosnia Herzegovina" },
  { text: "Botswana" },
  { text: "Brazil" },
  { text: "Brunei" },
  { text: "Bulgaria" },
  { text: "Burkina" },
  { text: "Burundi" },
  { text: "Cambodia" },
  { text: "Cameroon" },
  { text: "Canada" },
  { text: "Cape Verde" },
  { text: "Central African Rep" },
  { text: "Chad" },
  { text: "Chile" },
  { text: "China" },
  { text: "Colombia" },
  { text: "Comoros" },
  { text: "Congo" },
  { text: "Congo {Democratic Rep}" },
  { text: "Costa Rica" },
  { text: "Croatia" },
  { text: "Cuba" },
  { text: "Cyprus" },
  { text: "Czech Republic" },
  { text: "Denmark" },
  { text: "Djibouti" },
  { text: "Dominica" },
  { text: "Dominican Republic" },
  { text: "East Timor" },
  { text: "Ecuador" },
  { text: "Egypt" },
  { text: "El Salvador" },
  { text: "Equatorial Guinea" },
  { text: "Eritrea" },
  { text: "Estonia" },
  { text: "Ethiopia" },
  { text: "Fiji" },
  { text: "Finland" },
  { text: "France" },
  { text: "Gabon" },
  { text: "Gambia" },
  { text: "Georgia" },
  { text: "Germany" },
  { text: "Ghana" },
  { text: "Greece" },
  { text: "Grenada" },
  { text: "Guatemala" },
  { text: "Guinea" },
  { text: "Guinea-Bissau" },
  { text: "Guyana" },
  { text: "Haiti" },
  { text: "Honduras" },
  { text: "Hungary" },
  { text: "Iceland" },
  { text: "India" },
  { text: "Indonesia" },
  { text: "Iran" },
  { text: "Iraq" },
  { text: "Ireland {Republic}" },
  { text: "Israel" },
  { text: "Italy" },
  { text: "Ivory Coast" },
  { text: "Jamaica" },
  { text: "Japan" },
  { text: "Jordan" },
  { text: "Kazakhstan" },
  { text: "Kenya" },
  { text: "Kiribati" },
  { text: "Korea North" },
  { text: "Korea South" },
  { text: "Kosovo" },
  { text: "Kuwait" },
  { text: "Kyrgyzstan" },
  { text: "Laos" },
  { text: "Latvia" },
  { text: "Lebanon" },
  { text: "Lesotho" },
  { text: "Liberia" },
  { text: "Libya" },
  { text: "Liechtenstein" },
  { text: "Lithuania" },
  { text: "Luxembourg" },
  { text: "Macedonia" },
  { text: "Madagascar" },
  { text: "Malawi" },
  { text: "Malaysia" },
  { text: "Maldives" },
  { text: "Mali" },
  { text: "Malta" },
  { text: "Marshall Islands" },
  { text: "Mauritania" },
  { text: "Mauritius" },
  { text: "Mexico" },
  { text: "Micronesia" },
  { text: "Moldova" },
  { text: "Monaco" },
  { text: "Mongolia" },
  { text: "Montenegro" },
  { text: "Morocco" },
  { text: "Mozambique" },
  { text: "Myanmar, {Burma}" },
  { text: "Namibia" },
  { text: "Nauru" },
  { text: "Nepal" },
  { text: "Netherlands" },
  { text: "New Zealand" },
  { text: "Nicaragua" },
  { text: "Niger" },
  { text: "Nigeria" },
  { text: "Norway" },
  { text: "Oman" },
  { text: "Pakistan" },
  { text: "Palau" },
  { text: "Panama" },
  { text: "Papua New Guinea" },
  { text: "Paraguay" },
  { text: "Peru" },
  { text: "Philippines" },
  { text: "Poland" },
  { text: "Portugal" },
  { text: "Qatar" },
  { text: "Romania" },
  { text: "Russian Federation" },
  { text: "Rwanda" },
  { text: "St Kitts & Nevis" },
  { text: "St Lucia" },
  { text: "Saint Vincent & the Grenadines" },
  { text: "Samoa" },
  { text: "San Marino" },
  { text: "Sao Tome & Principe" },
  { text: "Saudi Arabia" },
  { text: "Senegal" },
  { text: "Serbia" },
  { text: "Seychelles" },
  { text: "Sierra Leone" },
  { text: "Singapore" },
  { text: "Slovakia" },
  { text: "Slovenia" },
  { text: "Solomon Islands" },
  { text: "Somalia" },
  { text: "South Africa" },
  { text: "South Sudan" },
  { text: "Spain" },
  { text: "Sri Lanka" },
  { text: "Sudan" },
  { text: "Suriname" },
  { text: "Swaziland" },
  { text: "Sweden" },
  { text: "Switzerland" },
  { text: "Syria" },
  { text: "Taiwan" },
  { text: "Tajikistan" },
  { text: "Tanzania" },
  { text: "Thailand" },
  { text: "Togo" },
  { text: "Tonga" },
  { text: "Trinidad & Tobago" },
  { text: "Tunisia" },
  { text: "Turkey" },
  { text: "Turkmenistan" },
  { text: "Tuvalu" },
  { text: "Uganda" },
  { text: "Ukraine" },
  { text: "United Arab Emirates" },
  { text: "United Kingdom" },
  { text: "United States" },
  { text: "Uruguay" },
  { text: "Uzbekistan" },
  { text: "Vanuatu" },
  { text: "Vatican City" },
  { text: "Venezuela" },
  { text: "Vietnam" },
  { text: "Yemen" },
  { text: "Zambia" },
  { text: "Zimbabwe" }
];
const langsList = [
  { text: "Abkhazian (ab)" },
  { text: "Achinese (ace)" },
  { text: "Acoli (ach)" },
  { text: "Adangme (ada)" },
  { text: "Adyghe (ady)" },
  { text: "Afar (aa)" },
  { text: "Afrihili (afh)" },
  { text: "Afrikaans (af)" },
  { text: "Aghem (agq)" },
  { text: "Ainu (ain)" },
  { text: "Akan (ak)" },
  { text: "Akkadian (akk)" },
  { text: "Akoose (bss)" },
  { text: "Alabama (akz)" },
  { text: "Albanian (sq)" },
  { text: "Aleut (ale)" },
  { text: "Algerian Arabic (arq)" },
  { text: "Amarik (am)" },
  { text: "American English (en_US)" },
  { text: "American Sign Language (ase)" },
  { text: "Ancient Egyptian (egy)" },
  { text: "Ancient Greek (grc)" },
  { text: "Angika (anp)" },
  { text: "Ao Naga (njo)" },
  { text: "Arabik (ar)" },
  { text: "Aragonese (an)" },
  { text: "Aramaic (arc)" },
  { text: "Araona (aro)" },
  { text: "Arapaho (arp)" },
  { text: "Arawak (arw)" },
  { text: "Armenian (hy)" },
  { text: "Aromanian (rup)" },
  { text: "Arpitan (frp)" },
  { text: "Assamese (as)" },
  { text: "Asturian (ast)" },
  { text: "Asu (asa)" },
  { text: "Atsam (cch)" },
  { text: "Australian English (en_AU)" },
  { text: "Austrian German (de_AT)" },
  { text: "Avaric (av)" },
  { text: "Avestan (ae)" },
  { text: "Awadhi (awa)" },
  { text: "Aymara (ay)" },
  { text: "Azerbaijani (az)" },
  { text: "Badaga (bfq)" },
  { text: "Bafia (ksf)" },
  { text: "Bafut (bfd)" },
  { text: "Bakhtiari (bqi)" },
  { text: "Balinese (ban)" },
  { text: "Baluchi (bal)" },
  { text: "Bambara (bm)" },
  { text: "Bamun (bax)" },
  { text: "Banjar (bjn)" },
  { text: "Basaa (bas)" },
  { text: "Bashkir (ba)" },
  { text: "Basque (eu)" },
  { text: "Batak Toba (bbc)" },
  { text: "Bavarian (bar)" },
  { text: "Beja (bej)" },
  { text: "Belarus kasa (be)" },
  { text: "Bemba (bem)" },
  { text: "Bena (bez)" },
  { text: "Bengali kasa (bn)" },
  { text: "Betawi (bew)" },
  { text: "Bɛɛmis kasa (my)" },
  { text: "Bhojpuri (bho)" },
  { text: "Bikol (bik)" },
  { text: "Bini (bin)" },
  { text: "Bishnupriya (bpy)" },
  { text: "Bislama (bi)" },
  { text: "Blin (byn)" },
  { text: "Blissymbols (zbl)" },
  { text: "Bodo (brx)" },
  { text: "Borɔfo (en)" },
  { text: "Bosnian (bs)" },
  { text: "Bɔlgeria kasa (bg)" },
  { text: "Brahui (brh)" },
  { text: "Braj (bra)" },
  { text: "Brazilian Portuguese (pt_BR)" },
  { text: "Breton (br)" },
  { text: "British English (en_GB)" },
  { text: "Buginese (bug)" },
  { text: "Bulu (bum)" },
  { text: "Buriat (bua)" },
  { text: "Caddo (cad)" },
  { text: "Cajun French (frc)" },
  { text: "Canadian English (en_CA)" },
  { text: "Canadian French (fr_CA)" },
  { text: "Cantonese (yue)" },
  { text: "Capiznon (cps)" },
  { text: "Carib (car)" },
  { text: "Catalan (ca)" },
  { text: "Cayuga (cay)" },
  { text: "Cebuano (ceb)" },
  { text: "Central Atlas Tamazight (tzm)" },
  { text: "Central Dusun (dtp)" },
  { text: "Central Kurdish (ckb)" },
  { text: "Central Yupik (esu)" },
  { text: "Chadian Arabic (shu)" },
  { text: "Chagatai (chg)" },
  { text: "Chamorro (ch)" },
  { text: "Chechen (ce)" },
  { text: "Cherokee (chr)" },
  { text: "Cheyenne (chy)" },
  { text: "Chibcha (chb)" },
  { text: "Chiga (cgg)" },
  { text: "Chimborazo Highland Quichua (qug)" },
  { text: "Chinook Jargon (chn)" },
  { text: "Chipewyan (chp)" },
  { text: "Choctaw (cho)" },
  { text: "Church Slavic (cu)" },
  { text: "Chuukese (chk)" },
  { text: "Chuvash (cv)" },
  { text: "Classical Newari (nwc)" },
  { text: "Classical Syriac (syc)" },
  { text: "Colognian (ksh)" },
  { text: "Comorian (swb)" },
  { text: "Congo Swahili (swc)" },
  { text: "Coptic (cop)" },
  { text: "Cornish (kw)" },
  { text: "Corsican (co)" },
  { text: "Cree (cr)" },
  { text: "Creek (mus)" },
  { text: "Crimean Turkish (crh)" },
  { text: "Croatian (hr)" },
  { text: "Dakota (dak)" },
  { text: "Danish (da)" },
  { text: "Dargwa (dar)" },
  { text: "Dazaga (dzg)" },
  { text: "Delaware (del)" },
  { text: "Dɛɛkye (nl)" },
  { text: "Dinka (din)" },
  { text: "Divehi (dv)" },
  { text: "Dogri (doi)" },
  { text: "Dogrib (dgr)" },
  { text: "Duala (dua)" },
  { text: "Dyula (dyu)" },
  { text: "Dzongkha (dz)" },
  { text: "Eastern Frisian (frs)" },
  { text: "Efik (efi)" },
  { text: "Egyptian Arabic (arz)" },
  { text: "Ekajuk (eka)" },
  { text: "Elamite (elx)" },
  { text: "Embu (ebu)" },
  { text: "Emilian (egl)" },
  { text: "Erzya (myv)" },
  { text: "Esperanto (eo)" },
  { text: "Estonian (et)" },
  { text: "European Portuguese (pt_PT)" },
  { text: "European Spanish (es_ES)" },
  { text: "Ewe (ee)" },
  { text: "Ewondo (ewo)" },
  { text: "Extremaduran (ext)" },
  { text: "Fang (fan)" },
  { text: "Fanti (fat)" },
  { text: "Faroese (fo)" },
  { text: "Fiji Hindi (hif)" },
  { text: "Fijian (fj)" },
  { text: "Filipino (fil)" },
  { text: "Finnish (fi)" },
  { text: "Flemish (nl_BE)" },
  { text: "Fon (fon)" },
  { text: "Frafra (gur)" },
  { text: "Frɛnkye (fr)" },
  { text: "Friulian (fur)" },
  { text: "Fulah (ff)" },
  { text: "Ga (gaa)" },
  { text: "Gagauz (gag)" },
  { text: "Galician (gl)" },
  { text: "Gan Chinese (gan)" },
  { text: "Ganda (lg)" },
  { text: "Gayo (gay)" },
  { text: "Gbaya (gba)" },
  { text: "Geez (gez)" },
  { text: "Georgian (ka)" },
  { text: "Gheg Albanian (aln)" },
  { text: "Ghomala (bbj)" },
  { text: "Gilaki (glk)" },
  { text: "Gilbertese (gil)" },
  { text: "Goan Konkani (gom)" },
  { text: "Gondi (gon)" },
  { text: "Gorontalo (gor)" },
  { text: "Gothic (got)" },
  { text: "Grebo (grb)" },
  { text: "Greek kasa (el)" },
  { text: "Guarani (gn)" },
  { text: "Gujarati (gu)" },
  { text: "Gusii (guz)" },
  { text: "Gwichʼin (gwi)" },
  { text: "Gyaaman (de)" },
  { text: "Gyabanis kasa (jv)" },
  { text: "Gyapan kasa (ja)" },
  { text: "Haida (hai)" },
  { text: "Haitian (ht)" },
  { text: "Hakka Chinese (hak)" },
  { text: "Hangri kasa (hu)" },
  { text: "Hausa (ha)" },
  { text: "Hawaiian (haw)" },
  { text: "Hebrew (he)" },
  { text: "Herero (hz)" },
  { text: "Hiligaynon (hil)" },
  { text: "Hindi (hi)" },
  { text: "Hiri Motu (ho)" },
  { text: "Hittite (hit)" },
  { text: "Hmong (hmn)" },
  { text: "Hupa (hup)" },
  { text: "Iban (iba)" },
  { text: "Ibibio (ibb)" },
  { text: "Icelandic (is)" },
  { text: "Ido (io)" },
  { text: "Igbo (ig)" },
  { text: "Iloko (ilo)" },
  { text: "Inari Sami (smn)" },
  { text: "Indonihyia kasa (id)" },
  { text: "Ingrian (izh)" },
  { text: "Ingush (inh)" },
  { text: "Interlingua (ia)" },
  { text: "Interlingue (ie)" },
  { text: "Inuktitut (iu)" },
  { text: "Inupiaq (ik)" },
  { text: "Irish (ga)" },
  { text: "Italy kasa (it)" },
  { text: "Jamaican Creole English (jam)" },
  { text: "Jju (kaj)" },
  { text: "Jola-Fonyi (dyo)" },
  { text: "Judeo-Arabic (jrb)" },
  { text: "Judeo-Persian (jpr)" },
  { text: "Jutish (jut)" },
  { text: "Kabardian (kbd)" },
  { text: "Kabuverdianu (kea)" },
  { text: "Kabyle (kab)" },
  { text: "Kachin (kac)" },
  { text: "Kaingang (kgp)" },
  { text: "Kako (kkj)" },
  { text: "Kalaallisut (kl)" },
  { text: "Kalenjin (kln)" },
  { text: "Kalmyk (xal)" },
  { text: "Kamba (kam)" },
  { text: "Kambodia kasa (km)" },
  { text: "Kanembu (kbl)" },
  { text: "Kannada (kn)" },
  { text: "Kanuri (kr)" },
  { text: "Kara-Kalpak (kaa)" },
  { text: "Karachay-Balkar (krc)" },
  { text: "Karelian (krl)" },
  { text: "Kashmiri (ks)" },
  { text: "Kashubian (csb)" },
  { text: "Kawi (kaw)" },
  { text: "Kazakh (kk)" },
  { text: "Kenyang (ken)" },
  { text: "Khasi (kha)" },
  { text: "Khotanese (kho)" },
  { text: "Khowar (khw)" },
  { text: "Kikuyu (ki)" },
  { text: "Kimbundu (kmb)" },
  { text: "Kinaray-a (krj)" },
  { text: "Kirmanjki (kiu)" },
  { text: "Klingon (tlh)" },
  { text: "Kom (bkm)" },
  { text: "Komi (kv)" },
  { text: "Komi-Permyak (koi)" },
  { text: "Kongo (kg)" },
  { text: "Konkani (kok)" },
  { text: "Korea kasa (ko)" },
  { text: "Koro (kfo)" },
  { text: "Kosraean (kos)" },
  { text: "Kotava (avk)" },
  { text: "Koyra Chiini (khq)" },
  { text: "Koyraboro Senni (ses)" },
  { text: "Kpelle (kpe)" },
  { text: "Krio (kri)" },
  { text: "Kuanyama (kj)" },
  { text: "Kumyk (kum)" },
  { text: "Kurdish (ku)" },
  { text: "Kurukh (kru)" },
  { text: "Kutenai (kut)" },
  { text: "Kwasio (nmg)" },
  { text: "Kyaena kasa (zh)" },
  { text: "Kyɛk kasa (cs)" },
  { text: "Kyrgyz (ky)" },
  { text: "Kʼicheʼ (quc)" },
  { text: "Ladino (lad)" },
  { text: "Lahnda (lah)" },
  { text: "Lakota (lkt)" },
  { text: "Lamba (lam)" },
  { text: "Langi (lag)" },
  { text: "Lao (lo)" },
  { text: "Latgalian (ltg)" },
  { text: "Latin (la)" },
  { text: "Latin American Spanish (es_419)" },
  { text: "Latvian (lv)" },
  { text: "Laz (lzz)" },
  { text: "Lezghian (lez)" },
  { text: "Ligurian (lij)" },
  { text: "Limburgish (li)" },
  { text: "Lingala (ln)" },
  { text: "Lingua Franca Nova (lfn)" },
  { text: "Literary Chinese (lzh)" },
  { text: "Lithuanian (lt)" },
  { text: "Livonian (liv)" },
  { text: "Lojban (jbo)" },
  { text: "Lombard (lmo)" },
  { text: "Low German (nds)" },
  { text: "Lower Silesian (sli)" },
  { text: "Lower Sorbian (dsb)" },
  { text: "Lozi (loz)" },
  { text: "Luba-Katanga (lu)" },
  { text: "Luba-Lulua (lua)" },
  { text: "Luiseno (lui)" },
  { text: "Lule Sami (smj)" },
  { text: "Lunda (lun)" },
  { text: "Luo (luo)" },
  { text: "Luxembourgish (lb)" },
  { text: "Luyia (luy)" },
  { text: "Maba (mde)" },
  { text: "Macedonian (mk)" },
  { text: "Machame (jmc)" },
  { text: "Madurese (mad)" },
  { text: "Mafa (maf)" },
  { text: "Magahi (mag)" },
  { text: "Main-Franconian (vmf)" },
  { text: "Maithili (mai)" },
  { text: "Makasar (mak)" },
  { text: "Makhuwa-Meetto (mgh)" },
  { text: "Makonde (kde)" },
  { text: "Malagasy (mg)" },
  { text: "Malay kasa (ms)" },
  { text: "Malayalam (ml)" },
  { text: "Maltese (mt)" },
  { text: "Manchu (mnc)" },
  { text: "Mandar (mdr)" },
  { text: "Mandingo (man)" },
  { text: "Manipuri (mni)" },
  { text: "Manx (gv)" },
  { text: "Maori (mi)" },
  { text: "Mapuche (arn)" },
  { text: "Marathi (mr)" },
  { text: "Mari (chm)" },
  { text: "Marshallese (mh)" },
  { text: "Marwari (mwr)" },
  { text: "Masai (mas)" },
  { text: "Mazanderani (mzn)" },
  { text: "Medumba (byv)" },
  { text: "Mende (men)" },
  { text: "Mentawai (mwv)" },
  { text: "Meru (mer)" },
  { text: "Metaʼ (mgo)" },
  { text: "Mexican Spanish (es_MX)" },
  { text: "Micmac (mic)" },
  { text: "Middle Dutch (dum)" },
  { text: "Middle English (enm)" },
  { text: "Middle French (frm)" },
  { text: "Middle High German (gmh)" },
  { text: "Middle Irish (mga)" },
  { text: "Min Nan Chinese (nan)" },
  { text: "Minangkabau (min)" },
  { text: "Mingrelian (xmf)" },
  { text: "Mirandese (mwl)" },
  { text: "Mizo (lus)" },
  { text: "Modern Standard Arabic (ar_001)" },
  { text: "Mohawk (moh)" },
  { text: "Moksha (mdf)" },
  { text: "Moldavian (ro_MD)" },
  { text: "Mongo (lol)" },
  { text: "Mongolian (mn)" },
  { text: "Morisyen (mfe)" },
  { text: "Moroccan Arabic (ary)" },
  { text: "Mossi (mos)" },
  { text: "Multiple Languages (mul)" },
  { text: "Mundang (mua)" },
  { text: "Muslim Tat (ttt)" },
  { text: "Myene (mye)" },
  { text: "Nama (naq)" },
  { text: "Nauru (na)" },
  { text: "Navajo (nv)" },
  { text: "Ndonga (ng)" },
  { text: "Neapolitan (nap)" },
  { text: "Newari (new)" },
  { text: "Nɛpal kasa (ne)" },
  { text: "Ngambay (sba)" },
  { text: "Ngiemboon (nnh)" },
  { text: "Ngomba (jgo)" },
  { text: "Nheengatu (yrl)" },
  { text: "Nias (nia)" },
  { text: "Niuean (niu)" },
  { text: "No linguistic content (zxx)" },
  { text: "Nogai (nog)" },
  { text: "North Ndebele (nd)" },
  { text: "Northern Frisian (frr)" },
  { text: "Northern Sami (se)" },
  { text: "Northern Sotho (nso)" },
  { text: "Norwegian (no)" },
  { text: "Norwegian Bokmål (nb)" },
  { text: "Norwegian Nynorsk (nn)" },
  { text: "Novial (nov)" },
  { text: "Nuer (nus)" },
  { text: "Nyamwezi (nym)" },
  { text: "Nyanja (ny)" },
  { text: "Nyankole (nyn)" },
  { text: "Nyasa Tonga (tog)" },
  { text: "Nyoro (nyo)" },
  { text: "Nzima (nzi)" },
  { text: "NʼKo (nqo)" },
  { text: "Occitan (oc)" },
  { text: "Ojibwa (oj)" },
  { text: "Old English (ang)" },
  { text: "Old French (fro)" },
  { text: "Old High German (goh)" },
  { text: "Old Irish (sga)" },
  { text: "Old Norse (non)" },
  { text: "Old Persian (peo)" },
  { text: "Old Provençal (pro)" },
  { text: "Oriya (or)" },
  { text: "Oromo (om)" },
  { text: "Osage (osa)" },
  { text: "Ossetic (os)" },
  { text: "Ottoman Turkish (ota)" },
  { text: "Pahlavi (pal)" },
  { text: "Palatine German (pfl)" },
  { text: "Palauan (pau)" },
  { text: "Pali (pi)" },
  { text: "Pampanga (pam)" },
  { text: "Pangasinan (pag)" },
  { text: "Papiamento (pap)" },
  { text: "Pashto (ps)" },
  { text: "Pennsylvania German (pdc)" },
  { text: "Pɛɛhyia kasa (fa)" },
  { text: "Phoenician (phn)" },
  { text: "Picard (pcd)" },
  { text: "Piedmontese (pms)" },
  { text: "Plautdietsch (pdt)" },
  { text: "Pohnpeian (pon)" },
  { text: "Pontic (pnt)" },
  { text: "Pɔland kasa (pl)" },
  { text: "Pɔɔtugal kasa (pt)" },
  { text: "Prussian (prg)" },
  { text: "Pungyabi kasa (pa)" },
  { text: "Quechua (qu)" },
  { text: "Rahyia kasa (ru)" },
  { text: "Rajasthani (raj)" },
  { text: "Rapanui (rap)" },
  { text: "Rarotongan (rar)" },
  { text: "Rewanda kasa (rw)" },
  { text: "Riffian (rif)" },
  { text: "Romagnol (rgn)" },
  { text: "Romansh (rm)" },
  { text: "Romany (rom)" },
  { text: "Rombo (rof)" },
  { text: "Romenia kasa (ro)" },
  { text: "Root (root)" },
  { text: "Rotuman (rtm)" },
  { text: "Roviana (rug)" },
  { text: "Rundi (rn)" },
  { text: "Rusyn (rue)" },
  { text: "Rwa (rwk)" },
  { text: "Saho (ssy)" },
  { text: "Sakha (sah)" },
  { text: "Samaritan Aramaic (sam)" },
  { text: "Samburu (saq)" },
  { text: "Samoan (sm)" },
  { text: "Samogitian (sgs)" },
  { text: "Sandawe (sad)" },
  { text: "Sango (sg)" },
  { text: "Sangu (sbp)" },
  { text: "Sanskrit (sa)" },
  { text: "Santali (sat)" },
  { text: "Sardinian (sc)" },
  { text: "Sasak (sas)" },
  { text: "Sassarese Sardinian (sdc)" },
  { text: "Saterland Frisian (stq)" },
  { text: "Saurashtra (saz)" },
  { text: "Scots (sco)" },
  { text: "Scottish Gaelic (gd)" },
  { text: "Selayar (sly)" },
  { text: "Selkup (sel)" },
  { text: "Sena (seh)" },
  { text: "Seneca (see)" },
  { text: "Serbian (sr)" },
  { text: "Serbo-Croatian (sh)" },
  { text: "Serer (srr)" },
  { text: "Seri (sei)" },
  { text: "Shambala (ksb)" },
  { text: "Shan (shn)" },
  { text: "Shona (sn)" },
  { text: "Sichuan Yi (ii)" },
  { text: "Sicilian (scn)" },
  { text: "Sidamo (sid)" },
  { text: "Siksika (bla)" },
  { text: "Silesian (szl)" },
  { text: "Simplified Chinese (zh_Hans)" },
  { text: "Sindhi (sd)" },
  { text: "Sinhala (si)" },
  { text: "Skolt Sami (sms)" },
  { text: "Slave (den)" },
  { text: "Slovak (sk)" },
  { text: "Slovenian (sl)" },
  { text: "Soga (xog)" },
  { text: "Sogdien (sog)" },
  { text: "Somalia kasa (so)" },
  { text: "Soninke (snk)" },
  { text: "South Azerbaijani (azb)" },
  { text: "South Ndebele (nr)" },
  { text: "Southern Altai (alt)" },
  { text: "Southern Sami (sma)" },
  { text: "Southern Sotho (st)" },
  { text: "Spain kasa (es)" },
  { text: "Sranan Tongo (srn)" },
  { text: "Standard Moroccan Tamazight (zgh)" },
  { text: "Sukuma (suk)" },
  { text: "Sumerian (sux)" },
  { text: "Sundanese (su)" },
  { text: "Susu (sus)" },
  { text: "Swahili (sw)" },
  { text: "Swati (ss)" },
  { text: "Sweden kasa (sv)" },
  { text: "Swiss French (fr_CH)" },
  { text: "Swiss German (gsw)" },
  { text: "Swiss High German (de_CH)" },
  { text: "Syriac (syr)" },
  { text: "Tachelhit (shi)" },
  { text: "Taeland kasa (th)" },
  { text: "Tagalog (tl)" },
  { text: "Tahitian (ty)" },
  { text: "Taita (dav)" },
  { text: "Tajik (tg)" },
  { text: "Talysh (tly)" },
  { text: "Tamashek (tmh)" },
  { text: "Tamil kasa (ta)" },
  { text: "Taroko (trv)" },
  { text: "Tasawaq (twq)" },
  { text: "Tatar (tt)" },
  { text: "Telugu (te)" },
  { text: "Tereno (ter)" },
  { text: "Teso (teo)" },
  { text: "Tetum (tet)" },
  { text: "Tɛɛki kasa (tr)" },
  { text: "Tibetan (bo)" },
  { text: "Tigre (tig)" },
  { text: "Tigrinya (ti)" },
  { text: "Timne (tem)" },
  { text: "Tiv (tiv)" },
  { text: "Tlingit (tli)" },
  { text: "Tok Pisin (tpi)" },
  { text: "Tokelau (tkl)" },
  { text: "Tongan (to)" },
  { text: "Tornedalen Finnish (fit)" },
  { text: "Traditional Chinese (zh_Hant)" },
  { text: "Tsakhur (tkr)" },
  { text: "Tsakonian (tsd)" },
  { text: "Tsimshian (tsi)" },
  { text: "Tsonga (ts)" },
  { text: "Tswana (tn)" },
  { text: "Tulu (tcy)" },
  { text: "Tumbuka (tum)" },
  { text: "Tunisian Arabic (aeb)" },
  { text: "Turkmen (tk)" },
  { text: "Turoyo (tru)" },
  { text: "Tuvalu (tvl)" },
  { text: "Tuvinian (tyv)" },
  { text: "Twi (tw)" },
  { text: "Tyap (kcg)" },
  { text: "Udmurt (udm)" },
  { text: "Ugaritic (uga)" },
  { text: "Ukren kasa (uk)" },
  { text: "Umbundu (umb)" },
  { text: "Unknown Language (und)" },
  { text: "Upper Sorbian (hsb)" },
  { text: "Urdu kasa (ur)" },
  { text: "Uyghur (ug)" },
  { text: "Uzbek (uz)" },
  { text: "Vai (vai)" },
  { text: "Venda (ve)" },
  { text: "Venetian (vec)" },
  { text: "Veps (vep)" },
  { text: "Viɛtnam kasa (vi)" },
  { text: "Volapük (vo)" },
  { text: "Võro (vro)" },
  { text: "Votic (vot)" },
  { text: "Vunjo (vun)" },
  { text: "Walloon (wa)" },
  { text: "Walser (wae)" },
  { text: "Waray (war)" },
  { text: "Warlpiri (wbp)" },
  { text: "Washo (was)" },
  { text: "Wayuu (guc)" },
  { text: "Welsh (cy)" },
  { text: "West Flemish (vls)" },
  { text: "Western Frisian (fy)" },
  { text: "Western Mari (mrj)" },
  { text: "Wolaytta (wal)" },
  { text: "Wolof (wo)" },
  { text: "Wu Chinese (wuu)" },
  { text: "Xhosa (xh)" },
  { text: "Xiang Chinese (hsn)" },
  { text: "Yangben (yav)" },
  { text: "Yao (yao)" },
  { text: "Yapese (yap)" },
  { text: "Yemba (ybb)" },
  { text: "Yiddish (yi)" },
  { text: "Yoruba (yo)" },
  { text: "Zapotec (zap)" },
  { text: "Zarma (dje)" },
  { text: "Zaza (zza)" },
  { text: "Zeelandic (zea)" },
  { text: "Zenaga (zen)" },
  { text: "Zhuang (za)" },
  { text: "Zoroastrian Dari (gbz)" },
  { text: "Zulu (zu)" },
  { text: "Zuni (zun)" }  
]
const categorysList = [
  { text: "Category-1" },
  { text: "Category-2" },
  { text: "Category-3" },
  { text: "Category-4" },
  { text: "Category-5" }
]
const agesList = [
  { text: "0+" },
  { text: "6+" },
  { text: "12+" },
  { text: "16+" },
  { text: "18+" }
]

const countrysdatalist = new DataList(
  "countries",
  "countries-selected",
  "countries-input",
  "countries-ul",	
  countriesList
);
countrysdatalist.create();
countrysdatalist.addListeners(countrysdatalist);

const langsdatalist = new DataList(
  "languages",
  "languages-selected",
  "languages-input",
  "languages-ul",	
  langsList
);
langsdatalist.create();
langsdatalist.addListeners(langsdatalist);

const categorydatalist = new DataList(
  "category",
  "category-selected",
  "category-input",
  "category-ul",	
  categorysList
);
categorydatalist.create();
categorydatalist.addListeners(categorydatalist);

const agedatalist = new DataList(
  "age",
  "age-selected",
  "age-input",
  "age-ul",	
  agesList
);
agedatalist.create();
agedatalist.addListeners(agedatalist);

//checkThisLink
function checkThisLink($this, outputId){
  let container = $this.parentElement.parentElement,
      allItems = container.querySelectorAll('.js-item'),
      thisValue = $this.textContent;
  Array.prototype.forEach.call(allItems, function(e) {
    e.classList.remove('active');
  });
  $this.classList.add('active');  
  document.getElementById(outputId).textContent = thisValue;  
}

//popup open
function openPopup(popupId){
  document.getElementById(popupId).style.display = 'block';
}
function closePopup(popupId){
  document.getElementById(popupId).style.display = 'none';
}

//letter counter
function countedLetterd($this, limit){
  //let valLeng = $this.value.length;
  console.log($this.value.length)
  $this.previousElementSibling.getElementsByTagName('span')[0].textContent = $this.value.length;
  if($this.value.length > limit){
    $this.previousElementSibling.classList.add('error');
  } else{
    $this.previousElementSibling.classList.remove('error');
  }
}

//limp block
(function(){
  let container = document.getElementById('js-limp-container'),
      elem = document.getElementById('js-limp-blc');  
  function Ascroll(){    
    let windowScrollPos = window.pageYOffset,
        rowTop = container.getBoundingClientRect().top;
    if(rowTop < (128 - 50) ){
      elem.style.top = windowScrollPos - 50 + 'px';
    } else{
      elem.style.top = 0;
    }
  }
  if(document.getElementById('js-limp-container')){
    window.addEventListener('scroll', Ascroll, false);
  }  
})()

//manag bot shem
function swichOnSection(idName){
  document.getElementById(idName).classList.add('active');
}
function swichOffSection(idName){
  document.getElementById(idName).classList.remove('active');
}