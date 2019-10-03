import React from "react";
import { render } from "react-dom";

import Button from "./components/Buttons/button";
import Template from "./components/templates/template";

import Footer from "./components/templates/footer";

import "./css/html5reset-1.6.1.css";
import "./sass/index.scss";

import { Cell, Grid, Row } from "@material/react-layout-grid";
import "@material/react-layout-grid/index.scss";

// JSON
import concepts from "./json/concepts.json";
import swiperMaps from "./json/swiperMaps.json";
import news from "./json/news.json";

render(
  <Template>
    <Grid>
      <Row className="fixed-bg">
        <Cell columns={12}>
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
        </Cell>
      </Row>
    </Grid>
    <Grid className="about" id="about">
      {/* TODO: Subtitleをつくる */}
      {/* <Subtitle subtitle='about akari' /> */}
      <Row>
        <Cell columns={12}>
          <p>
            この地域に、多様な人々がともに学び合う場をつくっています。ここは、共感できる仲間と、空間も価値観もシェアして、１人１人に灯る”想い”を大切にする場所です。
          </p>
        </Cell>
        {concepts.map(element => {
          return <Cell columns={12}>{element.main}</Cell>;
          // TODO: Conceptをつくる
          // return <Concept element={element} />;
        })}
      </Row>
    </Grid>
    <Grid className="service" id="service">
      {/* TODO: Subtitleをつくる */}
      {/* <Subtitle subtitle='our service' /> */}
      <Row>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          {/* TODO: Swiperをつくる */}
          {/* <Swiper images={swiperMaps} /> */}
        </Cell>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <ul>
            <li>
              <h4 class="headline">Trattoria da Martino ( イタリアン )</h4>
              <div class="text">
                周辺地域の食材を使ったシチリア料理で新たな味の提案をしています。
              </div>
            </li>
            <li>
              <h4 class="headline">Lounge</h4>
              <div class="text">
                勉強や読書など、ご自由にお寛ぎください。無料でお使い頂けます。
              </div>
            </li>
            <li>
              <h4 class="headline">Library</h4>
              <div class="text">
                無人で本の販売をしています。Lounge
                に限り、お好きな本を無料でお読み頂けます。
              </div>
            </li>
            <li>
              <h4 class="headline">Baby room</h4>
              <div class="text">
                おむつ交換台と授乳スペースを設置しています。
              </div>
            </li>
            <li>
              <h4 class="headline">Studio</h4>
              <div class="text">
                会議やイベントスペースとしてお使い頂けます。プロジェクター、マイク、スクリーンは有料で貸し出しております。
              </div>
              <div class="attr">面積：89㎡</div>
              <div class="attr">利用料：¥1,000/h</div>
            </li>
            <li>
              <h4 class="headline">Akari Park</h4>
              <div class="text">
                マルシェなど、屋外のイベントでご利用頂けます。１日単位でご利用頂けます。
              </div>
              <div class="attr">面積：1,500㎡</div>
              <div class="attr">利用料：¥10,000/日</div>
            </li>
            <li>
              <h4 class="headline">Share Office</h4>
              <div class="text">
                主に地域の魅力を高める業態の方を対象に、オフィススペースを貸し出しています。随時入居者を募集しておりますので、お問合わせフォームよりお気軽にご相談ください。
              </div>
              <div class="attr">部屋面積：11㎡</div>
              <div class="attr">賃料：¥20,000/月</div>
              <div class="attr">光熱費：¥5,000/月</div>
              <div class="attr">共益費：¥3,000/月</div>
              <div class="attr">月極駐車場有</div>
              <div class="attr">wifi・電源完備</div>
              <div class="attr">空調有り</div>
              <br />
              <div class="attr">＜入居者特典＞</div>
              <br />
              <div class="attr">
                ①Trattoria da Martino のまかないメシ（¥500）
              </div>
              <div class="attr">
                ②スタジオ・アカリパーク利用料割引（１割引）
              </div>
            </li>
          </ul>
        </Cell>
      </Row>
    </Grid>
    <Grid className="news" id="news">
      {/* TODO: Subtitleをつくる */}
      {/* <Subtitle subtitle='news' /> */}
      <Row>
        {news.map(element => {
          // TODO: Newsをつくる
          // return <News news={element} />;
        })}
      </Row>
    </Grid>
    <Grid className="no-margin">
      <Row>
        <Cell columns={12}>
          <iframe
            className="googlemap-gray"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.189768797691!2d140.5390445797095!3d37.879244514014125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a63effff3e0d5%3A0x290f6d736d519745!2z44CSOTY5LTE3NzEg56aP5bO255yM5LyK6YGU6YOh5Zu96KaL55S65bGx5bSO6IiY5p2x77yR77yU4oiS77yY!5e0!3m2!1sja!2sjp!4v1554870222948!5m2!1sja!2sjp"
            width="100%"
            height="300"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </Cell>
      </Row>
    </Grid>
  </Template>,
  document.getElementById("app")
);
