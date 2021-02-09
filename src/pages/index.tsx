import { GetStaticProps } from "next";
import HCF from "components/layouts/hcf";
import SubTitle from "components/subTitle";
import Concept from "components/concept";
import News from "components/news";
import FadeOnScroll from "components/fadeOnScroll";
import Swiper from "react-id-swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faCar, faTrain } from "@fortawesome/free-solid-svg-icons";

let conceptsData = [
  {
    main_accent: "Share",
    main: " Local",
    sub: "地域の価値を分かち合う。",
    image: "/image/concept1.jpg",
    reverse: false,
  },
  {
    main_accent: "Share",
    main: " Space",
    sub: "多様な価値観に気づく。",
    image: "/image/concept2.png",
    reverse: true,
  },
  {
    main_accent: "Share",
    main: " Park",
    sub: "多様な文化を知る。",
    image: "/image/concept3.png",
    reverse: false,
  },
  {
    main_accent: "Share",
    main: " Office",
    sub: "小さな産業が生まれる。",
    image: "/image/concept4.png",
    reverse: true,
  },
];
const data = [
  {
    image: "image/news/area_design_20200426.jpg",
    date: "2020/04/26",
    text:
      "＼エリアデザインラボはじめます！／まちのことを共に考えるオンライン講座「エリアデザインラボ」を始めることになりました！昨年から準備をしてきた事業がようやくローンチ。コロナの折、オンラインで受講できる体制をつくりましたので、この機会にこれからまちにはどんなことが必要か、一緒に考えていきましょう！『実践講座』と『ゲストトーク』の２本だてで、イベントの企画などを通じて自己表現する力を身に着けることと、福島で活動する様々な職種の人たちの話を聞くことで、多様な価値観を育みます。ご応募お待ちしております！",
    more: {
      url: "https://www.facebook.com/events/256552388817562",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/dessin_202003.jpg",
    date: "2020/03/11",
    text:
      "今月のデッサン教室は22日開催です！ 参加申し込みは、電話、メール、メッセンジャー、instagramのメッセージでお申し込み下さい。",
    more: {
      url: "https://www.facebook.com/akarikunimi/posts/191247048973633:0",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/weding_start.jpg",
    date: "2020/03/08",
    text:
      "＼ecru×アカリのウェディング始めます！／ <br />オーダーメイドのウェディングを福島で展開している ecruさんとタイアップして、アカリでウェディングを始めることになりました！",
    more: {
      url: "https://www.facebook.com/akarikunimi/posts/188235985941406:0",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/dessin.jpg",
    date: "2020/02/07",
    text:
      "＼アカリデッサンの教室を開催します！／<br />福島や東京で活動するペインター佐賀建さんによるデッサン教室です。 絵を描くことは、様々なものの基礎になります。 絵を描くことに携わるお仕事の人も、趣味でデッサンを習いたいという人も、どうぞご参加ください。",
    more: {
      url: "https://www.facebook.com/events/2446976845614452/",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/mihonichi.jpg",
    date: "2020/02/07",
    text:
      "＼ふくしまArt&Craft見本市ありがとうございました／<br />ふくしまを舞台に活動するアーティスト・クリエイター・フリーランス・起業家の方々をお呼びして、見本市を開催しました。<br />このイベントは、この場から新たな出会いや気づきが生まれて、新しいビジネスの創出・新しい作品の創造へと繋がっていくことを目的に開催しました。",
    more: {
      url:
        "https://www.facebook.com/akarikunimi/posts/162111241887214?__tn__=-R",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/marche_20191117.jpg",
    date: "2019/10/15",
    text:
      "＼空想を募集しています！／<br />自分たちの暮らしたいまちってどんなまち？理想のまちを1日だけ、自分の手でつくってみよう！空想マルシェの開催に向け、只今みなさまからの空想を募集しています。わくわくしながら空想して、ぜひ当日自分の手で実現してみましょう！",
    more: {
      url:
        "https://docs.google.com/forms/d/e/1FAIpQLSd325TOtAOu2OpRjVGYf8Fyt8SdwIbrkodo2NLOMyzM4ZRlyQ/viewform",
      text: "アンケートに答える",
    },
  },
  {
    image: "image/news/marche_20191117.jpg",
    date: "2019/10/10",
    text:
      "＼11月17日開催です！／<br />自分たちの暮らしたいまちってどんなまち？理想のまちを1日だけ、自分の手でつくってみよう！空想マルシェ第2回目開催します！是非お越しくださいませ(^^)",
    more: {
      url: "https://www.facebook.com/events/435629903732348/",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/open.png",
    date: "2019/9/29",
    text:
      "＼10月10日グランドオープンです！／<br />Co-working&Co-learning spaceアカリは、10月10日グランドオープンです！10月1日から、1Fラウンジ、ライブラリー、2Fシェアオフィスを先行してオープンします。是非お越しくださいませ(^^)",
    more: {
      url:
        "https://www.facebook.com/yamorisyamomonone2018/photos/a.290568444922773/421520041827612/?type=3&theater",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/open_party_sum.jpg",
    date: "2019/9/29",
    text:
      "オープニングパーティを開催しました！遠方から来てくれた方、リノベーションをお手伝してくれた方、クラウドファンディングにご協力頂いた方、様々な方にお越しいただきました！アカリの雰囲気が伝わる写真が満載です！ぜひご覧ください(^^)",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=421092191870397&ref=page_internal",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/open_party.jpg",
    date: "2019/9/6",
    text:
      "9/28にオープニングパーティを開催します！クラウドファンディングでご協力頂いた方を中心に、アカリの内覧を希望される方、どんな人たちか会ってみたいという方など、ご興味をお持ちの方がいらっしゃれば是非お越しください(^^)",
    more: {
      url: "https://www.facebook.com/events/381879056077791/",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/maturi_ato.jpg",
    date: "2019/9/3",
    text:
      "8/31に開催したアカリ夏マツリの写真を掲載します。ご来場いただいた皆様、ご出店いただいた方々、ありがとうございました(^^)",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=407041663275450&ref=page_internal",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/maturi3.jpg",
    date: "2019/8/22",
    text:
      "＼アカリ夏マツリ出店者紹介／<br>福島市から、cachecache-candleさんがきます！ナチュラルでかわいいキャンドルたちが、祭りの夜を彩ります(^^)",
    more: {
      url:
        "https://www.facebook.com/yamorisyamomonone2018/posts/400654690580814?__xts__%5B0%5D=68.ARAGAutX2oQXsR49SEjDlK5MgF5Jd8HLG3xLkgDlC3-GdjkCzvmjjHBNIGBvw1rqDcCwzzI4vsgVHsxYN90Sj9zIdzYVLQTwzYAK2WLuSrDEjCCUf46GkrRcVuI6Ht2xrqvy-eNFI5DLhXj7fFDZYz1j1JsMcfnGbKdxRjqkw5PR9jWPPL1NnFL5qWF0oOWd8d6i8F77onaaOysnfU4Za5_3UvD5z3yMVvnHSDItEenTPqy4MackOj0k2eVcBtcDp-0MlNb9XDqpkJN_fGghx7VfnUi8eW0vm2JSbS6DwFWZ4tAFn_kFOtIsKakj9T_6-VF-XCsRLey1hwILCU6YcdQ&__tn__=-R",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/maturi2.jpg",
    date: "2019/8/21",
    text:
      "＼アカリ夏マツリ出店者紹介／<br>郡山市から、OBROS COFFEEさんがきます！一度飲んだらその魅力に取り憑かれてしまう、スペシャルティコーヒーを是非ご堪能ください(^^)",
    more: {
      url:
        "https://www.facebook.com/yamorisyamomonone2018/posts/400175473962069?__xts__%5B0%5D=68.ARB6KblAeQICR2J4YgmikqpbJIWoD6HZO7ssYkgRLv_iaO9yisKjbg1QNNSW8juplRJ8VIoA2gmzaB_RomHoeqTMUXk_LXqSD3u6wS7onQoIGtQFkDnrsFJ7rup4c0UpsXXFkpJq3A90DIZskALYpfSEgrieM9rzJN9IaaMiteDDmNgqQsLCJjbE9orSl97Y7QkY28nAmadisv0VfUWkvPWwJO5jVtmwell97Hs2G4vXbPb8domHex9JKBoZOgMt__d3zTRtgcU7-sGfStSxTzPvHYEQCNahHfoHLDu5dcjx1GK512MGkpyDwmef0idU06UbnK2MyI9arzi-esWSulU&__tn__=-R",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/maturi1.jpg",
    date: "2019/8/20",
    text:
      "＼アカリ夏マツリ出店者紹介／<br>福島市から、curry dinningbar笑夢さんがキッチンカーで出店します！スパイスカレーが好きな人集まれー(^O^)",
    more: {
      url:
        "https://www.facebook.com/yamorisyamomonone2018/posts/399815270664756?__xts__%5B0%5D=68.ARBiUetEhX16LE0G7wjhIUxM5-bts_gV3rFTTT8C_cKHaNYB_WzletGinRvgASK-yHhFfovfHIWSEqcGe-rc40ANI_WpUdoVbXHhT7JEYhYkefUPHJtsAQQhl8Qn0CAx8DHSLEiu_8O6drJPPWSqJnBWTH1Cdpq-c9Kk6KojebYZ6Jmn88ezduor5qjTTu54NZWGRra4rlub3IsxcqaANE7fKD999vRuuhJe33J2Pc7KB61jlQbLF7l0vaDSvO-i2LgKf_8LqBlQdS8PwDJmqRcJ9ZGOF0t8IUQ7kjzAKEozTmRMsWR9CE_WoIsU54UemGY68yVZDdz6mbLGJlZ8xR8&__tn__=-R",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/maturi.jpg",
    date: "2019/7/11",
    text:
      "今年１０月オープンの民間型公民館「アカリ」で夏マツリを開催します！日本には、たくさんのお祭りがあります。古来から続く伝統的なお祭りがほとんどだけど、これからの新しい文化をつくっていく、そんなお祭りを一緒につくりませんか？",
    more: {
      url:
        "https://www.facebook.com/events/2872925172778721/?ref=3&action_history=null&__xts__%5B0%5D=68.ARDVQir4Xi2T7XjOSZpeZjNV-J81z25IzsAYMrUApWJ6B8d74LrWCJpPyqNEd6yvj_vKXY3o4NrtXrHsM8IkwgOeBI4pOOSnbmIDPKF9L5Vme1KNItW9nBSeNy6yN2pLxZEg_ORzUuQogQiEtyP0JceQRB56QZ03lPIjXmgJYqxWaXvOa0DU9EAKNCAC6jVhJtimMVHs5Hy8wWQ--njLKPjFYlKch5ck7O3o4L6qwZVSW0_9uOXaFDfYwMCG5xoRiJYFKkNtNJpjNPp9sSRrI4Y9&__tn__=-R",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/ima_ba.jpg",
    date: "2019/7/5",
    text:
      "福島県内各地で豊かなコミュニティ形成と消費活動がなされる“場”を生み出している人たちをお招きし、なぜそんな“場”をつくったの？運営体制はどのようにして実現させている？彼らが生み出す“場”の魅力とは？などについてお聞きできるイベントを開催しました！",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=377448239568126&ref=page_internal",
      text: "詳しくみる",
    },
  },
  {
    image: "image/news/renove.jpg",
    date: "2019/4/26",
    text:
      "＼共にアカリをつくる仲間を募集中！／毎週日曜日、アカリの中でセルフリノベーションを一緒にやりませんか？自分の手でモノをつくることを通じて、自分の暮らしを見つめなおしてみましょう。",
    more: {
      url: "https://www.facebook.com/events/646027809158632/",
      text: "詳しくみる",
    },
  },
];

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const news = await (async () => {
    return new Promise<
      {
        image: string;
        date: string;
        text: string;
        more: {
          url: string;
          text: string;
        };
      }[]
    >((resolve) => {
      resolve(data);
    });
  })();
  return {
    props: {
      news: news,
    },
  };
};

interface Props {
  news: {
    image: string;
    date: string;
    text: string;
    more: {
      url: string;
      text: string;
    };
  }[];
}
const Page: React.FC<Props> = (props) => {
  const concepts = conceptsData.map((concept, index) => (
    <Concept {...concept} key={index} />
  ));
  const news = props.news.map((n, index) => (
    <div
      key={index}
      className="
        mdc-layout-grid__cell--span-3-desktop
        mdc-layout-grid__cell--span-8-tablet
        mdc-layout-grid__cell--span-4-phone
      "
    >
      <FadeOnScroll>
        <News {...n} />
      </FadeOnScroll>
    </div>
  ));

  return (
    <HCF className="plane">
      <div className="mdc-layout-grid no-margin">
        <div className="mdc-layout-grid__inner fixed-bg">
          <div className="mdc-layout-grid__cell--span-12">
            <div className="concept-text">
              <p className="main mdc-typography--headline2">ともに学びあう</p>
              <p className="text mdc-typography--body1">
                ひとりひとりの想いが灯る、アカリ
                <br />
                <br />
                眠っていた元書庫の施設が
                <br />
                リノベ－ションにより学びあいの場へと生まれ変わりました
                <br />
                <br />
                多様な価値観が交差し、新しいモノ・コトが生まれる
                <br />
                多様な人との出会い、多様な文化との接点に、あなたもお越しください
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mdc-layout-grid about" id="about">
        <SubTitle text={"about akari"} />
        <div className="mdc-layout-grid__inner">
          <div
            className="
    mdc-layout-grid__cell--span-12-desktop
    mdc-layout-grid__cell--span-8-tablet
    mdc-layout-grid__cell--span-4-phone"
          >
            <p>
              この地域に、多様な人々がともに学び合う場をつくっています。ここは、共感できる仲間と、空間も価値観もシェアして、１人１人に灯る”想い”を大切にする場所です。
            </p>
          </div>
          {concepts}
        </div>
      </div>
      <div className="mdc-layout-grid service" id="service">
        <SubTitle text={"our service"} />
        <div className="mdc-layout-grid__inner">
          <div
            className="mdc-layout-grid__cell--span-6-desktop
    mdc-layout-grid__cell--span-8-tablet
    mdc-layout-grid__cell--span-4-phone"
          >
            {/* <%
        images = [
          {
            src: 'image/1f.png',
            alt: '地域の価値を分かち合う。',
          },
          {
            src: 'image/2f.png',
            alt: '地域の価値を分かち合う。',
          },
        ]
      %> */}

            {/* <%- include('components/swiper', {images: images}) %> */}
            <Swiper
              {...{
                // slidesPerView: 1,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                // autoplay: {
                //   delay: 2500,
                //   disableOnInteraction: false,
                // },
              }}
            >
              <img src="/image/1f.png" alt="地域の価値を分かち合う。" />
              <img src="/image/2f.png" alt="地域の価値を分かち合う。" />
            </Swiper>
          </div>
          <div
            className="mdc-layout-grid__cell--span-6-desktop
    mdc-layout-grid__cell--span-8-tablet
    mdc-layout-grid__cell--span-4-phone"
          >
            <ul>
              <li>
                <h4 className="headline">
                  Trattoria da Martino ( イタリアン )
                </h4>
                <div className="text">
                  周辺地域の食材を使ったシチリア料理で新たな味の提案をしています。
                </div>
              </li>
              <li>
                <h4 className="headline">Lounge</h4>
                <div className="text">
                  勉強や読書など、ご自由にお寛ぎください。無料でお使い頂けます。
                </div>
              </li>
              <li>
                <h4 className="headline">Library</h4>
                <div className="text">
                  無人で本の販売をしています。Lounge
                  に限り、お好きな本を無料でお読み頂けます。
                </div>
              </li>
              <li>
                <h4 className="headline">Baby room</h4>
                <div className="text">
                  おむつ交換台と授乳スペースを設置しています。
                </div>
              </li>
              <li>
                <h4 className="headline">Studio</h4>
                <div className="text">
                  会議やイベントスペースとしてお使い頂けます。プロジェクター、マイク、スクリーンは有料で貸し出しております。
                </div>
                <div className="attr">面積：89㎡</div>
                <div className="attr">利用料：¥1,000/h</div>
                <div className="text">
                  <a href="/reserve">ご予約はこちら</a>
                </div>
              </li>
              <li>
                <h4 className="headline">Akari Park</h4>
                <div className="text">
                  マルシェなど、屋外のイベントでご利用頂けます。１日単位でご利用頂けます。
                </div>
                <div className="attr">面積：1,500㎡</div>
                <div className="attr">利用料：¥10,000/日</div>
                <div className="text">
                  <a href="/reserve">ご予約はこちら</a>
                </div>
              </li>
              <li>
                <h4 className="headline">Share Office</h4>
                <div className="text">
                  主に地域の魅力を高める業態の方を対象に、オフィススペースを貸し出しています。随時入居者を募集しておりますので、お問合わせフォームよりお気軽にご相談ください。
                </div>
                <div className="attr">部屋面積：11㎡</div>
                <div className="attr">賃料：¥20,000/月</div>
                <div className="attr">光熱費：¥5,000/月</div>
                <div className="attr">共益費：¥3,000/月</div>
                <div className="attr">月極駐車場有</div>
                <div className="attr">wifi・電源完備</div>
                <div className="attr">空調有り</div>
                <br />
                <div className="attr">＜入居者特典＞</div>
                <br />
                <div className="attr">
                  ①Trattoria da Martino のまかないメシ（¥500）
                </div>
                <div className="attr">
                  ②スタジオ・アカリパーク利用料割引（１割引）
                </div>
              </li>
            </ul>
          </div>
          <div
            className="
      mdc-layout-grid__cell--span-12-desktop
      mdc-layout-grid__cell--span-8-tablet
      mdc-layout-grid__cell--span-4-phone center"
          >
            <div className="center-desc">
              <div className="center-desc-headline">
                <i className="far fa-clock"></i>
                <p>Hours</p>
              </div>
              <div className="center-desc-headline">アカリ</div>
              <p className="text">
                Daily, <span className="headline">10:00</span> to{" "}
                <span className="headline">22:00</span>
              </p>
              {/* <!-- <p className="text">Trattoria da Martino: Daily, <span className="headline">11:30</span> to <span className="headline">14:00</span> L.O. / <span className="headline">18:00</span> to <span className="headline">21:30</span> L.O.</p> --> */}
              <div className="center-desc-headline">
                Trattoria da Martino(イタリアン)
              </div>
              <p className="text">
                Daily, <span className="headline">11:30</span> to{" "}
                <span className="headline">14:00</span> L.O. /{" "}
                <span className="headline">18:00</span> to{" "}
                <span className="headline">21:30</span> L.O.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mdc-layout-grid" id="news">
        <SubTitle text={"news"} />
        <div className="mdc-layout-grid__inner">{news}</div>
      </div>
      <div className="mdc-layout-grid no-margin" id="access">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-12">
            <iframe
              className="googlemap-gray"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.189949838821!2d140.53903921532066!3d37.87924027974069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a63c91e070605%3A0x75870bb1f9fb6816!2z44Ki44Kr44Oq!5e0!3m2!1sja!2sjp!4v1572481999076!5m2!1sja!2sjp"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mdc-layout-grid">
        <SubTitle text={"access"} />
        <div className="mdc-layout-grid__inner access">
          <div className="mdc-layout-grid__cell--span-12">
            <FadeOnScroll>
              <p>
                Co-working &<br />
                Co-learning
                <br />
                Space
                <br />
              </p>
            </FadeOnScroll>
            <br />
            <FadeOnScroll>
              <p className="mdc-typography--headline5">アカリ</p>
            </FadeOnScroll>
            <div className="center-desc">
              <FadeOnScroll>
                <div className="center-desc-headline">
                  <FontAwesomeIcon icon={faMapPin} />
                  <p>所在地</p>
                </div>
              </FadeOnScroll>
              <FadeOnScroll>
                <p>〒969-1771</p>
              </FadeOnScroll>
              <FadeOnScroll>
                <p>福島県伊達郡国見町山﨑舘東14番地8</p>
              </FadeOnScroll>
            </div>
            <div className="center-desc">
              <FadeOnScroll>
                <div className="center-desc-headline">
                  <FontAwesomeIcon icon={faCar} />
                  <p>お車でお越しの場合</p>
                </div>
              </FadeOnScroll>
              <FadeOnScroll>
                <p>
                  東北自動車道 国見インターから約5分
                  <br />
                  JR福島駅から約30分
                  <br />
                  ※駐車場あります
                </p>
              </FadeOnScroll>
            </div>
            <div className="center-desc">
              <FadeOnScroll>
                <div className="center-desc-headline">
                  <FontAwesomeIcon icon={faTrain} />
                  <p>電車でお越しの場合</p>
                </div>
              </FadeOnScroll>
              <FadeOnScroll>
                <p>JR藤田駅から徒歩1分</p>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </div>
    </HCF>
  );
};
export default Page;
