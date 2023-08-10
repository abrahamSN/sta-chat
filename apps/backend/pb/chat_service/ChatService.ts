// Original file: ../../proto/chat_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Chat as _chat_service_Chat, Chat__Output as _chat_service_Chat__Output } from '../chat_service/Chat';
import type { Empty as _chat_service_Empty, Empty__Output as _chat_service_Empty__Output } from '../chat_service/Empty';
import type { JoinResponse as _chat_service_JoinResponse, JoinResponse__Output as _chat_service_JoinResponse__Output } from '../chat_service/JoinResponse';
import type { User as _chat_service_User, User__Output as _chat_service_User__Output } from '../chat_service/User';
import type { UserList as _chat_service_UserList, UserList__Output as _chat_service_UserList__Output } from '../chat_service/UserList';

export interface ChatServiceClient extends grpc.Client {
  getUsers(argument: _chat_service_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _chat_service_Empty, callback: grpc.requestCallback<_chat_service_UserList__Output>): grpc.ClientUnaryCall;
  
  join(argument: _chat_service_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  join(argument: _chat_service_User, callback: grpc.requestCallback<_chat_service_JoinResponse__Output>): grpc.ClientUnaryCall;
  
  receive(argument: _chat_service_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_service_Chat__Output>;
  receive(argument: _chat_service_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_service_Chat__Output>;
  receive(argument: _chat_service_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_service_Chat__Output>;
  receive(argument: _chat_service_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_service_Chat__Output>;
  
  send(argument: _chat_service_Chat, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  send(argument: _chat_service_Chat, callback: grpc.requestCallback<_chat_service_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  getUsers: grpc.handleUnaryCall<_chat_service_Empty__Output, _chat_service_UserList>;
  
  join: grpc.handleUnaryCall<_chat_service_User__Output, _chat_service_JoinResponse>;
  
  receive: grpc.handleServerStreamingCall<_chat_service_Empty__Output, _chat_service_Chat>;
  
  send: grpc.handleUnaryCall<_chat_service_Chat__Output, _chat_service_Empty>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  getUsers: MethodDefinition<_chat_service_Empty, _chat_service_UserList, _chat_service_Empty__Output, _chat_service_UserList__Output>
  join: MethodDefinition<_chat_service_User, _chat_service_JoinResponse, _chat_service_User__Output, _chat_service_JoinResponse__Output>
  receive: MethodDefinition<_chat_service_Empty, _chat_service_Chat, _chat_service_Empty__Output, _chat_service_Chat__Output>
  send: MethodDefinition<_chat_service_Chat, _chat_service_Empty, _chat_service_Chat__Output, _chat_service_Empty__Output>
}
