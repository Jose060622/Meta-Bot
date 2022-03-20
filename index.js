/********** MÓDULOS NPM **********/
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const chalk = require('chalk')
const request = require('request')
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const qrkode = require("qrcode")
const crypto = require('crypto');
const CryptoJS = require("crypto-js");
const axios = require('axios').default;
const http = require('http');
const util = require('util');
const yts = require('yt-search')
const ytdl =require('ytdl-core')
const fetch = require('node-fetch')
const { EmojiAPI } = require('emoji-api')
const emoji = new EmojiAPI
const encodeUrl = require('encodeurl')
const googleImage = require('g-i-s')
const os = require('os');
const ggs = require('google-it')
const hx = require("hxz-api")
const translate = require('@vitalets/google-translate-api')
const wikipedia = require('./mess/wiki')
const { Ttdl } = require('./mess/tiktokPost_dl')
const { igDl } = require('./mess/instagramPost_dl')
const { yta, ytv } = require('./mess/yt_download');
const brainly = require('brainly-scraper')
const { error } = require("qrcode-terminal")
const term = require('terminal-kit').terminal
const figlet = require('figlet')
const dtod = "6281398860278@s.whatsapp.net"
const otod = "6282138919347@s.whatsapp.net"

/********** ARQUIVOS **********/
const Exif = require('./base de dados/data/exif');
const { validmove, setGame } = require('./base de dados/lib/tictactoe')
const exif = new Exif();
const { addMetadata } = require('./base de dados/lib/exif.js')
const { webp2gifFile } = require("./base de dados/lib/gif.js")
const { help } = require('./base de dados/database/help/help')
const { linguagem } = require('./base de dados/datauser/mess')
const { lirikLagu } = require('./base de dados/lib/lirik.js')
const {convertSticker} = require("./base de dados/lib/swm.js")
const { mediafireDl } = require('./base de dados/lib/mediafire.js')
const {dafontDown,dafontSearch } = require('./base de dados/lib/dafont')
const {webp2mp4File} = require('./base de dados/lib/webp2mp4')
const totalhit = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))
const mundohentai = require('./base de dados/lib/mundohentai')
const cnn = require('./base de dados/lib/cnn.js')
const scommand = JSON.parse(fs.readFileSync('./base de dados/lib/scommand.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const { createExif } = require('./base de dados/lib/fetcher.js')
const { smsg, sleep, formatp, tanggal, formatDate, getTime, isUrl, clockString, runtime, fetchJson, jsonformat, delay, logic, generateProfilePicture, parseMenti } = require('./src/myfunc')


/********** ARQUIVOS NA NUVEM **********/
let sotoy = JSON.parse(fs.readFileSync('./base de dados/data/sotoy.json'))
let daily = JSON.parse(fs.readFileSync('./base de dados/data/diario.json'))
let prem = JSON.parse(fs.readFileSync('./base de dados/datauser/premium.json'));
let uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'));
let ban = JSON.parse(fs.readFileSync('./base de dados/datauser/banned.json'));
let _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'));
let _registered = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'));
let welcome = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/welcome.json'));
let antiflod = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/_antiflod.json'));
let viewchat = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/viewchat.json'));
let _leveling = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/leveling.json'));
let antilink = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antilink.json'));
let antidel = JSON.parse(fs.readFileSync("./src/antidelete.json"));
let antifaker = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antifaker.json'));
let palavrão = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/palavrão.json'));
let autconversa = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/autconversa.json'));
let palavra = JSON.parse(fs.readFileSync('./base de dados/lib/palavras.json'))
let _informe = JSON.parse(fs.readFileSync('./base de dados/lib/informe.json'));
let nsfw = JSON.parse(fs.readFileSync('./base de dados/lib/nsfw.json'))
let _solicitar = JSON.parse(fs.readFileSync('./base de dados/lib/solicitar.json'));
img2 = fs.readFileSync("./base de dados/lib/bot/fotos/shenlong.jpg");
img3 = fs.readFileSync("./base de dados/lib/bot/fotos/welcome.mp4");


//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
const infos = JSON.parse(fs.readFileSync('./settings.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot, autobio} = infos

/********** CONST, (N MEXA AQUI) **********/
const blocked = [];
self = false
cdd = "480000"
ll = "\`\`\`"
crtt = "Juego de vela"
baterai = 'no detectado'
charging = 'no detectado'
emoji_bot = ".i."
lol = "AdvancedTs"
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


/********** VCARD DO DONO **********/
const vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:Jose\n`
+ `ORG:MetaBot;\n`
+ `TEL;type=CELL;type=VOICE;waid=569444511822:+56944451822\n`
+ `END:VCARD`

/********** CONST TIC-TAC-TOE **********/
const tictactoe = JSON.parse(fs.readFileSync('./base de dados/ttt/TTTconfig/tictcotacto.json'));
const { ttthelp } = require('./base de dados/ttt/TTTconfig/ttthelp');
const { tttme } = require('./base de dados/ttt/TTTconfig/tttme');
var tttset = require('./base de dados/ttt/TTTconfig/tttset.json');
var esp = require('./base de dados/ttt/TTTconfig/tttframe.json');

/*** WHATSAPP CONEXION *******************/
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification, relayWAMessage } = require('@adiwajshing/baileys');
const simple = require('./base de dados/lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const client = new WAConnection()
/********** CORES **********/
const { color, bgcolor } = require('./base de dados/lib/color');

/********** ANTI FLOD **********/
const { isFiltered, addFilter } = require('./base de dados/lib/antispam')

/********** LIMIT TTT **********/
const { addLimit, getLimit } = require('./base de dados/lib/limit.js')

/********** FUCTION PLAY **********/
const { y2mateV, y2mateA }= require('./base de dados/lib/y2mate.js')
/********* SCRAPER ***************/
const {
	ytDonlodMp3,
	ytDonlodMp4,
	ytPlayMp3,
	ytPlayMp4,
	ytSearch
   } = require('./base de dados/lib/youtube')
const {
	ytMp4,
	ytMp3,
	ytPlay
   } = require('./base de dados/lib/youtubev2')

/********** CONSTS **********/
const { erroCmd, erroOwner, ts, semPremium} = require('./base de dados/lib/bot/arquivos/respon');

/********** FUNÇÕES **********/
const { getBuffer, simih, getJson, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, log } = require('./base de dados/lib/functions');

/********** FUCTION LEVEL **********/
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./base de dados/lib/leveling.js')

/********** FUCTION TTT **********/
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./base de dados/lib/tictactoe.js')

/********** FUCTION REGISTRO **********/
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./base de dados/lib/register.js');
const { url } = require('inspector');
const { env, listenerCount, title } = require('process');
const { filterFormats } = require('ytdl-core');
const { readJson } = require('fs-extra');
const { format } = require('path/posix');
const { Buffer } = require('buffer');
const youtubeiJs = require('youtubei.js');
const { err } = require('fx-api');
const { Chalk } = require('cfonts/lib/Chalk');

/********** FUCTION DINHEIRO **********/
const addATM = (sender, pushname) => {
const obj = {id: sender, Nombre: pushname, uang : 0}
uang.push(obj)
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}

const isLinkyt = (url) => {
	return url.match(
	 new RegExp(
	   /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/,
	   "gi"
	 )
   );
 };


/********** FUCTION DINHEIRO **********/
const getNameDinheiro = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].Nombre
}
}
//************ cpu *****************/
const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

/********** FUCTION DINHEIRO **********/
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}

/********** FUCTION DINHEIRO **********/
const checkATMuser = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSIBLE" && (
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "DIFICIL" && (
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && (
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="??"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "??") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}

/********** FUCTION TEMPORIZADO **********/
function temporizado(seconds){
	function pad(s){
		return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

function horaOn(seconds){
function pad(s){
	return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}

/********** CONEXÃO DO QR CODE **********/
async function starts() {
	const tobi = new WAConnection()
tobi.logger.level = 'warn'
tobi.version = [2, 2143, 3];
tobi.browserDescription = [ 'GkBotz', 'Microsoft edge', '3.0' ]
await sleep(1)
tobi.on('qr', () => {
console.log(color('|TRM|'), chalk.redBright('Escanea el código QR...'))
})
fs.existsSync('./qr.json') && tobi.loadAuthInfo('./qr.json')

tobi.on('open', () => {
console.log(color('|TRM|'), chalk.redBright('Bot conectado, escriba .menu en Whatsapp..!!'))
}) 

console.log(banner.string)
console.log(color(`╔═════════════════════════╗` ,'white'))
console.log(color(`║ ` ,'white'), color(`✹ 𝙂𝙠𝘽𝙤𝙩𝙯 ✹`, 'gold'), color(`      ║`, 'white'))
console.log(color(`╠═════════════════════════╩═════════════════════════╗`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Hola        : Usuario                        ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Estado      : Online!                        ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Bot Version : 0.1                            ║`, 'white'))
console.log(color(`║ `, 'white'), color(`[•]`, 'gold'), color(`Creado      : 10/10/21                       ║`, 'white'))
console.log(color(`╚═══════════════════════════════════════════════════╝`, 'white'))

tobi.on('chats-received', async ({ hasNewChats }) => {
console.log(color('|TRM|'), chalk.redBright(`Tienes ${tobi.chats.length} chats, nuevos chats disponibles: ${hasNewChats}`));
const unread = await tobi.loadAllUnreadMessages ();
console.log(color('|TRM|'), chalk.redBright("Tienes " + unread.length + " mensajes no leídos"));
});
tobi.on('contacts-received', () => {
console.log(color('|TRM|'), chalk.redBright('Tienes ' + Object.keys(tobi.contacts).length + ' contactos'));
})

tobi.on('credentials-error', () => {
console.log(color('|TRM|'), chalk.redBright('Hay un error en la Base de Datos!'))
})

const time2 = moment.tz('America/Santiago').format('HH:mm:ss')
tobi.setStatus(`| GkBotz | CONNECTION TIME: ${time2} | STATUS: PUBLIC-MODE`)	

tobi.on('ws-close', () => {
console.log(color('|TRM|'), chalk.redBright('Conexión perdida, intentando volver a conectar.'))
})

tobi.on('close', async () => {
console.log(color('|TRM|'), color('Desconectado.', 'red'))
tobi.setStatus(`| GkBotz | Desconectado...`)
})

await tobi.connect({ timeoutMs: 2400 * 1000 });
fs.writeFileSync('./qr.json',JSON.stringify(tobi.base64EncodedAuthInfo(), null, "\t"));


/********** WELCOME (BEM VINDO) **********/
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tangal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Lunes"; break;
         case 1: hari = "Martes"; break;
       case 2: hari = "Miercoles"; break;
     case 3: hari = "Jueves"; break;
   case 4: hari = "Viernes"; break;
 case 5: hari = "Sabado"; break;
case 6: hari = "Domingo"; break;
        }
switch(bulan) {
case 0: bulan = "Enero"; break;
        case 1: bulan = "Febrero"; break;
                 case 2: bulan = "Marzo"; break;
                          case 3: bulan = "Abri;"; break;
                                   case 4: bulan = "Mayo"; break;
                                            case 5: bulan = "Junio"; break;
                                                     case 6: bulan = "Julio"; break;
                                                              case 7: bulan = "Agosto"; break;
                                                                       case 8: bulan = "Septiembre"; break;
                                                                                case 9: bulan = "Octubre"; break;
                                                                                         case 10: bulan = "Noviembre"; break;
                                                                                                  case 11: bulan = "Diciembre"; break;
        }

var ase = new Date();
var tiempoByJose = ase.getHours();
switch(tiempoByJose){
	case 0: tiempoByJose = `Buenas noches`; break;
case 1: tiempoByJose = `Buenas noches`; break;
case 2: tiempoByJose = `Buenas noches`; break;
case 3: tiempoByJose = `Buen Dia`; break;
case 4: tiempoByJose = `Buen Dia`; break;
case 5: tiempoByJose = `Buen Dia`; break;
case 6: tiempoByJose = `Buen Dia`; break;
case 7: tiempoByJose = `Buen Dia`; break;
case 8: tiempoByJose = `Buen Dia`; break;
case 9: tiempoByJose = `Buen Dia`; break;
case 10: tiempoByJose = `Buen Dia`; break;
case 11: tiempoByJose = `buenas tardes`; break;
case 12: tiempoByJose = `buenas tardes`; break;
case 13: tiempoByJose = `buenas tardes`; break;
case 14: tiempoByJose = `buenas tardes`; break;
case 15: tiempoByJose = `buenas tardes`; break;
case 16: tiempoByJose = `buenas tardes`; break;
case 17: tiempoByJose = `buenas tardes`; break;
case 18: tiempoByJose = `Buenas noches`; break;
case 19: tiempoByJose = `Buenas noches`; break;
case 20: tiempoByJose = `Buenas noches`; break;
case 21: tiempoByJose = `Buenas noches`; break;
case 22: tiempoByJose = `Buenas noches`; break;
case 23: tiempoByJose = `Buenas noches`; break;
}
var tiempoByJose = '' + tiempoByJose;

let d = new Date();
let locale = "es";
let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
let weton = ["", "", "", "", ""][
 Math.floor((d * 1 + gmt) / 84600000) % 5
];
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
 day: "numeric",
 month: "long",
 year: "numeric",
});
let waktu = d.toLocaleDateString(locale, {
 hour: "numeric",
 minute: "numeric",
 second: "numeric",
});
let tanggal = week + " " + weton + ", " + date;

function formatDate(n, locale = 'es') {
 let d = new Date(n)
 return d.toLocaleDateString(locale, {
 weekday: 'long',
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 hour: 'numeric',
 minute: 'numeric',
 second: 'numeric' 
 })
}

