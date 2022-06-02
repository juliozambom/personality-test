import { createStackNavigator } from "@react-navigation/stack";

import Question from '../screens/Question';
import Finished from "../screens/Finished";

const AppStack = createStackNavigator();

const AppRoutes = () => {
    return(
        <AppStack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <AppStack.Screen name="Question" component={Question}/>
            <AppStack.Screen name="Finished" component={Finished}/>
        </AppStack.Navigator>
    );
}

export default AppRoutes;