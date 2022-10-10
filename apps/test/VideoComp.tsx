import React from 'react';
import {TouchableOpacity, Dimensions, ViewStyle} from 'react-native';
import Video from 'react-native-video';
const {width: WIDTH} = Dimensions.get('window');

type VideoCompType = {
  uri: string;
  paused?: boolean;
  style?: ViewStyle;
  videoResizeMode?: 'contain' | 'stretch' | 'cover' | 'none' | undefined;
  poster?: string;
  posterResizeMode?: 'contain' | 'stretch' | 'cover' | 'none' | undefined;
  controls?: boolean;
  repeat?: boolean;
  disableOnTouchPlayPauseToggle?: boolean;
};

const VideoComp = ({
  uri,
  paused,
  controls,
  posterResizeMode,
  poster,
  videoResizeMode,
  style,
  repeat,
  disableOnTouchPlayPauseToggle,
}: VideoCompType) => {
  const [isVideoPaused, setIsVideoPaused] = React.useState<boolean>(
    paused || true,
  );

  return (
    <TouchableOpacity
      disabled={disableOnTouchPlayPauseToggle}
      onPress={() => {
        setIsVideoPaused(!isVideoPaused);
      }}>
      <Video
        source={{uri: uri}}
        style={{
          width: WIDTH / 1.1,
          height: 300,
          ...style,
        }}
        resizeMode={videoResizeMode || 'contain'}
        onError={e => console.log('Error-----', e)}
        poster={poster}
        posterResizeMode={posterResizeMode || 'contain'}
        controls={controls || true}
        repeat={repeat || false}
        paused={isVideoPaused}
      />
    </TouchableOpacity>
  );
};

export default VideoComp;
