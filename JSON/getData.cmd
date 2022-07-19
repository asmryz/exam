@echo off
FOR /f %%I IN ('dir /b *.json') DO (
 ..\..\bin\mongoimport.exe /jsonArray /d exam /c %%~nI /file %%I
 )

