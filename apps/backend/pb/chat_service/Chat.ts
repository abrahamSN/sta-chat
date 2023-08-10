// Original file: ../../proto/chat_service.proto

import type { Long } from '@grpc/proto-loader';

export interface Chat {
  'id'?: (string);
  'user_id'?: (string);
  'room_id'?: (string);
  'message'?: (string);
  'created_at'?: (number | string | Long);
}

export interface Chat__Output {
  'id': (string);
  'user_id': (string);
  'room_id': (string);
  'message': (string);
  'created_at': (string);
}
