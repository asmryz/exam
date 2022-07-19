bin\mongoimport --jsonArray -d exam -c questions --file JSON\exam\question.json
bin\mongoimport --jsonArray -d exam -c options --file JSON\exam\options.json
bin\mongoimport --jsonArray -d exam -c students --file JSON\exam\student.json
bin\mongoimport --jsonArray -d exam -c tests --file JSON\exam\test.json
bin\mongoimport --jsonArray -d exam -c attempts --file JSON\exam\attempt.json
bin\mongoimport --jsonArray -d exam -c results --file JSON\exam\result.json
