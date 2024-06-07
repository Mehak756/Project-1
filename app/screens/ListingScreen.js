import React from "react";
import { SafeAreaView, FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";

import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch For Sale",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];
function ListingScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.light,
  },
  view: {
    padding: 20,
  },
});
export default ListingScreen;
