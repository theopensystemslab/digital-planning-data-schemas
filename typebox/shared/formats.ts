import {FormatRegistry} from '@sinclair/typebox';

// https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts

// Register a custom format for date-time strings (YYYY-MM-DDTHH:mm:ss)
FormatRegistry.Set('date-time', value => {
  // eslint-disable-next-line no-useless-escape
  return /^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([\+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))$/.test(
    value,
  );
});

// Register a custom format for dates (YYYY-MM-DD)
FormatRegistry.Set('date', value => {
  return /^([0-9]{4})-((0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))$/.test(value);
});

// Register a custom format for URIs
FormatRegistry.Set('uri', value => {
  return /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i.test(value);
});

// Email
FormatRegistry.Set('email', value => {
  return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
    value,
  );
});
