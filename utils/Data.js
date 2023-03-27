// export const subItem = 'subItem';
// export const ITEM = 'item';
// export const innderData = 'innderData';
// export const services = 'services';
// export const innerServices = 'innerServices';
// export const temp = [
//   {
//     type: ITEM,
//   },
//   {
//     type: services,
//   },
//   {
//     type: subItem,
//   },

//   {
//     type: subItem,
//   },
//   {
//     type: services,
//   },
// ];

// let filterTemp = temp.map(data => {
//   return {...data, type: innderData};
// });
// const categories = [
//   {
//     id: '1',
//     title: 'Hair Saloons',
//     uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
//   },
//   {
//     id: '2',
//     title: 'Beauty Parlours',
//     uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/BBBB_-_Copy_bv4xzn.webp',
//   },
//   {
//     id: '3',
//     title: 'Dry Cleaning',
//     uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/CCCC_fxyi8o.webp',
//   },
//   {
//     id: '4',
//     title: 'Laundry',
//     uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/DDDD_dzfgsb.webp',
//   },
// ];

// let filterServices = categories.map(data => {
//   return {...data, type: innerServices};
// });

// const finalTemp = temp.map((data, index) => {
//   if (data.type === subItem) {
//     return {
//       ...data,
//       innerData: [...filterTemp],
//     };
//   }
//   if (data.type === ITEM) {
//     return {...data};
//   }
//   if (data.type === services) {
//     return {
//       ...data,
//       innerServices: [...filterServices],
//     };
//   }
// });
// export const data = [...finalTemp];

export const subItem = 'subItem';
export const ITEM = 'item';
export const innderData = 'innderData';
export const innderData1 = 'innderData1';

export const SERVICES = 'services';

export const temp = [
  {
    type: ITEM,
    uri: 'https://res.cloudinary.com/duk9xkcp5/image/upload/v1679760875/Hair_cutting_in_salon_illustration_vector_concept_generated_1_ywx6vs_1_c4hpsc.webp',
    title: 'Aditya Pahilwan',
  },

  {
    type: SERVICES,
    uri: 'https://res.cloudinary.com/duk9xkcp5/image/upload/v1679760875/Hair_cutting_in_salon_illustration_vector_concept_generated_1_ywx6vs_1_c4hpsc.webp',
    title: 'Aditya Pahilwani',
  },

  {
    type: subItem,
    uri: 'https://res.cloudinary.com/duk9xkcp5/image/upload/v1679760875/Hair_cutting_in_salon_illustration_vector_concept_generated_1_ywx6vs_1_c4hpsc.webp',
    title: 'Ellie',
  },

  {
    type: subItem,
    uri: 'https://cdn.wccftech.com/wp-content/uploads/2020/02/49517766152_7ab6037ac1_k.jpg',
    title: 'Ellie',
  },

  {
    type: subItem,
    uri: 'https://res.cloudinary.com/duk9xkcp5/image/upload/v1679760875/Hair_cutting_in_salon_illustration_vector_concept_generated_1_ywx6vs_1_c4hpsc.webp',
    title: 'Ellie',
  },
];
const categories = [
  {
    id: '1',
    title: 'Hair Saloons',
    uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
  },
  {
    id: '2',
    title: 'Beauty Parlours',
    uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/BBBB_-_Copy_bv4xzn.webp',
  },
  {
    id: '3',
    title: 'Dry Cleaning',
    uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/CCCC_fxyi8o.webp',
  },
  {
    id: '4',
    title: 'Laundry',
    uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/DDDD_dzfgsb.webp',
  },
];
let filterTemp = temp.map(data => {
  return {...data, type: innderData};
});
let filterTemp1 = categories.map(data => {
  return {...data, type: innderData1};
});

const finalTemp = temp.map((data, index) => {
  if (data.type === subItem) {
    return {
      ...data,
      innerData: [...filterTemp],
    };
  }
  if (data.type === ITEM) {
    return {...data};
  }
  if (data.type === SERVICES) {
    return {
      ...data,
      innerData: [...filterTemp1],
    };
  }
});
export const data = [...finalTemp];
