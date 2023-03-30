# CommuniQate API wrappers for NodeJS


___
#### NodeJS - Send Template Message

This is an example of how to send a template message with the CommuniQate api.

```javascript
const { ApiClient } = require('@acn-cloud/communiqate-api-js');

const apiKey = 'API_KEY_HERE';

const communiqateApi = new ApiClient(apiKey);

const messageData = {
  scheduled_at: '2023-03-30T09:33:04Z', //Time in UTC
  template_message_id: 'ID_OF_THE_TEMPLATE_MESSAGE',
  variables: {
    body: ['variable 1', 'variable 2', 'etc'],
  },
  contact: {
    first_name: 'Voornaam',
    last_name: 'Achternaam'
  };
}

const { success, data, message } = await communiqateApi.conversations()
  .sendMessage('+316--------', messageData);

if (success) {
  //success action
  console.log('success: ', data);
} else {
  //error action
  console.error('error: ', message);
}
```
___

#### NodeJS - Cancel Message

This is an example of how to cancel a sent template message with the CommuniQate api.

```javascript
const { ApiClient } = require('@acn-cloud/communiqate-api-js');

const apiKey = 'API_KEY_HERE';

const communiqateApi = new ApiClient(apiKey);

const messageData = {
  message_id: 'MESSAGE_TO_CANCEL',
}

const { success, data, message } = await communiqateApi.conversations()
  .deleteMessage('+316--------', messageData);

if (success) {
  //success action
  console.log('success: ', data);
} else {
  //error action
  console.error('error: ', message);
}
```
___

#### NodeJS - Update Message

This is an example of how to update a sent template message with the CommuniQate api. Only the scheduled_at variable can be updated.

```javascript
const { ApiClient } = require('@acn-cloud/communiqate-api-js');

const apiKey = 'API_KEY_HERE';

const communiqateApi = new ApiClient(apiKey);

const messageData = {
  scheduled_at: 'NEW_DATE_TO_SCHEDULE (ISO-8601 @ UTC)',
  message_id: 'MESSAGE_TO_CANCEL',
}

const { success, data, message } = await communiqateApi.conversations()
  .updateMessage('+316--------', messageData);

if (success) {
  //success action
  console.log('success: ', data);
} else {
  //error action
  console.error('error: ', message);
}
```


#### PhoneNumber

All phone numbers should be in "+31 6 12345678" format. Including the country code "+31" (with +).

example: 0612345678 = +31612345678
___

#### MessageData
The MessageData object

| **scheduled_at**                | **template_message_id**         | **variables**    | **variables.body**             |
|---------------------------------|---------------------------------|------------------|--------------------------------|
| optional                        | required                        | optional         | optional                       |
| ISO 8601 date-time string       | string                          | Variables Object | string[]                       |
| Leave empty to send immediately | CommuniQate template message ID | -                | The template message variables |

For dates please use a ISO-8601 string. Send all strings in UTC time +0. For example:

Please send: ```2023-03-30T09:33:04Z```

Do not send: ```2023-03-30T09:33:04+02:00```

____

Route: ```https://api.communiqate.nl/api/v1 ```

**Message Route**
```https://api.communiqate.nl/api/v1/conversations/+31612345678/messages ```

Allowed Methods:
POST / PATCH / DELETE
