import { ImageSourcePropType } from "react-native";

interface CommonButtonProps {
  title: string;
  onPress: () => void;
}

interface SharedSlideProps {
  image: ImageSourcePropType;
  text: string;
  textWrapperStyle?: {
    marginBottom: number;
  };
  textStyle: {
    fontSize: number;
    fontFamily: string;
  };
  children?: React.ReactNode;
}

export { CommonButtonProps, SharedSlideProps };
