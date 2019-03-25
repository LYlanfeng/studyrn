import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from './src/Index'
import Movices from './src/Movices'
import PizzaTranslator from './src/PizzaTranslator'
import Touchables from './src/Touchables'
import ScrollViews from './src/ScrollViews'
import SectionListBasics from './src/SectionListBasics'
import Animations from './src/Animations'

const AppStackNavigator = createStackNavigator({
  Index: {
    screen: Index
  },
  Movices: {
    screen: Movices
  },
  PizzaTranslator: {
    screen: PizzaTranslator
  },
  Touchables: {
    screen: Touchables
  },
  ScrollViews: {
    screen: ScrollViews
  },
  SectionListBasics: {
    screen: SectionListBasics
  },
  Animations: {
    screen: Animations
  }
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    // header: null
  }
})
export default createAppContainer(AppStackNavigator)
