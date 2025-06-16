import * as uuid from "uuid";
import { Resource } from "sst";
import { Util } from "@notes/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
  let data = {
    content: "",
    attachment: "",
  };

  if (event.body != null) {
    data = JSON.parse(event.body);
  };

  const params = {
    TableName: Resource.Notes.name,
    Item: {
      // The attributes of the item to be created
      userId: "123", // author id
      noteId: uuid.v1(), // unique uuid
      content: data.content, // parsed from request body
      attachment: data.attachment, // parsed from request body
      createdAt: Date.now(), // current Unix timestamp
    },
  };

  await dynamoDb.send(new PutCommand(params));

  return JSON.stringify(params.Item);
});
