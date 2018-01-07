/**
 * Created by Administrator on 2017/08/15.
 */
var xuanXiang=document.querySelectorAll("#xuanXiang>ul>li");
var spanJianTou=document.querySelectorAll("#xuanXiang>ul>li>span");
var pic=document.querySelectorAll(".pic");
function  show(m){
        for (var i=0;i<pic.length;i++){
            pic[i].style.display="none";
            spanJianTou[i].style.display="none";
            xuanXiang[i].style.color="";
        }
        pic[m].style.display="block";
        spanJianTou[m].style.display="block";
        xuanXiang[m].style.color="#00b9f1";
}