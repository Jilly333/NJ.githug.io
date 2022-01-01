// //验证用户名
// function validate_username(username)
// {
//     if (username != "")
//     {
//         document.getElementById("test_user").innerHTML = "<font color='green' size='3px'>√用户名正确</font>";
//     } else {
//         document.getElementById("test_user").innerHTML = "<font color='red' size='3px'>用户名错误</font>";
//     }
// }
// //验证密码是否符合
// function validate_password(password) {
//     var passwordReg = /^[a-zA-Z]\w{5,17}$/;
//     if (password != "" && password.search(passwordReg) != -1) {
//         document.getElementById("test_pw").innerHTML = "<font color='green' size='3px'>√密码格式正确</font>";
//     } else {
//         document.getElementById("test_pw").innerHTML = "<font color='red' size='3px'>亲，您输入的密码格式有误哦</font>";
//         // alert("密码由数字和字母组成!");
//     }
// }
function validation_password()
{
    var password = document.enroll_form.enroll_password.value;
    var password2 = document.enroll_form.enroll_password2.value;
    if(password!=password2){
        alert("两次密码输入不同！")
    }
}
function en()
{
    var name = document.enroll_form.enroll_name.value;
    var password = document.enroll_form.enroll_password.value;
    var tele=document.enroll_form.enroll_tele.value;
    var mail=document.enroll_form.enroll_mail.value;
    if (name==null||""==name) {
        alert("用户名为空，请重新输入");}
    else if(password=null||""==password){
        alert("密码为空，请重新输入");}
    else if(tele=null||""==tele){
        alert("电话号码为空，请重新输入");}
    else if(mail=null||""==mail){
        alert("邮箱为空，请重新输入");}
    else{
        alert("用户注册成功！点击返回登录。");
        document.enroll_form.action = "../index.html";
        document.enroll_form.submit();
    }
}