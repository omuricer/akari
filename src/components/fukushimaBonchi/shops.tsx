export type TShop = {
  id: number;
  icon: TIcon;
  content: TContent;
  rooms?: TContent[];
};

export type TIcon = {
  positionX: number;
  positionY: number;
  ratio?: number;
};

export type TContent = {
  room?: string;
  logoExt: string;
  name: string;
  business: string;
  area: string;
  shopURL: string;
};

export function isTContent(arg: any): arg is TContent {
  return !Array.isArray(arg);
}

export const Shops: TShop[] = [
  {
    id: 1,
    icon: {
      positionY: -10,
      positionX: -12,
    },
    content: {
      logoExt: "jpg",
      name: "アカリ",
      business: "複合施設",
      area: "国見町",
      shopURL: "https://yamorisyamomonone.com",
    },
  },
  {
    id: 2,
    icon: {
      positionY: -1,
      positionX: 1,
      ratio: 0.8,
    },
    content: {
      logoExt: "png",
      name: "Art Apartment Igeta.",
      business: "アート",
      area: "福島市",
      shopURL: "",
    },
    rooms: [
      {
        room: "101",
        logoExt: "jpg",
        name: "かわらまち木工舎",
        business: "クラフト",
        area: "須賀川市",
        shopURL: "https://www.instagram.com/kawaramachimokkosha/",
      },
      {
        room: "102",
        logoExt: "jpg",
        name: "yumi takano Design",
        business: "デザイン",
        area: "福島市",
        shopURL: "https://instagram.com/yumi_takano_design/",
      },
      {
        room: "203",
        logoExt: "gif",
        name: "アサノコウタ",
        business: "建築",
        area: "福島市",
        shopURL: "https://www.instagram.com/casa_no/",
      },
      {
        room: "301",
        logoExt: "jpg",
        name: "佐賀建",
        business: "アート",
        area: "福島市",
        shopURL: "https://www.instagram.com/tatsuru_paint/",
      },
      {
        room: "302",
        logoExt: "jpg",
        name: "小林愛",
        business: "モデル",
        area: "福島市",
        shopURL: "https://www.instagram.com/ai_kobayashi_official/",
      },
      {
        room: "401",
        logoExt: "jpg",
        name: "似顔絵屋コハルビヨリ",
        business: "アート",
        area: "福島市",
        shopURL: "https://kouboukoharu.thebase.in/",
      },
      {
        room: "402",
        logoExt: "jpg",
        name: "Black it ink and design",
        business: "デザイン",
        area: "国見町",
        shopURL: "http://www.instagram.com/blackit_inkanddesign",
      },
      {
        room: "403",
        logoExt: "",
        name: "Hi-WORKS マルハ",
        business: "リユース",
        area: "国見町",
        shopURL: "",
      },
    ],
  },
  {
    id: 3,
    icon: {
      positionY: -17,
      positionX: -10,
    },
    content: {
      logoExt: "png",
      name: "Blue Bird Apartment.",
      business: "複合施設",
      area: "郡山市",
      shopURL: "https://bluba.jp",
    },
  },
  {
    id: 4,
    icon: {
      positionY: -1,
      positionX: -10,
    },
    content: {
      logoExt: "jpg",
      name: "ecru",
      business: "ウェディング",
      area: "福島市",
      shopURL: "https://ecru-wedding.com",
    },
  },
  {
    id: 5,
    icon: {
      positionY: -10,
      positionX: 14,
    },
    content: {
      logoExt: "jpg",
      name: "チーズケーキ工房　風花",
      business: "カフェ",
      area: "二本松市",
      shopURL: "http://fukashop.free.makeshop.jp",
    },
  },
  {
    id: 6,
    icon: {
      positionY: 6,
      positionX: -10,
    },
    content: {
      logoExt: "jpg",
      name: "いちご家族",
      business: "農家",
      area: "鏡石町",
      shopURL: "https://www.ichigo-kazoku.com",
    },
  },
  {
    id: 7,
    icon: {
      positionY: -16,
      positionX: 4,
    },
    content: {
      logoExt: "jpg",
      name: "暮らしの良品　いげた",
      business: "雑貨",
      area: "福島市",
      shopURL: "http://igeta3.com",
    },
  },
  {
    id: 8,
    icon: {
      positionY: 6,
      positionX: 11,
    },
    content: {
      logoExt: "jpg",
      name: "如春荘",
      business: "カフェ",
      area: "福島市",
      shopURL: "https://www.instagram.com/joshunso.since1937",
    },
  },
  {
    id: 9,
    icon: {
      positionY: -9,
      positionX: 11,
    },
    content: {
      logoExt: "jpg",
      name: "OBROS COFFEE",
      business: "カフェ",
      area: "郡山市",
      shopURL: "https://www.obroscoffee.jp",
    },
  },
  {
    id: 10,
    icon: {
      positionY: 0,
      positionX: 13,
    },
    content: {
      logoExt: "jpg",
      name: "Osteria delle Gioie",
      business: "飲食店",
      area: "福島市",
      shopURL: "https://ja-jp.facebook.com/OsteriaDelleGioie/",
    },
  },
  {
    id: 11,
    icon: {
      positionY: 4,
      positionX: -16,
    },
    content: {
      logoExt: "jpg",
      name: "渋谷フルーツガーデン",
      business: "農家",
      area: "国見町",
      shopURL: "https://norimichi003.stores.jp/",
    },
  },
  {
    id: 12,
    icon: {
      positionY: 3,
      positionX: -22,
      ratio: 0.9,
    },
    content: {
      logoExt: "jpg",
      name: "野菜屋　kumando",
      business: "農家",
      area: "伊達市",
      shopURL: "https://yasaiya-kumand.stores.jp",
    },
  },
  {
    id: 13,
    icon: {
      positionY: -0,
      positionX: -6,
      ratio: 0.9,
    },
    content: {
      logoExt: "jpg",
      name: "Trattoria La Wasabi",
      business: "飲食店",
      area: "伊達市",
      shopURL: "https://www.facebook.com/La.Wasabi2002",
    },
  },
  {
    id: 14,
    icon: {
      positionY: -4,
      positionX: 8,
    },
    content: {
      logoExt: "jpg",
      name: "ヤブウチビル",
      business: "複合施設",
      area: "福島市",
      shopURL: "",
    },
    rooms: [
      {
        room: "101",
        logoExt: "jpg",
        name: "OPTICAL YABUUCHI",
        business: "ファッション",
        area: "福島市",
        shopURL: "http://www.eye-y.com",
      },
      {
        room: "102",
        logoExt: "png",
        name: "食堂　ヒトト",
        business: "飲食店",
        area: "福島市",
        shopURL: "http://hitoto.co",
      },
    ],
  },
  {
    id: 15,
    icon: {
      positionY: 4,
      positionX: -3,
      ratio: 1.6,
    },
    content: {
      logoExt: "jpg",
      name: "磐椅神社",
      business: "神社",
      area: "猪苗代町",
      shopURL: "https://www.instagram.com/iwahashijinjya/",
    },
  },
  {
    id: 16,
    icon: {
      positionY: -5,
      positionX: -18,
      ratio: 1.8,
    },
    content: {
      logoExt: "jpg",
      name: "はじまりの美術館",
      business: "美術館",
      area: "猪苗代町",
      shopURL: "https://hajimari-ac.com",
    },
  },
  {
    id: 17,
    icon: {
      positionY: -15,
      positionX: -3,
      ratio: 2.1,
    },
    content: {
      logoExt: "jpg",
      name: "Books&cafeコトウ",
      business: "ブックカフェ",
      area: "福島市",
      shopURL: "https://www.instagram.com/kotou.books.cafe/",
    },
  },
];
