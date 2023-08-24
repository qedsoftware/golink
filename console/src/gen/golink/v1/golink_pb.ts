// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file golink/v1/golink.proto (package golink.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message golink.v1.Golink
 */
export class Golink extends Message<Golink> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  /**
   * @generated from field: repeated string owners = 3;
   */
  owners: string[] = [];

  /**
   * @generated from field: int64 redirect_count_28days = 4;
   */
  redirectCount28days = protoInt64.zero;

  /**
   * @generated from field: int64 redirect_count_7days = 5;
   */
  redirectCount7days = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: Timestamp;

  constructor(data?: PartialMessage<Golink>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.Golink";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "owners", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "redirect_count_28days", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "redirect_count_7days", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
    { no: 7, name: "updated_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Golink {
    return new Golink().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Golink {
    return new Golink().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Golink {
    return new Golink().fromJsonString(jsonString, options);
  }

  static equals(a: Golink | PlainMessage<Golink> | undefined, b: Golink | PlainMessage<Golink> | undefined): boolean {
    return proto3.util.equals(Golink, a, b);
  }
}

/**
 * @generated from message golink.v1.CreateGolinkRequest
 */
export class CreateGolinkRequest extends Message<CreateGolinkRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  constructor(data?: PartialMessage<CreateGolinkRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.CreateGolinkRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGolinkRequest {
    return new CreateGolinkRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGolinkRequest {
    return new CreateGolinkRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGolinkRequest {
    return new CreateGolinkRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateGolinkRequest | PlainMessage<CreateGolinkRequest> | undefined, b: CreateGolinkRequest | PlainMessage<CreateGolinkRequest> | undefined): boolean {
    return proto3.util.equals(CreateGolinkRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.CreateGolinkResponse
 */
export class CreateGolinkResponse extends Message<CreateGolinkResponse> {
  /**
   * @generated from field: golink.v1.Golink golink = 1;
   */
  golink?: Golink;

  constructor(data?: PartialMessage<CreateGolinkResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.CreateGolinkResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golink", kind: "message", T: Golink },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGolinkResponse {
    return new CreateGolinkResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGolinkResponse {
    return new CreateGolinkResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGolinkResponse {
    return new CreateGolinkResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateGolinkResponse | PlainMessage<CreateGolinkResponse> | undefined, b: CreateGolinkResponse | PlainMessage<CreateGolinkResponse> | undefined): boolean {
    return proto3.util.equals(CreateGolinkResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.GetGolinkRequest
 */
export class GetGolinkRequest extends Message<GetGolinkRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<GetGolinkRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.GetGolinkRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGolinkRequest {
    return new GetGolinkRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGolinkRequest {
    return new GetGolinkRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGolinkRequest {
    return new GetGolinkRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetGolinkRequest | PlainMessage<GetGolinkRequest> | undefined, b: GetGolinkRequest | PlainMessage<GetGolinkRequest> | undefined): boolean {
    return proto3.util.equals(GetGolinkRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.GetGolinkResponse
 */
export class GetGolinkResponse extends Message<GetGolinkResponse> {
  /**
   * @generated from field: golink.v1.Golink golink = 1;
   */
  golink?: Golink;

  constructor(data?: PartialMessage<GetGolinkResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.GetGolinkResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golink", kind: "message", T: Golink },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGolinkResponse {
    return new GetGolinkResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGolinkResponse {
    return new GetGolinkResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGolinkResponse {
    return new GetGolinkResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetGolinkResponse | PlainMessage<GetGolinkResponse> | undefined, b: GetGolinkResponse | PlainMessage<GetGolinkResponse> | undefined): boolean {
    return proto3.util.equals(GetGolinkResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.ListGolinksRequest
 */
export class ListGolinksRequest extends Message<ListGolinksRequest> {
  constructor(data?: PartialMessage<ListGolinksRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.ListGolinksRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGolinksRequest {
    return new ListGolinksRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGolinksRequest {
    return new ListGolinksRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGolinksRequest {
    return new ListGolinksRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListGolinksRequest | PlainMessage<ListGolinksRequest> | undefined, b: ListGolinksRequest | PlainMessage<ListGolinksRequest> | undefined): boolean {
    return proto3.util.equals(ListGolinksRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.ListGolinksResponse
 */
export class ListGolinksResponse extends Message<ListGolinksResponse> {
  /**
   * @generated from field: repeated golink.v1.Golink golinks = 1;
   */
  golinks: Golink[] = [];

  constructor(data?: PartialMessage<ListGolinksResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.ListGolinksResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golinks", kind: "message", T: Golink, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGolinksResponse {
    return new ListGolinksResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGolinksResponse {
    return new ListGolinksResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGolinksResponse {
    return new ListGolinksResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListGolinksResponse | PlainMessage<ListGolinksResponse> | undefined, b: ListGolinksResponse | PlainMessage<ListGolinksResponse> | undefined): boolean {
    return proto3.util.equals(ListGolinksResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.ListGolinksByUrlRequest
 */
export class ListGolinksByUrlRequest extends Message<ListGolinksByUrlRequest> {
  /**
   * @generated from field: string url = 1;
   */
  url = "";

  constructor(data?: PartialMessage<ListGolinksByUrlRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.ListGolinksByUrlRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGolinksByUrlRequest {
    return new ListGolinksByUrlRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGolinksByUrlRequest {
    return new ListGolinksByUrlRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGolinksByUrlRequest {
    return new ListGolinksByUrlRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListGolinksByUrlRequest | PlainMessage<ListGolinksByUrlRequest> | undefined, b: ListGolinksByUrlRequest | PlainMessage<ListGolinksByUrlRequest> | undefined): boolean {
    return proto3.util.equals(ListGolinksByUrlRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.ListGolinksByUrlResponse
 */
export class ListGolinksByUrlResponse extends Message<ListGolinksByUrlResponse> {
  /**
   * @generated from field: repeated golink.v1.Golink golinks = 1;
   */
  golinks: Golink[] = [];

  constructor(data?: PartialMessage<ListGolinksByUrlResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.ListGolinksByUrlResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golinks", kind: "message", T: Golink, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGolinksByUrlResponse {
    return new ListGolinksByUrlResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGolinksByUrlResponse {
    return new ListGolinksByUrlResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGolinksByUrlResponse {
    return new ListGolinksByUrlResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListGolinksByUrlResponse | PlainMessage<ListGolinksByUrlResponse> | undefined, b: ListGolinksByUrlResponse | PlainMessage<ListGolinksByUrlResponse> | undefined): boolean {
    return proto3.util.equals(ListGolinksByUrlResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.ListPopularGolinksRequest
 */
export class ListPopularGolinksRequest extends Message<ListPopularGolinksRequest> {
  /**
   * @generated from field: int32 limit = 1;
   */
  limit = 0;

  /**
   * @generated from field: int32 days = 2;
   */
  days = 0;

  constructor(data?: PartialMessage<ListPopularGolinksRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.ListPopularGolinksRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "days", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPopularGolinksRequest {
    return new ListPopularGolinksRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPopularGolinksRequest {
    return new ListPopularGolinksRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPopularGolinksRequest {
    return new ListPopularGolinksRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListPopularGolinksRequest | PlainMessage<ListPopularGolinksRequest> | undefined, b: ListPopularGolinksRequest | PlainMessage<ListPopularGolinksRequest> | undefined): boolean {
    return proto3.util.equals(ListPopularGolinksRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.ListPopularGolinksResponse
 */
export class ListPopularGolinksResponse extends Message<ListPopularGolinksResponse> {
  /**
   * @generated from field: repeated golink.v1.Golink golinks = 1;
   */
  golinks: Golink[] = [];

  constructor(data?: PartialMessage<ListPopularGolinksResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.ListPopularGolinksResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golinks", kind: "message", T: Golink, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPopularGolinksResponse {
    return new ListPopularGolinksResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPopularGolinksResponse {
    return new ListPopularGolinksResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPopularGolinksResponse {
    return new ListPopularGolinksResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListPopularGolinksResponse | PlainMessage<ListPopularGolinksResponse> | undefined, b: ListPopularGolinksResponse | PlainMessage<ListPopularGolinksResponse> | undefined): boolean {
    return proto3.util.equals(ListPopularGolinksResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.UpdateGolinkRequest
 */
export class UpdateGolinkRequest extends Message<UpdateGolinkRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  constructor(data?: PartialMessage<UpdateGolinkRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.UpdateGolinkRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateGolinkRequest {
    return new UpdateGolinkRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateGolinkRequest {
    return new UpdateGolinkRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateGolinkRequest {
    return new UpdateGolinkRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateGolinkRequest | PlainMessage<UpdateGolinkRequest> | undefined, b: UpdateGolinkRequest | PlainMessage<UpdateGolinkRequest> | undefined): boolean {
    return proto3.util.equals(UpdateGolinkRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.UpdateGolinkResponse
 */
export class UpdateGolinkResponse extends Message<UpdateGolinkResponse> {
  /**
   * @generated from field: golink.v1.Golink golink = 1;
   */
  golink?: Golink;

  constructor(data?: PartialMessage<UpdateGolinkResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.UpdateGolinkResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golink", kind: "message", T: Golink },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateGolinkResponse {
    return new UpdateGolinkResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateGolinkResponse {
    return new UpdateGolinkResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateGolinkResponse {
    return new UpdateGolinkResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateGolinkResponse | PlainMessage<UpdateGolinkResponse> | undefined, b: UpdateGolinkResponse | PlainMessage<UpdateGolinkResponse> | undefined): boolean {
    return proto3.util.equals(UpdateGolinkResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.DeleteGolinkRequest
 */
export class DeleteGolinkRequest extends Message<DeleteGolinkRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteGolinkRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.DeleteGolinkRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGolinkRequest {
    return new DeleteGolinkRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGolinkRequest {
    return new DeleteGolinkRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGolinkRequest {
    return new DeleteGolinkRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteGolinkRequest | PlainMessage<DeleteGolinkRequest> | undefined, b: DeleteGolinkRequest | PlainMessage<DeleteGolinkRequest> | undefined): boolean {
    return proto3.util.equals(DeleteGolinkRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.DeleteGolinkResponse
 */
export class DeleteGolinkResponse extends Message<DeleteGolinkResponse> {
  constructor(data?: PartialMessage<DeleteGolinkResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.DeleteGolinkResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGolinkResponse {
    return new DeleteGolinkResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGolinkResponse {
    return new DeleteGolinkResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGolinkResponse {
    return new DeleteGolinkResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteGolinkResponse | PlainMessage<DeleteGolinkResponse> | undefined, b: DeleteGolinkResponse | PlainMessage<DeleteGolinkResponse> | undefined): boolean {
    return proto3.util.equals(DeleteGolinkResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.AddOwnerRequest
 */
export class AddOwnerRequest extends Message<AddOwnerRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * email
   *
   * @generated from field: string owner = 2;
   */
  owner = "";

  constructor(data?: PartialMessage<AddOwnerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.AddOwnerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddOwnerRequest {
    return new AddOwnerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddOwnerRequest {
    return new AddOwnerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddOwnerRequest {
    return new AddOwnerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddOwnerRequest | PlainMessage<AddOwnerRequest> | undefined, b: AddOwnerRequest | PlainMessage<AddOwnerRequest> | undefined): boolean {
    return proto3.util.equals(AddOwnerRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.AddOwnerResponse
 */
export class AddOwnerResponse extends Message<AddOwnerResponse> {
  /**
   * @generated from field: golink.v1.Golink golink = 1;
   */
  golink?: Golink;

  constructor(data?: PartialMessage<AddOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.AddOwnerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golink", kind: "message", T: Golink },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddOwnerResponse {
    return new AddOwnerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddOwnerResponse {
    return new AddOwnerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddOwnerResponse {
    return new AddOwnerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddOwnerResponse | PlainMessage<AddOwnerResponse> | undefined, b: AddOwnerResponse | PlainMessage<AddOwnerResponse> | undefined): boolean {
    return proto3.util.equals(AddOwnerResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.RemoveOwnerRequest
 */
export class RemoveOwnerRequest extends Message<RemoveOwnerRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * email
   *
   * @generated from field: string owner = 2;
   */
  owner = "";

  constructor(data?: PartialMessage<RemoveOwnerRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.RemoveOwnerRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveOwnerRequest {
    return new RemoveOwnerRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveOwnerRequest {
    return new RemoveOwnerRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveOwnerRequest {
    return new RemoveOwnerRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveOwnerRequest | PlainMessage<RemoveOwnerRequest> | undefined, b: RemoveOwnerRequest | PlainMessage<RemoveOwnerRequest> | undefined): boolean {
    return proto3.util.equals(RemoveOwnerRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.RemoveOwnerResponse
 */
export class RemoveOwnerResponse extends Message<RemoveOwnerResponse> {
  /**
   * @generated from field: golink.v1.Golink golink = 1;
   */
  golink?: Golink;

  constructor(data?: PartialMessage<RemoveOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.RemoveOwnerResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "golink", kind: "message", T: Golink },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveOwnerResponse {
    return new RemoveOwnerResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveOwnerResponse {
    return new RemoveOwnerResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveOwnerResponse {
    return new RemoveOwnerResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveOwnerResponse | PlainMessage<RemoveOwnerResponse> | undefined, b: RemoveOwnerResponse | PlainMessage<RemoveOwnerResponse> | undefined): boolean {
    return proto3.util.equals(RemoveOwnerResponse, a, b);
  }
}

/**
 * @generated from message golink.v1.GetMeRequest
 */
export class GetMeRequest extends Message<GetMeRequest> {
  constructor(data?: PartialMessage<GetMeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.GetMeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeRequest {
    return new GetMeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeRequest {
    return new GetMeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeRequest {
    return new GetMeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMeRequest | PlainMessage<GetMeRequest> | undefined, b: GetMeRequest | PlainMessage<GetMeRequest> | undefined): boolean {
    return proto3.util.equals(GetMeRequest, a, b);
  }
}

/**
 * @generated from message golink.v1.GetMeResponse
 */
export class GetMeResponse extends Message<GetMeResponse> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: bool is_admin = 2;
   */
  isAdmin = false;

  constructor(data?: PartialMessage<GetMeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "golink.v1.GetMeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_admin", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeResponse {
    return new GetMeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeResponse {
    return new GetMeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeResponse {
    return new GetMeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMeResponse | PlainMessage<GetMeResponse> | undefined, b: GetMeResponse | PlainMessage<GetMeResponse> | undefined): boolean {
    return proto3.util.equals(GetMeResponse, a, b);
  }
}

