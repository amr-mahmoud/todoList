import ApolloClient from 'apollo-boost';

export const API_SERVICE = {
	MYTASK_API: new ApolloClient({
		uri: 'https://api-euwest.graphcms.com/v1/ck75bq3rr0k5i01cyf9p599sh/master',
	}),
};
