/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  ELeagueBroadcastProvider,
  ELeagueDivision,
  ELeaguePhase,
  ELeagueRegion,
  ELeagueStatus,
  ELeagueTier,
} from "./dota_shared_enums";

export enum ELeagueNodeGroupType {
  INVALID_GROUP_TYPE = 0,
  ORGANIZATIONAL = 1,
  ROUND_ROBIN = 2,
  SWISS = 3,
  BRACKET_SINGLE = 4,
  BRACKET_DOUBLE_SEED_LOSER = 5,
  BRACKET_DOUBLE_ALL_WINNER = 6,
  SHOWMATCH = 7,
  GSL = 8,
}

export enum ELeagueNodeType {
  INVALID_NODE_TYPE = 0,
  BEST_OF_ONE = 1,
  BEST_OF_THREE = 2,
  BEST_OF_FIVE = 3,
  BEST_OF_TWO = 4,
}

export interface CMsgDOTALeagueNode {
  name: string;
  nodeId: number;
  nodeGroupId: number;
  winningNodeId: number;
  losingNodeId: number;
  incomingNodeId1: number;
  incomingNodeId2: number;
  nodeType: ELeagueNodeType;
  scheduledTime: number;
  actualTime: number;
  seriesId: number;
  teamId1: number;
  teamId2: number;
  matches: CMsgDOTALeagueNode_MatchDetails[];
  team1Wins: number;
  team2Wins: number;
  hasStarted: boolean;
  isCompleted: boolean;
  streamIds: number[];
  vods: CMsgDOTALeagueNode_VOD[];
}

export interface CMsgDOTALeagueNode_MatchDetails {
  matchId: string;
  winningTeamId: number;
}

export interface CMsgDOTALeagueNode_VOD {
  seriesGame: number;
  streamId: number;
  url: string;
}

export interface CMsgDOTALeagueNodeGroup {
  name: string;
  nodeGroupId: number;
  parentNodeGroupId: number;
  incomingNodeGroupIds: number[];
  advancingNodeGroupId: number;
  advancingTeamCount: number;
  teamCount: number;
  nodeGroupType: ELeagueNodeGroupType;
  defaultNodeType: ELeagueNodeType;
  round: number;
  maxRounds: number;
  isTiebreaker: boolean;
  isFinalGroup: boolean;
  isCompleted: boolean;
  phase: ELeaguePhase;
  region: ELeagueRegion;
  startTime: number;
  endTime: number;
  secondaryAdvancingNodeGroupId: number;
  secondaryAdvancingTeamCount: number;
  tertiaryAdvancingNodeGroupId: number;
  tertiaryAdvancingTeamCount: number;
  eliminationDpcPoints: number;
  teamStandings: CMsgDOTALeagueNodeGroup_TeamStanding[];
  nodes: CMsgDOTALeagueNode[];
  nodeGroups: CMsgDOTALeagueNodeGroup[];
}

export interface CMsgDOTALeagueNodeGroup_TeamStanding {
  standing: number;
  teamId: number;
  teamName: string;
  teamTag: string;
  teamLogo: string;
  teamLogoUrl: string;
  wins: number;
  losses: number;
  score: string;
  teamAbbreviation: string;
  scoreTiebreakGroup: string;
  scoreTiebreakBelow: string;
  scoreTiebreakRandom: string;
  isPro: boolean;
}

export interface CMsgDOTALeague {
  info: CMsgDOTALeague_Info | undefined;
  prizePool: CMsgDOTALeague_PrizePool | undefined;
  admins: CMsgDOTALeague_Admin[];
  streams: CMsgDOTALeague_Stream[];
  nodeGroups: CMsgDOTALeagueNodeGroup[];
  seriesInfos: CMsgDOTALeague_SeriesInfo[];
  registeredPlayers: CMsgDOTALeague_Player[];
}

export interface CMsgDOTALeague_Info {
  leagueId: number;
  name: string;
  tier: ELeagueTier;
  region: ELeagueRegion;
  url: string;
  description: string;
  notes: string;
  startTimestamp: number;
  endTimestamp: number;
  proCircuitPoints: number;
  imageBits: number;
  status: ELeagueStatus;
  mostRecentActivity: number;
  registrationPeriod: number;
}

export interface CMsgDOTALeague_Admin {
  accountId: number;
  isPrimary: boolean;
  emailAddress: string;
}

export interface CMsgDOTALeague_PrizePoolItem {
  itemDef: number;
  salesStopTimestamp: number;
  revenuePct: number;
  revenueCentsPerSale: number;
}

export interface CMsgDOTALeague_PrizePool {
  basePrizePool: number;
  totalPrizePool: number;
  prizeSplitPctX100: number[];
  prizePoolItems: CMsgDOTALeague_PrizePoolItem[];
}

export interface CMsgDOTALeague_Stream {
  streamId: number;
  language: number;
  name: string;
  broadcastProvider: ELeagueBroadcastProvider;
  streamUrl: string;
  vodUrl: string;
}

export interface CMsgDOTALeague_SeriesInfo {
  seriesId: number;
  seriesType: number;
  startTime: number;
  matchIds: string[];
  teamId1: number;
  teamId2: number;
}

export interface CMsgDOTALeague_Player {
  accountId: number;
  name: string;
  teamId: number;
}

export interface CMsgDOTALeagueList {
  leagues: CMsgDOTALeague[];
}

export interface CMsgDOTALeagueInfo {
  leagueId: number;
  name: string;
  tier: ELeagueTier;
  region: ELeagueRegion;
  mostRecentActivity: number;
  totalPrizePool: number;
  startTimestamp: number;
  endTimestamp: number;
  status: number;
}

export interface CMsgDOTALeagueInfoList {
  infos: CMsgDOTALeagueInfo[];
}

export interface CMsgDOTALeagueLiveGames {
  games: CMsgDOTALeagueLiveGames_LiveGame[];
}

export interface CMsgDOTALeagueLiveGames_LiveGame {
  leagueId: number;
  serverSteamId: string;
  radiantName: string;
  radiantLogo: string;
  radiantTeamId: number;
  direName: string;
  direLogo: string;
  direTeamId: number;
  time: number;
  spectators: number;
  leagueNodeId: number;
  seriesId: number;
  matchId: string;
}

export interface CMsgDOTALeagueMessages {
  messages: CMsgDOTALeagueMessages_Message[];
}

