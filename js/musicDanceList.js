const ap2 = new APlayer({
    container: document.getElementById('player2'),
    listFolded: false,
    fixed: false,
    //吸底模式
    //mini: false, //迷你模式
    listMaxHeight: "300px",
    volume: .7,
    audio: [{
        "name": "How Do You Do",
        "artist": "beFour",
        "url": "http://music.163.com/song/media/outer/url?id=3950882.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "lonely",
        "artist": "Nana",
        "url": "http://music.163.com/song/media/outer/url?id=21274655.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "be what you banna be",
        "artist": "冲破",
        "url": "http://music.163.com/song/media/outer/url?id=2140742152.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "7년간의 사랑",
        "artist": "金贤政",
        "url": "http://music.163.com/song/media/outer/url?id=26503707.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "Thêm Một Lần Đau",
        "artist": "HKT",
        "url": "http://music.163.com/song/media/outer/url?id=28996013.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "The Power Of Pleasure",
        "artist": "Dj Carpi",
        "url": "http://music.163.com/song/media/outer/url?id=30590646.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "THE STAR",
        "artist": "Vitas",
        "url": "http://music.163.com/song/media/outer/url?id=25947783.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": " Ein Kleines Lied (Around the World)",
        "artist": "Candee!",
        "url": "http://music.163.com/song/media/outer/url?id=17075871.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": " Солнышко",
        "artist": "Андрей Губин",
        "url": "http://music.163.com/song/media/outer/url?id=33187004.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '摩天轮',
        artist: '罗百吉',
        url: 'http://music.163.com/song/media/outer/url?id=1877520070.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Hero Tonight',
        artist: '罗百吉',
        url: 'http://music.163.com/song/media/outer/url?id=120485.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Lendo Calendo',
        artist: '96-Music',
        url: 'http://music.163.com/song/media/outer/url?id=1808465701.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '快乐崇拜',
        artist: '潘玮柏 / 张韶涵',
        url: 'http://music.163.com/song/media/outer/url?id=139808.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '8D劲爆环绕',
        artist: '李寒',
        url: 'http://music.163.com/song/media/outer/url?id=1315961674.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '唯美8D环绕',
        artist: '青稚m',
        url: 'http://music.163.com/song/media/outer/url?id=1328045658.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '慢摇DJ',
        artist: '69',
        url: 'http://music.163.com/song/media/outer/url?id=1406091280.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '黄昏DJ',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1480350899.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Tu vivi nell aria',
        artist: 'M2',
        url: 'http://music.163.com/song/media/outer/url?id=27949373.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Crazy Baby',
        artist: 'Fantasy Prouject',
        url: 'http://music.163.com/song/media/outer/url?id=5188667.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'God Is A Girl',
        artist: 'W&W / Groove Coverage',
        url: 'http://music.163.com/song/media/outer/url?id=544483346.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Doobi Doobi Doo',
        artist: 'Cassandra',
        url: 'http://music.163.com/song/media/outer/url?id=34880251.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '经典DJ版',
        artist: '楠总',
        url: 'http://music.163.com/song/media/outer/url?id=1973226966.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '强劲低音炮',
        artist: '叶凡凡',
        url: 'http://music.163.com/song/media/outer/url?id=1846470209.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '舞曲',
        artist: '群星',
        url: 'http://music.163.com/song/media/outer/url?id=27890837.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'solo tu',
        artist: '南宁DJ-LH',
        url: 'http://music.163.com/song/media/outer/url?id=1833516949.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '劲爆舞曲',
        artist: '群星',
        url: 'http://music.163.com/song/media/outer/url?id=27901112.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '不变的音乐',
        artist: '汪先生 / 颜小七',
        url: 'http://music.163.com/song/media/outer/url?id=1399998658.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '快乐阿拉蕾',
        artist: '邵雨涵',
        url: 'http://music.163.com/song/media/outer/url?id=290840.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'It s Ok',
        artist: 'DJ Maxwell',
        url: 'http://music.163.com/song/media/outer/url?id=28708061.mp3',
        cover: 'https://su3.cn/pic.jpg'
    }]
});
ap2.on('play',
function() {
    document.title = "▶ " + ap2.list.audios[ap2.list.index].name;
});
