function validation_password()
{
    var password = document.enroll_form.enroll_password.value;
    var password2 = document.enroll_form.enroll_password2.value;
    if(password!=password2){
        alert("两次密码输入不同！")
    }
}
// import axios from "axios";
function en()
{
    var name = document.enroll_form.enroll_name.value;
    var password = document.enroll_form.enroll_password.value;
    var tele=document.enroll_form.enroll_tele.value;
    var mail=document.enroll_form.enroll_mail.value;
    if (name==null||""==name) {
        alert("用户名为空，请重新输入");}
    else if(password==null||""==password){
        alert("密码为空，请重新输入");}
    else if(tele==null||""==tele){
        alert("电话号码为空，请重新输入");}
    else if(mail==null||""==mail){
        alert("邮箱为空，请重新输入");}
    else{
        var newData = {
            "name": name,
            "password":password,
            "telephone": tele,
            "e-mail": mail,
        };
        $.ajax({
            type: "post",
            url: "http://localhost:3000/users",
            data: newData,
            success: function(data) {
                console.log(data)
                alert("用户注册成功！点击返回登录。")
                window.location.href="../index.html";
            },
            error: function(data) {
                console.log(data)
                alert("已存在，不可重复添加。")
            }
        })
    }
}