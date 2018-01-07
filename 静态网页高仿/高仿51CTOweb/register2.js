/**
 * Created by Administrator on 2017/08/11.
 */
    /*验证码部分...........................................................*/
var bn;
var yZM=document.getElementById("yanZhengMa");
var yanZhengMaWarn=document.getElementById("yanZhengMaWarn");
var identifyCodeInput=document.getElementById("identifyCodeInput");
var arr=["0","1","2","3","4","5","6","7","8","9",
    "A", "B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O", "P","Q","R","S","T", "U", "V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z"];
function abc(){
    bn="";
    for (var i=0;i<6;i++){
        var ind=parseInt(Math.random()*arr.length);
        bn+=arr[ind];
    }
    yZM.innerHTML=bn;
}abc();
yZM.onclick=function(){
    bn="";
    for (var i=0;i<6;i++){
        var ind=parseInt(Math.random()*arr.length);
        bn+=arr[ind];
    }
    yZM.innerHTML=bn;
};
function identifCodInput(){
    if (identifyCodeInput.value== yZM.innerHTML){
        yanZhengMaWarn.innerHTML="";
        return true;
    }else {
        yanZhengMaWarn.innerHTML="验证码错误";
        abc();
    }
}
/*输入框部分........................................................*/
var inputBox=document.getElementById("inputBox");
var inputBoxWarn=document.getElementById("inputBoxWarn");
var recommend1=document.getElementById("recommend");
var Emai=document.querySelectorAll(".Ema");
var suggest=document.querySelector("#suggest");
var agreement=document.querySelector("#agreement");
var registerNow=document.getElementById("registerNow");
var cha;
var Em;
function inputBoxShuRu(){
    suggest.style.display="block";
    agreement.style.marginTop="0";
    inputBoxWarn.style.display="none";
    registerNow.style.marginTop="15px";

}
/*当输入框里的内容改变时recommend即邮箱种类供客户选择的部分和后面的
 * 验证码、用户名、密码框部分出现和消失*/
