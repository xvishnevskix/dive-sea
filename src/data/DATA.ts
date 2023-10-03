export interface ILeadersNft{
    id: string
    photo: string
    collection: string
    sender: string
    volume: number
    analytics: string
    floorPrice: number
    owner: number
    items: number
}
export const nftLeaders:ILeadersNft[] = [
    {
      id: 'QASDE21',
      photo: require('../components/UI/photo/Picture0.png'),
      collection: "Alex CA.",
      sender: "by Alex",
      volume: 8.456,
      analytics: "27.78%",
      floorPrice: 3.5,
      owner: 2.2,
      items: 500,
    },
    {
      id: 'QWERF25',
      photo: require('../components/UI/photo/Picture1.png'),
      collection: "NFT Collection",
      sender: "by John",
      volume: 12.345,
      analytics: "-15.82%",
      floorPrice: 5.2,
      owner: 3.7,
      items: 700,
    },
    {
      id: 'PLAKD87',
      photo: require('../components/UI/photo/Picture2.png'),
      collection: "Crypto Arts",
      sender: "by Lily",
      volume: 5.678,
      analytics: "-9.45%",
      floorPrice: 2.8,
      owner: 1.5,
      items: 300,
    },
    {
      id: 'ZXCFV23',
      photo: require('../components/UI/photo/Picture3.png'),
      collection: "Art Vision",
      sender: "by Mark",
      volume: 20.123,
      analytics: "33.21%",
      floorPrice: 8.9,
      owner: 5.6,
      items: 1000,
    },
    {
      id: 'MVNHF34',
      photo: require('../components/UI/photo/Picture4.png'),
      collection: "NFT Paradise",
      sender: "by Sarah",
      volume: 15.789,
      analytics: "18.67%",
      floorPrice: 6.3,
      owner: 4.2,
      items: 800,
    },
    {
      id: 'KJGHU56',
      photo: require('../components/UI/photo/Picture0.png'),
      collection: "Digital Dreams",
      sender: "by Lucas",
      volume: 10.234,
      analytics: "-12.35%",
      floorPrice: 4.7,
      owner: 2.9,
      items: 600,
    },
    // {
    //   id: 'ASDFG12',
    //   photo: require('../components/UI/photo/Picture1.png'),
    //   collection: "Visionary Art",
    //   sender: "by Emma",
    //   volume: 6.543,
    //   analytics: "7.89%",
    //   floorPrice: 2.1,
    //   owner: 1.2,
    //   items: 400,
    // },
    // {
    //   id: 'KDPDD43',
    //   photo: require('../components/UI/photo/Picture2.png'),
    //   collection: "Art Insights",
    //   sender: "by Daniel",
    //   volume: 3.789,
    //   analytics: "-5.67%",
    //   floorPrice: 1.4,
    //   owner: 0.7,
    //   items: 200,
    // },
];

export interface IPhotoList{
  id: number
  photo: string
}
export const photosList:IPhotoList[] = [
  {
    id: 1,
    photo: require('../components/UI/photo/Picture0.png')
  },
  {
    id: 2,
    photo: require('../components/UI/photo/Picture1.png')
  },
  {
    id: 3,
    photo: require('../components/UI/photo/Picture2.png')
  },
  {
    id: 4,
    photo: require('../components/UI/photo/Picture3.png')
  },
  {
    id: 5,
    photo: require('../components/UI/photo/Picture4.png')
  }
]

  