// actions
export { EntityActionFactory } from './actions/entity-action-factory';
export { EntityActionGuard } from './actions/entity-action-guard';
export { ofEntityOp, ofEntityType } from './actions/entity-action-operators';
export {
  EntityAction,
  EntityActionPayload,
} from './actions/entity-action';

export {
  EntityOp,
  makeErrorOp,
  makeSuccessOp,
} from './actions/entity-op';

// // dataservices
export { DataServiceError } from './dataservices/data-service-error';
export { EntityActionDataServiceError } from './dataservices/data-service-error';
export { DefaultDataServiceConfig } from './dataservices/default-data-service-config';
export { DefaultDataService } from './dataservices/default-data.service';
export { DefaultDataServiceFactory } from './dataservices/default-data.service';
export { EntityCacheDataService } from './dataservices/entity-cache-data.service';
export { EntityDataService } from './dataservices/entity-data.service';
export { DefaultHttpUrlGenerator } from './dataservices/http-url-generator';
export * from './dataservices/interfaces';
export {
  PersistenceResultHandler,
  DefaultPersistenceResultHandler,
} from './dataservices/persistence-result-handler.service';

// // dispatchers
export { EntityCacheDispatcher } from './dispatchers/entity-cache-dispatcher';
export {
  EntityServerCommands,
  EntityCacheCommands,
  EntityCommands,
} from './dispatchers/entity-commands';
export { EntityDispatcherBase } from './dispatchers/entity-dispatcher-base';
export { EntityDispatcherFactory } from './dispatchers/entity-dispatcher-factory';
export {
  EntityDispatcher,
  PersistanceCanceled,
} from './dispatchers/entity-dispatcher';

// // effects
export { EntityCacheEffects } from './effects/entity-cache-effects';
export { persistOps, EntityEffects } from './effects/entity-effects';

// // entity-services
export { EntityCollectionServiceBase } from './entity-services/entity-collection-service-base';
export {
  EntityCollectionServiceElements,
  EntityCollectionServiceElementsFactory,
} from './entity-services/entity-collection-service-elements-factory';
export { EntityCollectionServiceFactory } from './entity-services/entity-collection-service-factory';
export { EntityCollectionService } from './entity-services/entity-collection-service';
export { EntityServicesBase } from './entity-services/entity-services-base';
export { EntityServicesElements } from './entity-services/entity-services-elements';
export {
  EntityServices,
  EntityCollectionServiceMap,
} from './entity-services/entity-services';

// // reducers
export { EntityCacheReducerFactory } from './reducers/entity-cache-reducer';
export { EntityCache } from './reducers/entity-cache';
export {
  EntityCollectionCreator,
  createEmptyEntityCollection,
} from './reducers/entity-collection-creator';
export {
  EntityCollectionReducerMethodMap,
  EntityCollectionReducerMethods,
  EntityCollectionReducerMethodsFactory,
} from './reducers/entity-collection-reducer-methods';
export {
  EntityCollectionReducers,
  EntityCollectionReducerRegistry,
} from './reducers/entity-collection-reducer-registry';
export {
  EntityCollectionReducer,
  EntityCollectionReducerFactory,
} from './reducers/entity-collection-reducer';
export {
  ChangeType,
  ChangeState,
  ChangeStateMap,
  EntityCollection,
} from './reducers/entity-collection';

// // selectors
export {
  CollectionSelectors,
  EntitySelectors,
  EntitySelectorsFactory,
} from './selectors/entity-selectors';
export {
  EntitySelectors$,
  EntitySelectors$Factory,
} from './selectors/entity-selectors$';

// // Utils
export { DefaultPluralizer } from './utils/default-pluralizer';
export * from './utils/page';

// // EntityDataModule
export {
  EntityDataModuleConfig,
  EntityDataModuleWithoutEffects,
} from './entity-data-without-effects.module';
export { EntityDataModule } from './entity-data.module';
