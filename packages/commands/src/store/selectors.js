/**
 * External dependencies
 */
import createSelector from 'rememo';

function unique( array ) {
	return array.filter(
		( value, index, current ) => current.indexOf( value ) === index
	);
}

export const getGroups = createSelector(
	( state ) =>
		unique(
			Object.keys( state.commands ).concat(
				Object.keys( state.commandLoaders )
			)
		),
	( state ) => [ state.commands, state.commandLoaders ]
);

export const getCommands = createSelector(
	( state, group ) => Object.values( state.commands[ group ] ?? {} ),
	( state, group ) => [ state.commands[ group ] ]
);

export const getCommandLoaders = createSelector(
	( state, group ) => Object.values( state.commandLoaders[ group ] ?? {} ),
	( state, group ) => [ state.commandLoaders[ group ] ]
);

export function isOpen( state ) {
	return state.isOpen;
}

export function getContext( state ) {
	return state.context;
}

export const getContextualCommands = createSelector(
	( state, group ) => {
		return getCommands( state, group ).filter(
			( command ) => command.context === state.context
		);
	},
	( state, group ) => [ state.commands[ group ], state.context ]
);

export const getContextualCommandLoaders = createSelector(
	( state, group ) => {
		return getCommandLoaders( state, group ).filter(
			( loader ) => loader.context === state.context
		);
	},
	( state, group ) => [ state.commandLoaders[ group ], state.context ]
);
