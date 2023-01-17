import { withTranslation } from 'react-i18next';

const ImportedComponent = (props) => {
	const { i18n, t } = { ...props }
	console.log('component i18n is %o', i18n);

	return (
		<div>
			<h3>Imported Component</h3>
			{t('importedComponent') /* key is defined in the app package */}
		</div>
	);
}

export const MyComponent = withTranslation('translation')(ImportedComponent)