import React from 'react'
import { StyleSheet } from 'react-native'
import { Route } from 'react-router-native'
import { Container, Content, Footer, FooterTab } from 'native-base'
import { Expenses, Overview, Budgets, Wallet, ScreenHeader } from '@components'
import { DEFAULT_PATH, ADD_EXPENSE_PATH, EXPENSES_PATH, OVERVIEW_PATH, BUDGET_PATH, WALLET_PATH, NavigationButton } from '@navigation'

const styles = StyleSheet.create({
	footerTab: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end'
	},
})

class MainScreen extends React.Component {

	state = {
		activeRoute: DEFAULT_PATH,
		activeTitle: 'Expenses'
	}

	changeRoute = (activeRoute, activeTitle) => {
		this.setState({ activeRoute, activeTitle })
	}

	render() {
		const FooterButtons = [
			{
				text: 'Expenses',
				icon: 'list',
				path: EXPENSES_PATH,
			},
			{
				text: 'Overview',
				icon: 'md-stats',
				path: OVERVIEW_PATH,
			},
			{
				icon: 'add',
				path: ADD_EXPENSE_PATH,
			},
			{
				text: 'Budget',
				icon: 'md-cash',
				path: BUDGET_PATH,
			},
			{
				text: 'Wallet',
				icon: 'settings',
				path: WALLET_PATH,
			},
		]
		const { activeRoute } = this.state
		return (	
			<Container>
				<ScreenHeader title={this.state.activeTitle} />
				<Content >
					<Route path={EXPENSES_PATH} component={Expenses} />
					<Route path={OVERVIEW_PATH} component={Overview} />
					<Route path={BUDGET_PATH} component={Budgets} />
					<Route path={WALLET_PATH} component={Wallet} />
				</Content>
				<Footer>
					<FooterTab style={styles.footerTab}>
						{FooterButtons.map((button, i) => <NavigationButton
							key={i} 
							text={button.text} 
							icon={button.icon} 
							path={button.path} 
							activeRoute={activeRoute} 
							changeRoute={this.changeRoute} 
						/>)}
					</FooterTab>
				</Footer>
			</Container>
		)
	}
}

export default MainScreen