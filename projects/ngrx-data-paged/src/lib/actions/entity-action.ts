import { Action } from '@ngrx/store';

import { EntityOp } from './entity-op';
import { EntityActionOptions } from '@ngrx/data';

/** Action concerning an entity collection. */
export interface EntityAction<P = any> extends Action {
  readonly type: string;
  readonly payload: EntityActionPayload<P>;
}

/** Payload of an EntityAction */
export interface EntityActionPayload<P = any> extends EntityActionOptions {
  readonly entityName: string;
  readonly entityOp: EntityOp;
  readonly data?: P;
}
