import {LayoutProvider} from 'recyclerlistview';
import {Dimensions} from 'react-native';
import {ITEM, subItem, innderData, SERVICES, innderData1} from '../utils/Data';
export const ViewTypes = {
  FULL: 0,
  GRID: 1,
  SUB_ITEM: 2,
  HALF_FULL: 3,
  SUB_ITEM1: 4,
};
export class LayoutUtil {
  static getWindowWidth() {
    return Math.round(Dimensions.get('window').width * 1000) / 1000;
  }
  static getLayoutProvider(dataProvider) {
    return new LayoutProvider(
      index => {
        let type = dataProvider.getDataForIndex(index).type;
        if (type == ITEM) {
          return ViewTypes.GRID;
        } else if (type == subItem) {
          return ViewTypes.FULL;
        } else if (type == SERVICES) {
          return ViewTypes.HALF_FULL;
        } else if (type == innderData) {
          return ViewTypes.SUB_ITEM;
        } else if (type == innderData1) {
          return ViewTypes.SUB_ITEM1;
        }
      },
      (type, dim) => {
        const width = LayoutUtil.getWindowWidth();
        let layoutHeight = 300;
        const innerCardHeight = layoutHeight - 10;
        const innerCardWidth = width;
        switch (type) {
          case ViewTypes.GRID:
            dim.width = width;
            dim.height = layoutHeight / 2;
            break;
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = layoutHeight - 60;
            break;
          case ViewTypes.HALF_FULL:
            dim.width = width;
            dim.height = layoutHeight - 150;
            break;
          case ViewTypes.SUB_ITEM:
            dim.width = innerCardWidth - 140;
            dim.height = innerCardHeight / 1.7;
            break;
          case ViewTypes.SUB_ITEM1:
            dim.width = innerCardWidth - 240;
            dim.height = innerCardHeight / 1.6;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );
  }
}
