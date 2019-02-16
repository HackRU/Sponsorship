import boto3
import requests
import config
def getResume(event,context):
    if 'email' not in event:
        return config.add_cors_headers({"statusCode":400,"body":"no email provided"})
    dat = requests.get( "https://{}.s3.amazonaws.com/{}".format('hackru-resumes', event["email"]))
    if (dat.status_code != 200):
        return config.add_cors_headers({"stausCode":400,"body":"resume not found"})
    return config.add_cors_headers({"statusCode":200,"body": "https://{}.s3.amazonaws.com/{}".format('hackru-resumes', event["email"])})

