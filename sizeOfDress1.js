import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SizeOfDress1 extends Component {

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
    <ScrollView data-layer="767d54c0-dda8-4a38-80b3-4ef7d96f74a1" style={styles.sizeOfDress1}>
        <View data-layer="8195a446-1ab5-4522-a31e-7bfc8abdaf3d" style={styles.sizeOfDress1_frontCover}>
            <ReactImage data-layer="e4128e41-cc0b-4044-9b29-b6e663f5a801" source={require('./assets/introPicture.png')} style={styles.sizeOfDress1_frontCover_introPicture} />
            <View data-layer="5ffeae74-5911-4f45-a0d2-eef22c407c2d" style={styles.sizeOfDress1_frontCover_headerText}>
                <View data-layer="d90ab3c7-d67e-486a-9906-1945feafc610" style={styles.sizeOfDress1_frontCover_headerText_rectangle1}></View>
                <Text data-layer="7e1bd2a7-317d-4067-be6b-c5cbcf6345c3" style={styles.sizeOfDress1_frontCover_headerText_goingOutOutfits}>Going Out Outfits</Text>
            </View>
        </View>
        <View data-layer="a71f03c1-a61b-4791-bafb-cb411b4d451d" style={styles.sizeOfDress1_nav}>
            <View data-layer="4693ccd3-8a57-4fd9-9d0b-5e2cbb721a2d" style={styles.sizeOfDress1_nav_navContainer}></View>
            <View data-layer="0fb06884-93e5-4575-85ea-5bc7a78781c0" style={styles.sizeOfDress1_nav_searchIcon}>
                <Svg data-layer="d25e8b2f-1c0d-4be0-a23a-b4d4829e492c" style={styles.sizeOfDress1_nav_searchIcon_path1} preserveAspectRatio="none" viewBox="1.2255859375 -0.19036865234375 9.4287109375 7.384765625" fill="rgba(255, 227, 180, 1)"><SvgPath d="M 2.7255859375 1.30963134765625 L 9.15380859375 5.694374084472656"  /></Svg>
                <Svg data-layer="ac57239e-c44b-4ed2-ae38-cb2701576fa0" style={styles.sizeOfDress1_nav_searchIcon_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 17 17" fill="transparent"><SvgPath d="M 7 0 C 10.86599254608154 0 14 3.134007215499878 14 7 C 14 10.86599254608154 10.86599254608154 14 7 14 C 3.134007215499878 14 0 10.86599254608154 0 7 C 0 3.134007215499878 3.134007215499878 0 7 0 Z"  /></Svg>
            </View>
            <View data-layer="ddbd0a4e-a82e-4b87-8486-d6a0f7955241" style={styles.sizeOfDress1_nav_burger}>
                <Svg data-layer="b64f05e2-2b64-43ad-a5d5-9e40ff739c87" style={styles.sizeOfDress1_nav_burger_line1} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="d6dd4e8b-401b-4dd5-81e5-99491aa975d2" style={styles.sizeOfDress1_nav_burger_line2} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="63094eb6-0a57-492c-bed6-d696a3a83f9d" style={styles.sizeOfDress1_nav_burger_line3} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
            </View>
            <Svg data-layer="af1f4ab5-0e2f-441d-aa61-8889abf83b1f" style={styles.sizeOfDress1_nav_heart} preserveAspectRatio="none" viewBox="-0.75 0.2500002384185791 18.9541015625 17.5" fill="transparent"><SvgPath d="M 8.727272987365723 15.97672843933105 C 4.63272762298584 11.94836521148682 0.7272727489471436 8.488001823425293 0.7272727489471436 5.502545833587646 C 0.7272727489471436 2.745454549789429 2.958545207977295 1.727272748947144 4.568000316619873 1.727272748947144 C 5.522182464599609 1.727272748947144 7.586909294128418 2.091636419296265 8.727272987365723 4.968727588653564 C 9.883636474609375 2.082909107208252 11.97381973266602 1.734545350074768 12.89163780212402 1.734545350074768 C 14.73890781402588 1.734545350074768 16.72727394104004 2.913454532623291 16.72727394104004 5.502545833587646 C 16.72727394104004 8.461818695068359 12.99199962615967 11.7752742767334 8.727272987365723 15.97672843933105 M 12.89163780212402 1.007272958755493 C 11.28945446014404 1.007272958755493 9.658181190490723 1.765091061592102 8.727272987365723 3.362181901931763 C 7.792727947235107 1.757818222045898 6.165818214416504 1.000000238418579 4.568000316619873 1.000000238418579 C 2.253090858459473 1.000000238418579 0 2.590545415878296 0 5.502545833587646 C 0 8.892364501953125 4.051636695861816 12.36000061035156 8.727272987365723 17 C 13.40363788604736 12.36000061035156 17.45454597473145 8.892365455627441 17.45454597473145 5.502545833587646 C 17.45454597473145 2.58545446395874 15.20363712310791 1.007272601127625 12.89163780212402 1.007272601127625"  /></Svg>
        </View>
        <View data-layer="d75e553f-9f83-4efd-8a4d-12bfa2896159" style={styles.sizeOfDress1_card1}>
            <View data-layer="a4458710-8787-4e23-a652-c383fcac137e" style={styles.sizeOfDress1_card1_cardContainer}></View>
            <Text data-layer="8ef85aa3-9306-4db0-8733-928b1cb4592a" style={styles.sizeOfDress1_card1_newDresses}>New Dresses</Text>
            <Text data-layer="90d5a3be-5c34-490c-a46e-e2727965130e" style={styles.sizeOfDress1_card1_summerCollection}>Summer Collection</Text>
            <View data-layer="738abf61-2539-4c0f-8f50-8f09d56bcce1" style={styles.sizeOfDress1_card1_button}>
                <View data-layer="98c6d314-07db-4ee9-9f56-925e0dc23e63" style={styles.sizeOfDress1_card1_button_rectangle3}></View>
                <Text data-layer="1e09e362-fc44-48b2-8a5a-683793f5c1d9" style={styles.sizeOfDress1_card1_button_seeMore}>See more</Text>
            </View>
        </View>
        <View data-layer="c3d5de5b-7617-4784-a3e9-4787be686422" style={styles.sizeOfDress1_checkoutBasket}>
            <View data-layer="035c1a5a-ed7f-4de0-9c2a-410edfa67a24" style={styles.sizeOfDress1_checkoutBasket_shopContainer}></View>
            <Text data-layer="9f5c794a-93d2-4f6d-aa05-e7ec02f589f1" style={styles.sizeOfDress1_checkoutBasket_sizeffcf6c73}>Size: </Text>
            <View data-layer="b7cef4c9-327e-4db5-9fe1-9b2ff60feaae" style={styles.sizeOfDress1_checkoutBasket_group1}>
                <View data-layer="9a35d509-0c6e-4bba-a6e7-d54e1f2c49b0" style={styles.sizeOfDress1_checkoutBasket_group1_sizeb2a3d0cb}>
                    <Svg data-layer="3084cc97-0ebf-4d7c-a0b3-540a65ef3d9d" style={styles.sizeOfDress1_checkoutBasket_group1_sizeb2a3d0cb_ellipse2b3afdc84} preserveAspectRatio="none" viewBox="0 0 38 38" fill="rgba(232, 232, 232, 1)"><SvgPath d="M 19 0 C 29.493408203125 0 38 8.506590843200684 38 19 C 38 29.493408203125 29.493408203125 38 19 38 C 8.506590843200684 38 0 29.493408203125 0 19 C 0 8.506590843200684 8.506590843200684 0 19 0 Z"  /></Svg>
                    <Text data-layer="6b08d0c6-8d26-402d-9332-87389e8b9c77" style={styles.sizeOfDress1_checkoutBasket_group1_sizeb2a3d0cb_s}>S</Text>
                </View>
                <View data-layer="31504fd6-dee9-465d-ab15-1c1776cae951" style={styles.sizeOfDress1_checkoutBasket_group1_sizec88abde1}>
                    <Svg data-layer="6e8636e5-be49-42a9-909b-468c3a458444" style={styles.sizeOfDress1_checkoutBasket_group1_sizec88abde1_ellipse28bbace0d} preserveAspectRatio="none" viewBox="0 0 38 38" fill="rgba(232, 232, 232, 1)"><SvgPath d="M 19 0 C 29.493408203125 0 38 8.506590843200684 38 19 C 38 29.493408203125 29.493408203125 38 19 38 C 8.506590843200684 38 0 29.493408203125 0 19 C 0 8.506590843200684 8.506590843200684 0 19 0 Z"  /></Svg>
                    <Text data-layer="163e0ce8-6493-49e0-a964-cd10041b7019" style={styles.sizeOfDress1_checkoutBasket_group1_sizec88abde1_m}>M</Text>
                </View>
                <View data-layer="7f6bb0eb-8389-48c8-9401-3c6d6341578b" style={styles.sizeOfDress1_checkoutBasket_group1_size693793b9}>
                    <Svg data-layer="52de3336-e801-4e2e-b3e6-686a543dfeef" style={styles.sizeOfDress1_checkoutBasket_group1_size693793b9_ellipse286616613} preserveAspectRatio="none" viewBox="0 0 38 38" fill="rgba(232, 232, 232, 1)"><SvgPath d="M 19 0 C 29.493408203125 0 38 8.506590843200684 38 19 C 38 29.493408203125 29.493408203125 38 19 38 C 8.506590843200684 38 0 29.493408203125 0 19 C 0 8.506590843200684 8.506590843200684 0 19 0 Z"  /></Svg>
                    <Text data-layer="68140488-3f52-4cc0-b236-5063de49f0b8" style={styles.sizeOfDress1_checkoutBasket_group1_size693793b9_l}>L</Text>
                </View>
                <View data-layer="cbbd28ce-8e68-43b6-9582-76ab15ce233e" style={styles.sizeOfDress1_checkoutBasket_group1_size}>
                    <Svg data-layer="d862b496-b1df-45f2-b8ab-110ebce30e08" style={styles.sizeOfDress1_checkoutBasket_group1_size_ellipse2} preserveAspectRatio="none" viewBox="0 0 38 38" fill="rgba(232, 232, 232, 1)"><SvgPath d="M 19 0 C 29.493408203125 0 38 8.506590843200684 38 19 C 38 29.493408203125 29.493408203125 38 19 38 C 8.506590843200684 38 0 29.493408203125 0 19 C 0 8.506590843200684 8.506590843200684 0 19 0 Z"  /></Svg>
                    <Text data-layer="3c1dcb25-a409-431c-b120-c3ccdacf43dc" style={styles.sizeOfDress1_checkoutBasket_group1_size_xl}>XL</Text>
                </View>
            </View>
            <View data-layer="afa2c33e-033e-444e-816b-52af453a5cf8" style={styles.sizeOfDress1_checkoutBasket_basket}>
                <View data-layer="47949173-2b99-407c-a574-27865907859c" style={styles.sizeOfDress1_checkoutBasket_basket_rectangle5}></View>
                <Text data-layer="13091725-49ef-4b06-abae-7c8af0df1533" style={styles.sizeOfDress1_checkoutBasket_basket_addToBasket}>ADD TO BASKET</Text>
            </View>
        </View>
        <ReactImage data-layer="7c71ec00-7c3e-4cc4-9cad-7c97a4102c1a" source={require('./assets/image1.png')} style={styles.sizeOfDress1_image1} />
        <ReactImage data-layer="7b7b538e-b643-4336-81ed-909e2d38baf4" source={require('./assets/image7.png')} style={styles.sizeOfDress1_image7} />
    </ScrollView>
    );
  }
}

