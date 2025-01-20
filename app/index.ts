import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import { initToursDivElements } from "@services/tours/tours";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist



initHeaderTitle('Туры', 'h1');
initFooterTitle('Туры по всему миру', 'h2');
// init data
const tourData: Promise<ITours[]> = getTours();

tourData.then((data): void => {
  console.log('call ')
  toursDataArray = data;
  initToursDivElements(data);
});


// init app

