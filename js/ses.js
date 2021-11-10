var searchFunc = function(path, search_id, content_id) {
    'use strict'; //使用严格模式
    $.ajax({
        url: path,
        dataType: "xml",
        success: function( xmlResponse ) {
            // 从xml中获取相应的标题等数据
            var datas = $( "entry", xmlResponse ).map(function() {
                return {
                    title: $( "title", this ).text(),
                    content: $("content",this).text(),
                    url: $( "url" , this).text()
                };
            }).get();
            //ID选择器
            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function(){
                var str='<ul class=\"search-result-list\" style=\"list-style-type:none;margin-left:-7%;\">';                
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }
                // 本地搜索主要部分
                datas.forEach(function(data) {
                    var isMatch = true;
                    var content_index = [];
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g,"").toLowerCase();
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
                    if(data_title != '') {
                        keywords.forEach(function(keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            if(data_content != '')
                            index_content = data_content.indexOf(keyword);
                            if( index_title < 0 && index_content < 0 ){
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
                        str += "<li><a href='"+ data_url +"' class='search-result-title' target='_blank' style=\"margin-top:10px;\">"+ data_title +"</a>";
                        var content = data.content.trim().replace(/<[^>]+>/g,"");
                        if (first_occur >= 0) {
                            // 拿出含有搜索字的部分
                            var start = first_occur - 6;
                            var end = first_occur + 6;
                            if(start < 0){
                                start = 0;
                            }
                            if(start == 0){
                                end = 10;
                            }
                            if(end > content.length){
                                end = content.length;
                            }
                            var match_content = content.substr(start, end); 
                            // 列出搜索关键字，定义class加高亮
                            keywords.forEach(function(keyword){
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">"+keyword+"</em>");
                            })
                            if(data_content != '')
                                str += "<p class=\"search-result\">" + match_content +"...</p>"
                        }
                    }
                })
                $resultContent.innerHTML = str;
            })
        }
    })
};

if ( $("#search_view").length > 0 ) {
// var path = "../search.xml";
var path = "https://su3.cn/search.xml";
searchFunc(path, 'local-search-input', 'local-search-result');
}

function sercilce(){
    
    if($('#search_view').is(':hidden'))
        $("#search_view").show();
    else
        $("#search_view").hide();//隐藏div 

}

if ( $("#aplayer").length > 0 ) {
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
        name: '最爱',
        artist: '周慧敏',
        url: 'http://music.163.com/song/media/outer/url?id=329925.mp3',
        cover: 'https://p3.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg'
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
    }]
});
}