//WELCOME
const sendButImg = async (id, text1, desc1, gam1, but = [], options = {}) => {
	kma = gam1;
	mhan = await tobi.prepareMessage(id, kma, MessageType.image);
	buttonMessages = {
	imageMessage: mhan.message.imageMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: 4,
	}
	tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
	
	tobi.on('group-participants-update', async (anu) => {
		try {
		var mdata = await tobi.groupMetadata(anu.jid)
		groupMet = await tobi.groupMetadata(anu.jid)
		groupMembers = groupMet.participants
		groupAdmins = getGroupAdmins(groupMembers)
		mem = anu.participants[0]
		console.log(anu)
		try {
		pp_user = await tobi.getProfilePicture(mem)
		} catch (e) {
		pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
		}
		try {
		pp_grup = await tobi.getProfilePicture(anu.jid)
		} catch (e) {
		pp_grup =
		"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
		}
		if (anu.action == "add" && mem.includes(tobi.user.jid)) {
		tobi.sendMessage(anu.jid, "*Hola yo soy el bot de este grupo, si quiere saber mis comandos puede escribir .allmenu!.*", "conversation")
		}
			  
		if (anu.action == 'add') {
		num = anu.participants[0]
		let v = tobi.contacts[num] || { notify: num.replace(/@.+/, "") }
		anu_user = v.vname || v.notify || num.split("@")[0]
		try {
		ppUrl = await tobi.getProfilePicture(num)
		} catch {
		ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
		}
		img = await getBuffer(ppUrl)
		teks = `*Hola @${anu_user}* 🤩\n\n💮 *Bienvenido(a) a : ${mdata.subject}*\n\n*Descripcion :*\n\n${mdata.desc}`
		sendButImg(anu.jid, teks, `*©Base By Tobi*`, img,but = [{buttonId:`hallo`, 
		buttonText:{displayText: 'Ya llegue perras'},type:1}], options = {contextInfo: {mentionedJid: [num]}})
		} else if (anu.action == 'remove') {
		num = anu.participants[0]
		try {
		ppUrl = await tobi.getProfilePicture(num)
		} catch {
		ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
		}
		img = await getBuffer(ppUrl)
		teks = `Se nos fue @${num.split('@')[0]}\nNi modo grupo en decadencia`
		sendButImg(anu.jid, teks, `*©Base By Tobi*`, img,but= [{buttonId: `byebye`, buttonText: {displayText: `Ojala se muera`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
		}
		if (anu.action == "promote") {
		anu_user = tobi.contacts[mem]
		num = anu.participants[0]
		var thu = await tobi.getStatus(anu.participants[0], MessageType.text)
		try {
		ppUrl = await tobi.getProfilePicture(num)
		} catch {
		ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
		}
		img = await getBuffer(ppUrl)
		teks = `                                  *[ PROMOTE DETECT ]*\n\nNuevo admin @${num.split("@")[0]}\n\n❄️ Bio : ${thu.status}\n\n⌛ Tiempo : ${moment.tz('America/Santiago').format('DD/MM HH:mm:ss')}\n\n⚡ Grupo : ${mdata.subject}`
		sendButImg(anu.jid, teks, `*©Base By Tobi*`, img,but =  [{buttonId: `admin`, buttonText: {displayText: `Fue por lastima`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
		}
		if (anu.action == "demote") {
		anu_user = tobi.contacts[mem]
		num = anu.participants[0]
		const mdata = await tobi.groupMetadata(anu.jid)
		var thu = await tobi.getStatus(anu.participants[0], MessageType.text)
		try {
		ppUrl = await tobi.getProfilePicture(num)
		} catch {
		ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
		}
		img = await getBuffer(ppUrl)
		teks = `                                  *[ DEMOTE DETECT ]*\n\nPerdio admin @${num.split("@")[0]}\n\n❄️ Bio : ${thu.status}\n\n⌛ Tiempo : ${moment.tz('America/Santiago').format('DD/MM HH:mm:ss')}\n\n⚡ Grupo : ${mdata.subject}`
		sendButImg(anu.jid, teks, `*©Base By Tobi*`,  img,but =  [{buttonId: `notadmin`, buttonText: {displayText: `Por gay`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
		}
		} catch (e) {
		console.log(e)
		}
		})
		   
		tobi.on("group-update", async (anu) => {
		metdata = await tobi.groupMetadata(anu.jid);
		if (anu.announce == "false") {
		teks = `- [ *Grupo Abierto* ] -\n\n*_El grupo fue abierto por un admin_*\n*_Ahora todos pueden hablar_*`;
		tobi.sendMessage(metdata.id, teks, MessageType.text);
		console.log(`- [ Group Opened ] - In ${metdata.subject}`);
		} else if (anu.announce == "true") {
		teks = `- [ *Grupo Cerrado* ] -\n\n*_El grupo fue cerrado por un admin_*\n*_Ahora solo los admins pueden hablar_*`;
		tobi.sendMessage(metdata.id, teks, MessageType.text);
		console.log(`- [ Group Closed ] - In ${metdata.subject}`);
		} else if (!anu.desc == "") {
		tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
		teks = `- [ *Nueva descripcion* ] -\n\nLa descrpcion del grupo ha sido modificada por el administrador @${
		anu.descOwner.split("@")[0]
		}\nNueva descripcion : ${anu.desc}`;
		tobi.sendMessage(metdata.id, teks, MessageType.text, {
		contextInfo: { mentionedJid: [tag] },
		});
		console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
		} else if (anu.restrict == "false") {
		teks = `- [ *Nuevos ajustes* ] -\n\nAhora todos los miembros pueden editar la informacion de este grupo`;
		tobi.sendMessage(metdata.id, teks, MessageType.text);
		console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
		} else if (anu.restrict == "true") {
		teks = `- [ *Nuevos ajustes* ] -\n\nAhora solo los admins pueden editar la informacion de este grupo`;
		tobi.sendMessage(metdata.id, teks, MessageType.text);
		console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ${metdata.subject}`);
		}
		})
		


/********** FUCTION ANTI CALL **********/
tobi.on('CB:action,,call', async json => {
	const callerId = json[2][0][1].from;
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m llamada detectada  = BLOCK \x1b[1;37m]')
	tobi.sendMessage(callerId, `Llamada = bloqueo`, MessageType.text)
	setTimeout(async() => {
		await tobi.blockUser(callerId, "add")
	}, 3000)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
	global.batteryLevelStr = json[2][0][1].value
	global.batterylevel = parseInt(batteryLevelStr)
	baterai = batterylevel
	if (json[2][0][1].live == 'true') cargando = true
	if (json[2][0][1].live == 'false') cargando = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
tobi.on('CB:action,,battery', json => {
	const batteryLevelStr = json[2][0][1].value
	const batterylevel = parseInt(batteryLevelStr)
	global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
	global.batteryLevelStr = json[2][0][1].value
	global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga de bateria: ' + batterylevel+'%', "blue"))
})

/************* LINGUAGEM ************/
tobi.on('chat-update', async (mek) => {
	try {
		if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
m = simple.smsg(tobi, mek)
if (mek.key.fromMe) return
global.p
global.blocked


/************** HORAS ************/
const hr = moment.tz('America/Santiago').format('HH:mm:ss')
const speedB = moment.tz('America/Santiago').format('ss')
const time = moment.tz('America/Santiago').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')
const time2 = moment().tz('America/Santiago').format('HH:mm:ss')
const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
const time3 = moment().tz('America/Santiago').format('HH:mm')

/************** TYPE DOS CONSOLE ************/
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const type = Object.keys(mek.message)[0]
/************** GETCMD ********************/
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


////////////////////////////////////////////////////////////////////////////

fakeyoi = ["_Advanced Ts_"]

//prefix
multi = true
allpref = true
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var p = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
} else {
if (allpref){
var p = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
}
}
/************** BUDY DO AUTO RESPONDER ************/
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(p) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

/************** CONST DE STRING ************/
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
var _0x56fb = ["listResponseMessage", "selectedDisplayText", "message", "", "keys", "stickerMessage", "base64", "fileSha256"];
resbutton = (type == _0x56fb[0]) ? mek[_0x56fb[2]][_0x56fb[0]][_0x56fb[1]] : _0x56fb[3];
const commandstik = Object[_0x56fb[4]](mek[_0x56fb[2]])[0] == _0x56fb[5] ? mek[_0x56fb[2]][_0x56fb[5]][_0x56fb[7]].toString(_0x56fb[6]) : _0x56fb[3]
const marker = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(comando.length + 2, budy.length)
const isCmd = body.startsWith(p)
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
var totalchat = await tobi.chats.all()
const botNumber = tobi.user.jid
const q = args.join(' ')
const me = tobi.user
const tescuk = ["0@s.whatsapp.net"]

/************** LINGUAGEM GRUPO ************/
const isGroup = from.endsWith('@g.us')
const senderr = isGroup ? mek.participant : mek.key.remoteJid
m = simple.smsg(tobi, mek)
const antibot = m.isBaileys
const sender = mek.key.fromMe ? tobi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const jid = senderr
const senderNumber = sender.split("@")[0]
const itsMe = senderNumber == botNumber
const groupMetadata = isGroup ? await tobi.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAdmins = groupAdmins.includes(sender) || false;
const isSimi = isGroup ? samih.includes(from) : false
const isBot = mek.key.fromMe ? true : false
const groupOwner = isGroup ? groupMetadata.owner : ''
const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`]
const isOwner = ownerNumber.includes(sender)
const isNsfw = isGroup ? nsfw.includes(from) : false
const isAutoSt = isGroup ? autostick.includes(from) : false
const isAntidel = isGroup ? antidel.includes(from) : false;
const isBanned = ban.includes(sender)
const bater = global.batrei[global.batrei.length - 1]
const desc = isGroup ? groupMetadata.desc : ''
const nãoMexaAquiSeuPreto = botNumber
let dia = mek.quoted ? mek.quoted.sender : mek.mentionedJid && mek.mentionedJid[0] ? mek.mentionedJid[0] : false;
const numberBot = [`${nãoMexaAquiSeuPreto}@s.whatsapp.net`]
const isBotk = numberBot.includes(sender)
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const Verived = "0@s.whatsapp.net"
idttt = []
ers1 = []
ers2 = []
gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    ers1.push(t.er1)
	    ers2.push(t.er2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    iser1 = isGroup ? ers1.includes(sender) : false
        iser2 = isGroup ? ers2.includes(sender) : false
try {
	pporang = await tobi.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		  } catch {
	pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		  }
	const ofrply = await getBuffer(pporang)
	const huy = fs.readFileSync('./src/menu.jpg')
/************** ANTIDELETE *******************/
tobi.on('message-delete', async (m) => {
if (!m.key.fromMe && !isAntidel) {
if (!m.key.remoteJid == 'status@broadcast') return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('America/Santiago').format('HH:mm:ss')
let d = new Date
let c = tobi.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = tobi.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'es'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
tobi.copyNForward(m.key.remoteJid, m.message)
tobi.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nombre : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Type : ${c3type}\`\`\`
▢ \`\`\`Fecha : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})

/************** VERIFICADO CONST ************/
const dfrply = fs.readFileSync('./base de dados/lib/bot/fotos/shenlong.jpg')
klll = fs.readFileSync('./src/rose.jpg')
var _0xa51ca7=_0xaced;function _0xaced(_0x35347c,_0x510658){var _0x5638db=_0x5638();return _0xaced=function(_0xacedac,_0x84b4fb){_0xacedac=_0xacedac-0xde;var _0x4771c3=_0x5638db[_0xacedac];return _0x4771c3;},_0xaced(_0x35347c,_0x510658);}function _0x5638(){var _0x28499c=['2222919JYYIfj','9cvEdGi','6237242HLCvJI','6790095wKqXPF','50YxYOWN','676040qLmwAs','4895608ZZThOL','5645478DDCbnf','https://chat.whatsapp.com/CaZ8OlmI59gCKizmlXqqay','api','4rddZyj','1623284FjEDCH','7rooKIT','api.zeks.me'];_0x5638=function(){return _0x28499c;};return _0x5638();}(function(_0x4f4e82,_0x737634){var _0x27b9c8=_0xaced,_0x3b02bd=_0x4f4e82();while(!![]){try{var _0x400347=-parseInt(_0x27b9c8(0xe6))/0x1+parseInt(_0x27b9c8(0xe5))/0x2*(-parseInt(_0x27b9c8(0xe9))/0x3)+-parseInt(_0x27b9c8(0xe1))/0x4+parseInt(_0x27b9c8(0xde))/0x5+parseInt(_0x27b9c8(0xe2))/0x6*(parseInt(_0x27b9c8(0xe7))/0x7)+-parseInt(_0x27b9c8(0xe0))/0x8*(-parseInt(_0x27b9c8(0xea))/0x9)+-parseInt(_0x27b9c8(0xdf))/0xa*(-parseInt(_0x27b9c8(0xeb))/0xb);if(_0x400347===_0x737634)break;else _0x3b02bd['push'](_0x3b02bd['shift']());}catch(_0x4581ef){_0x3b02bd['push'](_0x3b02bd['shift']());}}}(_0x5638,0xd9247),semApikeyPraTu='apivinz',zeks=_0xa51ca7(0xe8),sexoMuito=_0xa51ca7(0xe4),grupoDoTobi=_0xa51ca7(0xe3));
function _0x2f25(_0x3fb1df,_0x246ad3){var _0x220811=_0x2208();return _0x2f25=function(_0x2f2539,_0x435f09){_0x2f2539=_0x2f2539-0x6f;var _0x132b32=_0x220811[_0x2f2539];return _0x132b32;},_0x2f25(_0x3fb1df,_0x246ad3);}var _0x2a04bc=_0x2f25;(function(_0x7399d3,_0x449ba7){var _0x15d48c=_0x2f25,_0x51e595=_0x7399d3();while(!![]){try{var _0x18f2c0=-parseInt(_0x15d48c(0x6f))/0x1+-parseInt(_0x15d48c(0x72))/0x2+parseInt(_0x15d48c(0x70))/0x3*(-parseInt(_0x15d48c(0x76))/0x4)+parseInt(_0x15d48c(0x71))/0x5+parseInt(_0x15d48c(0x74))/0x6*(parseInt(_0x15d48c(0x77))/0x7)+parseInt(_0x15d48c(0x75))/0x8+parseInt(_0x15d48c(0x73))/0x9;if(_0x18f2c0===_0x449ba7)break;else _0x51e595['push'](_0x51e595['shift']());}catch(_0x2ec434){_0x51e595['push'](_0x51e595['shift']());}}}(_0x2208,0x441eb),mtSexo=_0x2a04bc(0x78));function _0x2208(){var _0x4f9cc1=['6rcZSOt','266105pviyuZ','282936AclatQ','1338561yUJEMm','24BUNTbF','3485544ojvDna','143648WJBYbK','328958aHAEbL','copyright\x20©\x20Jose/MetaBot','333308tOTgoW'];_0x2208=function(){return _0x4f9cc1;};return _0x2208();}

/************** PUSHNAME (Nombre) ************/
const conts = mek.key.fromMe ? tobi.user.jid : tobi.contacts[sender] || { notify: jid.replace(/@.+/, '') }
let pushname = mek.key.fromMe ? tobi.user.name : conts.notify || conts.vname || conts.name || '-'

/************** CONST ANTILINK ************/
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

/************** RECURSO DE SEGURANÇA ************/
const isWelcome = isGroup ? welcome.includes(from) : true
const isLevelingOn = isGroup ? _leveling.includes(from) : true
const isAntiLink = isGroup ? antilink.includes(from) : true
const isAntifaker = isGroup ? antifaker.includes(from) : true
const isPalavrão = isGroup ? palavrão.includes(from) : false
const isAutconversa = isGroup ? autconversa.includes(from) : false
const isAntiflod = isGroup ? antiflod.includes(from) : true
const isViewchat = isGroup ? viewchat.includes(from) : true

/************** REGISTRO ************/
const isRegistered = checkRegisteredUser(sender)
const isUser = checkRegisteredUser(sender)

/************** PREMIUM ************/
const isPremium= prem.includes(sender)

/************** EM JAPONÊS 🙂 ************/
var ase = new Date();
var pastel_de_carne = ase.getHours();
switch(pastel_de_carne){
	case 0: pastel_de_carne = `Buenas noches ${pushname}🌛`; break;
case 1: pastel_de_carne = `Buenas noches ${pushname}🌛`; break;
case 2: pastel_de_carne = `Buenas noches ${pushname}🌛`; break;
case 3: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 4: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 5: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 6: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 7: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 8: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 9: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 10: pastel_de_carne = `Buenas dias ${pushname}✨`; break;
case 11: pastel_de_carne = `hola ${pushname}🔥`; break;
case 12: pastel_de_carne = `hola ${pushname}🔥`; break;
case 13: pastel_de_carne = `hola ${pushname}🔥`; break;
case 14: pastel_de_carne = `hola ${pushname}🔥`; break;
case 15: pastel_de_carne = `hola ${pushname}🌹`; break;
case 16: pastel_de_carne = `hola ${pushname}🌹`; break;
case 17: pastel_de_carne = `hola ${pushname}🌹`; break;
case 18: pastel_de_carne = `hola ${pushname}??`; break;
case 19: pastel_de_carne = `hola ${pushname}🌛`; break;
case 20: pastel_de_carne = `hola ${pushname}🌛`; break;
case 21: pastel_de_carne = `hola ${pushname}🌛`; break;
case 22: pastel_de_carne = `hola ${pushname}🌛`; break;
case 23: pastel_de_carne = `hola ${pushname}🌛`; break;
}
var pastel_de_carne = '' + pastel_de_carne;

const timeJ = moment().tz('America/Santiago').format('HH:mm:ss')
        if(timeJ < "23:59:00"){
        var ucapanWaktu = 'Media Noche🌑'
}
        if(timeJ < "19:00:00"){
        var ucapanWaktu = 'Noche🌒'
}
        if(timeJ < "18:00:00"){
        var ucapanWaktu = 'Tarde🏝️'
}
        if(timeJ < "15:00:00"){
        var ucapanWaktu = 'Tarde☀️'
}
        if(timeJ < "11:00:00"){
        var ucapanWaktu = 'Buenos Dias🌄'
}
        if(timeJ < "05:00:00"){
        var ucapanWaktu = 'Madrugada🥴' 
}

/********** OUTRAS CONST **********/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
	text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
 console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                   tobi.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
	let media = fs.readFileSync(asw)
tobi.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});

}

const sendWebp = async(from, url) => {
	var names = Date.now() / 10000;
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, './temp' + names + '.png', async function () {
		console.log(color('done'));
		let ajg = './temp' + names + '.png'
		let palak = './temp' + names + '.webp'
		exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
			let media = fs.readFileSync(palak)
			tobi.sendMessage(from, media, MessageType.sticker,{quoted:mek})
			fs.unlinkSync(ajg)
			fs.unlinkSync(palak)
		});
	});
}

const sendSticker = (from, filename, mek) => {
tobi.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}


/********** FUCTION FOTO **********/
const sendFileFromUrl = async(link, type, options) => {
	hasil = await getBuffer(link)
tobi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
	tobi.sendMessage(from, hasil, type, options).catch(e => {
tobi.sendMessage(from, { url : link }, type, options).catch(e => {
enviar('_[ ! ] Error al descargar_')
})
})
})
})
}


 const cr = `ᶦ'ᵐ GkBotzོ`

const ftrol = {
	key : {
	participant : '0@s.whatsapp.net'
	},
	message: {
	orderMessage: {
	itemCount : -666666,
	status: null,
	surface : null,
	message: `-【𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱 𝗧𝘀】-`,
	orderTitle: null,
	thumbnail: null,
	sellerJid: '0@s.whatsapp.net'
	}
	}
	}
	
	const ftoko = {

key: {

fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./src/rose.jpg`)
},
"title": ``,
"description": `➜ 𝘗𝘳𝘦𝘧𝘪𝘹 [ . ]`,
"currencyCode": "CLP",
"priceAmount1000": "66666666",
"retailerId": "",
"productImageCount": 666666
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

	const fmen = {
		key : {
							  participant : '0@s.whatsapp.net'
							},
		   message: {
						orderMessage: {
								itemCount : 2022,
								status: 1,
								surface : 1,
								message: `GkBotz`, //Kasih namalu
								thumbnail: fs.readFileSync('./src/goku.jpg'), //Gambarnye
								sellerJid: '0@s.whatsapp.net' 
							  }
							}
						  }

	const ftroli = {
		contextInfo: {
		participant: '0@s.whatsapp.net',
		remoteJid: 'status@broadcast',
		isForwarded: true,
		forwardingScore: 999999999,
	   quotedMessage: {
	   imageMessage: {
	   caption: `*©Whatsapp | ${NomeDoBot}*`,
	   jpegThumbnail: fs.readFileSync('./src/goku.jpg'),
	   mimetype: 'image/jpeg',
	   }
	   }
	   }
	   }

	   const ftex = {
		key: { 
			 fromMe: false,
			 participant: `0@s.whatsapp.net`, ...(from ? 
		{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
				   },
		message: { 
		   "extendedTextMessage": {
					"text": `ᶦ'ᵐ GkBotzོ`,
					"title": `_${NomeDoBot}_`,
					'jpegThumbnail': fs.readFileSync('./src/rose.jpg')
						   }
						 } 
						}

				const fkontak = { 
					key: {
					participant: `0@s.whatsapp.net`, ...(from ? 
					{ remoteJid: `6283136505591-1614953337@g.us` } : {}) 
				}, 
				message: { 'contactMessage': 
				{ 'displayName': `ᶦ'ᵐ GkBotzོ`, 
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 
				'jpegThumbnail': fs.readFileSync(`./src/goku.jpg`), 
				thumbnail: fs.readFileSync(`./src/rose.jpg`),
				sendEphemeral: true
			}
		}
	}


	   const flexx = {
		key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./base de dados/lib/bot/fotos/shenlong.jpg')}}}
/********** ENVIAR MSG **********/
const msg = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${pastel_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const webPage = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${pastel_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const fakeText = (teks) => {
	tobi.sendMessage(from, teks, text, {quoted: flexx})
	}

const enviar = (teks) => {
tobi.sendMessage(from, teks, text,  {quoted: mek, contextInfo : {text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true}})
}
const fakeyt = (teks) => {
tobi.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `*©Whatsapp | ${NomeDoBot}*`,
                "mediaType": "10",
                "mediaUrl": `youtu.be/OPr51STsADQ`,
                "thumbnailUrl": "https://telegra.ph/file/64a3f4a3ea76ee25e201a.jpg",
                "thumbnail": fs.readFileSync('./src/goku.jpg'),
                "sourceUrl": `youtu.be/OPr51STsADQ`,
},mentionedJid:[sender]}, quoted : mek})
};

const reply = (teks) => {
	tobi.sendMessage(from, text, {quoted: mek})
}

const fotothumb = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${pastel_de_carne}`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2, mentionedJid:[sender]}
}


/********** COSTUM DO TTT **********/
const costum = (pesan, tipe, target, target2) => {
 tobi.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
tobi.sendMessage(hehe, teks, text)
}

/********** RAMDOM **********/
const math = (teks) => {
return Math.floor(teks)
}

/********** MECIONADOR **********/
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tobi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

/********** TIME **********/


/********** PERDA DE XP **********/
randomPerda = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(randomPerda)

/********** GANHO EM XP **********/
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(randomTTTXP)

/********** MENSAGENS DO BOT **********/
var replys = ["[ ! ] Lo estoy enviando...", "ve a beber un poco de agua, ya estoy terminando de enviar..", "㋡ Opa, Ya lo estoy enviando...!!", "❬❗❭ Aguarde 5 segundos", "Enviando...",]
var replys_loli= replys[Math.floor(Math.random() * replys.length)]

/********** MESS && PTBR **********/
mess = {
espere: `${replys_loli}`,
success: '『❗』exito',
nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
error: {
stick: '『❗』 Fallo a convertit a sticker❌',
},
only: {
tobireplayoff: `『❌』Comando ${comando} desactivado con exito!`,
tobireplay: `『❗』Comando ${comando} activado con exito!`,
tob: `Link permitido por ser adm!`,
}
}

msgg = {
grupo: 'comando solo para grupos',
owner: 'solo el owner puede ejecutar este comando'
}



/********** FUCTION PATENTE **********/
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
	patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
	patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
	patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
	patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
	patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
	patt = 'Plata I🥈'
} else if (nivelAtual === 7) {
	patt = 'Plata II🥈'
} else if (nivelAtual === 8) {
	patt = 'Plata III🥈'
} else if (nivelAtual === 9) {
	patt = 'Plata IV🥈'
} else if (nivelAtual === 10) {
	patt = 'Plata V🥈'
} else if (nivelAtual === 11) {
	patt = 'Oro I🥇'
} else if (nivelAtual === 12) {
	patt = 'Oro II🥇'
} else if (nivelAtual === 13) {
	patt = 'Oro III🥇'
} else if (nivelAtual === 14) {
	patt = 'Oro IV🥇'
} else if (nivelAtual === 15) {
	patt = 'Oro V🥇'
} else if (nivelAtual === 16) {
	patt = 'Campeon I🏆'
} else if (nivelAtual === 17) {
	patt = 'Campeon II🏆'
} else if (nivelAtual === 18) {
	patt = 'Campeon III🏆'
} else if (nivelAtual === 19) {
	patt = 'Campeon IV🏆'
} else if (nivelAtual === 20) {
	patt = 'Campeon V🏆'
} else if (nivelAtual === 21) {
	patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
	patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
	patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
	patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
	patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
	patt = 'Maestro I 🐂'
} else if (nivelAtual === 27) {
	patt = 'Maestro II 🐂'
} else if (nivelAtual === 28) {
patt = 'Maestro III 🐂'
} else if (nivelAtual === 29) {
	patt = 'Maestro IV 🐂'
} else if (nivelAtual === 30) {
	patt = 'Maestro V 🐂'
} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'
} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'
} else if (nivelAtual === 33) {
	patt = 'Mítico III 🔮'
} else if (nivelAtual === 34) {
	patt = 'Mítico IV 🔮'
} else if (nivelAtual === 35) {
	patt = 'Mítico V 🔮'
} else if (nivelAtual === 36) {
	patt = 'Dios I🕴'
} else if (nivelAtual === 37) {
	patt = 'Dios II🕴'
} else if (nivelAtual === 38) {
	patt = 'Dios III🕴'
} else if (nivelAtual === 39) {
	patt = 'Dios IV🕴'
} else if (nivelAtual === 40) {
	patt = 'Dios V🕴'
} else if (nivelAtual === 41) {
	patt = 'Grande Maestro I 🛐'
} else if (nivelAtual === 42) {
	patt = 'Grande Maestro II 🛐'
} else if (nivelAtual === 43) {
	patt = 'Grande Maestro III 🛐'
} else if (nivelAtual === 44) {
	patt = 'Grande Maestro IV 🛐'
} else if (nivelAtual >= 45) {
	patt = 'Dios🔰'
}

/********** FUCTION TIPO DE USUÁRIO **********/
if (groupAdmins) {
prema = 'Ademir🤓'
}
if (isOwner) {
	prema = `El ${SeuNome}🕴🏽`
} else {
	var prema = 'Miembro comun 🗿'
}

/********** FUCTION BODIA **********/
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
	case 0: tempo = `Buenas noches ${pushname}🌛`; break;
case 1: tempo = `Buenas noches ${pushname}🌛`; break;
case 2: tempo = `Buenas noches ${pushname}🌛`; break;
case 3: tempo = `Buenas dias ${pushname}✨`; break;
case 4: tempo = `Buenas dias ${pushname}✨`; break;
case 5: tempo = `Buenas dias ${pushname}✨`; break;
case 6: tempo = `Buenas dias ${pushname}✨`; break;
case 7: tempo = `Buenas dias ${pushname}✨`; break;
case 8: tempo = `Buenas dias ${pushname}✨`; break;
case 9: tempo = `Buenas dias ${pushname}✨`; break;
case 10: tempo = `Buenas dias ${pushname}✨`; break;
case 11: tempo = `buenas tarde ${pushname}🔥`; break;
case 12: tempo = `buenas tarde ${pushname}🔥`; break;
case 13: tempo = `buenas tarde ${pushname}🔥`; break;
case 14: tempo = `buenas tarde ${pushname}🔥`; break;
case 15: tempo = `buenas tarde ${pushname}🌹`; break;
case 16: tempo = `buenas tarde ${pushname}🌹`; break;
case 17: tempo = `buenas tarde ${pushname}🌹`; break;
case 18: tempo = `Buenas noches ${pushname}🌛`; break;
case 19: tempo = `Buenas noches ${pushname}🌛`; break;
case 20: tempo = `Buenas noches ${pushname}🌛`; break;
case 21: tempo = `Buenas noches ${pushname}🌛`; break;
case 22: tempo = `Buenas noches ${pushname}🌛`; break;
case 23: tempo = `Buenas noches ${pushname}🌛`; break;
}
var tempo = '' + tempo;

/********** FUCTION LEVELING **********/
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
	up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
	up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
	up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
	up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
	up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
	up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
	up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
	up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
	up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
	up_porcenntagem = `*[██████████] ${level_porcen}%*`
}

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
	porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
	porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
	porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
	porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
	porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
	porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
	porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
	porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
	porcentagem = `*[██████████] ${bateria}%*`
}

/********** MENSAGENS DO BOT **********/
resposta = {
leveis: "❌ _Los niveles no estan activados_❌",
playk: "✔️_*... Enviando ...*_✔️",
macaco: "Macaco kkkkkk 😡️",
erroKrl: "Dio error😡️",
erroB: `${ll}...❌Dio error, intente nuevamente❌...${ll}`,
attp: `_Coloque texto _\n\n*Exemplo ${p}attp ${SeuNome}*`,
play: `_*Sintexis incorreta...*_\n\nUse asi: ${p + comando}Nombre de la cancion`
}

/********** VERIFICADOS **********/
/** Verificado com o Nombre Buenas dias **/
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${tempo}`}}}

/** Verificado com o Nombre ohayo **/
const tob1 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${pastel_de_carne}`}}}

/** Verificado com o Nombre e foto **/
const tob2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./base de dados/lib/bot/fotos/shenlong.jpg`), thumbnail:fs.readFileSync(`./base de dados/lib/bot/fotos/shenlong.jpg`),sendEphemeral: true}}}

/** Verificado de catálogo com Nombre **/
const tobCat = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": dfrply}, "title": `${pastel_de_carne}`, "description": `${pastel_de_carne}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${pastel_de_carne}`, "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

/** Verificado de carrinho com Nombre **/
const tobCarr = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 123, status: 1, surface : 1, message: `${pastel_de_carne}`, orderTitle: `${pastel_de_carne}`, thumbnail: dfrply, sellerJid: '0@s.whatsapp.net' }}}

/** Verificado de localização com Nombre **/
const tobLoc = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {caption: `${pastel_de_carne}`,jpegThumbnail: dfrply}}}

/** Verificado de video com Nombre **/
const tobVid = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": {"title": `${pastel_de_carne}`, "h": `${pastel_de_carne}`, 'duration': '99999', 'caption': `${pastel_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de documento com Nombre **/
const tobDoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${pastel_de_carne}`, jpegThumbnail: dfrply}}}

/** Verificado de convite com Nombre **/
const tobCon = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": `${pastel_de_carne}`,"groupName": `${pastel_de_carne}`, "caption": `${pastel_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de sticker com Nombre **/
const tobStk = {"key": {"participant": `0@s.whatsapp.net`,"remoteJid": "6289643739077-1613049930@g.us","fromMe": false,"id": "3B64558B07848BD81108C1D14712018E"},"message": {"stickerMessage": {"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=","pngThumbnail": dfrply,"mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE","fileLength": "60206","firstFrameLength": 3626,"isAnimated": false}},"messageTimestamp": "1614070775","status": "PENDING"}

/** Verificado de gif com Nombre **/
const tobGif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${pastel_de_carne}`,"h": `${pastel_de_carne}`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${pastel_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado com Nombre **/
const tobTex = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "extendedTextMessage": {"text": `${pastel_de_carne}`,"title": `${pastel_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado de audio com Nombre **/
const tobAud = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "99999","ptt": "true"}}}

/********** BOTÃO LOC **********/
const sendButLocation = async (from, text1, desc1, gam1, but = [], options = {}) => {
	kma = gam1
	mhan = await tobi.prepareMessage(from, kma, location)
	const buttonMessages = {locationMessage: mhan.message.locationMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 6}
	tobi.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)}

	const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
		const buttonMessage = {
			contentText: text1,
			footerText: desc1,
buttons: but,
headerType: 4
}
tobi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

/********** BOTÃO VIDEO **********/
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await tobi.prepareMessage(from, kma, video)
const buttonMessages = {
	videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
	kma = doc1
	mhan = await tobi.prepareMessage(from, media, document, kma)
	const buttonMessages = {
	documentMessage: mhan.message.documentMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: "DOCUMENT"
	}
	tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
/********** BOTÃO IMAGE **********/
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tobi.prepareMessage(from, kma, image, {thumbnail: null})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** FUNÇÕES APARTI DAQUI **********/
const cmdadd = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./base de dados/lib/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) cmdadd()
const reqcmd = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))[0].totalcmd
function _0x3f3a(_0xe8646d,_0x162982){const _0x36eef1=_0x36ee();return _0x3f3a=function(_0x3f3aa7,_0x59c8f8){_0x3f3aa7=_0x3f3aa7-0xa8;let _0x1d8c58=_0x36eef1[_0x3f3aa7];return _0x1d8c58;},_0x3f3a(_0xe8646d,_0x162982);}function _0x36ee(){const _0x4dc2f4=['8MQhGXt','buttonsMessage','espere','4lvZHYl','sexo','sendMessage','2728152PNeJzS','1481322iAvjUo','Ok\x20','1454280GHjoNX','846420MhxUDs','8334747DEVUWj','11447541zrHWGg','32921950aCrBXE','10IfLwJm'];_0x36ee=function(){return _0x4dc2f4;};return _0x36ee();}(function(_0x304eed,_0x3d80b5){const _0x20a02b=_0x3f3a,_0x28302=_0x304eed();while(!![]){try{const _0x340319=parseInt(_0x20a02b(0xb1))/0x1+-parseInt(_0x20a02b(0xab))/0x2*(-parseInt(_0x20a02b(0xaf))/0x3)+parseInt(_0x20a02b(0xb2))/0x4*(-parseInt(_0x20a02b(0xb6))/0x5)+-parseInt(_0x20a02b(0xae))/0x6+-parseInt(_0x20a02b(0xb4))/0x7*(-parseInt(_0x20a02b(0xa8))/0x8)+parseInt(_0x20a02b(0xb3))/0x9+-parseInt(_0x20a02b(0xb5))/0xa;if(_0x340319===_0x3d80b5)break;else _0x28302['push'](_0x28302['shift']());}catch(_0x5dfdeb){_0x28302['push'](_0x28302['shift']());}}}(_0x36ee,0xcb699));const mortandela=_0x138417=>{const _0x5f034d=_0x3f3a,_0x3c1659=[{'buttonId':_0x5f034d(0xac),'buttonText':{'displayText':_0x5f034d(0xb0)+NomeDoBot},'type':0x1}],_0x23dd3f={'contentText':''+mess[_0x5f034d(0xaa)],'buttons':_0x3c1659,'headerType':0x1};tobi[_0x5f034d(0xad)](from,_0x23dd3f,MessageType[_0x5f034d(0xa9)],{'quoted':tob2});};

function fecha(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
myDays = ['Domingo','Lunes','','Martes','Miercoles','Jueves','Viernes','Sabado'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const stickerAdm = (hehe) => {
anu = fs.readFileSync('./base de dados/database/figurinhas/stickerAdm_sticker.webp')
tobi.sendMessage(hehe, anu, sticker,{
quoted: mek})
}

/********** FUCTION HIDETAG **********/
const hideTag = async function(from, text){
	let anu = await tobi.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
	ane.push(i.jid)
}
tobi.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}

/********** FUCTION LEVEL XP **********/
if (isGroup && isLevelingOn) {
	const currentLevel = getLevelingLevel(sender)
	const checkId = getLevelingId(sender)
	try {
	if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
	const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
	var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
	var getLevel = getLevelingLevel(sender)
	const namelv = checkId
	mett = ["1", "2", "3", "4", "5"]
	res = mett[Math.floor(Math.random() * mett.length)]
	result = fs.readFileSync(`./base de dados/database/audios/som` + res + `.mp3`)
	addLevelingXp(sender, amountXp)
	if (requiredXp <= getLevelingXp(sender)) {
	addLevelingLevel(sender, 1)
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subio'), color('de', "yellow"), color('nivel'), color('en el', "yellow"), color('grupo:'), color(groupName, "yellow"))
	const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}

	let contentt = await getBuffer(`https://yuzzu-api.herokuapp.com/api/level?icon=https://i.ibb.co/KKgYHRW/8c5dc479e4a8a9404e292b5fc50ab8db.jpg`)
	const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
	let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
	const buttons1 = [{buttonId: `${p}info perfil`, buttonText: {displayText: ' ＰＥＲＦＩＬ '}, type: 1}]
	const btn1 = {contentText: `
╭──▢ *Nuevo Nivel*
▢ Numero: @${namelv.split('@')[0]}

▢ Xp: ${getLevelingXp(sender)}

▢ Nivel: ${getLevel} -> ${getLevelingLevel(sender)}

▢ Patente : ${patt}
╰─────────────────
`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
	tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
	}
	} catch (err) {
	m.reply(err)
	}
	}

/********** FUCTION DINHEIRO **********/
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender, pushname)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
m.reply(err)
}
}

