import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Menu extends Component {

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
    <ScrollView data-layer="29099104-dc1e-4088-bdd5-0af4207fffd7" style={styles.menu}>
        <View data-layer="5a60253d-aa74-4cc1-9d6b-c1a4daf6879c" style={styles.menu_nav28784721}>
            <View data-layer="a5a9a04b-3ea2-4c5b-9986-abd8a71302e3" style={styles.menu_nav28784721_navContainer}></View>
            <View data-layer="a26c6703-7213-4958-847a-87dfb76b5f0b" style={styles.menu_nav28784721_searchIcon}>
                <Svg data-layer="efcb8a7c-1b54-4452-b8b3-a4179d7652b8" style={styles.menu_nav28784721_searchIcon_path1} preserveAspectRatio="none" viewBox="1.2255859375 -0.19036865234375 9.42822265625 7.384765625" fill="rgba(255, 227, 180, 1)"><SvgPath d="M 2.7255859375 1.30963134765625 L 9.15380859375 5.694374084472656"  /></Svg>
                <Svg data-layer="0076260f-277f-4fb1-9eaf-113aaf7cb00b" style={styles.menu_nav28784721_searchIcon_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 17 17" fill="transparent"><SvgPath d="M 7 0 C 10.86599254608154 0 14 3.134007215499878 14 7 C 14 10.86599254608154 10.86599254608154 14 7 14 C 3.134007215499878 14 0 10.86599254608154 0 7 C 0 3.134007215499878 3.134007215499878 0 7 0 Z"  /></Svg>
            </View>
            <View data-layer="33a51020-dd47-479e-98dc-082ea832ff15" style={styles.menu_nav28784721_burger}>
                <Svg data-layer="0311dbe9-aa96-45bc-b9b3-c6f2f70e0d09" style={styles.menu_nav28784721_burger_line1} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="3089bb1d-72cb-4289-b947-8eddc4979e62" style={styles.menu_nav28784721_burger_line2} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="025df3e9-f4a5-4c8a-baa0-3968c7dbd470" style={styles.menu_nav28784721_burger_line3} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
            </View>
            <Svg data-layer="11b93eaf-d334-4ba6-bfc9-8c3ab3860365" style={styles.menu_nav28784721_heart} preserveAspectRatio="none" viewBox="-0.75 0.2500002384185791 18.95458984375 17.5" fill="transparent"><SvgPath d="M 8.727272987365723 15.97672843933105 C 4.63272762298584 11.94836521148682 0.7272727489471436 8.488001823425293 0.7272727489471436 5.502545833587646 C 0.7272727489471436 2.745454549789429 2.958545207977295 1.727272748947144 4.568000316619873 1.727272748947144 C 5.522182464599609 1.727272748947144 7.586909294128418 2.091636419296265 8.727272987365723 4.968727588653564 C 9.883636474609375 2.082909107208252 11.97381973266602 1.734545350074768 12.89163780212402 1.734545350074768 C 14.73890781402588 1.734545350074768 16.72727394104004 2.913454532623291 16.72727394104004 5.502545833587646 C 16.72727394104004 8.461818695068359 12.99199962615967 11.7752742767334 8.727272987365723 15.97672843933105 M 12.89163780212402 1.007272958755493 C 11.28945446014404 1.007272958755493 9.658181190490723 1.765091061592102 8.727272987365723 3.362181901931763 C 7.792727947235107 1.757818222045898 6.165818214416504 1.000000238418579 4.568000316619873 1.000000238418579 C 2.253090858459473 1.000000238418579 0 2.590545415878296 0 5.502545833587646 C 0 8.892364501953125 4.051636695861816 12.36000061035156 8.727272987365723 17 C 13.40363788604736 12.36000061035156 17.45454597473145 8.892365455627441 17.45454597473145 5.502545833587646 C 17.45454597473145 2.58545446395874 15.20363712310791 1.007272601127625 12.89163780212402 1.007272601127625"  /></Svg>
        </View>
        <View data-layer="dc29f698-e4e8-40b7-a179-120da5867c57" style={styles.menu_nav}>
            <View data-layer="fe13f843-9cc7-4472-be33-f43c89ecba62" style={styles.menu_nav_rectangle6}></View>
            <Svg data-layer="dc9625d2-790e-4763-8789-938e7759805d" style={styles.menu_nav_img181369} preserveAspectRatio="none" viewBox="0 0 85 87" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-img181369" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/img181369.png')} x="0" y="0" width="85.00px" height="87.00px" /></Pattern></Defs><SvgPath d="M 42.5 0 C 65.97209930419922 0 85 19.47561454772949 85 43.5 C 85 67.52438354492188 65.97209930419922 87 42.5 87 C 19.02790069580078 87 0 67.52438354492188 0 43.5 C 0 19.47561454772949 19.02790069580078 0 42.5 0 Z" fill="url(#img-img181369)" /></Svg>
            <Text data-layer="21454b39-534c-4cc1-a32a-eb782c3d43be" style={styles.menu_nav_editProfile}>Edit Profile</Text>
            <View data-layer="cddafd65-630b-493e-827a-389f447f4919" style={styles.menu_nav_rectangle20}></View>
            <Text data-layer="64869683-cd84-43bc-9dca-b1241c2da848" style={styles.menu_nav_myOrder}>My Order</Text>
            <View data-layer="f7e30060-7621-4cca-aa5d-9d678424f36c" style={styles.menu_nav_rectangle21}></View>
            <Text data-layer="bf787d4a-69d9-4082-90a7-a5564a10daf0" style={styles.menu_nav_categories}>Categories</Text>
            <View data-layer="eaccaf80-4353-4819-bd78-a4982907aff5" style={styles.menu_nav_rectangle25}></View>
            <Text data-layer="d4218560-b287-4069-ae7b-1f69ccf18d5c" style={styles.menu_nav_trackingOrder}>Tracking Order</Text>
            <View data-layer="0f6028c0-ee07-4a38-a07e-5a84731d347c" style={styles.menu_nav_rectangle19}></View>
            <Text data-layer="8712eb21-e6ff-4619-9fc6-710775f62624" style={styles.menu_nav_signOut}>Sign Out</Text>
            <View data-layer="90710d81-8c37-4460-afa6-b0cf1e6fda37" style={styles.menu_nav_rectangle22}></View>
            <Text data-layer="aeacf007-baa7-4a69-85e1-1cdc0f267da8" style={styles.menu_nav_lawn}>Lawn</Text>
            <View data-layer="8daec87b-fdd4-4935-a070-f441b331ce64" style={styles.menu_nav_rectangle26}></View>
            <Text data-layer="1cf0101b-e9e7-4805-a433-7b01eb03b19b" style={styles.menu_nav_khaddar}>Khaddar</Text>
            <View data-layer="448c6fe8-81ea-43ed-bb44-98f663234878" style={styles.menu_nav_rectangle24}></View>
            <Text data-layer="32b7d6d8-4cf9-4cf0-a4a0-1283dd1f3d2f" style={styles.menu_nav_linen}>Linen
</Text>
            <Svg data-layer="ffdbcae2-abc1-402e-86d1-c0e1f963ea08" style={styles.menu_nav_line4} preserveAspectRatio="none" viewBox="0 -1 383.5 2" fill="transparent"><SvgPath d="M 383.5 0 L 0 0"  /></Svg>
            <ReactImage data-layer="32d68b8f-59d6-45e1-a154-c34efc491271" source={require('./assets/image7.png')} style={styles.menu_nav_image7} />
        </View>
    </ScrollView>
    );
  }
}

