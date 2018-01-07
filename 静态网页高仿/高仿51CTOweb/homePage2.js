/**
 * Created by Administrator on 2017/08/19.
 */
var gripNavigate=document.getElementById("gripNavigate");
window.onscroll=function(){
    var a=pageYOffset;
    if(a>100){
        gripNavigate.style.display="block";
    }else {
        gripNavigate.style.display="none";
    }
};
var headerMiddleFindCourseDowLi=document.querySelectorAll("#headerMiddle>form>div>ul>li");
var headerMiddleFindCourse=document.querySelector("#headerMiddle>form>div>span");
for(var i=0;i<2;i++) {
    headerMiddleFindCourseDowLi[i].onclick = function () {
        headerMiddleFindCourse.innerHTML = this.innerHTML;
    }
}
/*....头上部搜索框提交功能..................................................*/
var myForm=document.querySelector("#myForm");
var searchButton=document.querySelector("#myForm>button");
var searchInput=document.querySelector("#myForm>input");
var searchInputRight=document.querySelector("#headerMiddle>p");
searchButton.onclick=function(){
    myForm.action="http://edu.51cto.com/";
    myForm.method="get";
    myForm.submit();
};
searchInput.onfocus=function(){
    searchInputRight.style.display="none";
};
searchInput.onblur=function(){
    searchInputRight.style.display="block";
};
/*................................轮播图.................................................*/
var  mainRotationPicture=document.querySelector("#mainRotationPicture");
var mainRotationPic=document.querySelectorAll("#mainRotationPicture>a");
var  RotationPicFocus=document.querySelectorAll("#mainRotationPicture>ul>li");
var rightCli=document.getElementById("rightCli");
var leftCli=document.getElementById("leftCli");
var num=0;
function show(){
    num++;
    if(num>5){
        num=0;
    }
    for(var i=0;i<mainRotationPic.length;i++){
        mainRotationPic[i].style.opacity=0;
        RotationPicFocus[i].style.width="5px";
    }
    mainRotationPic[num].style.opacity=1;  /*轮播到图片时，透明度改为1*/
    mainRotationPic[num].style.transition="opacity 0.5s linear";
    RotationPicFocus[num].style.width="20px";/*轮播的焦点宽改为20px*/
    RotationPicFocus[num].style.transition="width 2s  linear";
}
var setIn=setInterval("show()",4000);
mainRotationPicture.onmouseover=function(){
    clearInterval(setIn);
    leftCli.style.display="block";
    rightCli.style.display="block";
};
mainRotationPicture.onmouseout=function(){
    setIn=setInterval("show()",4000);
    leftCli.style.display="none";
    rightCli.style.display="none";
};
function stoFocus(m){
    for (var n=0;n<RotationPicFocus.length;n++){
        RotationPicFocus[n].style.width="5px";
        mainRotationPic[n].style.opacity=0;
        RotationPicFocus[n].style.transition="none";
    }
    RotationPicFocus[m].style.width="20px";
    mainRotationPic[m].style.opacity=1;
    num=m;
}
function cli(p){
    for(var i=0;i<mainRotationPic.length;i++){
        RotationPicFocus[i].style.width="5px";
        mainRotationPic[i].style.opacity=0;
        RotationPicFocus[i].style.transition="none";
    }
    if (p=="L"){
        num--;
        if (num<0){
            num=5;
        }
        mainRotationPic[num].style.opacity=1;
        RotationPicFocus[num].style.width="20px";
    }
    if (p=="R"){
        num++;
        if (num>5){
            num=0;
        }
        mainRotationPic[num].style.opacity=1;
        RotationPicFocus[num].style.width="20px";
    }
}
/*................系统与运维big点击事件................................................*/
var downPicture=document.querySelectorAll(".downPicture");
var downPictureFirst=document.querySelector(".downPictureFirst");
function downPictureDisplay(m){
    if (m!='first'){  /*如果点击的不是第二个，第二个下面的图片内容隐藏，*/
        downPictureFirst.style.display="none";
        for (var i=0;i<downPicture.length;i++){
            downPicture[i].style.display="none";
        }
        /*当前点击的下面内容出现*/
        downPicture[m].style.display="block";
    }
    else{/*如果点击的是第二个，第二个下面的图片内容出现，其它隐藏*/
        for (var j=0;j<downPicture.length;j++){
            downPicture[j].style.display="none";
        }
        downPictureFirst.style.display="block";
    }
}
/*................云计算small点击事件................................................*/
var downPictureFirstSmall=document.querySelector(".downPictureFirstSmall");
var downPictureSmall=document.querySelectorAll(".downPictureSmall");
function downPictureDisplaySmall(m){
    if (m!='first'){
        downPictureFirstSmall.style.display="none";
        for (var i=0;i<downPictureSmall.length;i++){
            downPictureSmall[i].style.display="none";
        }
        downPictureSmall[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall.length;j++){
            downPictureSmall[j].style.display="none";
        }
        downPictureFirstSmall.style.display="block";
    }
}
/*................大数据big1点击事件................................................*/
var downPicture1=document.querySelectorAll(".downPicture1");
var downPictureFirst1=document.querySelector(".downPictureFirst1");
function downPictureDisplay1(m){
    if (m!='first'){
        downPictureFirst1.style.display="none";
        for (var i=0;i<downPicture1.length;i++){
            downPicture1[i].style.display="none";
        }
        downPicture1[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture1.length;j++){
            downPicture1[j].style.display="none";
        }
        downPictureFirst1.style.display="block";
    }
}
/*..........................WEB开发small_1点击事件..................................*/
var downPictureSmall_1=document.querySelectorAll(".downPictureSmall_1");
var downPictureFirstSmall_1=document.querySelector(".downPictureFirstSmall_1");
function downPictureDisplaySmall_1(m){
    if (m!='first'){
        downPictureFirstSmall_1.style.display="none";
        for (var i=0;i<downPictureSmall_1.length;i++){
            downPictureSmall_1[i].style.display="none";
        }
        downPictureSmall_1[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture.length;j++){
            downPictureSmall_1[j].style.display="none";
        }
        downPictureFirstSmall_1.style.display="block";
    }
}
/*................编程语言big2点击事件................................................*/
var downPicture2=document.querySelectorAll(".downPicture2");
var downPictureFirst2=document.querySelector(".downPictureFirst2");
function downPictureDisplay2(m){
    if (m!='first'){
        downPictureFirst2.style.display="none";
        for (var i=0;i<downPicture2.length;i++){
            downPicture2[i].style.display="none";
        }
        downPicture2[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture2.length;j++){
            downPicture2[j].style.display="none";
        }
        downPictureFirst2.style.display="block";
    }
}
/*..........................软件研发small_2点击事件..................................*/
var downPictureSmall_2=document.querySelectorAll(".downPictureSmall_2");
var downPictureFirstSmall_2=document.querySelector(".downPictureFirstSmall_2");
function downPictureDisplaySmall_2(m){
    if (m!='first'){
        downPictureFirstSmall_2.style.display="none";
        for (var i=0;i<downPictureSmall_2.length;i++){
            downPictureSmall_2[i].style.display="none";
        }
        downPictureSmall_2[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture.length;j++){
            downPictureSmall_2[j].style.display="none";
        }
        downPictureFirstSmall_2.style.display="block";
    }
}
/*................考试认证big3点击事件................................................*/
var downPicture3=document.querySelectorAll(".downPicture3");
var downPictureFirst3=document.querySelector(".downPictureFirst3");
function downPictureDisplay3(m){
    if (m!='first'){
        downPictureFirst3.style.display="none";
        for (var i=0;i<downPicture3.length;i++){
            downPicture3[i].style.display="none";
        }
        downPicture3[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture3.length;j++){
            downPicture3[j].style.display="none";
        }
        downPictureFirst3.style.display="block";
    }
}
/*..........................数据库small_3点击事件..................................*/
var downPictureSmall_3=document.querySelectorAll(".downPictureSmall_3");
var downPictureFirstSmall_3=document.querySelector(".downPictureFirstSmall_3");
function downPictureDisplaySmall_3(m){
    if (m!='first'){
        downPictureFirstSmall_3.style.display="none";
        for (var i=0;i<downPictureSmall_3.length;i++){
            downPictureSmall_3[i].style.display="none";
        }
        downPictureSmall_3[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall_3.length;j++){
            downPictureSmall_3[j].style.display="none";
        }
        downPictureFirstSmall_3.style.display="block";
    }
}
/*................网络安全big4点击事件................................................*/
var downPicture4=document.querySelectorAll(".downPicture4");
var downPictureFirst4=document.querySelector(".downPictureFirst4");
function downPictureDisplay4(m){
    if (m!='first'){
        downPictureFirst4.style.display="none";
        for (var i=0;i<downPicture4.length;i++){
            downPicture4[i].style.display="none";
        }
        downPicture4[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture4.length;j++){
            downPicture4[j].style.display="none";
        }
        downPictureFirst4.style.display="block";
    }
}
/*..........................人工智能small_4点击事件..................................*/
var downPictureSmall_4=document.querySelectorAll(".downPictureSmall_4");
var downPictureFirstSmall_4=document.querySelector(".downPictureFirstSmall_4");
function downPictureDisplaySmall_4(m){
    if (m!='first'){
        downPictureFirstSmall_4.style.display="none";
        for (var i=0;i<downPictureSmall_4.length;i++){
            downPictureSmall_4[i].style.display="none";
        }
        downPictureSmall_4[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall_4.length;j++){
            downPictureSmall_4[j].style.display="none";
        }
        downPictureFirstSmall_4.style.display="block";
    }
}
/*................移动开发big5点击事件................................................*/
var downPicture5=document.querySelectorAll(".downPicture5");
var downPictureFirst5=document.querySelector(".downPictureFirst5");
function downPictureDisplay5(m){
    if (m!='first'){
        downPictureFirst5.style.display="none";
        for (var i=0;i<downPicture5.length;i++){
            downPicture5[i].style.display="none";
        }
        downPicture5[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture5.length;j++){
            downPicture5[j].style.display="none";
        }
        downPictureFirst5.style.display="block";
    }
}
/*..........................人工智能small_5点击事件..................................*/
var downPictureSmall_5=document.querySelectorAll(".downPictureSmall_5");
var downPictureFirstSmall_5=document.querySelector(".downPictureFirstSmall_5");
function downPictureDisplaySmall_5(m){
    if (m!='first'){
        downPictureFirstSmall_5.style.display="none";
        for (var i=0;i<downPictureSmall_5.length;i++){
            downPictureSmall_5[i].style.display="none";
        }
        downPictureSmall_5[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall_5.length;j++){
            downPictureSmall_5[j].style.display="none";
        }
        downPictureFirstSmall_5.style.display="block";
    }
}
/*................嵌入式big6点击事件................................................*/
var downPicture6=document.querySelectorAll(".downPicture6");
var downPictureFirst6=document.querySelector(".downPictureFirst6");
function downPictureDisplay6(m){
    if (m!='first'){
        downPictureFirst6.style.display="none";
        for (var i=0;i<downPicture6.length;i++){
            downPicture6[i].style.display="none";
        }
        downPicture6[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture6.length;j++){
            downPicture6[j].style.display="none";
        }
        downPictureFirst6.style.display="block";
    }
}
/*..........................服务器small_6点击事件..................................*/
var downPictureSmall_6=document.querySelectorAll(".downPictureSmall_6");
var downPictureFirstSmall_6=document.querySelector(".downPictureFirstSmall_6");
function downPictureDisplaySmall_6(m){
    if (m!='first'){
        downPictureFirstSmall_6.style.display="none";
        for (var i=0;i<downPictureSmall_6.length;i++){
            downPictureSmall_6[i].style.display="none";
        }
        downPictureSmall_6[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall_6.length;j++){
            downPictureSmall_6[j].style.display="none";
        }
        downPictureFirstSmall_6.style.display="block";
    }
}
/*................企业信息化big7点击事件................................................*/
var downPicture7=document.querySelectorAll(".downPicture7");
var downPictureFirst7=document.querySelector(".downPictureFirst7");
function downPictureDisplay7(m){
    if (m!='first'){
        downPictureFirst7.style.display="none";
        for (var i=0;i<downPicture7.length;i++){
            downPicture7[i].style.display="none";
        }
        downPicture7[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture7.length;j++){
            downPicture7[j].style.display="none";
        }
        downPictureFirst7.style.display="block";
    }
}
/*..........................Office办公small_7点击事件..................................*/
var downPictureSmall_7=document.querySelectorAll(".downPictureSmall_7");
var downPictureFirstSmall_7=document.querySelector(".downPictureFirstSmall_7");
function downPictureDisplaySmall_7(m){
    if (m!='first'){
        downPictureFirstSmall_7.style.display="none";
        for (var i=0;i<downPictureSmall_7.length;i++){
            downPictureSmall_7[i].style.display="none";
        }
        downPictureSmall_7[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall_7.length;j++){
            downPictureSmall_7[j].style.display="none";
        }
        downPictureFirstSmall_7.style.display="block";
    }
}
/*................产品设计big8点击事件................................................*/
var downPicture8=document.querySelectorAll(".downPicture8");
var downPictureFirst8=document.querySelector(".downPictureFirst8");
function downPictureDisplay8(m){
    if (m!='first'){
        downPictureFirst8.style.display="none";
        for (var i=0;i<downPicture8.length;i++){
            downPicture8[i].style.display="none";
        }
        downPicture8[m].style.display="block";
    }
    else{
        for (var j=0;j<downPicture8.length;j++){
            downPicture8[j].style.display="none";
        }
        downPictureFirst8.style.display="block";
    }
}

/*..........................其它small_8点击事件..................................*/
var downPictureSmall_8=document.querySelectorAll(".downPictureSmall_8");
var downPictureFirstSmall_8=document.querySelector(".downPictureFirstSmall_8");
function downPictureDisplaySmall_8(m){
    if (m!='first'){
        downPictureFirstSmall_8.style.display="none";
        for (var i=0;i<downPictureSmall_8.length;i++){
            downPictureSmall_8[i].style.display="none";
        }
        downPictureSmall_8[m].style.display="block";
    }
    else{
        for (var j=0;j<downPictureSmall_8.length;j++){
            downPictureSmall_8[j].style.display="none";
        }
        downPictureFirstSmall_8.style.display="block";
    }
}
