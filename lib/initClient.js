import { ApolloClient, createNetworkInterface } from 'react-apollo';

let apolloClient = null;

function _initClient(headers, initialState) {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/cj26t44p1zfsl0115otvby3gk',
      opts: {
        credentials: 'same-origin'
      }
    })
  });
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState);
  }

  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState);
  }

  return apolloClient;
}
