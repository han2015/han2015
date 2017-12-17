let _articlenav=new Vue({
    el:'#article-nav',
    data:{
        title:"here hahah",
        visible:false,
        lists:[
            {index:"a-question-of-rights",title:"A Question of Rights"},
            {index:"one-chance",title:"One Chance"},
            {index:"a-man-and-his-castle",title:"A Man and His Castle"},
            {index:"yip-sang-a-chinese-canadian",title:"Yip Sang, a Chinese-Canadian"},
            {index:"an-ideal-position",title:"An Ideal Position"},
            {index:"a-history-of-christmas",title:"A History of Christmas "},
            {index:"a-time-to-say-hello",title:"A Time to Say Hello "},
            {index:"a-preface-to-murder",title:"A Preface to Murder"},
            {index:"canada-becomes-a-nation",title:"Canada Becomes a Nation"},
            {index:"sky-watch",title:"Sky Watch"},
            {index:"the-duet-tape",title:"The Duet Tape"},
            {index:"norman-bethune-a-canadian-hero-in-china",title:"Norman Bethune: a Canadian Hero in China"},
            {index:"future-or-fantasy",title:"Future or Fantasy?"},
            {index:"the-ancient-olympics",title:"The Ancient Olympics"},
        ]
    },
    methods:{
        showlist:function(event){
            this.visible=true;
        },
        hiddenlist:function(event){
            this.visible=false;    
        }
    }
});


