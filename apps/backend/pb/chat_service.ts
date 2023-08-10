import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _chat_service_ChatServiceClient, ChatServiceDefinition as _chat_service_ChatServiceDefinition } from './chat_service/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat_service: {
    Chat: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _chat_service_ChatServiceClient> & { service: _chat_service_ChatServiceDefinition }
    Empty: MessageTypeDefinition
    JoinResponse: MessageTypeDefinition
    Room: MessageTypeDefinition
    User: MessageTypeDefinition
    UserList: MessageTypeDefinition
  }
}

