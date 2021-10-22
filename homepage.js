import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Homepage extends Component {

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
    <ScrollView data-layer="e976dd72-bdb5-4b39-835d-5aea60c82503" style={styles.homepage}>
        <View data-layer="c88df8ba-9630-4efb-b204-d3bf88070589" style={styles.homepage_nav}>
            <ReactImage data-layer="d6881b19-b066-47dc-9905-51c36256f900" source={require('./assets/homeImage2.png')} style={styles.homepage_nav_homeImage2} />
            <View data-layer="1c662b92-6ffa-4410-be2c-5314617f9c80" style={styles.homepage_nav_navContainer}></View>
            <View data-layer="db5d3cfd-568a-4791-bd9d-a9346d2d7229" style={styles.homepage_nav_searchIcon}>
                <Svg data-layer="cf927c05-ff5a-4cb4-9aba-649e4aadd156" style={styles.homepage_nav_searchIcon_path1} preserveAspectRatio="none" viewBox="1.2255859375 -0.19036865234375 9.42822265625 7.384765625" fill="transparent"><SvgPath d="M 2.7255859375 1.30963134765625 L 9.15380859375 5.694374084472656"  /></Svg>
                <Svg data-layer="b7ffbf1d-a48a-49fd-87af-539e4c78c883" style={styles.homepage_nav_searchIcon_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 17 17" fill="transparent"><SvgPath d="M 7 0 C 10.86599254608154 0 14 3.134007215499878 14 7 C 14 10.86599254608154 10.86599254608154 14 7 14 C 3.134007215499878 14 0 10.86599254608154 0 7 C 0 3.134007215499878 3.134007215499878 0 7 0 Z"  /></Svg>
            </View>
            <View data-layer="0e2b25ec-cccd-4bf8-84c3-b80610c9d286" style={styles.homepage_nav_burger}>
                <Svg data-layer="c3c8842c-1f87-45a7-825c-dd4f5071c0a8" style={styles.homepage_nav_burger_line1} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="7b0f2554-c094-4851-b542-9ba702220a0c" style={styles.homepage_nav_burger_line2} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="fdd04c1a-d05d-42c5-b488-5939f1176a51" style={styles.homepage_nav_burger_line3} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
            </View>
            <Svg data-layer="7c46ecc1-0cbe-4c1a-95d1-b7e535ecbe4c" style={styles.homepage_nav_heart} preserveAspectRatio="none" viewBox="-0.75 0.2500002384185791 18.95458984375 17.5" fill="transparent"><SvgPath d="M 8.727272987365723 15.97672843933105 C 4.63272762298584 11.94836521148682 0.7272727489471436 8.488001823425293 0.7272727489471436 5.502545833587646 C 0.7272727489471436 2.745454549789429 2.958545207977295 1.727272748947144 4.568000316619873 1.727272748947144 C 5.522182464599609 1.727272748947144 7.586909294128418 2.091636419296265 8.727272987365723 4.968727588653564 C 9.883636474609375 2.082909107208252 11.97381973266602 1.734545350074768 12.89163780212402 1.734545350074768 C 14.73890781402588 1.734545350074768 16.72727394104004 2.913454532623291 16.72727394104004 5.502545833587646 C 16.72727394104004 8.461818695068359 12.99199962615967 11.7752742767334 8.727272987365723 15.97672843933105 M 12.89163780212402 1.007272958755493 C 11.28945446014404 1.007272958755493 9.658181190490723 1.765091061592102 8.727272987365723 3.362181901931763 C 7.792727947235107 1.757818222045898 6.165818214416504 1.000000238418579 4.568000316619873 1.000000238418579 C 2.253090858459473 1.000000238418579 0 2.590545415878296 0 5.502545833587646 C 0 8.892364501953125 4.051636695861816 12.36000061035156 8.727272987365723 17 C 13.40363788604736 12.36000061035156 17.45454597473145 8.892365455627441 17.45454597473145 5.502545833587646 C 17.45454597473145 2.58545446395874 15.20363712310791 1.007272601127625 12.89163780212402 1.007272601127625"  /></Svg>
        </View>
        <View data-layer="a29ef9e9-99e9-4180-9842-264cecc63e64" style={styles.homepage_card1}>
            <View data-layer="1557ec87-8bb8-4908-978b-d8d817bd85b9" style={styles.homepage_card1_cardContainer}></View>
            <ReactImage data-layer="77cf7acd-ccc9-418e-ab52-43593b543c82" source={require('./assets/newDressesa81fd1b3.png')} style={styles.homepage_card1_newDressesa81fd1b3} />
            <Text data-layer="2e3f81b2-52a5-40e5-b44a-606979239bf2" style={styles.homepage_card1_newDresses}>New Dresses</Text>
            <View data-layer="ff2961c1-e9a7-46ca-8a02-aa7d93dc58e2" style={styles.homepage_card1_button}>
                <View data-layer="215fe7c0-4666-4e21-9571-0d0967ad9bf3" style={styles.homepage_card1_button_rectangle3}></View>
                <Text data-layer="e0a7c244-5883-4bcf-a208-d76c571626fc" style={styles.homepage_card1_button_seeMore}>See more</Text>
            </View>
        </View>
        <View data-layer="ac419e91-0dd5-4558-bbc0-722741c5a982" style={styles.homepage_footerText}>
            <Svg data-layer="92ccc751-eed7-4732-a452-648e30d8e010" style={styles.homepage_footerText_path2} preserveAspectRatio="none" viewBox="0 0 230 57" fill="rgba(130, 96, 51, 1)"><SvgPath d="M 0 0 L 230 0 L 230 57 L 0 57 L 0 0 Z"  /></Svg>
            <Text data-layer="367812ba-ecb5-4316-8e49-9cc8ed4f845c" style={styles.homepage_footerText_officeStyle}>Office Style</Text>
        </View>
        <ReactImage data-layer="dc8cade8-28b2-4e80-8e7b-2f00f6ac8fa3" source={require('./assets/homeImage1.png')} style={styles.homepage_homeImage1} />
        <ReactImage data-layer="a55a0cfe-db32-460b-811e-60ddaf76a89c" source={require('./assets/image7fc820900.png')} style={styles.homepage_image7fc820900} />
        <ReactImage data-layer="7c9bb247-6b4e-4dd8-8bd0-75623bd77cb4" source={require('./assets/image7.png')} style={styles.homepage_image7} />
    </ScrollView>
    );
  }
}

