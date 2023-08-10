import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from '../pb/chat_service';
import { ChatServiceHandlers } from '../pb/chat_service/ChatService';

const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};

const PROTO_FILE = "../../proto/chat_service.proto";

const packageDefinition = protoLoader.loadSync(
    PROTO_FILE,
    options
);

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const server = new grpc.Server();

const chatPackage = proto.chat_service;

server.addService(chatPackage.ChatService.service, {
    join: (call, callback) => {
        console.log("join", call.request);
        callback(null, {});
    },
    send: (call, callback) => {
        console.log("send", call.request);
        callback(null, {});
    },
    // receive(call, callback) {
    //     console.log("receive", call.request);
    //     callback(null, {});
    // },
    getUsers(call, callback) {
        console.log("getUsers", call.request);
        callback(null, {});
    },
} as ChatServiceHandlers);

server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`gRPC listening on ${port}`);
        server.start();
    }
);