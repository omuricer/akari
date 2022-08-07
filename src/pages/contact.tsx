import HCF from "components/layouts/hcf";
import SubTitle from "components/subTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface Props { }
const Page: React.FC<Props> = (props) => {
  return (
    <HCF className="plane">
      <div className="mdc-layout-grid no-margin contact">
        <SubTitle text="contact" />
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone center methods">
            <p className="desc">
              視察・研修などのご利用をご希望の場合についても、下記のいずれかからお問い合わせください。
            </p>
            <div className="center-desc">
              <div className="center-desc-headline">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>E-mail</p>
              </div>
              <a href="mailto:yamorisyamomonone@gmail.com">
                yamorisyamomonone@gmail.com
              </a>
            </div>
            <div className="center-desc">
              <div className="center-desc-headline">
                <FontAwesomeIcon icon={faPhone} />
                <p>TEL</p>
              </div>
              <a href="tel:024-573-9013">024-573-9013</a>
            </div>
            <div className="center-desc">
              <div className="center-desc-headline">
                <FontAwesomeIcon icon={faUserFriends} />
                <p>SNS</p>
              </div>
              <a
                href="https://www.facebook.com/yamorisyamomonone2018"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a
                href="https://www.instagram.com/yamorisyamomonone/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone center">
            <p className="desc">
              下記の入力フォームからもお問い合わせただけます。<br />
            </p>
            <p className="desc">
              バーベキューの予約をご希望の方はこちらからお問い合わせください。
            </p>
            <div
              style={{
                width: "100%",
                height: "1200px",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <iframe
                loading="lazy"
                src="https://tayori.com/form/611c5599a7047a05ab9dd618f88a7c735c4990f0"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </HCF>
  );
};
export default Page;

// interface LabelNValueProps {
//   icon: JSX.Element;
//   label: string;
//   value: string;
// }
// const LabelNValue: React.FC<LabelNValueProps> = (props) => {
//   return (
//     <div className="center-desc">
//       <div className="center-desc-headline">
//         {props.icon}
//         <p>{props.label}</p>
//       </div>
//       <a href="mailto:yamorisyamomonone@gmail.com">
//         yamorisyamomonone@gmail.com
//       </a>
//     </div>
//   );
// };
