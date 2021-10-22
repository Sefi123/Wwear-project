import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ProductList extends Component {

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
    <ScrollView data-layer="51d05f9e-c911-4016-827d-34e090363265" style={styles.productList}>
        <View data-layer="06410ba3-690e-41ea-8d5b-9c67bd477fbe" style={styles.productList_nav}>
            <View data-layer="b3c6104d-ea03-48d6-a17e-20232dbc6fc1" style={styles.productList_nav_navContainer}></View>
            <View data-layer="e113a537-2cd3-464f-ac9d-155c9b769b4c" style={styles.productList_nav_searchIcon}>
                <Svg data-layer="a2ac7736-bc6d-499d-b4f3-fd9fe4c8c1a9" style={styles.productList_nav_searchIcon_path1} preserveAspectRatio="none" viewBox="1.2255859375 -0.19036865234375 9.4287109375 7.384765625" fill="transparent"><SvgPath d="M 2.7255859375 1.30963134765625 L 9.15380859375 5.694374084472656"  /></Svg>
                <Svg data-layer="cd77546e-c9cc-4717-875b-9e5931ce7e14" style={styles.productList_nav_searchIcon_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 17 17" fill="transparent"><SvgPath d="M 7 0 C 10.86599254608154 0 14 3.134007215499878 14 7 C 14 10.86599254608154 10.86599254608154 14 7 14 C 3.134007215499878 14 0 10.86599254608154 0 7 C 0 3.134007215499878 3.134007215499878 0 7 0 Z"  /></Svg>
            </View>
            <View data-layer="2c25c116-71f4-4efe-b652-e5bab956df5f" style={styles.productList_nav_burger}>
                <Svg data-layer="1875fb07-38bb-4d8f-bd65-2564489091e9" style={styles.productList_nav_burger_line1} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="b8178a66-87f7-4b30-8296-b0d3ad902a47" style={styles.productList_nav_burger_line2} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="d70fcf70-3fc9-4a3a-83f5-811af5fd203b" style={styles.productList_nav_burger_line3} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
            </View>
            <View data-layer="1d20d3ec-7942-4e26-9f69-5e22f763b301" style={styles.productList_nav_heart57a458b1}>
                <Svg data-layer="38dfab0b-d2f7-4129-bea0-fc5078932a92" style={styles.productList_nav_heart57a458b1_heart} preserveAspectRatio="none" viewBox="-0.75 0.2500002384185791 18.9541015625 17.5" fill="transparent"><SvgPath d="M 8.727272987365723 15.97672843933105 C 4.63272762298584 11.94836521148682 0.7272727489471436 8.488001823425293 0.7272727489471436 5.502545833587646 C 0.7272727489471436 2.745454549789429 2.958545207977295 1.727272748947144 4.568000316619873 1.727272748947144 C 5.522182464599609 1.727272748947144 7.586909294128418 2.091636419296265 8.727272987365723 4.968727588653564 C 9.883636474609375 2.082909107208252 11.97381973266602 1.734545350074768 12.89163780212402 1.734545350074768 C 14.73890781402588 1.734545350074768 16.72727394104004 2.913454532623291 16.72727394104004 5.502545833587646 C 16.72727394104004 8.461818695068359 12.99199962615967 11.7752742767334 8.727272987365723 15.97672843933105 M 12.89163780212402 1.007272958755493 C 11.28945446014404 1.007272958755493 9.658181190490723 1.765091061592102 8.727272987365723 3.362181901931763 C 7.792727947235107 1.757818222045898 6.165818214416504 1.000000238418579 4.568000316619873 1.000000238418579 C 2.253090858459473 1.000000238418579 0 2.590545415878296 0 5.502545833587646 C 0 8.892364501953125 4.051636695861816 12.36000061035156 8.727272987365723 17 C 13.40363788604736 12.36000061035156 17.45454597473145 8.892365455627441 17.45454597473145 5.502545833587646 C 17.45454597473145 2.58545446395874 15.20363712310791 1.007272601127625 12.89163780212402 1.007272601127625"  /></Svg>
            </View>
        </View>
        <View data-layer="4e1442e2-5a50-49c6-adb7-c7d1a69e676b" style={styles.productList_productbe070e70}>
            <View data-layer="7592180a-17a1-4e4e-a65b-1311076ee94d" style={styles.productList_productbe070e70_rectangle89f3341be}></View>
            <ReactImage data-layer="7af40b8b-7286-4a1d-84b9-b1d15a4f5cff" source={require('./assets/image1.png')} style={styles.productList_productbe070e70_image1} />
            <View data-layer="51871fbe-80eb-4c41-b775-3b53e855174c" style={styles.productList_productbe070e70_rectangle933c4c354}></View>
            <Text data-layer="9215cb39-f252-4357-8f0f-c2dd2451ad69" style={styles.productList_productbe070e70_lawn3piece}>LAWN 3Piece</Text>
            <Svg data-layer="6232e4bc-6f20-4446-aa1e-01e3a0137dc8" style={styles.productList_productbe070e70_path4cf8b9636} preserveAspectRatio="none" viewBox="-0.75 -0.75 331.5 78.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 0 L 330 0 L 330 77 L 0 77 L 0 0 Z"  /></Svg>
            <Text data-layer="9b16581c-57b1-408c-a3a8-f8b3672c81f5" style={styles.productList_productbe070e70_rs3000newSummerCollectionswissLawn}>Rs. 3000
New summer collection.
Swiss Lawn</Text>
            <Svg data-layer="99243cc5-af11-4f4a-83e4-3c60d5f363ba" style={styles.productList_productbe070e70_line5b5f40cf8} preserveAspectRatio="none" viewBox="0 -1.5 414 3" fill="transparent"><SvgPath d="M 0 0 L 414 0"  /></Svg>
        </View>
        <View data-layer="181a94fb-d4a8-4e61-919a-e2cf8505350a" style={styles.productList_product322ad39e}>
            <View data-layer="b5755680-4918-4718-b4bb-6b9f393049e7" style={styles.productList_product322ad39e_rectangle8118c2bab}></View>
            <View data-layer="d9d24105-490c-48f7-a16e-704db9435c0a" style={styles.productList_product322ad39e_rectangle98a43c178}></View>
            <Text data-layer="e72a99b6-07b4-49d0-9541-ed1b55f392cc" style={styles.productList_product322ad39e_khaddar3piece}>Khaddar 3Piece</Text>
            <Svg data-layer="28f0dc5e-f7c0-42b6-93f0-5ac77ea029e3" style={styles.productList_product322ad39e_path478ee7c42} preserveAspectRatio="none" viewBox="-0.75 -0.75 331.5 78.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 0 L 330 0 L 330 77 L 0 77 L 0 0 Z"  /></Svg>
            <Text data-layer="e8560520-ab9a-4a72-8dfb-00fee9fc8385" style={styles.productList_product322ad39e_rs3000winterCollectionsoftKhaddar}>Rs. 3000
Winter collection.
Soft Khaddar</Text>
            <Svg data-layer="a2a65704-2678-4033-9d77-1ebc1dbdb8e0" style={styles.productList_product322ad39e_line5ff5766c8} preserveAspectRatio="none" viewBox="0 -1.5 414 3" fill="transparent"><SvgPath d="M 0 0 L 414 0"  /></Svg>
            <ReactImage data-layer="37c8e618-daec-4b4b-8324-0424d8683875" source={require('./assets/image2.png')} style={styles.productList_product322ad39e_image2} />
        </View>
        <View data-layer="ea2a07ab-9f88-4de3-b026-b0009a9aa932" style={styles.productList_productc22be352}>
            <View data-layer="1fbf3681-84ff-4191-b0fb-08b8e68276a1" style={styles.productList_productc22be352_rectangle82a37cea2}></View>
            <View data-layer="3fb0eb9b-62d7-4208-92bc-a662353c943a" style={styles.productList_productc22be352_rectangle91230f6a7}></View>
            <Text data-layer="c8081c52-51ce-48b9-bd98-173a83486fb0" style={styles.productList_productc22be352_linen3piece}>LINEN 3Piece</Text>
            <Text data-layer="1f3b099f-d0b2-4fa2-8b9b-2a13e1cbc47b" style={styles.productList_productc22be352_rs5000winterCollectionpureLinen}>Rs. 5000
Winter collection.
Pure Linen</Text>
            <Svg data-layer="133f8244-c56d-4112-80ae-b3e8ab1208c4" style={styles.productList_productc22be352_path4} preserveAspectRatio="none" viewBox="-0.75 -0.75 331.5 78.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 0 L 330 0 L 330 77 L 0 77 L 0 0 Z"  /></Svg>
            <Svg data-layer="66f8cb44-b444-46cb-a7ff-7bb67dd43134" style={styles.productList_productc22be352_line517416810} preserveAspectRatio="none" viewBox="0 -1.5 414 3" fill="transparent"><SvgPath d="M 0 0 L 414 0"  /></Svg>
            <ReactImage data-layer="ec50542b-ef73-4df9-9b09-e60c4d973d96" source={require('./assets/image3.png')} style={styles.productList_productc22be352_image3} />
        </View>
        <View data-layer="cbc0d914-4040-40ba-8a96-afa93432fea1" style={styles.productList_product}>
            <View data-layer="8e9f8801-aaf9-49e3-ae07-01f20823618a" style={styles.productList_product_rectangle8}></View>
            <View data-layer="21af5111-35ed-4c1f-a598-670320961fad" style={styles.productList_product_rectangle9}></View>
            <Text data-layer="ec69ea29-0591-4b71-b881-c7aa297ae852" style={styles.productList_product_shaffon3piece}>SHAFFON 3Piece</Text>
            <Svg data-layer="83c65879-cebb-498c-a886-ecfdee29d733" style={styles.productList_product_path3} preserveAspectRatio="none" viewBox="-0.75 -0.75 331.5 78.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0 0 L 330 0 L 330 77 L 0 77 L 0 0 Z"  /></Svg>
            <Text data-layer="1ef2dfe6-c304-4e04-bf48-769a3da0e432" style={styles.productList_product_rs3000newSummerCollectionpureShaffon}>Rs. 3000
New summer collection.
Pure Shaffon</Text>
            <Svg data-layer="e7876579-076f-4c68-b9d7-ea6c29f99e7a" style={styles.productList_product_line5} preserveAspectRatio="none" viewBox="0 -1.5 414 3" fill="transparent"><SvgPath d="M 0 0 L 414 0"  /></Svg>
            <ReactImage data-layer="5918e1e7-4943-46dd-8cd1-3aca72fdc994" source={require('./assets/image4.png')} style={styles.productList_product_image4} />
        </View>
        <ReactImage data-layer="af09b848-71ec-4a1b-806d-a2a93024d0a6" source={require('./assets/image7.png')} style={styles.productList_image7} />
    </ScrollView>
    );
  }
}