Homepage.propTypes = {

}

Homepage.defaultProps = {

}


const styles = StyleSheet.create({
  "homepage": {
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
    "width": 385,
    "height": 1472,
    "left": 0,
    "top": 0
  },
  "homepage_nav": {
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
    "width": 543,
    "height": 1415,
    "left": -76,
    "top": 0
  },
  "homepage_nav_homeImage2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 543,
    "height": 665,
    "left": 0,
    "top": 750
  },
  "homepage_nav_navContainer": {
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
    "left": 76,
    "top": 0
  },
  "homepage_nav_searchIcon": {
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
    "left": 423,
    "top": 27
  },
  "homepage_nav_searchIcon_path1": {
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
  "homepage_nav_searchIcon_ellipse1": {
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
  "homepage_nav_burger": {
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
    "left": 126.5,
    "top": 30
  },
  "homepage_nav_burger_line1": {
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
  "homepage_nav_burger_line2": {
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
  "homepage_nav_burger_line3": {
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
  "homepage_nav_heart": {
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
    "left": 362,
    "top": 26.5
  },
  "homepage_card1": {
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
    "height": 188,
    "left": 0,
    "top": 548
  },
  "homepage_card1_cardContainer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
      "height": -3
    },
    "shadowRadius": 5,
    "width": 414,
    "height": 188,
    "left": 0,
    "top": 0
  },
  "homepage_card1_newDressesa81fd1b3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 105.5,
    "height": 158.25,
    "left": 35,
    "top": 15
  },
  "homepage_card1_newDresses": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 26,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 146,
    "height": 35,
    "left": 212,
    "top": 32
  },
  "homepage_card1_button": {
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
    "width": 113.09,
    "height": 33,
    "left": 228,
    "top": 102
  },
  "homepage_card1_button_rectangle3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(253, 208, 143, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 113.09,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "homepage_card1_button_seeMore": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 66,
    "height": 21,
    "left": 24.09,
    "top": 6
  },
  "homepage_footerText": {
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
    "width": 230,
    "height": 57,
    "left": 92,
    "top": 1220
  },
  "homepage_footerText_path2": {
    "opacity": 0.6800000071525574,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 230,
    "height": 57,
    "left": 0,
    "top": 0
  },
  "homepage_footerText_officeStyle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 120,
    "height": 32,
    "left": 55,
    "top": 13
  },
  "homepage_homeImage1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 232,
    "height": 458,
    "left": 96,
    "top": 79
  },
  "homepage_image7fc820900": {
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
    "top": -238
  },
  "homepage_image7": {
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
    "left": -300,
    "top": 509
  }
});