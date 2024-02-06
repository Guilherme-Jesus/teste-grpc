/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as area_pb from './area_pb';


export class AreaServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetAllAreas = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Areas,
    (request: area_pb.RequestAll) => {
      return request.serializeBinary();
    },
    area_pb.Areas.deserializeBinary
  );

  getAllAreas(
    request: area_pb.RequestAll,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Areas>;

  getAllAreas(
    request: area_pb.RequestAll,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Areas) => void): grpcWeb.ClientReadableStream<area_pb.Areas>;

  getAllAreas(
    request: area_pb.RequestAll,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Areas) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetAllAreas',
        request,
        metadata || {},
        this.methodInfoGetAllAreas,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetAllAreas',
    request,
    metadata || {},
    this.methodInfoGetAllAreas);
  }

  methodInfoGetAreaByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Area,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.Area.deserializeBinary
  );

  getAreaByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Area>;

  getAreaByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Area) => void): grpcWeb.ClientReadableStream<area_pb.Area>;

  getAreaByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Area) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetAreaByID',
        request,
        metadata || {},
        this.methodInfoGetAreaByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetAreaByID',
    request,
    metadata || {},
    this.methodInfoGetAreaByID);
  }

  methodInfoAuthorizeUser = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Authorization,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.Authorization.deserializeBinary
  );

  authorizeUser(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Authorization>;

  authorizeUser(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Authorization) => void): grpcWeb.ClientReadableStream<area_pb.Authorization>;

  authorizeUser(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Authorization) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/AuthorizeUser',
        request,
        metadata || {},
        this.methodInfoAuthorizeUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/AuthorizeUser',
    request,
    metadata || {},
    this.methodInfoAuthorizeUser);
  }

  methodInfoGetLeafParentByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.LeafParents,
    (request: area_pb.RequestAll) => {
      return request.serializeBinary();
    },
    area_pb.LeafParents.deserializeBinary
  );

  getLeafParentByID(
    request: area_pb.RequestAll,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.LeafParents>;

  getLeafParentByID(
    request: area_pb.RequestAll,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.LeafParents) => void): grpcWeb.ClientReadableStream<area_pb.LeafParents>;

  getLeafParentByID(
    request: area_pb.RequestAll,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.LeafParents) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetLeafParentByID',
        request,
        metadata || {},
        this.methodInfoGetLeafParentByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetLeafParentByID',
    request,
    metadata || {},
    this.methodInfoGetLeafParentByID);
  }

  methodInfoGetFarmByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Areas,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.Areas.deserializeBinary
  );

  getFarmByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Areas>;

  getFarmByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Areas) => void): grpcWeb.ClientReadableStream<area_pb.Areas>;

  getFarmByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Areas) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetFarmByID',
        request,
        metadata || {},
        this.methodInfoGetFarmByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetFarmByID',
    request,
    metadata || {},
    this.methodInfoGetFarmByID);
  }

  methodInfoGetAreasNames = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.AreaNameResponse,
    (request: area_pb.RequestByMultipleID) => {
      return request.serializeBinary();
    },
    area_pb.AreaNameResponse.deserializeBinary
  );

  getAreasNames(
    request: area_pb.RequestByMultipleID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.AreaNameResponse>;

  getAreasNames(
    request: area_pb.RequestByMultipleID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.AreaNameResponse) => void): grpcWeb.ClientReadableStream<area_pb.AreaNameResponse>;

  getAreasNames(
    request: area_pb.RequestByMultipleID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.AreaNameResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetAreasNames',
        request,
        metadata || {},
        this.methodInfoGetAreasNames,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetAreasNames',
    request,
    metadata || {},
    this.methodInfoGetAreasNames);
  }

  methodInfoGetAllMappingAreas = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleMappingAreas,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleMappingAreas.deserializeBinary
  );

  getAllMappingAreas(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleMappingAreas>;

  getAllMappingAreas(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleMappingAreas) => void): grpcWeb.ClientReadableStream<area_pb.MultipleMappingAreas>;

  getAllMappingAreas(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleMappingAreas) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetAllMappingAreas',
        request,
        metadata || {},
        this.methodInfoGetAllMappingAreas,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetAllMappingAreas',
    request,
    metadata || {},
    this.methodInfoGetAllMappingAreas);
  }

  methodInfoGetFarmsByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleFarms,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleFarms.deserializeBinary
  );

  getFarmsByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleFarms>;

  getFarmsByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleFarms) => void): grpcWeb.ClientReadableStream<area_pb.MultipleFarms>;

  getFarmsByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleFarms) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetFarmsByID',
        request,
        metadata || {},
        this.methodInfoGetFarmsByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetFarmsByID',
    request,
    metadata || {},
    this.methodInfoGetFarmsByID);
  }

  methodInfoGetFarmsWithChildrenByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleCompleteFarm,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleCompleteFarm.deserializeBinary
  );

  getFarmsWithChildrenByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleCompleteFarm>;

  getFarmsWithChildrenByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleCompleteFarm) => void): grpcWeb.ClientReadableStream<area_pb.MultipleCompleteFarm>;

  getFarmsWithChildrenByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleCompleteFarm) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetFarmsWithChildrenByID',
        request,
        metadata || {},
        this.methodInfoGetFarmsWithChildrenByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetFarmsWithChildrenByID',
    request,
    metadata || {},
    this.methodInfoGetFarmsWithChildrenByID);
  }

  methodInfoGetFarmsDataByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleBranchs,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleBranchs.deserializeBinary
  );

  getFarmsDataByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleBranchs>;

  getFarmsDataByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleBranchs) => void): grpcWeb.ClientReadableStream<area_pb.MultipleBranchs>;

  getFarmsDataByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleBranchs) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetFarmsDataByID',
        request,
        metadata || {},
        this.methodInfoGetFarmsDataByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetFarmsDataByID',
    request,
    metadata || {},
    this.methodInfoGetFarmsDataByID);
  }

  methodInfoGetBranchsDataByID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleAreaMappingArea,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleAreaMappingArea.deserializeBinary
  );

  getBranchsDataByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleAreaMappingArea>;

  getBranchsDataByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleAreaMappingArea) => void): grpcWeb.ClientReadableStream<area_pb.MultipleAreaMappingArea>;

  getBranchsDataByID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleAreaMappingArea) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetBranchsDataByID',
        request,
        metadata || {},
        this.methodInfoGetBranchsDataByID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetBranchsDataByID',
    request,
    metadata || {},
    this.methodInfoGetBranchsDataByID);
  }

  methodInfoGetFarmsByClientID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleFarms,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleFarms.deserializeBinary
  );

  getFarmsByClientID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleFarms>;

  getFarmsByClientID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleFarms) => void): grpcWeb.ClientReadableStream<area_pb.MultipleFarms>;

  getFarmsByClientID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleFarms) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetFarmsByClientID',
        request,
        metadata || {},
        this.methodInfoGetFarmsByClientID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetFarmsByClientID',
    request,
    metadata || {},
    this.methodInfoGetFarmsByClientID);
  }

  methodInfoGetCompleteFarmsClientID = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.MultipleCompleteFarm,
    (request: area_pb.RequestByID) => {
      return request.serializeBinary();
    },
    area_pb.MultipleCompleteFarm.deserializeBinary
  );

  getCompleteFarmsClientID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.MultipleCompleteFarm>;

  getCompleteFarmsClientID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.MultipleCompleteFarm) => void): grpcWeb.ClientReadableStream<area_pb.MultipleCompleteFarm>;

  getCompleteFarmsClientID(
    request: area_pb.RequestByID,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.MultipleCompleteFarm) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/GetCompleteFarmsClientID',
        request,
        metadata || {},
        this.methodInfoGetCompleteFarmsClientID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/GetCompleteFarmsClientID',
    request,
    metadata || {},
    this.methodInfoGetCompleteFarmsClientID);
  }

  methodInfoCreateMappingAreas = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.ResponseCreatedMappingAreas,
    (request: area_pb.RequestCreateMappingAreas) => {
      return request.serializeBinary();
    },
    area_pb.ResponseCreatedMappingAreas.deserializeBinary
  );

  createMappingAreas(
    request: area_pb.RequestCreateMappingAreas,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.ResponseCreatedMappingAreas>;

  createMappingAreas(
    request: area_pb.RequestCreateMappingAreas,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedMappingAreas) => void): grpcWeb.ClientReadableStream<area_pb.ResponseCreatedMappingAreas>;

  createMappingAreas(
    request: area_pb.RequestCreateMappingAreas,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedMappingAreas) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/CreateMappingAreas',
        request,
        metadata || {},
        this.methodInfoCreateMappingAreas,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/CreateMappingAreas',
    request,
    metadata || {},
    this.methodInfoCreateMappingAreas);
  }

  methodInfoUpdateMappingAreas = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.ResponseCreatedMappingAreas,
    (request: area_pb.RequestUpdateMappingAreas) => {
      return request.serializeBinary();
    },
    area_pb.ResponseCreatedMappingAreas.deserializeBinary
  );

  updateMappingAreas(
    request: area_pb.RequestUpdateMappingAreas,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.ResponseCreatedMappingAreas>;

  updateMappingAreas(
    request: area_pb.RequestUpdateMappingAreas,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedMappingAreas) => void): grpcWeb.ClientReadableStream<area_pb.ResponseCreatedMappingAreas>;

  updateMappingAreas(
    request: area_pb.RequestUpdateMappingAreas,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedMappingAreas) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/UpdateMappingAreas',
        request,
        metadata || {},
        this.methodInfoUpdateMappingAreas,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/UpdateMappingAreas',
    request,
    metadata || {},
    this.methodInfoUpdateMappingAreas);
  }

  methodInfoDeleteMappingAreas = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Empty,
    (request: area_pb.RequestDeleteMappingAreas) => {
      return request.serializeBinary();
    },
    area_pb.Empty.deserializeBinary
  );

  deleteMappingAreas(
    request: area_pb.RequestDeleteMappingAreas,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Empty>;

  deleteMappingAreas(
    request: area_pb.RequestDeleteMappingAreas,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Empty) => void): grpcWeb.ClientReadableStream<area_pb.Empty>;

  deleteMappingAreas(
    request: area_pb.RequestDeleteMappingAreas,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/DeleteMappingAreas',
        request,
        metadata || {},
        this.methodInfoDeleteMappingAreas,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/DeleteMappingAreas',
    request,
    metadata || {},
    this.methodInfoDeleteMappingAreas);
  }

  methodInfoCreateFarm = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.ResponseCreatedFarm,
    (request: area_pb.RequestCreateFarm) => {
      return request.serializeBinary();
    },
    area_pb.ResponseCreatedFarm.deserializeBinary
  );

  createFarm(
    request: area_pb.RequestCreateFarm,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.ResponseCreatedFarm>;

  createFarm(
    request: area_pb.RequestCreateFarm,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedFarm) => void): grpcWeb.ClientReadableStream<area_pb.ResponseCreatedFarm>;

  createFarm(
    request: area_pb.RequestCreateFarm,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedFarm) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/CreateFarm',
        request,
        metadata || {},
        this.methodInfoCreateFarm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/CreateFarm',
    request,
    metadata || {},
    this.methodInfoCreateFarm);
  }

  methodInfoUpdateFarm = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.ResponseUpdateFarm,
    (request: area_pb.RequestUpdateFarm) => {
      return request.serializeBinary();
    },
    area_pb.ResponseUpdateFarm.deserializeBinary
  );

  updateFarm(
    request: area_pb.RequestUpdateFarm,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.ResponseUpdateFarm>;

  updateFarm(
    request: area_pb.RequestUpdateFarm,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.ResponseUpdateFarm) => void): grpcWeb.ClientReadableStream<area_pb.ResponseUpdateFarm>;

  updateFarm(
    request: area_pb.RequestUpdateFarm,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.ResponseUpdateFarm) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/UpdateFarm',
        request,
        metadata || {},
        this.methodInfoUpdateFarm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/UpdateFarm',
    request,
    metadata || {},
    this.methodInfoUpdateFarm);
  }

  methodInfoDeleteFarm = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Empty,
    (request: area_pb.RequestDeleteFarm) => {
      return request.serializeBinary();
    },
    area_pb.Empty.deserializeBinary
  );

  deleteFarm(
    request: area_pb.RequestDeleteFarm,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Empty>;

  deleteFarm(
    request: area_pb.RequestDeleteFarm,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Empty) => void): grpcWeb.ClientReadableStream<area_pb.Empty>;

  deleteFarm(
    request: area_pb.RequestDeleteFarm,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/DeleteFarm',
        request,
        metadata || {},
        this.methodInfoDeleteFarm,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/DeleteFarm',
    request,
    metadata || {},
    this.methodInfoDeleteFarm);
  }

  methodInfoCreateBranch = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.ResponseCreatedBranch,
    (request: area_pb.RequestCreateBranch) => {
      return request.serializeBinary();
    },
    area_pb.ResponseCreatedBranch.deserializeBinary
  );

  createBranch(
    request: area_pb.RequestCreateBranch,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.ResponseCreatedBranch>;

  createBranch(
    request: area_pb.RequestCreateBranch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedBranch) => void): grpcWeb.ClientReadableStream<area_pb.ResponseCreatedBranch>;

  createBranch(
    request: area_pb.RequestCreateBranch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.ResponseCreatedBranch) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/CreateBranch',
        request,
        metadata || {},
        this.methodInfoCreateBranch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/CreateBranch',
    request,
    metadata || {},
    this.methodInfoCreateBranch);
  }

  methodInfoUpdateBranch = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.CreatedBranchsReturned,
    (request: area_pb.RequestUpdateBranch) => {
      return request.serializeBinary();
    },
    area_pb.CreatedBranchsReturned.deserializeBinary
  );

  updateBranch(
    request: area_pb.RequestUpdateBranch,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.CreatedBranchsReturned>;

  updateBranch(
    request: area_pb.RequestUpdateBranch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.CreatedBranchsReturned) => void): grpcWeb.ClientReadableStream<area_pb.CreatedBranchsReturned>;

  updateBranch(
    request: area_pb.RequestUpdateBranch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.CreatedBranchsReturned) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/UpdateBranch',
        request,
        metadata || {},
        this.methodInfoUpdateBranch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/UpdateBranch',
    request,
    metadata || {},
    this.methodInfoUpdateBranch);
  }

  methodInfoDeleteBranch = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Empty,
    (request: area_pb.RequestDeleteBranch) => {
      return request.serializeBinary();
    },
    area_pb.Empty.deserializeBinary
  );

  deleteBranch(
    request: area_pb.RequestDeleteBranch,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Empty>;

  deleteBranch(
    request: area_pb.RequestDeleteBranch,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Empty) => void): grpcWeb.ClientReadableStream<area_pb.Empty>;

  deleteBranch(
    request: area_pb.RequestDeleteBranch,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/DeleteBranch',
        request,
        metadata || {},
        this.methodInfoDeleteBranch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/DeleteBranch',
    request,
    metadata || {},
    this.methodInfoDeleteBranch);
  }

  methodInfoDeleteArea = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.Empty,
    (request: area_pb.RequestDeleteArea) => {
      return request.serializeBinary();
    },
    area_pb.Empty.deserializeBinary
  );

  deleteArea(
    request: area_pb.RequestDeleteArea,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.Empty>;

  deleteArea(
    request: area_pb.RequestDeleteArea,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.Empty) => void): grpcWeb.ClientReadableStream<area_pb.Empty>;

  deleteArea(
    request: area_pb.RequestDeleteArea,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/DeleteArea',
        request,
        metadata || {},
        this.methodInfoDeleteArea,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/DeleteArea',
    request,
    metadata || {},
    this.methodInfoDeleteArea);
  }

  methodInfoCreateArea = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.CreateAreaResponse,
    (request: area_pb.RequestCreateArea) => {
      return request.serializeBinary();
    },
    area_pb.CreateAreaResponse.deserializeBinary
  );

  createArea(
    request: area_pb.RequestCreateArea,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.CreateAreaResponse>;

  createArea(
    request: area_pb.RequestCreateArea,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.CreateAreaResponse) => void): grpcWeb.ClientReadableStream<area_pb.CreateAreaResponse>;

  createArea(
    request: area_pb.RequestCreateArea,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.CreateAreaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/CreateArea',
        request,
        metadata || {},
        this.methodInfoCreateArea,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/CreateArea',
    request,
    metadata || {},
    this.methodInfoCreateArea);
  }

  methodInfoUpdateArea = new grpcWeb.AbstractClientBase.MethodInfo(
    area_pb.ResponseUpdatedArea,
    (request: area_pb.RequestUpdateArea) => {
      return request.serializeBinary();
    },
    area_pb.ResponseUpdatedArea.deserializeBinary
  );

  updateArea(
    request: area_pb.RequestUpdateArea,
    metadata: grpcWeb.Metadata | null): Promise<area_pb.ResponseUpdatedArea>;

  updateArea(
    request: area_pb.RequestUpdateArea,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: area_pb.ResponseUpdatedArea) => void): grpcWeb.ClientReadableStream<area_pb.ResponseUpdatedArea>;

  updateArea(
    request: area_pb.RequestUpdateArea,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: area_pb.ResponseUpdatedArea) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.AreaService/UpdateArea',
        request,
        metadata || {},
        this.methodInfoUpdateArea,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.AreaService/UpdateArea',
    request,
    metadata || {},
    this.methodInfoUpdateArea);
  }

}

