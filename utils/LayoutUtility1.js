import {LayoutProvider} from 'recyclerlistview';
import {Dimensions} from 'react-native';
import {ITEM, innderData, ITEM1} from '../utils/ShopsData';
export const ViewTypes = {
  GRID: 1,
  FULL_GRID: 2,
  SUB_ITEM: 3,
};
export class LayoutUtil {
  static getWindowWidth() {
    return Math.round(Dimensions.get('window').width * 1000) / 1000;
  }
  static getLayoutProvider(dataProvider, index1) {
    return new LayoutProvider(
      index => {
        let type = dataProvider.getDataForIndex(index).type;
        if (type == ITEM) {
          return ViewTypes.GRID;
        } else if (type == innderData) {
          return ViewTypes.SUB_ITEM;
        } else if (type == ITEM1) {
          return ViewTypes.FULL_GRID;
        }
      },
      (type, dim) => {
        const width = LayoutUtil.getWindowWidth();
        let layoutHeight = 300;

        switch (type) {
          case ViewTypes.GRID:
            dim.width = width;
            dim.height = layoutHeight / 2;
            break;
          case ViewTypes.FULL_GRID:
            dim.width = width;
            dim.height = (layoutHeight / 1.33) * index1;
            break;

          case ViewTypes.SUB_ITEM:
            dim.width = width;
            dim.height = 220;
            break;

          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );
  }
}