export interface CMsgDOTALeagueMessages_Message {
  authorAccountId: number;
  timestamp: number;
  message: string;
}

export interface CMsgDOTALeaguePrizePool {
  prizePool: number;
  incrementPerSecond: number;
}

export interface CMsgDOTALeagueInfoListAdminsRequest {
}

export interface CMsgDOTALeagueAvailableLobbyNodesRequest {
  leagueId: number;
}

export interface CMsgDOTALeagueAvailableLobbyNodes {
  nodeInfos: CMsgDOTALeagueAvailableLobbyNodes_NodeInfo[];
}

export interface CMsgDOTALeagueAvailableLobbyNodes_NodeInfo {
  nodeId: number;
  nodeName: string;
  nodeGroupName: string;
  teamId1: number;
  teamId2: number;
}

export interface CMsgDOTALeagueNodeResults {
  nodeResults: CMsgDOTALeagueNodeResults_Result[];
}

export interface CMsgDOTALeagueNodeResults_Result {
  nodeId: number;
  winningNodeId: number;
  losingNodeId: number;
  incomingNodeId1: number;
  incomingNodeId2: number;
  teamId1: number;
  teamId2: number;
  team1Name: string;
  team2Name: string;
  team1Wins: number;
  team2Wins: number;
  winningTeamId: number;
  losingTeamId: number;
  hasStarted: boolean;
  isCompleted: boolean;
  scheduledTime: number;
  matchIds: string[];
}

export interface CMsgDOTADPCLeagueResults {
  results: CMsgDOTADPCLeagueResults_Result[];
  points: number[];
  dollars: number[];
}

export interface CMsgDOTADPCLeagueResults_Result {
  standing: number;
  teamId: number;
  teamName: string;
  teamLogo: string;
  teamLogoUrl: string;
  points: number;
  earnings: number;
  timestamp: number;
  phase: ELeaguePhase;
  teamAbbreviation: string;
}

export interface CMsgDOTADPCTeamResults {
  results: CMsgDOTADPCTeamResults_Result[];
}

export interface CMsgDOTADPCTeamResults_Result {
  leagueId: number;
  standing: number;
  points: number;
  earnings: number;
  timestamp: number;
}

export interface CMsgDOTADPCSeasonResults {
  results: CMsgDOTADPCSeasonResults_TeamResult[];
  standings: CMsgDOTADPCSeasonResults_Standing[];
  majorWildcardStandings: CMsgDOTADPCSeasonResults_StandingEntry[];
  majorGroupStandings: CMsgDOTADPCSeasonResults_StandingEntry[];
  majorPlayoffStandings: CMsgDOTADPCSeasonResults_StandingEntry[];
}

export interface CMsgDOTADPCSeasonResults_TeamLeagueResult {
  timestamp: number;
  leagueId: number;
  standing: number;
  points: number;
  earnings: number;
  auditAction: number;
  auditData: number;
}

export interface CMsgDOTADPCSeasonResults_TeamResult {
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  teamLogo: string;
  teamLogoUrl: string;
  totalPoints: number;
  totalEarnings: number;
  leagueResults: CMsgDOTADPCSeasonResults_TeamLeagueResult[];
}

export interface CMsgDOTADPCSeasonResults_StandingEntry {
  teamId: number;
  wins: number;
  losses: number;
  teamUrl: string;
  teamName: string;
  teamAbbreviation: string;
}

export interface CMsgDOTADPCSeasonResults_Standing {
  region: ELeagueRegion;
  division: ELeagueDivision;
  entries: CMsgDOTADPCSeasonResults_StandingEntry[];
}

export interface CMsgDOTADPCSeasonSpoilerResults {
  timeLastUpdated: number;
  savedResults: CMsgDOTADPCSeasonResults | undefined;
}

function createBaseCMsgDOTALeagueNode(): CMsgDOTALeagueNode {
  return {
    name: "",
    nodeId: 0,
    nodeGroupId: 0,
    winningNodeId: 0,
    losingNodeId: 0,
    incomingNodeId1: 0,
    incomingNodeId2: 0,
    nodeType: 0,
    scheduledTime: 0,
    actualTime: 0,
    seriesId: 0,
    teamId1: 0,
    teamId2: 0,
    matches: [],
    team1Wins: 0,
    team2Wins: 0,
    hasStarted: false,
    isCompleted: false,
    streamIds: [],
    vods: [],
  };
}

