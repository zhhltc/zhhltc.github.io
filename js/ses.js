var searchFunc = function (path, search_id, content_id) {
    'use strict'; //使用严格模式
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // 从xml中获取相应的标题等数据
            var datas = $("entry", xmlResponse).map(function () {
                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();
            //ID选择器
            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);
            $input.addEventListener('input',
                function () {
                    var str = '<ul class=\"search-result-list\" style=\"list-style-type:none;margin-left:-7%;\">';
                    var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                    $resultContent.innerHTML = "";
                    if (this.value.trim().length <= 0) {
                        return;
                    }
                    // 本地搜索主要部分
                    datas.forEach(function (data) {
                        var isMatch = true;
                        var content_index = [];
                        var data_title = data.title.trim().toLowerCase();
                        var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                        var data_url = data.url;
                        var index_title = -1;
                        var index_content = -1;
                        var first_occur = -1;
                        // 只匹配非空文章
                        // if(data_title != '' && data_content != '') {
                        //     keywords.forEach(function(keyword, i) {
                        //         index_title = data_title.indexOf(keyword);
                        //         index_content = data_content.indexOf(keyword);
                        //         if( index_title < 0 && index_content < 0 ){
                        //             isMatch = false;
                        //         } else {
                        //             if (index_content < 0) {
                        //                 index_content = 0;
                        //             }
                        //             if (i == 0) {
                        //                 first_occur = index_content;
                        //             }
                        //         }
                        //     });
                        // }
                        if (data_title != '') {
                            keywords.forEach(function (keyword, i) {
                                index_title = data_title.indexOf(keyword);
                                if (data_content != '') index_content = data_content.indexOf(keyword);
                                if (index_title < 0 && index_content < 0) {
                                    isMatch = false;
                                } else {
                                    if (index_content < 0) {
                                        index_content = 0;
                                    }
                                    if (i == 0) {
                                        first_occur = index_content;
                                    }
                                }
                            });
                        }
                        // 返回搜索结果
                        if (isMatch) {
                            //结果标签
                            // str += "<li><a href='"+ data_url +"' class='search-result-title' target='_blank'>"+ "> " + data_title +"</a>";
                            str += "<li><a href='" + data_url + "' class='search-result-title' target='_blank' style=\"margin-top:10px;\">" + data_title + "</a>";
                            var content = data.content.trim().replace(/<[^>]+>/g, "");
                            if (first_occur >= 0) {
                                // 拿出含有搜索字的部分
                                var start = first_occur - 6;
                                var end = first_occur + 6;
                                if (start < 0) {
                                    start = 0;
                                }
                                if (start == 0) {
                                    end = 10;
                                }
                                if (end > content.length) {
                                    end = content.length;
                                }
                                var match_content = content.substr(start, end);
                                // 列出搜索关键字，定义class加高亮
                                keywords.forEach(function (keyword) {
                                    var regS = new RegExp(keyword, "gi");
                                    match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                                })
                                if (data_content != '') str += "<p class=\"search-result\">" + match_content + "...</p>"
                            }
                        }
                    })
                    $resultContent.innerHTML = str;
                })
        }
    })
};

if ($("#search_view").length > 0) {
    // var path = "../search.xml";
    var path = "https://su3.cn/search.xml";
    searchFunc(path, 'local-search-input', 'local-search-result');
}

function sercilce() {

    if ($('#search_view').is(':hidden')) $("#search_view").show();
    else $("#search_view").hide(); //隐藏div 
}

