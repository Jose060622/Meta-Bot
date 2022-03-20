const cheerio = require("cheerio");
const fetch = require("node-fetch");
const yts = require("yt-search");
const yt = require("ytdl-core");

const YoutubeMp4 = async (yutub) => {
function post(url, formdata) {
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams(Object.entries(formdata))
    })
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let ytId = ytIdRegex.exec(yutub)
url = 'https://youtu.be/' + ytId[1]
let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1
  })
const mela = await res.json()
const $ = cheerio.load(mela.result)
const hasil = []
let imagen = $('div').find('.thumbnail.cover > a > img').attr('src')
let nombre = $('div').find('.thumbnail.cover > div > b').text()
let modulo = ' *By ShellThear* '
let calidad = $('div').find('#mp4 > table > tbody > tr:nth-child(4) > td:nth-child(3) > a').attr('data-fquality')
let tipo = $('div').find('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(3) > a').attr('data-ftype')
let formato = `${nombre}.` + tipo
let tamaño = $('div').find('#mp4 > table > tbody > tr:nth-child(4) > td:nth-child(2)').text()
let id = /var k__id = "(.*?)"/.exec(mela.result)[1]
let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
    type: 'youtube',
    _id: id,
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: tipo,
    fquality: calidad
  })
const meme = await res2.json()
const supp = cheerio.load(meme.result)
let enlace = supp('div').find('a').attr('href')
hasil.push({ imagen, nombre, modulo, calidad, tipo, tamaño, formato, enlace})
return hasil
}

module.exports = { YoutubeMp4 }