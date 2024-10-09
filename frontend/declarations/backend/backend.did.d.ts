import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Participant { 'name' : string, 'surname' : string }
export interface _SERVICE {
  'addParticipant' : ActorMethod<[string, string], undefined>,
  'getParticipants' : ActorMethod<[], Array<Participant>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
