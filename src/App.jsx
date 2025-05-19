import Accordion from "./component/Project01-Accordion/Accordion";
import RandomColor from "./component/Project02-RandomColors/RandomColor";
import ImageSlider from "./component/Project04-ImageSLIDER/Imageslider";
import Star from "./component/Project03-StarRating/Star";
import LoadData from "./component/Project05-LoadMoreData/loadData";
import TreeView from "./component/Project06-Tree-View/TreeView";
import QRCodeGenerator from "./component/Project07-QR-Code/QRCode";
import LightDarkTheme from "./component/Project08-Theme/Theme";
import ScrollIndicator from "./component/Project09-Scroll-Indicator/Scroll";
import Game from "./component/Project10-Tic-Tac-Toe/Game";

import { useState } from "react";

export default function App() {
  return (
    <>
      {/* <Accordion></Accordion>

      <RandomColor></RandomColor>

      <Star></Star>

      <ImageSlider></ImageSlider>

      <LoadData></LoadData>

      <TreeView></TreeView>

      <QRCodeGenerator></QRCodeGenerator>
      <LightDarkTheme></LightDarkTheme>

      <ScrollIndicator></ScrollIndicator> */}

      <Game></Game>
    </>
  );
}
