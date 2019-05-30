import React, {useState} from 'react';
import {
  StyleSheet, 
  View, Text
} from 'react-native';
import {NativeRouter as Router, Route, Link} from 'react-router-native';
import Menu from './components/Menu'
import Info from './components/Info'
import Users from './components/Users'
import MenuButton from './components/MenuButton'



const App = () => {
  const [page, setPage] = useState('menu')

 const  toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }

  const pageContent = () => {
    if (page === 'menu') {
      return <Menu styles={styles} />
    } else if (page === 'info') {
      return <Info />
    } else if (page === 'users') {
      return <Users />
    }}

    return (
      <Router>
        <View style={styles.container}>
          <View style={styles.navigationBottom}>
            <Link to="/">
            <Text style={styles.text}>MENU</Text>
            </Link>
            <Link to="/info">
              <Text style={styles.text}>INFO</Text>
            </Link>
            <Link to="/users">
                <Text style={styles.text}>USERS</Text>
            </Link>
        </View>

        <Route exact path="/" component={Menu} />
        <Route path="/info" component={Info} />
        <Route path="/users" component={Users} />
      </View>
    </Router>
   
    );
  }

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 36,
    textAlign: 'left',
    color: 'greenyellow',
    margin: 5,
    marginBottom: 5,
    paddingBottom: 0,
  },
  navigationBottom: {
    zIndex: 9999,
    backgroundColor: 'black',
    borderTopWidth: 2,
    borderColor: 'greenyellow',
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  textTitle: {
    fontFamily: 'Glass_TTY_VT220',
    fontSize: 56,
    textDecorationLine: 'underline',
    color: 'greenyellow',
    margin: 50
  }
});

export default App
