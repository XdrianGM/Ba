const yts = require('yt-search')
const axios = require('axios')
const cheerio = require('cheerio')
const { sizeFormatter } = require('human-readable')
const crypto = require('crypto')
const translate = require('translate-google-api')

async function aptoidedl(text) {
try {

    let api = await aptoideDownload(text)
    
    let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
    let name = api.name
    let version = api.version
    let size = api.size
    let amount_downloads = api.downloads
    let added = api.added
    let developer = api.developer
    let store = api.store
    let thumbnai = api.icon
    let thumbnail = await shortenUrl(thumbnai)
    let url2 = api.link
    let dl_url = await shortenUrl(url2)
    
    return { starlights, name, version, size, amount_downloads, added, developer, store, thumbnail, dl_url }
  } catch {
  }
}

async function characterAi(id_character, text, userName) {
    try {
        let star = await characterai(id_character, text, userName)
        
        let msg = star.content;
        let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
        
        return { starlights, msg }
    } catch {
    }
}

async function trads(texto, lang = 'es') {
    try {
        const resultado = await translate(texto, { to: lang });
        return resultado
    } catch (error) {
    }
}

async function characterai(id_character, text, senderName) {
    const url = 'https://chat.nd-api.com/chat';
    const data = {
        conversation_id: null,
        character_id: id_character,
        inference_model: "default",
        inference_settings: {
            max_new_tokens: 9999999,
            temperature: 0.7,
            top_p: 0.7,
            top_k: 90
        },
        message: text 
    }
    
    const ids = crypto.randomUUID();
    const headers = {
        'Accept': 'application/json, text/plain, ',
        'Content-Type': 'application/json',
        'X-Guest-UserId': ids, 
        'X-Country': 'PE',
        'X-App-Id': 'spicychat'
    }
    
    try {
        const ress = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
        
        const result = await ress.json();
        const dls = result.message.content.replace(/Honey/g, senderName)
        const trades = await trads(dls, 'es')
        
        return {
            creator: senderName,
            conversation_id: result.message.conversation_id,
            role: result.message.role,
            id: result.message.id,
            content: trades, 
            prev_id: result.message.prev_id,
            createdAt: result.message.createdAt,
            engine: result.engine
        }
    } catch {
    }
}

async function Nationality(Number) {
try {
let userNationalityData = Nationality2(Number)
let userNationality = userNationalityData.status ? `${userNationalityData.result.name} ${userNationalityData.result.emoji}` : 'Desconocido'

let nationality = userNationality
let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

return { starlights, nationality }
} catch {
}}

