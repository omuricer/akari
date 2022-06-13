import { GetStaticProps } from "next";
import HCF from "components/layouts/hcf";
import SubTitle from "components/subTitle";
import SubSubTitle from "components/subSubTitle";
import UseCase from "components/useCase";
import FadeOnScroll from "components/fadeOnScroll";
import { UseCase as UseCaseModel } from "domain/model/useCase";
import Image from "next/image";

const data: UseCaseModel[] = [
  {
    image: "/image/news/maturi_ato.jpg",
    resource: "ヒロバ",
    text:
      "『アカリ夏マツリ』と題して、地域のショップをお招きしお祭りが開催されました！広場の一角ではワークショップも。写真掲載していますのでご覧ください。",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=407041663275450&ref=page_internal",
      text: "詳しくみる",
    },
  },
  {
    image: "/image/news/ima_ba2.jpg",
    resource: "スタジオ",
    text:
      "『いま、地域に求められる場とは？』と題して、福島県内各地で豊かなコミュニティを生み出している人たちをお招きし、なぜそんな“場”をつくったの？運営体制はどのようにして実現させている？彼らが生み出す“場”の魅力とは？などについてお聞きできるイベントが開催されました。",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=377448239568126&ref=page_internal",
      text: "詳しくみる",
    },
  },
  {
    image: "/image/news/kaigi1.jpg",
    resource: "スタジオ",
    text:
      "『ふくしまの暮らし方、働き方会議#1』と題して、もっと違う暮らし方、働き方、自分が触れてこなかった別の世界を考えるトークセッションが開催されました。",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=291734231472861&ref=page_internal",
      text: "詳しくみる",
    },
  },
  {
    image: "/image/news/marche.jpg",
    resource: "ヒロバ",
    text:
      "『空想マルシェ』と題して、１日限定のマルシェが誕生しました。みんなの空想を持ち寄って、理想のまちを自分の手でつくろう！を合言葉に多くの方々がご来場されました。",
    more: {
      url:
        "https://www.facebook.com/pg/yamorisyamomonone2018/photos/?tab=album&album_id=267465137233104&ref=page_internal",
      text: "詳しくみる",
    },
  },
];

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const useCases = await (async () => {
    return new Promise<UseCaseModel[]>((resolve) => {
      resolve(data);
    });
  })();
  return {
    props: {
      useCases: useCases,
    },
  };
};

interface Props {
  useCases: UseCaseModel[];
}
const Page: React.FC<Props> = (props) => {
  const useCases = props.useCases.map((n, index) => (
    <div
      key={index}
      className="
        mdc-layout-grid__cell--span-3-desktop
        mdc-layout-grid__cell--span-8-tablet
        mdc-layout-grid__cell--span-4-phone
      "
    >
      <FadeOnScroll>
        <UseCase {...n} />
      </FadeOnScroll>
    </div>
  ));

  return (
    <HCF className="plane">
      <div className="mdc-layout-grid">
        <SubTitle text={"reservation"} />
        <div className="mdc-layout-grid__inner reserve">
          <div
            className="
        mdc-layout-grid__cell--span-6-desktop
        mdc-layout-grid__cell--span-8-tablet
        mdc-layout-grid__cell--span-4-phone
        picture"
          >
            {/* <Image src="/image/studio.jpg" width={600} height={600} /> */}
            <div className="line"></div>
            <h3 className="resource">スタジオ</h3>
            <img className="mdc-image-list__image" src="image/studio.jpg" />
          </div>
          <div
            className="
        mdc-layout-grid__cell--span-6-desktop
        mdc-layout-grid__cell--span-8-tablet
        mdc-layout-grid__cell--span-4-phone
        description"
          >
            <div className="description--inner">
              <div className="description--set">
                <SubSubTitle text={"サービス"} />
                <p>
                  会議やイベントスペースとしてお使い頂けます。
                  <br />
                  プロジェクター、マイク、スクリーンは有料で貸し出しております。
                </p>
              </div>
              <div className="description--set">
                <SubSubTitle text={"設備"} />
                <ul>
                  <li>面積：89㎡</li>
                  <li>wifi・電源有り</li>
                  <li>無料貸出し：机・椅子</li>
                  <li>有料貸出し：プロジェクター、マイク、スクリーン</li>
                </ul>
              </div>
              <div className="description--set">
                <SubSubTitle text={"ご利用料金"} />
                <p>¥1,000/h</p>
              </div>
              <div className="right">
                <a
                  className="mdc-button mdc-button--raised right"
                  href="https://airrsv.net/yamorisyamomonone/calendar?schdlId=s00002A1F7"
                  target="_blank"
                >
                  空き状況確認・ご予約
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mdc-layout-grid__inner reserve">
          <div
            className="
        mdc-layout-grid__cell--span-6-desktop
        mdc-layout-grid__cell--span-8-tablet
        mdc-layout-grid__cell--span-4-phone
        picture"
          >
            <div className="line"></div>
            <h2 className="resource">ヒロバ</h2>
            <img className="mdc-image-list__image" src="image/hiroba.jpg" />
          </div>
          <div
            className="
        mdc-layout-grid__cell--span-6-desktop
        mdc-layout-grid__cell--span-8-tablet
        mdc-layout-grid__cell--span-4-phone
        description"
          >
            <div className="description--inner">
              <div className="description--set">
                <SubSubTitle text={"サービス"} />
                <p>
                  マルシェなど、屋外のイベントでご利用頂けます。１日単位でご利用頂けます。
                </p>
              </div>
              <div className="description--set">
                <SubSubTitle text={"設備"} />
                <ul>
                  <li>面積：1,500㎡</li>
                  <li>駐車場有り</li>
                  <li>JR藤田駅徒歩１分</li>
                  <li>ほか、ご見学ください</li>
                </ul>
              </div>
              <div className="description--set">
                <SubSubTitle text={"ご利用料金"} />
                <p>¥10,000/day</p>
              </div>
              <div className="right">
                <a
                  className="mdc-button mdc-button--raised right"
                  href="https://airrsv.net/yamorisyamomonone/calendar?schdlId=s000029C7B"
                  target="_blank"
                >
                  空き状況確認・ご予約
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mdc-layout-grid">
        <SubTitle text={"use case"} />
        <div className="mdc-layout-grid__inner">{useCases}</div>
      </div>
    </HCF>
  );
};
export default Page;
