export const subItem = 'subItem';
export const nearBy = 'nearBy';
export const ITEM = 'item';
export const innerData = 'innerData';
export const services = 'services';
export const innerCategories = 'innerCategories';
export const saloon = 'saloon';
export const shopCard = 'shopCard';
export const shopCards = 'shopCards';

export const temp = [
  {
    type: ITEM,
  },
  {
    type: shopCards,
  },
];

export const data = temp;

// const [selectedColony, setSelectedColony] = React.useState('');

// const [loaded, setLoaded] = React.useState(false);

// const [colony, setColony] = React.useState('');
// const [colonyWiseShops, setColonyWiseShops] = React.useState([]);
// const [colonies, setColonies] = React.useState([]);

// React.useEffect(() => {
//   const getColonyWiseShops = async colony => {
//     try {
//       const shops = await axios.post('/api/hotels/getColonyWiseShops', {
//         colony,
//       });
//       setLoaded(true);

//       setColonyWiseShops(shops.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   if (colony) {
//     loaded === false && getColonyWiseShops(colony);
//   }

//   getColonyWiseShops(colony);
// }, [colony]);

// React.useEffect(() => {
//   const getAllColonies = async () => {
//     try {
//       const colonies = await axios.post(
//         'https://booking-dynamic-test.onrender.com/api/hotels/allColonies',
//         {
//           destination: 'shadnagar',
//         },
//       );

//       setColonies(colonies.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   getAllColonies();
// }, []);

// const {data, loading, error, reFetch} = useFetch(
//   `https://booking-dynamic-test.onrender.com/api/hotels?type=saloon&city=shadnagar&min=0&max=999`,
// );
