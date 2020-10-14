import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from "./pages/login"
import Main from "./pages/tecnicos/main";
import Técnicos from "./pages/tecnicos/tecnico";

const NavStack = createStackNavigator({
    Login,
    Main,
    Técnicos
});

const App = createAppContainer(NavStack);

export default App;