/***** FINALIZAR TTT AUTOMATICAMENTE *****/
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
	tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
	if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tobi.sendMessage(tttset.local,`❌ EL TIEMPO DE JUEGO EXIPRO!!! ❌\n\n➣  CASTIGO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
tobi.sendMessage(tttset.local,`❌ EL TIEMPO DE JUEGO EXIPRO!!! ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/***** ANTI LINK DE GRUPOS *****/
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
	if (!isGroup) return
	if (!isAntiLink) return
	if (isGroupAdmins) return enviar('🧐')
	enviar(`*「 LINK DETECTADO 」*\n\nParece que envio un enlace al grupo usted sera expulsado`)
	tobi.groupRemove(from, [sender])
}

/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) {
	if (palavra.includes(messagesC)) {
enviar(`Esa palabra esta proivida en este grupo en este grupo, usted sera expulsado 👋`)
setTimeout( () => {
tobi.groupRemove(from, [sender]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 2000)
setTimeout( () => {
	enviar(`Agregando ${pushname} De nuevo`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	tobi.groupAdd(from, [addd]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 240000)
setTimeout( () => {
tobi.updatePresence(from, )
enviar("adios JIJIJIJAシ︎")
}, 0)
}
}

//ANTI SPAM EU PEGUEI DO ITALU/TIRINGA-BOT
 if (isCmd && isFiltered(from) && !isGroup && isAntiflod) {
	 console.log(color('SPAM', 'red'), color(moment.tz('America/Santiago').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff = {
	text:  `Spam detectado  @${sender.split('@')[0]}...\n\nAguarde 3 segundos antes de usar otro comando✅`,
	contextInfo: {
mentionedJid: [sender]
}
}
return enviar(ff)}

if (isCmd && isFiltered(from) && isGroup && isAntiflod) {
	console.log(color('SPAM', 'red'), color(moment.tz('America/Santiago').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
	const ff1 = {
		text:  `Spam detectado @${sender.split('@')[0]}...\n\nAguarde 3 segundos antes de usar otro comando✅`,
		contextInfo: {
mentionedJid: [sender]
}
}
return enviar(ff1)}

/********** TIPOS DE MENSAGENS **********/
colors = ['red','white','black','blue','yellow','green']
//_TIPO DE MENSAGEM
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDocument = type == 'documentMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const stickerMessage = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const tipoMensagem = type == 'audioMensaje' ? 'Audio' : type == 'stickerMensaje' ? 'Sticker' : type == 'imageMensaje' ? 'Imagen' : type == 'videoMensaje' ? 'Video' : type == 'documentoMensaje' ? 'Documento' : type == 'contactoMensaje' ? 'Contato' : type == 'locationMesaje' ? 'localizacion' : 'Mensaje'

// comando de registro de la consola cuando está en un chat privado
if(m.message){
	console.log(chalk.black(chalk.green('| GkBotz |')), chalk.black(chalk.bgYellowBright(new Date)), chalk.black(chalk.redBright(budy || type)) + '\n' + chalk.magenta('Numero'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blue('En el grupo:'), chalk.green(groupName))
}

	tobi.chatRead(from, "read")
/********** USUÁRIO BANIDO **********/
if (isCmd && isBanned) {
enviar(linguagem.ban())
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "Blue"), 'comando', color('del', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Santiago').format('HH:mm:ss'), 'yellow'))
}


if (isCmd && !isRegistered) {
try {
ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let contentt = await getBuffer(ppimg)
const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
{buttonId: 'Rg', buttonText: {displayText: 'ＲＥＧＩＳＴＲＡＲ '}, type: 1}]
const btn1 = {contentText: `*_Porfavor Registrate_*`, footerText: `Presione en el boton de abajo.`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {contextInfo: {"externalAdReply": {"title": `${tempo}`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2, sourceUrl: grupoDoTobi, contextInfo: {"mentionedJid": [sender]}}}})
return
}

/********** LOGIN **********/
if (selectedButton == `Rg`) {
if (isUser) return enviar(`📌 *Usted ya esta registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar(`${ll}Espere, registrando.... : ${pushname}!${ll}`)
try {
	ppimg = await tobi.getProfilePicture(sender)
} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=https://bit.ly/3GFgczM`)
const tekentod =
`
╭──❒ *REGISTRADO(A)*
▢ *Id: ${serialUser}*
▢ *Hora: ${time}*
▢ *Nombre: ${pushname}*
▢ *Link: wa.me/${sender.split('@')[0]}*
╰─────────────────
`
veri = sender
if (isGroup) {
	addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)
}
}

/********** REGISTRO **********/
if ((budy === "login") || (budy === "Login") || (budy === "Login")) {
	if (isUser) return enviar(`📌 *Usted ya esta registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar(`${ll}...*❌ Esᴘᴇʀᴇ ❌*...${ll}`)
try {
var ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod =
`
╭──❒ *REGISTRADO(A)*
▢ *Id: ${serialUser}*
▢ *Hora: ${time}*
▢ *Nombre: ${pushname}*
▢ *Link: wa.me/${sender.split('@')[0]}*
╰─────────────────
`
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)
} else {
	addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)
}
}

//-TIME TEMPO ONLINE
if (selectedButton == `no esa mano gay`) {
	uptime = process.uptime();
tobi.sendMessage(from, `*${temporizado(uptime)}*`, MessageType.text, {quoted: mek})
}

/********** EVAL CMDS **********/

		if (budy.startsWith('=>')){
		if (!isOwner) return
		var konsol = budy.slice(3)
		Return = (sul) => {
		var sat = JSON.stringify(sul, null, 2)
		bang = util.format(sat)
		if (sat == undefined){
		bang = util.format(sul)
		}
		return m.reply(bang)
		}
		try {
		m.reply(util.format(eval(`;(async () => { ${konsol} })()`)))
		console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color("=>", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		} catch(err){
		m.reply(err)
		}
		}

		if (budy.startsWith(`$`)){
		if (!isOwner) return
		Return = (sul) => {
		var sat = JSON.stringify(sul, null, 2)
		bang = util.format(sat)
		if (sat == undefined){
		bang = util.format(sul)
		}
		return m.reply(bang)
		}
		try {
		exc = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		//enviar(JSON.stringify(eval(`;(async () => { ${exc} })()`)))
		enviar(util.format(eval(`;(async () => { ${exc} })()`)))
		} catch(e){
		enviar(String(e))
		}
		}

		if (budy.startsWith('>')){

if(!isOwner) return

console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return enviar(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
enviar(`${e}`)
}
}
		
		
/********** Autoconversa **********/
if (isAutconversa) {
	if ((budy.match("Pq")) || (budy.match("pq"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Pq_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Callate")) || (budy.match("callate")) || (budy.match("Cállate")) || (budy.match("cállate"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/callate_puta.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("hentai")) || (budy.match("Hentai"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/hentai_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Anal")) || (budy.match("anal"))) {
	mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
	result = fs.readFileSync(`./base de dados/database/figurinhas/Analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Sexo")) || (budy.match("sexo"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sexo_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("No")) || (budy.match("no"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
	result = fs.readFileSync(`./base de dados/database/figurinhas/sim_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("🤔"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
	result = fs.readFileSync(`./base de dados/database/figurinhas/analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("😭"))) {
	mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/chorando_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Mentira")) || (budy.match("mentira"))) {
	mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/verdade_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Bye")) || (budy.match("bye")) || (budy.match("Chao")) || (budy.match("chao"))) {
	mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/bye_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match("🙈")) || (budy.match("🙉")) || (budy.match("🙊")) || (budy.match("🐵")) || (budy.match("🐒"))) {
	mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/macaco_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match(`@${me.jid.split('@')[0]}`))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
	result = fs.readFileSync(`./base de dados/database/figurinhas/tag_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("diga"))) {
	mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
enviar("te amoooo")}}
}
	if (!mek.key.fromMe && !isOwner && self === true) return
/********** TODOS OS CMD APARTI DAQUI **********/
switch (commandstik) {
case "Jk/fBOJwVSHrZQq0aXmDdGaWq6sKAFOTwRPLTeIV+4Q=":
let timestamp = speed()
let latensii = speed() - timestamp
hggg = `
╭──❒  𝘐𝘕𝘍𝘖 𝘉𝘖𝘛 ㊅
▢ *Nombre del Bot* : *Meta Bot*
▢ *Prefijo*  : *Multi*
▢ *Velocidad*  : *${latensii.toFixed(4)} Segundos*
▢ *Libreria* : *Baileys*
▢ *Lenguaje* : *JavaScript*
▢ *Zona Horaria* : *${hr}*
╰─────────────────`
ftuk = `*🌀Created By Jose*`
buty = 
[
{buttonId:`${p}allmenu`,buttonText:{displayText:'𝙰𝙻𝙻 𝙼𝙴𝙽𝚄'},type:1}
]
sendButLocation(from, hggg, ftuk, {jpegThumbnail: ofrply}, buty)
}
switch (commandstik) {
case "cuERL9nVYB/KgVLZBShunZcmmqeyXdIRpzldZwcEuCg=":
if(!dia) return enviar('a')
tobi.groupRemove(from, [dia])
}

switch(comando) {
case 'public':
if (!mek.key.fromMe && !isOwner) return enviar('Solo mi dueño puede')
if (self === false) return
self = false
enviar(`\`\`\`MODE - PUBLIC\`\`\``)
break
case 'self':
if (!mek.key.fromMe && !isOwner) return enviar('Solo mi dueño puede')
if (self === true) return
self = true
enviar(`\`\`\`MODE - SELF\`\`\``)
break
case 'stickeradm':
const hg = fs.readFilesync('./sticker/kick.webp')
tobi.sendMessage(from, hg, MessageType.sticker)
break
case 'allmenu':
if(!isRegistered) return enviar('No estas en la base de datos...')
menu2 = `*${tanggal}*\n*${NomeDoBot} | Runtime: ${temporizado(process.uptime())}*`
stod = `${sender}`
menu1 =`
Hola ${pushname}⚡

╭──❒  *Downloader Menu*
│
❒ ${p}play [cancion]
❒ ${p}igimg [url]
❒ ${p}igvid [url]
❒ ${p}tiktok [url]
❒ ${p}mediafire [url]
│
╰─────────────────

╭──❒  *Search Menu*
│
❒ ${p}imagen [texto]
❒ ${p}play [texto]
❒ ${p}pinterest [texto]
❒ ${p}wiki [texto]
❒ ${p}glosearch [texto]
❒ ${p}storesearch [texto]
❒ ${p}ytsearch [texto]
❒ ${p}ip [ip]
│
╰─────────────────

╭──❒  *Activation Menu*
│
❒ ${p}antilink [on/off]
❒ ${p}selfchat [on/off]
❒ ${p}autosticker [on/off]
❒ ${p}antiflod [on/off]
❒ ${p}antifake [on/off]
❒ ${p}welcome [on/off]
❒ ${p}leveling [on/off]
│
╰─────────────────

╭──❒  *Group Menu*
│
❒ ${p}kill
❒ ${p}revivir 
❒ ${p}grupo [abrir/cerrar]
❒ ${p}tagstick 
❒ ${p}tagimg 
❒ ${p}setnombre [texto]
❒ ${p}setdesk [texto]
❒ ${p}setimg [imagen]
❒ ${p}ping
❒ ${p}info [perfil/grupo]
❒ ${p}link [perfil/grupo]
❒ ${p}listadmin
❒ ${p}listonline
❒ ${p}hidetag [texto]
❒ ${p}promote [@tag]
❒ ${p}demote [@tag]
❒ ${p}sticker [imagen]
❒ ${p}d
❒ ${p}ranklevel
❒ ${p}top5 [texto]
│
╰─────────────────

╭──❒  *Game Menu*
│
❒ ${p}xo [@tag]
❒ ${p}top5 [texto]
❒ ${p}dick
❒ ${p}sn [pregunta]
❒ ${p}gay
│
╰─────────────────

╭──❒  *Efect Menu*
│
❒ ${p}fast
❒ ${p}bass
❒ ${p}nightcore
❒ ${p}slow
❒ ${p}gigant
❒ ${p}reverse
❒ ${p}somber
│
╰─────────────────

╭──❒ *Emojidex*
│
❒ ${p}apple [emoji]
❒ ${p}google [emoji]
❒ ${p}samsung [emoji]
❒ ${p}microsoft [emoji]
❒ ${p}whatsapp [emoji]
❒ ${p}twitter [emoji]
❒ ${p}facebook [emoji]
❒ ${p}joypixels [emoji]
❒ ${p}openmoji [emoji]
❒ ${p}emojidex [emoji]
❒ ${p}messenger [emoji]
❒ ${p}lg [emoji]
❒ ${p}htc [emoji]
❒ ${p}mozilla [emoji]
❒ ${p}softbank [emoji]
│
╰─────────────────

╭──❒  *Owner Menu*
│
❒ ${p}ban [@Tag]
❒ ${p}unban [@Tag]
❒ ${p}clearchat
❒ ${p}exec
❒ ${p}public
❒ ${p}self
❒  =>
❒  >
│
╰─────────────────`
but = 
[
{buttonId:`${p}ping`,buttonText:{displayText:'PING'},type:1},
{buttonId:`${p}reglas`,buttonText:{displayText:'REGLAS'},type:1}
]
sendButLocation(from, menu1, menu2, {jpegThumbnail: ofrply}, but, fmen)
break

tobi.sendMessage(from, nsfw6, MessageType.text, {quoted: ftoko})
break

case 'reglas':
rules = `* 「REGLAS DEL BOT」 *

1. ESTÁ PROHIBIDO MANDAR GORE O CP AL PRIV DEL BOT
2. BOT SPAM PROHIBIDO
3. PROHIBIDO EL SPAM VIRTEX
4. GRUPO DE SPAM PROHIBIDO
5. ADMINISTRAR EL SPAM PROHIBIDO
6. ESTÁ PROHIBIDO DECIR ABUSO EN GC
7. ENVIAR SPAM DE IMAGENES ES PERMABAN

SI TIENE ALGUNA DUDA MANDE MENSAJE A +56944451822

⚠️ SI SE ROMPE ... SERÁ BLOQUEADO + BANEADO !!`
		   console.log(rules)
           tobi.sendMessage(from, rules, MessageType.text, {quoted: fmen})
           break



case 'dueño':
	addFilter(from)
tobi.sendMessage(from, '『❗』𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...', MessageType.text, {quoted: mek})
tobi.sendMessage(sender, 'Este es mi creador algun tipo de duda no dude en preguntar',MessageType.text, { quoted: mek} )
tobi.sendMessage(sender, {displayname: "Jose", vcard: vcard}, MessageType.contact, {quoted: mek})
break


case 'add':
case 'revivir':
	try {
if (!isGroup) return enviar("Solamente en grupos!")
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return enviar("No hmmmm")
if (!isBotGroupAdmins) return enviar(`EL bot debe ser adm de este grupo!`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await tobi.groupAdd(from, [entah])
linkgc = await tobi.groupInviteCode(from)
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('ya esta en el grupo!')
if(inv[0].code == 403) return enviar('Error, cuenta privada del usuario')
if(inv[0].code == 408) return enviar('Error, usuario acaba de salir ')
if(inv[0].code == 401) return enviar('Error, el bot esta bloqueado ')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await tobi.groupAdd(from, [entah])
o = response.participants[0]
linkgc = await tobi.groupInviteCode(from)
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('ya esta en el grupo! ')
if(inv[0].code == 403) return enviar('Error, cuenta privada del usuario')
if(inv[0].code == 403) return enviar('Fallo, esta privado ')
if(inv[0].code == 408) return enviar('Falla, el objetivo acaba de irse ')
if(inv[0].code == 401) return enviar('Falla, el bot esta bloqueado ')
}
} catch {
	return
}
break


case 'promote':
    case 'promover':
    if(!isGroup) return enviar(linguagem.group())
    if(!isBotGroupAdmins) return stickerAdm(from)
    if(!isAdmins && !isOwner) return enviar('solo admins')
    if(!dia) return enviar('a')

    await tobi.groupMakeAdmin (from, [dia])
    break

	case 'demote':
		case 'degradar':
		  if(!isGroup) return enviar(linguagem.group())
		  if(!isBotGroupAdmins) return stickerAdm(from)
		  if(!isAdmins && !isOwner) return enviar('solo adms')
		  if(!dia) return m.reply(msg.notag)

		  await tobi.groupDemoteAdmin (from, [dia]) //demote admins
		  break


case 'kill':
	if (!isGroup) return enviar(linguagem.group())
	if (!isGroupAdmins) return enviar(linguagem.admin())
	if (!isBotGroupAdmins) return stickerAdm(from)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque a la persona a quien eliminar!')
	kick = mek.message.extendedTextMessage.contextInfo.participant
	tobi.groupRemove(from, [kick])
	break

case 'addprem':
if (!isGroup) return enviar(linguagem.group())
if (!isOwner && !isPremium) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `👑@${mentioned[0].split('@')[0]} agragando a la lista de usuarios premium👑`
mentions(`${susp}`, mentioned, true)
break

case 'dellprem':
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} elimando de la lista de usuarios premium✖`
mentions(`${susp}`, mentioned, true)
break

case 'group': //by resen e Tobi
case 'grupo':
	case 'gc':
		addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`Sintesis correta: ${p + comando} abrir/cerrar`)
if (args[0].toLowerCase() == 'abrir') {
enviar(`Grupo abierto con exito`)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0].toLowerCase() == 'cerrar') {
await tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)
enviar(`Grupo cerrado con exito`)
}
break

case 'code':
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
enviar(`${base64}`)
break

case 'decode':
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
enviar(`${parsedStr}`)
break

case 'listonline':
if (!isGroup) return enviar(`Solo para grupos`)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(tobi.chats.get(ido).presences), tobi.user.jid]
tobi.sendMessage(from, '*Lista de usuarios en linea*:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
quoted: mek,
contextInfo: { mentionedJid: online }
})
break

case 'totag':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
	encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
	encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'texto/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
	enviar(`${emoji_bot} Responder imagem/documento/gif/adesivo/áudio/vídeo con subtitular ${p + comando}`)
}
break

case 'setn':
case 'setnombre':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`Usa: ${p + comando} *_Nuevo nombre del grupo_*`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tobi.groupUpdateSubject(idgrup, `${q}`)
tobi.sendMessage(from, `El nombre del grupo fue cambiado, por:\n${q}`, text, {quoted: mek})
console.log(color('|TRM|'), color(`Descripcion cambiada ${metdata.subject}`,  'cyan'))
break

case 'setdesc':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`Use: ${p + comando}*_Nueva descripcion_*`)
tobi.groupUpdateDescription(from, `${q}`)
tobi.sendMessage(from, `descripcion cambiada!!`, text, {quoted: mek})
break

case 'setimg':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isQuotedImage) return enviar(`${emoji_bot} Use: ${p + comando} <Marque una foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tobi.downloadAndSaveMediaMessage(ftgp)
await tobi.updateProfilePicture (from, medipp)
enviar(`${emoji_bot} foto de grupo cambiada!!`)
break

case 'setprefijo':
addFilter(from)
if (!mek.key.fromMe && !isOwner && !isCreator) return enviar(lang.onlyOwner())
if (args.length < 1) return enviar(`*Sintesis incorrecta!*\n\n*Ejemplo :*\n•${p + comando}#`)
if((args[0]) == `${q}`){
prefa = `${q}`
enviar(`_Éxito al cambiar el prefijo a ${q}_`)
}
break

case 'd':
addFilter(from)
if (!isGroup)return enviar(linguagem.group())
if (!isGroupAdmins)return enviar(linguagem.admin())
try {
tobi.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
enviar(`${ll} Es posible eliminar mensajes mios ${ll}`)
}
break


case 'stopbot':
if (!isOwner) return enviar('solo el owner')
tobi = new WAConnection();
tobi.close()
enviar('Bot cerrado')
break


case 'marcar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
	todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'info': //by resen e Tobi
addFilter(from)
if (args.length < 1) return enviar(`${emoji_bot} Use ${p + comando} <Grupo o Perfil>`)
if (args[0].toLowerCase() == 'grupo') {
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
ppUrl = await tobi.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
infoGrupTob = `
📛 *Nombre* : ${groupName}
👤 *Dueño del grupo* : @${from.split("-")[0]}
👥 *Miembros* : ${groupMembers.length}
👥 *Admin* : ${groupAdmins.length}

⬣ Welcome : ${isWelcome ? 'Activado':'Desactivado'}
⬣ Anti Link : ${isAntiLink? 'Activado':'Desactivado'}
⬣ Anti Fake : ${isAntifaker? 'Activado':'Desactivado'}
⬣ Self Chat : ${isAutconversa? 'Activado':'Desactivado'}
⬣ Anti Flod : ${isAntiflod? 'Activado':'Desactivado'}

💬 Descripcion del grupo :
\`\`\`${groupDesc}\`\`\``
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: infoGrupTob})
} else if (args[0].toLowerCase() == 'perfil') {
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender)
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
const teste64 = sender
const teste65 = await tobi.getStatus(teste64 , MessageType.text)
try {
	ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pf =
`╭──▢ *Info Perfil*
▢ Nombre: ${pushname}

▢ Level: ${usLevel}

▢ XP: ${usXp}/${requirXp}

▢ Patente: ${patt}

▢ Link: wa.me/${sender.split("@")[0]}

▢ Bio: ${teste65.status}
╰─────────────────
`
its = await getBuffer (ppimg)
tobi.sendMessage(from, its, image, {quoted: mek, thumbnail:null, caption: pf, contextInfo: {mentionedJid: [sender]}})
}
break

case 'listadmins':
case 'listadmin':
	case 'adminlist':
		case 'listadm':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
adl = `Lista de administradores del grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'linkgp':
case 'link':
	addFilter(from)
	if (!isGroup) return enviar(linguagem.group())
	if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Use ${p + comando} <Grupo o Priv>`)
if (args[0].toLowerCase() == 'grupo') {
	linkgc = await tobi.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
} else if (args[0].toLowerCase() == 'priv') {
	if (isGroup) enviar(`『❗』${comando} enviado a tu priv`)
	linkgc = await tobi.groupInviteCode(from)
	tobi.sendMessage(sender, 'https://chat.whatsapp.com/'+linkgc, MessageType.text)
}
break

case 'hidetag':
	addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
try {
	quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
	hideTag(from, `${q}`)
}
break


case 'eval':
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
eval(q)
} catch (err) {
enviar(`${err}`)
}
break

case 'welcome':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Ejemplo ${p + comando} On`)
if (args[0] === 'on') {
	if (isWelcome) return enviar('*[❗] ya esta activado...*')
welcome.push(from)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} no estaba activado antes`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]activar/desactivar, Ejemplo ${p + comando} On`)
}
break

case 'nsfw':
if (!isGroup) return enviar('solo en grupos')
if (!isGroupAdmins) return enviar('solo los admin pueden')
if (args.length < 1) return enviar('Digita 1 para activar los NSFW')
if (Number(args[0]) === 1) {
if (isNsfw) return enviar('Recursos Activados ✅')
nsfw.push(from)
fs.writeFileSync('./base de dados/lib/nsfw.json', JSON.stringify(nsfw))
enviar('「 ❗ 」  La funcion NSFW esta habilitado en este grupo')
} else if (Number(args[0]) === 0) {
nsfw.splice(from, 1)
fs.writeFileSync('./base de dados/lib/nsfw.json', JSON.stringify(nsfw))
enviar('「 ❗ 」La funcion NSFW esta deshabilitado en este grupo')
} else {
enviar('Digite 1 para activarlo, 0 para desactivarlo')
}
break	

case 'leveling':
case 'leveis':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]activar/desactivar, Ejemplo ${p}${comando} on`)
if (args[0] === 'on') {
if (isLevelingOn) return enviar('*[❗] ya esta activado...*')
_leveling.push(from)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
	let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return enviar(`${comando} no estaba activado antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Ejemplo ${p}${comando} on`)
}
break

					case 'antidelete':
    if (!isGroup) return enviar('Solo en grupos')
    if (!isGroupAdmins) return enviar("Solo admins");
    if (!q) return enviar(`Use asi: *${p}antidelete [on/off]*`)
    if (q.toLowerCase() === 'on') {
      if (isAntidel) return enviar(`Ya estaba activo`)
      antidel.push(from)
      fs.writeFileSync('./src/antidelete.json', JSON.stringify(antidel))
      enviar('*El antidelete fue activado*')
    } else if (q.toLowerCase() === 'off') {
      let anu = antidel.indexOf(from)
      antidel.splice(anu, 1)
      fs.writeFileSync('./src/antidelete.json', JSON.stringify(antidel))
      enviar('*El antidelete fue apagado*')
    }
    break

case 'antilink':
case 'antilinks':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Ejemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntiLink) return enviar('*[❗] ya esta activado...*')
antilink.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} no estaba activado antes`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]On/Off, Ejemplo ${p + comando} Off`)
}
break

