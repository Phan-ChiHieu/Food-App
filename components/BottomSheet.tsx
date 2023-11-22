import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import Colors from "@/themes/Color";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoint = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    []
  );
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoint}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
    >
      <View style={styles.conntentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInActive}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.subheader}>Location</Text>
      <Link href={"/(modal)/location-search"} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="location-outline" size={20} color={Colors.medium} />
            <Text style={{ flex: 1 }}>Current location</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
      </Link>
      <Text style={styles.subheader}>Arrival Time</Text>

      <TouchableOpacity>
        <View style={styles.item}>
          <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
          <Text style={{ flex: 1 }}>Now</Text>
          <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    marginTop: 26,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  conntentContainer: {
    // flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  toggleInActive: {
    // backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  inactiveText: {
    color: Colors.primary,
  },
  subheader: {
    fontWeight: "600",
    fontSize: 16,
    margin: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});

// 3:42
