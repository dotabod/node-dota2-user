const debug = require('debug')('dota2-user:router');

import { ExtendedEventEmitter, TypedEmitter, getProtobufForMessage } from './utils';
import { GCEvents as BaseGCEvents, GCProtobufs } from './protobufs/protobuf-mappings';

// Extend the base interface to add the job event and dynamic event support
export interface GCEvents extends BaseGCEvents {
    job: (jobId: number, payload: Buffer) => void;
    message: (msgType: number, payload: Buffer) => void;
    [key: string]: (...args: any[]) => void;
}

export class Router extends (ExtendedEventEmitter as unknown as new () => TypedEmitter<GCEvents>) {
    route(messageId: number, body: Buffer): void {
        // let msgName = getMessageName(msgType) || msgType;
        // TODO when we import all the protos, find message name instead of printing just the messageId
        if (!(messageId in GCProtobufs)) {
            debug("Not routing message %s as it's not a GC message", messageId);
            return;
        }
        const protobuf = getProtobufForMessage(messageId);
        if (!protobuf) {
            debug('No route available for GC message: %s', messageId);
            return;
        }
        const data = protobuf.decode(body);
        debug('Routing GC message: %s', messageId);
        this.emit(messageId as keyof GCEvents, data as any);

        // Also emit a generic message event that includes the messageId
        this.emit('message', messageId, body);
    }
}