function Nationality2(phoneNumber) {
  const countryCodes = {
  '52': { name: 'Mexico', emoji: '🇲🇽' },
  '1': { name: 'United States', emoji: '🇺🇸' },
  '1': { name: 'Canada', emoji: '🇨🇦' },
  '1': { name: 'Bahamas', emoji: '🇧🇸' },
  '1': { name: 'Barbados', emoji: '🇧🇧' },
  '1': { name: 'Jamaica', emoji: '🇯🇲' },
  '1': { name: 'Trinidad and Tobago', emoji: '🇹🇹' },
  '591': { name: 'Bolivia', emoji: '🇧🇴' },
  '55': { name: 'Brazil', emoji: '🇧🇷' },
  '56': { name: 'Chile', emoji: '🇨🇱' },
  '57': { name: 'Colombia', emoji: '🇨🇴' },
  '506': { name: 'Costa Rica', emoji: '🇨🇷' },
  '53': { name: 'Cuba', emoji: '🇨🇺' },
  '1-767': { name: 'Dominica', emoji: '🇩🇲' },
  '1-809': { name: 'Dominican Republic', emoji: '🇩🇴' },
  '593': { name: 'Ecuador', emoji: '🇪🇨' },
  '503': { name: 'El Salvador', emoji: '🇸🇻' },
  '502': { name: 'Guatemala', emoji: '🇬🇹' },
  '592': { name: 'Guyana', emoji: '🇬🇾' },
  '504': { name: 'Honduras', emoji: '🇭🇳' },
  '1-876': { name: 'Jamaica', emoji: '🇯🇲' },
  '52': { name: 'Mexico', emoji: '🇲🇽' },
  '505': { name: 'Nicaragua', emoji: '🇳🇮' },
  '507': { name: 'Panama', emoji: '🇵🇦' },
  '595': { name: 'Paraguay', emoji: '🇵🇾' },
  '51': { name: 'Peru', emoji: '🇵🇪' },
  '1-787': { name: 'Puerto Rico', emoji: '🇵🇷' },
  '1-939': { name: 'Puerto Rico', emoji: '🇵🇷' },
  '1-758': { name: 'Saint Lucia', emoji: '🇱🇨' },
  '1-721': { name: 'Sint Maarten', emoji: '🇸🇽' },
  '597': { name: 'Suriname', emoji: '🇸🇷' },
  '1-868': { name: 'Trinidad and Tobago', emoji: '🇹🇹' },
  '598': { name: 'Uruguay', emoji: '🇺🇾' },
  '58': { name: 'Venezuela', emoji: '🇻🇪' },
  '93': { name: 'Afghanistan', emoji: '🇦🇫' },
  '971': { name: 'United Arab Emirates', emoji: '🇦🇪' },
  '374': { name: 'Armenia', emoji: '🇦🇲' },
  '994': { name: 'Azerbaijan', emoji: '🇦🇿' },
  '973': { name: 'Bahrain', emoji: '🇧🇭' },
  '880': { name: 'Bangladesh', emoji: '🇧🇩' },
  '975': { name: 'Bhutan', emoji: '🇧🇹' },
  '673': { name: 'Brunei', emoji: '🇧🇳' },
  '855': { name: 'Cambodia', emoji: '🇰🇭' },
  '86': { name: 'China', emoji: '🇨🇳' },
  '357': { name: 'Cyprus', emoji: '🇨🇾' },
  '995': { name: 'Georgia', emoji: '🇬🇪' },
  '91': { name: 'India', emoji: '🇮🇳' },
  '62': { name: 'Indonesia', emoji: '🇮🇩' },
  '98': { name: 'Iran', emoji: '🇮🇷' },
  '964': { name: 'Iraq', emoji: '🇮🇶' },
  '972': { name: 'Israel', emoji: '🇮🇱' },
  '81': { name: 'Japan', emoji: '🇯🇵' },
  '962': { name: 'Jordan', emoji: '🇯🇴' },
  '7': { name: 'Kazakhstan', emoji: '🇰🇿' },
  '965': { name: 'Kuwait', emoji: '🇰🇼' },
  '996': { name: 'Kyrgyzstan', emoji: '🇰🇬' },
  '856': { name: 'Laos', emoji: '🇱🇦' },
  '961': { name: 'Lebanon', emoji: '🇱🇧' },
  '960': { name: 'Maldives', emoji: '🇲🇻' },
  '976': { name: 'Mongolia', emoji: '🇲🇳' },
  '95': { name: 'Myanmar', emoji: '🇲🇲' },
  '977': { name: 'Nepal', emoji: '🇳🇵' },
  '968': { name: 'Oman', emoji: '🇴🇲' },
  '92': { name: 'Pakistan', emoji: '🇵🇰' },
  '970': { name: 'Palestine', emoji: '🇵🇸' },
  '63': { name: 'Philippines', emoji: '🇵🇭' },
  '974': { name: 'Qatar', emoji: '🇶🇦' },
  '82': { name: 'South Korea', emoji: '🇰🇷' },
  '966': { name: 'Saudi Arabia', emoji: '🇸🇦' },
  '65': { name: 'Singapore', emoji: '🇸🇬' },
  '94': { name: 'Sri Lanka', emoji: '🇱🇰' },
  '963': { name: 'Syria', emoji: '🇸🇾' },
  '886': { name: 'Taiwan', emoji: '🇹🇼' },
  '992': { name: 'Tajikistan', emoji: '🇹🇯' },
  '66': { name: 'Thailand', emoji: '🇹🇭' },
  '90': { name: 'Turkey', emoji: '🇹🇷' },
  '993': { name: 'Turkmenistan', emoji: '🇹🇲' },
  '971': { name: 'United Arab Emirates', emoji: '🇦🇪' },
  '998': { name: 'Uzbekistan', emoji: '🇺🇿' },
  '84': { name: 'Vietnam', emoji: '🇻🇳' },
  '967': { name: 'Yemen', emoji: '🇾🇪' },
  '213': { name: 'Algeria', emoji: '🇩🇿' },
  '244': { name: 'Angola', emoji: '🇦🇴' },
  '229': { name: 'Benin', emoji: '🇧🇯' },
  '267': { name: 'Botswana', emoji: '🇧🇼' },
  '226': { name: 'Burkina Faso', emoji: '🇧🇫' },
  '257': { name: 'Burundi', emoji: '🇧🇮' },
  '237': { name: 'Cameroon', emoji: '🇨🇲' },
  '238': { name: 'Cape Verde', emoji: '🇨🇻' },
  '236': { name: 'Central African Republic', emoji: '🇨🇫' },
  '235': { name: 'Chad', emoji: '🇹🇩' },
  '269': { name: 'Comoros', emoji: '🇰🇲' },
  '243': { name: 'Democratic Republic of the Congo', emoji: '🇨🇩' },
  '242': { name: 'Republic of the Congo', emoji: '🇨🇬' },
  '225': { name: 'Ivory Coast', emoji: '🇨🇮' },
  '253': { name: 'Djibouti', emoji: '🇩🇯' },
  '20': { name: 'Egypt', emoji: '🇪🇬' },
  '240': { name: 'Equatorial Guinea', emoji: '🇬🇶' },
  '291': { name: 'Eritrea', emoji: '🇪🇷' },
  '251': { name: 'Ethiopia', emoji: '🇪🇹' },
  '241': { name: 'Gabon', emoji: '🇬🇦' },
  '220': { name: 'Gambia', emoji: '🇬🇲' },
  '233': { name: 'Ghana', emoji: '🇬🇭' },
  '224': { name: 'Guinea', emoji: '🇬🇳' },
  '245': { name: 'Guinea-Bissau', emoji: '🇬🇼' },
  '254': { name: 'Kenya', emoji: '🇰🇪' },
  '266': { name: 'Lesotho', emoji: '🇱🇸' },
  '231': { name: 'Liberia', emoji: '🇱🇷' },
  '218': { name: 'Libya', emoji: '🇱🇾' },
  '261': { name: 'Madagascar', emoji: '🇲🇬' },
  '265': { name: 'Malawi', emoji: '🇲🇼' },
  '223': { name: 'Mali', emoji: '🇲🇱' },
  '222': { name: 'Mauritania', emoji: '🇲🇷' },
  '230': { name: 'Mauritius', emoji: '🇲🇺' },
  '212': { name: 'Morocco', emoji: '🇲🇦' },
  '258': { name: 'Mozambique', emoji: '🇲🇿' },
  '264': { name: 'Namibia', emoji: '🇳🇦' },
  '227': { name: 'Niger', emoji: '🇳🇪' },
  '234': { name: 'Nigeria', emoji: '🇳🇬' },
  '250': { name: 'Rwanda', emoji: '🇷🇼' },
  '290': { name: 'Saint Helena', emoji: '🇸🇭' },
  '239': { name: 'Sao Tome and Principe', emoji: '🇸🇹' },
  '221': { name: 'Senegal', emoji: '🇸🇳' },
  '248': { name: 'Seychelles', emoji: '🇸🇨' },
  '232': { name: 'Sierra Leone', emoji: '🇸🇱' },
  '27': { name: 'South Africa', emoji: '🇿🇦' },
  '211': { name: 'South Sudan', emoji: '🇸🇸' },
  '249': { name: 'Sudan', emoji: '🇸🇩' },
  '268': { name: 'Eswatini', emoji: '🇸🇿' },
  '255': { name: 'Tanzania', emoji: '🇹🇿' },
  '228': { name: 'Togo', emoji: '🇹🇬' },
  '216': { name: 'Tunisia', emoji: '🇹🇳' },
  '256': { name: 'Uganda', emoji: '🇺🇬' },
  '260': { name: 'Zambia', emoji: '🇿🇲' },
  '263': { name: 'Zimbabwe', emoji: '🇿🇼' },
  '355': { name: 'Albania', emoji: '🇦🇱' },
  '374': { name: 'Armenia', emoji: '🇦🇲' },
  '43': { name: 'Austria', emoji: '🇦🇹' },
  '375': { name: 'Belarus', emoji: '🇧🇾' },
  '32': { name: 'Belgium', emoji: '🇧🇪' },
  '387': { name: 'Bosnia and Herzegovina', emoji: '🇧🇦' },
  '359': { name: 'Bulgaria', emoji: '🇧🇬' },
  '385': { name: 'Croatia', emoji: '🇭🇷' },
  '357': { name: 'Cyprus', emoji: '🇨🇾' },
  '420': { name: 'Czech Republic', emoji: '🇨🇿' },
  '45': { name: 'Denmark', emoji: '🇩🇰' },
  '372': { name: 'Estonia', emoji: '🇪🇪' },
  '358': { name: 'Finland', emoji: '🇫🇮' },
  '33': { name: 'France', emoji: '🇫🇷' },
  '995': { name: 'Georgia', emoji: '🇬🇪' },
  '49': { name: 'Germany', emoji: '🇩🇪' },
  '30': { name: 'Greece', emoji: '🇬🇷' },
  '36': { name: 'Hungary', emoji: '🇭🇺' },
  '354': { name: 'Iceland', emoji: '🇮🇸' },
  '353': { name: 'Ireland', emoji: '🇮🇪' },
  '39': { name: 'Italy', emoji: '🇮🇹' },
  '371': { name: 'Latvia', emoji: '🇱🇻' },
  '370': { name: 'Lithuania', emoji: '🇱🇹' },
  '352': { name: 'Luxembourg', emoji: '🇱🇺' },
  '356': { name: 'Malta', emoji: '🇲🇹' },
  '373': { name: 'Moldova', emoji: '🇲🇩' },
  '377': { name: 'Monaco', emoji: '🇲🇨' },
  '382': { name: 'Montenegro', emoji: '🇲🇪' },
  '31': { name: 'Netherlands', emoji: '🇳🇱' },
  '47': { name: 'Norway', emoji: '🇳🇴' },
  '48': { name: 'Poland', emoji: '🇵🇱' },
  '351': { name: 'Portugal', emoji: '🇵🇹' },
  '40': { name: 'Romania', emoji: '🇷🇴' },
  '7': { name: 'Russia', emoji: '🇷🇺' },
  '381': { name: 'Serbia', emoji: '🇷🇸' },
  '421': { name: 'Slovakia', emoji: '🇸🇰' },
  '386': { name: 'Slovenia', emoji: '🇸🇮' },
  '34': { name: 'Spain', emoji: '🇪🇸' },
  '46': { name: 'Sweden', emoji: '🇸🇪' },
  '41': { name: 'Switzerland', emoji: '🇨🇭' },
  '90': { name: 'Turkey', emoji: '🇹🇷' },
  '380': { name: 'Ukraine', emoji: '🇺🇦' },
  '44': { name: 'United Kingdom', emoji: '🇬🇧' },
  '39': { name: 'Vatican City', emoji: '🇻🇦' },
  '61': { name: 'Australia', emoji: '🇦🇺' },
  '672': { name: 'Antarctica', emoji: '🇦🇶' },
  '675': { name: 'Papua New Guinea', emoji: '🇵🇬' },
  '679': { name: 'Fiji', emoji: '🇫🇯' },
  '689': { name: 'French Polynesia', emoji: '🇵🇫' },
  '682': { name: 'Cook Islands', emoji: '🇨🇰' },
  '686': { name: 'Kiribati', emoji: '🇰🇮' },
  '687': { name: 'New Caledonia', emoji: '🇳🇨' },
  '64': { name: 'New Zealand', emoji: '🇳🇿' },
  '683': { name: 'Niue', emoji: '🇳🇺' },
  '677': { name: 'Solomon Islands', emoji: '🇸🇧' },
  '678': { name: 'Vanuatu', emoji: '🇻🇺' },
  '681': { name: 'Wallis and Futuna', emoji: '🇼🇫' },
  '684': { name: 'American Samoa', emoji: '🇦🇸' },
  '685': { name: 'Samoa', emoji: '🇼🇸' },
  '676': { name: 'Tonga', emoji: '🇹🇴' },
  '688': { name: 'Tuvalu', emoji: '🇹🇻' },
  '690': { name: 'Tokelau', emoji: '🇹🇰' },
  '691': { name: 'Federated States of Micronesia', emoji: '🇫🇲' },
  '692': { name: 'Marshall Islands', emoji: '🇲🇭' },
  '679': { name: 'Fiji', emoji: '🇫🇯' },
  '672': { name: 'Norfolk Island', emoji: '🇳🇫' },
  '680': { name: 'Palau', emoji: '🇵🇼' },
}

  let prefix = ''
  for (let i = 1; i <= 3; i++) {
    let currentPrefix = phoneNumber.slice(1, i + 1)
    if (countryCodes[currentPrefix]) {
      prefix = currentPrefix
      break
    }
  }

  if (countryCodes[prefix]) {
    return {
      status: true,
      result: {
        name: countryCodes[prefix].name,
        emoji: countryCodes[prefix].emoji
      }
    }
  } else {
    return {
      status: false,
      message: 'País no encontrado'
    }
  }
}
    
