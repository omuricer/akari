import React from "react";
import Head from "next/head";

interface Props {}
const CommonHead: React.FC<Props> = (props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>家守舎桃ノ音 アカリ</title>
      <meta
        name="description"
        content="家守舎桃ノ音のリノベーションにより、福島県伊達郡国見町に新たな学び合いの場、アカリが誕生しました。アカリはシェアオフィス、コワーキングスペース、イベントスペース、トラットリアを提供し、地域の多様な人々がともに学び合う場をつくっています。共感できる仲間と、空間も価値観もシェアして、１人１人に灯る”想い”を大切にする場所です。"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />

      <meta property="og:title" content="家守舎桃ノ音 アカリ" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="家守舎桃ノ音のリノベーションにより、福島県伊達郡国見町に新たな学び合いの場、アカリが誕生しました。アカリはシェアオフィス、コワーキングスペース、イベントスペース、トラットリアを提供し、地域の多様な人々がともに学び合う場をつくっています。共感できる仲間と、空間も価値観もシェアして、１人１人に灯る”想い”を大切にする場所です。"
      />
      <meta property="og:url" content="https://yamorisyamomonone.com" />
      <meta property="og:site_name" content="家守舎桃ノ音 アカリ" />
      <meta
        property="og:image"
        content="https://yamorisyamomonone.com/image/ogp/ogp.png"
      />
      <meta property="fb:app_id" content="2590332120996026" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yamorisyamomone" />
    </Head>
  );
};
export default CommonHead;
