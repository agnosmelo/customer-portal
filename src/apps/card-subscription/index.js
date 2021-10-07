import Pages from "./pages";
import cardSubscriptionStyles from '~/apps/card-subscription/styles/app.scss';
import WebComponent from '~/shared/WebComponent';

const App = () => {
	return (
		<Pages />
	);
};

class CardSubscription extends WebComponent {
	constructor() {
		super(App, cardSubscriptionStyles);
	}
}

export default CardSubscription;
