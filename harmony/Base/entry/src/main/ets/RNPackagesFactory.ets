import { RNPackageContext, RNPackage } from '@rnoh/react-native-openharmony/ts';
import {SafeAreaViewPackage} from '@react-native-oh-tpl/react-native-safe-area-context/ts';
import GestureHandlerPackage from '@react-native-oh-tpl/react-native-gesture-handler';

export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [
    new SafeAreaViewPackage(ctx),
    new GestureHandlerPackage(ctx),
  ];
}