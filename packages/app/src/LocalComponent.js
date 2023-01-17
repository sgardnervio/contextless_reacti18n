import { useTranslation } from "react-i18next"

export const LocalComponent = function () {
	const { t } = useTranslation();
	return (
		<>
			<h3>Local component</h3>
			{t('string1')}
		</>
	)
}