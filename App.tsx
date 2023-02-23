import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledText = styled(Text, 'text-2xl text-black dark:text-white');
const StyledView = styled(
  View,
  'flex-1 bg-white dark:bg-black items-center justify-center'
);

export default function App() {
  return (
    <StyledView>
      <StyledText>This is TypeScript!</StyledText>
      <StatusBar style='auto' />
    </StyledView>
  );
}


