# -*- coding: utf-8 -*- 
# 第一行必须有，否则报中文字符非ascii码错误
import urllib
import hashlib

myak='0ADSpAdSEy6Q9rXT5Kmz1QOd5hqnv0p5'
mysk='yvRpLm8MWgvhk4ELEwdGoHoH1BrYX8OG'

queryLocation='八里庄小学'

# 以get请求为例http://api.map.baidu.com/geocoder/v2/?address=百度大厦&output=json&ak=yourak
queryStr = '/geocoder/v2/?address='+queryLocation+'&output=json&ak='+myak

# 对queryStr进行转码，safe内的保留字符不转换
encodedStr = urllib.quote(queryStr, safe="/:=&?#+!$,;'@()*[]")

# 在最后直接追加上yoursk
rawStr = encodedStr + mysk

# md5计算出的sn值7de5a22212ffaa9e326444c75a58f9a0
# 最终合法请求url是http://api.map.baidu.com/geocoder/v2/?address=百度大厦&output=json&ak=yourak&sn=7de5a22212ffaa9e326444c75a58f9a0
sn=hashlib.md5(urllib.quote_plus(rawStr)).hexdigest()
print sn
url='http://api.map.baidu.com/geocoder/v2/?address='+queryLocation+'&output=json&ak=' + myak + '&sn=' + sn
print url



