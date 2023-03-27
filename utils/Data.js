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

import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

// const App = () => {
//   const [realData, setRealData] = useState([]);
//   const [cityShops, setCityShops] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loaded, setLoaded] = useState(false);
//   const cities = useMemo(
//     () => ['shadnagar', 'kothur', 'thimmapur', 'shamshabad'],
//     [],
//   );
//   const city = 'shadnagar';
//   const fetchData = useMemo(
//     () => async () => {
//       setLoaded(true);

//       try {
//         const res = await axios.get(
//           `https://booking-dynamic-test.onrender.com/api/hotels/countByCity?cities=${cities[0]},${cities[1]},${cities[2]},${cities[3]}`,
//         );

//         const shopsCount = [
//           {
//             _id: '1',
//             type: 'innerData',
//             count: res?.data[0],
//             title: cities[0],
//             uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1679068838/pexels-maria-orlova-4969866_1_ippspp.webp',
//           },
//           {
//             _id: '2',
//             type: 'innerData',
//             count: res?.data[1],
//             title: cities[1],
//             uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/BBBB_-_Copy_bv4xzn.webp',
//           },
//           {
//             _id: '3',
//             type: 'innerData',
//             count: res?.data[2],
//             title: cities[2],
//             uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/CCCC_fxyi8o.webp',
//           },
//           {
//             _id: '4',
//             type: 'innerData',
//             count: res?.data[3],
//             title: cities[3],
//             uri: 'https://res.cloudinary.com/dqupmzcrb/image/upload/v1678903220/DDDD_dzfgsb.webp',
//           },
//         ];
//         let filterServices1 = shopsCount?.map(data => {
//           return {...data, type: innderData};
//         });
//         setCityShops(filterServices1);
//       } catch (err) {
//         console.log(err);
//       }
//       setLoaded(false);
//     },
//     [cities],
//   );
//   const getData = useMemo(
//     () => async () => {
//       setLoading(true);
//       const {data} = await axios.get(
//         `https://booking-dynamic-test.onrender.com/api/hotels?type=saloon&city=${city}&min=0&max= 999`,
//       );
//       let filterServices = data?.slice(0, 4).map(data1 => {
//         return {...data1, type: innderData};
//       });
//       setRealData(filterServices);
//       setLoading(false);
//     },
//     [city],
//   );

//   useEffect(() => {
//     getData();
//     fetchData();
//   }, [fetchData, getData]);

//   realData.length > 0 && console.log(realData);
// };
// App();

// const getData = async () => {
//   const {data} = await axios.get(
//     `https://booking-dynamic-test.onrender.com/api/hotels?type=saloon&city=shadnagar&min=0&max= 999`,
//   );
//   let filterServices = data?.slice(0, 4).map(data1 => {
//     return {...data1, type: innderData};
//   });
//   return filterServices;
// };
// getData().then(res => console.log(res));

export const subItem = 'subItem';
export const ITEM = 'item';
export const innderData = 'innderData';
export const temp = [
  {
    type: ITEM,
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
  {
    type: subItem,
    uri: 'https://res.cloudinary.com/duk9xkcp5/image/upload/v1679760875/Hair_cutting_in_salon_illustration_vector_concept_generated_1_ywx6vs_1_c4hpsc.webp',
    title: 'Ellie',
  },
];

let filterTemp = temp.map(data => {
  return {...data, type: innderData};
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
});
export const data = [...finalTemp];
