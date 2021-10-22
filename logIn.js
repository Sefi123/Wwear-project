import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class LogIn extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="93abd955-4890-42be-9d18-bcb73bc02386" style={styles.logIn}>
        <ReactImage data-layer="cc342129-e83e-448f-8a8e-c9a51a4e5b50" source={require('./assets/image7.png')} style={styles.logIn_image7} />
        <View data-layer="c1c37d10-79c0-4902-9c34-fa600c04a46d" style={styles.logIn_logInComponent}>
            <ReactImage data-layer="d81d68da-30ea-429e-8ae5-776d2160c453" source={require('./assets/image5.png')} style={styles.logIn_logInComponent_image5} />
            <Text data-layer="5c55ab24-468e-4aa4-9cf5-45982f7629fa" style={styles.logIn_logInComponent_usernameemail}>Username/Email</Text>
            <View data-layer="ef167f35-d6ce-4f01-ae98-bdd899f1b5b2" style={styles.logIn_logInComponent_rectangle11}></View>
            <Text data-layer="de762dd7-0887-4e7f-a978-23448954b140" style={styles.logIn_logInComponent_password}>Password</Text>
            <View data-layer="229b5431-5155-4b1f-bfc1-e2ed6ec7dfdb" style={styles.logIn_logInComponent_rectangle12}></View>
            <View data-layer="f0446784-9c30-47d8-8783-fa2f49aabeb4" style={styles.logIn_logInComponent_rectangle13}></View>
            <Text data-layer="0d6d86d4-2490-463e-adb3-bfdc03d461d6" style={styles.logIn_logInComponent_logIn9a5fc4fc}>LOG IN</Text>
            <Text data-layer="1ad133fd-5dba-404c-bce9-8d9715903598" style={styles.logIn_logInComponent_dontYouHaveAnAccount}>Don't you have an account?</Text>
            <Text data-layer="e4ac6497-6f26-45c6-a0bb-6935a4b813aa" style={styles.logIn_logInComponent_signup}>SIGNUP</Text>
        </View>
    </ScrollView>
    );
  }
}

LogIn.propTypes = {

}

LogIn.defaultProps = {

}


const styles = StyleSheet.create({
  "logIn": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 175, 71, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 672,
    "left": 0,
    "top": 0
  },
  "logIn_image7": {
    "opacity": 0.10000000149011612,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1024,
    "height": 1024,
    "left": -290,
    "top": -176
  },
  "logIn_logInComponent": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 403,
    "height": 452,
    "left": 13,
    "top": 139
  },
  "logIn_logInComponent_image5": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "borderBottomRightRadius": 100,
    "width": 149,
    "height": 150,
    "left": 127,
    "top": 0
  },
  "logIn_logInComponent_usernameemail": {
    "opacity": 0.699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SansSerif",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 185,
    "height": 30,
    "left": 0,
    "top": 209
  },
  "logIn_logInComponent_rectangle11": {
    "opacity": 0.699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(255, 227, 180, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 202,
    "height": 30,
    "left": 201,
    "top": 209
  },
  "logIn_logInComponent_password": {
    "opacity": 0.699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SansSerif",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 110,
    "height": 30,
    "left": 0,
    "top": 269
  },
  "logIn_logInComponent_rectangle12": {
    "opacity": 0.699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(255, 227, 180, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 202,
    "height": 30,
    "left": 201,
    "top": 269
  },
  "logIn_logInComponent_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(62, 144, 238, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 108,
    "height": 32,
    "left": 127,
    "top": 359
  },
  "logIn_logInComponent_logIn9a5fc4fc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Romantic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 72,
    "height": 24,
    "left": 147,
    "top": 364
  },
  "logIn_logInComponent_dontYouHaveAnAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SansSerif",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 247,
    "height": 23,
    "left": 0,
    "top": 428
  },
  "logIn_logInComponent_signup": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(243, 21, 21, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Romantic",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 76,
    "height": 24,
    "left": 302,
    "top": 428
  }
});