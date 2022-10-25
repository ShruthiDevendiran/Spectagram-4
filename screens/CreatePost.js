import React,{Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={
        dropDownPicker: 40,
        previewImage:"image_1",
        authorName:"",
        caption:"",
        }
    }

    render(){
        let preview_images={
            "image_1" : require("../assets/assets/image_1.jpg"),
            "image_2" : require("../assets/assets/image_2.jpg"),
            "image_3" : require("../assets/assets/image_3.jpg"),
            "image_4" : require("../assets/assets/image_4.jpg"),
            "image_5" : require("../assets/assets/image_5.jpg"),
            "image_6" : require("../assets/assets/image_6.jpg"),
            "image_7" : require("../assets/assets/image_7.jpg"),
        }

        return(
          <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image source={require("../assets/assets/logo.png")} style={styles.iconImage}/>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Create New Post</Text>
                </View>
                <View>
                    <Image source={preview_images[this.state.previewImage]} style={styles.previewImage}/>
                    <View style={{height:RFValue(this.state.dropDownPicker)}}>
                         <DropDownPicker
                         items={[
                            {label:"image 1", value:"image_1"},
                            {label:"image 2", value:"image_2"},
                            {label:"image 3", value:"image_3"},
                            {label:"image 4", value:"image_4"},
                            {label:"image 5", value:"image_5"},
                            {label:"image 6", value:"image_6"},
                            {label:"image 7", value:"image_7"},
                         ]}
                         />
                    </View>
                    <ScrollView>
                        <TextInput
                        style={styles.name}
                        onChangeText={(name)=>{this.setState({name})}}
                        placeHolderText={"Author Name"}
                        placeHolderColor={"white"}
                        />

                        <TextInput
                        style={styles.caption}
                        onChangeText={(caption)=>{this.setState({caption})}}
                        placeHolderText={"Caption"}
                        placeHolderColor={"white"}
                        />
                    </ScrollView>
                </View>
              </View>
          </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    },
    previewImage: {
        width: "93%",
        height: RFValue(250),
        alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10),
        resizeMode: "contain",
      },
      name:{
        alignItems:"center",
        justifyContent:"center",
        height:"10%",
        width:"50%",
        borderRadius:10,
      },
      caption:{
        alignItems:"center",
        justifyContent:"center",
        height:"10%",
        width:"50%",
        borderRadius:10,
      }
});
