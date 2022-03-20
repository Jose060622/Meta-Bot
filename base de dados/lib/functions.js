const fs = require('fs')
const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const CFonts  = require('cfonts')

const uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'))
corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const simih = async (text) => {
	try {
		const sami = await fetch(`https://tobz-api.herokuapp.com/api/simsimi?text=${text.slice(2)}`, {method: 'GET'})
		const res = await sami.json()
		return res.result
	} catch {
		return 'Simi ga tau kak'
	}
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		});
		return res.data;
	} catch (e) {
		console.log(`Error : ${e}`);
	}
};

const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase();
};

const getGroupAdmins = (participants) => {
	admins = [];
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : '';
	}
	return admins;
};

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const spinner = { 
"interval": 120,
"frames": [
"C",
"Co",
"Con",
"Cone",
"Conec",
"Conect", 
"Conecta",
"Conectan",
"Conectand", 
"Conectando",
"Conectando a",
"Conectando a G",
"Conectando a Gk",
"Conectando a GkB",
"Conectando a GkBo",
"Conectando a GkBot",
"Conectando a GkBotz",
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: `${cor1}`, succeedColor: `${cor1}`, spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
	const log = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('GkBotz'), {
    font: 'block',
    align: 'center',
    colors: [`${cor1}`,`${cor2}`],
    lineHeight: 1
  });
             
module.exports = {
getBuffer,
h2k,
generateMessageID, 
getGroupAdmins, 
getRandom, 
start, 
info, 
success, 
banner, 
close, 
log
}
