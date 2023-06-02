import {
  Platform,
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: "#d9dadf",
    },

    container: {
        flex: 1,
        backgroundColor: '#34495E',
      },

      imageContainer: {
        flex: 1,
      },

      image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
      },

      detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
      },

      textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white',
      },

      largeText: {
        fontSize: 44,
      },
      
      smallText: {
        fontSize: 18,
      },
}
)