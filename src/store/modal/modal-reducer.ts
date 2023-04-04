export const isModal = {
	type: 'IS_MODAL',
};

export const modalReducer = (
	state = false,
	action: { type: string }
): boolean => {
	switch (action.type) {
		case 'IS_MODAL':
			return !state;
		default:
			return state;
	}
};
