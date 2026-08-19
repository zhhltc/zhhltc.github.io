 const ap3 = new APlayer({
        container: document.getElementById('player3'),
        listFolded: false,
        fixed: false, //吸底模式
        //mini: false, //迷你模式
        listMaxHeight: "300px",
        volume: .7,
       audio: [{
        "name": "荒",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2105758903.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "痴情冢",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1910030960.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
	       {
    "name": "Last Reunion",
    "artist": "Peter Roe",
    "url": "http://music.163.com/song/media/outer/url?id=32102855.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
	       {
    "name": "Rain after Summer",
    "artist": "羽肿",
    "url": "http://music.163.com/song/media/outer/url?id=430685732.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "潮鳴り",
    "artist": "折戸伸治",
    "url": "http://music.163.com/song/media/outer/url?id=22707008.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "Horizon",
    "artist": "Janji",
    "url": "http://music.163.com/song/media/outer/url?id=32046918.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "Time Back",
    "artist": "Bad Style",
    "url": "http://music.163.com/song/media/outer/url?id=28560087.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
	  {
            name: 'Beyond The Memory',
            artist: '-',
            url: 'http://music.163.com/song/media/outer/url?id=5307982.mp3',
            cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
},
 {
            name: 'Illusionary Daytime',
            artist: 'Shirfine',
            url: 'http://music.163.com/song/media/outer/url?id=28907016.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '瞬间的永恒',
            artist: '赵海洋',
            url: 'http://music.163.com/song/media/outer/url?id=31134621.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '夜的钢琴曲五',
            artist: '石进',
            url: 'http://music.163.com/song/media/outer/url?id=149297.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '风居住的街道',
            artist: '李勤舍',
            url: 'http://music.163.com/song/media/outer/url?id=567563817.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '临安初雨',
            artist: '-',
            url: 'http://music.163.com/song/media/outer/url?id=29771289.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: 'Inspire',
            artist: 'Capo Productions',
            url: 'http://music.163.com/song/media/outer/url?id=16846091.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: 'Rise - Epic Music',
            artist: 'John Dreamer',
            url: 'http://music.163.com/song/media/outer/url?id=28283137.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: 'Mother',
            artist: '久石譲',
            url: 'http://music.163.com/song/media/outer/url?id=421639627.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: 'Luv Letter',
            artist: 'TSUKINOSORA',
            url: 'http://music.163.com/song/media/outer/url?id=520242026.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: 'Victory',
            artist: 'Two Steps From Hell',
            url: 'http://music.163.com/song/media/outer/url?id=31654455.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: 'My Soul',
            artist: 'July',
            url: 'http://music.163.com/song/media/outer/url?id=5308028.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '水墨兰亭',
            artist: '李志辉',
            url: 'http://music.163.com/song/media/outer/url?id=30413344.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '千与千寻',
            artist: '久石让',
            url: 'http://music.163.com/song/media/outer/url?id=469838125.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '故乡的原风景',
            artist: '宗次郎',
            url: 'http://music.163.com/song/media/outer/url?id=393685.mp3',
            cover: 'https://img2.baidu.com/it/u=1992087935,3553759223&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
        },
        {
            name: 'Friendships',
            artist: 'Pascal Letoublon',
            url: 'http://music.163.com/song/media/outer/url?id=505449407.mp3',
            cover: 'https://p3.music.126.net/FMRlfgv5H-Kwj2eBam8Siw==/109951165623959723.jpg'
        },
		 {
            name: '秋的思念',
            artist: '赵海洋',
            url: 'http://music.163.com/song/media/outer/url?id=1864891972.mp3',
            cover: 'https://p3.music.126.net/FMRlfgv5H-Kwj2eBam8Siw==/109951165623959723.jpg'
        },
        {
            name: '致爱丽丝',
            artist: 'Ed Tom',
            url: 'http://music.163.com/song/media/outer/url?id=492857516.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '风居住的街道',
            artist: '饭碗的彼岸',
            url: 'http://music.163.com/song/media/outer/url?id=36897723.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: 'My Soul',
            artist: 'July',
            url: 'http://music.163.com/song/media/outer/url?id=5308028.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '风之谷',
            artist: '羽肿',
            url: 'http://music.163.com/song/media/outer/url?id=427606780.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '梦中的婚礼',
            artist: 'Richard Clayderman',
            url: 'http://music.163.com/song/media/outer/url?id=34341360.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '花火が瞬く夜に',
            artist: '羽肿',
            url: 'http://music.163.com/song/media/outer/url?id=434902428.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '夜色钢琴曲',
            artist: '赵海洋',
            url: 'http://music.163.com/song/media/outer/url?id=31066449.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: 'A Little Story',
            artist: 'Valentin',
            url: 'http://music.163.com/song/media/outer/url?id=857896.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '時代を超える想い2',
            artist: '和田薫',
            url: 'http://music.163.com/song/media/outer/url?id=541131.mp3',
            cover: 'https://img0.baidu.com/it/u=3311906409,2452818801&fm=253&fmt=auto&app=138&f=JPEG?w=150&h=150'
        },{
            name: 'The truth that you leave',
            artist: 'Pianoboy高至豪',
            url: 'http://music.163.com/song/media/outer/url?id=139774.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '所念皆星河',
            artist: 'CMJ',
            url: 'http://music.163.com/song/media/outer/url?id=1384026889.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: 'Bloom of Youth',
            artist: 'Key Sounds Label',
            url: 'http://music.163.com/song/media/outer/url?id=760058.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '安妮的仙境',
            artist: '森林乐团',
            url: 'http://music.163.com/song/media/outer/url?id=1843719177.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '千本樱',
            artist: '愚人幽篁里',
            url: 'http://music.163.com/song/media/outer/url?id=1339421617.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '樱花树下的约定',
            artist: 'Snigellin',
            url: 'http://music.163.com/song/media/outer/url?id=509313150.mp3',
            cover: 'https://img0.baidu.com/it/u=2571294868,2631998466&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220'
        }
		]
        });
ap3.on('play', function () {
	 document.title ="▶ "+ ap3.list.audios[ap3.list.index].name;
});