if ($("#aplayer").length > 0) {
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        listFolded: true,
        audio: [{
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
            name: '最爱',
            artist: '周慧敏',
            url: 'http://music.163.com/song/media/outer/url?id=329925.mp3',
            cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
        },
		{
            name: '我好想你',
            artist: '潘广益',
            url: 'http://music.163.com/song/media/outer/url?id=35544129.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '难念的经',
            artist: '周华健',
            url: 'http://music.163.com/song/media/outer/url?id=187215.mp3',
            cover: 'https://img1.baidu.com/it/u=3773827282,1374643760&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
        },
        {
            name: '下一站天后',
            artist: 'Twins',
            url: 'http://music.163.com/song/media/outer/url?id=1897929627.mp3',
            cover: 'https://img2.baidu.com/it/u=1070975816,873380581&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=451'
        },
        {
            name: '暗涌',
            artist: '王菲',
            url: 'http://music.163.com/song/media/outer/url?id=300136.mp3',
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphotos.tuchong.com%2F1010089%2Ff%2F19866177.jpg&refer=http%3A%2F%2Fphotos.tuchong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668308043&t=b5b732526b5141d095ca24fe20adb23c'
        },
        {
            name: '笑看风云',
            artist: '陈冬霖',
            url: 'http://music.163.com/song/media/outer/url?id=1343590695.mp3',
            cover: 'https://img0.baidu.com/it/u=2571294868,2631998466&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220'
        },
		{
            name: '樱花树下的约定',
            artist: '孙灵乔',
            url: 'http://music.163.com/song/media/outer/url?id=1954302417.mp3',
            cover: 'https://img0.baidu.com/it/u=2571294868,2631998466&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220'
        },
		{
            name: '虞兮叹',
            artist: '闻人听書',
            url: 'http://music.163.com/song/media/outer/url?id=1479526505.mp3',
            cover: 'https://img0.baidu.com/it/u=2571294868,2631998466&fm=253&fmt=auto&app=138&f=JPEG?w=220&h=220'
        },
        {
            name: '偏爱',
            artist: '张芸京',
            url: 'http://music.163.com/song/media/outer/url?id=27731339.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '你瞒我瞒',
            artist: '陈柏宇',
            url: 'http://music.163.com/song/media/outer/url?id=455345415.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '沉默是金',
            artist: '张国荣',
            url: 'http://music.163.com/song/media/outer/url?id=1851228571.mp3',
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
            name: '小城大事',
            artist: '杨千嬅',
            url: 'http://music.163.com/song/media/outer/url?id=316756.mp3',
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
            url: 'http://music.163.com/song/media/outer/url?id=1960403857.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '一生所爱',
            artist: '卢冠廷 / 莫文蔚',
            url: 'http://music.163.com/song/media/outer/url?id=25707139.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '生僻字',
            artist: '陈柯宇',
            url: 'http://music.163.com/song/media/outer/url?id=518781004.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '那些花儿',
            artist: '朴树',
            url: 'http://music.163.com/song/media/outer/url?id=4877908.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '偏偏喜欢你',
            artist: '陈百强',
            url: 'http://music.163.com/song/media/outer/url?id=27874938.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
		{
            name: '摩天轮',
            artist: '罗百吉',
            url: 'http://music.163.com/song/media/outer/url?id=120130.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '赤伶',
            artist: '是二智呀',
            url: 'http://music.163.com/song/media/outer/url?id=1377748865.mp3',
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
        },
        {
            name: '爱丫爱丫',
            artist: 'By2',
            url: 'http://music.163.com/song/media/outer/url?id=406737348.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: 'big big word',
            artist: 'Emilia',
            url: 'http://music.163.com/song/media/outer/url?id=2534006.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: 'dream it possible',
            artist: 'Delacey',
            url: 'http://music.163.com/song/media/outer/url?id=38592976.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '海口',
            artist: '后弦',
            url: 'http://music.163.com/song/media/outer/url?id=92280.mp3',
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
            url: 'http://music.163.com/song/media/outer/url?id=1299844949.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '大鱼',
            artist: '周深',
            url: 'http://music.163.com/song/media/outer/url?id=1421191783.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '美丽的神话',
            artist: '成龙 / 金喜善',
            url: 'http://music.163.com/song/media/outer/url?id=4875127.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '相思',
            artist: '毛阿敏',
            url: 'http://music.163.com/song/media/outer/url?id=276294.mp3',
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
            url: 'http://music.163.com/song/media/outer/url?id=86360.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },
        {
            name: '情意结',
            artist: '陈慧娴',
            url: 'http://music.163.com/song/media/outer/url?id=211238.mp3',
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F25663%2F20170702053127-1656772248.jpg%2F0&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668307976&t=fdab6e44708c1f7b6cc8e27416f75860'
        },
        {
            name: '時代を超える想い2',
            artist: '和田薫',
            url: 'http://music.163.com/song/media/outer/url?id=541131.mp3',
            cover: 'https://img0.baidu.com/it/u=3311906409,2452818801&fm=253&fmt=auto&app=138&f=JPEG?w=150&h=150'
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
            name: '故乡的原风景',
            artist: '宗次郎',
            url: 'http://music.163.com/song/media/outer/url?id=393685.mp3',
            cover: 'https://img2.baidu.com/it/u=1992087935,3553759223&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375'
        },
        {
            name: 'Send It',
            artist: 'feat',
            url: 'http://music.163.com/song/media/outer/url?id=426291544.mp3',
            cover: 'https://p3.music.126.net/4ZgCt77ZOVJXegIdVtSo-Q==/109951166442911780.jpg'
        },
        {
            name: 'Friendships',
            artist: 'Pascal Letoublon',
            url: 'http://music.163.com/song/media/outer/url?id=505449407.mp3',
            cover: 'https://p3.music.126.net/FMRlfgv5H-Kwj2eBam8Siw==/109951165623959723.jpg'
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
            url: 'http://music.163.com/song/media/outer/url?id=1430692755.mp3',
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
            name: 'Illusionary Daytime',
            artist: 'Shirfine',
            url: 'http://music.163.com/song/media/outer/url?id=28907016.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: '美丽的神话',
            artist: '笛呆子囚牛',
            url: 'http://music.163.com/song/media/outer/url?id=1422215048.mp3',
            cover: 'https://su3.cn/pic.jpg'
        },{
            name: 'A Little Story',
            artist: 'Valentin',
            url: 'http://music.163.com/song/media/outer/url?id=857896.mp3',
            cover: 'https://su3.cn/pic.jpg'
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
        }]
    });
}


//双击放大图片
// $(function() {
//     $("script").each(function(i, e) {
//         if (e.src.indexOf("zoomify.min.js") >= 0) {
//             <!--console.log("zoomify已加载！"); -->
//             $('.lazy').zoomify();
//         }
//     });
// });