async function kwaidl(url) {
    try {
        let starlights = await KwaiDownloader(url)
        if (!starlights) return null;

        let title = starlights.title;
        let quality, size, dl_url;

        for (let video of starlights.video) {
            quality = video.quality;
            size = video.size;

            let urldl = video.url;
            dl_url = await shortenUrl(urldl);
        }

        let starlight = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

        return { starlight, title, quality, size, dl_url }
    } catch {
    }
}

async function KwaiDownloader(link) {
    try {
        var server = await axios.post('https://magicdown.net/wp-json/aio-dl/video-data/', { url: link }, {
            headers: {
                'Accept-Ranges': 'bytes',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
                'Access-Control-Allow-Origin': 'https://magicdown.net',
                'Access-Control-Expose-Headers': 'X-WP-Total, X-WP-TotalPages, Link',
                'Allow': 'POST',
                'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
                'Content-Encoding': 'br',
                'Content-Type': 'application/json; charset=UTF-8',
                'Pragma': 'no-cache',
                'Server': 'hcdn',
                'X-Content-Type-Options': 'nosniff',
                'X-DNS-Prefetch-Control': 'on',
                'X-Hcdn-Cache-Status': 'DYNAMIC',
                'X-Litespeed-Cache-Control': 'no-cache',
                'X-Powered-By': 'PHP/8.1.29',
                'X-Robots-Tag': 'noindex'
            }
        })
        var { url, title, thumbnail, medias } = server.data
        return {
            creator: "@Samush$_",
            title,
            thumb: thumbnail,
            link: url,
            video: medias.map(info => ({
                url: info.url,
                quality: info.quality,
                size: info.formattedSize
            }))
        }
    } catch {
        return null
    }
}


async function tiktokStalk(text) {
try {
  const userInfo = await tiktokStalk2(text)
  if (userInfo.status === 'error') {
  } else {
  let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
  let username = userInfo.username
  let nickname = userInfo.nickname
  let bio = userInfo.bio
  let pp = userInfo.profilePicture
  const profile = await shortenUrl(pp)
  let followers = formatNumber(userInfo.followers)
  let following = formatNumber(userInfo.following)
  let likes = formatNumber(userInfo.likes)
  let videos = formatNumber(userInfo.videos)
  let accountPrivate = userInfo.isPrivate ? 'Si' : 'No'
  let verified = userInfo.isVerified ? 'Si' : 'No'
  let region = userInfo.region
  let accountCreated = userInfo.createTime
  return { starlights, username, nickname, bio, profile, followers, following, likes, videos, accountPrivate, verified, region, accountCreated }
  }
} catch  {
  }
}

async function tiktokStalk2(user) {
  try {
    const url = await fetch(`https://tiktok.com/@${user}`, {
      headers: {
        'User-Agent': 'PostmanRuntime/7.32.2'
      }
    })
    const html = await url.text()
    const $ = cheerio.load(html)
    const data = $('#__UNIVERSAL_DATA_FOR_REHYDRATION__').text()
    const result = JSON.parse(data)
    if (result['__DEFAULT_SCOPE__']['webapp.user-detail'].statusCode !== 0) {
      const ress = {
        status: 'error',
        message: 'User not found!',
      }
      return null
    }
    const userInfo = result['__DEFAULT_SCOPE__']['webapp.user-detail']['userInfo']
    const stats = userInfo.stats
    
    function formatDate(timestamp) {
      const date = new Date(timestamp * 1000)
      return date.toLocaleString()
    }

    const detailedInfo = {
      username: userInfo.user.uniqueId,
      nickname: userInfo.user.nickname,
      bio: userInfo.user.signature,
      profilePicture: userInfo.user.avatarLarger,
      followers: stats.followerCount,
      following: stats.followingCount,
      likes: stats.heartCount,
      videos: stats.videoCount,
      isPrivate: userInfo.user.privateAccount,
      isVerified: userInfo.user.verified,
      region: userInfo.user.region,
      createTime: formatDate(userInfo.user.createTime)
    }
    return detailedInfo
  } catch  {
  }
}

async function ChatGptV2(text) {
  try {
    let result = await useadrenaline(text)

    if (result) {
      let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
      return { starlights, result }
      previousMessages = [...previousMessages, { role: "user", content: text }]
    } else {
    }
  } catch {
  }
}

const axiosInstance = axios.create({
  baseURL: 'https://gke-prod-api.useadrenaline.com/',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'x-instance': 'adrenaline'
  }
});

