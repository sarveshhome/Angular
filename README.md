
# angular 

ng g m route --routing


# Angular extensions and tutorial

https://code.visualstudio.com/docs/nodejs/angular-tutorial

https://johnpapa.net/essential-angular-vs-code-extensions/



`nagix server setting`


Create bat file 'start.bat'

`@ECHO OFF
start C:\nginx\nginx.exe
node D:\NodejspublishProject\06ExpressRESTApiMongodbSPA\server.js -b 192.168.0.11:9000 -c
ping 192.168.0.11 -n 1>NUL
echo Starting nginx
echo .
echo ..
echo ...
ping 192.168.0.11 >NUL
EXIT`



Create bat file for end  'stop.bat'

`@ECHO OFF
taskkill /f /IM nginx.exe
taskkill /f /IM php-cgi.exe
Exit`
