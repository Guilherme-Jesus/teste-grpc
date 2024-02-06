/* eslint-disable */
import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Area extends jspb.Message {
  getId(): number;
  setId(value: number): Area;

  getMappingareaid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMappingareaid(value?: google_protobuf_wrappers_pb.Int64Value): Area;
  hasMappingareaid(): boolean;
  clearMappingareaid(): Area;

  getBranchareaid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setBranchareaid(value?: google_protobuf_wrappers_pb.Int64Value): Area;
  hasBranchareaid(): boolean;
  clearBranchareaid(): Area;

  getFarmareaid(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFarmareaid(value?: google_protobuf_wrappers_pb.Int64Value): Area;
  hasFarmareaid(): boolean;
  clearFarmareaid(): Area;

  getBounds(): string;
  setBounds(value: string): Area;

  getCentroid(): string;
  setCentroid(value: string): Area;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Area;
  hasCreated(): boolean;
  clearCreated(): Area;

  getLastupdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastupdate(value?: google_protobuf_timestamp_pb.Timestamp): Area;
  hasLastupdate(): boolean;
  clearLastupdate(): Area;

  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): Area;
  hasName(): boolean;
  clearName(): Area;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Area.AsObject;
  static toObject(includeInstance: boolean, msg: Area): Area.AsObject;
  static serializeBinaryToWriter(message: Area, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Area;
  static deserializeBinaryFromReader(message: Area, reader: jspb.BinaryReader): Area;
}

export namespace Area {
  export type AsObject = {
    id: number,
    mappingareaid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    branchareaid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    farmareaid?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bounds: string,
    centroid: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastupdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LeafParent extends jspb.Message {
  getFarmname(): string;
  setFarmname(value: string): LeafParent;

  getFarmid(): number;
  setFarmid(value: number): LeafParent;

  getBranchname(): string;
  setBranchname(value: string): LeafParent;

  getBranchid(): number;
  setBranchid(value: number): LeafParent;

  getIsdefaultbranch(): boolean;
  setIsdefaultbranch(value: boolean): LeafParent;

  getAreas(): Areas | undefined;
  setAreas(value?: Areas): LeafParent;
  hasAreas(): boolean;
  clearAreas(): LeafParent;

  getPagenumbers(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPagenumbers(value?: google_protobuf_wrappers_pb.Int64Value): LeafParent;
  hasPagenumbers(): boolean;
  clearPagenumbers(): LeafParent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeafParent.AsObject;
  static toObject(includeInstance: boolean, msg: LeafParent): LeafParent.AsObject;
  static serializeBinaryToWriter(message: LeafParent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeafParent;
  static deserializeBinaryFromReader(message: LeafParent, reader: jspb.BinaryReader): LeafParent;
}

export namespace LeafParent {
  export type AsObject = {
    farmname: string,
    farmid: number,
    branchname: string,
    branchid: number,
    isdefaultbranch: boolean,
    areas?: Areas.AsObject,
    pagenumbers?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class LeafParents extends jspb.Message {
  getNpaginas(): number;
  setNpaginas(value: number): LeafParents;

  getLeafparentsList(): Array<LeafParent>;
  setLeafparentsList(value: Array<LeafParent>): LeafParents;
  clearLeafparentsList(): LeafParents;
  addLeafparents(value?: LeafParent, index?: number): LeafParent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeafParents.AsObject;
  static toObject(includeInstance: boolean, msg: LeafParents): LeafParents.AsObject;
  static serializeBinaryToWriter(message: LeafParents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeafParents;
  static deserializeBinaryFromReader(message: LeafParents, reader: jspb.BinaryReader): LeafParents;
}

export namespace LeafParents {
  export type AsObject = {
    npaginas: number,
    leafparentsList: Array<LeafParent.AsObject>,
  }
}

export class Areas extends jspb.Message {
  getAreasList(): Array<Area>;
  setAreasList(value: Array<Area>): Areas;
  clearAreasList(): Areas;
  addAreas(value?: Area, index?: number): Area;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Areas.AsObject;
  static toObject(includeInstance: boolean, msg: Areas): Areas.AsObject;
  static serializeBinaryToWriter(message: Areas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Areas;
  static deserializeBinaryFromReader(message: Areas, reader: jspb.BinaryReader): Areas;
}

export namespace Areas {
  export type AsObject = {
    areasList: Array<Area.AsObject>,
  }
}

export class RequestByID extends jspb.Message {
  getId(): number;
  setId(value: number): RequestByID;

  getUser(): User | undefined;
  setUser(value?: User): RequestByID;
  hasUser(): boolean;
  clearUser(): RequestByID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestByID.AsObject;
  static toObject(includeInstance: boolean, msg: RequestByID): RequestByID.AsObject;
  static serializeBinaryToWriter(message: RequestByID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestByID;
  static deserializeBinaryFromReader(message: RequestByID, reader: jspb.BinaryReader): RequestByID;
}

export namespace RequestByID {
  export type AsObject = {
    id: number,
    user?: User.AsObject,
  }
}

export class RequestAll extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RequestAll;
  hasUser(): boolean;
  clearUser(): RequestAll;

  getSorttype(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSorttype(value?: google_protobuf_wrappers_pb.StringValue): RequestAll;
  hasSorttype(): boolean;
  clearSorttype(): RequestAll;

  getPagesize(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPagesize(value?: google_protobuf_wrappers_pb.Int64Value): RequestAll;
  hasPagesize(): boolean;
  clearPagesize(): RequestAll;

  getPage(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPage(value?: google_protobuf_wrappers_pb.Int64Value): RequestAll;
  hasPage(): boolean;
  clearPage(): RequestAll;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestAll.AsObject;
  static toObject(includeInstance: boolean, msg: RequestAll): RequestAll.AsObject;
  static serializeBinaryToWriter(message: RequestAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestAll;
  static deserializeBinaryFromReader(message: RequestAll, reader: jspb.BinaryReader): RequestAll;
}

export namespace RequestAll {
  export type AsObject = {
    user?: User.AsObject,
    sorttype?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pagesize?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    page?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class Authorization extends jspb.Message {
  getIsauthorized(): boolean;
  setIsauthorized(value: boolean): Authorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authorization.AsObject;
  static toObject(includeInstance: boolean, msg: Authorization): Authorization.AsObject;
  static serializeBinaryToWriter(message: Authorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authorization;
  static deserializeBinaryFromReader(message: Authorization, reader: jspb.BinaryReader): Authorization;
}

export namespace Authorization {
  export type AsObject = {
    isauthorized: boolean,
  }
}

export class User extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getClientid(): number;
  setClientid(value: number): User;

  getGroupsList(): Array<string>;
  setGroupsList(value: Array<string>): User;
  clearGroupsList(): User;
  addGroups(value: string, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userid: string,
    email: string,
    clientid: number,
    groupsList: Array<string>,
  }
}

export class RequestByMultipleID extends jspb.Message {
  getAreasidList(): Array<string>;
  setAreasidList(value: Array<string>): RequestByMultipleID;
  clearAreasidList(): RequestByMultipleID;
  addAreasid(value: string, index?: number): RequestByMultipleID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestByMultipleID.AsObject;
  static toObject(includeInstance: boolean, msg: RequestByMultipleID): RequestByMultipleID.AsObject;
  static serializeBinaryToWriter(message: RequestByMultipleID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestByMultipleID;
  static deserializeBinaryFromReader(message: RequestByMultipleID, reader: jspb.BinaryReader): RequestByMultipleID;
}

export namespace RequestByMultipleID {
  export type AsObject = {
    areasidList: Array<string>,
  }
}

export class AreaNameResponse extends jspb.Message {
  getAreasinfoList(): Array<AreaName>;
  setAreasinfoList(value: Array<AreaName>): AreaNameResponse;
  clearAreasinfoList(): AreaNameResponse;
  addAreasinfo(value?: AreaName, index?: number): AreaName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AreaNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AreaNameResponse): AreaNameResponse.AsObject;
  static serializeBinaryToWriter(message: AreaNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AreaNameResponse;
  static deserializeBinaryFromReader(message: AreaNameResponse, reader: jspb.BinaryReader): AreaNameResponse;
}

export namespace AreaNameResponse {
  export type AsObject = {
    areasinfoList: Array<AreaName.AsObject>,
  }
}

export class AreaName extends jspb.Message {
  getAreaid(): string;
  setAreaid(value: string): AreaName;

  getAreaname(): string;
  setAreaname(value: string): AreaName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AreaName.AsObject;
  static toObject(includeInstance: boolean, msg: AreaName): AreaName.AsObject;
  static serializeBinaryToWriter(message: AreaName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AreaName;
  static deserializeBinaryFromReader(message: AreaName, reader: jspb.BinaryReader): AreaName;
}

export namespace AreaName {
  export type AsObject = {
    areaid: string,
    areaname: string,
  }
}

export class MultipleBranchs extends jspb.Message {
  getBranchList(): Array<Branch>;
  setBranchList(value: Array<Branch>): MultipleBranchs;
  clearBranchList(): MultipleBranchs;
  addBranch(value?: Branch, index?: number): Branch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleBranchs.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleBranchs): MultipleBranchs.AsObject;
  static serializeBinaryToWriter(message: MultipleBranchs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleBranchs;
  static deserializeBinaryFromReader(message: MultipleBranchs, reader: jspb.BinaryReader): MultipleBranchs;
}

export namespace MultipleBranchs {
  export type AsObject = {
    branchList: Array<Branch.AsObject>,
  }
}

export class Branch extends jspb.Message {
  getBranchid(): number;
  setBranchid(value: number): Branch;

  getName(): string;
  setName(value: string): Branch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Branch.AsObject;
  static toObject(includeInstance: boolean, msg: Branch): Branch.AsObject;
  static serializeBinaryToWriter(message: Branch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Branch;
  static deserializeBinaryFromReader(message: Branch, reader: jspb.BinaryReader): Branch;
}

export namespace Branch {
  export type AsObject = {
    branchid: number,
    name: string,
  }
}

export class MultipleFarms extends jspb.Message {
  getFarmsList(): Array<Farms>;
  setFarmsList(value: Array<Farms>): MultipleFarms;
  clearFarmsList(): MultipleFarms;
  addFarms(value?: Farms, index?: number): Farms;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleFarms.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleFarms): MultipleFarms.AsObject;
  static serializeBinaryToWriter(message: MultipleFarms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleFarms;
  static deserializeBinaryFromReader(message: MultipleFarms, reader: jspb.BinaryReader): MultipleFarms;
}

export namespace MultipleFarms {
  export type AsObject = {
    farmsList: Array<Farms.AsObject>,
  }
}

export class Farms extends jspb.Message {
  getFarmid(): number;
  setFarmid(value: number): Farms;

  getName(): string;
  setName(value: string): Farms;

  getMappingareaname(): string;
  setMappingareaname(value: string): Farms;

  getMappingareaid(): number;
  setMappingareaid(value: number): Farms;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Farms.AsObject;
  static toObject(includeInstance: boolean, msg: Farms): Farms.AsObject;
  static serializeBinaryToWriter(message: Farms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Farms;
  static deserializeBinaryFromReader(message: Farms, reader: jspb.BinaryReader): Farms;
}

export namespace Farms {
  export type AsObject = {
    farmid: number,
    name: string,
    mappingareaname: string,
    mappingareaid: number,
  }
}

export class MultipleCompleteFarm extends jspb.Message {
  getFarmsList(): Array<CompleteFarm>;
  setFarmsList(value: Array<CompleteFarm>): MultipleCompleteFarm;
  clearFarmsList(): MultipleCompleteFarm;
  addFarms(value?: CompleteFarm, index?: number): CompleteFarm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleCompleteFarm.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleCompleteFarm): MultipleCompleteFarm.AsObject;
  static serializeBinaryToWriter(message: MultipleCompleteFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleCompleteFarm;
  static deserializeBinaryFromReader(message: MultipleCompleteFarm, reader: jspb.BinaryReader): MultipleCompleteFarm;
}

export namespace MultipleCompleteFarm {
  export type AsObject = {
    farmsList: Array<CompleteFarm.AsObject>,
  }
}

export class CompleteFarm extends jspb.Message {
  getFarmid(): number;
  setFarmid(value: number): CompleteFarm;

  getName(): string;
  setName(value: string): CompleteFarm;

  getMappingareaname(): string;
  setMappingareaname(value: string): CompleteFarm;

  getBranchsList(): Array<BranchWithAreas>;
  setBranchsList(value: Array<BranchWithAreas>): CompleteFarm;
  clearBranchsList(): CompleteFarm;
  addBranchs(value?: BranchWithAreas, index?: number): BranchWithAreas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteFarm.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteFarm): CompleteFarm.AsObject;
  static serializeBinaryToWriter(message: CompleteFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteFarm;
  static deserializeBinaryFromReader(message: CompleteFarm, reader: jspb.BinaryReader): CompleteFarm;
}

export namespace CompleteFarm {
  export type AsObject = {
    farmid: number,
    name: string,
    mappingareaname: string,
    branchsList: Array<BranchWithAreas.AsObject>,
  }
}

export class BranchWithAreas extends jspb.Message {
  getBranchid(): number;
  setBranchid(value: number): BranchWithAreas;

  getName(): string;
  setName(value: string): BranchWithAreas;

  getAreasList(): Array<AreaMappingArea>;
  setAreasList(value: Array<AreaMappingArea>): BranchWithAreas;
  clearAreasList(): BranchWithAreas;
  addAreas(value?: AreaMappingArea, index?: number): AreaMappingArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BranchWithAreas.AsObject;
  static toObject(includeInstance: boolean, msg: BranchWithAreas): BranchWithAreas.AsObject;
  static serializeBinaryToWriter(message: BranchWithAreas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BranchWithAreas;
  static deserializeBinaryFromReader(message: BranchWithAreas, reader: jspb.BinaryReader): BranchWithAreas;
}

export namespace BranchWithAreas {
  export type AsObject = {
    branchid: number,
    name: string,
    areasList: Array<AreaMappingArea.AsObject>,
  }
}

export class MultipleMappingAreas extends jspb.Message {
  getMappingareasList(): Array<MappingArea>;
  setMappingareasList(value: Array<MappingArea>): MultipleMappingAreas;
  clearMappingareasList(): MultipleMappingAreas;
  addMappingareas(value?: MappingArea, index?: number): MappingArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleMappingAreas.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleMappingAreas): MultipleMappingAreas.AsObject;
  static serializeBinaryToWriter(message: MultipleMappingAreas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleMappingAreas;
  static deserializeBinaryFromReader(message: MultipleMappingAreas, reader: jspb.BinaryReader): MultipleMappingAreas;
}

export namespace MultipleMappingAreas {
  export type AsObject = {
    mappingareasList: Array<MappingArea.AsObject>,
  }
}

export class MappingArea extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): MappingArea;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): MappingArea;
  hasCreated(): boolean;
  clearCreated(): MappingArea;

  getDescription(): string;
  setDescription(value: string): MappingArea;

  getEffectiveenddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveenddate(value?: google_protobuf_timestamp_pb.Timestamp): MappingArea;
  hasEffectiveenddate(): boolean;
  clearEffectiveenddate(): MappingArea;

  getEffectivestartdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectivestartdate(value?: google_protobuf_timestamp_pb.Timestamp): MappingArea;
  hasEffectivestartdate(): boolean;
  clearEffectivestartdate(): MappingArea;

  getInactivationdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInactivationdate(value?: google_protobuf_timestamp_pb.Timestamp): MappingArea;
  hasInactivationdate(): boolean;
  clearInactivationdate(): MappingArea;

  getMappingareaid(): number;
  setMappingareaid(value: number): MappingArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MappingArea.AsObject;
  static toObject(includeInstance: boolean, msg: MappingArea): MappingArea.AsObject;
  static serializeBinaryToWriter(message: MappingArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MappingArea;
  static deserializeBinaryFromReader(message: MappingArea, reader: jspb.BinaryReader): MappingArea;
}

export namespace MappingArea {
  export type AsObject = {
    active: boolean,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    description: string,
    effectiveenddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    effectivestartdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inactivationdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mappingareaid: number,
  }
}

export class Pics extends jspb.Message {
  getBounds(): string;
  setBounds(value: string): Pics;

  getOnlymonitoring(): boolean;
  setOnlymonitoring(value: boolean): Pics;

  getName(): string;
  setName(value: string): Pics;

  getPicid(): number;
  setPicid(value: number): Pics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pics.AsObject;
  static toObject(includeInstance: boolean, msg: Pics): Pics.AsObject;
  static serializeBinaryToWriter(message: Pics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pics;
  static deserializeBinaryFromReader(message: Pics, reader: jspb.BinaryReader): Pics;
}

export namespace Pics {
  export type AsObject = {
    bounds: string,
    onlymonitoring: boolean,
    name: string,
    picid: number,
  }
}

export class MultipleAreaMappingArea extends jspb.Message {
  getAreasList(): Array<AreaMappingArea>;
  setAreasList(value: Array<AreaMappingArea>): MultipleAreaMappingArea;
  clearAreasList(): MultipleAreaMappingArea;
  addAreas(value?: AreaMappingArea, index?: number): AreaMappingArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleAreaMappingArea.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleAreaMappingArea): MultipleAreaMappingArea.AsObject;
  static serializeBinaryToWriter(message: MultipleAreaMappingArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleAreaMappingArea;
  static deserializeBinaryFromReader(message: MultipleAreaMappingArea, reader: jspb.BinaryReader): MultipleAreaMappingArea;
}

export namespace MultipleAreaMappingArea {
  export type AsObject = {
    areasList: Array<AreaMappingArea.AsObject>,
  }
}

export class AreaMappingArea extends jspb.Message {
  getId(): number;
  setId(value: number): AreaMappingArea;

  getBounds(): string;
  setBounds(value: string): AreaMappingArea;

  getCc(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCc(value?: google_protobuf_wrappers_pb.Int64Value): AreaMappingArea;
  hasCc(): boolean;
  clearCc(): AreaMappingArea;

  getDa(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setDa(value?: google_protobuf_wrappers_pb.DoubleValue): AreaMappingArea;
  hasDa(): boolean;
  clearDa(): AreaMappingArea;

  getPicsList(): Array<Pics>;
  setPicsList(value: Array<Pics>): AreaMappingArea;
  clearPicsList(): AreaMappingArea;
  addPics(value?: Pics, index?: number): Pics;

  getPmp(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPmp(value?: google_protobuf_wrappers_pb.Int64Value): AreaMappingArea;
  hasPmp(): boolean;
  clearPmp(): AreaMappingArea;

  getName(): string;
  setName(value: string): AreaMappingArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AreaMappingArea.AsObject;
  static toObject(includeInstance: boolean, msg: AreaMappingArea): AreaMappingArea.AsObject;
  static serializeBinaryToWriter(message: AreaMappingArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AreaMappingArea;
  static deserializeBinaryFromReader(message: AreaMappingArea, reader: jspb.BinaryReader): AreaMappingArea;
}

export namespace AreaMappingArea {
  export type AsObject = {
    id: number,
    bounds: string,
    cc?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    da?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    picsList: Array<Pics.AsObject>,
    pmp?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
  }
}

export class RequestCreateMappingAreas extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): RequestCreateMappingAreas;

  getUser(): User | undefined;
  setUser(value?: User): RequestCreateMappingAreas;
  hasUser(): boolean;
  clearUser(): RequestCreateMappingAreas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCreateMappingAreas.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCreateMappingAreas): RequestCreateMappingAreas.AsObject;
  static serializeBinaryToWriter(message: RequestCreateMappingAreas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCreateMappingAreas;
  static deserializeBinaryFromReader(message: RequestCreateMappingAreas, reader: jspb.BinaryReader): RequestCreateMappingAreas;
}

export namespace RequestCreateMappingAreas {
  export type AsObject = {
    description: string,
    user?: User.AsObject,
  }
}

export class ResponseCreatedMappingAreas extends jspb.Message {
  getId(): number;
  setId(value: number): ResponseCreatedMappingAreas;

  getDescription(): string;
  setDescription(value: string): ResponseCreatedMappingAreas;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): ResponseCreatedMappingAreas;
  hasCreated(): boolean;
  clearCreated(): ResponseCreatedMappingAreas;

  getLastupdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastupdate(value?: google_protobuf_timestamp_pb.Timestamp): ResponseCreatedMappingAreas;
  hasLastupdate(): boolean;
  clearLastupdate(): ResponseCreatedMappingAreas;

  getActive(): boolean;
  setActive(value: boolean): ResponseCreatedMappingAreas;

  getInactivationdate(): string;
  setInactivationdate(value: string): ResponseCreatedMappingAreas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCreatedMappingAreas.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCreatedMappingAreas): ResponseCreatedMappingAreas.AsObject;
  static serializeBinaryToWriter(message: ResponseCreatedMappingAreas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCreatedMappingAreas;
  static deserializeBinaryFromReader(message: ResponseCreatedMappingAreas, reader: jspb.BinaryReader): ResponseCreatedMappingAreas;
}

export namespace ResponseCreatedMappingAreas {
  export type AsObject = {
    id: number,
    description: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastupdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    active: boolean,
    inactivationdate: string,
  }
}

export class RequestUpdateMappingAreas extends jspb.Message {
  getId(): number;
  setId(value: number): RequestUpdateMappingAreas;

  getDescription(): string;
  setDescription(value: string): RequestUpdateMappingAreas;

  getActive(): boolean;
  setActive(value: boolean): RequestUpdateMappingAreas;

  getUser(): User | undefined;
  setUser(value?: User): RequestUpdateMappingAreas;
  hasUser(): boolean;
  clearUser(): RequestUpdateMappingAreas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUpdateMappingAreas.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUpdateMappingAreas): RequestUpdateMappingAreas.AsObject;
  static serializeBinaryToWriter(message: RequestUpdateMappingAreas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUpdateMappingAreas;
  static deserializeBinaryFromReader(message: RequestUpdateMappingAreas, reader: jspb.BinaryReader): RequestUpdateMappingAreas;
}

export namespace RequestUpdateMappingAreas {
  export type AsObject = {
    id: number,
    description: string,
    active: boolean,
    user?: User.AsObject,
  }
}

export class RequestDeleteMappingAreas extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RequestDeleteMappingAreas;
  hasUser(): boolean;
  clearUser(): RequestDeleteMappingAreas;

  getId(): number;
  setId(value: number): RequestDeleteMappingAreas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestDeleteMappingAreas.AsObject;
  static toObject(includeInstance: boolean, msg: RequestDeleteMappingAreas): RequestDeleteMappingAreas.AsObject;
  static serializeBinaryToWriter(message: RequestDeleteMappingAreas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestDeleteMappingAreas;
  static deserializeBinaryFromReader(message: RequestDeleteMappingAreas, reader: jspb.BinaryReader): RequestDeleteMappingAreas;
}

export namespace RequestDeleteMappingAreas {
  export type AsObject = {
    user?: User.AsObject,
    id: number,
  }
}

export class CreatedFarms extends jspb.Message {
  getName(): string;
  setName(value: string): CreatedFarms;

  getMappingareasid(): number;
  setMappingareasid(value: number): CreatedFarms;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatedFarms.AsObject;
  static toObject(includeInstance: boolean, msg: CreatedFarms): CreatedFarms.AsObject;
  static serializeBinaryToWriter(message: CreatedFarms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatedFarms;
  static deserializeBinaryFromReader(message: CreatedFarms, reader: jspb.BinaryReader): CreatedFarms;
}

export namespace CreatedFarms {
  export type AsObject = {
    name: string,
    mappingareasid: number,
  }
}

export class CreatedFarmsReturned extends jspb.Message {
  getId(): number;
  setId(value: number): CreatedFarmsReturned;

  getName(): string;
  setName(value: string): CreatedFarmsReturned;

  getMappingareasid(): number;
  setMappingareasid(value: number): CreatedFarmsReturned;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatedFarmsReturned.AsObject;
  static toObject(includeInstance: boolean, msg: CreatedFarmsReturned): CreatedFarmsReturned.AsObject;
  static serializeBinaryToWriter(message: CreatedFarmsReturned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatedFarmsReturned;
  static deserializeBinaryFromReader(message: CreatedFarmsReturned, reader: jspb.BinaryReader): CreatedFarmsReturned;
}

export namespace CreatedFarmsReturned {
  export type AsObject = {
    id: number,
    name: string,
    mappingareasid: number,
  }
}

export class RequestCreateFarm extends jspb.Message {
  getFarmsList(): Array<CreatedFarms>;
  setFarmsList(value: Array<CreatedFarms>): RequestCreateFarm;
  clearFarmsList(): RequestCreateFarm;
  addFarms(value?: CreatedFarms, index?: number): CreatedFarms;

  getUser(): User | undefined;
  setUser(value?: User): RequestCreateFarm;
  hasUser(): boolean;
  clearUser(): RequestCreateFarm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCreateFarm.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCreateFarm): RequestCreateFarm.AsObject;
  static serializeBinaryToWriter(message: RequestCreateFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCreateFarm;
  static deserializeBinaryFromReader(message: RequestCreateFarm, reader: jspb.BinaryReader): RequestCreateFarm;
}

export namespace RequestCreateFarm {
  export type AsObject = {
    farmsList: Array<CreatedFarms.AsObject>,
    user?: User.AsObject,
  }
}

export class ResponseCreatedFarm extends jspb.Message {
  getFarmsList(): Array<CreatedFarmsReturned>;
  setFarmsList(value: Array<CreatedFarmsReturned>): ResponseCreatedFarm;
  clearFarmsList(): ResponseCreatedFarm;
  addFarms(value?: CreatedFarmsReturned, index?: number): CreatedFarmsReturned;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCreatedFarm.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCreatedFarm): ResponseCreatedFarm.AsObject;
  static serializeBinaryToWriter(message: ResponseCreatedFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCreatedFarm;
  static deserializeBinaryFromReader(message: ResponseCreatedFarm, reader: jspb.BinaryReader): ResponseCreatedFarm;
}

export namespace ResponseCreatedFarm {
  export type AsObject = {
    farmsList: Array<CreatedFarmsReturned.AsObject>,
  }
}

export class UpdatedFarm extends jspb.Message {
  getId(): number;
  setId(value: number): UpdatedFarm;

  getName(): string;
  setName(value: string): UpdatedFarm;

  getMappingareasid(): number;
  setMappingareasid(value: number): UpdatedFarm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatedFarm.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatedFarm): UpdatedFarm.AsObject;
  static serializeBinaryToWriter(message: UpdatedFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatedFarm;
  static deserializeBinaryFromReader(message: UpdatedFarm, reader: jspb.BinaryReader): UpdatedFarm;
}

export namespace UpdatedFarm {
  export type AsObject = {
    id: number,
    name: string,
    mappingareasid: number,
  }
}

export class RequestUpdateFarm extends jspb.Message {
  getFarm(): UpdatedFarm | undefined;
  setFarm(value?: UpdatedFarm): RequestUpdateFarm;
  hasFarm(): boolean;
  clearFarm(): RequestUpdateFarm;

  getUser(): User | undefined;
  setUser(value?: User): RequestUpdateFarm;
  hasUser(): boolean;
  clearUser(): RequestUpdateFarm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUpdateFarm.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUpdateFarm): RequestUpdateFarm.AsObject;
  static serializeBinaryToWriter(message: RequestUpdateFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUpdateFarm;
  static deserializeBinaryFromReader(message: RequestUpdateFarm, reader: jspb.BinaryReader): RequestUpdateFarm;
}

export namespace RequestUpdateFarm {
  export type AsObject = {
    farm?: UpdatedFarm.AsObject,
    user?: User.AsObject,
  }
}

export class ResponseUpdateFarm extends jspb.Message {
  getFarm(): CreatedFarmsReturned | undefined;
  setFarm(value?: CreatedFarmsReturned): ResponseUpdateFarm;
  hasFarm(): boolean;
  clearFarm(): ResponseUpdateFarm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUpdateFarm.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUpdateFarm): ResponseUpdateFarm.AsObject;
  static serializeBinaryToWriter(message: ResponseUpdateFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUpdateFarm;
  static deserializeBinaryFromReader(message: ResponseUpdateFarm, reader: jspb.BinaryReader): ResponseUpdateFarm;
}

export namespace ResponseUpdateFarm {
  export type AsObject = {
    farm?: CreatedFarmsReturned.AsObject,
  }
}

export class RequestDeleteFarm extends jspb.Message {
  getId(): number;
  setId(value: number): RequestDeleteFarm;

  getUser(): User | undefined;
  setUser(value?: User): RequestDeleteFarm;
  hasUser(): boolean;
  clearUser(): RequestDeleteFarm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestDeleteFarm.AsObject;
  static toObject(includeInstance: boolean, msg: RequestDeleteFarm): RequestDeleteFarm.AsObject;
  static serializeBinaryToWriter(message: RequestDeleteFarm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestDeleteFarm;
  static deserializeBinaryFromReader(message: RequestDeleteFarm, reader: jspb.BinaryReader): RequestDeleteFarm;
}

export namespace RequestDeleteFarm {
  export type AsObject = {
    id: number,
    user?: User.AsObject,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class CreatedBranchs extends jspb.Message {
  getName(): string;
  setName(value: string): CreatedBranchs;

  getAreafarmid(): number;
  setAreafarmid(value: number): CreatedBranchs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatedBranchs.AsObject;
  static toObject(includeInstance: boolean, msg: CreatedBranchs): CreatedBranchs.AsObject;
  static serializeBinaryToWriter(message: CreatedBranchs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatedBranchs;
  static deserializeBinaryFromReader(message: CreatedBranchs, reader: jspb.BinaryReader): CreatedBranchs;
}

export namespace CreatedBranchs {
  export type AsObject = {
    name: string,
    areafarmid: number,
  }
}

export class RequestCreateBranch extends jspb.Message {
  getBranchsList(): Array<CreatedBranchs>;
  setBranchsList(value: Array<CreatedBranchs>): RequestCreateBranch;
  clearBranchsList(): RequestCreateBranch;
  addBranchs(value?: CreatedBranchs, index?: number): CreatedBranchs;

  getUser(): User | undefined;
  setUser(value?: User): RequestCreateBranch;
  hasUser(): boolean;
  clearUser(): RequestCreateBranch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCreateBranch.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCreateBranch): RequestCreateBranch.AsObject;
  static serializeBinaryToWriter(message: RequestCreateBranch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCreateBranch;
  static deserializeBinaryFromReader(message: RequestCreateBranch, reader: jspb.BinaryReader): RequestCreateBranch;
}

export namespace RequestCreateBranch {
  export type AsObject = {
    branchsList: Array<CreatedBranchs.AsObject>,
    user?: User.AsObject,
  }
}

export class CreatedBranchsReturned extends jspb.Message {
  getAreafarmid(): number;
  setAreafarmid(value: number): CreatedBranchsReturned;

  getAreabranchid(): number;
  setAreabranchid(value: number): CreatedBranchsReturned;

  getName(): string;
  setName(value: string): CreatedBranchsReturned;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatedBranchsReturned.AsObject;
  static toObject(includeInstance: boolean, msg: CreatedBranchsReturned): CreatedBranchsReturned.AsObject;
  static serializeBinaryToWriter(message: CreatedBranchsReturned, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatedBranchsReturned;
  static deserializeBinaryFromReader(message: CreatedBranchsReturned, reader: jspb.BinaryReader): CreatedBranchsReturned;
}

export namespace CreatedBranchsReturned {
  export type AsObject = {
    areafarmid: number,
    areabranchid: number,
    name: string,
  }
}

export class ResponseCreatedBranch extends jspb.Message {
  getBranchsList(): Array<CreatedBranchsReturned>;
  setBranchsList(value: Array<CreatedBranchsReturned>): ResponseCreatedBranch;
  clearBranchsList(): ResponseCreatedBranch;
  addBranchs(value?: CreatedBranchsReturned, index?: number): CreatedBranchsReturned;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseCreatedBranch.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseCreatedBranch): ResponseCreatedBranch.AsObject;
  static serializeBinaryToWriter(message: ResponseCreatedBranch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseCreatedBranch;
  static deserializeBinaryFromReader(message: ResponseCreatedBranch, reader: jspb.BinaryReader): ResponseCreatedBranch;
}

export namespace ResponseCreatedBranch {
  export type AsObject = {
    branchsList: Array<CreatedBranchsReturned.AsObject>,
  }
}

export class RequestUpdateBranch extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RequestUpdateBranch;
  hasUser(): boolean;
  clearUser(): RequestUpdateBranch;

  getBranchid(): number;
  setBranchid(value: number): RequestUpdateBranch;

  getName(): string;
  setName(value: string): RequestUpdateBranch;

  getFarmid(): number;
  setFarmid(value: number): RequestUpdateBranch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUpdateBranch.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUpdateBranch): RequestUpdateBranch.AsObject;
  static serializeBinaryToWriter(message: RequestUpdateBranch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUpdateBranch;
  static deserializeBinaryFromReader(message: RequestUpdateBranch, reader: jspb.BinaryReader): RequestUpdateBranch;
}

export namespace RequestUpdateBranch {
  export type AsObject = {
    user?: User.AsObject,
    branchid: number,
    name: string,
    farmid: number,
  }
}

export class RequestDeleteBranch extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RequestDeleteBranch;
  hasUser(): boolean;
  clearUser(): RequestDeleteBranch;

  getBranchid(): number;
  setBranchid(value: number): RequestDeleteBranch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestDeleteBranch.AsObject;
  static toObject(includeInstance: boolean, msg: RequestDeleteBranch): RequestDeleteBranch.AsObject;
  static serializeBinaryToWriter(message: RequestDeleteBranch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestDeleteBranch;
  static deserializeBinaryFromReader(message: RequestDeleteBranch, reader: jspb.BinaryReader): RequestDeleteBranch;
}

export namespace RequestDeleteBranch {
  export type AsObject = {
    user?: User.AsObject,
    branchid: number,
  }
}

export class RequestDeleteArea extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RequestDeleteArea;
  hasUser(): boolean;
  clearUser(): RequestDeleteArea;

  getAreaid(): number;
  setAreaid(value: number): RequestDeleteArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestDeleteArea.AsObject;
  static toObject(includeInstance: boolean, msg: RequestDeleteArea): RequestDeleteArea.AsObject;
  static serializeBinaryToWriter(message: RequestDeleteArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestDeleteArea;
  static deserializeBinaryFromReader(message: RequestDeleteArea, reader: jspb.BinaryReader): RequestDeleteArea;
}

export namespace RequestDeleteArea {
  export type AsObject = {
    user?: User.AsObject,
    areaid: number,
  }
}

export class CreateArea extends jspb.Message {
  getBounds(): string;
  setBounds(value: string): CreateArea;

  getName(): string;
  setName(value: string): CreateArea;

  getBranchid(): number;
  setBranchid(value: number): CreateArea;

  getCc(): number;
  setCc(value: number): CreateArea;

  getPmp(): number;
  setPmp(value: number): CreateArea;

  getDa(): number;
  setDa(value: number): CreateArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateArea.AsObject;
  static toObject(includeInstance: boolean, msg: CreateArea): CreateArea.AsObject;
  static serializeBinaryToWriter(message: CreateArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateArea;
  static deserializeBinaryFromReader(message: CreateArea, reader: jspb.BinaryReader): CreateArea;
}

export namespace CreateArea {
  export type AsObject = {
    bounds: string,
    name: string,
    branchid: number,
    cc: number,
    pmp: number,
    da: number,
  }
}

export class RequestCreateArea extends jspb.Message {
  getArea(): CreateArea | undefined;
  setArea(value?: CreateArea): RequestCreateArea;
  hasArea(): boolean;
  clearArea(): RequestCreateArea;

  getUser(): User | undefined;
  setUser(value?: User): RequestCreateArea;
  hasUser(): boolean;
  clearUser(): RequestCreateArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCreateArea.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCreateArea): RequestCreateArea.AsObject;
  static serializeBinaryToWriter(message: RequestCreateArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCreateArea;
  static deserializeBinaryFromReader(message: RequestCreateArea, reader: jspb.BinaryReader): RequestCreateArea;
}

export namespace RequestCreateArea {
  export type AsObject = {
    area?: CreateArea.AsObject,
    user?: User.AsObject,
  }
}

export class CreateAreaResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateAreaResponse;

  getMappingareaid(): number;
  setMappingareaid(value: number): CreateAreaResponse;

  getBounds(): string;
  setBounds(value: string): CreateAreaResponse;

  getName(): string;
  setName(value: string): CreateAreaResponse;

  getBranchid(): number;
  setBranchid(value: number): CreateAreaResponse;

  getCc(): number;
  setCc(value: number): CreateAreaResponse;

  getPmp(): number;
  setPmp(value: number): CreateAreaResponse;

  getDa(): number;
  setDa(value: number): CreateAreaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAreaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAreaResponse): CreateAreaResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAreaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAreaResponse;
  static deserializeBinaryFromReader(message: CreateAreaResponse, reader: jspb.BinaryReader): CreateAreaResponse;
}

export namespace CreateAreaResponse {
  export type AsObject = {
    id: number,
    mappingareaid: number,
    bounds: string,
    name: string,
    branchid: number,
    cc: number,
    pmp: number,
    da: number,
  }
}

export class RequestUpdateArea extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): RequestUpdateArea;
  hasUser(): boolean;
  clearUser(): RequestUpdateArea;

  getId(): number;
  setId(value: number): RequestUpdateArea;

  getName(): string;
  setName(value: string): RequestUpdateArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestUpdateArea.AsObject;
  static toObject(includeInstance: boolean, msg: RequestUpdateArea): RequestUpdateArea.AsObject;
  static serializeBinaryToWriter(message: RequestUpdateArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestUpdateArea;
  static deserializeBinaryFromReader(message: RequestUpdateArea, reader: jspb.BinaryReader): RequestUpdateArea;
}

export namespace RequestUpdateArea {
  export type AsObject = {
    user?: User.AsObject,
    id: number,
    name: string,
  }
}

export class ResponseUpdatedArea extends jspb.Message {
  getName(): string;
  setName(value: string): ResponseUpdatedArea;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseUpdatedArea.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseUpdatedArea): ResponseUpdatedArea.AsObject;
  static serializeBinaryToWriter(message: ResponseUpdatedArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseUpdatedArea;
  static deserializeBinaryFromReader(message: ResponseUpdatedArea, reader: jspb.BinaryReader): ResponseUpdatedArea;
}

export namespace ResponseUpdatedArea {
  export type AsObject = {
    name: string,
  }
}