async function useadrenaline(query) {
  try {
    const data = {
      title: query,
      body: "",
      snippets: [],
      is_rush_enabled: false,
      is_public: false,
      files: []
    };

    const { data: postResponseData } = await axiosInstance.post('question', data);
    const { data: threadResponseData } = await axiosInstance.get(`thread/${postResponseData.question_id}?page=1&per_page=10`);
    let jobStatus = 'IN_PROGRESS';
    let dataHasil = null;

    while (jobStatus === 'IN_PROGRESS') {
      const { data: answersResponseData } = await axiosInstance.get(`question/${threadResponseData.list[0].question.id}/answers`);
      jobStatus = answersResponseData[0].job_status;
      dataHasil = answersResponseData[0].content;

      if (jobStatus === 'IN_PROGRESS') {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    return dataHasil;
  } catch {
  }
}

async function ChatGpt(text) {
  try {
    let result = await gpt(text)

    if (result) {
      let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
      return { starlights, result }
      previousMessages = [...previousMessages, { role: "user", content: text }]
    } else {
    }
  } catch {
  }
}

async function gpt(query) {
  let url = `https://letmegpt.com/search?q=${query}`

  try {
    let response = await axios.get(url)
    let $ = cheerio.load(response.data)
    return $('#gptans').text()
  } catch {
  }
}

async function openAi(text) {
let previousMessages = []
const fetch = (await import('node-fetch')).default

//  if (!text) return conn.reply(m.chat, `*🚩 Ingrese su petición*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} como hacer estrella de papel`, m, rcanal)
  
//  await m.react('💬')

  try {
//    let name = conn.getName(m.sender)
    let prompt = `Actuaras como un Bot de WhatsApp el cual fue creado por おDanịel.xyz⁩, tu seras Ai Hoshino, basada en la Idol Ai Hoshino del manga Oshi No Ko, y tu manera de expresarte será actuando como mujer alegre.`
    
    let api = await fetch.default(`https://deliriusapi-official.vercel.app/ia/gptprompt?text=${text}&prompt=${prompt}`)
    
    let result = await api.json()
    
    if (result.status && result.code === 200) {
      let msg = result.gpt
//      await conn.reply(m.chat, result.gpt, m, rcanal)
let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
return { starlights, msg }
      previousMessages = [...previousMessages, { role: "user", content: text }]
    } else {
    }
    //return { msg }
} catch {
}}

async function GDriveDl(link) {
	try {
		let res = await GDriveDl2(link)
		let title = res.fileName
		let size = res.fileSize
		let type = res.mimetype
		let url2 = res.downloadUrl
		const dl_url = await shortenUrl(url2)
		let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
		return { starlights, title, size, type, dl_url }	
	} catch {
	}
}

const someincludes = ( data, id ) => {
	let res = data.find(el => id.includes(el) )
	return res ? true : false;
}

const formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl2(url) {
const fetch = await import('node-fetch')
	let id, res = { "error": true }
	if (!(url && url.match(/drive\.google/i))) return res
	try {
		id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
		if (!id) return null
		res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
			method: 'post',
			headers: {
				'accept-encoding': 'gzip, deflate, br',
				'content-length': 0,
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'origin': 'https://drive.google.com',
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
				'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
				'x-drive-first-party': 'DriveWebUi',
				'x-json-requested': 'true' 
			}
		})
		let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
		if (!downloadUrl) return null
		let data = await fetch(downloadUrl)
		if (data.status !== 200) return data.statusText
		return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
	} catch (e) {
		console.log(e)
		return res
	}
}

async function igdl(url) {
    var sv = await fetch("https://www.fastdl.live/api/search", {
        method: "POST",
        headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "es-US,es-419;q=0.9,es;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "Referer": "https://www.fastdl.live/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: JSON.stringify({ url: url })
    })
    var dates = await sv.json()
    if (dates.success && Array.isArray(dates.result)) {
        return dates.result.map(item => ({
            type: item.type,
            dl_url: item.downloadLink
        }))
    } else {
        throw new Error("🍟 No se encontro el resultado")
    }
}


async function mediafireV2(url) {
  try {
    let res = await mediafiredl2(url);
    if (!res.status) return null;

    let { filename, filetype, filesize, uploadAt, link } = res;
    let dl_url = await shortenUrl(link);
    let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
    
    return { starlights, filename, filesize, uploadAt, filetype, dl_url };

  } catch (error) {
  }
}

async function mediafiredl2(url) {
  try {
    const { data, status } = await axios.get(url);
    const $ = cheerio.load(data);
    let filename = $('.dl-info > div > div.filename').text();
    let filetype = $('.dl-info > div > div.filetype').text();
    let filesize = $('a#downloadButton').text().split("(")[1].split(")")[0];
    let uploadAt = $('ul.details > li:nth-child(2)').text().split(": ")[1];
    let link = $('#downloadButton').attr('href');
    let desc = $('div.description > p.description-subheading').text();
    if (!link) return { status: false, msg: 'No result found' };

    let result = {
      status: true,
      filename: filename,
      filetype: filetype,
      filesize: filesize,
      uploadAt: uploadAt,
      link: link,
      desc: desc
    };
    return result;
  } catch (error) {
    console.error(error);
    return { status: false, msg: 'No result found' };
  }
}

async function aptoide(text) {
  try {
    let searchResults = await aptoideSearch2(text)
    if (searchResults.length === 0) {
      return null
    }

    let api = await aptoideDownload(searchResults[0].id)
    
    let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
    let name = api.name
    let version = api.version
    let size = api.size
    let amount_downloads = api.downloads
    let added = api.added
    let developer = api.developer
    let store = api.store
    let thumbnai = api.icon
    let thumbnail = await shortenUrl(thumbnai)
    let url2 = api.link
    let dl_url = await shortenUrl(url2)
    
    return { starlights, name, version, size, amount_downloads, added, developer, store, thumbnail, dl_url }
  } catch {
  }
}

const aptoideSearch2 = async function (args) {
    const fetch = (await import('node-fetch')).default
    const AptoideAPI = 'http://ws75.aptoide.com/api/7'
    let res = await fetch.default(`${AptoideAPI}/apps/search?query=${encodeURIComponent(args)}&limit=1000`);
    res = await res.json()

    return res.datalist.list.map(v => {
      return {
        name: v.name,
        id: v.package
      }
    })
  }

  const aptoideDownload = async function (id) {
    const fetch = (await import('node-fetch')).default
    const AptoideAPI = 'http://ws75.aptoide.com/api/7'
    let res = await fetch.default(`${AptoideAPI}/apps/search?query=${encodeURIComponent(id)}&limit=1`)
    res = await res.json()

    let appInfo = res.datalist.list[0]
    if (!appInfo) throw new Error('Aplicación no encontrada.')

    const downloadss = appInfo.stats && typeof appInfo.stats.downloads === 'number' ? appInfo.stats.downloads : 'No disponible'

    return {
      name: appInfo.name,
      icon: appInfo.icon,
      link: appInfo.file.path,
      version: appInfo.file.vername,
      size: (appInfo.file.filesize / (1024 * 1024)).toFixed(2) + ' MB',
      added: appInfo.added,
      downloads: formatNumber(downloadss),
      store: appInfo.store.name,
      developer: appInfo.developer.name
    }
  }
  
  function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


async function fbdl(url) {
  try {
    let result = await fbdlv1(url)
    if (result.data.result.length > 0) {
      let videoUrl = result.data.result[0].url
      let url2 = videoUrl
		const dl_url = await shortenUrl(url2)
		let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
      return { starlights, dl_url }
    } else {
    }
  } catch {
  }
}

async function fbdlv1(url, proxy = null) {
  let decode = url => JSON.parse(`"${url.replace(/\\\//g, "/")}"`);
  let rgx = {
    hd: /"playable_url_quality_hd":\s*"([^"]+)"/,
    sd: /"playable_url":\s*"([^"]+)"/,
    alta: /"browser_native_hd_url":\s*"([^"]+)"/,
    baja: /"browser_native_sd_url":\s*"([^"]+)"/
  };
  let result = {
    creator: '@Samush',
    data: { isPrivate: false, result: [] }
  };
  try {
    let cns = await axios.get(url, {
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9,id;q=0.8',
        'cache-control': 'max-age=0',
        'sec-ch-prefers-color-scheme': 'light',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41'
      },
      httpsAgent: proxy
    });
    let body = cns.data;
    for (let [quality, regex] of Object.entries(rgx)) {
      const match = body.match(regex);
      if (match) {
        result.data.result.push({ quality, type: 'mp4', url: decode(match[1]) });
      }
    }
    if (!result.data.result.length && body.includes('isprivate')) {
      result.data.isPrivate = true;
    }
    return result;
  } catch (error) {
    return {
      creator: '@Samush',
      message: error.message || '://'
    }
  }
}

async function pinterestdl(url) {

  try {
    let res = await pintvideos(url)

    if (res && res.medias && res.medias.length > 0) {
      let { thumbnail, duration } = res

      let videos = res.medias.filter(media => media.type === 'mp4')
      
      if (videos.length > 0) {
        for (let media of videos) {
          let dl_url = media.url
          let type = media.type
          let size = media.size
          let quality = media.quality
          let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
          
          return { starlights, size, quality, duration, url, dl_url }
          
        }
      } else {
      }
    } else {
    }
  } catch {
  }
}

