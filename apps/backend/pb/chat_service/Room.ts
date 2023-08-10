// Original file: ../../proto/chat_service.proto

import type { Long } from '@grpc/proto-loader';

export interface Room {
  'id'?: (string);
  'created_at'?: (number | string | Long);
}

export interface Room__Output {
  'id': (string);
  'created_at': (string);
}
