function queryLocation(address, resultItem){
var myak='CyRMAolgs44vszv7T1WGZ94SrBzIGdtr';

var url = 'http://api.map.baidu.com/geocoder/v2/?address='+address+'&output=json&ak=' +myak;


$.ajax({
         url: url,
               type: "GET",
                   dataType: "jsonp", //指定服务器返回的数据类型
                    success: function (data) {
                    resultItem.location = data;
                    console.log(data);
                        var result = JSON.stringify(data); //json对象转成字符串
                       $("#text").val(result);
                       console.log("result");
                       console.log(result);
                   }
   });	
}

// var resultItem = {};

// queryLocation('北京市海淀区上地十街10号', resultItem);
// console.log(resultItem);
var colorArray=['#C0C0C0',	'#808080',	'#FFFFFF',	'#800000',	'#FF0000',	'#800080',	'#FF00FF',
'#008000',	'#00FF00',	'#808000',	'#FFFF00',	'#000080',	'#0000FF',	'#008080',	'#00FFFF','#99FFFF','#EE7700'
];
for(var i = 0;i<result.length;++i){
	var dis = result[i];
	var color=colorArray[i];
	for(var j =0;j<dis.primary_school.length;++j){
		var ps = dis.primary_school[j];
		queryLocation(ps.name, ps);
	}
	for(var k=0;k<dis.middle_school.length;++k){
		var ms = dis.middle_school[k];
		queryLocation(ms.name, ms);
	}

}

for(var i = 0;i<result.length;++i){
	var dis = result[i];
	var color=colorArray[i];
	for(var j =0;j<dis.primary_school.length;++j){
		var ps = dis.primary_school[j];
		ps.color = color;
	}
	for(var k=0;k<dis.middle_school.length;++k){
		var ms = dis.middle_school[k];
		ms.color = color;
	}
}

var primary_school_all=[];

for(var i = 0;i<result.length;++i){
	var dis = result[i];
	for(var j =0;j<dis.primary_school.length;++j){
		var ps = dis.primary_school[j];
		console.log(ps);
		if(ps.location.status==0){
			primary_school_all.push(ps);
		}
	}

}

var middle_school_all=[];
for(var i = 0;i<result.length;++i){
	var dis = result[i];
	for(var k=0;k<dis.middle_school.length;++k){
		var ms = dis.middle_school[k];
		console.log(ms)
		if(ms.location&&ms.location.status==0){
			middle_school_all.push(ms)
		}
		
	}

}


console.log(JSON.stringify(primary_school_all));
console.log(JSON.stringify(middle_school_all));