export const CMsgDOTALeagueNode = {
  encode(message: CMsgDOTALeagueNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.nodeId !== 0) {
      writer.uint32(16).uint32(message.nodeId);
    }
    if (message.nodeGroupId !== 0) {
      writer.uint32(24).uint32(message.nodeGroupId);
    }
    if (message.winningNodeId !== 0) {
      writer.uint32(32).uint32(message.winningNodeId);
    }
    if (message.losingNodeId !== 0) {
      writer.uint32(40).uint32(message.losingNodeId);
    }
    if (message.incomingNodeId1 !== 0) {
      writer.uint32(48).uint32(message.incomingNodeId1);
    }
    if (message.incomingNodeId2 !== 0) {
      writer.uint32(56).uint32(message.incomingNodeId2);
    }
    if (message.nodeType !== 0) {
      writer.uint32(64).int32(message.nodeType);
    }
    if (message.scheduledTime !== 0) {
      writer.uint32(72).uint32(message.scheduledTime);
    }
    if (message.actualTime !== 0) {
      writer.uint32(152).uint32(message.actualTime);
    }
    if (message.seriesId !== 0) {
      writer.uint32(80).uint32(message.seriesId);
    }
    if (message.teamId1 !== 0) {
      writer.uint32(88).uint32(message.teamId1);
    }
    if (message.teamId2 !== 0) {
      writer.uint32(96).uint32(message.teamId2);
    }
    for (const v of message.matches) {
      CMsgDOTALeagueNode_MatchDetails.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.team1Wins !== 0) {
      writer.uint32(112).uint32(message.team1Wins);
    }
    if (message.team2Wins !== 0) {
      writer.uint32(120).uint32(message.team2Wins);
    }
    if (message.hasStarted === true) {
      writer.uint32(128).bool(message.hasStarted);
    }
    if (message.isCompleted === true) {
      writer.uint32(136).bool(message.isCompleted);
    }
    writer.uint32(146).fork();
    for (const v of message.streamIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.vods) {
      CMsgDOTALeagueNode_VOD.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.nodeGroupId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.winningNodeId = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.losingNodeId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.incomingNodeId1 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.incomingNodeId2 = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.nodeType = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.scheduledTime = reader.uint32();
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.actualTime = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.teamId1 = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.teamId2 = reader.uint32();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.matches.push(CMsgDOTALeagueNode_MatchDetails.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.team1Wins = reader.uint32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.team2Wins = reader.uint32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.hasStarted = reader.bool();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.isCompleted = reader.bool();
          continue;
        case 18:
          if (tag == 144) {
            message.streamIds.push(reader.uint32());
            continue;
          }

          if (tag == 146) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.streamIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 20:
          if (tag != 162) {
            break;
          }

          message.vods.push(CMsgDOTALeagueNode_VOD.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueNode_MatchDetails(): CMsgDOTALeagueNode_MatchDetails {
  return { matchId: "0", winningTeamId: 0 };
}

export const CMsgDOTALeagueNode_MatchDetails = {
  encode(message: CMsgDOTALeagueNode_MatchDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchId !== "0") {
      writer.uint32(8).uint64(message.matchId);
    }
    if (message.winningTeamId !== 0) {
      writer.uint32(16).uint32(message.winningTeamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNode_MatchDetails {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNode_MatchDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.winningTeamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueNode_VOD(): CMsgDOTALeagueNode_VOD {
  return { seriesGame: 0, streamId: 0, url: "" };
}

export const CMsgDOTALeagueNode_VOD = {
  encode(message: CMsgDOTALeagueNode_VOD, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seriesGame !== 0) {
      writer.uint32(8).uint32(message.seriesGame);
    }
    if (message.streamId !== 0) {
      writer.uint32(16).uint32(message.streamId);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNode_VOD {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNode_VOD();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.seriesGame = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.streamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueNodeGroup(): CMsgDOTALeagueNodeGroup {
  return {
    name: "",
    nodeGroupId: 0,
    parentNodeGroupId: 0,
    incomingNodeGroupIds: [],
    advancingNodeGroupId: 0,
    advancingTeamCount: 0,
    teamCount: 0,
    nodeGroupType: 0,
    defaultNodeType: 0,
    round: 0,
    maxRounds: 0,
    isTiebreaker: false,
    isFinalGroup: false,
    isCompleted: false,
    phase: 0,
    region: 0,
    startTime: 0,
    endTime: 0,
    secondaryAdvancingNodeGroupId: 0,
    secondaryAdvancingTeamCount: 0,
    tertiaryAdvancingNodeGroupId: 0,
    tertiaryAdvancingTeamCount: 0,
    eliminationDpcPoints: 0,
    teamStandings: [],
    nodes: [],
    nodeGroups: [],
  };
}

export const CMsgDOTALeagueNodeGroup = {
  encode(message: CMsgDOTALeagueNodeGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.nodeGroupId !== 0) {
      writer.uint32(16).uint32(message.nodeGroupId);
    }
    if (message.parentNodeGroupId !== 0) {
      writer.uint32(24).uint32(message.parentNodeGroupId);
    }
    writer.uint32(34).fork();
    for (const v of message.incomingNodeGroupIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.advancingNodeGroupId !== 0) {
      writer.uint32(40).uint32(message.advancingNodeGroupId);
    }
    if (message.advancingTeamCount !== 0) {
      writer.uint32(48).uint32(message.advancingTeamCount);
    }
    if (message.teamCount !== 0) {
      writer.uint32(56).uint32(message.teamCount);
    }
    if (message.nodeGroupType !== 0) {
      writer.uint32(64).int32(message.nodeGroupType);
    }
    if (message.defaultNodeType !== 0) {
      writer.uint32(72).int32(message.defaultNodeType);
    }
    if (message.round !== 0) {
      writer.uint32(80).uint32(message.round);
    }
    if (message.maxRounds !== 0) {
      writer.uint32(88).uint32(message.maxRounds);
    }
    if (message.isTiebreaker === true) {
      writer.uint32(96).bool(message.isTiebreaker);
    }
    if (message.isFinalGroup === true) {
      writer.uint32(104).bool(message.isFinalGroup);
    }
    if (message.isCompleted === true) {
      writer.uint32(112).bool(message.isCompleted);
    }
    if (message.phase !== 0) {
      writer.uint32(144).int32(message.phase);
    }
    if (message.region !== 0) {
      writer.uint32(152).int32(message.region);
    }
    if (message.startTime !== 0) {
      writer.uint32(160).uint32(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(168).uint32(message.endTime);
    }
    if (message.secondaryAdvancingNodeGroupId !== 0) {
      writer.uint32(176).uint32(message.secondaryAdvancingNodeGroupId);
    }
    if (message.secondaryAdvancingTeamCount !== 0) {
      writer.uint32(184).uint32(message.secondaryAdvancingTeamCount);
    }
    if (message.tertiaryAdvancingNodeGroupId !== 0) {
      writer.uint32(192).uint32(message.tertiaryAdvancingNodeGroupId);
    }
    if (message.tertiaryAdvancingTeamCount !== 0) {
      writer.uint32(200).uint32(message.tertiaryAdvancingTeamCount);
    }
    if (message.eliminationDpcPoints !== 0) {
      writer.uint32(208).uint32(message.eliminationDpcPoints);
    }
    for (const v of message.teamStandings) {
      CMsgDOTALeagueNodeGroup_TeamStanding.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.nodes) {
      CMsgDOTALeagueNode.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.nodeGroups) {
      CMsgDOTALeagueNodeGroup.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNodeGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNodeGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.nodeGroupId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.parentNodeGroupId = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.incomingNodeGroupIds.push(reader.uint32());
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.incomingNodeGroupIds.push(reader.uint32());
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.advancingNodeGroupId = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.advancingTeamCount = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamCount = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.nodeGroupType = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.defaultNodeType = reader.int32() as any;
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.round = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.maxRounds = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.isTiebreaker = reader.bool();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.isFinalGroup = reader.bool();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.isCompleted = reader.bool();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.phase = reader.int32() as any;
          continue;
        case 19:
          if (tag != 152) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 20:
          if (tag != 160) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
        case 21:
          if (tag != 168) {
            break;
          }

          message.endTime = reader.uint32();
          continue;
        case 22:
          if (tag != 176) {
            break;
          }

          message.secondaryAdvancingNodeGroupId = reader.uint32();
          continue;
        case 23:
          if (tag != 184) {
            break;
          }

          message.secondaryAdvancingTeamCount = reader.uint32();
          continue;
        case 24:
          if (tag != 192) {
            break;
          }

          message.tertiaryAdvancingNodeGroupId = reader.uint32();
          continue;
        case 25:
          if (tag != 200) {
            break;
          }

          message.tertiaryAdvancingTeamCount = reader.uint32();
          continue;
        case 26:
          if (tag != 208) {
            break;
          }

          message.eliminationDpcPoints = reader.uint32();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.teamStandings.push(CMsgDOTALeagueNodeGroup_TeamStanding.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.nodes.push(CMsgDOTALeagueNode.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.nodeGroups.push(CMsgDOTALeagueNodeGroup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueNodeGroup_TeamStanding(): CMsgDOTALeagueNodeGroup_TeamStanding {
  return {
    standing: 0,
    teamId: 0,
    teamName: "",
    teamTag: "",
    teamLogo: "0",
    teamLogoUrl: "",
    wins: 0,
    losses: 0,
    score: "0",
    teamAbbreviation: "",
    scoreTiebreakGroup: "0",
    scoreTiebreakBelow: "0",
    scoreTiebreakRandom: "0",
    isPro: false,
  };
}

export const CMsgDOTALeagueNodeGroup_TeamStanding = {
  encode(message: CMsgDOTALeagueNodeGroup_TeamStanding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.standing !== 0) {
      writer.uint32(8).uint32(message.standing);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(26).string(message.teamName);
    }
    if (message.teamTag !== "") {
      writer.uint32(34).string(message.teamTag);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(40).uint64(message.teamLogo);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(50).string(message.teamLogoUrl);
    }
    if (message.wins !== 0) {
      writer.uint32(56).uint32(message.wins);
    }
    if (message.losses !== 0) {
      writer.uint32(64).uint32(message.losses);
    }
    if (message.score !== "0") {
      writer.uint32(72).int64(message.score);
    }
    if (message.teamAbbreviation !== "") {
      writer.uint32(82).string(message.teamAbbreviation);
    }
    if (message.scoreTiebreakGroup !== "0") {
      writer.uint32(88).int64(message.scoreTiebreakGroup);
    }
    if (message.scoreTiebreakBelow !== "0") {
      writer.uint32(96).int64(message.scoreTiebreakBelow);
    }
    if (message.scoreTiebreakRandom !== "0") {
      writer.uint32(104).int64(message.scoreTiebreakRandom);
    }
    if (message.isPro === true) {
      writer.uint32(112).bool(message.isPro);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNodeGroup_TeamStanding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNodeGroup_TeamStanding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.standing = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamTag = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamLogo = longToString(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teamLogoUrl = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.wins = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.losses = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.score = longToString(reader.int64() as Long);
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.teamAbbreviation = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.scoreTiebreakGroup = longToString(reader.int64() as Long);
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.scoreTiebreakBelow = longToString(reader.int64() as Long);
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.scoreTiebreakRandom = longToString(reader.int64() as Long);
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.isPro = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague(): CMsgDOTALeague {
  return {
    info: undefined,
    prizePool: undefined,
    admins: [],
    streams: [],
    nodeGroups: [],
    seriesInfos: [],
    registeredPlayers: [],
  };
}

export const CMsgDOTALeague = {
  encode(message: CMsgDOTALeague, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      CMsgDOTALeague_Info.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    if (message.prizePool !== undefined) {
      CMsgDOTALeague_PrizePool.encode(message.prizePool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.admins) {
      CMsgDOTALeague_Admin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.streams) {
      CMsgDOTALeague_Stream.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.nodeGroups) {
      CMsgDOTALeagueNodeGroup.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.seriesInfos) {
      CMsgDOTALeague_SeriesInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.registeredPlayers) {
      CMsgDOTALeague_Player.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.info = CMsgDOTALeague_Info.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.prizePool = CMsgDOTALeague_PrizePool.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.admins.push(CMsgDOTALeague_Admin.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.streams.push(CMsgDOTALeague_Stream.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.nodeGroups.push(CMsgDOTALeagueNodeGroup.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.seriesInfos.push(CMsgDOTALeague_SeriesInfo.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.registeredPlayers.push(CMsgDOTALeague_Player.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_Info(): CMsgDOTALeague_Info {
  return {
    leagueId: 0,
    name: "",
    tier: 0,
    region: 0,
    url: "",
    description: "",
    notes: "",
    startTimestamp: 0,
    endTimestamp: 0,
    proCircuitPoints: 0,
    imageBits: 0,
    status: 0,
    mostRecentActivity: 0,
    registrationPeriod: 0,
  };
}

export const CMsgDOTALeague_Info = {
  encode(message: CMsgDOTALeague_Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.tier !== 0) {
      writer.uint32(24).int32(message.tier);
    }
    if (message.region !== 0) {
      writer.uint32(32).int32(message.region);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.notes !== "") {
      writer.uint32(58).string(message.notes);
    }
    if (message.startTimestamp !== 0) {
      writer.uint32(64).uint32(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      writer.uint32(72).uint32(message.endTimestamp);
    }
    if (message.proCircuitPoints !== 0) {
      writer.uint32(80).uint32(message.proCircuitPoints);
    }
    if (message.imageBits !== 0) {
      writer.uint32(88).uint32(message.imageBits);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    if (message.mostRecentActivity !== 0) {
      writer.uint32(104).uint32(message.mostRecentActivity);
    }
    if (message.registrationPeriod !== 0) {
      writer.uint32(112).uint32(message.registrationPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_Info {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_Info();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tier = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.startTimestamp = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.endTimestamp = reader.uint32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.proCircuitPoints = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.imageBits = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.mostRecentActivity = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.registrationPeriod = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_Admin(): CMsgDOTALeague_Admin {
  return { accountId: 0, isPrimary: false, emailAddress: "" };
}

export const CMsgDOTALeague_Admin = {
  encode(message: CMsgDOTALeague_Admin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.isPrimary === true) {
      writer.uint32(16).bool(message.isPrimary);
    }
    if (message.emailAddress !== "") {
      writer.uint32(26).string(message.emailAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_Admin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_Admin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isPrimary = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_PrizePoolItem(): CMsgDOTALeague_PrizePoolItem {
  return { itemDef: 0, salesStopTimestamp: 0, revenuePct: 0, revenueCentsPerSale: 0 };
}

export const CMsgDOTALeague_PrizePoolItem = {
  encode(message: CMsgDOTALeague_PrizePoolItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemDef !== 0) {
      writer.uint32(8).uint32(message.itemDef);
    }
    if (message.salesStopTimestamp !== 0) {
      writer.uint32(16).uint32(message.salesStopTimestamp);
    }
    if (message.revenuePct !== 0) {
      writer.uint32(24).uint32(message.revenuePct);
    }
    if (message.revenueCentsPerSale !== 0) {
      writer.uint32(32).uint32(message.revenueCentsPerSale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_PrizePoolItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_PrizePoolItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemDef = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.salesStopTimestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.revenuePct = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.revenueCentsPerSale = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_PrizePool(): CMsgDOTALeague_PrizePool {
  return { basePrizePool: 0, totalPrizePool: 0, prizeSplitPctX100: [], prizePoolItems: [] };
}

export const CMsgDOTALeague_PrizePool = {
  encode(message: CMsgDOTALeague_PrizePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basePrizePool !== 0) {
      writer.uint32(8).uint32(message.basePrizePool);
    }
    if (message.totalPrizePool !== 0) {
      writer.uint32(16).uint32(message.totalPrizePool);
    }
    writer.uint32(26).fork();
    for (const v of message.prizeSplitPctX100) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.prizePoolItems) {
      CMsgDOTALeague_PrizePoolItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_PrizePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_PrizePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.basePrizePool = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalPrizePool = reader.uint32();
          continue;
        case 3:
          if (tag == 24) {
            message.prizeSplitPctX100.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.prizeSplitPctX100.push(reader.uint32());
            }

            continue;
          }

          break;
        case 4:
          if (tag != 34) {
            break;
          }

          message.prizePoolItems.push(CMsgDOTALeague_PrizePoolItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_Stream(): CMsgDOTALeague_Stream {
  return { streamId: 0, language: 0, name: "", broadcastProvider: 0, streamUrl: "", vodUrl: "" };
}

export const CMsgDOTALeague_Stream = {
  encode(message: CMsgDOTALeague_Stream, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.streamId !== 0) {
      writer.uint32(8).uint32(message.streamId);
    }
    if (message.language !== 0) {
      writer.uint32(16).uint32(message.language);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.broadcastProvider !== 0) {
      writer.uint32(32).int32(message.broadcastProvider);
    }
    if (message.streamUrl !== "") {
      writer.uint32(42).string(message.streamUrl);
    }
    if (message.vodUrl !== "") {
      writer.uint32(50).string(message.vodUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_Stream {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_Stream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.streamId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.language = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.broadcastProvider = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.streamUrl = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.vodUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_SeriesInfo(): CMsgDOTALeague_SeriesInfo {
  return { seriesId: 0, seriesType: 0, startTime: 0, matchIds: [], teamId1: 0, teamId2: 0 };
}

export const CMsgDOTALeague_SeriesInfo = {
  encode(message: CMsgDOTALeague_SeriesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seriesId !== 0) {
      writer.uint32(8).uint32(message.seriesId);
    }
    if (message.seriesType !== 0) {
      writer.uint32(16).uint32(message.seriesType);
    }
    if (message.startTime !== 0) {
      writer.uint32(24).uint32(message.startTime);
    }
    writer.uint32(34).fork();
    for (const v of message.matchIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.teamId1 !== 0) {
      writer.uint32(40).uint32(message.teamId1);
    }
    if (message.teamId2 !== 0) {
      writer.uint32(48).uint32(message.teamId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_SeriesInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_SeriesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.seriesType = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.startTime = reader.uint32();
          continue;
        case 4:
          if (tag == 32) {
            message.matchIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.matchIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamId1 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamId2 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeague_Player(): CMsgDOTALeague_Player {
  return { accountId: 0, name: "", teamId: 0 };
}

export const CMsgDOTALeague_Player = {
  encode(message: CMsgDOTALeague_Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== 0) {
      writer.uint32(8).uint32(message.accountId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.teamId !== 0) {
      writer.uint32(24).uint32(message.teamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeague_Player {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeague_Player();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accountId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueList(): CMsgDOTALeagueList {
  return { leagues: [] };
}

export const CMsgDOTALeagueList = {
  encode(message: CMsgDOTALeagueList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leagues) {
      CMsgDOTALeague.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.leagues.push(CMsgDOTALeague.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueInfo(): CMsgDOTALeagueInfo {
  return {
    leagueId: 0,
    name: "",
    tier: 0,
    region: 0,
    mostRecentActivity: 0,
    totalPrizePool: 0,
    startTimestamp: 0,
    endTimestamp: 0,
    status: 0,
  };
}

export const CMsgDOTALeagueInfo = {
  encode(message: CMsgDOTALeagueInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.tier !== 0) {
      writer.uint32(24).int32(message.tier);
    }
    if (message.region !== 0) {
      writer.uint32(32).int32(message.region);
    }
    if (message.mostRecentActivity !== 0) {
      writer.uint32(40).uint32(message.mostRecentActivity);
    }
    if (message.totalPrizePool !== 0) {
      writer.uint32(48).uint32(message.totalPrizePool);
    }
    if (message.startTimestamp !== 0) {
      writer.uint32(56).uint32(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      writer.uint32(64).uint32(message.endTimestamp);
    }
    if (message.status !== 0) {
      writer.uint32(72).uint32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.tier = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mostRecentActivity = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.totalPrizePool = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.startTimestamp = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.endTimestamp = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.status = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueInfoList(): CMsgDOTALeagueInfoList {
  return { infos: [] };
}

export const CMsgDOTALeagueInfoList = {
  encode(message: CMsgDOTALeagueInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.infos) {
      CMsgDOTALeagueInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueInfoList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.infos.push(CMsgDOTALeagueInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueLiveGames(): CMsgDOTALeagueLiveGames {
  return { games: [] };
}

export const CMsgDOTALeagueLiveGames = {
  encode(message: CMsgDOTALeagueLiveGames, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.games) {
      CMsgDOTALeagueLiveGames_LiveGame.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueLiveGames {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueLiveGames();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.games.push(CMsgDOTALeagueLiveGames_LiveGame.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueLiveGames_LiveGame(): CMsgDOTALeagueLiveGames_LiveGame {
  return {
    leagueId: 0,
    serverSteamId: "0",
    radiantName: "",
    radiantLogo: "0",
    radiantTeamId: 0,
    direName: "",
    direLogo: "0",
    direTeamId: 0,
    time: 0,
    spectators: 0,
    leagueNodeId: 0,
    seriesId: 0,
    matchId: "0",
  };
}

export const CMsgDOTALeagueLiveGames_LiveGame = {
  encode(message: CMsgDOTALeagueLiveGames_LiveGame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.serverSteamId !== "0") {
      writer.uint32(16).uint64(message.serverSteamId);
    }
    if (message.radiantName !== "") {
      writer.uint32(26).string(message.radiantName);
    }
    if (message.radiantLogo !== "0") {
      writer.uint32(32).uint64(message.radiantLogo);
    }
    if (message.radiantTeamId !== 0) {
      writer.uint32(72).uint32(message.radiantTeamId);
    }
    if (message.direName !== "") {
      writer.uint32(42).string(message.direName);
    }
    if (message.direLogo !== "0") {
      writer.uint32(48).uint64(message.direLogo);
    }
    if (message.direTeamId !== 0) {
      writer.uint32(80).uint32(message.direTeamId);
    }
    if (message.time !== 0) {
      writer.uint32(56).uint32(message.time);
    }
    if (message.spectators !== 0) {
      writer.uint32(64).uint32(message.spectators);
    }
    if (message.leagueNodeId !== 0) {
      writer.uint32(88).uint32(message.leagueNodeId);
    }
    if (message.seriesId !== 0) {
      writer.uint32(96).uint32(message.seriesId);
    }
    if (message.matchId !== "0") {
      writer.uint32(104).uint64(message.matchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueLiveGames_LiveGame {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueLiveGames_LiveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.serverSteamId = longToString(reader.uint64() as Long);
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.radiantName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.radiantLogo = longToString(reader.uint64() as Long);
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.radiantTeamId = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.direName = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.direLogo = longToString(reader.uint64() as Long);
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.direTeamId = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.time = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.spectators = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.leagueNodeId = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.seriesId = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.matchId = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueMessages(): CMsgDOTALeagueMessages {
  return { messages: [] };
}

export const CMsgDOTALeagueMessages = {
  encode(message: CMsgDOTALeagueMessages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      CMsgDOTALeagueMessages_Message.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueMessages {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueMessages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.messages.push(CMsgDOTALeagueMessages_Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueMessages_Message(): CMsgDOTALeagueMessages_Message {
  return { authorAccountId: 0, timestamp: 0, message: "" };
}

export const CMsgDOTALeagueMessages_Message = {
  encode(message: CMsgDOTALeagueMessages_Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorAccountId !== 0) {
      writer.uint32(8).uint32(message.authorAccountId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueMessages_Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueMessages_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.authorAccountId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeaguePrizePool(): CMsgDOTALeaguePrizePool {
  return { prizePool: 0, incrementPerSecond: 0 };
}

export const CMsgDOTALeaguePrizePool = {
  encode(message: CMsgDOTALeaguePrizePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prizePool !== 0) {
      writer.uint32(8).uint32(message.prizePool);
    }
    if (message.incrementPerSecond !== 0) {
      writer.uint32(21).float(message.incrementPerSecond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeaguePrizePool {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeaguePrizePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.prizePool = reader.uint32();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.incrementPerSecond = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueInfoListAdminsRequest(): CMsgDOTALeagueInfoListAdminsRequest {
  return {};
}

export const CMsgDOTALeagueInfoListAdminsRequest = {
  encode(_: CMsgDOTALeagueInfoListAdminsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueInfoListAdminsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueInfoListAdminsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueAvailableLobbyNodesRequest(): CMsgDOTALeagueAvailableLobbyNodesRequest {
  return { leagueId: 0 };
}

export const CMsgDOTALeagueAvailableLobbyNodesRequest = {
  encode(message: CMsgDOTALeagueAvailableLobbyNodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueAvailableLobbyNodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueAvailableLobbyNodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueAvailableLobbyNodes(): CMsgDOTALeagueAvailableLobbyNodes {
  return { nodeInfos: [] };
}

export const CMsgDOTALeagueAvailableLobbyNodes = {
  encode(message: CMsgDOTALeagueAvailableLobbyNodes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeInfos) {
      CMsgDOTALeagueAvailableLobbyNodes_NodeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueAvailableLobbyNodes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueAvailableLobbyNodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.nodeInfos.push(CMsgDOTALeagueAvailableLobbyNodes_NodeInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueAvailableLobbyNodes_NodeInfo(): CMsgDOTALeagueAvailableLobbyNodes_NodeInfo {
  return { nodeId: 0, nodeName: "", nodeGroupName: "", teamId1: 0, teamId2: 0 };
}

export const CMsgDOTALeagueAvailableLobbyNodes_NodeInfo = {
  encode(message: CMsgDOTALeagueAvailableLobbyNodes_NodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== 0) {
      writer.uint32(8).uint32(message.nodeId);
    }
    if (message.nodeName !== "") {
      writer.uint32(18).string(message.nodeName);
    }
    if (message.nodeGroupName !== "") {
      writer.uint32(26).string(message.nodeGroupName);
    }
    if (message.teamId1 !== 0) {
      writer.uint32(32).uint32(message.teamId1);
    }
    if (message.teamId2 !== 0) {
      writer.uint32(40).uint32(message.teamId2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueAvailableLobbyNodes_NodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueAvailableLobbyNodes_NodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.nodeName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.nodeGroupName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamId1 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.teamId2 = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueNodeResults(): CMsgDOTALeagueNodeResults {
  return { nodeResults: [] };
}

export const CMsgDOTALeagueNodeResults = {
  encode(message: CMsgDOTALeagueNodeResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodeResults) {
      CMsgDOTALeagueNodeResults_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNodeResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNodeResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.nodeResults.push(CMsgDOTALeagueNodeResults_Result.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTALeagueNodeResults_Result(): CMsgDOTALeagueNodeResults_Result {
  return {
    nodeId: 0,
    winningNodeId: 0,
    losingNodeId: 0,
    incomingNodeId1: 0,
    incomingNodeId2: 0,
    teamId1: 0,
    teamId2: 0,
    team1Name: "",
    team2Name: "",
    team1Wins: 0,
    team2Wins: 0,
    winningTeamId: 0,
    losingTeamId: 0,
    hasStarted: false,
    isCompleted: false,
    scheduledTime: 0,
    matchIds: [],
  };
}

export const CMsgDOTALeagueNodeResults_Result = {
  encode(message: CMsgDOTALeagueNodeResults_Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== 0) {
      writer.uint32(8).uint32(message.nodeId);
    }
    if (message.winningNodeId !== 0) {
      writer.uint32(16).uint32(message.winningNodeId);
    }
    if (message.losingNodeId !== 0) {
      writer.uint32(24).uint32(message.losingNodeId);
    }
    if (message.incomingNodeId1 !== 0) {
      writer.uint32(32).uint32(message.incomingNodeId1);
    }
    if (message.incomingNodeId2 !== 0) {
      writer.uint32(40).uint32(message.incomingNodeId2);
    }
    if (message.teamId1 !== 0) {
      writer.uint32(48).uint32(message.teamId1);
    }
    if (message.teamId2 !== 0) {
      writer.uint32(56).uint32(message.teamId2);
    }
    if (message.team1Name !== "") {
      writer.uint32(66).string(message.team1Name);
    }
    if (message.team2Name !== "") {
      writer.uint32(74).string(message.team2Name);
    }
    if (message.team1Wins !== 0) {
      writer.uint32(80).uint32(message.team1Wins);
    }
    if (message.team2Wins !== 0) {
      writer.uint32(88).uint32(message.team2Wins);
    }
    if (message.winningTeamId !== 0) {
      writer.uint32(96).uint32(message.winningTeamId);
    }
    if (message.losingTeamId !== 0) {
      writer.uint32(104).uint32(message.losingTeamId);
    }
    if (message.hasStarted === true) {
      writer.uint32(112).bool(message.hasStarted);
    }
    if (message.isCompleted === true) {
      writer.uint32(120).bool(message.isCompleted);
    }
    if (message.scheduledTime !== 0) {
      writer.uint32(128).uint32(message.scheduledTime);
    }
    writer.uint32(138).fork();
    for (const v of message.matchIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTALeagueNodeResults_Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTALeagueNodeResults_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.winningNodeId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.losingNodeId = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.incomingNodeId1 = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.incomingNodeId2 = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.teamId1 = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.teamId2 = reader.uint32();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.team1Name = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.team2Name = reader.string();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.team1Wins = reader.uint32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.team2Wins = reader.uint32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.winningTeamId = reader.uint32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.losingTeamId = reader.uint32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.hasStarted = reader.bool();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.isCompleted = reader.bool();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.scheduledTime = reader.uint32();
          continue;
        case 17:
          if (tag == 136) {
            message.matchIds.push(longToString(reader.uint64() as Long));
            continue;
          }

          if (tag == 138) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.matchIds.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCLeagueResults(): CMsgDOTADPCLeagueResults {
  return { results: [], points: [], dollars: [] };
}

export const CMsgDOTADPCLeagueResults = {
  encode(message: CMsgDOTADPCLeagueResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CMsgDOTADPCLeagueResults_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.points) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.dollars) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCLeagueResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCLeagueResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.results.push(CMsgDOTADPCLeagueResults_Result.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag == 16) {
            message.points.push(reader.uint32());
            continue;
          }

          if (tag == 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.points.push(reader.uint32());
            }

            continue;
          }

          break;
        case 3:
          if (tag == 24) {
            message.dollars.push(reader.uint32());
            continue;
          }

          if (tag == 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dollars.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCLeagueResults_Result(): CMsgDOTADPCLeagueResults_Result {
  return {
    standing: 0,
    teamId: 0,
    teamName: "",
    teamLogo: "0",
    teamLogoUrl: "",
    points: 0,
    earnings: 0,
    timestamp: 0,
    phase: 0,
    teamAbbreviation: "",
  };
}

export const CMsgDOTADPCLeagueResults_Result = {
  encode(message: CMsgDOTADPCLeagueResults_Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.standing !== 0) {
      writer.uint32(8).uint32(message.standing);
    }
    if (message.teamId !== 0) {
      writer.uint32(16).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(26).string(message.teamName);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(32).uint64(message.teamLogo);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(42).string(message.teamLogoUrl);
    }
    if (message.points !== 0) {
      writer.uint32(48).uint32(message.points);
    }
    if (message.earnings !== 0) {
      writer.uint32(56).uint32(message.earnings);
    }
    if (message.timestamp !== 0) {
      writer.uint32(64).uint32(message.timestamp);
    }
    if (message.phase !== 0) {
      writer.uint32(72).int32(message.phase);
    }
    if (message.teamAbbreviation !== "") {
      writer.uint32(82).string(message.teamAbbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCLeagueResults_Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCLeagueResults_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.standing = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.teamLogo = longToString(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamLogoUrl = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.points = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.earnings = reader.uint32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.phase = reader.int32() as any;
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.teamAbbreviation = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCTeamResults(): CMsgDOTADPCTeamResults {
  return { results: [] };
}

export const CMsgDOTADPCTeamResults = {
  encode(message: CMsgDOTADPCTeamResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CMsgDOTADPCTeamResults_Result.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCTeamResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCTeamResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.results.push(CMsgDOTADPCTeamResults_Result.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCTeamResults_Result(): CMsgDOTADPCTeamResults_Result {
  return { leagueId: 0, standing: 0, points: 0, earnings: 0, timestamp: 0 };
}

export const CMsgDOTADPCTeamResults_Result = {
  encode(message: CMsgDOTADPCTeamResults_Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leagueId !== 0) {
      writer.uint32(8).uint32(message.leagueId);
    }
    if (message.standing !== 0) {
      writer.uint32(16).uint32(message.standing);
    }
    if (message.points !== 0) {
      writer.uint32(24).uint32(message.points);
    }
    if (message.earnings !== 0) {
      writer.uint32(32).uint32(message.earnings);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCTeamResults_Result {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCTeamResults_Result();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.standing = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.points = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.earnings = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCSeasonResults(): CMsgDOTADPCSeasonResults {
  return { results: [], standings: [], majorWildcardStandings: [], majorGroupStandings: [], majorPlayoffStandings: [] };
}

export const CMsgDOTADPCSeasonResults = {
  encode(message: CMsgDOTADPCSeasonResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      CMsgDOTADPCSeasonResults_TeamResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.standings) {
      CMsgDOTADPCSeasonResults_Standing.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.majorWildcardStandings) {
      CMsgDOTADPCSeasonResults_StandingEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.majorGroupStandings) {
      CMsgDOTADPCSeasonResults_StandingEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.majorPlayoffStandings) {
      CMsgDOTADPCSeasonResults_StandingEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSeasonResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSeasonResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.results.push(CMsgDOTADPCSeasonResults_TeamResult.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.standings.push(CMsgDOTADPCSeasonResults_Standing.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.majorWildcardStandings.push(CMsgDOTADPCSeasonResults_StandingEntry.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.majorGroupStandings.push(CMsgDOTADPCSeasonResults_StandingEntry.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.majorPlayoffStandings.push(CMsgDOTADPCSeasonResults_StandingEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCSeasonResults_TeamLeagueResult(): CMsgDOTADPCSeasonResults_TeamLeagueResult {
  return { timestamp: 0, leagueId: 0, standing: 0, points: 0, earnings: 0, auditAction: 0, auditData: 0 };
}

export const CMsgDOTADPCSeasonResults_TeamLeagueResult = {
  encode(message: CMsgDOTADPCSeasonResults_TeamLeagueResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.leagueId !== 0) {
      writer.uint32(16).uint32(message.leagueId);
    }
    if (message.standing !== 0) {
      writer.uint32(24).uint32(message.standing);
    }
    if (message.points !== 0) {
      writer.uint32(32).uint32(message.points);
    }
    if (message.earnings !== 0) {
      writer.uint32(40).uint32(message.earnings);
    }
    if (message.auditAction !== 0) {
      writer.uint32(48).uint32(message.auditAction);
    }
    if (message.auditData !== 0) {
      writer.uint32(56).uint32(message.auditData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSeasonResults_TeamLeagueResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSeasonResults_TeamLeagueResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timestamp = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.leagueId = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.standing = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.points = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.earnings = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.auditAction = reader.uint32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.auditData = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCSeasonResults_TeamResult(): CMsgDOTADPCSeasonResults_TeamResult {
  return {
    teamId: 0,
    teamName: "",
    teamAbbreviation: "",
    teamLogo: "0",
    teamLogoUrl: "",
    totalPoints: 0,
    totalEarnings: 0,
    leagueResults: [],
  };
}

export const CMsgDOTADPCSeasonResults_TeamResult = {
  encode(message: CMsgDOTADPCSeasonResults_TeamResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.teamName !== "") {
      writer.uint32(18).string(message.teamName);
    }
    if (message.teamAbbreviation !== "") {
      writer.uint32(66).string(message.teamAbbreviation);
    }
    if (message.teamLogo !== "0") {
      writer.uint32(24).uint64(message.teamLogo);
    }
    if (message.teamLogoUrl !== "") {
      writer.uint32(34).string(message.teamLogoUrl);
    }
    if (message.totalPoints !== 0) {
      writer.uint32(40).uint32(message.totalPoints);
    }
    if (message.totalEarnings !== 0) {
      writer.uint32(48).uint32(message.totalEarnings);
    }
    for (const v of message.leagueResults) {
      CMsgDOTADPCSeasonResults_TeamLeagueResult.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSeasonResults_TeamResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSeasonResults_TeamResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.teamAbbreviation = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.teamLogo = longToString(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamLogoUrl = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.totalPoints = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.totalEarnings = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.leagueResults.push(CMsgDOTADPCSeasonResults_TeamLeagueResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCSeasonResults_StandingEntry(): CMsgDOTADPCSeasonResults_StandingEntry {
  return { teamId: 0, wins: 0, losses: 0, teamUrl: "", teamName: "", teamAbbreviation: "" };
}

export const CMsgDOTADPCSeasonResults_StandingEntry = {
  encode(message: CMsgDOTADPCSeasonResults_StandingEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.teamId !== 0) {
      writer.uint32(8).uint32(message.teamId);
    }
    if (message.wins !== 0) {
      writer.uint32(16).uint32(message.wins);
    }
    if (message.losses !== 0) {
      writer.uint32(24).uint32(message.losses);
    }
    if (message.teamUrl !== "") {
      writer.uint32(34).string(message.teamUrl);
    }
    if (message.teamName !== "") {
      writer.uint32(42).string(message.teamName);
    }
    if (message.teamAbbreviation !== "") {
      writer.uint32(50).string(message.teamAbbreviation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSeasonResults_StandingEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSeasonResults_StandingEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.teamId = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.wins = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.losses = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.teamUrl = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.teamName = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.teamAbbreviation = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCSeasonResults_Standing(): CMsgDOTADPCSeasonResults_Standing {
  return { region: 0, division: 0, entries: [] };
}

export const CMsgDOTADPCSeasonResults_Standing = {
  encode(message: CMsgDOTADPCSeasonResults_Standing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region !== 0) {
      writer.uint32(8).int32(message.region);
    }
    if (message.division !== 0) {
      writer.uint32(16).int32(message.division);
    }
    for (const v of message.entries) {
      CMsgDOTADPCSeasonResults_StandingEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSeasonResults_Standing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSeasonResults_Standing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.region = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.division = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entries.push(CMsgDOTADPCSeasonResults_StandingEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCMsgDOTADPCSeasonSpoilerResults(): CMsgDOTADPCSeasonSpoilerResults {
  return { timeLastUpdated: 0, savedResults: undefined };
}

export const CMsgDOTADPCSeasonSpoilerResults = {
  encode(message: CMsgDOTADPCSeasonSpoilerResults, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeLastUpdated !== 0) {
      writer.uint32(8).uint32(message.timeLastUpdated);
    }
    if (message.savedResults !== undefined) {
      CMsgDOTADPCSeasonResults.encode(message.savedResults, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CMsgDOTADPCSeasonSpoilerResults {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCMsgDOTADPCSeasonSpoilerResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.timeLastUpdated = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.savedResults = CMsgDOTADPCSeasonResults.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
