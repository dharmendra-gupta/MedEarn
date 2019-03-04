import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';
import { uploadImage } from '../ipfs/ipfs_api';

// import Fire from '../Fire';

export default class NewPostScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Post',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} iconSize={23} color="black">
        <HeaderButtons.Item
          title="Share"
          onPress={() => {
            const text = navigation.getParam('text');
            const image = navigation.getParam('image');
            if (text && image) {
              navigation.goBack();
              // const ipfsHash = uploadImage(image);
              // Fire.shared.post({ text: text.trim(), image });
            } else {
              alert('Need valid description');
            }
          }}
        />
      </HeaderButtons>
    ),
  });

  state = { text: '' };

  render() {
    const { image } = this.props.navigation.state.params;
    return (
      <View style={{ padding: 10, flexDirection: 'row' }}>
        <Image
          source={{ uri: image }}
          style={{ resizeMode: 'contain', aspectRatio: 1, width: 72 }}
        />
        <TextInput
          multiline
          style={{ flex: 1, paddingHorizontal: 16 }}
          placeholder="Add a neat description..."
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
          
      </View>
    );
  }
}
