# Examples
# make srcFile=en.json srcKey=eventList.list.content.type toFile=zh_TW.json modify-lang
# make srcFile=en.json srcKey=eventList.list.content.type toFile=all modify-lang
modify-lang:
	srcFile=$(srcFile) srcKey=$(srcKey) toFile=$(toFile) && node ./script/modify-lang-field.js

# 02-13-2021
# make srcFile=en.json srcKey=eventList.list.content.type toFile=all modify-lang +7
# make srcFile=en.json srcKey=wallet-connect toFile=all modify-lang +1
# make srcFile=en.json srcKey=graph.graph1 toFile=all modify-lang

# 07-11-2021
# make srcFile=en.json srcKey=graph.intervalOptions toFile=all modify-lang
# make srcFile=en.json srcKey=graph.lengthOptions toFile=all modify-lang