Menu.propTypes = {

}

Menu.defaultProps = {

}


const styles = StyleSheet.create({
  "menu": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 384,
    "height": 547,
    "left": 0,
    "top": 0
  },
  "menu_nav28784721": {
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
    "width": 414,
    "height": 70,
    "left": 0,
    "top": 0
  },
  "menu_nav28784721_navContainer": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 414,
    "height": 70,
    "left": 0,
    "top": 0
  },
  "menu_nav28784721_searchIcon": {
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
    "width": 18.65,
    "height": 15.19,
    "left": 347,
    "top": 20
  },
  "menu_nav28784721_searchIcon_path1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10.43,
    "height": 8.38,
    "left": 10.23,
    "top": 8.81
  },
  "menu_nav28784721_searchIcon_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 14,
    "height": 14,
    "left": 0,
    "top": 0
  },
  "menu_nav28784721_burger": {
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
    "width": 15,
    "height": 10.8,
    "left": 25.5,
    "top": 24
  },
  "menu_nav28784721_burger_line1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 2,
    "left": -1,
    "top": -1
  },
  "menu_nav28784721_burger_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 2,
    "left": -1,
    "top": 4.4
  },
  "menu_nav28784721_burger_line3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17,
    "height": 2,
    "left": -1,
    "top": 9.8
  },
  "menu_nav28784721_heart": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19.45,
    "height": 18,
    "left": 286,
    "top": 19.5
  },
  "menu_nav": {
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
    "width": 1024,
    "height": 1024,
    "left": -296,
    "top": -233
  },
  "menu_nav_rectangle6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 175, 71, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 384,
    "height": 492,
    "left": 296,
    "top": 288
  },
  "menu_nav_img181369": {
    "opacity": 0.5099999904632568,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 85,
    "height": 87,
    "left": 454,
    "top": 323
  },
  "menu_nav_editProfile": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 22,
    "fontWeight": "400",
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
    "width": 108,
    "height": 38,
    "left": 443,
    "top": 431
  },
  "menu_nav_rectangle20": {
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
    "width": 368,
    "height": 32,
    "left": 302,
    "top": 489
  },
  "menu_nav_myOrder": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 323,
    "top": 493
  },
  "menu_nav_rectangle21": {
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
    "width": 368,
    "height": 32,
    "left": 302,
    "top": 524
  },
  "menu_nav_categories": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 323,
    "top": 528
  },
  "menu_nav_rectangle25": {
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
    "width": 368,
    "height": 32,
    "left": 302,
    "top": 664
  },
  "menu_nav_trackingOrder": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 323,
    "top": 669
  },
  "menu_nav_rectangle19": {
    "opacity": 0.6800000071525574,
    "position": "absolute",
    "backgroundColor": "rgba(255, 175, 71, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(25, 24, 24, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(25, 24, 24, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(25, 24, 24, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(25, 24, 24, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 370,
    "height": 32,
    "left": 305,
    "top": 740
  },
  "menu_nav_signOut": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 324,
    "top": 746
  },
  "menu_nav_rectangle22": {
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
    "width": 368,
    "height": 32,
    "left": 302,
    "top": 559
  },
  "menu_nav_lawn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 386,
    "top": 563
  },
  "menu_nav_rectangle26": {
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
    "width": 368,
    "height": 32,
    "left": 302,
    "top": 594
  },
  "menu_nav_khaddar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 388,
    "top": 599
  },
  "menu_nav_rectangle24": {
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
    "width": 368,
    "height": 32,
    "left": 302,
    "top": 629
  },
  "menu_nav_linen": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 175, 71, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 127,
    "height": 34,
    "left": 388,
    "top": 634
  },
  "menu_nav_line4": {
    "opacity": 0.2800000011920929,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 383.5,
    "height": 2,
    "left": 296.5,
    "top": 731.5
  },
  "menu_nav_image7": {
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
    "left": 0,
    "top": 0
  }
});