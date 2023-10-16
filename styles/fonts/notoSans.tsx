import { Noto_Sans_KR } from '@next/font/google';

// https://nextjs.org/docs/pages/api-reference/components/font#nextfontgoogle

const bold = Noto_Sans_KR({
  weight: '700', // 폰트의 가중치를 설정하는 key
  display: 'fallback', // css에서 font-display 키워드를 설정 하는 key
  subsets: ['latin'], // font가 적용할 수 있는 언어 중에서 먼저 가져 올 나라의 언어를 설정하는 key
  style: 'normal', // font의 스타일이 normal인지 italic인지 설정하는 key
  variable: '--noto-sans_KR-bold', //  CSS 변수 방식으로 사용할 때의 이름을 정의하는 key
  fallback: ['system-ui'], // 해당 font를 가져오지 못하였을 때의 대체 글꼴을 설정하는 key
});

const medium = Noto_Sans_KR({
  weight: '500',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: ['system-ui'],
});

const regular = Noto_Sans_KR({
  weight: '400',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-regular',
  fallback: ['system-ui'],
});

const light = Noto_Sans_KR({
  weight: '300',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-light',
  fallback: ['system-ui'],
});

const thin = Noto_Sans_KR({
  weight: '100',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-thin',
  fallback: ['system-ui'],
});

export {
  bold as notoSansKrBold,
  medium as notoSansKrMedium,
  regular as notoSansKrRegular,
  light as notoSansKrLight,
  thin as notoSansKrThin,
};
