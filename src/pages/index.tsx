import { GetStaticProps } from "next";
import HCF from "components/layouts/hcf";
import SubTitle from "components/subTitle";
import Concept from "components/concept";
import News from "components/news";
import FadeOnScroll from "components/fadeOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faCar, faTrain } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { News as NewsModel } from "domain/model/news";
import { DIContainer } from "di/inversify.config";
import { TYPES } from "di/types";
import { NewsRepository } from "domain/repository/newsRepository";
import Slider from "components/slider";
import MainConcept from "components/mainConcept";

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
    image: "/image/concept2.jpg",
    reverse: true,
  },
  {
    main_accent: "Share",
    main: " Park",
    sub: "多様な文化を知る。",
    image: "/image/concept3.jpg",
    reverse: false,
  },
  {
    main_accent: "Share",
    main: " Office",
    sub: "小さな産業が生まれる。",
    image: "/image/concept4.jpg",
    reverse: true,
  },
];

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const newsRepository = DIContainer.get<NewsRepository>(TYPES.NewsRepository);
  return {
    props: {
      news: await newsRepository.all(),
    },
  };
};

interface Props {
  news: NewsModel[];
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
      <MainConcept />
      <div className="mdc-layout-grid about" id="about">
        <SubTitle text={"about"} />
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
        <SubTitle text={"service"} />
        <div className="mdc-layout-grid__inner">
          <div
            className="mdc-layout-grid__cell--span-6-desktop
    mdc-layout-grid__cell--span-8-tablet
    mdc-layout-grid__cell--span-4-phone"
          >
            <Slider
              images={[
                { src: "/image/1f.png", alt: "地域の価値を分かち合う。" },
                { src: "/image/2f.png", alt: "地域の価値を分かち合う。" },
              ]}
            />
          </div>
          <div
            className="mdc-layout-grid__cell--span-6-desktop
    mdc-layout-grid__cell--span-8-tablet
    mdc-layout-grid__cell--span-4-phone"
          >
            <ul>
              <li>
                <h4 className="headline">
                  Trattoria da Martino (イタリアン)
                </h4>
                <div className="text">
                  周辺地域の食材を使ったシチリア料理で新たな味の提案をしています。
                </div>
              </li>
              <li>
                <h4 className="headline">ラウンジ</h4>
                <div className="text">
                  勉強や読書など、ご自由にお寛ぎください。無料でお使い頂けます。
                </div>
              </li>
              <li>
                <h4 className="headline"><div className="underline">ライブラリ</div></h4>
                <div className="text">
                  無人で本の販売をしています。Lounge
                  に限り、お好きな本を無料でお読み頂けます。
                </div>
              </li>
              <li>
                <h4 className="headline"><div className="underline">スタジオ</div></h4>
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
                <h4 className="headline">ヒロバ</h4>
                <div className="text">
                  バーベキュー利用や全面貸切でのご利用が可能です。
                </div>
                <div className="attr">
                  [バーベキュー利用]<br />
                  ヒロバ中央の焚火台をお貸しいたします。<br />
                  １箇所　¥1500/日(全３箇所)
                </div>
                <div className="attr">
                  [貸切利用]<br />
                  マルシェなど、屋外のイベントでご利用頂けます。１日単位でご利用頂けます。<br />
                  面積：1,500㎡利用料：¥10,000/日
                </div>
                <div className="text">
                  <a href="/reserve">ご予約はこちら</a>
                </div>
              </li>
              <li>
                <h4 className="headline">シェアオフィス</h4>
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
                  Trattoria da Martino のまかないメシ（¥500）
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
                <FontAwesomeIcon icon={faClock} />
                <p>Hours</p>
              </div>
              <div className="center-desc-headline">アカリ</div>
              <p className="text">
                Daily, <span className="headline">10:00</span> to{" "}
                <span className="headline">22:00</span>
              </p>
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
      {/* <div className="mdc-layout-grid" id="news">
        <SubTitle text={"news"} />
        <div className="mdc-layout-grid__inner">{news}</div>
      </div> */}
      <div className="mdc-layout-grid no-margin" id="access">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-12">
            <iframe
              loading="lazy"
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
    </HCF >
  );
};
export default Page;