async function pintvideos(ourls) {
  try {
    let dls = await axios.post('https://pintod.com/wp-json/aio-dl/video-data', {
      url: ourls,
    }, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Content-Type': 'application/json',
        'Origin': 'https://pintod.com',
        'Referer': 'https://pintod.com/',
      }
    })
    let data = dls.data
    return {
      thumbnail: data.thumbnail,
      duration: data.duration,
      url: data.url,
      medias: data.medias.map(result => ({
        quality: result.quality,
        type: result.extension,
        size: result.formattedSize,
        url: result.url
      }))
    }
  } catch  {
    return null
  }
}

async function pinterest(query) {
    try {
        const fetch = await import('node-fetch')
        let res = await fetch.default(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
        let json = await res.json()
        let data = json?.resource_response?.data?.results
        let url2 = data[~~(Math.random() * (data?.length))]?.images?.orig?.url
        
		const dl_url = await shortenUrl(url2)
		let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
        return { starlights, dl_url }
    } catch {
        return null
    }
}

async function tiktokvid(text) {
  try {
    let data = await tikSearch(text)

    if (data.status === 200) {
      let videos = data.data
      let id = Math.floor(Math.random() * videos.length)
      let video = videos[id]
      let videoData = await tiktokVid(video.url)

      if (videoData.status === 200) {
          let title = videoData.title
          let author = videoData.author.nickname
          let duration = videoData.duration
          let views = videoData.play_count
          let likes = videoData.digg_count
          let comments_count = videoData.comment_count
          let share_count = videoData.share_count
          let download_count = videoData.download_count
          let published = new Date(videoData.create_time * 1000).toLocaleString()
          let dl_url = videoData.play
          let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
          
          return { starlights, title, author, duration, views, likes, comments_count, share_count, download_count, published, dl_url }
      } else {
      }
    } else {
    }
  } catch {
  }
}

const tikSearch = async (text) => {
  try {
    const res = await axios.post(
      domain + "/api/feed/search",
      new URLSearchParams({
        keywords: text,
        count: 50,
        cursor: 0,
        web: 1,
        hd: 1,
      }),
      {
        headers: {
          'accept': 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        }
      }
    )
    const videos = res.data?.data?.videos;
    if (!videos || videos.length < 1) {
      return {
        status: 200,
        data: [],
      }
    }
    const vids = videos.map((video) => {
      const url = `https://www.tiktok.com/@${video.author.unique_id}/video/${video.id}`;
      return {
        creator: video.author.unique_id,
        video_id: video.id,
        region: video.region,
        title: video.title,
        cover: domain + "/video/cover/" + video.id + ".webp",
        duration: video.duration,
        id: video.id,
        url: url,
        views: video.play_count,
        likes: video.digg_count,
        comments: video.comment_count,
        share: video.share_count,
        create_time: video.create_time,
        download: video.download_count,
        nowm: domain + "/video/media/play/" + video.id + ".mp4",
        wm: domain + "/video/media/wmplay/" + video.id + ".mp4",
        music: domain + "/video/music/" + video.id + ".mp3",
      }
    })
    return {
      status: 200,
      data: vids,
    }
  } catch (error) {
    return {
      status: 404,
      msg: error?.message,
    }
  }
}

async function tiktokuser(user) {
  try {
    let data = await tikUser(user)

    if (data.status === 200) {
      let videos = data.data.videos
      let starlight = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
        return videos.map((video, index) => ({
            nro: index + 1,
            starlights: starlight,
            title: video.title,
            author: video.author.nickname,
            duration: video.duration,
            views: video.play_count,
            likes: video.digg_count,
            comments_count: video.comment_count,
            share_count: video.share_count,
            download_count: video.download_count,
            published: new Date(video.create_time * 1000).toLocaleString(),
            dl_url: video.play
        }))
    } else {
    }
  } catch (error) {
        return []
}}

const tikUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        domain + "/api/user/posts",
        {},
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
          },
          params: {
            unique_id: user,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1,
          },
        }
      )

      const videos = res.data?.data?.videos;
      if (!videos || videos.length < 1) {
        return resolve({
          status: 200,
          data: {
            videos: [],
            last: null,
          },
        })
      }

      const last = videos.sort((a, b) => b.create_time - a.create_time)[0]

      resolve({
        status: 200,
        data: {
          videos: videos.map((x) => updateUrls(x)),
          last: updateUrls(last),
        },
      })
    } catch (error) {
      resolve({
        status: 404,
        msg: error?.message,
      })
    }
  })
}

async function aptoideSearch(text) {
try {
        let videos = await aptoideSearch2(text)
        if (!videos.length) return null
        
        let starlight = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
        
return videos.map((video, index) => ({
    nro: index + 1,
    starlights: starlight,
    name: video.name,
    id: video.id
}))
        
    } catch {
    }
}

async function tiktokSearch(query) {
try {
    let data = await tikSearch(query)

    if (data.status === 200) {
      let videos = data.data
      let starlight = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
      
      return videos.map((video, index) => ({
            nro: index + 1,
            starlights: starlight,
            title: video.title,
            author: video.creator,
            url: video.url
        }))

    } else {
    }
  } catch (error) {
        return []
}}

async function tiktokdl(url) {
  try {
    let data = await tiktokVid(url)

    if (data.status === 200) {
      let video = data
      
      let title = video.title
      let author = video.author.nickname
      let duration = video.duration
      let views = video.play_count
      let likes = video.digg_count
      let comment = video.comment_count
      let share = video.share_count
      let published = new Date(video.create_time * 1000).toLocaleString()
      let downloads = video.download_count
      let dl_url = video.play
      let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

      return { starlights, title, author, duration, views, likes, comment, share, published, downloads, dl_url }
    } else {
    }
  } catch (error) {
  }
}

const domain = 'https://www.tikwm.com'

const updateUrls = (obj) => {
  const regex = /("avatar": "|music": "|play": "|wmplay": "|hdplay": "|cover": ")(\/[^"]+)/g
  const updatedData = JSON.stringify(obj, null, 2).replace(regex, (match, p1, p2) => p1 + domain + p2)
  return JSON.parse(updatedData)
}

const tiktokVid = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const isUrl = (str) => /^https?:\/\//.test(str);
      if (!isUrl(url) || !/tiktok\.com/i.test(url)) {
        throw new Error("Invalid URL: " + url)
      }

      const res = await axios.post(
        domain + "/api/",
        {},
        {
          headers: {
            accept: "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
            "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
          },
          params: {
            url: url,
            count: 12,
            cursor: 0,
            web: 1,
            hd: 1,
          },
        }
      )

      if (res?.data?.code === -1) {
        resolve(res?.data);
      } else {
        resolve({
          status: 200,
          ...updateUrls(res.data?.data),
        });
      }
    } catch (error) {
      resolve({
        status: 404,
        msg: error?.message,
      })
    }
  })
}

async function getFileSize(url) {
  try {
    let response = await fetch(url, { method: 'HEAD' })
    let size = response.headers.get('content-length')
    return (size / (1024 * 1024)).toFixed(2) + ' MB'
  } catch (error) {
    return 'Desconocido'
  }
}

async function ytmp3(link) {
    const starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

    try {
        let dl_url = await ytapi(link)

        return { starlights, dl_url }
    } catch {}

    throw new Error('No se pudo obtener el audio')
}

async function ytapi(url) {
  const res = await fetch(
    `https://www.sankavollerei.com/download/ytmp3?apikey=planaai&url=${encodeURIComponent(url)}`
  )
  const json = await res.json()
  if (!json?.result?.download) {
    throw new Error('No se obtuvo enlace de descarga')
  }
  return json.result.download
}

