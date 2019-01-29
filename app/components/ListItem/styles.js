import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12
  },
  infoContainer: {
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 12,
    justifyContent: "flex-start"
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2695D2"
  },
  description: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#637381"
  },
  defaultValues: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#637381",
    marginRight: 16
  },
  updatedAt: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#637381",
    marginTop: 6
  },
  rowInfo: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 10
  },
  iconValueContainer: {
    flexDirection: "row"
  },
  icon: {
    paddingRight: 3
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#B3BCC7"
  }
});
