import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";

export type TShop = {
  id: number;
  icon: TIcon;
  content: TContent;
  rooms?: TContent[];
};

export type TIcon = {
  positionX: number;
  positionY: number;
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
      positionX: -10,
      positionY: -7,
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
      positionX: 0,
      positionY: 2,
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
        shopURL: "http://www.bhis.jp/top.html",
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
        logoExt: "png",
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
      positionX: -8,
      positionY: -13,
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
      positionX: -9,
      positionY: 0,
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
      positionX: 13,
      positionY: -11,
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
      positionX: -7,
      positionY: 12,
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
      positionX: 2.5,
      positionY: -18,
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
      positionX: 11,
      positionY: 7,
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
      positionX: 10,
      positionY: -11,
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
      positionX: 12,
      positionY: 0,
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
      positionX: -13,
      positionY: 7,
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
      positionX: -17,
      positionY: 8,
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
      positionX: -5,
      positionY: 0,
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
      positionX: 8,
      positionY: -2,
    },
    content: {
      logoExt: "png",
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
  // {
  //   id: 15,
  //   icon: {
  //     positionX: 5,
  //     positionY: 7,
  //   },
  //   content: {
  //     logoExt: "png",
  //     name: "",
  //     business: "",
  //     area: "",
  //     shopURL: "",
  //   },
  // },
  // {
  //   id: 16,
  //   icon: {
  //     positionX: 5,
  //     positionY: 7,
  //   },
  //   content: {
  //     logoExt: "png",
  //     name: "",
  //     business: "",
  //     area: "",
  //     shopURL: "",
  //   },
  // },
];
