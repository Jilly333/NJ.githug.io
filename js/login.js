var xmlHttp = new XMLHttpRequest();
var jsonObj = null;
xmlHttp.onload = function(){
    if(xmlHttp.readyState == 4){ //表示响应完成
        if(xmlHttp.status == 200){ //响应码为200  表示服务器正确响应
            //获取响应内容
            txt = xmlHttp.responseText ;
            //把json字符串解析成json对象
            jsonObj = JSON.parse(txt);
            console.info(jsonObj);
        }else{
            console.info('数据返回失败！状态代码：'+xmlHttp.status+'状态信息：'+xmlHttp.statusText);
        }
    }
}
xmlHttp.open('GET','http://localhost:3000/users',true);
xmlHttp.send();

//登录表单提交页面跳转
function log() {
    var name = document.login_form.login_name.value;
    var password = document.login_form.login_password.value;
    if (name==null||""==name) {
        alert("用户名为空，请重新输入");
    } else if(password==null||""==password){
        alert("密码为空，请重新输入");
    }else{
        // document.login_form.submit();
        for(var i=0;i<jsonObj.length;i++){
            console.info(password);
            if( name==jsonObj[i]['name'] & password==jsonObj[i]['password'])
                window.location.href='static/main.html';
        }
        if(i==jsonObj.length)
            alert("用户不存在或者密码输入错误！");
    }
}
function forget()
{
    alert("待开发！");
}

