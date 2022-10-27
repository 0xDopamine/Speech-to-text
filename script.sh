URL=$(node uploadFile.js $1)
ID=$(node upload.js ${URL})
CMD="node download.js $ID"
RES=$($CMD)
while [ "$RES" == "processing" ];
do
    RES=$($CMD)
done
echo $RES