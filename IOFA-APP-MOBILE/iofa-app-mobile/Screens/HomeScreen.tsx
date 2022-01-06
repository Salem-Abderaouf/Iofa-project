import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import Colors from "../src/depen/Colors";
import Icon from "react-native-vector-icons/AntDesign";
import UploadItemsOrder from "../src/depen/UploadItemsOrder";
import UploadItemsOrderAr from "../src/depen/UploadItemsOrderAr";

const WidthItem = Dimensions.get("window").width / 2 - 30;

export default function HomeScreen({ navigation }) {

  const [ar, setAr] = useState(false);

  const Card = ({ ServiceItem }) => {
    let navigationRoute = `${ServiceItem.navigatTo}`
    return (

      <TouchableHighlight
        style={styles.CardItem}
        underlayColor="#00b76180"
        onPress={() => navigation.navigate(navigationRoute, ServiceItem)}
      >
        <>
          <View style={styles.CardItemImage}>
            <Image
              source={ServiceItem.img}
              style={styles.CardItemImageimg}
            />
          </View>
          <Text style={styles.CardTitle}>{ServiceItem.name}</Text>
        </>
      </TouchableHighlight>


    );
  };

  return (
    <SafeAreaView style={styles.HomeScreen}>
      <View style={styles.HomeScreenHeader}>
        <View style={styles.HomeScreenHeaderContainer}>
          <Text style={styles.HeaderLogo}>Riofarm</Text>
          <View style={styles.notificatonIcon}>
            <Icon
              onPress={() => navigation.navigate("Notifications")}
              name="bells"
              size={26}
              color={Colors.white}
              style={styles.notificatonIcon}
            />
            <View style={styles.notificatonNumber}>
              <Text style={styles.notificatonNumberText}> 1 </Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        numColumns={2}
        data={!ar ? UploadItemsOrder : UploadItemsOrderAr}
        renderItem={({ item }) => {
          return <Card ServiceItem={item} />;
        }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 0,
          paddingBottom: 83,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.dark,
  },
  HomeScreenHeader: {
    height: 73,
    width: Dimensions.get('window').width - 60,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  HeaderRightComponents: {
    flexDirection: "row-reverse",
    alignItems: 'center',
    width: 200,
    justifyContent: "space-evenly",
  },
  HomeScreenHeaderContainer: {
    flexDirection: "row",
    width: Dimensions.get('window').width - 30,
    justifyContent: "space-between",
  },
  HeaderLogo: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: Colors.green,
  },
  HomeScreenSearchBar: {
    marginTop: 30,
    flexDirection: "row",
    marginBottom: 10,
  },
  HomeScreenSearchContainer: {
    height: 50,
    backgroundColor: Colors.light,
    borderRadius: 22,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  HomeScreenSearchInput: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
    flex: 1,
  },
  HomeScreenHomburgerbtn: {
    marginLeft: 10,
    height: 45,
    width: 45,
    backgroundColor: Colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  CardItem: {
    height: 210,
    backgroundColor: "#fff",
    justifyContent: 'space-around',
    paddingVertical: 20,
    width: WidthItem,
    marginHorizontal: 2,
    borderRadius: 22,
    marginTop: 18,
    padding: 15,
  },
  CardItemImage: {
    height: 100,
    alignItems: "center",
  },
  CardItemImageimg: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  CardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.green,
    textAlign: 'center',
    marginTop: 14,
  },
  notificatonContainer: {
    position: "relative",
    minWidth: 60
  },
  notificatonIcon: {
    position: "absolute",
    right: 10,
    top: 0,
  },
  notificatonNumber: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  notificatonNumberText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
  Lang: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.dark,
  }
});