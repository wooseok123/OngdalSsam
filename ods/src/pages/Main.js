import React from "react";
import MainAds from "../components/MainAds";
import MainSlide from "../components/MainSlide";
import MainWaterSlide from "../components/MainWaterSlide";
import MainVideoSlide from "../components/MainVideoSlide";
import { MainAdsWrapper, MainWaterAndAdsWrapper } from "../styledComponents";
import MainQuestion from "../components/MainQuestion";
import MainReview from "../components/MainReview";
import MainLogin from "../components/MainLogin";

const data = [
  {
    bold: ["이번달", "수질 적합", "생수 리스트"],
    thin: "옹달샘에서 가장 먼저 만나보세요.",
  },
  {
    bold: ["옹달샘", "스페셜 할인"],
    thin: "오직 옹달샘만이 제공합니다.",
  },
  {
    bold: ["이런", "생수 어때요?"],
    thin: [
      ["옹달샘이 먼저 맛보고,", "분석해서 알려드립니다"],
      ["주문을 더욱 편리하게", "영상 속 생수들을 바로 만나보세요"],
    ],
  },
];

const waterData = [
  [
    {
      id: 1,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 2,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 3,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 4,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 5,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 6,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 7,
      name: "석수",
      fac: "청주공장",
      price: "500",
      validDate: "2022-12-12",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
  ],
  [
    {
      id: 1,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 2,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 3,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 4,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 5,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 6,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
    {
      id: 7,
      name: "석수",
      fac: "청주공장",
      price: "500",
      saleRate: "50",
      hashTags: ["연수", "옹달샘 추천", "짱맛"],
    },
  ],
];

const Ad_data = [
  {
    id: 1,
    name: "jeju",
    src: "jeju.svg",
    title: "닥터유 제주 용암수",
    sub: "제주의 청결함과 건강함",
  },
  {
    id: 2,
    name: "monbest",
    src: "monbest.svg",
    title: "몽베스트 생수",
    sub: "국망봉 기슭에서 취수한 내추럴 미네랄 워터",
    reverse: true,
    ad: true,
  },
];

const videoData = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/0X50Yr7HAQI",
    name: "아이시스 8.0",
    fac: "청주공장",
    desc: ["50000m", "심해에서 끌어올린 지중해", "해양심층수"],
    price: 980,
    img: "water.png",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/0X50Yr7HAQI",
    name: "삼다수",
    fac: "청주공장",
    desc: ["50000m", "심해에서 끌어올린 지중해", "해양심층수"],
    price: 980,
    img: "water.png",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/0X50Yr7HAQI",
    name: "순수",
    fac: "청주공장",
    desc: ["50000m", "심해에서 끌어올린 지중해", "해양심층수"],
    price: 980,
    img: "water.png",
  },
];

const reviewData = [
  {
    id: 1,
    item: "삼다수 500ml",
    quantity: "24개 묶음",
    src: "water1",
    name: "상큼한 삐용이",
    desc: "정기적으로 수질 적합 여부를 알려줘서 안전하고 간편하게 구매할 수 있어서 너무 좋아요!! 또 종류별로 손쉽게 확인이 가능해서 좋았어요",
  },
  {
    id: 2,
    item: "삼다수 500ml",
    quantity: "24개 묶음",
    src: "water2",
    name: "나는야 물의왕자",
    desc: "정기적으로 수질 적합 여부를 알려줘서 안전하고 간편하게 구매할 수 있어서 너무 좋아요!! 또 종류별로 손쉽게 확인이 가능해서 좋았어요",
  },
  {
    id: 3,
    item: "옹달샘 스타터키트",
    quantity: "1박스",
    src: "water3",
    name: "춤추는 명준",
    desc: "나에게 어떤 물이 맞는지 찾기 힘들었는데, 물에 대한 정보를 보기 쉽게 제공해줘서 좋았어요.",
  },
  {
    id: 4,
    item: "옹달샘 이달의 할인 패키지",
    quantity: "4박스",
    src: "water4",
    name: "물먹는 하마 바로나님",
    desc: "옹달샘 흥해라 흥! 다른 사이트들 보다 저렴하고 직관적이에요!",
  },
  {
    id: 5,
    item: "옹달샘 무라벨 생수 모음",
    quantity: "1박스",
    src: "water5",
    name: "늘푸른우리지구",
    desc: "평소에 환경오염에 관심이 많았는데, ESG를 실천하는 기업도 필터링해줘서 찾기 편했어요. 무라벨 생수도 찾아볼 수 있더라구요.",
  },
  {
    id: 6,
    item: "옹달샘 이달의 할인 패키지",
    quantity: "4박스",
    src: "water6",
    name: "물먹는 하마 바로나님",
    desc: "옹달샘 흥해라 흥! 다른 사이트들 보다 저렴하고 직관적이에요!",
  },
];

const questionData = [
  {
    id: 1,
    src: "물맛",
    title: "물의 맛?",
  },
  {
    id: 2,
    src: "기준",
    title: "좋은 물의 기준?",
  },
  {
    id: 3,
    src: "미세",
    title: "미세 플라스틱?",
  },
  {
    id: 4,
    src: "수질",
    title: "수질 부적합?",
  },
  {
    id: 5,
    src: "경도",
    title: "물의 경도?",
  },
  {
    id: 6,
    src: "무기질함량",
    title: "물의 무기질 함량?",
  },
];

const Main = () => {
  return (
    <>
      <MainSlide />
      <MainWaterAndAdsWrapper>
        <MainWaterSlide {...data[0]} data={waterData[0]} />
        <MainWaterSlide {...data[1]} data={waterData[1]} />
        <MainAdsWrapper>
          <MainAds {...Ad_data[0]} />
          <MainAds {...Ad_data[1]} />
          <MainAds {...Ad_data[0]} />
          <MainAds {...Ad_data[1]} />
        </MainAdsWrapper>
        <MainVideoSlide {...data[2]} data={videoData} />
      </MainWaterAndAdsWrapper>
      <MainQuestion data={questionData} />
      <MainReview data={reviewData} />
      <MainLogin />
    </>
  );
};

export default Main;
