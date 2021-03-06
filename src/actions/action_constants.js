export const STATUS = {
	INITIAL:	'INITIAL',
	REQUESTED:	'REQUESTED',
	AVAILABLE:	'AVAILABLE',
	ERROR: 		'ERROR'
};

export const FETCH_ALL_STOCKS = {
	INITIATE:	'FETCH_ALL_STOCKS_INITIATE',
	PENDING:	'FETCH_ALL_STOCKS_PENDING',
	SUCCESS:	'FETCH_ALL_STOCKS_SUCCESS',
	REJECTED:	'FETCH_ALL_STOCKS_REJECTED'
};

export const FETCH_WATCHLIST = {
	INITIATE:	'FETCH_WATCHLIST_INITIATE',
	PENDING:	'FETCH_WATCHLIST_PENDING',
	SUCCESS:	'FETCH_WATCHLIST_SUCCESS',
	REJECTED:	'FETCH_WATCHLIST_REJECTED',
	UPDATE:		'FETCH_WATCHLIST_UPDATE'
};

export const LOGIN_USER = {
	INITIATE:	'LOGIN_USER_INITIATE',
	PENDING:	'LOGIN_USER_PENDING',
	SUCCESS:	'LOGIN_USER_SUCCESS',
	REJECTED:	'LOGIN_USER_REJECTED',
	LOGOUT:		'LOGOUT_USER',
	CLEAN_ERROR:'CLEAN_ERROR'
}

export const REGISTER_USER = {
	INITIATE:	'REGISTER_USER_INITIATE',
	PENDING:	'REGISTER_USER_PENDING',
	SUCCESS:	'REGISTER_USER_SUCCESS',
	REJECTED:	'REGISTER_USER_REJECTED',
}

export const SEARCH = {
	INITIATE:	'SEARCH_INITIATE',
	PENDING:	'SEARCH_PENDING',
	SUCCESS:	'SEARCH_SUCCESS',
	REJECTED:	'SEARCH_REJECTED',
	CLEAR:		'SEARCH_CLEAR',
}

export const FETCH_PORTFOLIO = {
	INITIATE:	'FETCH_PORTFOLIO_INITIATE',
	PENDING:	'FETCH_PORTFOLIO_PENDING',
	SUCCESS:	'FETCH_PORTFOLIO_SUCCESS',
	REJECTED:	'FETCH_PORTFOLIO_REJECTED',
	ADD:		'PORTFOLIO_ADD',
}

export const FETCH_TRADES = {
	INITIATE:	'FETCH_TRADES_INITIATE',
	PENDING:	'FETCH_TRADES_PENDING',
	SUCCESS:	'FETCH_TRADES_SUCCESS',
	REJECTED:	'FETCH_TRADES_REJECTED',
}

export const FETCH_COMMON_DETAILS = {
	INITIATE:	'FETCH_COMMON_DETAILS_INITIATE',
	PENDING:	'FETCH_COMMON_DETAILS_PENDING',
	SUCCESS:	'FETCH_COMMON_DETAILS_SUCCESS',
	REJECTED:	'FETCH_COMMON_DETAILS_REJECTED',
}

export const FETCH_HISTORY = {
	INITIATE:	'FETCH_HISTORY_INITIATE',
	PENDING:	'FETCH_HISTORY_PENDING',
	SUCCESS:	'FETCH_HISTORY_SUCCESS',
	REJECTED:	'FETCH_HISTORY_REJECTED',
}

export const ACTION_URLS = {
	LOGIN_USER: '/api/auth/login',
	REGISTER_USER: '/api/auth/register',
	COMMON_DETAILS_URL: '/api/common_details',
	GET_ALL_STOCKS_LIST: '/api/get_stocks',
	WATCHLIST: '/api/watchlist',
	SEARCH: '/api/search/',
	PORTFOLIO: '/api/portfolio_overview',
	ADD_TO_PORTFOLIO: '/api/add_to_portfolio',
	FETCH_HISTORY_URL: '/api/hist/',
	TRADES: '/api/trades'
};

export const SET_STATE_MOBILE = 'SET_STATE_MOBILE';
export const SET_QUICK_VIEW = 'SET_QUICK_VIEW';
export const SHOW_ALERT = 'SHOW_ALERT';