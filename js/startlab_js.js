

function unprocess()
{
    alert("待开发！");
}
function lab_report()
{
    document.getElementById("report").style.display="block";
    document.getElementById("home").style.opacity='0.3';
    document.getElementById("report_write").style.display="block";
    document.getElementById("report_history").style.display="none";
}
function report_exit()
{
    document.getElementById("report").style.display="none";
    document.getElementById("home").style.opacity="1.0";
}
function report_write()
{
    document.getElementById("report_write").style.display="block";
    document.getElementById("report_history").style.display="none";
}
function report_history()
{
    document.getElementById("report_write").style.display="none";
    document.getElementById("report_history").style.display="block";
    var report_data;
    $.ajax({
        type:"GET",
        url:"http://localhost:3000/report",
        dataType:"json",
        success:function (data) {
            report_data=data;
            console.log(report_data, '请求成功')
            var tableHtml = "";
            for(var i=0;i<report_data.length;i++){
                tableHtml += "<tr>";
                tableHtml +=    "<td>"+ report_data[i]['id'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['name'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['number'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['xueyuan'] +"</td>";
                tableHtml +=    "<td>"+ report_data[i]['zhuanye'] +"</td>";
                tableHtml +=    "<td>"+ "<button>查看</button>" +"</td>";
                tableHtml +=    "<td>"+ "<button>修改</button>" +"</td>";
                tableHtml +=    "<td>"+ "<button>删除</button>" +"</td>";
                //使用this将当前button对象 传入到函数del中
                tableHtml += "</tr>";
                console.log(tableHtml);
            }
            //将拼接后的表格数据tbody
            $("#report_history_data").html(tableHtml);
        },
        error:function (err) {
            console.log(data, '请求失败')
        }
    });
}