case 'antifake':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Ejemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntifaker) return enviar('*[❗] ya esta activado...*')
antifaker.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return enviar(`${comando} no estaba activo antes`)
antifaker.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
enviar(mess.only.tobireplayoff)
} else {
	enviar(`[❗]On/Off, Ejemplo ${p + comando} Off`)
}
break

case 'autconversa':
	case 'selfchat':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]On/Off, Ejemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAutconversa) return enviar('*[❗] ya esta activado...*')
autconversa.push(from)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
let position = autconversa.indexOf(autconversa.find((x) => x === from))
if (position === -1) return enviar(`${comando} no estaba activo antes`)
autconversa.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
enviar(mess.only.tobireplayoff)
} else {
	enviar(`[❗]on/off, Ejemplo ${p + comando} off`)
}
break

case 'antiflod':
case 'antiflods':
	if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (args.length < 1) return enviar(`[❗]on/off\nEjemplo: ${p}${comando} on`)
if (args[0] === 'on') {
if (isAntiflod) return enviar('*[❗] ya esta activado...*')
antiflod.push(from)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
enviar(`[❗] Comando ${comando} Activado, apartir de ahora no se ejecutara ningun comando`)
} else if (args[0] === 'off') {
let position = antiflod.indexOf(antiflod.find((x) => x === from))
if (position === -1) return enviar(`${comando} no estaba activo antes`)
antiflod.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
enviar(`[❗] Comando ${comando} Desactivado, ahora se pueden ejecutar los comandos`)
} else {
	enviar(`[❗]on/off, Ejemplo ${p}${comando} on`)
}
break

