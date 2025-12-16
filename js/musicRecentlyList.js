const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    fixed: false,
    //吸底模式
    //mini: false, //迷你模式
    listMaxHeight: "300px",
    volume: .7,
    audio: [
{
        "name": "画心",
        "artist": "于春洋",
        "url": "https://su3.cn/music/other/画心-于春洋.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "相思",
        "artist": "毛阿敏",
        "url": "http://music.163.com/song/media/outer/url?id=1417751533.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "烟雨唱扬州",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=34986705.mp3",
        "cover": "https://su3.cn/pic.jpg"
    }, {
        name: '黄昏',
        artist: '周传雄',
        url: 'http://music.163.com/song/media/outer/url?id=5255640.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    }, 
{
        name: '一万个理由',
        artist: '郑源',
        url: 'http://music.163.com/song/media/outer/url?id=2003577028.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '他一定很爱你',
        artist: '阿杜',
        url: 'http://music.163.com/song/media/outer/url?id=5252776.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '青花',
        artist: '周传雄',
        url: 'http://music.163.com/song/media/outer/url?id=2618269767.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '冬天的秘密',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1870573357.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '下一站天后',
        artist: '翘翘',
        url: 'http://music.163.com/song/media/outer/url?id=1418602991.mp3',
        cover: 'https://img2.baidu.com/it/u=1070975816,873380581&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=451'
    },
    {
        name: '难念的经',
        artist: 'wispering',
        url: 'http://music.163.com/song/media/outer/url?id=437753278.mp3',
        cover: 'https://img1.baidu.com/it/u=3773827282,1374643760&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
    },
    {
        name: '你',
        artist: '凉w风',
        url: 'http://music.163.com/song/media/outer/url?id=1819963069.mp3',
        cover: 'https://img2.baidu.com/it/u=1070975816,873380581&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=451'
    },
    {
        name: '暗涌',
        artist: '王菲',
        url: 'http://music.163.com/song/media/outer/url?id=300017.mp3',
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotos.tuchong.com%2F1010089%2Ff%2F19866177.jpg&refer=http%3A%2F%2Fphotos.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668308043&t=b5b732526b5141d095ca24fe20adb23c'
    },
    {
        name: '犯错',
        artist: '顾峰 / 斯琴高丽',
        url: 'http://music.163.com/song/media/outer/url?id=1383381667.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '记事本',
        artist: '陈慧琳',
        url: 'http://music.163.com/song/media/outer/url?id=189986.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '千千阕歌',
        artist: '陈慧娴',
        url: 'http://music.163.com/song/media/outer/url?id=211083.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '偏爱',
        artist: '张芸京',
        url: 'http://music.163.com/song/media/outer/url?id=27731339.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '雨蝶',
        artist: '李翊君',
        url: 'http://music.163.com/song/media/outer/url?id=258498.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '独角戏',
        artist: '许茹芸',
        url: 'http://music.163.com/song/media/outer/url?id=406730146.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        "name": "该死的温柔",
        "artist": "马天宇",
        "url": "http://music.163.com/song/media/outer/url?id=135362.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '爱丫爱丫',
        artist: 'By2',
        url: 'http://music.163.com/song/media/outer/url?id=406737348.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        "name": "红豆",
        "artist": "刘大拿",
        "url": "http://music.163.com/song/media/outer/url?id=2140422465.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '偏偏喜欢你',
        artist: '陈百强',
        url: 'http://music.163.com/song/media/outer/url?id=27874938.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        "name": "起风了",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1330348068.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "偏爱时不逢人",
        "artist": "-",
        "url": "https://su3.cn/music/other/偏爱时不逢人.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "春庭雪",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2153856688.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "산다는 건",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2032460879.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        name: '慕夏',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2721499606.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },{
        "name": "穿越时空的思念",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1379837498.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '暗里着迷',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=110191.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },{
        name: 'Dearest',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=460514482.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },{
        "name": "会开花的云",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2680631340.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "难念的经",
        "artist": "亮声open",
        "url": "http://music.163.com/song/media/outer/url?id=1374028236.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "等一分钟",
        "artist": "zovl",
        "url": "http://music.163.com/song/media/outer/url?id=2034959648.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "晚风心里吹",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2145771417.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "难却",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2132295595.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '我心永恒',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=5242686.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },
    {
        name: '死一样的痛过',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1807891673.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },
    {
        name: '那个男人的谎言',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2044251045.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },
    {
        name: '处处吻',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1393178113.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },
    {
        name: '只爱西经',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1401924960.mp3',
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2016%2F08%2F06%2F30457313657211015_580x580.jpg&refer=http%3A%2F%2Fcdnimg103.lizhi.fm&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668307514&t=659b012b9400bc6dd6e0e6938d4d7807'
    },
    {
        name: 'Scarborough Fair',
        artist: 'Sarah Brightman',
        url: 'http://music.163.com/song/media/outer/url?id=18248324.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '只要平凡',
        artist: '张杰 / 张碧晨',
        url: 'http://music.163.com/song/media/outer/url?id=574919767.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '缠绵游戏',
        artist: '梁汉文',
        url: 'http://music.163.com/song/media/outer/url?id=1333212287.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '最爱',
        artist: '周慧敏',
        url: 'http://music.163.com/song/media/outer/url?id=5278470.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '遇见',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1475319299.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '余香',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=487885426.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '听说',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2067451803.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
        {
        name: '戒不掉',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2124518108.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '西界',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=26305536.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '只对你有感觉',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2146192847.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '专属天使',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2016309301.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '为你写诗',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1931262830.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        "name": "十年",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2105336418.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '小小',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1994352928.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '暗香',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2024871964.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '有没有人告诉你',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=25795016.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '不将就',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1468114202.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '错错错',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2617779316.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '很爱很爱你',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=28167485.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '后来',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2128902724.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '情深深雨蒙蒙',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1293910957.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'My Love',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2081191.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Burning',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1950524895.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Free_Loop',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1936975624.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'That Girl',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2664610718.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'DAY BY DAY',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=26089233.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'Sexy Love',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=28828593.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '爱你是我最初的梦想',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1859088952.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '凌晨两点半',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2657221618.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '一眼万年',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1892668021.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '美人鱼',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=108673.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '寂寞在唱歌',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1404900072.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '魔鬼中的天使',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1931899304.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '铁血丹心',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2066977525.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '我不想说',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1950609382.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '天下',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=191254.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '月光',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1903371032.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '千年之恋',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1814617327.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '你的承诺',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=95438.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '老人与海',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=95475.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '可能',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1950343972.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '爱很简单',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1460226004.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '此生不换',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=25638340.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '明明就',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2015416433.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '无赖',
        artist: '郑中基',
        url: 'http://music.163.com/song/media/outer/url?id=1329722731.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '放生',
        artist: 'DJ Coffee',
        url: 'http://music.163.com/song/media/outer/url?id=1936890620.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '爱转角',
        artist: '罗志祥',
        url: 'http://music.163.com/song/media/outer/url?id=25642898.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '三生缘',
        artist: '小栀晚',
        url: 'http://music.163.com/song/media/outer/url?id=1464253247.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '梦里水乡',
        artist: '江珊',
        url: 'http://music.163.com/song/media/outer/url?id=1952813658.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '梨花情',
        artist: '火雅',
        url: 'http://music.163.com/song/media/outer/url?id=862099039.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '恋曲1990',
        artist: '罗大佑',
        url: 'http://music.163.com/song/media/outer/url?id=2736302757.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '笑纳',
        artist: 'Zhou小喵',
        url: 'http://music.163.com/song/media/outer/url?id=1990745552.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '亲爱的那不是爱情',
        artist: '张韶涵',
        url: 'http://music.163.com/song/media/outer/url?id=36841953.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '梦里花',
        artist: '苏星婕',
        url: 'http://music.163.com/song/media/outer/url?id=2005574298.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '天天看到你',
        artist: '阿杜',
        url: 'http://music.163.com/song/media/outer/url?id=5258167.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '寂寞沙洲冷',
        artist: '周传雄',
        url: 'http://music.163.com/song/media/outer/url?id=33916775.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '男人海洋',
        artist: '周传雄',
        url: 'http://music.163.com/song/media/outer/url?id=5239638.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '吻别 (英文版)',
        artist: 'Sue',
        url: 'http://music.163.com/song/media/outer/url?id=1911206021.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '拯救',
        artist: '孙楠',
        url: 'http://music.163.com/song/media/outer/url?id=145489.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '死性不改',
        artist: 'kie音乐',
        url: 'http://music.163.com/song/media/outer/url?id=1332682288.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
    },
    {
        name: '我好想你',
        artist: '潘广益',
        url: 'http://music.163.com/song/media/outer/url?id=35544129.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '爱的故事上集',
        artist: '孙耀威',
        url: 'http://music.163.com/song/media/outer/url?id=5257942.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '爱的故事上集',
        artist: '潇雨涓涓',
        url: 'http://music.163.com/song/media/outer/url?id=1913957365.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '17岁',
        artist: '潇雨涓涓',
        url: 'http://music.163.com/song/media/outer/url?id=1914759564.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '你的眼神',
        artist: '潇雨涓涓',
        url: 'http://music.163.com/song/media/outer/url?id=2021648858.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '君が好きだと叫びたい',
        artist: '天狼菌菌菌',
        url: 'http://music.163.com/song/media/outer/url?id=1468024932.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '难念的经',
        artist: '亮声open',
        url: 'http://music.163.com/song/media/outer/url?id=1374028236.mp3',
        cover: 'https://img1.baidu.com/it/u=3773827282,1374643760&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
    },
    {
        name: '难念的经',
        artist: '周华健',
        url: 'http://music.163.com/song/media/outer/url?id=5271858.mp3',
        cover: 'https://img1.baidu.com/it/u=3773827282,1374643760&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
    },
    {
        name: '笑看风云',
        artist: '陈冬霖',
        url: 'http://music.163.com/song/media/outer/url?id=1343590695.mp3',
        cover: 'https://img0.baidu.com/it/u=2571294868,2631998466&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220'
    },
    {
        name: '虞兮叹',
        artist: '闻人听書',
        url: 'http://music.163.com/song/media/outer/url?id=1479526505.mp3',
        cover: 'https://img0.baidu.com/it/u=2571294868,2631998466&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220'
    },
    {
        name: '秋天不回来',
        artist: '王强',
        url: 'http://music.163.com/song/media/outer/url?id=2736304335.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '当',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2647579127.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '爱如潮水',
        artist: '张信哲',
        url: 'http://music.163.com/song/media/outer/url?id=187338.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '挥着翅膀的女孩',
        artist: '金美辰',
        url: 'http://music.163.com/song/media/outer/url?id=423118691.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '画心',
        artist: '张靓颖',
        url: 'http://music.163.com/song/media/outer/url?id=327089.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '晚秋',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=1951500459.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '月半小夜曲',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=211015.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '情意结',
        artist: '陈慧娴',
        url: 'http://music.163.com/song/media/outer/url?id=2068068171.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '花心',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=481853718.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '偏爱',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2157192470.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '你瞒我瞒',
        artist: '陈柏宇',
        url: 'http://music.163.com/song/media/outer/url?id=2044378969.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        "name": "爱我就跟我走",
        "artist": "王鹤铮",
        "url": "http://music.163.com/song/media/outer/url?id=163635.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "贝多芬的悲伤",
        "artist": "萧风",
        "url": "http://music.163.com/song/media/outer/url?id=314773.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "innocence",
        "artist": "Avril Lavigne",
        "url": "http://music.163.com/song/media/outer/url?id=2117321.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },

    {
        "name": "谁能明白我",
        "artist": "亮声open",
        "url": "http://music.163.com/song/media/outer/url?id=1393151220.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },

    {
        "name": "Tu vivi nell aria",
        "artist": "M2",
        "url": "http://music.163.com/song/media/outer/url?id=27949373.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "红玫瑰",
        "artist": "陈奕迅",
        "url": "http://music.163.com/song/media/outer/url?id=65533.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: '沉默是金',
        artist: '张国荣',
        url: 'http://music.163.com/song/media/outer/url?id=26018915.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '暗里着迷',
        artist: '刘德华',
        url: 'http://music.163.com/song/media/outer/url?id=29723022.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '约定',
        artist: '王菲',
        url: 'http://music.163.com/song/media/outer/url?id=299116.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '飘雪',
        artist: '陈慧娴',
        url: 'http://music.163.com/song/media/outer/url?id=212430.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '好久不见',
        artist: '陈奕迅',
        url: 'http://music.163.com/song/media/outer/url?id=65538.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '倩女幽魂',
        artist: '张国荣',
        url: 'http://music.163.com/song/media/outer/url?id=188175.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '无间道',
        artist: '刘德华',
        url: 'http://music.163.com/song/media/outer/url?id=29723039.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '粉红色的回忆',
        artist: '韩宝仪',
        url: 'http://music.163.com/song/media/outer/url?id=2036814200.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '小城大事',
        artist: '杨千嬅',
        url: 'http://music.163.com/song/media/outer/url?id=316756.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '我只在乎你',
        artist: '邓丽君',
        url: 'http://music.163.com/song/media/outer/url?id=1888076998.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '七月七日晴',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=2605883115.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '断点',
        artist: '张敬轩',
        url: 'http://music.163.com/song/media/outer/url?id=2069199929.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '蓝莲花',
        artist: '许巍',
        url: 'http://music.163.com/song/media/outer/url?id=167637.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '曾经的你',
        artist: '许巍',
        url: 'http://music.163.com/song/media/outer/url?id=1960404075.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '一生所爱',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=502925939.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '生僻字',
        artist: '橙成',
        url: 'http://music.163.com/song/media/outer/url?id=1385203868.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '那些花儿',
        artist: '朴树',
        url: 'http://music.163.com/song/media/outer/url?id=4877908.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '赤伶',
        artist: '是二智呀',
        url: 'http://music.163.com/song/media/outer/url?id=1377748865.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'big big word',
        artist: 'Emilia',
        url: 'http://music.163.com/song/media/outer/url?id=2534006.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'My Heart Will Go On',
        artist: 'Céline Dion',
        url: 'http://music.163.com/song/media/outer/url?id=2308549.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: 'dream it possible',
        artist: 'Delacey',
        url: 'http://music.163.com/song/media/outer/url?id=38592976.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '眉间雪',
        artist: 'HITA',
        url: 'http://music.163.com/song/media/outer/url?id=29567100.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '白骨哀',
        artist: '凌之轩',
        url: 'http://music.163.com/song/media/outer/url?id=28819453.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '海口',
        artist: '后弦',
        url: 'http://music.163.com/song/media/outer/url?id=454050305.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '有没有人告诉你',
        artist: '陈楚生',
        url: 'http://music.163.com/song/media/outer/url?id=25795016.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '一剪梅',
        artist: '费玉清',
        url: 'http://music.163.com/song/media/outer/url?id=82932.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '知心爱人',
        artist: '付笛声 / 任静',
        url: 'http://music.163.com/song/media/outer/url?id=84054.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '梦里水乡',
        artist: '江珊',
        url: 'http://music.163.com/song/media/outer/url?id=249320.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '一生有你',
        artist: '水木年华',
        url: 'http://music.163.com/song/media/outer/url?id=1969818015.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '大鱼',
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=416385506.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '美丽的神话',
        artist: '成龙 / 金喜善',
        url: 'http://music.163.com/song/media/outer/url?id=4875127.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '星月神话',
        artist: '金莎',
        url: 'http://music.163.com/song/media/outer/url?id=406730463.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '忘记时间',
        artist: '胡歌',
        url: 'http://music.163.com/song/media/outer/url?id=2004933327.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        name: '情意结',
        artist: '陈慧娴',
        url: 'http://music.163.com/song/media/outer/url?id=211238.mp3',
        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F25663%2F20170702053127-1656772248.jpg%2F0&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668307976&t=fdab6e44708c1f7b6cc8e27416f75860'
    },
    {
        name: 'Dearest',
        artist: '浜崎あゆみ',
        url: 'http://music.163.com/song/media/outer/url?id=22737855.mp3',
        cover: 'https://img0.baidu.com/it/u=3311906409,2452818801&fm=253&fmt=auto&app=138&f=JPEG?w=150&h=150'
    },
    {
        name: 'ブルーバード',
        artist: 'いきものがかり',
        url: 'http://music.163.com/song/media/outer/url?id=27969765.mp3',
        cover: 'https://img0.baidu.com/it/u=1204118628,3562169373&fm=253&fmt=auto&app=138&f=JPEG?w=863&h=500'
    },
    {
        name: 'Send It',
        artist: 'feat',
        url: 'http://music.163.com/song/media/outer/url?id=426291544.mp3',
        cover: 'https://p3.music.126.net/4ZgCt77ZOVJXegIdVtSo-Q==/109951166442911780.jpg'
    },
    {
        name: '一生何求',
        artist: '陈百强',
        url: 'http://music.163.com/song/media/outer/url?id=27874888.mp3',
        cover: 'https://p3.music.126.net/GusXTGbAGQ-K4EqB_xnQvQ==/109951165441187746.jpg'
    },
    {
        name: '一直很安静',
        artist: '阿桑',
        url: 'http://music.163.com/song/media/outer/url?id=2005862680.mp3',
        cover: 'https://p3.music.126.net/eik40RMjIhS_ydNxyj9VCw==/109951166553471295.jpg'
    },
    {
        name: '金玉良缘',
        artist: '是菲菲呀',
        url: 'http://music.163.com/song/media/outer/url?id=1892891519.mp3',
        cover: 'https://p3.music.126.net/ZfNz87YiVbFao0AYhDzCZw==/109951166582212748.jpg'
    },
    {
        name: '漠河舞厅·2022',
        artist: '柳爽',
        url: 'http://music.163.com/song/media/outer/url?id=1894094482.mp3',
        cover: 'https://p3.music.126.net/m8BMzRWR53lMu2uaMYV2mA==/109951166609630672.jpg'
    },
    {
        name: '美丽的神话',
        artist: '笛呆子囚牛',
        url: 'http://music.163.com/song/media/outer/url?id=1422215048.mp3',
        cover: 'https://su3.cn/pic.jpg'
    },
    {
        "name": "你不像她",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1951788951.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "红颜",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=93166.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "星星点灯",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1997164442.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "后半生",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2603533166.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "落日海面",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2139948465.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "海阔天空",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=346089.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "雾里看花",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=5280041.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "花好月圆夜",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=5265772.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        "name": "明天会更好",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1426812789.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "觉悟",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2106816140.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "Dạ Vũ",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=1951158056.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },
    {
        name: 'Star Unkind',
        artist: '-',
        url: 'http://music.163.com/song/media/outer/url?id=512640293.mp3',
        cover: 'https://img2.baidu.com/it/u=340960862,261469568&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500'
    },{
        "name": "夜舞",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2071218264.mp3",
        "cover": "https://su3.cn/pic.jpg"
    },{
        "name": "DaDaDa",
        "artist": "-",
        "url": "http://music.163.com/song/media/outer/url?id=2139785614.mp3",
        "cover": "https://su3.cn/pic.jpg"
    }]
});
ap.on('play',
function() {
    document.title = "▶ " + ap.list.audios[ap.list.index].name;
});
