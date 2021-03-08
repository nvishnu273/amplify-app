/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncPlanTrees = /* GraphQL */ `
  query SyncPlanTrees(
    $filter: ModelPlanTreeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlanTrees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        tree {
          id
          name
          type
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlanTree = /* GraphQL */ `
  query GetPlanTree($id: ID!) {
    getPlanTree(id: $id) {
      id
      name
      tree {
        id
        name
        type
        parentID
        children {
          id
          name
          type
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlanTrees = /* GraphQL */ `
  query ListPlanTrees(
    $filter: ModelPlanTreeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanTrees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        tree {
          id
          name
          type
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlanElements = /* GraphQL */ `
  query SyncPlanElements(
    $filter: ModelPlanElementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlanElements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        parentID
        children {
          id
          name
          type
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlanElement = /* GraphQL */ `
  query GetPlanElement($id: ID!) {
    getPlanElement(id: $id) {
      id
      name
      type
      parentID
      children {
        id
        name
        type
        parentID
        children {
          id
          name
          type
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlanElements = /* GraphQL */ `
  query ListPlanElements(
    $filter: ModelPlanElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        parentID
        children {
          id
          name
          type
          parentID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
