/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { edit, seen } from '@wordpress/icons';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import StyleVariationsContainer from '../global-styles/style-variations-container';
import { unlock } from '../../private-apis';
import { store as editSiteStore } from '../../store';
import SidebarButton from '../sidebar-button';

export default function SidebarNavigationScreenGlobalStyles() {
	const { openGeneralSidebar } = useDispatch( editSiteStore );
	const { setCanvasMode, setEditorCanvasContainerView } = unlock(
		useDispatch( editSiteStore )
	);

	const openGlobalStyles = async () =>
		Promise.all( [
			setCanvasMode( 'edit' ),
			openGeneralSidebar( 'edit-site/global-styles' ),
		] );

	return (
		<SidebarNavigationScreen
			title={ __( 'Styles' ) }
			description={ __(
				'Choose a different style combination for the theme styles.'
			) }
			content={ <StyleVariationsContainer /> }
			actions={
				<div>
					<SidebarButton
						icon={ seen }
						label={ __( 'Style Book' ) }
						onClick={ async () => {
							await openGlobalStyles();
							// Open the Style Book once the canvas mode is set to edit,
							// and the global styles sidebar is open. This ensures that
							// the Style Book is not prematurely closed.
							setEditorCanvasContainerView( 'style-book' );
						} }
					/>
					<SidebarButton
						icon={ edit }
						label={ __( 'Edit styles' ) }
						onClick={ async () => await openGlobalStyles() }
					/>
				</div>
			}
		/>
	);
}