async function ytmp4(link) {
    try {
        // Usamos fg.ytv para obtener el video de YouTube
        let { title, size, quality, thumb, dl_url: url2 } = await fg.ytv(link)

        // Acortamos el enlace de descarga y la miniatura como en el resto de tus funciones
        let dl_url = await shortenUrl(url2)
        let thumbnail = await shortenUrl(thumb)
        let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

        return { starlights, title, size, quality, thumbnail, dl_url }
    } catch {
        // Manejo de errores silencioso como en tu código original
    }
}

/*async function ytmp4(link) {
    try {
        const result = await dl2(link)
        const xd = result.result.mp4.url
        const title = result.result.title
        let dl_url = await shortenUrl(xd)
        let size = await getFileSize(xd)
        const quality = '480p'
        let res = await search(link)
        let thumbnail = res[0].image

        let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

        return { starlights, title, size, quality, thumbnail, dl_url }
    } catch {
    }
}

async function ytmp3(link) {
    try {
        const result = await dl(link)
        const xd = result.result.mp3.url
        const title = result.result.title
        let dl_url = await shortenUrl(xd)
        let size = await getFileSize(xd)
        const quality = '128kps'
        let res = await search(link)
        let thumbnail = res[0].image

        let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

        return { starlights, title, size, quality, thumbnail, dl_url }
    } catch {
    }
}*/

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}

async function dl2(url) {
    const headers = {
        "accept": "*/*",
        "accept-language": "es-US,es-419;q=0.9,es;q=0.8",
        "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://downloaderto.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    try {
        const res = await fetch(`https://p.savenow.to/api/v2/download?format=480&url=${url}&apikey=dfcb6d76f2f6a9894gjkege8a4ab232222`, { headers });
        
        const data = await res.json();

        const maxAttempts = 100;
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            const progressRes = await fetch(`https://p.savenow.to/ajax/progress.php?id=${data.id}`, { headers });
            const progressData = await progressRes.json();

            if (progressData.download_url) {
                return {
                    status: true,
                    result: {
                        title: data.title,
                        mp4: {
                            url: progressData.download_url
                        }
                    }
                };
            }

            if ((progressData?.text || '').startsWith('No Files')) {
                return { status: false, msg: 'An error occurred during the download process.' };
            }

            await new Promise(resolve => setTimeout(resolve, 4000));
        }

        return { status: false, msg: 'Download did not complete within the expected time.' };
    } catch (e) {
        console.error(e);
        return { status: false, msg: e.message };
    }
}

async function dl(url) {
    const headers = {
        "accept": "*/*",
        "accept-language": "es-US,es-419;q=0.9,es;q=0.8",
        "sec-ch-ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": "\"Android\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://downloaderto.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    try {
        const res = await fetch(`https://p.savenow.to/api/v2/download?format=mp3&url=${url}&apikey=dfcb6d76f2f6a9894gjkege8a4ab232222`, { headers });
        const data = await res.json();

        const maxAttempts = 100;
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            const progressRes = await fetch(`https://p.savenow.to/ajax/progress.php?id=${data.id}`, { headers });
            const progressData = await progressRes.json();

            if (progressData.download_url) {
                return {
                    status: true,
                    result: {
                        title: data.title,
                        mp3: {
                            url: progressData.download_url
                        }
                    }
                };
            }

            if ((progressData?.text || '').startsWith('No Files')) {
                return { status: false, msg: 'An error occurred during the download process.' };
            }

            await new Promise(resolve => setTimeout(resolve, 4000));
        }

        return { status: false, msg: 'Download did not complete within the expected time.' };
    } catch (e) {
        console.error(e);
        return { status: false, msg: e.message };
    }
}

async function spotifydl(url) {
  try {
    let { title, artist, album, img, download } = await SpotifyTracksdl(url)
    
    if (!title || !download) return null 
        const dl_url = await shortenUrl(download)
        const thumbnail = await shortenUrl(img)
        let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
        
        return { starlights, title, artist, album, thumbnail, dl_url }

  } catch {
  }
}

async function SpotifyTracksdl(url) {
  try {
    let urll = url.includes("spotify.link") ? (await axios.get(url)).request.res.responseUrl : url
    let [mtd, dls] = await Promise.all([
      axios.post('https://spotydown.media/api/get-metadata', { url: urll }),
      axios.post('https://spotydown.media/api/download-track', { url: urll })
    ])
    return {
      title: mtd.data.apiResponse.data[0].name,
      artist: mtd.data.apiResponse.data[0].artist,
      album: mtd.data.apiResponse.data[0].album,
      img: mtd.data.apiResponse.data[0].cover_url,
      spotify: mtd.data.apiResponse.data[0].url,
      download: dls.data.file_url
    }
  } catch (error) {
    return {}
  }
}

async function spotifySearch(query) {
  try {
    const tracks = await searchSpotifyTracks(query)
    let starlight = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
    
    return tracks.map((track, index) => ({
      nro: index + 1,
      starlights: starlight,
      title: track.name,
      artist: track.artists.map(artist => artist.name).join(', ') || 'Desconocido',
      thumbnail: track.album.images[0]?.url,
      url: track.external_urls.spotify
    }))
  } catch (error) {
    return []
  }
}

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3'
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009'
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000,
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    })
    return (await response.json()).access_token
  }

  const accessToken = await getToken()
  const offset = 10
  const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=track&offset=${offset}`
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await response.json()
  return data.tracks.items
}

async function spotify(query) {
  try {
    let res = await spotifySearch(query);

    if (!res.length) {
      throw new Error('No se encontraron resultados.')
    }

    let url2 = res[0].url

    let { title, artist, album, thumbnail, dl_url } = await spotifydl(url2)

    if (!title || !dl_url) {
      throw new Error('Error al descargar la canción de Spotify.')
    }
    let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

    return { starlights, title, artist, album, thumbnail, dl_url }

  } catch {
  }
}
  
async function ytsearch(query) {
    try {
        let results = await yts(query)
        let videos = results.all.filter(v => v.type === "video")
        let starlight = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
        return videos.map((video, index) => ({
            nro: index + 1,
            starlights: starlight,
            title: video.title,
            duration: video.timestamp || 'Desconocida',
            published: eYear(video.ago),
            author: video.author.name || 'Desconocido',
            thumbnail: video.image,
            url: 'https://youtu.be/' + video.videoId
        }))
    } catch (error) {
        return []
    }
}

function eYear(time) {
    if (!time) {
        return 'Desconocida'
    }
    if (time.includes('month ago')) {
        var T = time.replace("month ago", "").trim()
        var L = 'hace '  + T + ' mes'
        return L
    }
    if (time.includes('months ago')) {
        var T = time.replace("months ago", "").trim()
        var L = 'hace ' + T + ' meses'
        return L
    }
    if (time.includes('year ago')) {
        var T = time.replace("year ago", "").trim()
        var L = 'hace ' + T + ' año'
        return L
    }
    if (time.includes('years ago')) {
        var T = time.replace("years ago", "").trim()
        var L = 'hace ' + T + ' años'
        return L
    }
    if (time.includes('hour ago')) {
        var T = time.replace("hour ago", "").trim()
        var L = 'hace ' + T + ' hora'
        return L
    }
    if (time.includes('hours ago')) {
        var T = time.replace("hours ago", "").trim()
        var L = 'hace ' + T + ' horas'
        return L
    }
    if (time.includes('minute ago')) {
        var T = time.replace("minute ago", "").trim()
        var L = 'hace ' + T + ' minuto'
        return L
    }
    if (time.includes('minutes ago')) {
        var T = time.replace("minutes ago", "").trim()
        var L = 'hace ' + T + ' minutos'
        return L
    }
    if (time.includes('day ago')) {
        var T = time.replace("day ago", "").trim()
        var L = 'hace ' + T + ' dia'
        return L
    }
    if (time.includes('days ago')) {
        var T = time.replace("days ago", "").trim()
        var L = 'hace ' + T + ' dias'
        return L
    }
    return time
}

async function igstalk(text) {
    try {
        let api = await axios.get(`https://insta-stories-viewer.com/es/${text}/`)
        let html = api.data
        let $ = cheerio.load(html)

        let username = $('.profile__nickname').first().text().trim()
        username = username.split(' ')[0]

        let followers = $('.profile__stats-followers').text().trim()
        let following = $('.profile__stats-follows').text().trim()
        let posts = $('.profile__stats-posts').text().trim()
        let description = $('.profile__description').text().trim()
        let url2 = $('.profile__avatar-pic').attr('src')
        const thumbnail = await shortenUrl(url2)
        let url = `https://www.instagram.com/${text}`

            let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
            return { starlights, username, followers, following, posts, description, url, thumbnail }
    } catch {
    }
}

