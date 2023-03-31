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
        }
      },
      (type, dim) => {
        const width = LayoutUtil.getWindowWidth();
        let layoutHeight = 1100;

        switch (type) {
          case ViewTypes.GRID:
            dim.width = width;
            dim.height = 150;
            break;
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = layoutHeight;
            break;

          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );
  }
}
