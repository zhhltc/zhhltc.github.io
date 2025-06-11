 const ap5 = new APlayer({
        container: document.getElementById('player5'),
        listFolded: false,
        fixed: false, //吸底模式
        //mini: false, //迷你模式
        listMaxHeight: "300px",
        volume: .7,
       audio:[
  {
    "name": "周杰伦-Goodbye",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-Goodbye.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-Mine Mine",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-Mine Mine.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-Mojito",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-Mojito.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-一路向北",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-一路向北.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-七里香",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-七里香.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-三年二班",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-三年二班.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-不能说的秘密",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-不能说的秘密.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-东风破",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-东风破.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-以父之名",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-以父之名.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-倒带(2004 周杰伦无与伦比演唱会)",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-倒带(2004 周杰伦无与伦比演唱会).mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-借口",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-借口.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-公主病",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-公主病.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-公公偏头痛",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-公公偏头痛.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-兰亭序",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-兰亭序.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-功夫灌篮",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-功夫灌篮.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-千山万水",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-千山万水.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-千里之外 (CCTV音乐频道)",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-千里之外 (CCTV音乐频道).mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-半兽人",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-半兽人.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-半岛铁盒",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-半岛铁盒.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-双截棍",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-双截棍.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-发如雪",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-发如雪.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-听妈妈的话",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-听妈妈的话.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-听爸爸的话",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-听爸爸的话.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-告白气球",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-告白气球.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-周大侠",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-周大侠.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-回到过去",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-回到过去.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-困兽之斗",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-困兽之斗.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-夜会美 - Style 杰伦 Style",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-夜会美 - Style 杰伦 Style.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-夜曲",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-夜曲.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-夜的第七章 (Demo)",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-夜的第七章 (Demo).mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-大头贴",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-大头贴.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-大笨钟",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-大笨钟.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-头文字d",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-头文字d.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-好久不见",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-好久不见.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-威廉古堡",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-威廉古堡.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-安靜",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-安靜.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-对不起",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-对不起.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-将军",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-将军.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-开不了口",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-开不了口.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-彩虹",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-彩虹.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-心雨",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-心雨.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-我不配",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-我不配.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-搁浅",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-搁浅.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-断了的弦",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-断了的弦.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-无双",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-无双.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-明明就",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-明明就.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-星晴",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-星晴.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-晴天",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-晴天.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-暗号",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-暗号.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-最后的战役",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-最后的战役.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-最长的电影",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-最长的电影.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-本草纲目",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-本草纲目.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-枫",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-枫.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-止战之殇",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-止战之殇.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-烟花易冷",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-烟花易冷.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-爱在西元前",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-爱在西元前.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-爱我别走 (CCTV音乐频道)",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-爱我别走 (CCTV音乐频道).mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-牛仔很忙",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-牛仔很忙.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-甜甜的",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-甜甜的.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-白色风车",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-白色风车.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-知不知道",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-知不知道.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-稻香",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-稻香.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-简单爱",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-简单爱.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-米兰的小铁匠",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-米兰的小铁匠.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-红尘客栈",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-红尘客栈.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-给我一首歌的时间",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-给我一首歌的时间.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-能不能给我一首歌的时间",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-能不能给我一首歌的时间.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-自导自演",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-自导自演.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-花海",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-花海.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-菊花台",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-菊花台.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-蒲公英的约定",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-蒲公英的约定.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-蜗牛",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-蜗牛.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-说好不哭 (with 五月天阿信)",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-说好不哭 (with 五月天阿信).mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-说好的幸福呢",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-说好的幸福呢.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-超人不会飞",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-超人不会飞.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-跨时代",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-跨时代.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-轨迹",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-轨迹.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-退后",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-退后.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-霍元甲",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-霍元甲.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-青花瓷",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-青花瓷.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-黄金甲",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-黄金甲.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-黑色幽默",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-黑色幽默.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-黑色毛衣",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-黑色毛衣.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-龙卷风",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-龙卷风.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-龙战骑士",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-龙战骑士.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "周杰伦-龙拳",
    "artist": "周杰伦",
    "url": "https://su3.cn/music/zjl/周杰伦-龙拳.mp3",
    "cover": "https://su3.cn/pic.jpg"
  }
]});
ap5.on('play', function () {
	 document.title ="▶ "+ ap5.list.audios[ap5.list.index].name;
});
