#! /bin/sh
# Sponsorship deploy script
# It is expected that KEY and SECRET will be set in the environment

npm run-script build

#empty bucket, then upload

aws s3 rm s3://hackru-sponsorship --recursive
aws s3 cp --recursive build s3://hackru-sponsorship --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
aws cloudfront create-invalidation --distribution-id "E1KP0GPI31U70U"  --paths "/*"
