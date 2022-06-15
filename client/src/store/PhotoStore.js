import { makeAutoObservable } from "mobx";

export default class PhotoStore {
  constructor() {
    this._types = [
      { id: 1, name: "Строения" },
      { id: 2, name: "Водоемы" },
      { id: 3, name: "Растения" },
      { id: 4, name: "Животные" },
      { id: 5, name: "Птицы" },
    ];
    this._kinds = [
      { id: 1, name: "Деревья" },
      { id: 2, name: "Цветы" },
      { id: 3, name: "Лошади" },
      { id: 4, name: "Куры" },
      { id: 5, name: "Гуси" },
    ];
    this._photo = [
      {
        id: 1,
        title: "title1",
        description: "description1",
        rating: 0,
        img: "https://phonoteka.org/uploads/posts/2021-05/1620907254_6-phonoteka_org-p-fon-rabochego-stola-derevnya-6.jpg",
      },
      {
        id: 2,
        title: "title2",
        description: "description2",
        rating: 0,
        img: "https://photocentra.ru/images/main64/648775_main.jpg",
      },
      {
        id: 3,
        title: "title3",
        description: "description3",
        rating: 0,
        img: "https://sun9-37.userapi.com/impf/FdOe48jGqlMJWOz72ra4gDsruY_pj4fUFepqvw/xHcmCHdnIm0.jpg?size=0x0&quality=90&proxy=1&sign=99a738d825934b46d3d079437f12f881&c_uniq_tag=FNMFuR6-w1hni_iM_JDGG_2NuyYvLCyBfzoQixdmLSY&type=video_thumb",
      },
      {
        id: 4,
        title: "title4",
        description: "description4",
        rating: 0,
        img: "https://pro-dachnikov.com/uploads/posts/2021-10/1633883584_90-p-foto-derevenskikh-domov-v-rossii-foto-93.jpg",
      },
      {
        id: 5,
        title: "title5",
        description: "description5",
        rating: 0,
        img: "https://mykaleidoscope.ru/uploads/posts/2021-03/1617192399_17-p-derevenskii-dom-17.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedKind = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setKinds(kinds) {
    this._kinds = kinds;
  }
  setPhoto(photo) {
    this._photo = photo;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedKind(kind) {
    this._selectedKind = kind;
  }

  get types() {
    return this._types;
  }
  get kinds() {
    return this._kinds;
  }
  get photo() {
    return this._photo;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedKind() {
    return this._selectedKind;
  }
}
