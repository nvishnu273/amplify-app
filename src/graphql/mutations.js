/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlanTree = /* GraphQL */ `
  mutation CreatePlanTree(
    $input: CreatePlanTreeInput!
    $condition: ModelPlanTreeConditionInput
  ) {
    createPlanTree(input: $input, condition: $condition) {
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
export const updatePlanTree = /* GraphQL */ `
  mutation UpdatePlanTree(
    $input: UpdatePlanTreeInput!
    $condition: ModelPlanTreeConditionInput
  ) {
    updatePlanTree(input: $input, condition: $condition) {
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
export const deletePlanTree = /* GraphQL */ `
  mutation DeletePlanTree(
    $input: DeletePlanTreeInput!
    $condition: ModelPlanTreeConditionInput
  ) {
    deletePlanTree(input: $input, condition: $condition) {
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
export const createPlanElement = /* GraphQL */ `
  mutation CreatePlanElement(
    $input: CreatePlanElementInput!
    $condition: ModelPlanElementConditionInput
  ) {
    createPlanElement(input: $input, condition: $condition) {
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
export const updatePlanElement = /* GraphQL */ `
  mutation UpdatePlanElement(
    $input: UpdatePlanElementInput!
    $condition: ModelPlanElementConditionInput
  ) {
    updatePlanElement(input: $input, condition: $condition) {
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
export const deletePlanElement = /* GraphQL */ `
  mutation DeletePlanElement(
    $input: DeletePlanElementInput!
    $condition: ModelPlanElementConditionInput
  ) {
    deletePlanElement(input: $input, condition: $condition) {
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
