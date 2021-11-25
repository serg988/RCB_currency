import React, { useState } from 'react'
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import Main from '../components/Main'
import { setCurrentRate } from '../store/actions/currency'
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons'
import { log } from 'react-native-reanimated'
// import { ScrollView } from 'react-native-gesture-handler'

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
)

const ReusableItem = ({ onPress }) => <Item title='Edit' onPress={onPress} />

const ReusableHiddenItem = ({ onPress }) => (
  <HiddenItem title='hidden2' onPress={onPress} />
)

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const dispatch = useDispatch()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <OverflowMenu
            style={{ marginHorizontal: 10 }}
            OverflowIcon={({ color }) => (
              <Ionicons
                name='ellipsis-vertical-outline'
                size={23}
                color='white'
              />
            )}
          >
            <HiddenItem
              title='О приложении'
              onPress={() => navigation.navigate('About')}
            />
          </OverflowMenu>
        </HeaderButtons>
      ),
    })
  }, [navigation])
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            dispatch(setCurrentRate())
          }}
        />
      }
    >
      <View style={styles.screen}>
        {/* <Text style={styles.title}>Курсы Валют</Text> */}
        <View style={{width:'100%'}}>
        <Button
          style={{ outerWidth: '100%' }}
          title='Выберите дату'
          color='#9db802'
          onPress={() => navigation.navigate('PickDate')}
        />
        </View>
        <Main />
      </View>
    </ScrollView>
  )
}

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: 'mealTitle',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={'ios-star'}
          iconSize={20}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 50,
  },
})

export default HomeScreen
