# Examples
# make srcFile=en.json srcKey=eventList.list.content.type toFile=zh_TW.json modify-lang
# make srcFile=en.json srcKey=eventList.list.content.type toFile=all modify-lang
modify-lang:
	srcFile=$(srcFile) srcKey=$(srcKey) toFile=$(toFile) && node ./script/modify-lang-field.js

# make srcFile=en.json srcKey=eventList.list.content.type toFile=all modify-lang +7
# make srcFile=en.json srcKey=wallet-connect all modify-lang +1