async function xnxxdl(url) {
try {
const fetch = await import('node-fetch')
let res = await xnxx(url)
let json = await res.result.files
let url2 = json.high
		const dl_url = await shortenUrl(url2)
let title = res.result.title
let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
return { starlights, title, dl_url }
} catch {
}}

async function xnxx(URL) {
return new Promise((resolve, reject) => {
fetch(`${URL}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false  });
const title = $('meta[property="og:title"]').attr('content');
const duration = $('meta[property="og:duration"]').attr('content');
const image = $('meta[property="og:image"]').attr('content');
const videoType = $('meta[property="og:video:type"]').attr('content');
const videoWidth = $('meta[property="og:video:width"]').attr('content');
const videoHeight = $('meta[property="og:video:height"]').attr('content');
const info = $('span.metadata').text();
const videoScript = $('#video-player-bg > script:nth-child(6)').html();
const files = {
low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1], };
resolve({ status: 200, result: { title, URL, duration, image, videoType, videoWidth, videoHeight, info, files }})}).catch(err => reject({code: 503, status: false, result: err }))})}

async function ppcouple(xd) {
try {
let pp = par.getRandom()
let women = pp.female
let man = pp.male
let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
return { starlights, women, man }

} catch {
}}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const par = [
    {
        "male": "https://i.ibb.co/HGZqdzb/9b8278060e2d.jpg",
        "female": "https://i.ibb.co/V3kX3Cv/bf29432e6e21.jpg"
    },
    {
        "male": "https://i.ibb.co/NFPKcPj/6d61f9c4cede.jpg",
        "female": "https://i.ibb.co/FwRqPDn/206818911fdd.jpg"
    },
    {
        "male": "https://i.ibb.co/yQzxptw/7faabc24c6ff.jpg",
        "female": "https://i.ibb.co/2Yk4P2B/47fd82f61fd1.jpg"
    },
    {
        "male": "https://i.ibb.co/cNhsYRV/7bff8e448134.jpg",
        "female": "https://i.ibb.co/j37Sc7X/a9600c228a8b.jpg"
    },
    {
        "male": "https://i.ibb.co/DbMk8nL/957395cbf134.jpg",
        "female": "https://i.ibb.co/LQ4WJMR/f13a01cc7301.jpg"
    },
    {
        "male": "https://i.ibb.co/ypvdYHW/7905e485ff20.jpg",
        "female": "https://i.ibb.co/4Z5rJrn/465bf6b56d86.jpg"
    },
    {
        "male": "https://i.ibb.co/3pKd9jZ/527105aba87a.jpg",
        "female": "https://i.ibb.co/M9B742X/f608cecc4265.jpg"
    },
    {
        "male": "https://i.ibb.co/Jn3tkg8/a1aab3d67644.jpg",
        "female": "https://i.ibb.co/CWx3NYc/8ad244372d8f.jpg"
    },
    {
        "male": "https://i.ibb.co/CbdscQp/5918b5b3b674.jpg",
        "female": "https://i.ibb.co/ZWjNrZt/8257e3c9ffc0.jpg"
    },
    {
        "male": "https://i.ibb.co/8069RmW/cfe9ed16a5b4.jpg",
        "female": "https://i.ibb.co/gPFp1DG/0e16334be10c.jpg"
    },
    {
        "male": "https://i.ibb.co/P1SsfbG/a12d71cd6b9a.jpg",
        "female": "https://i.ibb.co/p4Xp2Xh/d7f6c5420b7a.jpg"
    },
    {
        "male": "https://i.ibb.co/P17CTF9/924deeb25a3d.jpg",
        "female": "https://i.ibb.co/r55xYdy/8ee97786e6f8.jpg"
    },
    {
        "male": "https://i.ibb.co/WykFqbW/57f78370f1e2.jpg",
        "female": "https://i.ibb.co/FWSCd2C/81e637d4a839.jpg"
    },
    {
        "male": "https://i.ibb.co/rf6pKtp/53a463d8ebe9.jpg",
        "female": "https://i.ibb.co/Z2bDP7m/48990865816b.jpg"
    },
    {
        "male": "https://i.ibb.co/RYB9JWG/4428e27ef288.jpg",
        "female": "https://i.ibb.co/LCnJfT7/5732f5315f2f.jpg"
    },
    {
        "male": "https://i.ibb.co/3CLJfw3/151663d07c51.jpg",
        "female": "https://i.ibb.co/zXsJQ8R/96d088d2e0a0.jpg"
    },
    {
        "male": "https://i.ibb.co/rxBN0S5/bd3b07b67ad6.jpg",
        "female": "https://i.ibb.co/6BYPMjC/4b36a8dfca20.jpg"
    },
    {
        "male": "https://i.ibb.co/NW2dv07/58348a3d4008.jpg",
        "female": "https://i.ibb.co/sHkDdGd/87db7aaff335.jpg"
    },
    {
        "male": "https://i.ibb.co/b3sMMnW/a13cdff40c6e.jpg",
        "female": "https://i.ibb.co/LgPn4vL/257ab65eb79d.jpg"
    },
    {
        "male": "https://i.ibb.co/JzMhQ2P/45754b045a6d.jpg",
        "female": "https://i.ibb.co/nmftFnS/a1f2218f7c32.jpg"
    },
    {
        "male": "https://i.ibb.co/R72GdTZ/30ebace5e0c1.jpg",
        "female": "https://i.ibb.co/7Rnb3Y0/d1459d6b3f59.jpg"
    },
    {
        "male": "https://i.ibb.co/SmMvhb5/da465242e083.jpg",
        "female": "https://i.ibb.co/4gK0fVL/da35fc940b11.jpg"
    },
    {
        "male": "https://i.ibb.co/Tbj6tzF/e93d133529d5.jpg",
        "female": "https://i.ibb.co/wwpFfqH/98bc4eb86562.jpg"
    },
    {
        "male": "https://i.ibb.co/CJpdHyJ/348e5a66c088.jpg",
        "female": "https://i.ibb.co/9wd2mTM/fd4b6af0ccac.jpg"
    },
    {
        "male": "https://i.ibb.co/Xkp1wx5/3a15abeb6394.jpg",
        "female": "https://i.ibb.co/8mzjZrt/3b2d60d15de4.jpg"
    },
    {
        "male": "https://i.ibb.co/mSMmmGx/300e252914f3.jpg",
        "female": "https://i.ibb.co/LvTRt2w/c8f8d0b98c70.jpg"
    },
    {
        "male": "https://i.ibb.co/LpctfNL/e1a158f621ba.jpg",
        "female": "https://i.ibb.co/YXpvh3j/2a91663a9f0a.jpg"
    },
    {
        "male": "https://i.ibb.co/xgTsmW8/7ca77ee661d6.jpg",
        "female": "https://i.ibb.co/DMPWv4S/e3af8d2a6673.jpg"
    }, 
    {
        "male": "https://i.pinimg.com/564x/d5/43/ae/d543aef3523502743b376db380cebff3.jpg",
        "female": "https://i.pinimg.com/564x/ed/83/9b/ed839b04efc10c9ef27050266be8dbd9.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/32/ac/df/32acdff5d75f0de1239414a10d8178a6.jpg",
        "female": "https://i.pinimg.com/564x/c5/a9/4b/c5a94b1c9b5e4ba381e1223762066c83.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/7c/35/ed/7c35ed596356ddc31ef3d926df97243b.jpg",
        "female": "https://i.pinimg.com/564x/f7/c1/21/f7c1219f9cd57d13b393442d6254b4e7.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/bc/4a/9a/bc4a9aefafbad258df501b0b1233cc12.jpg",
        "female": "https://i.pinimg.com/564x/fd/53/41/fd5341a0aed334e24a538069294178bb.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/fa/c2/e3/fac2e3209d59309dbe43c4f11fa3ce50.jpg",
        "female": "https://i.pinimg.com/564x/a9/7f/44/a97f4491e970ecf1fbdafbf3321e0ae9.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/c2/8c/24/c28c2478c763c9c900c60b9fedd0717b.jpg",
        "female": "https://i.pinimg.com/564x/8f/4b/4a/8f4b4a9f2e428a359442500d3c0f9814.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/09/3a/f2/093af2156b4b0d66799ac8d5eff6e7ff.jpg",
        "female": "https://i.pinimg.com/564x/27/7e/3a/277e3a698550c98581384db1f795ce5c.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/d2/f4/eb/d2f4ebfb5007fe2b02d7012bee1ea198.jpg",
        "female": "https://i.pinimg.com/564x/3c/ed/a0/3ceda0e5a3208bc1c8db7ed41bd6c4ef.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/90/71/a8/9071a8a949cc6d96e9a62fd9bc12720c.jpg",
        "female": "https://i.pinimg.com/564x/bd/76/3f/bd763f0a1b868cb55395adb6e4b8f8d2.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/d7/48/8b/d7488b788d5cdd9c47228b77023408ec.jpg",
        "female": "https://i.pinimg.com/564x/0a/bc/0b/0abc0bbda1ddee1363f9e127ed0fc4b2.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/a9/62/b7/a962b76b85315528c298a2049e3e229c.jpg",
        "female": "https://i.pinimg.com/564x/1a/f5/e4/1af5e46db62d937931ed19f3bf4d4c12.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/15/14/67/1514672667b75047735d9582b6f98ac8.jpg",
        "female": "https://i.pinimg.com/564x/84/37/64/8437645b925627e48f2b20e9681af2d7.jpg"
    },
    {
        "male": "https://i.pinimg.com/564x/e4/cd/ae/e4cdae6c3cd69e33b5286aa88b93bda6.jpg",
        "female": "https://i.pinimg.com/564x/75/1a/c6/751ac6fa3126adb4a89586e34ccdac03.jpg"
    } 
]

async function danbooru(url) {
try {
	let data = await danbooruDl(url), img = data.url
	delete data.url
	let url2 = img
		const dl_url = await shortenUrl(url2)
	let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
	return { starlights, dl_url }

} catch {
}}

async function danbooruDl(url) {
	let html = (await axios.get(url)).data
	let $ = cheerio.load(html), obj = {}
	$('#post-information > ul > li').each((idx, el) => {
		let str = $(el).text().trim().replace(/\n/g, '').split(': ')
		obj[str[0]] = str[1].replace('»', '').trim().split(' .')[0]
	})
	obj.url = $('#post-information > ul > li[id="post-info-size"] > a').attr('href')
	return obj
}

async function xvideosdl(url) {
try {
const fetch = await import('node-fetch')
let video = await getXvideosVideo(url)
let title = video.title
let url2 = video.url
//let url2 = videoUrl
		//let dl_url = res.downloadUrl
		const dl_url = await shortenUrl(url2)
		let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'
return { starlights, title, dl_url }
//await conn.sendMessage(m.chat, { document: { url: video.url }, mimetype: 'video/mp4', fileName: video.title }, { quoted: m })
//await m.react('✅')
} catch {
//await m.react('✖️')
}}

async function getXvideosVideo(url) {
try {
const response = await fetch(url, { method: 'get' });
const res = await response.text();
const $ = cheerio.load(res, { xmlMode: false });
const title = $("meta[property='og:title']").attr('content');
const videoUrl = $("#html5video > #html5video_base > div > a").attr('href');
return { title, url: videoUrl };
} catch (err) {
}}



async function tiktokdlV2(url) {
    try {
        const data = await ttSlide(url);

        let user_id = data.uniqueId;
        let username = data.username;
        let views = data.stats.views;
        let comments = data.stats.comments;
        let shares = data.stats.shares;
        let downloads = data.stats.downloads;
        let profile2 = data.thumbnail;
        const profile = await shortenUrl(profile2)
        let starlights = 'Scraper By Starlights Team ( https://github.com/StarlightsTeam ) - おDanịel.xyz'

        let dl_urls = [];
        for (const file of data.download) {
            if (file.type === 'slide') {
                try {
                    const shortUrl = await shortenUrl(file.link);
                    dl_urls.push({
                        dl_url: shortUrl,
                    });
                } catch {
                }
            }
        }

        if (dl_urls.length === 0 && data.download.length > 0) {
            const file = data.download[0];
            try {
                const shortUrl = await shortenUrl(file.link);
                dl_urls.push({
                    dl_url: shortUrl,
                });
            } catch {
            }
        }

        return {
            starlights,
            user_id,
            username,
            views,
            comments,
            shares,
            downloads,
            profile,
            dl_urls
        };
    } catch {
    }
}



/*handler.command = ['test'];
handler.rowner = true;

export default handler;*/

async function ttSlide(url) {
    try {
        const response = await axios.post(
            'https://ttsave.app/download',
            {
                query: url,
                language_id: '2'
            },
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }
        )

        const html = response.data
        const $ = cheerio.load(html)

        const uniqueId = $('#unique-id').val() || 'No disponible'
        const username = $('h2.font-extrabold.text-xl.text-center').text() || 'No disponible';
        const thumbnail = $('a[target="_blank"]').attr('href') || 'No disponible';
        const profile = $('img.h-24.w-34.rounded-full').attr('src') || 'No disponible';
        const description = $('p.text-gray-600.px-2.text-center.break-all.w-3/4.oneliner').text() || 'No disponible';

        const stats = {
            views: $('svg.h-5.w-5.text-gray-500 + span').text() || '0',
            likes: $('svg.h-5.w-5.text-red-500 + span').text() || '0',
            comments: $('svg.h-5.w-5.text-green-500 + span').text() || '0',
            shares: $('svg.h-5.w-5.text-yellow-500 + span').text() || '0',
            downloads: $('svg.h-5.w-5.text-blue-500 + span').text() || '0'
        }

        const download = []
        $('a[onclick="bdl(this, event)"]').each((i, elem) => {
            const link = $(elem).attr('href') || 'No disponible'
            const type = $(elem).attr('type') || 'No disponible'
            const title = $(elem).text().trim() || 'No disponible'
            download.push({ link, type, title })
        })

        return {
            uniqueId,
            username,
            thumbnail,
            profile,
            description,
            stats,
            download,
        }
    } catch {
    }
}

async function shortenUrl(url) {
    try {
        const fetch = await import('node-fetch')
        let res = await fetch.default(`https://tinyurl.com/api-create.php?url=${url}`)
        return await res.text()
    } catch {
    }
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = { aptoide, aptoidedl, aptoideSearch, characterAi, danbooru, fbdl, kwaidl, GDriveDl, igdl, igstalk, mediafireV2, Nationality, openAi, ChatGpt, ChatGptV2, tiktokdl, tiktokdlV2, tiktokuser, tiktokStalk, tiktokvid, tiktokSearch, spotifySearch, spotify, spotifydl, pinterest, pinterestdl, ppcouple, xnxxdl, xvideosdl, ytsearch, ytmp3, ytmp4 }