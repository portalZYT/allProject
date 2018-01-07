/**Created by Administrator on 2017/08/16.*/
    /*大数据悄然改变我们的生活..........................................................*/
var on=document.querySelectorAll(".on");
var dataPeriodDivNone=document.querySelectorAll(".dataPeriodDivNone");
var titlW=document.querySelectorAll(".titlW");
function show(m){
    for (var i=0;i<titlW.length;i++)
    {
        dataPeriodDivNone[i].style.display="none";
        titlW[i].style.display="block";
        on[i].style.bottom="0";
        on[i].style.margin="0 0";
        on[i].style.backgroundImage="url('assistantPagePicture/point.png')";
        on[i].style.border="1px solid #acc1c7";
    }
    titlW[m].style.display="none";
    dataPeriodDivNone[m].style.display="block";
    on[m].style.bottom="35px";
   on[m].style.margin="0 10px";
   on[m].style.backgroundImage="none";
    on[m].style.border="none";
}
/*........留下联系方式.............................................................................................*/
var inp=document.querySelectorAll("#tonightCourse>div>input");
function disNone(m){
    inp[m].value="";
}
function dis(n){
    if(n==0){
        if ( inp[n].value==""){
            inp[n].value="真实姓名";
        }
    }
    if(n==1){
        if ( inp[n].value==""){
            inp[n].value="手机号码";
        }
    }
    if(n==2){
        if ( inp[n].value==""){
            inp[n].value="QQ号码";
        }
    }
}
/*...................权威课程体系部分..................................................................................*/
var titleli=document.querySelectorAll("#authorityCourse li");
for(var i =0;i<titleli.length;i++){
    titleli[i].onmouseover=function(){
        var ch = this.childNodes;
        for(var j =0;j<titleli.length;j++){
            titleli[j].firstElementChild.style.display="block";
            titleli[j].lastElementChild.style.display="none";
        }
        ch[1].style.display="none";
        ch[3].style.display="block"
    }
}
/*左边广告栏点击出现新窗口.....................................*/
function leftad(){
    window.open ('http://edu.51cto.com/px/train/108?xiaotu', '',
        'height=520, width=670, top=50px,left=150px, ' +
        'toolbar=no, menubar=no, scrollbars=yes,' +
        ' resizable=yes,location=yes, status=yes')
}
/*.....右下方的聊天室............................................*/
var moveAD=document.querySelector("#moveAD");
var suSmallBig=document.querySelector("#suSmallBig");
function adAutoshow(){
    moveAD.style.bottom="0";
}
var setIn=setTimeout("adAutoshow()",2000);
function  closeChuangKou(){
    moveAD.style.bottom="-520px";
}
/*......点击出现和消失..........................................*/
var num=0;
function  suoSmallBig(){
    num++;
    if (num==1){
        moveAD.style.bottom="-470px";
        suSmallBig.style.backgroundImage="url('assistantPagePicture/white-restore.png')";
    }
    else {
        moveAD.style.bottom="0";
        suSmallBig.style.backgroundImage="url('assistantPagePicture/white-min.png')";
        num=0;
    }
}
/*......发送功能模块......................................................................*/
var send=document.querySelector("#send");
var inputBox=document.querySelector("#inputBox");
var chatContent=document.querySelector("#chatContent");
send.onclick=function(){
    if (inputBox.value==""){
        return false;/*如果输入框为空，则不发生任何内容*/
    }
    /*如果不为空，先清除里面原始的提示文字，再添加用户输入的文字*/
    if (inputBox.value!=""){
        if (chatContent.innerHTML=="您好！有什么可以帮助你的吗？"){
            chatContent.innerHTML="";
            chatContent.innerHTML+= "客户："+inputBox.value+"<br>";
            inputBox.value=""
        }
        else {
            chatContent.innerHTML+= "客户："+inputBox.value+"<br>";
            inputBox.value="";
        }
    }
};
document.onkeydown=function(event){
    var e=event||window.event;
    if (e && e.keyCode==13){
        if (inputBox.value==""){
            return false;
        }
        if (inputBox.value!=""){
            if (chatContent.innerHTML=="您好！有什么可以帮助你的吗？"){
                chatContent.innerHTML="";
                chatContent.innerHTML+= "客户："+inputBox.value+"<br>";
                inputBox.value=""
            }
            else {
                chatContent.innerHTML+= "客户："+inputBox.value+"<br>";
                inputBox.value="";
            }
        }
    }
};


