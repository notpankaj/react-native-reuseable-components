import React from 'react';
import {SafeAreaView} from 'react-native';
import VideoComp from './apps/test/VideoComp';

const videoUris = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://static.videezy.com/system/resources/previews/000/041/532/original/DSCF8319.mp4',
];

const App = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'lightblue',
      }}>
      <VideoComp uri={videoUris[0]} />
    </SafeAreaView>
  );
};

export default App;