//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS

case 'apple':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[0].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'google':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[1].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'samsung':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[2].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'microsoft':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[3].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'whatsapp':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[4].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'twitter':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[5].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'facebook':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[6].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'joypixels':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[7].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'openmoji':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[8].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'emojidex':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[9].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'messenger':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[10].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'lg':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[11].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'htc':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[12].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'mozilla':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[13].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'softbank':
if (!isRegistered)
if (args === 0) return enviar('y el emoji?')
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[14].url}`
sendWebp(from, `${link}`).catch(() => reply('fail'))
})
break

case 'jadibot':
if(from.endsWith('@g.us')) return enviar('Solo se puede utilizar en pv')
client.version = [2, 2119, 6]
client.browserDescription = ['SubBot','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await tobi.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: '¡Escanea este QR para convertirte en un bot temporal!\n1. Haga clic en los tres puntos en la esquina superior derecha.\n2. Toca WhatsApp Web\n3. Escanea este QR \n\nEl QR caduca en 20 segundos'})    
setTimeout(() => {
       tobi.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Puede iniciar sesión sin qr con el siguiente mensaje`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${p}${comando} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./index.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
enviar('Conectado exitosamente con WhatsApp.*\n' + JSON.stringify(user, null, 2))
})
} catch {
enviar('¡Error! solo 1 persona puede acceder a la función Jadibot')
}
break
case 'stopjadibot':
if (!isOwner) return enviar('Solo mi creador puede!')
try {
enviar('Okay')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
enviar('Listo')
client.close()
}
break




case 'ip':
ips = args.join(' ')
if (!q) return enviar('Y la ip?')
ip = await fetchJson(`http://ip-api.com/json/${ips}`)
if(ip.status == 'fail') return enviar('*ip incorrecta*')
enviar('*Recopilando información.... Tiempo Aproximado:*\n```3 seconds```')
await sleep(200)
datos = `*🔍Ip:* _${ips}_

      *Latitud de ip*: ${ip.lat}
      *Longitud de ip*: ${ip.lon}

🌆 *País*: _${ip.country}_
    *Código de país*: ${ip.countryCode}

🏡 *Región*: _${ip.region}_
    *Nombre de región*: ${ip.regionName}

🏙️ *Ciudad*: _${ip.city}_

📚 *Código postal*: _${ip.zip}_

🕐 *Zona horaria*: _${ip.timezone}_

🌐 *Proveedor de servicios de Internet*:
_${ip.isp}_

🕋 *Organización*: _${ip.org}_
${ll}©${ip.as}™${ll}`
tobi.sendMessage(from, datos, MessageType.text, {quoted: mek})
await sleep(300)
tobi.sendMessage(from, { degreesLatitude: `${ip.lat}`, degreesLongitude: `${ip.lon}`, name: '📌Búsqueda por Advanced Ts', address : `${ip.city}`}, MessageType.liveLocation, {quoted : mek})
break

case 'fire':
if (!q) return enviar('*Y el texto para crear el logo donde esta?*')
enviar(`*Porfavor espera un momento, tu logo ${comando} esta siendo creado con el texto ${q}!*`)
logo = `https://api.zeks.xyz/api/flametext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: mek, caption: 'listo'})
break

case 'thunder':
if (!q) return enviar('Y el texto??')
enviar('En Proceso⌛')
logo = await fetchJson(`https://api-alphabot.herokuapp.com/api/textpro/thunder?text=${q}&apikey=Alphabot`)
buffer = await getBuffer(logo)
sendFileFromUrl(buffer, image, {quoted: mek, caption: 'listo'})
break


case 'sfundo':
addFilter(from)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await tobi.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `🔮 ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `💎 @${pushname}._`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
tobi.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await tobi.downloadAndSaveMediaMessage(encmedia2, `./src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'EndTime' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}`
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(from)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`❎ Falla, en la convercion de el ${type} en sticker`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./src/sticker/stickwm_${sender}.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
if (error) return enviar('error')
sendSticker(from, fs.readFileSync(`./src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./src/sticker/${sender}.webp`)
fs.unlinkSync(`./src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=30, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./src/sticker/${sender}.webp`)
} else {
enviar(`marca una img, video o gif maximo 10 segundos`)
}
break

case 'st':
	addFilter(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
enviar(linguagem.stick())
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falla de conversion de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else {
enviar(`marca una img, video o gif, maximo de 10 segundos`)
}
break


case 'autosticker':
if (!isGroup) return enviar(tobi.only.group)
if (!isGroupAdmins) return enviar(tobi.only.admin)
teks = `                 🌹${ll}「 AUTOSTICKER 」${ll}🌹

Convierte automaticamente las imagenes a stickers,
Esta permitodo solo por los admins
`
teks2 = `Tiene estas 2 opciones`
buttons10000 = [
	{buttonId:`${p}auto on`, buttonText: {displayText: 'ᴀᴄᴛɪᴠᴀʀ'}, type: 1},
	{buttonId:`${p}auto off`, buttonText: {displayText: 'ᴅᴇsᴀᴄᴛɪᴠᴀʀ'}, type: 1}
	]
const another = {
	contentText: `${teks}`,
    footerText: `${teks2}`,
    buttons: buttons10000,
    headerType: 1
}
await tobi.sendMessage(from, another, MessageType.buttonsMessage, {quoted: ftex})
break

case 'auto':
if (!isGroup) return enviar(tobi.only.group)
if (!isGroupAdmins) return enviar(tobi.only.admin)
if (args.length < 1) return enviar('Escribe *on* para activar')
if (args[0] === 'on') {
if (isAutoSt) return enviar('*Ya está activo*')
autostick.push(from)
fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))
enviar('El Autosticker fue activado con exito!')
} else if (args[0] === 'off') {
var ini = autostick.indexOf(from)
autostick.splice(ini, 1)
fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))
enviar('El Autosticker fue desactivado con exito!')
} else {
enviar('on para activar, off para desactivar')
}
break


case 'toimg':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar(`${emoji_bot} Marca una imagen para eso`)
mortandela(from)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await tobi.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar(`${emoji_bot} fallo de convertir un sticker a imagen`)
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo puta'})
fs.unlinkSync(ran)
})
break

case 'togif':
addFilter(from)
if (!isQuotedSticker) return enviar(`${emoji_bot} Você precisa marcar um sticker animado para isso`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tobi.downloadAndSaveMediaMessage(encmediaaa)
mortandela(from)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tobi.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Listo puta'})
fs.unlinkSync(mediaaa)
}
break

case 'spet':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figupet = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figupet.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para converir')
}
break

case 'arma':
case 'sarma':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuarma = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuarma.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuarma1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${figuarma1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break

case 'triggered':
case 'sgg':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
triggered = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${triggered.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuger1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${figuger1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imgen para eso')
}
break

case 'raimbow':
case 'arcoirirs':
case 'slgtb':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break

case 'swasted':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuwasted = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuwasted.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuwasted1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${figuwasted1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break

case 'preso':
case 'spreso':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
preso = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${preso.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
preso1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${preso1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break

case 'figuinvert':
case 'invert':
case 'snv':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
figuinvertida = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuinvertida.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuinvertida1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
exec(`wget ${figuinvertida1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break


case 'translate':
if(!q) return enviar('y el texto?')
to = args[0]
bahasa = {
id: 'indonesia',
en: 'english',
es: 'español',
pt: 'portugués'
}
var lang = to || 'es'
if (!bahasa[lang]) return enviar('⚠️ Lenguaje no soportado : ' + lang);
if(!m.quoted) {
word = q.split(lang)[1]
} else if(m.quoted){
word = m.quoted.text
}
await translate(word, { to: lang }).then(res => {
capt = `･:.｡.･･【ＴＲＡＮＳＬＡＴＥ】･･.｡.:･\n`
capt += `\nき⃟🎭Original : ${q} `
capt += `\nき⃟〽️Traduccion : ${res.text}`
capt +=`\nき⃟💎Codigo :` + bahasa[to].toUpperCase()
return enviar(capt)
}).catch(err => {
return enviar('⚠️ Error')
})
break


case 'sb':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😔😔`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break

case 'attp':
if (args.length < 1) return enviar(`Ejemplo: ${p  + comando} Hola`)
var c = "GkBotz";
var d = "Sticker amimado"
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await createExif(c,d)
tobi.sendMessage(from, buffer, sticker)
break

case 'borra':
case 'sbr':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await tobi.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DIO ERROR 😞`)
nobg = fs.readFileSync(rano)
tobi.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
enviar('marca una imagen para eso')
}
break
//<~FIM DOS COMANDOS DE FIGURINHAS


case 'play':
if(!q) return enviar('Que estas Buscando??')
enviar(`\n  ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n`)
const { Client } = require("youtubei");
const ms = require('pretty-ms');
const youtube = new Client();
const usetube = require('usetube')
const ak2 = await usetube.searchVideo(q)
const data = await youtube
.getVideo(`https://www.youtube.com/watch?v=${ak2.videos[0].id}`);

result = `   
╭──▢ *_PLAY YOUTUBE_*
📃 *Titulo* · _${data.title}_
⏳ *Duracion* · _${ms(Number(data.duration + '000'))}_
👤 *Autor* · _${data.channel.name}_
📆 *Subido el* · _${data.uploadDate}_
👀 *Visitas* · _${data.viewCount}_
👍🏻 *Likes* · _${data.likeCount}_
╰─────────────────`
res = await yts(q)
buffer = await getBuffer(res.all[0].image)
play2 = 'sᴇʟᴇᴄᴄɪᴏɴᴇ ᴇʟ ғᴏʀᴍᴀᴛᴏ'

sendButImage(from, `${result}`, `${play2}`, buffer, 
[
{buttonId:`${p}play1 ${q}`, buttonText: {displayText: '⫹⫺ AUDIO'}, type:1},
{buttonId:`${p}playvid2 ${q}`, buttonText: {displayText: '⫹⫺ VIDEO'}, type:1}
])
res = await y2mateV(`https://www.youtube.com/watch?v=${ak2.videos[0].id}`).catch(e => {
})
break


case 'play1':
try {
addFilter(from)
enviar(`\n  ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n`)
if (args.length < 1) return enviar(resposta.play)
anu = await yts(q)
res = await y2mateA(anu.all[0].url)
buffer = await getBuffer(anu.all[0].image)
console.log(color(chalk.bgRedBright(`Descargando:`)))
console.log(res)
stod = `${sender}`
sendFileFromUrl(res[0].link, audio, {filename: res[0].output, mimetype: 'audio/mp4', quoted: fkontak})
} catch (err) {
enviar('Error')
}
break


case 'playvid2': //a
try {
addFilter(from)
enviar(`\n  ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n`)
tobi.updatePresence(from, Presence.composing)
if (args.length < 1) return enviar(resposta.play)
resB= await yts(q)
res = await y2mateV(resB.all[0].url)
console.log(color(chalk.blueBright(`Descargando:`)))
console.log(res)
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', caption: `*_Titulo:_* ${res[0].judul}\n*_Tamaño:_* ${res[0].size}\n*_Calidad:_* ${res[0].quality}\n*_Link:_*${resB.all[0].url}`})
} catch (err) {
enviar('Error')
}
break


case 'tomp3':
addFilter(from)
if (!isQuotedVideo) return enviar(`marque un video con ${p}tomp3`) 
enviar(`\n  ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n`)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tobi.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return enviar('Fallo al convertir')
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break

case 'fast':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break


case 'slow':
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tobi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'reverse':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tobi.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break


case 'gigant':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tobi.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'nightcore':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘹𝟥....\n`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return enviar('Erro')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'bass':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'estadillos':
addFilter(from)
if (!isQuotedAudio) return enviar('Marque un audio')
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'ytsearch':
addFilter(from)
if (args.length < 1) return enviar(resposta.play)
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await tobi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `◩ *${NomeDoBot}*`
await tobi.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./base de dados/lib/bot/fotos/mclovin.jpg'),quoted: mek, caption: ytresult})
break

case 'somber':
addFilter(from)
enviar(`\n ·𝘈𝘱𝘭𝘪𝘤𝘢𝘯𝘥𝘰 𝘦𝘧𝘦𝘤𝘵𝘰....\n`)
encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mehdia = await tobi.downloadAndSaveMediaMessage(encmmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mehdia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break

//<~COMEÇO DOS COMANDOS DE JOGOS

case 'slot':
case 'mslot':
var somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : ?? : 🍍') ||(somtoy == '🥝 : ?? : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : ??') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : ?? : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Usted gano!!!"
} else {
var vitr = "Usted perdio..."
}
if (!bater) {
bateriaLoliIta = `${tempo}`
}
if (bater) {
bateriaLoliIta = `bateria en : *${bater}*`
}
const buttons = [{buttonId: `${p}slot`, buttonText: {displayText: `🎰 SIGUIENTE SLOT 🎰`}, type: 1}]
const buttonMessage = { contentText:
`Consiga 3 para ganar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]
║
║
║           ${somtoy}  ◄━━┛
║
║
║          [💰SLOT💰 | 777 ]
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝

${vitr}`, footerText: `${bateriaLoliIta}`, buttons: buttons, headerType: 1}
if (vitr == "Usted gano!!!") {
setTimeout( () => {
enviar(`Usted gano ${ppg} de xp!!!`)
}, 1100)
}
tobi.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
break

case 'xo':
if (!isGroup) return enviar('Solo en grupos!')
if (args.length < 1) return enviar('Etiqueta a tu oponente!')
if (isTTT) return enviar('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Etiqueta!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
tobi.sendMessage(from, `*🎳 Tictactoe 🎲*

[@${er2.split('@')[0]}] Te desafían a convertirte en un oponente del juego🔥
Escribe Y/N para aceptar o rechazar el juego.

Escribe ${p}delttc , Para reiniciar los juegos en el grupo!`, text, {contextInfo: {mentionedJid: [er2]}})
break
case 'delxo':
if (!isGroup) return enviar('Solo en grupos!')
if (!isTTT) return enviar('No hay juego en este grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
enviar('Listo')
break


case 'preto':
case 'feo':
case 'basura':
case 'burro':
case 'gordo':
case 'pobre':
case 'bonito':
case 'imbecil':
case 'gostoso':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
d = []
teks = `el mas *${comando}* es : `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'amongus':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus =
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'getn':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = tobi.contacts[ambl] != undefined ? tobi.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : tobi.contacts[ambl].notify || tobi.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
enviar(sname)
break

case 'getname':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const arroz = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
Nombre = `${arroz}`
tobi.sendMessage(from, Nombre, text, {quoted: mek})
break

case 'dado':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/datauser/dados/'+dadu+'.webp')
tobi.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tagme':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
const tagme = {text: `@${sender.split("@")[0]} 🧙‍♂️`, contextInfo: {mentionedJid: [sender]}}
tobi.sendMessage(from, tagme, text)
break

case 'casino':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
tobi.updatePresence(from, Presence.composing)
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍒',
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : ??',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Usted gano!!!"
} else {
var Vitória = "Usted perdio..."
}
if (!bater) {
bateriaLoliIta = `bateria: ${baterai}`
}
if (bater) {
bateriaLoliIta = `bateria en : *${bater}*`
}
const cassinoButtons = [{buttonId: `${p}casino`, buttonText: {displayText: `Next`}, type: 1}]
const buttonkMessage = {
contentText:
`
┏━━━━❪🎰❫━━━━
┣►${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`,
footerText: `${bateriaLoliIta}`, buttons: cassinoButtons, headerType: 1}
tobi.sendMessage(from, buttonkMessage, MessageType.buttonsMessage, {quoted: mek})
if (Vitória == "Você ganhou!!!") {
dinherocassino = Math.floor(Math.random() * 14) + 10000
addKoinUser(sender, dinherocassino)
setTimeout( () => {
enviar(`Parabéns você ganhou *${dinherocassino}* dinheiro 💰💎`)
}, 1100)
}
break

case "ppt":
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(linguagem.tterro())
ppt = ["piedra","papel","tijera"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Usted gano ${ppg} en xp`
if ((pptb == "piedra" && args == "papel") ||
(pptb == "papel" && args == "tijera") ||
(pptb == "tijera" && args == "piedra")) {
var vit = "victoria"
} else if ((pptb == "piedra" && args == "tijera") ||
(pptb == "papel" && args == "piedra") ||
(pptb == "tijera" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "piedra" && args == "piedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tijera" && args == "tijera")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "victoria") {
var tes = "Victoria del jugador"
}
if (vit == "derrota" ) {
var tes = "Victoria del bot"
}
if (vit == "empate" ) {
var tes = "EL juego termino en empate"
}
enviar(`Bot jogou: ${pptb}\nEL jugador jugo: ${args}\n\n${tes}`)
if (tes == "Victoria del jugador") {
enviar(pph)
}
break

case 'gado':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Maestro Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Maestro dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Maestro", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Maestro dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
enviar(hisil)
break

case 'sn':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
const sn = ['si', 'no']
gosto = body.slice(3)
if (args.length < 1) return tobi.sendMessage(from, `debe hacer una pregunta...\nEjemplo: ${p}sn O ${SeuNome} Usted es perezoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegun mis calculos... ${jawab}`
enviar(hasil)
break

case 'probabilidad':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
tobi.updatePresence(from, Presence.composing)
var avb = body.slice(7)
if (args.length < 1) return tobi.sendMessage(from, `Usted debe digitar correctamente \nEjemplo: ${p}probabilidad de ${SeuNome} ser una puta`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `la probabilidad ${body.slice(7)}\n\nes de... ${random}%`
tobi.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break



case 'level':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(resposta.leveis)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, leveltab(sender, pushname, userLevel, userXp, patt, getLevel), text, {quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
break

case 'ranklevel':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(resposta.leveis)
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderbuenasrdlvl = `*〈👾 NIVEL 👾〉*\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderbuenasrdlvl += `⪧ ⃝༘⃕ꪶ📱ꫂ @${userh[i].id.replace('@s.whatsapp.net', '')}\n⪧ ⃝༘⃕ꪶ👾ꫂ 𝚇ᴘ: ${userh[i].xp}\n⪧ ⃝༘⃕ꪶ🌀ꫂ 𝙻ᴇᴠᴇʟ: ${userh[i].level}\n\n`
}
tobi.sendMessage(from, leaderbuenasrdlvl, text, {quoted: mek})
} catch (err) {
m.reply(err)
await enviar(`Por lo menos 10 usurios registrados para acceder al banco de datos`)
}
break

case 'dick':
addFilter(from)
random = `${Math.floor(Math.random() * 35)}`
const tamaño = random
if (tamaño < 13 ) {pp = 'solo fimosis'} else if (tamaño == 13 ) {pp = 'paso el promedio😳'} else if (tamaño == 14 ) {pp = 'paso el promedio😳'} else if (tamaño == 15 ) {pp = 'Dios, que le vas a meter?'} else if (tamaño == 16 ) {pp = 'Dios, que le vas a meter?'} else if (tamaño == 17 ) {pp = 'calma man, la minita no es un pozo😳'} else if (tamaño == 18 ) {pp = 'calma man, la minita no es un pozo😳'} else if (tamaño == 19 ) {pp = 'calma man, la minita no es un pozo😳'} else if (tamaño == 20 ) {pp = 'Usted tiene un poste entre las piernas???...'} else if (tamaño == 21 ) {pp = 'Usted tiene un poste entre las pierns???...'} else if (tamaño == 22 ) {pp = 'Usted tiene un poste entre las piernas???...'} else if (tamaño == 23 ) {pp = 'Usted tiene un poste entre las piernas???...'} else if (tamaño == 24 ) {pp = 'Usted tiene un poste entre las piernas???...'} else if (tamaño > 25 ) {pp = 'vas a procurar cuidar eso?'
}
hasil = `Su pene es de  ${random}cm\n\n${pp}`
enviar(hasil)
break

case 'gay':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... es hetero😔'} else if (boiola == 21 ) {bo = '+/- bobo'} else if (boiola == 23 ) {bo = '+/- bobo'} else if (boiola == 24 ) {bo = '+/- bobo'} else if (boiola == 25 ) {bo = '+/- bobo'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- bobo'} else if (boiola == 28 ) {bo = '+/- bobo'} else if (boiola == 29 ) {bo = '+/- bobo'} else if (boiola == 30 ) {bo = '+/- bobo'} else if (boiola == 31 ) {bo = 'tengo mi desconfianza...😑'} else if (boiola == 32 ) {bo = 'tengo mi desconfianza...😑'} else if (boiola == 33 ) {bo = 'tengo mi desconfianza...😑'} else if (boiola == 34 ) {bo = 'tengo mi desconfianza...??'} else if (boiola == 35 ) {bo = 'tengo mi desconfianza...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tengo mi desconfianza...??'} else if (boiola == 38 ) {bo = 'tengo mi desconfianza...😑'} else if (boiola == 39 ) {bo = 'tengo mi desconfianza...😑'} else if (boiola == 40 ) {bo = 'tengo mi desconfianza...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'usted es gay??'
}
hasil = `Usted es ${random}% gay\n\n${bo}`
enviar(hasil)
break

case 'roleta':
addFilter(from)
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./base de dados/database/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
tobi.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tobi.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

case 'caracoroa':
addFilter(from)
const cara = fs.readFileSync('./base de dados/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/datauser/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/datauser/cara/'+fej+'.webp')
tobi.sendMessage(from, cararoa, sticker, {quoted: mek})
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAIS
case 'animes':
addFilter(from)
const total_gp6 = `${totalchat.length}`
var totalchat = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const animesMenu4431 = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, animesMenu4431, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button6s = [{buttonId: `${p}banco`, buttonText: {displayText: '💲 MENU BANCO 💱'}, type: 1}]
var button6s = {contentText: `${(linguagem.animes(pushname, hr, total_gp6, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ cargando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ velocidad : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tiempo activado : *${horaOn(os.uptime())}*\`\`\``, buttons: button6s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button6s, MessageType.buttonsMessage, {quoted: mek})
break


case 'ace':
mortandela(from)
pw = ["wallpaper ace", "ace"]
teks = pw[Math.floor(Math.random() * pw.length)]
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'holo':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar(`Se esta enviando...`)
holo = await axios.get(`https://nekos.life/api/v2/img/holo`)
bufholo = await getBuffer(holo.data.url)
tobi.sendMessage(buf, MessageType.image, {quoted: mek, thumbnail: fs.readFileSync('./src/Over-bot.jpg')})

break


case 'pussy':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
bufpusy = await getBuffer(pusiimg.data.url)
tobi.sendMessage(from, bufpusy, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
enviar('Error 😔..')
})
break

case 'trap':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
trap = await axios.get(`https://nekos.life/api/v2/img/trap`)
buftrap = await getBuffer(trap.data.url)
tobi.sendMessage(from, buftrap, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
enviar('Error 😔..')
})
break

case 'eron':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
eron = await axios.get(`https://nekos.life/api/v2/img/eron`)
buferon = await getBuffer(eron.data.url)
tobi.sendMessage(from, buf, MessageType.image, {quoted: mek, thumbnail: fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
enviar('Error 😔..')
})
break

case 'anal':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
anal = await axios.get(`https://nekos.life/api/v2/img/anal`)
bufanal = await getBuffer(anal.data.url)
tobi.sendMessage(from, bufanal, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
enviar('Error 😔..')
})
break

case 'ero':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
ero = await axios.get(`https://nekos.life/api/v2/img/ero`)
bufero = await getBuffer(ero.data.url)
tobi.sendMessage(from, bufero, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
enviar('Error 😔..')
})
break

case 'cum':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
cum = await axios.get(`https://nekos.life/api/v2/img/cum_jpg`)
bufcum = await getBuffer(cum.data.url)
tobi.sendMessage(from, bufcum, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
enviar('Error 😔..')
})
break

case 'les':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
les = await axios.get(`https://nekos.life/api/v2/img/les`)
bufles = await getBuffer(les.data.url)
tobi.sendMessage(from, bufles, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
	enviar('Error 😔..')
	})
break

case 'holoero':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
holero = await axios.get(`https://nekos.life/api/v2/img/holoero`)
bufholero = await getBuffer(holero.data.url)
tobi.sendMessage(from, bufholero, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
	enviar('Error 😔..')
	})
break

case 'hentai':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
tobi.sendMessage(from, buffer, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
	enviar('Error 😔..')
	})
break

case 'eroyuri':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
yuri = await axios.get(`https://nekos.life/api/v2/img/eroyuri`)
bufyuri = await getBuffer(yuri.data.url)
tobi.sendMessage(from, bufyuri, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
break

case 'hentain':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
addFilter(from)
enviar('Se esta enviando...')
hentai = await axios.get(`https://nekos.life/api/v2/img/hentai`)
bufhen = await getBuffer(hentai.data.url)
tobi.sendMessage(from, bufhen, MessageType.image, {quoted: mek, thumbnail:fs.readFileSync('./src/Over-bot.jpg')})
.catch(err => {
	enviar('Error 😔..')
	})
break

case 'doxing':
if (!isRegistered) return enviar(mess.only.usrReg)
if (!isGroup) return enviar(mess.only.group)
f = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
enviar(`*Doxeo de ${mentionUser}*

*Nombre:* _${f.name}_
*Genero:* _${f.gender}_
*Edad:* _${f.age}_
*Fecha de nacimiento:* _${f.birtday}_
*Ocupacion:* _${f.occupation}_
*Dirección:* _${f.address}_
*Codigo postal:* _${f.zip_code}_
*Estado:* _${f.state}_
*Pais:* _${f.country}_

=====================

*E-Mail:* ${f.email}
*Contraseña:* ${f.password}_
*Telefono:* _${f.phone}_

=====================

*No. Tarjeta de credito:* ${f.card}
*CVV:* _${f.code}_
*Fecha de vencimiento:* _${f.date}_
*PIN:* _${f.pin_code}_

=====================

*Peso:* _${f.weight}_
*Estatura:* _${f.height}_
*Tipo de sangre:* _${f.blood_type}_
*Estado:* _${f.status}_

=====================
`)
break

case 'afk':
if (!isRegistered) return enviar( ind.noregis())
tels = body.slice(4)
if (args.length < 1) return enviar('Hermano afk, ¿para qué?')
var ain = mek.participant
const tagzz = {
text: `@${jid.split("@s.whatsapp.net")[0]} *EN AFK ${tels} NO MOLESTES YA*`,
contextInfo: { mentionedJid: [ain] }
}
tobi.sendMessage(from, tagzz, text, {quoted: mek})
break

case 'top5':
addFilter(from)
if (!isGroup) return enviar('*Este comando solo puede usarse en grupos🤕')
member = []
top5 = args.join(' ')
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
teks = `
*😵TOP CINCO:*\nTop 5 de *${top5}* en este grupo\n1 @${o1.jid.split('@')[0]}\n2 @${o2.jid.split('@')[0]}\n3 @${o3.jid.split('@')[0]}\n4 @${o4.jid.split('@')[0]}\n5 @${o5.jid.split('@')[0]}`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break

case 'tiktok':
case 'tiktokdl':
addFilter(from)
enviar(`\n  ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n`)
if(args.lenght < 1) return enviar("y el link?")
result = `  𝘛𝘪𝘬𝘛𝘰𝘬 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥
 ${p}tiktok <${q}>
_Se puede descargar en_ :

° ඬ⃟📥 *nowm*
° ඬ⃟📥 *audio*`
but = [
	{buttonId: `${p}tiktoknowm ${q}`, buttonText: {displayText: `𝑁𝑂𝑊𝑀`,}, type: 1,},
    {buttonId: `${p}tiktokaudio ${q}`, buttonText: {displayText: `𝐴𝑈𝐷𝐼𝑂`,}, type: 1,}
]
sendButLocation(from, result, '𝘚𝘦𝘭𝘦𝘤𝘤𝘪𝘰𝘯𝘦 𝘦𝘭 𝘧𝘰𝘳𝘮𝘢𝘵𝘰\nSi no se envia intenta de nuevo', img2, but, mek)
break

case 'tiktoknowm':
case 'tiktokaudio':
if(!isUrl(q) && !q) return enviar(nolink('tiktok'));
enviar(`\n  ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n`)
ttdl = await Ttdl(q)
if(comando.includes('nowm')) {
buffer = await getBuffer(ttdl.result.nowatermark)
if(!buffer) return enviar('⚠️ Error')
tobi.sendMessage(from, buffer, video, {quoted: mek, caption: msg.done})
} else if (comando.includes('audio')) {
buffer = await getBuffer(ttdl.result.nowatermark)
if(!buffer) return enviar('⚠️ Error')
tobi.sendMessage(from, buffer, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true,  filename: `Tiktokdescarga.mp3`})
}
break

			case 'igvid':
				case 'igimg':
				case 'igdl':
				case 'ig':
				  if(!isUrl(q) && !q) return enviar(nolink('instagram'));
				  enviar('\n ·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...\n')
				  igdl = await igDl(q)
				  if(comando.includes('vid')) {
				  buffer = await getBuffer(igdl.result.link)
				  desk = igdl.result.desc
				  console.log(color(desk, 'green'))
				  if(!buffer) return enviar('⚠️Error')
					tobi.sendMessage(from, buffer, video, {quoted: fmen, caption: desk})
				  } else {
					if(comando.includes('img')){
					buffer = await getBuffer(igdl.result.link)
					desk = igdl.result.desc
					console.log(color(desk))
					if(!buffer) return enviar('⚠️Error')
					tobi.sendMessage(from, buffer, image, {quoted: fmen , caption: desk})
				  }
				}
				  break

case  'neko':
addFilter(from)
if (!isGroup) return enviar('solo en grupos')
if (!isNsfw) return enviar(mess.nsfwoff)
enviar('Se esta enviando...')
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
tobi.sendMessage(from, buffer, image, {caption: `${comando}, cierto?`, quoted: mek, thumbnail:null})
break

case 'classic':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
res = await axios.get(`https://nekos.life/api/v2/img/classic`)
buf = await getBuffer(res.data.url)
tobi.sendMessage(from, buf, MessageType.image, {quoted: mek, thumbnail:null})
break

case 'erokemo':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
res = await axios.get(`https://nekos.life/api/v2/img/erokemo`)
buf = await getBuffer(res.data.url)
tobi.sendMessage(from, buf, MessageType.image, {quoted: mek, thumbnail:null})
break


case 'femboy':
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
femboy = await axios.get(`https://nekos.life/api/v2/img/femdom`)
bufem = await getBuffer(femboy.data.url)
tobi.sendMessage(from, bufem, MessageType.image, {quoted: mek, thumbnail:null})
.catch(err => {
	enviar('Error 😔..')
	})
break

