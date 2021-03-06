import { Inject, InjectionToken, Injector, ModuleWithProviders, NgModule, OnDestroy, Optional, } from '@angular/core';

import { Action, combineReducers, MetaReducer, ReducerManager, StoreModule, } from '@ngrx/store';

import {
  CorrelationIdGenerator,
  DefaultLogger,
  ENTITY_CACHE_META_REDUCERS,
  ENTITY_CACHE_NAME,
  ENTITY_CACHE_NAME_TOKEN,
  ENTITY_COLLECTION_META_REDUCERS,
  EntityCache,
  entityCacheSelectorProvider,
  EntityDefinitionService,
  EntityDispatcherDefaultOptions,
  EntityMetadataMap,
  INITIAL_ENTITY_CACHE_STATE,
  Logger,
  PLURAL_NAMES_TOKEN
} from '@ngrx/data';
import { EntityAction } from './actions/entity-action';
import { EntityActionFactory } from './actions/entity-action-factory';
import { EntityCacheDispatcher } from './dispatchers/entity-cache-dispatcher';
import { EntityCollectionServiceElementsFactory } from './entity-services/entity-collection-service-elements-factory';
import { EntityCollectionServiceFactory } from './entity-services/entity-collection-service-factory';
import { EntityServices } from './entity-services/entity-services';
import { EntityCollection } from './reducers/entity-collection';
import { EntityCollectionCreator } from './reducers/entity-collection-creator';
import { EntityCollectionReducerFactory } from './reducers/entity-collection-reducer';
import { EntityCollectionReducerMethodsFactory } from './reducers/entity-collection-reducer-methods';
import { EntityCollectionReducerRegistry } from './reducers/entity-collection-reducer-registry';
import { EntityDispatcherFactory } from './dispatchers/entity-dispatcher-factory';
import { EntityCacheReducerFactory } from './reducers/entity-cache-reducer';
import { EntitySelectorsFactory } from './selectors/entity-selectors';
import { EntitySelectors$Factory } from './selectors/entity-selectors$';
import { EntityServicesBase } from './entity-services/entity-services-base';
import { EntityServicesElements } from './entity-services/entity-services-elements';
import { DefaultDataServiceConfig } from './dataservices/default-data-service-config';

export interface EntityDataModuleConfig {
  entityMetadata?: EntityMetadataMap;
  entityCacheMetaReducers?: (
    | MetaReducer<EntityCache, Action>
    | InjectionToken<MetaReducer<EntityCache, Action>>
  )[];
  entityCollectionMetaReducers?: MetaReducer<EntityCollection, EntityAction>[];
  // Initial EntityCache state or a function that returns that state
  initialEntityCacheState?: EntityCache | (() => EntityCache);
  pluralNames?: { [name: string]: string };
  dataServiceConfig?: Partial<DefaultDataServiceConfig>;
}

/**
 * Module without effects or dataservices which means no HTTP calls
 * This module helpful for internal testing.
 * Also helpful for apps that handle server access on their own and
 * therefore opt-out of @ngrx/effects for entities
 */
@NgModule({
  imports: [
    StoreModule, // rely on Store feature providers rather than Store.forFeature()
  ],
  providers: [
    CorrelationIdGenerator,
    EntityDispatcherDefaultOptions,
    EntityActionFactory,
    EntityCacheDispatcher,
    EntityCacheReducerFactory,
    entityCacheSelectorProvider,
    EntityCollectionCreator,
    EntityCollectionReducerFactory,
    EntityCollectionReducerMethodsFactory,
    EntityCollectionReducerRegistry,
    EntityCollectionServiceElementsFactory,
    EntityCollectionServiceFactory,
    EntityDefinitionService,
    EntityDispatcherFactory,
    EntitySelectorsFactory,
    EntitySelectors$Factory,
    EntityServicesElements,
    { provide: ENTITY_CACHE_NAME_TOKEN, useValue: ENTITY_CACHE_NAME },
    { provide: EntityServices, useClass: EntityServicesBase },
    { provide: Logger, useClass: DefaultLogger },
  ],
})
export class EntityDataModuleWithoutEffects implements OnDestroy {
  private entityCacheFeature: any;

  static forRoot(
    config: EntityDataModuleConfig
  ): ModuleWithProviders<EntityDataModuleWithoutEffects> {
    return {
      ngModule: EntityDataModuleWithoutEffects,
      providers: [
        {
          provide: ENTITY_CACHE_META_REDUCERS,
          useValue: config.entityCacheMetaReducers
            ? config.entityCacheMetaReducers
            : [],
        },
        {
          provide: ENTITY_COLLECTION_META_REDUCERS,
          useValue: config.entityCollectionMetaReducers
            ? config.entityCollectionMetaReducers
            : [],
        },
        {
          provide: PLURAL_NAMES_TOKEN,
          multi: true,
          useValue: config.pluralNames ? config.pluralNames : {},
        },
      ],
    };
  }

  constructor(
    private reducerManager: ReducerManager,
    entityCacheReducerFactory: EntityCacheReducerFactory,
    private injector: Injector,
    // optional params
    @Optional()
    @Inject(ENTITY_CACHE_NAME_TOKEN)
    private entityCacheName: string,
    @Optional()
    @Inject(INITIAL_ENTITY_CACHE_STATE)
    private initialState: any,
    @Optional()
    @Inject(ENTITY_CACHE_META_REDUCERS)
    private metaReducers: (
      | MetaReducer<EntityCache, Action>
      | InjectionToken<MetaReducer<EntityCache, Action>>
    )[]
  ) {
    // Add the @ngrx/data feature to the Store's features
    // as Store.forFeature does for StoreFeatureModule
    const key = entityCacheName || ENTITY_CACHE_NAME;

    initialState =
      typeof initialState === 'function' ? initialState() : initialState;

    const reducers: MetaReducer<EntityCache, Action>[] = (
      metaReducers || []
    ).map((mr) => {
      return mr instanceof InjectionToken ? injector.get(mr) : mr;
    });

    this.entityCacheFeature = {
      key,
      reducers: entityCacheReducerFactory.create(),
      reducerFactory: combineReducers,
      initialState: initialState || {},
      metaReducers: reducers,
    };
    reducerManager.addFeature(this.entityCacheFeature);
  }

  ngOnDestroy() {
    this.reducerManager.removeFeature(this.entityCacheFeature);
  }
}
