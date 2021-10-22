import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class OrderTracking extends Component {

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
    <ScrollView data-layer="7a47e72c-b318-47fc-ab28-3e8f8816f3d5" style={styles.orderTracking}>
        <View data-layer="caec8a98-0cb7-466e-a164-7d54e1216ec8" style={styles.orderTracking_nav}>
            <View data-layer="3d1e9599-8fbc-4f85-a257-69f43da1e9f0" style={styles.orderTracking_nav_navContainer}></View>
            <View data-layer="aee83449-a880-4504-a890-bcae9bbef960" style={styles.orderTracking_nav_searchIcon}>
                <Svg data-layer="fccd1e36-999e-4659-a12c-ac2b180fec76" style={styles.orderTracking_nav_searchIcon_path1} preserveAspectRatio="none" viewBox="1.2255859375 -0.19036865234375 9.42822265625 7.384765625" fill="transparent"><SvgPath d="M 2.7255859375 1.30963134765625 L 9.15380859375 5.694374084472656"  /></Svg>
                <Svg data-layer="88636e88-edb5-4448-aa47-3b99ff3aa2ae" style={styles.orderTracking_nav_searchIcon_ellipse1} preserveAspectRatio="none" viewBox="-1.5 -1.5 17 17" fill="transparent"><SvgPath d="M 7 0 C 10.86599254608154 0 14 3.134007215499878 14 7 C 14 10.86599254608154 10.86599254608154 14 7 14 C 3.134007215499878 14 0 10.86599254608154 0 7 C 0 3.134007215499878 3.134007215499878 0 7 0 Z"  /></Svg>
            </View>
            <View data-layer="df63dc94-977a-4624-8f1a-ac7b6bbfc6f0" style={styles.orderTracking_nav_burger}>
                <Svg data-layer="9866e1f2-f173-4e15-a983-6804ec5b3422" style={styles.orderTracking_nav_burger_line1} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="5fdc1bf5-2392-41bf-a7cb-bc51a851895d" style={styles.orderTracking_nav_burger_line2} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
                <Svg data-layer="9487e0ce-56ca-48da-bbd6-c35b1732baaf" style={styles.orderTracking_nav_burger_line3} preserveAspectRatio="none" viewBox="-1 -1 17 2" fill="transparent"><SvgPath d="M 0 0 L 15 0"  /></Svg>
            </View>
            <View data-layer="d555c06e-e328-4db8-a4ac-68b165809ab9" style={styles.orderTracking_nav_heart6315f5fe}>
                <Svg data-layer="7d2121d2-4815-4565-948c-b8888ad34014" style={styles.orderTracking_nav_heart6315f5fe_heart} preserveAspectRatio="none" viewBox="-0.75 0.2500002384185791 18.95458984375 17.5" fill="transparent"><SvgPath d="M 8.727272987365723 15.97672843933105 C 4.63272762298584 11.94836521148682 0.7272727489471436 8.488001823425293 0.7272727489471436 5.502545833587646 C 0.7272727489471436 2.745454549789429 2.958545207977295 1.727272748947144 4.568000316619873 1.727272748947144 C 5.522182464599609 1.727272748947144 7.586909294128418 2.091636419296265 8.727272987365723 4.968727588653564 C 9.883636474609375 2.082909107208252 11.97381973266602 1.734545350074768 12.89163780212402 1.734545350074768 C 14.73890781402588 1.734545350074768 16.72727394104004 2.913454532623291 16.72727394104004 5.502545833587646 C 16.72727394104004 8.461818695068359 12.99199962615967 11.7752742767334 8.727272987365723 15.97672843933105 M 12.89163780212402 1.007272958755493 C 11.28945446014404 1.007272958755493 9.658181190490723 1.765091061592102 8.727272987365723 3.362181901931763 C 7.792727947235107 1.757818222045898 6.165818214416504 1.000000238418579 4.568000316619873 1.000000238418579 C 2.253090858459473 1.000000238418579 0 2.590545415878296 0 5.502545833587646 C 0 8.892364501953125 4.051636695861816 12.36000061035156 8.727272987365723 17 C 13.40363788604736 12.36000061035156 17.45454597473145 8.892365455627441 17.45454597473145 5.502545833587646 C 17.45454597473145 2.58545446395874 15.20363712310791 1.007272601127625 12.89163780212402 1.007272601127625"  /></Svg>
            </View>
        </View>
        <ReactImage data-layer="2d4d7291-567a-42b3-b3ca-2d3fdef92c47" source={require('./assets/image8.png')} style={styles.orderTracking_image8} />
        <View data-layer="926642be-839a-4933-83c6-25ee7978a352" style={styles.orderTracking_rectangle27}></View>
        <View data-layer="df9fc72d-593a-4916-afe7-4d43c2b3db5e" style={styles.orderTracking_rectangle28}></View>
        <View data-layer="96685718-55af-4acd-be01-7672ea81106d" style={styles.orderTracking_rectangle29}></View>
        <Svg data-layer="e40cc117-be4e-4da5-8e44-333d9598f2ae" style={styles.orderTracking_path5} preserveAspectRatio="none" viewBox="6860.5 3941.5 97 91" fill="transparent"><SvgPath d="M 6956 3943 L 6941 3943 L 6933 3943 L 6919 3950 L 6913 3956 L 6923 3970 L 6933 3977 L 6941 3984 L 6907 4011 L 6907 4031 L 6902 4031 L 6897 4025 L 6878 4031 C 6878 4031 6866 4031 6862 4031"  /></Svg>
        <ReactImage data-layer="d2e0c634-79b0-41df-8149-7ed94d06d005" source={require('./assets/icons8Maps96da4f7cc4.png')} style={styles.orderTracking_icons8Maps96da4f7cc4} />
        <ReactImage data-layer="2a528a49-8c45-40e7-90ec-b871ebb94dd9" source={require('./assets/icons8Maps96.png')} style={styles.orderTracking_icons8Maps96} />
        <Text data-layer="42e31b1c-8bcc-4ce2-9cd1-bb7c913f3d7b" style={styles.orderTracking_confirmationOfProduct20Oct1600}>Confirmation of product
20 oct 16:00</Text>
        <Svg data-layer="33c5dd7f-e6a9-4608-a120-038ff5188513" style={styles.orderTracking_path6} preserveAspectRatio="none" viewBox="-0.75 -0.75 44.5 452.5" fill="rgba(255, 227, 180, 1)"><SvgPath d="M 0 0 L 43 0 L 43 451 L 0 451 L 0 0 Z"  /></Svg>
        <Text data-layer="351fa9ae-9934-4884-88c3-d23bcd3eb398" style={styles.orderTracking_yourProductHavingIdb629e279}>Your product having id #82610 is confirmed</Text>
        <Text data-layer="b2fc0f65-14f2-452c-86a8-38bb1f8b8c2d" style={styles.orderTracking_productIsPreparingToShip21Oct1330}>Product is preparing to ship
21 oct 13:30</Text>
        <Text data-layer="89d6fb4f-06ad-4fad-b27a-d5f998811625" style={styles.orderTracking_yourProductHavingId4f735959}>Your product having id #82610 is being prepared</Text>
        <ReactImage data-layer="b87f0715-5949-4854-9c9b-b9ce0cc90209" source={require('./assets/icons8PurchaseOrder24.png')} style={styles.orderTracking_icons8PurchaseOrder24} />
        <Text data-layer="cd6eef88-626d-4b17-8ada-1052db341ec0" style={styles.orderTracking_productHasShipped21Oct2100}>Product has shipped
21 oct 21:00</Text>
        <Text data-layer="7277a873-dc68-4a30-8a4b-8d9be5e70e4a" style={styles.orderTracking_yourProductHavingId3ba4856f}>Your product having id #82610 has been shipped.



</Text>
        <ReactImage data-layer="162e012b-6038-4e00-bdc0-4628c99040e7" source={require('./assets/icons8Delivery24.png')} style={styles.orderTracking_icons8Delivery24} />
        <Text data-layer="bd5bbe1d-f47c-4b2e-8e10-e1e4e4902337" style={styles.orderTracking_delivered22Oct1110}>Delivered
22 oct 11:10</Text>
        <Text data-layer="7c4634c0-3bd8-4abe-814e-09f6e01a0a3f" style={styles.orderTracking_yourProductHavingId}>Your product having id #82610 delivered</Text>
        <ReactImage data-layer="162dcfcf-3015-465f-9bf3-18cce7cb2602" source={require('./assets/openBox.png')} style={styles.orderTracking_openBox} />
        <ReactImage data-layer="0f83b31e-0e4b-46a0-8cd2-73301cc634ef" source={require('./assets/deliveringBox.png')} style={styles.orderTracking_deliveringBox} />
        <Svg data-layer="8047da4c-7b6f-4443-a4e9-fb66e4c360fa" style={styles.orderTracking_ellipse3} preserveAspectRatio="none" viewBox="-1.5 -1.5 4 23" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 0.5 0 C 0.7761423587799072 0 1 4.477152347564697 1 10 C 1 15.52284812927246 0.7761423587799072 20 0.5 20 C 0.2238576412200928 20 0 15.52284812927246 0 10 C 0 4.477152347564697 0.2238576412200928 0 0.5 0 Z"  /></Svg>
        <Svg data-layer="7ebc76cf-47e9-4f2f-92b3-e84e2597d930" style={styles.orderTracking_ellipse4} preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 20.5" fill="transparent"><SvgPath d="M 9 0 C 13.97056198120117 0 18 4.253295421600342 18 9.5 C 18 14.7467041015625 13.97056198120117 19 9 19 C 4.02943754196167 19 0 14.7467041015625 0 9.5 C 0 4.253295421600342 4.02943754196167 0 9 0 Z"  /></Svg>
        <Svg data-layer="f6502e24-9dd2-4321-8037-ddc86f56efb8" style={styles.orderTracking_path7} preserveAspectRatio="none" viewBox="6668.25 4478.07958984375 4.5 83.17041015625" fill="transparent"><SvgPath d="M 6670.5 4559 L 6670.5 4480.32958984375"  /></Svg>
        <Svg data-layer="74a8be8c-3b0f-4280-ac01-ff5f467bdd44" style={styles.orderTracking_path8} preserveAspectRatio="none" viewBox="6668.25 4363.6669921875 4.5 74.5830078125" fill="transparent"><SvgPath d="M 6670.5 4436 L 6670.5 4365.9169921875"  /></Svg>
        <Svg data-layer="6bc6e241-2469-4c18-a6f8-311c910a0649" style={styles.orderTracking_path9} preserveAspectRatio="none" viewBox="6668.75 4249.25439453125 4.5 84.99560546875" fill="transparent"><SvgPath d="M 6671 4332 L 6671 4251.50439453125"  /></Svg>
        <Svg data-layer="985c83f2-8fba-4113-a98e-bd0406fb8b7b" style={styles.orderTracking_ellipse5} preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 20.5" fill="rgba(0, 177, 255, 1)"><SvgPath d="M 9 0 C 13.97056198120117 0 18 4.253295421600342 18 9.5 C 18 14.7467041015625 13.97056198120117 19 9 19 C 4.02943754196167 19 0 14.7467041015625 0 9.5 C 0 4.253295421600342 4.02943754196167 0 9 0 Z"  /></Svg>
        <Svg data-layer="46f61581-34b8-406b-ad96-161dc480ebad" style={styles.orderTracking_ellipse6} preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 20.5" fill="rgba(0, 177, 255, 1)"><SvgPath d="M 9 0 C 13.97056198120117 0 18 4.253295421600342 18 9.5 C 18 14.7467041015625 13.97056198120117 19 9 19 C 4.02943754196167 19 0 14.7467041015625 0 9.5 C 0 4.253295421600342 4.02943754196167 0 9 0 Z"  /></Svg>
        <Svg data-layer="018f108c-8200-4429-aefd-bcfcca3c5cbc" style={styles.orderTracking_ellipse7} preserveAspectRatio="none" viewBox="-0.75 -0.75 19.5 20.5" fill="rgba(0, 177, 255, 1)"><SvgPath d="M 9 0 C 13.97056198120117 0 18 4.253295421600342 18 9.5 C 18 14.7467041015625 13.97056198120117 19 9 19 C 4.02943754196167 19 0 14.7467041015625 0 9.5 C 0 4.253295421600342 4.02943754196167 0 9 0 Z"  /></Svg>
        <Text data-layer="d32f2823-d153-4b4e-a02e-2cae7c47c386" style={styles.orderTracking_trackingId}>Tracking ID:     #82610</Text>
    </ScrollView>
    );
  }
}

