#! /bin/sh
# Sponsorship deploy script
# It is expected that KEY and SECRET will be set in the environment

npm run-script build
AWS_ACCESS_KEY_ID="$KEY" AWS_SECRET_ACCESS_KEY="$SECRET"
#empty bucket, then upload
echo $KEY
echo $SECRET

AWS_ACCESS_KEY_ID="$KEY" AWS_SECRET_ACCESS_KEY="$SECRET" aws s3 rm s3://hackru-sponsorship --recursive
AWS_ACCESS_KEY_ID="$KEY" AWS_SECRET_ACCESS_KEY="$SECRET" aws s3 cp --recursive build s3://hackru-sponsorship --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
# aws cloudfront create-invalidation --distribution-id "E1YIAV5VULIMY7"  --paths "/*"