case 'blowjob':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
res = await axios.get(`https://nekos.life/api/v2/img/blowjob`)
buf = await getBuffer(res.data.url)
tobi.sendMessage(from, buf, MessageType.image, {quoted: mek, thumbnail:null})
break


case 'boobs':
addFilter(from)
if (!isNsfw) return enviar(mess.nsfwoff)
if (!isGroup) return enviar('solo en grupos')
enviar('Se esta enviando...')
res = await axios.get(`https://nekos.life/api/v2/img/boobs`)
buff = await getBuffer(res.url)
tobi.sendMessage(from, buff, MessageType.image, {quoted: mek, thumbnail:null})
break


//<~FIM DOS COMANDOS DE HENTAI
case 'sticker':
case 'stiker':
case 's':
var a = "GkBotz";
          var b = "Sticker";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await tobi.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('start', function (cmd) {
			console.log(color(`Iniciando : ${cmd}`))
		   })
		.on('error', function (err) {
			console.log(`Error : ${err}`)
          tobi.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', function () {
			console.log(color('Done'))
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          tobi.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await tobi.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('start', function (cmd) {
			console.log(color(`Iniciando : ${cmd}`))
		})
		.on('error', function (err) {
			console.log(`Error : ${err}`)
          tobi.sendMessage(from, 'Error', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
         .on('end', function () {
			console.log(color('Done'))
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          tobi.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await tobi.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, tobi, mek, from)
          } else {
          enviar(`Envie una imagen con ${p}s o un video(menos de 11 segundos)`)
          }
          break;
//<~COMEÇO DOS COMANDOS ANIMES

case 'pinterest':
addFilter(from)
mortandela(from)
teks = `${q}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Error foto no encontrada_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break
//<~FIM DOS COMANDOS DE ANIMES

case 'bateria':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
tobi.sendMessage(from, linguagem.bateria(baterai, porcentagem), text, {contextInfo: fotothumb, quoted: mek})
break

case 'bc':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (args.length < 1) return enviar('que quiere comunicar?')
             anu100 = await tobi.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc100 = await tobi.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             tobi.sendMessage(_.jid, bc100, image, {quoted: ftroli, caption: `*「 BROADCAST 」*\n\n${body.slice(4)}`})
}
             fakeyt('Listo😎')
             } else {
             for (let _ of anu100) {
             tobi.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": `*©Whatsapp | ${NomeDoBot}*`,
			"buttons": [
			{"buttonId": `${p}y`,
			"buttonText": {"displayText": "Okey😎"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fs.readFileSync('./src/rose.jpg'),
			}}, MessageType.buttonsMessage )
}
             fakeyt('Listo😎')
}
             break

case 'bcstik':
case 'bcstk':
addFilter(from)
if (!isOwner) return enviar('Usted es mi dueño???')
if (!isQuotedSticker) return enviar('envie un sticker!!!')
bcsticker = await tobi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await tobi.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
tobi.sendMessage(_.jid, bc, sticker)
}
enviar(`stickers enviados para : ${totalchat.length} chats`)
}
break

case 'block':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return enviar(linguagem.ownerB(ownerName))
tobi.blockUser(`${body.slice(8)}@c.us`, "add")
tobi.sendMessage(from, `Usuário bloqueado`, text, {quoted: mek})
break

case 'ban':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} usuario baneado con exito, no podra usar comandos del bot`
mentions(`${susp}`, mentioned, true)
break

case 'unban':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return  enviar(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} Usuario desbaneado con exito`
mentions(`${susp}`, mentioned, true)
break

case 'q':
if (!m.quoted) return enviar('responder à mensagem!')
let qse = tobi.serializeM(await m.getQuotedObj())
if (!qse.quoted) return enviar('a mensagem que você está respondendo não contém uma resposta!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'antipalabra':
addFilter(from)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins && !isOwner) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`[❗]activar/desactivar, Ejemplo ${p + comando} activar`)
if (args[0] === 'on') {
if (isPalavrão) return enviar('*ya esta Activado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplay)
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
enviar(mess.only.tobireplayoff)
} else {
enviar(`[❗]on/off, Ejemplo ${p + comando} on`)
}
break

case 'addpalabra':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』La funcion anti palabra esta desactivada`)
if (args.length < 1) return enviar( `Use asi : ${p + comando} [palabra]. ejemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* adicionado na lista con exito!`)
break

case 'delpalabra':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』La funcion anti palabra esta desactivada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palabra]. ejemplo ${p + comando} puta`)
let dbw = body.slice(12)
var position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palabra *${q}* removida da lista con exito!`)
break

case 'listname':
addFilter(from)
if (!isOwner) return  enviar(linguagem.ownerB())
if (!isPalavrão) return enviar(`『❗』La funcion anti palabra esta desactivada`)
teks = `Lista de palabras: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `⪧ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nUse el comando\n${p}addpalabra『Nombre』\nPara añadir una palabra\n\n Use este comando \n${p}Delpalabra『Nombre』\nPara eliminar una palabra`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": palavra } })
break


case 'delchat':
if (!isOwner) return enviar(resposta.macaco)
enviar('_Elminando este chat..._')
console.log(from)
tobi.modifyChat(from, "delete", {includeStarred: false})
break

case 'setname':
if (args.length < 1) return enviar(`Use ${p + comando} Churrasco-Bot`)
if (!isOwner) return enviar(resposta.macaco)
anu = q
tobi.updateProfileName(anu)
await enviar(`_*Exito al cambiar el nombre del bot_*\n\nPara : *${anu}*`)
break


case 'tagstick':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque un sticker`)
}
break


case 'tagimg':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque una imagen`)
}
break

case 'readmore':
			    	case 'more':
              const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  enviar(mess.error.api)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    enviar( text1 + readmore + text2)
                    break

case 'ping':{
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🍃Velocidad ${latensi.toFixed(4)} Segundos 
🐲${oldd - neww} milisegundos
⏱️Runtime : ${runtime(process.uptime())}
`
.trim()
m.reply(respon)
}
break

case 'mystat':
if (!isOwner) return enviar('Este comando solo lo puede usar mi creador')
var groups = tobi.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = tobi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
listrik = charging ? '⚡' : 'ga di cas'
let timestampp = speed()
let latensy = speed() - timestampp
neww = performance.now()
oldd = performance.now()
respon = `
Velocidad ${latensy.toFixed(4)} Segundos 

🌐 ${ll}Estatus:${ll}
-${groups.length} Grupos
-${privat.length} Chats personales
-${totalChat.length} Tatal chats

📱 ${ll}Phone info:${ll}

${ll}Bateria : ${baterai}${ll}
${ll}Cargando : ${charge}${ll}

*Device*:\n\n ${ll}${JSON.stringify(tobi.user,null,2)}${ll}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memoria usada_
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n') + '```'}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
break

case 'leertodo':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
const readallid = await tobi.chats.all()
tobi.setMaxListeners(25)
for (let xyz of readallid) {
await tobi.chatRead(xyz.jid)
}
tobi.sendMessage(from, `Listo`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos los chats fueron vistos",
'jpegThumbnail': fs.readFileSync('./base de dados/lib/bot/fotos/mclovin.jpg')
}
}
}
})
break

case 'bloqueados':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break

case 'desligar':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
enviar('Bot desligado')
setTimeout(() => {
tobi.close()
}, 3000)
break

case 'reload':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
enviar("Aguarde, Estoy reiniciando...")
exec(`cd && npm start`, (err, stdout) => {
if(err) return tobi.sendMessage(from, "Error", text, {quoted: mek})
if (stdout) {
tobi.sendMessage(from, stdout, text, {quoted: mek})
}
})
break

case 'clearchat':
case 'clearall':
case 'clear-all':
addFilter(from)
if (!isOwner) return enviar(resposta.macaco)
tobif = await tobi.chats.all()
list_chat = await tobi.chats.all()
for (let chat of list_chat) {
tobi.modifyChat(chat.jid, "eliminar", {includeStarred: false})
}
tobi.sendMessage(from, `Listo`, text, {
quoted: { key: {fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos los chats fueron eliminados`
}
}
}
})
break
//<~FIM DOS COMANDOS DE DONOS

case 'report':
addFilter(from) //info
const bug = `${q}`
 if (args.length > 300) return tobi.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `╭ ⋟ Problema + Reporte\n├ ⋟ De: ${pushname}\n├ ⋟ Numero: @${sender.split("@s.whatsapp.net")[0]}\n╰━━━━━── • ──━━━━━\n ⋟ Problema:\n${bug}`
var options = {text: teks1, contextInfo: {mentionedJid: [sender]},}
tobi.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text)
enviar("Mensaje enviado; Spam = block + ban.")
break


case 'ddd':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`Use ${p + comando} 94`)
try {
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${dddlist}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'letra':
addFilter(from)
if (!isRegistered) return webPage(semPremium(p))
if (args.length < 1) return enviar("q estas buscando?")
mortandela(from)
teks = body.slice(7)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
lirikLagu(teks).then((res) => {
if (!res[0].result) {
enviar("_*❌Titulo no encontrado...❌*_\n\nTalves no tengo esa respuesta")
} else {
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${res[0].result}`})
}
})

break

case 'github':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length == 0) return enviar(`_*Sintaxe de Nombre incorreto...*_\n\nExemplo: ${p + comando} Tobizinho`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/github?Nombredeusuario=${q}`)
githubByTobi = `🏷️ Nombre: ${anu.Nombre_De_Usuario}\n📆 Creada el : *${anu.Criada_Em}*\n💫 Ultima atualizacion : *${anu.Ultima_Atualizacao}*\n👤 Seguidores : *${anu.Total_De_Seguidores}*\n👥 Total de Repositorios : *${anu.Total_De_Seguidores}*\n🌍 Seguindo : *${anu.Total_Seguindo} Personas*\n📊 Seguidores : \n*${anu.Link_De_Seguidores}*\n📁 Repositório : \n*${anu.Link_Do_Repositorios}*`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/welcome.mp4')
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${githubByTobi}`})
} catch {
enviar(resposta.erroB)
}
break

case 'mediafire':
addFilter(from)
if (args.length < 1) return enviar('donde esta el link? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return enviar(mess.error.Iv)
mortandela(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `
き⃟❗️MEDIAFIRE DOWNLOAD

${ll}📁 Nombre : ${res[0].nama}${ll}
${ll}📊 tamaño : ${res[0].size}${ll}
${ll}🧧 Link : ${res[0].link}${ll}

_*Aguarde, se esta subiendo la media......*_`
enviar(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'covidst':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
teks = args.join(' ')
if (!q) return enviar(`${emoji_bot} Use apenas a sigla do estado e, apenas uma sigla por consulta`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
const by_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ Covid Mundo
╭┤➩ acronimo del estado: ${anu.Sigla_Do_Estado}
┃│➩ Estado: ${anu.Estado_Informado}
┃│➩ Casos desconocidos: ${anu.Casos_Desconhecidos}
┃│➩ Casos encontrados: ${anu.Casos_Encontrados}
┃│➩ Muertes encontradas: ${anu.Mortes_Encontradas}
┃│➩ Prevensiones Econtradas: ${anu.Previsoes_Encontradas}
┃╰═════════════⊷
╰══════「★」═════⊷`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${by_tobi_thiago}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'sticknime':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Cadê o texto vida? kkkkk")
mortandela(from)
try {
buscarByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/buscaranimes?anime=${buscarByTobi}`)
img = await getBuffer(anu.Foto_anime)
tobi.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
} catch {
enviar(resposta.erroB)
}
break

case 'wiki':
if (args.length < 1) return enviar('¿Qué estás buscando?')
teks = args.join(' ')
res = await wikipedia(teks).catch(e => {
return enviar('_[ ! ] Titulo no encontrado_')
})
result = `き⃟🔖Pregunta : ${q}
き⃟🔖Respuesta : ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
enviar(result)
})
break


case 'brainly':
	if (args.length < 1) return enviar('y la pregunta?')
					brien = args.join(' ')
					  brainly(`${brien}`).then(res => {
					  teks = '❉───────────────────────❉\n'
					  for (let Y of res.data) {
					  teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					  }
					  tobi.sendMessage(from, teks, text, {quoted:ftrol, detectLinks: false})
					  })
					  break



case 'storesearch':
addFilter(from)
if (!isRegistered) return webPage(semPremium(p))
if (!q) return enviar(`❎ Que imagem você quer que eu pesquise? `);
mortandela(from)
teks = body.slice(7)
try {
sexooo = await axios.get(`https://api.zeks.me/api/sgplay?apikey=apivinz&q=${teks}`)
sexooo2 = sexooo.data
zaps = `*Lista de ${sexooo2.result[0].title}*\n\n`
for (let i = 0; i < sexooo2.result.length; i++) {
zaps += `\n$‣ 🧧 Nombre : *${sexooo2.result[i].title}*\n‣ 🏷️Link : *${sexooo2.result[i].url}*\n‣ ✔️ Version *${sexooo2.result[i].rating}*\n`
}
buffer = await getBuffer(sexooo2.result[0].thumb)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: zaps})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'imagen':
addFilter(from)
if (!q) return enviar(`❎ Que imagen quiere buscar? `);
enviar('·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...')
try {
let pin = await hx.pinterest(q);
let ac = pin[Math.floor(Math.random() * pin.length)];
let di = await getBuffer(ac);
await tobi.sendMessage(from, di, image, {quoted: mek, caption: `✅ *${q}*` });
} catch (e) {
enviar(linguagem.erro())
}
break;

case 'glosearch':
addFilter(from)
if (args.length < 1) return enviar('Que esta buscando?')
teks = args.join(' ')
enviar('·𝐸𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...')
try {
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `\n
「  *─「🍛 GOOGLE 🍛」*  」
‣ *🧧Título :* ${i.title}
‣ *🏷️Link :* ${i.link}
‣ *📁Sobre :* ${i.snippet}`
}
var tobiDev = kant.trim()
wew = fs.readFileSync('./base de dados/lib/bot/fotos/welcome.mp4')
tobi.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${tobiDev}`})
} catch (e) {
enviar(linguagem.erro())
}
break

case 'pornhub':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isRegistered)
if (!q) return enviar('que estas buscando?')
mortandela(from)
anu = await fetchJson("https://api.lolhuman.xyz/api/pornhubsearch?apikey=KontoleBaperan&query=" + q);
res = anu.resultado
teks = "「🍛 PORNHUB 🍛」\n\n"
for(let i of res){
title = i.title ? `き⃟🔖Nome :\n${i.title}\n` : ''
link = i.link ? `き⃟🔖Link :\n${i.link}\n\n` : ''
teks += title + link
}
tobi.sendMessage(from, teks, MessageType.text, {quoted: mek})
} catch (e) {
sendButMessage(from, [{buttonId: linguagem.erro(), buttonText: {displayText: linguagem.erro()}, type: 1}], {quoted: mek})
}
break

case 'playstore1':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if(!q) return enviar('O que você está procurando?')
mortandela(from)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
let play = await hx.playstore(`${q}`)
let store = ' 「🍛PLAY STORE🍛」'
for (let i of play){
store += `
‣ *📌Nombre* : ${i.name}
‣ *📟Link* : ${i.link}
‣ *🎈Dev* : ${i.developer}
‣ *🔗Link Dev* : ${i.link_dev}\n❉─── 「🍛PLAY STORE🍛」───❉`
}
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${store}`})
} catch (e) {
enviar(linguagem.erro())
}
break


case 'robar':
addFilter(from)
if (!isRegistered) return webPage(semPremium(p))
var namaPackss = q.substring(0, q.indexOf('|') - 0)
var authorPackss = q.substring(q.lastIndexOf('|') + 1)
texto = body.slice(7)
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await tobi.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
tobi.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

case 'covidmundo':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
try {
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const bya_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ Covid Mundo
╭┤➩ Total de casos: ${anu.Total_Casos}
┃│➩ Total de casos activos: ${anu.Total_Casos_Ativos}
┃│➩ Total de casos criticos: ${anu.Total_Casos_Criticos}
┃│➩ Total de casos hoy: ${anu.Total_Casos_Hoje}
┃│➩ Total de muertes: ${anu.Total_Mortes}
┃│➩ Total de muertes hoy: ${anu.Total_Mortes_Hoje}
┃│➩ Total de recuperados: ${anu.Total_Recuperados}
┃╰═════════════⊷
╰══════「★」═════⊷`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${bya_tobi_thiago}`})
} catch (e) {
enviar(linguagem.erro())
}
break


