
function lab_int(){
    document.getElementById("text_icon_inner").style.opacity='0.9';
    document.getElementById("text_icon_introduction").style.display='block';
    document.getElementById("text_icon_principle").style.display='none';
}
//实验原理
function lab_pri(){
    document.getElementById("text_icon_introduction").style.display='none';
    document.getElementById("text_icon_inner").style.opacity='0.9';
    document.getElementById("text_icon_principle").style.display='block';
}
//实验内容
function lab_con(){
    alert("待开发");
}
//实验指导
function lab_gui(){
    alert("待开发");
}
//开始实验
function lab_sta(){
    window.location.href='../static/startlab.html';
}