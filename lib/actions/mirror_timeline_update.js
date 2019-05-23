/**
 * Auto-generated action file for "Google Mirror" API.
 *
 * Generated at: 2019-05-23T09:13:30.563Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-mirror-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'mirror.timeline.update'
 * Endpoint Path: '/timeline/{id}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "attachments": "attachments",
    "bundleId": "bundleId",
    "canonicalUrl": "canonicalUrl",
    "created": "created",
    "acceptCommands": "acceptCommands",
    "acceptTypes": "acceptTypes",
    "displayName": "displayName",
    "imageUrls": "imageUrls",
    "kind": "kind",
    "phoneNumber": "phoneNumber",
    "priority": "priority",
    "sharingFeatures": "sharingFeatures",
    "source": "source",
    "speakableName": "speakableName",
    "type": "type",
    "creator": "creator",
    "displayTime": "displayTime",
    "etag": "etag",
    "html": "html",
    "inReplyTo": "inReplyTo",
    "isBundleCover": "isBundleCover",
    "isDeleted": "isDeleted",
    "isPinned": "isPinned",
    "accuracy": "accuracy",
    "address": "address",
    "latitude": "latitude",
    "longitude": "longitude",
    "timestamp": "timestamp",
    "location": "location",
    "menuItems": "menuItems",
    "deliveryTime": "deliveryTime",
    "level": "level",
    "notification": "notification",
    "pinScore": "pinScore",
    "recipients": "recipients",
    "selfLink": "selfLink",
    "sourceItemId": "sourceItemId",
    "speakableText": "speakableText",
    "speakableType": "speakableType",
    "text": "text",
    "title": "title",
    "updated": "updated",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'mirror.timeline.update',
        pathName: '/timeline/{id}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}