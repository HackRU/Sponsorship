#! /bin/sh
# Sponsorship deploy script

npm run-script build

KEY="AWS_ACCESS_KEY_ID"
SECRET="AWS_ACCESS_KEY_ID"

#empty bucket, then upload
AWS_ACCESS_KEY_ID="$KEY" AWS_SECRET_ACCESS_KEY="$SECRET" aws s3 rm s3://hackru-sponsorship --recursive
AWS_ACCESS_KEY_ID="$KEY" AWS_SECRET_ACCESS_KEY="$SECRET" aws s3 cp --recursive build s3://hackru-sponsorship --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers

# cloudfront invalidation
AWS_ACCESS_KEY_ID="$KEY" AWS_SECRET_ACCESS_KEY="$SECRET" aws cloudfront create-invalidation --distribution-id "E1KP0GPI31U70U"  --paths "/*"
