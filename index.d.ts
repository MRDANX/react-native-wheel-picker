declare module 'react-native-wheel-picker' {
  import { ViewStyle } from 'react-native'
  import { Component } from 'react'

  interface ItemProps {
    key: number;
    label: string;
    value: number;
  }
  class Item extends Component<ItemProps, any> { }

  interface PickerProps {
    style?: ViewStyle;
    itemStyle?: ViewStyle;
    selectedValue: number;
    itemSpace?: number;
    onValueChange: (index: number) => void;
    lineColor?: string;
    lineGradientColorFrom?: string;
    lineGradientColorTo?: string;
  }

  export default class Picker extends Component<PickerProps, any> {
    static Item: typeof Item;
  }

}
