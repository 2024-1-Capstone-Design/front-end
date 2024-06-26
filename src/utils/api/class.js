import { client } from "./base";
import { privateHeaders } from "./base";

export const getClassList = async () => {
  let returnValue;

  await client
    .get(`/api/v1/group`, 
      {
        params: {

        },
        headers: privateHeaders
      }
    )
    .then((res) => {
      returnValue = res
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}

export const getClass = async (classId) => {
  let returnValue;

  await client
    .get(`/api/v1/group/${classId}`,
      {
        headers: privateHeaders
      }
    )
    .then((res) => {
      returnValue = res
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}

export const createClass = async (groupName, description) => {
  let returnValue;

  await client
    .post(`/api/v1/group`,
      {
        groupName: groupName,
        description: description,
      },
      {
        headers: privateHeaders
      }
    )
    .then((res) => {
      console.log(res);
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}

export const removeClass = async (groupId) => {
  let returnValue;

  await client 
    .delete(`/api/v1/group/${groupId}`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
    return returnValue;
}

export const getClassSet = async (groupId) => {
  let returnValue;

  await client
    .get(`/api/v1/group/${groupId}/recent`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
    return returnValue;
}

export const getClassSetList = async (groupId) => {
  let returnValue;

  await client
    .get(`/api/v1/workbook/group/${groupId}/workbook`, {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
    return returnValue;
}

export const addClassSet = async (groupId, workbookId) => {
  let returnValue;

  await client
    .get(`/api/v1/workbook/group/${groupId}/workbook/${workbookId}`,
      {
        headers: privateHeaders
      })
    .then((res) => {
      console.log(res);
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}

export const removeClassSet = async (groupId, workbookId) => {
  let returnValue;

  await client 
    .delete(`/api/v1/workbook/group/${groupId}/workbooks/${workbookId}`, 
    {
      headers: privateHeaders,
    })
    .then((res) => {
      returnValue = res;
    })
    .catch((err) => {
      console.log(err);
    })
  return returnValue;
}