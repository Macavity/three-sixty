import { GASClient } from 'gas-client';
import * as publicServerFunctions from '../../server/index';

const { serverFunctions } = new GASClient<typeof publicServerFunctions>({
  // this is necessary for local development but will be ignored in production
  allowedDevelopmentDomains: (origin) =>
    /https:\/\/script\.google\.com$/.test(origin),
});

export { serverFunctions };