case 'buypack':
addFilter(from)
payout2 = 1
const valorPack = 1000
const buyPacks = valorPack * payout2
if ( checkATMuser(sender) <= buyPacks) return enviar(`[❗] Desculpe ${pushname} no tiene suficiejnte dinero\nvalor del premium : ${valorPack} mil`)
if ( checkATMuser(sender) >= buyPacks) {
confirmATM(sender)
var pornoByTobi = [
"Michelle Rabbit\nhttps://mega.nz/folder/FXB0ELpS#CaCYgD8f8YNPc_dL4JjtDA ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ",
"Sia Sibéria\nhttps://drive.google.com/drive/u/0/mobile/folders/1pOfYV7ZFqumnZpB-6eu03fHsByBJgNWt",
"Nicole Bum\nhttps://drive.google.com/drive/mobile/folders/1MRARgrA4GIcw14MGNpr5NxAKJTcnLjra",
"Love Lilah\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3 ",
"Taty Maia\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR ",
"Me1adinha\nhttps://accounts.google.com/ServiceLogin?service=lh2&passive=1209600&osid=1&continue=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&followup=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&authuser=0\n(Via Google Fotos) ",
"Mari Ávila\nhttps://drive.google.com/drive/u/0/mobile/folders/1lVU8GgLTHfPoYUh5ZJ1oj5gluiTRmgB5 ",
"Feh Galvão\nhttps://mega.nz/folder/OxQiHJAA#8dGkVcq08YtonYSJQgZFfQ/folder/etx0QRQT ",
"Marina Mui\nhttps://mega.nz/folder/nhxWCQhC#jefLXWFJiqCXMtj6wEEN4A ",
"Sophia Carracini\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o ",
"Maria Eugênia\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3 ",
"Skylar Vox\nhttps://mega.nz/folder/XIQTSKzR#_0vLyBUESlCj3l5HCCUkQg ",
"Neiva Mara\nhttps://mega.nz/folder/PZZxQABC#IVO1DL-zczyMd1Kr83sDBw ",
"Amorazz\nhttps://mega.nz/folder/6kpT0IoT#Zqin16-ASUvoXgoEK6BsIw ",
"Nayara\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE ",
"Megnutt\nhttps://mega.nz/folder/UAJE0DQT#gCEzz702Amr2rdqSWmshMA/folder/lQx21JjC ",
"Littl Misfit\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL ",
"Anitta\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3 ",
"MC Princesa\nhttps://drive.google.com/drive/u/0/mobile/folders/1Zsj66cMEPgQTcT91VenAkl9L1TAuguSF ",
"MC Pipokinha\nhttps://drive.google.com/drive/u/0/mobile/folders/1X7u7cj8MKj1cE6hM2_mkQe9bOF8M2npm ",
"Lana Rhoades\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw ",
"Belle Delphine\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9 ",
"Venomous Dolly\nhttps://mega.nz/folder/pxYAXLjI#QnZHek_zGQDz5ct9d63Bmg ",
"MC Mirella\nhttps://seulink.online/qOkcdS\n(Esse ta com encurta) ",
"LoverLaci\nhttps://mega.nz/folder/yRIHgQ5A#euOpAQNEcZiej5uBuxjBkw/folder/XEQWSZBC ",
"Victoria Matosa\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9 ",
"Segredos Da Ana\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg\n(FONTE: Wakai T) ",
"Letícia Shirayuki\nhttps://www.mediafire.com/file/2a4kq8pmxc3je71/Let%25C3%25ADcia_Shirayuki.zip/file ",
"KITTYXKUM\nhttps://mega.nz/folder/f4xDSS7R#_5ZrSNVwLJ4nEUdEJxoijw ",
"Kinechan\nhttps://mega.nz/folder/GgxRQCaS#kdT7IidrqwgbggnpZOkMHA ",
"Grazi Mourão\nhttps://mega.nz/folder/2hwgwYpI#kUTsXqrwDNFeKcDhTINz-w ",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"Polonesa Do Hype\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC",
"Ashley Tervort\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA ",
"Ashley Alban\nhttps://mega.nz/folder/9eBBBQZb#pi0kaL6zqRYq3SoSJHUJpQ ",
"Emília Bunny\nhttps://mega.nz/folder/q1pkBJoI#5ZiKfZhaKIUg9ea0eS6EYw ",
"Maru Karv\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw ",
"Evilena\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo ",
"Bambi Doe\nhttps://mega.nz/folder/IxgyhZJI#Rd8bzK3_Ri2I3LUvy2Tf6Q ",
"Mulher Melão\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg ",
"Aline Faria\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ ",
"Rafaela Nery\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0 ",
"Remy LaCroix\nhttps://mega.nz/folder/sTxmzDAb#_0igusp-mS454WIEh_lGqg ",
"Mayakayagaia\nhttps://mega.nz/folder/5MsATbYI#V-90W2qijBk3N5YzJTgfHQ ",
"Bella Thorne\nhttps://mega.nz/folder/okw0gYLL#O6-OqnJhRYTbHiMJbNqI3Q ",
"Canela Skin\nhttps://mega.nz/folder/vN5XBIIZ#m7P5H4J_B5HcsYrf26tmoQ ",
"Hailey Queen\nhttps://mega.nz/folder/FFlgXBIT#8X5NYUFWkTjVDUqmwXSVow/folder/pc1yVbyA ",
"Adriana Chechik\nhttps://mega.nz/folder/1XgFnKyJ#HETOSi3Qi8Kwckbm2FBXDw ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ ",
"Steffy Moreno\nhttps://mega.nz/folder/QkYARZ7J#vtktDmYALs5wwcImYy8tnw ",
"Angelic Videos\nhttps://mega.nz/folder/XgMRQYAL#GidekeyDkkEDFWit2kAJ_g "]
var pornkkkByTobiNekkkk = pornoByTobi[Math.floor(Math.random() * pornoByTobi.length)]
tobi.sendMessage(from, `${pornkkkByTobiNekkkk}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Packs porno?? by © Tobikkk`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
break

case 'buyprem':
addFilter(from)
if (prem.includes(sender)) return enviar("❌ Solo se puede comprar premium 1 vez! ❌")
payout2 = 1
const koinPerlimit2 = 100000
const buyPrem = koinPerlimit2 * payout2
if ( checkATMuser(sender) <= buyPrem) return enviar(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : 100000 mil`)
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
prem.push(`${sender}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
await enviar(`き⃟💲COMPRA EXITOSA💲️⃟き\n\nき⃟👤️ Vendedor : *${me.name}*\nき⃟🏷️ Comprador : *${pushname}*\nき⃟💱 Precio do premium : *${koinPerlimit2}*`)
}
break

case 'transfer':
case 'transferir':
addFilter(from)
if (!q.includes('/')) return  enviar(`[❗] Use asi : ${p}transferir @/2500`)
const tujuan = q.substring(0, q.indexOf('/') - 1)
const jumblah = q.substring(q.lastIndexOf('/') + 1)
if(isNaN(jumblah)) return await enviar('[❗] @ del numero a transferir')
if (jumblah < 100) return enviar(`transfrência mínima e de 100 reais`)
if (checkATMuser(sender) < jumblah) return enviar(`[❗] Usted no tiene suficiente dinero, minimo 100`)
const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
fee = 0.010 *  jumblah
hasiltf = jumblah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumblah)
addKoinUser('56944451822@s.whatsapp.net', fee)
enviar(`き⃟💲TRANSFERENCIA💲️⃟き\n\nき⃟👤️ Transferidor: wa.me/${sender.split("@")[0]}\nき⃟🏷️ Recebidor : ${tujuan}\nき⃟💱 Valor De Transferencia : ${jumblah}\nき⃟🧧Tarifa : ${fee}`)
break

case 'darmoney':
addFilter(from)
if (!isOwner) return enviar("solo mi dueño")
const numeroUang = args[0].replace('@','')
const uangLimite1 = args[1]
const darmoneyUang = mek.message[type].contextInfo.mentionedJid[0]
if (uangLimite1 <= 1) return enviar(`minimo 1 limite`)
if (isNaN(uangLimite1)) return enviar(`[❗] USE ASI\n ${p + comando} @56944451822 5`)
if (!numeroUang) return enviar(`[❗] USE ASI\n ${p + comando} @56944451822 5`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./base de dados/datauser/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const result = `
╭─❒ 「 EXITO! 」 ❒
├ *🦈 ID : *${createSerial(8)}*
├ *🦈 Horário : *${moment().format('DD/MM/YY HH:mm:ss')}*
├ *🦈 Usuario : *@${updated.id.replace('@s.whatsapp.net','')}*
├ *🦈 Dinero:* ${verMoney}
└❏`
console.log(uang[found]);
enviar(result)
} else {
enviar(`[❗] Desculpe ${pushname}, este ${numeroUang} numero no esta resgistrado en el bot...`)
}
break

case 'apostar':
addFilter(from)
if (!isGroup) return enviar(`SOLAMENTE EN GRUPOS`)
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro)
const quantidader = `1000`
if (checkxpr <= quantidader) return enviar(`Por lo menos debe tener ${quantidader} de dineiro.\n\nSu dinero: ${checkxpr}`)
if (args.length !== 1) return enviar('Especifique una cantidad para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return enviar(`No puede apostar más dinero del que tiene y nuestro límite de apuestas es ${quantidader} dinero por vez!\n\nSu dinero: ${checkxpr}`)
if (Number(args[0]) < 1000) return enviar(`Minimo a apostar es ${quantidader} de dinero`)
if (isNaN(args[0])) return enviar('Para apostar, use números, no letras, a menos que quiera perder todos los XP que tiene.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await enviar(`🔪BANG!!!💣\n\nPerdio en la roleta-russa, matando a una puerca, ${nrolxp} de su dinero.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await enviar(`🙌🏻SE SALVO😇\n\nUSted gano ${prolxp} de dinero`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await enviar(`👎🏼BAAAAH MALA SUERTE😔\n\nPerdio ${nrolxp} Continua apostando`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await enviar(`👍🏼MUCHA SUERTE!!!😬\n\n.\nGano ${prolxp} dinero!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await enviar(`💀 WASTED - FALLECIO ⚰️\n\nAcabo perdiendo ${nrolxp} de dinero, para ganar, aposte mas alto.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await enviar(`✨CONGRATULATIONS💫\n\nFinalmente, reciba su ${prolxp} de dinero`)
addKoinUser(sender, prolxp, dinheiro)
}
break

case 'dinero':
case 'money':
const testeDinheiro = checkATMuser(sender)
const checkDinheiro = checkATMuser(sender, testeDinheiro)
enviar(linguagem.dinheiroConta(checkDinheiro))
break

case 'rankmoney':
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
_registered.sort((a, b) => (a.name < b.name) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '🏆【DINERO】🏆\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 5; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º*🥇 : @${uang[i].id.replace('@s.whatsapp.net', '')}
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│ ➣ Nombre: _${uang[i].Nombre}_
│ ➣ Dinero: _${uang[i].uang}_💰
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
await enviar(rankDinheiro)
} catch (err) {
m.reply(err)
await enviar(`Precisa ter mais Usuários registrados`)
}
break

case 'vermoney':
addFilter(from)
if (args.length < 1) return enviar(`Use ${p + comando} @tag`)
const verMoneyki = mek.message[type].contextInfo.mentionedJid[0]
const verMoneyMencionador = checkATMuser(verMoneyki)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
enviar(`き⃟💰_Ver dinero de ${feijoada}_💰️⃟ き\n\nき⃟💰 - Dinero: ${verMoneyMencionador}`)
break

case 'tts':
addFilter(from)
try {
if (args.length < 1) return tobi.sendMessage(from, `Usted debe usar el comando corectamente:\n${p}tts (lengua) (texto)\nEjemplo: ${p}tts es Buenas dias\n\nUse: ${p}ts para enumerar todos los idiomas`, text, {quoted: mek})
const gtts = require('./base de dados/lib/gtts')(args[0])
if (args.length < 2) return tobi.sendMessage(from, 'y el texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = '000.mp3'
dtt.length > 800
? enviar('Texto muy grande')
: gtts.save(ranm, dtt, function() {
tobi.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
})
} catch (err) {
m.reply(err)
}
fs.unlinkSync(ranm)
break

case 'infobot':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await tobi.chats.all()
charge = charging ? 'si' : 'no'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const infobotMenu = await getBuffer(ppimg)
var mediaByTobi = await tobi.prepareMessage(from, infobotMenu, MessageType.image, {thumbnail: null})
var qweriioaByTobi = mediaByTobi.message["ephemeralMessage"] ? mediaByTobi.message.ephemeralMessage : mediaByTobi
var button5s = [{buttonId: `${p}animes`, buttonText: {displayText: '☔ MENU ANIMES 🌸'}, type: 1}]
var button5s = {contentText: `${(linguagem.info(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ cargando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ velocidad : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tiempo activado : *${horaOn(os.uptime())}*\`\`\``, buttons: button5s, headerType: 4, imageMessage: qweriioaByTobi.message.imageMessage}
tobi.sendMessage(from, button5s, MessageType.buttonsMessage, {quoted: mek})
break

case 'informe':
const Jose = "56944451822@s.whatsapp.net"
const suportewhatsapp = "https://chat.whatsapp.com/E9xxK179aBE2muR9VKRK9v"
uptime = process.uptime()
const timestamp2 = speed();
const latensi2 = speed() - timestamp2
runtime2 = process.uptime()
infobot =`
▢ Nombre : ${me.name}
▢ Version Bot : 1.0
▢ Total de cmds usados : ${reqcmd}
▢ Usuarios registrados : ${_registered.length}
▢ Navegador : ${tobi.browserDescription[1]}
▢ Version do navegador: ${tobi.browserDescription[2]}
▢ Host : ${tobi.browserDescription[0]}
▢ velocidad : ${latensi2.toFixed(4)}
▢ Tiempo de ejecucion : ${temporizado(uptime)}
▢ Version whatsapp : ${tobi.user.phone.wa_version}
▢ Grupo de suporte :
${suportewhatsapp}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memoria usada_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}

⊷ *GRACIAS A* ⊶
▢ *🔮 ${NomeDoBot} ┃ ᴮᴼᵀ* :
Jose: @${Jose.split("@")[0]}
_*Creador*_
_*El arregla los bugs*_`
tobi.sendMessage(from, infobot, text, {contextInfo: fotothumb, quoted: mek})
break

case 'reportes':
report = `  ≡ *INFORMAÇÕES*
Solicite e relate funções de bug no bot, certifique-se de fornecer um relatório correto e claro!

┌──⊷ *REPORTES* ⊶
▢ *${p}Solicitar (Texto)*
▢ *${p}Informe (Texto)*
└──────────────

*Total*
Solicitações : ${_solicitar.length}
Informes : ${_informe.length}

✆ ou você pode entrar em contato com o proprietário para obter mais informações.`
enviar(report)
break

case 'informe':
yoi = q
if (args.length < 1) return enviar('✳️ Insira o Nombre da função de erro que ocorre quando o teste!')
if (yoi.length > 200) return enviar('O texto excede o limite, o seu pedido foi rejeitado!')
_informe.push(yoi)
fs.writeFileSync('./base de dados/lib/informe.json', JSON.stringify(_informe))
enviar(`✅ Obrigado *${pushname}*, Seu relatório foi armazenado no banco de dados`)
break

case 'informes':
if (!isOwner) return enviar("Somente meu dono pae")
teks = ` ≡ *RELATÓRIOS*\nA seguir está uma lista de relatórios recebidos na data *${fecha()}* com o número de relatórios *${_informe.length}*\n\n┌───⊷ *LISTA* ⊶\n`
for (let lap of _informe) {
teks += `▢ ${lap}\n`
}
teks  += `└──────────────`
enviar(teks.trim())
break

case 'pedido':
case 'solicitar':
yoi = q
if (args.length < 1) return enviar('✳️ Insira as funções que deseja no Bot')
if (yoi.length > 200 ) return enviar('O texto excede o limite, o seu pedido foi rejeitado!')
_solicitar.push(yoi)
fs.writeFileSync('./base de dados/lib/solicitar.json', JSON.stringify(_solicitar))
enviar(`✅ Obrigado *${pushname}*, Sua solicitação foi armazenada no banco de dados.`)
break

case 'solicitações':
if (!isOwner) return enviar(ownerB())
teks = ` ≡ *SOLICITAÇÕES*\nA seguir está uma lista de inscrições recebidas na data *${fecha()}* com o número de pedidos *${_solicitar.length}*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _solicitar) {
teks += `▢ ${req}\n`
}
teks  += `└──────────────`
enviar(teks.trim())
break

//-- NADA A VER

case 'ts':
enviar(ts())
break

default:break
    }
	if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Tictactoe 🎲*

Jugador 1 @${tty.er1.split('@')[0]}=❌
Jugador 2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno de = @${tty.er1.split('@')[0]}`
tobi.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
tobi.sendMessage(from, `Ya @${tty.er2.split('@')[0]} se niega a participar :(

*(Le teme al éxito 👎👎👎👎)*`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return enviar('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return enviar('Ya lleno, utiliza los otros vacíos')
if (main[0].gilir.includes(sender)) return enviar('Espera tu turno!.')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲

*El ganador es : *@${tty.er1.split('@')[0]} UwU*\n`
ucapan2 = `*🎳 Result 🎲*

*El resultado final:*

${ttt}`
tobi.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*?? Resultado 🎲*

*_Empate 🐢_*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
enviar(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

Jugador 2 @${tty.er2.split('@')[0]}=⭕
Jugador 1 @${tty.er1.split('@')[0]}=❌

${ttt}

Turno de = @${tty.er2.split('@')[0]}`
tobi.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese el número correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲*

El ganador es : *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Tictactoe 🎲*

*El resultado final:*

${ttt}`
tobi.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*Empate 🐢👎*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
enviar(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

Jugador 1 @${tty.er1.split('@')[0]}=⭕
Jugador 2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Turno de = @${tty.er1.split('@')[0]}`
 tobi.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
 }
 
 if (isMedia && isAutoSt && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = mek
	const media = await tobi.downloadAndSaveMediaMessage(encmedia)
	var c = "GkBotz"; 
          var d = "Autosticker";
	          await createExif(c,d)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('start', function (cmd) {
			console.log(color(`Iniciando : ${cmd}`))
		   })
		.on('error', function (err) {
			console.log(`Error : ${err}`)
          tobi.sendMessage(from, 'Error', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', function () {
			console.log(color('Done'))
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          tobi.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
	} else if ((isMedia && isAutoSt && !mek.message.imageMessage || isQuotedVideo)) {
	const encmedia = mek
	const media = await tobi.downloadAndSaveMediaMessage(encmedia)
	if (Buffer.byteLength(media) >= 6186598.4) return enviar(`El tamaño es muy grande`)
	          await createExif(c,d)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('start', function (cmd) {
			console.log(color(`Iniciando : ${cmd}`))
		})
		.on('error', function (err) {
			console.log(`Error : ${err}`)
          tobi.sendMessage(from, 'Error', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
         .on('end', function () {
			console.log(color('Done'))
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          tobi.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
}

	if (budy.startsWith(`cum`)) {
    const none = fs.readFileSync('./src/cum.mp4');
	tobi.sendMessage(from, none, MessageType.video, {quoted: mek, mimetype: 'video/mp4', duration: 99999999})
                  }
	 if (budy.startsWith(`Cum`)) {
	const none = fs.readFileSync('./src/cum.mp4');
	tobi.sendMessage(from, none, MessageType.video, {quoted: mek, mimetype: 'video/mp4', duration: 99999999})
	 }

	 if (isGroup && isSimi && budy != undefined) {
					console.log(budy)
					muehe = await simih(budy)
					console.log(muehe)
					enviar(muehe)
				} else {

				}
					} catch (err) {
	console.log(color('[ ERROR ]', 'red'), err)
    tobi.setStatus(`| GkBotz | Desconectado...`)
					}
				
})
}
starts()