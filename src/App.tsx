import React from 'react';
import ChampionsList from './pages/ChampionsList';
import {createGlobalStyle} from "styled-components";
import Header from './components/Header';

const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgba(0, 0, 0, .1);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .__spc32-0{background-position:0px 0px;width:32px;height:32px;}
  .__spc32-1{background-position:0px -32px;width:32px;height:32px;}
  .__spc32-2{background-position:0px -64px;width:32px;height:32px;}
  .__spc32-3{background-position:0px -96px;width:32px;height:32px;}
  .__spc32-4{background-position:0px -128px;width:32px;height:32px;}
  .__spc32-5{background-position:0px -160px;width:32px;height:32px;}
  .__spc32-6{background-position:0px -192px;width:32px;height:32px;}
  .__spc32-7{background-position:0px -224px;width:32px;height:32px;}
  .__spc32-8{background-position:0px -256px;width:32px;height:32px;}
  .__spc32-9{background-position:0px -288px;width:32px;height:32px;}
  .__spc32-10{background-position:0px -320px;width:32px;height:32px;}
  .__spc32-11{background-position:0px -352px;width:32px;height:32px;}
  .__spc32-12{background-position:0px -384px;width:32px;height:32px;}
  .__spc32-13{background-position:0px -416px;width:32px;height:32px;}
  .__spc32-14{background-position:0px -448px;width:32px;height:32px;}
  .__spc32-15{background-position:0px -480px;width:32px;height:32px;}
  .__spc32-16{background-position:0px -512px;width:32px;height:32px;}
  .__spc32-17{background-position:0px -544px;width:32px;height:32px;}
  .__spc32-18{background-position:0px -576px;width:32px;height:32px;}
  .__spc32-19{background-position:0px -608px;width:32px;height:32px;}
  .__spc32-20{background-position:0px -640px;width:32px;height:32px;}
  .__spc32-21{background-position:0px -672px;width:32px;height:32px;}
  .__spc32-22{background-position:0px -704px;width:32px;height:32px;}
  .__spc32-23{background-position:0px -736px;width:32px;height:32px;}
  .__spc32-24{background-position:0px -768px;width:32px;height:32px;}
  .__spc32-25{background-position:0px -800px;width:32px;height:32px;}
  .__spc32-26{background-position:0px -832px;width:32px;height:32px;}
  .__spc32-27{background-position:0px -864px;width:32px;height:32px;}
  .__spc32-28{background-position:0px -896px;width:32px;height:32px;}
  .__spc32-29{background-position:0px -928px;width:32px;height:32px;}
  .__spc32-30{background-position:0px -960px;width:32px;height:32px;}
  .__spc32-31{background-position:0px -992px;width:32px;height:32px;}
  .__spc32-32{background-position:0px -1024px;width:32px;height:32px;}
  .__spc32-33{background-position:0px -1056px;width:32px;height:32px;}
  .__spc32-34{background-position:0px -1088px;width:32px;height:32px;}
  .__spc32-35{background-position:0px -1120px;width:32px;height:32px;}
  .__spc32-36{background-position:0px -1152px;width:32px;height:32px;}
  .__spc32-37{background-position:0px -1184px;width:32px;height:32px;}
  .__spc32-38{background-position:0px -1216px;width:32px;height:32px;}
  .__spc32-39{background-position:0px -1248px;width:32px;height:32px;}
  .__spc32-40{background-position:0px -1280px;width:32px;height:32px;}
  .__spc32-41{background-position:0px -1312px;width:32px;height:32px;}
  .__spc32-42{background-position:0px -1344px;width:32px;height:32px;}
  .__spc32-43{background-position:0px -1376px;width:32px;height:32px;}
  .__spc32-44{background-position:0px -1408px;width:32px;height:32px;}
  .__spc32-45{background-position:0px -1440px;width:32px;height:32px;}
  .__spc32-46{background-position:0px -1472px;width:32px;height:32px;}
  .__spc32-47{background-position:0px -1504px;width:32px;height:32px;}
  .__spc32-48{background-position:0px -1536px;width:32px;height:32px;}
  .__spc32-49{background-position:0px -1568px;width:32px;height:32px;}
  .__spc32-50{background-position:0px -1600px;width:32px;height:32px;}
  .__spc32-51{background-position:0px -1632px;width:32px;height:32px;}
  .__spc32-52{background-position:0px -1664px;width:32px;height:32px;}
  .__spc32-53{background-position:0px -1696px;width:32px;height:32px;}
  .__spc32-54{background-position:0px -1728px;width:32px;height:32px;}
  .__spc32-55{background-position:0px -1760px;width:32px;height:32px;}
  .__spc32-56{background-position:0px -1792px;width:32px;height:32px;}
  .__spc32-57{background-position:0px -1824px;width:32px;height:32px;}
  .__spc32-58{background-position:0px -1856px;width:32px;height:32px;}
  .__spc32-59{background-position:0px -1888px;width:32px;height:32px;}
  .__spc32-60{background-position:0px -1920px;width:32px;height:32px;}
  .__spc32-61{background-position:0px -1952px;width:32px;height:32px;}
  .__spc32-62{background-position:0px -1984px;width:32px;height:32px;}
  .__spc32-63{background-position:0px -2016px;width:32px;height:32px;}
  .__spc32-64{background-position:0px -2048px;width:32px;height:32px;}
  .__spc32-65{background-position:0px -2080px;width:32px;height:32px;}
  .__spc32-66{background-position:0px -2112px;width:32px;height:32px;}
  .__spc32-67{background-position:0px -2144px;width:32px;height:32px;}
  .__spc32-68{background-position:0px -2176px;width:32px;height:32px;}
  .__spc32-69{background-position:0px -2208px;width:32px;height:32px;}
  .__spc32-70{background-position:0px -2240px;width:32px;height:32px;}
  .__spc32-71{background-position:0px -2272px;width:32px;height:32px;}
  .__spc32-72{background-position:0px -2304px;width:32px;height:32px;}
  .__spc32-73{background-position:0px -2336px;width:32px;height:32px;}
  .__spc32-74{background-position:0px -2368px;width:32px;height:32px;}
  .__spc32-75{background-position:0px -2400px;width:32px;height:32px;}
  .__spc32-76{background-position:0px -2432px;width:32px;height:32px;}
  .__spc32-77{background-position:0px -2464px;width:32px;height:32px;}
  .__spc32-78{background-position:0px -2496px;width:32px;height:32px;}
  .__spc32-79{background-position:0px -2528px;width:32px;height:32px;}
  .__spc32-80{background-position:0px -2560px;width:32px;height:32px;}
  .__spc32-81{background-position:0px -2592px;width:32px;height:32px;}
  .__spc32-82{background-position:0px -2624px;width:32px;height:32px;}
  .__spc32-83{background-position:0px -2656px;width:32px;height:32px;}
  .__spc32-84{background-position:0px -2688px;width:32px;height:32px;}
  .__spc32-85{background-position:0px -2720px;width:32px;height:32px;}
  .__spc32-86{background-position:0px -2752px;width:32px;height:32px;}
  .__spc32-87{background-position:0px -2784px;width:32px;height:32px;}
  .__spc32-88{background-position:0px -2816px;width:32px;height:32px;}
  .__spc32-89{background-position:0px -2848px;width:32px;height:32px;}
  .__spc32-90{background-position:0px -2880px;width:32px;height:32px;}
  .__spc32-91{background-position:0px -2912px;width:32px;height:32px;}
  .__spc32-92{background-position:0px -2944px;width:32px;height:32px;}
  .__spc32-93{background-position:0px -2976px;width:32px;height:32px;}
  .__spc32-94{background-position:0px -3008px;width:32px;height:32px;}
  .__spc32-95{background-position:0px -3040px;width:32px;height:32px;}
  .__spc32-96{background-position:0px -3072px;width:32px;height:32px;}
  .__spc32-97{background-position:0px -3104px;width:32px;height:32px;}
  .__spc32-98{background-position:0px -3136px;width:32px;height:32px;}
  .__spc32-99{background-position:0px -3168px;width:32px;height:32px;}
  .__spc32-100{background-position:0px -3200px;width:32px;height:32px;}
  .__spc32-101{background-position:0px -3232px;width:32px;height:32px;}
  .__spc32-102{background-position:0px -3264px;width:32px;height:32px;}
  .__spc32-103{background-position:0px -3296px;width:32px;height:32px;}
  .__spc32-104{background-position:0px -3328px;width:32px;height:32px;}
  .__spc32-105{background-position:0px -3360px;width:32px;height:32px;}
  .__spc32-106{background-position:0px -3392px;width:32px;height:32px;}
  .__spc32-107{background-position:0px -3424px;width:32px;height:32px;}
  .__spc32-108{background-position:0px -3456px;width:32px;height:32px;}
  .__spc32-109{background-position:0px -3488px;width:32px;height:32px;}
  .__spc32-110{background-position:0px -3520px;width:32px;height:32px;}
  .__spc32-111{background-position:0px -3552px;width:32px;height:32px;}
  .__spc32-112{background-position:0px -3584px;width:32px;height:32px;}
  .__spc32-113{background-position:0px -3616px;width:32px;height:32px;}
  .__spc32-114{background-position:0px -3648px;width:32px;height:32px;}
  .__spc32-115{background-position:0px -3680px;width:32px;height:32px;}
  .__spc32-116{background-position:0px -3712px;width:32px;height:32px;}
  .__spc32-117{background-position:0px -3744px;width:32px;height:32px;}
  .__spc32-118{background-position:0px -3776px;width:32px;height:32px;}
  .__spc32-119{background-position:0px -3808px;width:32px;height:32px;}
  .__spc32-120{background-position:0px -3840px;width:32px;height:32px;}
  .__spc32-121{background-position:0px -3872px;width:32px;height:32px;}
  .__spc32-122{background-position:0px -3904px;width:32px;height:32px;}
  .__spc32-123{background-position:0px -3936px;width:32px;height:32px;}
  .__spc32-124{background-position:0px -3968px;width:32px;height:32px;}
  .__spc32-125{background-position:0px -4000px;width:32px;height:32px;}
  .__spc32-126{background-position:0px -4032px;width:32px;height:32px;}
  .__spc32-127{background-position:0px -4064px;width:32px;height:32px;}
  .__spc32-128{background-position:0px -4096px;width:32px;height:32px;}
  .__spc32-129{background-position:0px -4128px;width:32px;height:32px;}
  .__spc32-130{background-position:0px -4160px;width:32px;height:32px;}
  .__spc32-131{background-position:0px -4192px;width:32px;height:32px;}
  .__spc32-132{background-position:0px -4224px;width:32px;height:32px;}
  .__spc32-133{background-position:0px -4256px;width:32px;height:32px;}
  .__spc32-134{background-position:0px -4288px;width:32px;height:32px;}
  .__spc32-135{background-position:0px -4320px;width:32px;height:32px;}
  .__spc32-136{background-position:0px -4352px;width:32px;height:32px;}
  .__spc32-137{background-position:0px -4384px;width:32px;height:32px;}
  .__spc32-138{background-position:0px -4416px;width:32px;height:32px;}
  .__spc32-139{background-position:0px -4448px;width:32px;height:32px;}
  .__spc32-140{background-position:0px -4480px;width:32px;height:32px;}
  .__spc32-141{background-position:0px -4512px;width:32px;height:32px;}
  .__spc32-142{background-position:0px -4544px;width:32px;height:32px;}
  .__spc32-143{background-position:0px -4576px;width:32px;height:32px;}
  .__spc32-144{background-position:0px -4608px;width:32px;height:32px;}
  .__spc32-145{background-position:0px -4640px;width:32px;height:32px;}
  .__spc32-146{background-position:0px -4672px;width:32px;height:32px;}
  .__spc32-147{background-position:0px -4704px;width:32px;height:32px;}
  .__spc32-148{background-position:0px -4736px;width:32px;height:32px;}
  .__spc32-149{background-position:0px -4768px;width:32px;height:32px;}
  .__spc32-150{background-position:0px -4800px;width:32px;height:32px;}
  .__spc32-151{background-position:0px -4832px;width:32px;height:32px;}
  .__spc32-152{background-position:0px -4864px;width:32px;height:32px;}
  .__spc32-153{background-position:0px -4896px;width:32px;height:32px;}
  .__spc32-154{background-position:0px -4928px;width:32px;height:32px;}
  .__spc32-155{background-position:0px -4960px;width:32px;height:32px;}

  .__spc82-0{background-position:0px 0px;width:82px;height:82px;}
  .__spc82-1{background-position:0px -82px;width:82px;height:82px;}
  .__spc82-2{background-position:0px -164px;width:82px;height:82px;}
  .__spc82-3{background-position:0px -246px;width:82px;height:82px;}
  .__spc82-4{background-position:0px -328px;width:82px;height:82px;}
  .__spc82-5{background-position:0px -410px;width:82px;height:82px;}
  .__spc82-6{background-position:0px -492px;width:82px;height:82px;}
  .__spc82-7{background-position:0px -574px;width:82px;height:82px;}
  .__spc82-8{background-position:0px -656px;width:82px;height:82px;}
  .__spc82-9{background-position:0px -738px;width:82px;height:82px;}
  .__spc82-10{background-position:0px -820px;width:82px;height:82px;}
  .__spc82-11{background-position:0px -902px;width:82px;height:82px;}
  .__spc82-12{background-position:0px -984px;width:82px;height:82px;}
  .__spc82-13{background-position:0px -1066px;width:82px;height:82px;}
  .__spc82-14{background-position:0px -1148px;width:82px;height:82px;}
  .__spc82-15{background-position:0px -1230px;width:82px;height:82px;}
  .__spc82-16{background-position:0px -1312px;width:82px;height:82px;}
  .__spc82-17{background-position:0px -1394px;width:82px;height:82px;}
  .__spc82-18{background-position:0px -1476px;width:82px;height:82px;}
  .__spc82-19{background-position:0px -1558px;width:82px;height:82px;}
  .__spc82-20{background-position:0px -1640px;width:82px;height:82px;}
  .__spc82-21{background-position:0px -1722px;width:82px;height:82px;}
  .__spc82-22{background-position:0px -1804px;width:82px;height:82px;}
  .__spc82-23{background-position:0px -1886px;width:82px;height:82px;}
  .__spc82-24{background-position:0px -1968px;width:82px;height:82px;}
  .__spc82-25{background-position:0px -2050px;width:82px;height:82px;}
  .__spc82-26{background-position:0px -2132px;width:82px;height:82px;}
  .__spc82-27{background-position:0px -2214px;width:82px;height:82px;}
  .__spc82-28{background-position:0px -2296px;width:82px;height:82px;}
  .__spc82-29{background-position:0px -2378px;width:82px;height:82px;}
  .__spc82-30{background-position:0px -2460px;width:82px;height:82px;}
  .__spc82-31{background-position:0px -2542px;width:82px;height:82px;}
  .__spc82-32{background-position:0px -2624px;width:82px;height:82px;}
  .__spc82-33{background-position:0px -2706px;width:82px;height:82px;}
  .__spc82-34{background-position:0px -2788px;width:82px;height:82px;}
  .__spc82-35{background-position:0px -2870px;width:82px;height:82px;}
  .__spc82-36{background-position:0px -2952px;width:82px;height:82px;}
  .__spc82-37{background-position:0px -3034px;width:82px;height:82px;}
  .__spc82-38{background-position:0px -3116px;width:82px;height:82px;}
  .__spc82-39{background-position:0px -3198px;width:82px;height:82px;}
  .__spc82-40{background-position:0px -3280px;width:82px;height:82px;}
  .__spc82-41{background-position:0px -3362px;width:82px;height:82px;}
  .__spc82-42{background-position:0px -3444px;width:82px;height:82px;}
  .__spc82-43{background-position:0px -3526px;width:82px;height:82px;}
  .__spc82-44{background-position:0px -3608px;width:82px;height:82px;}
  .__spc82-45{background-position:0px -3690px;width:82px;height:82px;}
  .__spc82-46{background-position:0px -3772px;width:82px;height:82px;}
  .__spc82-47{background-position:0px -3854px;width:82px;height:82px;}
  .__spc82-48{background-position:0px -3936px;width:82px;height:82px;}
  .__spc82-49{background-position:0px -4018px;width:82px;height:82px;}
  .__spc82-50{background-position:0px -4100px;width:82px;height:82px;}
  .__spc82-51{background-position:0px -4182px;width:82px;height:82px;}
  .__spc82-52{background-position:0px -4264px;width:82px;height:82px;}
  .__spc82-53{background-position:0px -4346px;width:82px;height:82px;}
  .__spc82-54{background-position:0px -4428px;width:82px;height:82px;}
  .__spc82-55{background-position:0px -4510px;width:82px;height:82px;}
  .__spc82-56{background-position:0px -4592px;width:82px;height:82px;}
  .__spc82-57{background-position:0px -4674px;width:82px;height:82px;}
  .__spc82-58{background-position:0px -4756px;width:82px;height:82px;}
  .__spc82-59{background-position:0px -4838px;width:82px;height:82px;}
  .__spc82-60{background-position:0px -4920px;width:82px;height:82px;}
  .__spc82-61{background-position:0px -5002px;width:82px;height:82px;}
  .__spc82-62{background-position:0px -5084px;width:82px;height:82px;}
  .__spc82-63{background-position:0px -5166px;width:82px;height:82px;}
  .__spc82-64{background-position:0px -5248px;width:82px;height:82px;}
  .__spc82-65{background-position:0px -5330px;width:82px;height:82px;}
  .__spc82-66{background-position:0px -5412px;width:82px;height:82px;}
  .__spc82-67{background-position:0px -5494px;width:82px;height:82px;}
  .__spc82-68{background-position:0px -5576px;width:82px;height:82px;}
  .__spc82-69{background-position:0px -5658px;width:82px;height:82px;}
  .__spc82-70{background-position:0px -5740px;width:82px;height:82px;}
  .__spc82-71{background-position:0px -5822px;width:82px;height:82px;}
  .__spc82-72{background-position:0px -5904px;width:82px;height:82px;}
  .__spc82-73{background-position:0px -5986px;width:82px;height:82px;}
  .__spc82-74{background-position:0px -6068px;width:82px;height:82px;}
  .__spc82-75{background-position:0px -6150px;width:82px;height:82px;}
  .__spc82-76{background-position:0px -6232px;width:82px;height:82px;}
  .__spc82-77{background-position:0px -6314px;width:82px;height:82px;}
  .__spc82-78{background-position:0px -6396px;width:82px;height:82px;}
  .__spc82-79{background-position:0px -6478px;width:82px;height:82px;}
  .__spc82-80{background-position:0px -6560px;width:82px;height:82px;}
  .__spc82-81{background-position:0px -6642px;width:82px;height:82px;}
  .__spc82-82{background-position:0px -6724px;width:82px;height:82px;}
  .__spc82-83{background-position:0px -6806px;width:82px;height:82px;}
  .__spc82-84{background-position:0px -6888px;width:82px;height:82px;}
  .__spc82-85{background-position:0px -6970px;width:82px;height:82px;}
  .__spc82-86{background-position:0px -7052px;width:82px;height:82px;}
  .__spc82-87{background-position:0px -7134px;width:82px;height:82px;}
  .__spc82-88{background-position:0px -7216px;width:82px;height:82px;}
  .__spc82-89{background-position:0px -7298px;width:82px;height:82px;}
  .__spc82-90{background-position:0px -7380px;width:82px;height:82px;}
  .__spc82-91{background-position:0px -7462px;width:82px;height:82px;}
  .__spc82-92{background-position:0px -7544px;width:82px;height:82px;}
  .__spc82-93{background-position:0px -7626px;width:82px;height:82px;}
  .__spc82-94{background-position:0px -7708px;width:82px;height:82px;}
  .__spc82-95{background-position:0px -7790px;width:82px;height:82px;}
  .__spc82-96{background-position:0px -7872px;width:82px;height:82px;}
  .__spc82-97{background-position:0px -7954px;width:82px;height:82px;}
  .__spc82-98{background-position:0px -8036px;width:82px;height:82px;}
  .__spc82-99{background-position:0px -8118px;width:82px;height:82px;}
  .__spc82-100{background-position:0px -8200px;width:82px;height:82px;}
  .__spc82-101{background-position:0px -8282px;width:82px;height:82px;}
  .__spc82-102{background-position:0px -8364px;width:82px;height:82px;}
  .__spc82-103{background-position:0px -8446px;width:82px;height:82px;}
  .__spc82-104{background-position:0px -8528px;width:82px;height:82px;}
  .__spc82-105{background-position:0px -8610px;width:82px;height:82px;}
  .__spc82-106{background-position:0px -8692px;width:82px;height:82px;}
  .__spc82-107{background-position:0px -8774px;width:82px;height:82px;}
  .__spc82-108{background-position:0px -8856px;width:82px;height:82px;}
  .__spc82-109{background-position:0px -8938px;width:82px;height:82px;}
  .__spc82-110{background-position:0px -9020px;width:82px;height:82px;}
  .__spc82-111{background-position:0px -9102px;width:82px;height:82px;}
  .__spc82-112{background-position:0px -9184px;width:82px;height:82px;}
  .__spc82-113{background-position:0px -9266px;width:82px;height:82px;}
  .__spc82-114{background-position:0px -9348px;width:82px;height:82px;}
  .__spc82-115{background-position:0px -9430px;width:82px;height:82px;}
  .__spc82-116{background-position:0px -9512px;width:82px;height:82px;}
  .__spc82-117{background-position:0px -9594px;width:82px;height:82px;}
  .__spc82-118{background-position:0px -9676px;width:82px;height:82px;}
  .__spc82-119{background-position:0px -9758px;width:82px;height:82px;}
  .__spc82-120{background-position:0px -9840px;width:82px;height:82px;}
  .__spc82-121{background-position:0px -9922px;width:82px;height:82px;}
  .__spc82-122{background-position:0px -10004px;width:82px;height:82px;}
  .__spc82-123{background-position:0px -10086px;width:82px;height:82px;}
  .__spc82-124{background-position:0px -10168px;width:82px;height:82px;}
  .__spc82-125{background-position:0px -10250px;width:82px;height:82px;}
  .__spc82-126{background-position:0px -10332px;width:82px;height:82px;}
  .__spc82-127{background-position:0px -10414px;width:82px;height:82px;}
  .__spc82-128{background-position:0px -10496px;width:82px;height:82px;}
  .__spc82-129{background-position:0px -10578px;width:82px;height:82px;}
  .__spc82-130{background-position:0px -10660px;width:82px;height:82px;}
  .__spc82-131{background-position:0px -10742px;width:82px;height:82px;}
  .__spc82-132{background-position:0px -10824px;width:82px;height:82px;}
  .__spc82-133{background-position:0px -10906px;width:82px;height:82px;}
  .__spc82-134{background-position:0px -10988px;width:82px;height:82px;}
  .__spc82-135{background-position:0px -11070px;width:82px;height:82px;}
  .__spc82-136{background-position:0px -11152px;width:82px;height:82px;}
  .__spc82-137{background-position:0px -11234px;width:82px;height:82px;}
  .__spc82-138{background-position:0px -11316px;width:82px;height:82px;}
  .__spc82-139{background-position:0px -11398px;width:82px;height:82px;}
  .__spc82-140{background-position:0px -11480px;width:82px;height:82px;}
  .__spc82-141{background-position:0px -11562px;width:82px;height:82px;}
  .__spc82-142{background-position:0px -11644px;width:82px;height:82px;}
  .__spc82-143{background-position:0px -11726px;width:82px;height:82px;}
  .__spc82-144{background-position:0px -11808px;width:82px;height:82px;}
  .__spc82-145{background-position:0px -11890px;width:82px;height:82px;}
  .__spc82-146{background-position:0px -11972px;width:82px;height:82px;}
  .__spc82-147{background-position:0px -12054px;width:82px;height:82px;}
  .__spc82-148{background-position:0px -12136px;width:82px;height:82px;}
  .__spc82-149{background-position:0px -12218px;width:82px;height:82px;}
  .__spc82-150{background-position:0px -12300px;width:82px;height:82px;}
  .__spc82-151{background-position:0px -12382px;width:82px;height:82px;}
  .__spc82-152{background-position:0px -12464px;width:82px;height:82px;}
  .__spc82-153{background-position:0px -12546px;width:82px;height:82px;}
  .__spc82-154{background-position:0px -12628px;width:82px;height:82px;}
  .__spc82-155{background-position:0px -12710px;width:82px;height:82px;}
`

function App() {
  return (
    <>
      <MyGlobalStyle />
      <Header headerHeight={100} />
      <ChampionsList />
    </>
  );
}

export default App;

// 1. git clone https://github.com/dudco/opgg-1clone.git
// 2. cd opgg-clone
// 3. npm install
// 4. npm run start

// styled components
// 1. npm install --save styled-components
// 2. npm install --save @types/styled-components

