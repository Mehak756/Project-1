import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import PickerItem from "./PickerItem";

import AppText from "./AppText";

function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  numOfColumns = 1,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={[styles.container, { width }]}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.medium}
                style={styles.icon}
              />
            )}

            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}

            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.medium}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <SafeAreaView>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              numColumns={numOfColumns}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </SafeAreaView>
        </Modal>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
