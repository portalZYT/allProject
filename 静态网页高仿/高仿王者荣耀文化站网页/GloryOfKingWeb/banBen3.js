/**
 * Created by Administrator on 2017/09/03.
 */
$(function(){
    $(".headerTopRightNoneContentBody").find("li").mouseover(function () {
        $(this).find(".titleW").css("display","none").end().siblings().find(".titleW").css("display","inline-block");
        $(this).find("div").css("display","block").end().siblings().find("div").css("display","none");
    });
    var num=0;
    function picShow1() {
        num++;
        if(num>4){
            num=0;
        }
        $("#pageArea1_picture").css({
            "left":-895*num+'px'});
        $("#pageArea1_title").find("li").eq(num).removeClass("brightAn").addClass("brightNess").css("background-color","blue")
            .siblings().removeClass("brightNess").css("background-color"," #25244b").addClass("brightAn")
    }
    var setIn=setInterval(picShow1,3000);
    $("#pageArea1_picTitle").hover(function() {
        clearInterval(setIn);
    }, function() {
        setIn=setInterval(picShow1,3000);
    });
    $("#pageArea1_title").find("li").hover(function(){
        var m=$(this).index();
        $("#pageArea1_picture").css({
            "left":-895*m+'px'});
        $("#pageArea1_title").find("li").eq(m).removeClass("brightAn").addClass("brightNess").css("background-color","blue")
            .siblings().removeClass("brightNess").css("background-color"," #25244b").addClass("brightAn")
        num=m;
    },function(){});
    /*...........荣耀诗会.........................................................*/
    /* $("#pageArea3CliL").click(function(){
     $("#pageArea3PicOne").css({
     'display':'none'
     });
     $("#pageArea3PicTwo").css({
     'display':'block'
     });
     $("#pageArea3FocuOne").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
     $("#pageArea3FocuTwo").removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2")
     });
     $("#pageArea3CliR").click(function(){
     $("#pageArea3PicOne").css({
     'display':'block'
     });
     $("#pageArea3PicTwo").css({
     'display':'none'
     });
     $("#pageArea3FocuTwo").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
     $("#pageArea3FocuOne").removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2")
     });
     $("#pageArea3FocuOne").click(function(){
     $(this).removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2");
     $("#pageArea3FocuTwo").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
     $("#pageArea3PicOne").css({
     'display':'block'
     });
     $("#pageArea3PicTwo").css({
     'display':'none'
     });
     });
     $("#pageArea3FocuTwo").click(function(){
     $(this).removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2");
     $("#pageArea3FocuOne").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
     $("#pageArea3PicOne").css({
     'display':'none'
     });
     $("#pageArea3PicTwo").css({
     'display':'block'
     });
     });*/
    $("#pageArea3CliL").click(function(){
        $("#pageArea3Pic1").css({
            'opacity':0
        });
        $("#pageArea3Pic2").css({
            'opacity':1
        });
        $("#pageArea3FocuOne").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
        $("#pageArea3FocuTwo").removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2");
    });
    $("#pageArea3CliR").click(function(){
        $("#pageArea3Pic1").css({
            'opacity':1
        });
        $("#pageArea3Pic2").css({
            'opacity':0
        });
        $("#pageArea3FocuTwo").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
        $("#pageArea3FocuOne").removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2");
    });

    $("#pageArea3FocuOne").click(function(){
        $(this).removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2");
        $("#pageArea3FocuTwo").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
        $("#pageArea3Pic1").css({
            'opacity':1
        });
        $("#pageArea3Pic2").css({
            'opacity':0
        });
    });$("#pageArea3FocuTwo").click(function(){
        $(this).removeClass('pageArea3Focubg1').addClass("pageArea3Focubg2");
        $("#pageArea3FocuOne").removeClass('pageArea3Focubg2').addClass("pageArea3Focubg1");
        $("#pageArea3Pic1").css({
            'opacity':0
        });
        $("#pageArea3Pic2").css({
            'opacity':1
        });
    });
    /*.....................历史上的他.....................................................*/
    $("#xuanxiang").find("ul").find("li").click(function(){
        var i=$(this).index();
        // console.log($(".historyHe_contentRightPic").eq(i));
        $(".historyHe_contentRightPic").eq(i).css("display","block")
            .siblings(".historyHe_contentRightPic").css("display","none");
        if(i==0||i==1||i==2){
            $("#xuanxiang").find("ul").css({
                'left':0
            })
        }
        if(i==3){
            $("#xuanxiang").find("ul").css({
                'left':-141+'px'
            })
        }
        if(i==4){
            $("#xuanxiang").find("ul").css({
                'left':-141*2+'px'
            })
        }
        if(i==5){
            $("#xuanxiang").find("ul").css({
                'left':-141*3+'px'
            })
        }
        if(i==6){
            $("#xuanxiang").find("ul").css({
                'left':-141*4+'px'
            })
        }
        if(i==7){
            $("#xuanxiang").find("ul").css({
                'left':-141*5+'px'
            })
        }
        if(i==8){
            $("#xuanxiang").find("ul").css({
                'left':-141*6+'px'
            })
        }
        if(i==9){
            $("#xuanxiang").find("ul").css({
                'left':-141*7+'px'
            })
        }
    });
    var  pic1=["picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"
        ,"picture/historyHe/big/105-mobileskin-1.jpg", "picture/historyHe/big/106-mobileskin-1.jpg","picture/historyHe/big/107-mobileskin-1.jpg", "picture/historyHe/big/115-mobileskin-1.jpg", "picture/historyHe/big/139-mobileskin-1.jpg"];
    var wordTitle=["廉颇","小乔","赵云","蔡文姬","典韦","诸葛亮","武则天","宫本武藏","马可波罗","兰陵王"
        ,"廉颇","小乔","赵云","蔡文姬","典韦","诸葛亮","武则天","宫本武藏","马可波罗","兰陵王"
        ,"廉颇","小乔","赵云","蔡文姬","典韦","诸葛亮","武则天","宫本武藏","马可波罗","兰陵王"
        ,"廉颇","小乔","赵云","蔡文姬","典韦","诸葛亮","武则天","宫本武藏","马可波罗","兰陵王"
        ,"廉颇","小乔","赵云","蔡文姬","典韦","诸葛亮","武则天","宫本武藏","马可波罗","兰陵王"];
    var words1=["廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"本应是小桥。小桥和大桥是姐妹俩，是东汉末年庐江士族桥玄的女儿。《三国演义》将二人说成大小乔。江南而乔，是出名的美女，大乔嫁于孙策，小乔嫁给了周瑜。周瑜风流倜傥，人称度曲周郎，跟小乔十分相得。曹操率军南下，击破荆州刘表，威逼江有传说，说曹操..."
        ,"甄姬，中山无极人氏，出身官宦世家。自幼聪明貌美，颇有才华。先嫁袁绍之子袁熙，袁绍败后，被曹丕收纳，曹丕登基称帝后不久，即失宠，被赐死。其子曹叡即魏明帝继位后，追封她为文昭皇后。曹丕的弟弟曹植写的著名诗篇《洛神赋》，据说就是以她为原型..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."
        ,"廉颇是战国后期的赵国名将。嬴姓，廉氏。廉颇为将，非常稳重，赢多败少，曾大破东方强国的齐国，取阳晋。取得了赵国对齐的优势地位，由此被封为上卿。蔺相如因完璧归赵得封相国之后，廉颇曾经跟蔺相如闹过矛盾，	蔺相如不予计较，廉颇闻之，非常惭愧，由此演..."
        ,"刘邦为西汉开国皇帝，平民出身，父母在史籍中没有留下名字。时人称他刘季，季是排行，即刘家老四。做过沛县的亭长，类似于基层公路交通站站长兼派出所所长的职位。跟沛县掌管钱粮的小吏萧何相识，同时有一帮酒肉朋友，经常喝酒赌博，入不敷出，有时要到兄..."];
    var p=document.getElementById("historyHe_contentLeftpic");
    var historyHeLeftWordsH=document.querySelector("#historyHeLeftWords>h2");
    var historyHeLeftWordsP=document.querySelector("#historyHeLeftWords>p");
    $(".historyHe_contentRightPic").find("ul").find("li").mouseover(function(){
        var i=$(this).index();
        $(this).css({
            filter:'brightness(110%)'
        }).siblings().css({
            filter:'brightness(45%)'
        });
        p.src=pic1[i];
        historyHeLeftWordsH.innerHTML=wordTitle[i];
        historyHeLeftWordsP.innerHTML=words1[i];
    }).click(function(){
        var i=$(this).index();
        $("#historyDetailWords").show();
        document.body.parentNode.style.overflowY = 'hidden';
        $("#historyDetailWordDiv").children('div').html(words1[i]);
        $("#historyDetailWordDiv").children('h2').text(wordTitle[i]);
    });
    $("#hDetailClose").click(function(){
        $("#historyDetailWords").hide();
        document.body.parentNode.style.overflowY = 'auto';
    });
    /*............................放大镜.................................................*/
   /* var cover=document.querySelector("#cover");
    var box=document.querySelector("#historyHe_contentLpic");
    var historyHe_contentLeftpic=document.querySelector("#historyHe_contentLeftpic");
    var picBigBox=document.querySelector("#picBigBox");
    var pictureBig=document.querySelector("#pictureBig");
    box.onmousemove=function(e){
        var ev=e||window.event;
        pictureBig.src=historyHe_contentLeftpic.src;
        box.style.cursor="move";
        cover.style.display="block";
        picBigBox.style.display="block";
        var mousex= ev.clientX;/!*...鼠标在屏幕上的x坐标.........*!/
        var mousey= ev.clientY;
        function getLeft(e){
            var offset=e.offsetLeft;
            if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
            return offset;
        }
        var pos = box.getBoundingClientRect();
        var boxleft=pos.left;
        var boxtop=pos.top;
        /!*console.log(boxleft,boxtop);*!/
        var _left=mousex-boxleft-cover.offsetWidth / 2;
        var _top=mousey-boxtop-cover.offsetHeight /2;
        if(_left<=0){
            _left=0;
        }
        else if(_left>=box.offsetWidth - cover.offsetWidth){
            _left=box.offsetWidth - cover.offsetWidth;
        }
        if(_top<=0){
            _top=0;
        }
        else if(_top>=box.offsetHeight - cover.offsetHeight){
            _top=box.offsetHeight - cover.offsetHeight;
        }
        cover.style.left= _left+"px";
        cover.style.top=_top+"px";
        var picBacPosX=(cover.offsetLeft*pictureBig.offsetWidth)/box.offsetWidth;
        var picBacPosY=(cover.offsetTop*pictureBig.offsetHeight)/box.offsetHeight;
        /!*   console.log(pictureBig.offsetWidth);*!/
        pictureBig.style.left=-picBacPosX+'px';
        pictureBig.style.top=-picBacPosY+'px';
    };
    box.onmouseout=function(){
        cover.style.display="none";
        picBigBox.style.display="none";
    }*/
    function FangDangJing(boxA){/*构造一个对象*/
        var _this=this;
        this.box=document.querySelector(boxA);
        this.cover=box.querySelector("#cover");
        this.historyHe_contentLeftpic=box.querySelector("#historyHe_contentLeftpic");
        this.picBigBox=box.querySelector("#picBigBox");
        this.pictureBig=box.querySelector("#pictureBig");
        this.box.onmousemove=function(){
            _this.mouseMove();
        };
        this.box.onmouseout=function(){
            _this.mouseOut();
        };
    }
    FangDangJing.prototype={
        constructor:FangDangJing,
        mouseMove: function (e){
        var ev=e||window.event;
        this.pictureBig.src= this.historyHe_contentLeftpic.src;
        this.box.style.cursor="move";
        this.cover.style.display="block";
        this.picBigBox.style.display="block";
        var mousex= ev.clientX;/*...鼠标在屏幕上的x坐标.........*/
        var mousey= ev.clientY;
        var pos = this.box.getBoundingClientRect();
        var boxleft=pos.left;
        var boxtop=pos.top;
        var _left=mousex-boxleft-this.cover.offsetWidth / 2;
        var _top=mousey-boxtop-this.cover.offsetHeight /2;
        if(_left<=0){
            _left=0;
        }
        else if(_left>=this.box.offsetWidth - this.cover.offsetWidth){
            _left=this.box.offsetWidth - this.cover.offsetWidth;
        }
        if(_top<=0){
            _top=0;
        }
        else if(_top>=this.box.offsetHeight - this.cover.offsetHeight){
            _top=this.box.offsetHeight - this.cover.offsetHeight;
        }
        this.cover.style.left= _left+"px";
        this.cover.style.top=_top+"px";
        var picBacPosX=(this.cover.offsetLeft*this.pictureBig.offsetWidth)/this.box.offsetWidth;
        var picBacPosY=(this.cover.offsetTop*this.pictureBig.offsetHeight)/this.box.offsetHeight;
        this.pictureBig.style.left=-picBacPosX+'px';
        this.pictureBig.style.top=-picBacPosY+'px';
    },
        mouseOut:function(){
        this.cover.style.display="none";
        this.picBigBox.style.display="none";
    }
};new FangDangJing("#historyHe_contentLpic");

    /*............................放大镜.................................................*/
    /*......王者音乐听.......................................................*/
    $(".kingMusicPic").find("a").hover(function(){
        $(this).css({
            'opacity':0.8
        })
    },function(){
        $(this).css({
            'opacity':0
        })
    });
    var num2=0;
    function kingMusic(){
        num2++;
        if (num2>3){
            num2=0;
        }
        if (num2==3){
            $("#kingMusicLunBoPic").stop().animate({'left':-238*num2},1000).delay(1000).animate({'left':0},0);
        }else{
            $("#kingMusicLunBoPic").stop().animate({'left':-238*num2},1000).delay(1000);
        }
    }
    var setInP=setInterval(kingMusic,2000);
    $("#kingMusicLeft").hover(function() {
        clearInterval(setInP);
    }, function() {
        setInP=setInterval(kingMusic,2000);
    }).click(function(){
        num2++;
        if (num2>3){
            num2=0;
        }
        if (num2==0){
            $("#kingMusicLunBoPic").stop().animate({'left':-238*num2},0)
        }else {
            $("#kingMusicLunBoPic").stop().animate({'left':-238*num2},1000)
        }

    });
    $("#kingMusicRight").hover(function() {
        clearInterval(setInP);
    }, function() {
        setInP=setInterval(kingMusic,2000);
    }).click(function(){
        num2--;
        if (num2<0){
            num2=3;
        }
        if (num2==3){
            $("#kingMusicLunBoPic").stop().animate({'left':-238*num2},0)
        }else {
            $("#kingMusicLunBoPic").stop().animate({'left':-238*num2},1000)
        }
    });



});