SizeOfDress1.propTypes = {

}

SizeOfDress1.defaultProps = {

}


const styles = StyleSheet.create({
  "sizeOfDress1": {
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
    "width": 385,
    "height": 736,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_frontCover": {
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
    "width": 287,
    "height": 430,
    "left": 64,
    "top": 59
  },
  "sizeOfDress1_frontCover_introPicture": {
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
    "width": 287,
    "height": 430,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_frontCover_headerText": {
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
    "left": 28,
    "top": 240
  },
  "sizeOfDress1_frontCover_headerText_rectangle1": {
    "opacity": 0.4699999988079071,
    "position": "absolute",
    "backgroundColor": "rgba(214, 137, 57, 1)",
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
    "width": 230,
    "height": 57,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_frontCover_headerText_goingOutOutfits": {
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
    "width": 188,
    "height": 32,
    "left": 21,
    "top": 13
  },
  "sizeOfDress1_nav": {
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
  "sizeOfDress1_nav_navContainer": {
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
  "sizeOfDress1_nav_searchIcon": {
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
    "top": 27
  },
  "sizeOfDress1_nav_searchIcon_path1": {
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
  "sizeOfDress1_nav_searchIcon_ellipse1": {
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
  "sizeOfDress1_nav_burger": {
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
    "left": 50.5,
    "top": 30
  },
  "sizeOfDress1_nav_burger_line1": {
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
  "sizeOfDress1_nav_burger_line2": {
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
  "sizeOfDress1_nav_burger_line3": {
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
  "sizeOfDress1_nav_heart": {
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
    "top": 26.5
  },
  "sizeOfDress1_card1": {
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
    "width": 385,
    "height": 666,
    "left": 0,
    "top": 70
  },
  "sizeOfDress1_card1_cardContainer": {
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
      "width": 0,
      "height": -3
    },
    "shadowRadius": 5,
    "width": 385,
    "height": 666,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_card1_newDresses": {
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
    "left": 183,
    "top": 131.97
  },
  "sizeOfDress1_card1_summerCollection": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 18,
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
    "width": 150,
    "height": 24,
    "left": 183,
    "top": 274.02
  },
  "sizeOfDress1_card1_button": {
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
    "left": 206.03,
    "top": 485.98
  },
  "sizeOfDress1_card1_button_rectangle3": {
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
  "sizeOfDress1_card1_button_seeMore": {
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
  "sizeOfDress1_checkoutBasket": {
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
    "width": 338,
    "height": 145,
    "left": 24,
    "top": 538
  },
  "sizeOfDress1_checkoutBasket_shopContainer": {
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
    "width": 338,
    "height": 145,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_sizeffcf6c73": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 24,
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
    "width": 59,
    "height": 22,
    "left": 19,
    "top": 41
  },
  "sizeOfDress1_checkoutBasket_group1": {
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
    "width": 194,
    "height": 38,
    "left": 86,
    "top": 39
  },
  "sizeOfDress1_checkoutBasket_group1_sizeb2a3d0cb": {
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
    "width": 38,
    "height": 38,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_sizeb2a3d0cb_ellipse2b3afdc84": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 38,
    "height": 38,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_sizeb2a3d0cb_s": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 22,
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
    "width": 12,
    "height": 30,
    "left": 13,
    "top": 4
  },
  "sizeOfDress1_checkoutBasket_group1_sizec88abde1": {
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
    "width": 38,
    "height": 38,
    "left": 50,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_sizec88abde1_ellipse28bbace0d": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 38,
    "height": 38,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_sizec88abde1_m": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 22,
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
    "width": 20,
    "height": 30,
    "left": 9,
    "top": 4
  },
  "sizeOfDress1_checkoutBasket_group1_size693793b9": {
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
    "width": 38,
    "height": 38,
    "left": 103,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_size693793b9_ellipse286616613": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 38,
    "height": 38,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_size693793b9_l": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 22,
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
    "width": 10,
    "height": 30,
    "left": 14,
    "top": 4
  },
  "sizeOfDress1_checkoutBasket_group1_size": {
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
    "width": 38,
    "height": 38,
    "left": 156,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_size_ellipse2": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 2
    },
    "shadowRadius": 2,
    "width": 38,
    "height": 38,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_group1_size_xl": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(74, 74, 74, 1)",
    "fontSize": 22,
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
    "width": 23,
    "height": 30,
    "left": 8,
    "top": 4
  },
  "sizeOfDress1_checkoutBasket_basket": {
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
    "width": 194,
    "height": 38,
    "left": 78,
    "top": 95
  },
  "sizeOfDress1_checkoutBasket_basket_rectangle5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(91, 91, 91, 1)",
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
    "width": 194,
    "height": 38,
    "left": 0,
    "top": 0
  },
  "sizeOfDress1_checkoutBasket_basket_addToBasket": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 22,
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
    "width": 158,
    "height": 30,
    "left": 18,
    "top": 4
  },
  "sizeOfDress1_image1": {
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
    "width": 257,
    "height": 372,
    "left": 64,
    "top": 100
  },
  "sizeOfDress1_image7": {
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
    "left": -308,
    "top": -136
  }
});