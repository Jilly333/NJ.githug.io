
//登录表单提交页面跳转
function log() {
    var name = document.login_form.login_name.value;
    var password = document.login_form.login_password.value;
    if (name==null||""==name) {
        alert("用户名为空，请重新输入");
    } else if(password=null||""==password){
        alert("密码为空，请重新输入");
    }else{
        //#表示servelet
        document.login_form.action = "static/main.html";
        document.login_form.submit();
    }
}

