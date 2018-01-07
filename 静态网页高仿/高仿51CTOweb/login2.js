/**
 * Created by Administrator on 2017/08/19.
 */
var inp1=document.querySelector("#useNam");
var inp2=document.querySelector("#pasWard");
var useWarning=document.querySelector("#useWarn");
var passwardWarning=document.querySelector("#passwardWarn");
var myForm=document.querySelector("#myForm");
var dengLu=document.querySelector("#dengLu");
var triangle=document.querySelector("#triangle");
var arr=["youtian","123456"];
function useName(){
    console.log(inp1.value);
    if (inp1.value!=""){
        useWarning.innerHTML="";
        return true;
    }
    else
    {
        useWarning.innerHTML="<img src='LoginPicture/warning.png' style='display:inline-block;margin-top: 2px'>"+"&ensp;"+"用户名不能为空";
    }
}
function passwardTest(){
    if (inp2.value != "") {
        passwardWarning.innerHTML = "";
        return true;
    }
    else {
        passwardWarning.innerHTML = "<img src='LoginPicture/warning.png' style='display:inline-block;margin-top: 2px'>"+"&ensp;"+"密码不能为空";
    }
}
dengLu.onclick=function(){
    if (useName()==true&& passwardTest()==true&&inp1.value==arr[0]&&inp2.value==arr[1]) {
        myForm.action = "http://localhost:63342/51CTOweb/hompage2.html";
        myForm.method = "post";
        myForm.submit();
    }
    else
    {
        passwardWarning.innerHTML="<span style='color: red'>"+"账号密码错误"+"</span>";
        return false;
    }
};
/*........更多方式登录.........................................*/
var moreWayLogin=document.querySelector("#moreWayLogin");
var moreWays=document.querySelector("#moreWays");
var num=0;
moreWayLogin.onclick=function(){
    num++;
    if (num==1){
        moreWays.style.display="block";
        triangle.style.borderWidth="5px 5px 0 5px";
    }
    if (num==2){
        moreWays.style.display="none";
        triangle.style.borderWidth="0 5px 5px 5px";
        num=0;
    }
};
/*....微信快捷登录................................................*/
var firstOne=document.querySelector("#first");
var second=document.querySelector("#second");
var backAccount=document.querySelector("#backAccount");
var WeiXinDengLu=document.querySelector("#WeiXinDengLu");
var p=0;
WeiXinDengLu.onclick=function(){
        firstOne.style.display="none";
        second.style.display="block";
};
backAccount.onclick=function(){
    firstOne.style.display="block";
    second.style.display="none";
};

