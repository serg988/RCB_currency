import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Http from '../components/Http'
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
)

const ReusableItem = ({ onPress }) => <Item title='Edit' onPress={onPress} />

const ReusableHiddenItem = ({ onPress }) => (
  <HiddenItem title='hidden2' onPress={onPress} />
)

const HomeScreen = ({ navigation }) => {
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
            {/* <ReusableHiddenItem onPress={() => alert('hidden2')} /> */}
          </OverflowMenu>
        </HeaderButtons>
      ),
    })
  }, [navigation])
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Курсы Валют</Text>
      <Http />
      <Button
        title='Выберите дату'
        color='#5094cb'
        onPress={() => navigation.navigate('PickDate')}
      />
    </View>
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 50,
  },
})

export default HomeScreen
