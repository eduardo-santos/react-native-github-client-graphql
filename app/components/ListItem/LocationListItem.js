import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import "moment/min/locales";

import styles from "./styles";

const LocationListItem = ({
  name,
  description,
  primaryLanguageName,
  stargazersTotalCount,
  licenseInfoName,
  updatedAt
}) => (
  <View style={styles.row}>
    <View style={styles.infoContainer}>
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      <View style={styles.rowInfo}>
        {primaryLanguageName ? (
          <View style={styles.iconValueContainer}>
            <Icon name="code" size={18} style={styles.icon} />
            <Text style={styles.defaultValues}>{primaryLanguageName}</Text>
          </View>
        ) : null}
        {stargazersTotalCount > 0 ? (
          <View style={styles.iconValueContainer}>
            <Icon name="star" size={18} style={styles.icon} />
            <Text style={styles.defaultValues}>{stargazersTotalCount}</Text>
          </View>
        ) : null}
        {licenseInfoName ? (
          <View style={styles.iconValueContainer}>
            <Icon name="gavel" size={17} style={styles.icon} />
            <Text style={styles.defaultValues}>{licenseInfoName}</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.updatedAt}>
        {updatedAt
          ? `Atualizado ${moment(updatedAt, "YYYYMMDD")
              .locale("pt-Br")
              .fromNow()}`
          : null}
      </Text>
    </View>
  </View>
);

LocationListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  primaryLanguageName: PropTypes.string,
  stargazersTotalCount: PropTypes.number,
  licenseInfoName: PropTypes.string,
  updatedAt: PropTypes.string
};

export default LocationListItem;