ProductList.propTypes = {

}

ProductList.defaultProps = {

}


const styles = StyleSheet.create({
  "productList": {
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
    "height": 736,
    "left": 0,
    "top": 0
  },
  "productList_nav": {
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
  "productList_nav_navContainer": {
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
  "productList_nav_searchIcon": {
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
    "left": 358,
    "top": 27
  },
  "productList_nav_searchIcon_path1": {
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
  "productList_nav_searchIcon_ellipse1": {
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
  "productList_nav_burger": {
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
    "left": 20.5,
    "top": 30
  },
  "productList_nav_burger_line1": {
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
  "productList_nav_burger_line2": {
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
  "productList_nav_burger_line3": {
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
  "productList_nav_heart57a458b1": {
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
    "width": 17.45,
    "height": 16,
    "left": 303,
    "top": 27.5
  },
  "productList_nav_heart57a458b1_heart": {
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
    "left": -1,
    "top": -1
  },
  "productList_productbe070e70": {
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
    "width": 420,
    "height": 668,
    "left": -5,
    "top": 68
  },
  "productList_productbe070e70_rectangle89f3341be": {
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 419,
    "height": 668,
    "left": 0,
    "top": 0
  },
  "productList_productbe070e70_image1": {
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
    "width": 84,
    "height": 121,
    "left": 5,
    "top": 15
  },
  "productList_productbe070e70_rectangle933c4c354": {
    "opacity": 0.6000000238418579,
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 330,
    "height": 34,
    "left": 89,
    "top": 15
  },
  "productList_productbe070e70_lawn3piece": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 118,
    "height": 27,
    "left": 94,
    "top": 19
  },
  "productList_productbe070e70_path4cf8b9636": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 330,
    "height": 77,
    "left": 90,
    "top": 59
  },
  "productList_productbe070e70_rs3000newSummerCollectionswissLawn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 14,
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
    "width": 148,
    "height": 65,
    "left": 94,
    "top": 59
  },
  "productList_productbe070e70_line5b5f40cf8": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 3,
    "left": 5.5,
    "top": 146
  },
  "productList_product322ad39e": {
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
    "width": 448,
    "height": 671,
    "left": -34,
    "top": 215
  },
  "productList_product322ad39e_rectangle8118c2bab": {
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 419,
    "height": 671,
    "left": 28,
    "top": 0
  },
  "productList_product322ad39e_rectangle98a43c178": {
    "opacity": 0.6000000238418579,
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 330,
    "height": 34,
    "left": 117,
    "top": 15
  },
  "productList_product322ad39e_khaddar3piece": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 136,
    "height": 27,
    "left": 122,
    "top": 19
  },
  "productList_product322ad39e_path478ee7c42": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 330,
    "height": 77,
    "left": 118,
    "top": 59
  },
  "productList_product322ad39e_rs3000winterCollectionsoftKhaddar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 14,
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
    "width": 108,
    "height": 65,
    "left": 122,
    "top": 59
  },
  "productList_product322ad39e_line5ff5766c8": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 3,
    "left": 33.5,
    "top": 146.66
  },
  "productList_product322ad39e_image2": {
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
    "width": 122,
    "height": 121,
    "left": 0,
    "top": 15
  },
  "productList_productc22be352": {
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
    "width": 420,
    "height": 668,
    "left": -7,
    "top": 360
  },
  "productList_productc22be352_rectangle82a37cea2": {
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 419,
    "height": 668,
    "left": 0,
    "top": 0
  },
  "productList_productc22be352_rectangle91230f6a7": {
    "opacity": 0.6000000238418579,
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 330,
    "height": 34,
    "left": 89,
    "top": 15
  },
  "productList_productc22be352_linen3piece": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 117,
    "height": 27,
    "left": 94,
    "top": 19
  },
  "productList_productc22be352_rs5000winterCollectionpureLinen": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
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
    "width": 108,
    "height": 65,
    "left": 94,
    "top": 59
  },
  "productList_productc22be352_path4": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 330,
    "height": 77,
    "left": 90,
    "top": 59
  },
  "productList_productc22be352_line517416810": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 3,
    "left": 5.5,
    "top": 146
  },
  "productList_productc22be352_image3": {
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
    "width": 81,
    "height": 122,
    "left": 9,
    "top": 16
  },
  "productList_product": {
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
    "width": 420,
    "height": 668,
    "left": -6,
    "top": 507
  },
  "productList_product_rectangle8": {
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 419,
    "height": 668,
    "left": 0,
    "top": 0
  },
  "productList_product_rectangle9": {
    "opacity": 0.6000000238418579,
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 330,
    "height": 34,
    "left": 89,
    "top": 15
  },
  "productList_product_shaffon3piece": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
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
    "width": 150,
    "height": 27,
    "left": 94,
    "top": 19
  },
  "productList_product_path3": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 330,
    "height": 77,
    "left": 90,
    "top": 59
  },
  "productList_product_rs3000newSummerCollectionpureShaffon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 14,
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
    "width": 148,
    "height": 65,
    "left": 94,
    "top": 59
  },
  "productList_product_line5": {
    "opacity": 0.5,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 3,
    "left": 5.5,
    "top": 146
  },
  "productList_product_image4": {
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
    "width": 79,
    "height": 127,
    "left": 11,
    "top": 12
  },
  "productList_image7": {
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
    "left": -293,
    "top": -176
  }
});