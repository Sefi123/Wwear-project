import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class SignUp extends Component {

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
    <ScrollView data-layer="39512559-b315-4cd5-beff-1dcf03a5f31c" style={styles.signUp}>
        <Text data-layer="e93907c6-c334-4469-8972-2a1c8713d83b" style={styles.signUp_createANewAccount}>Create a new Account</Text>
        <View data-layer="cc34b164-ce22-4286-a38d-c3d077a320fd" style={styles.signUp_rectangle11}></View>
        <Text data-layer="101de127-5d9d-41c8-8318-2493a8e9697e" style={styles.signUp_lastName}>Last Name</Text>
        <Text data-layer="b8ad93d5-c410-49af-94b6-43cbad074b40" style={styles.signUp_firstName}>First Name</Text>
        <View data-layer="5c30a901-2f21-487b-affc-cd31661b1bcd" style={styles.signUp_rectangle14}></View>
        <Text data-layer="c7722f3e-ab1e-4bac-9a62-306b46478eb2" style={styles.signUp_usernameemail}>Username/Email</Text>
        <View data-layer="0161b11f-6d17-44c3-b2aa-81790d341843" style={styles.signUp_rectangle15}></View>
        <Text data-layer="3037bd62-7504-4388-b383-ad4952964fa1" style={styles.signUp_createPassword}>Create Password</Text>
        <View data-layer="f1add8ef-88f2-48ec-8f3d-3b4b86a95307" style={styles.signUp_rectangle16}></View>
        <Text data-layer="4daf4a63-e12a-4d4d-9bf9-abb4561819ac" style={styles.signUp_dateOfBirth}>Date of Birth</Text>
        <View data-layer="d5092c52-1c14-40a3-87d3-5a58b5230433" style={styles.signUp_rectangle17}></View>
        <View data-layer="ce352447-e08d-414f-b4e3-dcc503feb29b" style={styles.signUp_signUpButton}>
            <View data-layer="15192d26-332c-4859-807f-aab0aaf9e694" style={styles.signUp_signUpButton_rectangle18}></View>
            <Text data-layer="fe3b1885-2c73-49b7-80ce-c328344be9b2" style={styles.signUp_signUpButton_signUpa7f4ec94}>Sign Up</Text>
        </View>
        <ReactImage data-layer="025fd02c-82e4-4790-9bbc-e4036d64d333" source={require('./assets/image7.png')} style={styles.signUp_image7} />
    </ScrollView>
    );
  }
}

SignUp.propTypes = {

}

SignUp.defaultProps = {

}


const styles = StyleSheet.create({
  "signUp": {
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
    "height": 644,
    "left": 0,
    "top": 0
  },
  "signUp_createANewAccount": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 40,
    "fontWeight": "700",
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
    "width": 418,
    "height": 47,
    "left": 6,
    "top": 93
  },
  "signUp_rectangle11": {
    "opacity": 1,
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
    "left": 214,
    "top": 237
  },
  "signUp_lastName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "width": 121,
    "height": 30,
    "left": 9,
    "top": 237
  },
  "signUp_firstName": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "width": 122,
    "height": 30,
    "left": 9,
    "top": 187
  },
  "signUp_rectangle14": {
    "opacity": 1,
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
    "left": 214,
    "top": 187
  },
  "signUp_usernameemail": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "left": 9,
    "top": 287
  },
  "signUp_rectangle15": {
    "opacity": 1,
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
    "left": 214,
    "top": 287
  },
  "signUp_createPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "width": 192,
    "height": 30,
    "left": 9,
    "top": 337
  },
  "signUp_rectangle16": {
    "opacity": 1,
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
    "left": 214,
    "top": 337
  },
  "signUp_dateOfBirth": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
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
    "width": 139,
    "height": 30,
    "left": 9,
    "top": 387
  },
  "signUp_rectangle17": {
    "opacity": 1,
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
    "left": 214,
    "top": 387
  },
  "signUp_signUpButton": {
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
    "width": 124,
    "height": 34,
    "left": 117,
    "top": 499
  },
  "signUp_signUpButton_rectangle18": {
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
    "width": 124,
    "height": 34,
    "left": 0,
    "top": 0
  },
  "signUp_signUpButton_signUpa7f4ec94": {
    "opacity": 1,
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
    "width": 89,
    "height": 30,
    "left": 15,
    "top": 1
  },
  "signUp_image7": {
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
    "top": -220
  }
});