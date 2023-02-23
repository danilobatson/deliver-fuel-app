import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ChevronDownIcon } from 'react-native-heroicons/outline';

const HeaderLeft = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.deliverText}>Deliver Now!</Text>
          <Text style={styles.locationText}>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: 'grey',
    marginRight: 10,
  },
  textView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    width: '100%',
  },
  deliverText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'rgba(0,0,0,.5)',
  },
  locationText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HeaderLeft;
