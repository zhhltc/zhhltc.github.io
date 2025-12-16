 const ap6 = new APlayer({
        container: document.getElementById('player6'),
        listFolded: false,
        fixed: false, //吸底模式
        //mini: false, //迷你模式
        listMaxHeight: "300px",
        volume: .7,
       audio: [
  {
    "name": "万古 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/万古 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "你若成风 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/你若成风 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "内线 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/内线 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "千古(电视剧《花千骨》插曲) - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/千古(电视剧《花千骨》插曲) - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "千百度 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/千百度 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "半城烟沙(网游《天龙八部2》主题曲) - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/半城烟沙(网游《天龙八部2》主题曲) - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "叹服 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/叹服 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "坏孩子 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/坏孩子 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "城府 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/城府 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "多余的解释 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/多余的解释 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "大千世界 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/大千世界 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "天龙八部之宿敌 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/天龙八部之宿敌 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "如果当时 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/如果当时 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "幻听 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/幻听 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "庐州月 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/庐州月 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "惊鸿一面 - 黄龄,许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/惊鸿一面 - 黄龄,许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "断桥残雪 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/断桥残雪 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "有何不可 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/有何不可 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "柳成荫 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/柳成荫 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "江湖(网络剧《画江湖之不良人》主题曲) - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/江湖(网络剧《画江湖之不良人》主题曲) - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "浅唱 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/浅唱 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "清明雨上 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/清明雨上 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "灰色头像 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/灰色头像 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "玫瑰花的葬礼 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/玫瑰花的葬礼 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "留香 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/留香 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "等到烟火清凉 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/等到烟火清凉 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "素颜 - 许嵩,何曼婷",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/素颜 - 许嵩,何曼婷.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "绝代风华(游戏《天下3》十周年主题曲) - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/绝代风华(游戏《天下3》十周年主题曲) - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "羁绊",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/羁绊.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "认错 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/认错 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  },
  {
    "name": "雅俗共赏 - 许嵩",
    "artist": "许嵩",
    "url": "https://su3.cn/music/xs/雅俗共赏 - 许嵩.mp3",
    "cover": "https://su3.cn/pic.jpg"
  }
]
        });
ap6.on('play', function () {
	 document.title ="▶ "+ ap6.list.audios[ap6.list.index].name;
});
