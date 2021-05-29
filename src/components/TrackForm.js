import React, {useContext} from 'react';
import {Input, Form, Item, Label, Button, Text} from 'native-base';
import Spacer from '../components/Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack'
const TrackForm = () => {
  const {
    state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack()
  return (
    <>
      <Form>
        <Spacer>
          <Item>
            <Label>Track Name</Label>
            <Input
              value={name}
              onChangeText={changeName}
              placeholder=" Enter TrackName"
              autoFocus
            />
          </Item>
        </Spacer>
      </Form>
      <Spacer>
      {recording ? (
        <Button full onPress={stopRecording}>
          <Text>Stop Recording</Text>
        </Button>
      ) : (
        <Button full onPress={startRecording}>
          <Text>Start Recording</Text>
        </Button>
      )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button full onPress={saveTrack}>
            <Text>Save Recording</Text>
          </Button>
        ) : null}
      </Spacer>
    </>
  );
};
export default TrackForm;
