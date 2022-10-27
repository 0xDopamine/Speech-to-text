URL=$(node uploadFile.js $1)
ID=$(node upload.js ${URL})
sleep 7
node download.js $ID