var registerDisply=document.querySelector("#registerDisply");
inputBox.oninput=function (){
    cha="";
    Em="";
    for (var i=0;i<inputBox.value.length;i++){
        if (inputBox.value.charAt(i)=="@"){
            recommend1.style.display="block";/*邮箱种类供客户选择的部分显示*/
            registerDisply.style.display="block";/*验证码、用户名、密码框部分显示*/
        }
        else
        {   recommend1.style.display="none";/*邮箱种类供客户选择的部分隐藏*/
            var regs1=/^1((3|5)[0-3|4-9]|4[5|7]|7[6-8]|8[0-9]\d{8}$)/;
            if (regs1.test(inputBox.value)==true){
                inputBoxWarn.innerHTML="";
                registerDisply.style.display="block";/*验证码、用户名、密码框部分显示*/
            }
           else{
                inputBoxWarn.style.display="block";
                suggest.style.display="none";
                registerNow.style.marginTop="30px";/*....注册按钮增加上边框为了排版.........*/
                inputBoxWarn.innerHTML="请输入正确手机格式或邮箱格式";
            }
        }
        cha+=inputBox.value.charAt(i);/*先把输入框的内容赋给cha变量*/
    }
    for (var j=0;j<cha.length;j++){
        Em+=cha.charAt(j);
        if (cha.charAt(j)=="@"){
            break;
        }
    }
    Emai[0].innerHTML=Em+"qq.com";
    Emai[1].innerHTML=Em+"vip.qq.com";
    Emai[2].innerHTML=Em+"126.com";
    Emai[3].innerHTML=Em+"139.com";
    Emai[4].innerHTML=Em+"163.com";
    Emai[5].innerHTML=Em+"hotmail.com";
    Emai[6].innerHTML=Em+"souhu.com";
    Emai[7].innerHTML=Em+"sina.com";
    Emai[8].innerHTML=Em+"sina.cn.com";
    Emai[9].innerHTML=Em+"vip.sina.com";
    /*如果输入框的内容为空，原先正常隐藏的部分隐藏的部分隐藏...........................................*/
    if (inputBox.value==""){
        registerDisply.style.display="none";
    }
};
/*inputBox.onblur=function (){
    if (regs2.test(inputBox.value)==true||regs1.test(inputBox.value)==true){
        inputBoxWarn.innerHTML="";
        recommend1.style.display="none";
        /!* return true;*!/
    }
};*/
for (var j=0;j<Emai.length;j++){
    Emai[j].onclick=function(){       /*........当客户点击下方给出的邮箱种类后进行验证邮箱格式是否正确..........*/
        inputBox.value=this.innerHTML;
        recommend1.style.display="none";
        var regs2=/^([1-9]|[A-z])+(_|[0-9]|[A-z])+@([1-9]|[A-z]|\.){2,8}\.com$/;
        //var regs1=/^1((3|5)[0-3|4-9]|4[5|7]|7[6-8]|8[0-9]\d{8}$)/;
        if (regs2.test(inputBox.value)==true){
            inputBoxWarn.innerHTML="";
           /* return true;*/
        }
        else
        {    /*....验证不通过时邮箱验证警告出现，suggest建议框消失...............................*/
            inputBoxWarn.style.display="block";
            suggest.style.display="none";
            registerNow.style.marginTop="30px";/*....注册按钮增加上边框为了排版.........*/
            inputBoxWarn.innerHTML="请输入正确的邮箱格式或手机格式";
        }
    }
}
/*...............失去焦点验证..........................................................*/
function judge5(){
    var regs2=/^([1-9]|[A-z])+(_|[0-9]|[A-z])+@([1-9]|[A-z]|\.){2,8}\.com$/;
    var regs1=/^1((3|5)[0-3|4-9]|4[5|7]|7[6-8]|8[0-9]\d{8}$)/;
    if (regs2.test(inputBox.value)==true||regs1.test(inputBox.value)==true){
        inputBoxWarn.innerHTML="";
        suggest.style.display="none";
        return true;
    }
    else
    {    inputBoxWarn.style.display="block";
        suggest.style.display="none";
        registerNow.style.marginTop="30px";/*.........*/
        inputBoxWarn.innerHTML="请输入正确的邮箱格式或手机格式";
    }
}
/*.........用户名不能为空...................................................................*/
var useName=document.querySelector("#useName");
var useNameWarn=document.querySelector("#useNameWarn");
var passwardNameWarn=document.querySelector("#passwardNameWarn");
var passwardName=document.querySelector("#passwardName");
function useNme(){
    useNameWarn.style.display="block";
    useNameWarn.innerHTML="请使用4-15个字符长度中文/数字/字母，请勿使用特殊字符";
}
function useNmeW(){
    if (useName.value!=""){
        useNameWarn.style.display="none";
        return true;
    }else {
        useNameWarn.style.color="red";
        useNameWarn.innerHTML="用户名不能为空";
    }
}
/*.............密码不能为空.................................................................*/
function pasWadName(){
 passwardNameWarn.style.display="block";
 passwardNameWarn.innerHTML="强烈建议密码长度为8-20个字符，包括数字、大小写字母和符合且没有规律";
 }
function pasWadNameW(){
    if (passwardName.value!=""){
        passwardNameWarn.style.display="none";
        return true;
    }else
    {
        passwardNameWarn.style.color="red";
        passwardNameWarn.innerHTML="密码不能为空";
    }
}
/*表单验证部分........................................................*/
var myForm=document.getElementById("myForm");
var allWarning=document.getElementById("allWarning");
registerNow.onclick=function(){
    if(pasWadNameW()==true&&useNmeW()==true&&identifCodInput()==true&&judge5()==true){
        myForm.action="http://localhost:63342/51CTOweb/hompage2.html";
        myForm.method="post";
        myForm.submit();
    }
    else
    {allWarning.style.display="block";
        allWarning.innerHTML="信息不全";
    }
};


