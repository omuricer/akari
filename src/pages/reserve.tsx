import { GetStaticProps } from "next";
import HCF from "components/layouts/hcf";
import SubTitle from "components/subTitle";
import SubSubTitle from "components/subSubTitle";
import UseCase from "components/useCase";
import FadeOnScroll from "components/fadeOnScroll";
import { UseCase as UseCaseModel } from "domain/model/useCase";
import UseCaseData from "json/usecase";
import Image from "next/image";

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const useCases = await (async () => {
    return new Promise<UseCaseModel[]>((resolve) => {
      resolve(UseCaseData);
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
            <h2 className="resource">アカリパーク</h2>
            <img className="mdc-image-list__image" src="image/akaripark.jpg" />
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