OrderTracking.propTypes = {

}

OrderTracking.defaultProps = {

}


const styles = StyleSheet.create({
  "orderTracking": {
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
    "width": 390,
    "height": 844,
    "left": 0,
    "top": 0
  },
  "orderTracking_nav": {
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
  "orderTracking_nav_navContainer": {
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
  "orderTracking_nav_searchIcon": {
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
  "orderTracking_nav_searchIcon_path1": {
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
  "orderTracking_nav_searchIcon_ellipse1": {
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
  "orderTracking_nav_burger": {
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
  "orderTracking_nav_burger_line1": {
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
  "orderTracking_nav_burger_line2": {
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
  "orderTracking_nav_burger_line3": {
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
  "orderTracking_nav_heart6315f5fe": {
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
  "orderTracking_nav_heart6315f5fe_heart": {
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
  "orderTracking_image8": {
    "opacity": 0.8700000047683716,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 390,
    "height": 265,
    "left": 0,
    "top": 70
  },
  "orderTracking_rectangle27": {
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
    "width": 390,
    "height": 119,
    "left": 0,
    "top": 393
  },
  "orderTracking_rectangle28": {
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
    "width": 390,
    "height": 102,
    "left": 0,
    "top": 627
  },
  "orderTracking_rectangle29": {
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
    "width": 390,
    "height": 115,
    "left": 0,
    "top": 729
  },
  "orderTracking_path5": {
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
    "width": 98,
    "height": 92,
    "left": 211,
    "top": 157
  },
  "orderTracking_icons8Maps96da4f7cc4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 33,
    "borderTopRightRadius": 33,
    "borderBottomLeftRadius": 33,
    "borderBottomRightRadius": 33,
    "width": 27,
    "height": 28,
    "left": 196,
    "top": 219
  },
  "orderTracking_icons8Maps96": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 33,
    "borderTopRightRadius": 33,
    "borderBottomLeftRadius": 33,
    "borderBottomRightRadius": 33,
    "width": 27,
    "height": 28,
    "left": 294,
    "top": 131
  },
  "orderTracking_confirmationOfProduct20Oct1600": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 20,
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
    "width": 196,
    "height": 44,
    "left": 56,
    "top": 737
  },
  "orderTracking_path6": {
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
    "width": 43,
    "height": 451,
    "left": 0,
    "top": 393
  },
  "orderTracking_yourProductHavingIdb629e279": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
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
    "width": 309,
    "height": 19,
    "left": 44,
    "top": 805.5
  },
  "orderTracking_productIsPreparingToShip21Oct1330": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 20,
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
    "width": 221,
    "height": 44,
    "left": 50,
    "top": 637
  },
  "orderTracking_yourProductHavingId4f735959": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
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
    "width": 346,
    "height": 19,
    "left": 44,
    "top": 695.5
  },
  "orderTracking_icons8PurchaseOrder24": {
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
    "width": 34,
    "height": 34,
    "left": 5,
    "top": 763
  },
  "orderTracking_productHasShipped21Oct2100": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 20,
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
    "width": 161,
    "height": 44,
    "left": 50,
    "top": 526
  },
  "orderTracking_yourProductHavingId3ba4856f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
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
    "width": 331,
    "height": 85,
    "left": 44.5,
    "top": 590.5
  },
  "orderTracking_icons8Delivery24": {
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
    "width": 34,
    "height": 34,
    "left": 5,
    "top": 543
  },
  "orderTracking_delivered22Oct1110": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 20,
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
    "width": 100,
    "height": 44,
    "left": 56,
    "top": 401
  },
  "orderTracking_yourProductHavingId": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 16,
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
    "width": 287,
    "height": 19,
    "left": 44,
    "top": 464
  },
  "orderTracking_openBox": {
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
    "width": 46,
    "height": 46,
    "left": -2,
    "top": 652
  },
  "orderTracking_deliveringBox": {
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
    "width": 39,
    "height": 39,
    "left": 1,
    "top": 433
  },
  "orderTracking_ellipse3": {
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
    "width": 1,
    "height": 20,
    "left": 21,
    "top": 452
  },
  "orderTracking_ellipse4": {
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
    "width": 18,
    "height": 19,
    "left": 12,
    "top": 452
  },
  "orderTracking_path7": {
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
    "width": 6,
    "height": 84.67,
    "left": 18.5,
    "top": 693.33
  },
  "orderTracking_path8": {
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
    "width": 6,
    "height": 76.08,
    "left": 18.5,
    "top": 578.92
  },
  "orderTracking_path9": {
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
    "width": 6,
    "height": 86.5,
    "left": 19,
    "top": 464.5
  },
  "orderTracking_ellipse5": {
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
    "width": 18,
    "height": 19,
    "left": 12,
    "top": 568
  },
  "orderTracking_ellipse6": {
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
    "width": 18,
    "height": 19,
    "left": 12,
    "top": 686
  },
  "orderTracking_ellipse7": {
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
    "width": 18,
    "height": 19,
    "left": 13,
    "top": 754
  },
  "orderTracking_trackingId": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 29,
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
    "width": 274,
    "height": 32,
    "left": 41.5,
    "top": 347.5
  }
});