const quotes = [
    {
      quote: "사람들이 감사하지 않을 때 인간성을 상실하게 된다. 사람의 됨됨이는 그 사람의 감사 태도로 알 수 있다. - 엘리 비젤",
      author: "감사는 기적을 창조한다. (미상)",
    },
    {
      quote: " 감사는 기적을 창조한다. (미상)",
      author: " ",
    },
    {
      quote: "감사는 고결한 영혼의 얼굴이다. (토머스 제퍼슨)",
      author: "John Lennon",
    },
    {
      quote: "감사일기를 만들어 매일 밤 고마운 것들 5가지를 적어라. 새로운 희망을 갖게 될 것이다. (오프라 윈프리)",
      author: " ",
    },
    {
      quote: "대부분의 인간이 가진 감사한 마음은 더 큰 은혜를 얻으려는 은밀한 욕심에 지나지 않는다. (라 로슈푸코)",
      author: " ",
    },
    {
      quote: "과도한 감사만큼 아름다운 지나침은 없다. (라 브뤼에르)",
      author: " ",
    },
    {
      quote: "매일 같은 길을 걷다 보면  선택하지 않은 다른 길을 생각하기도 하는 데 생각하지 않으려 한다. 오히려 감사하다는 생각을 한다. -견하",
      author: " ",
    },
    {
      quote: "감사는 마음의 기억이다. (J. B. 마시외)",
      author: " ",
    },
    {
      quote: "감사할 줄 아는 사람에게 베풀어주는 사람은 높은 이자로 빌려주는 것과 같다. (영국 속담)",
      author: " ",
    },
    {
      quote: "땅은 감사할 줄 모르는 사람보다 더 나쁜 것을 생산하지 않는다. (아우소니우스)",
      author: " ",
    },
    {
      quote: "우리가 가진 것 때문에 감사하는 것이 아니요, 우리의 된 바로 인해 감사한다. (헬렌 켈러)",
      author: " ",
    },
    {
      quote: "정의는 종종 창백하고 우울할 때도 있다. 그러나 감사는 항상 활기찬 물결과 사랑스러운 꽃 속에 있다. (월터 시베지 랜더)",
      author: " ",
    },
    {
      quote: "감사할수록 감사할 일이 생긴다. -이정(巸程)",
      author: " ",
    },
    {
      quote: "남에게 베푼 이익을 기억하지 말라. 남에게 받은 은혜를 잊지 말라. (바이런)",
      author: " ",
    },
    {
      quote: "감사는 예의 중에 가장 아름다운 형태다. (J. 마르뎅)",
      author: " ",
    },
    {
      quote: "감사를 모르는 자는 도토리나무 밑에서 도토리를 탐닉하면서도 도토리가 어디에서 떨어지는지 모르는 돼지와 같다. (콘래드)",
      author: " ",
    },
    {
      quote: "작지만 [고맙다.]라는 말속에는 마법이 들어 있다. (아나스로에일)",
      author: " ",
    },
    {
      quote: "감사하는 마음은 금방 노쇠해버린다. (아리스토텔레스)",
      author: " ",
    },
    {
      quote: "감사는 위대한 교양의 결실이다. 야비한 사람은 그것을 결코 발견할 수 없다. (사무엘 존슨)",
      author: " ",
    },
    {
      quote: "감사의 마음은 얼굴을 아름답게 만드는 훌륭한 끝손질이다. (T. 파커)",
      author: " ",
    },
    {
      quote: "감사할 줄 아는 마음씨는 돈으로 살 수 없는 것 중의 하나다. 그것은 타고나는 것이지, 이 세상 어떤 것으로도 창조할 수 없다. (헬리팩스)",
      author: " ",
    },
    {
      quote: "작은 감사가 큰 감사를 낳는다. (알렉스 헤일리)",
      author: " ",
    },
    {
      quote: "감사하는 마음은 가장 위대한 미덕일 뿐 아니라 다른 모든 미덕의 근원이 된다. (키케로)",
      author: " ",
    },
    {
      quote: "감사하라. 그러면 그대는 영원한 잔치를 즐길 것이다. (맥더프)",
      author: " ",
    },
    {
      quote: "우리는 불평을 가짐으로 불평을 말하게 되는데 모든 것을 참고 감사하면 불평은 사라진다. (헬렌 켈러)",
      author: " ",
    },
    {
      quote: "감사한 마음으로 받는 사람에게는 풍성한 수확이 뒤따른다. (W. 브레이크) 감사는 창의력을 증진하고 삶에 큰 활력을 준다. (스트라잇)",
      author: " ",
    },
    {
      quote: "항상 기뻐하십시오. 늘 기도하십시오. 어떤 처지에서든지 감사하십시오. 이것은 그리스도 예수를 통해 여러분에게 보여주신 하나님의 뜻입니다. (데살로니가 5:16-22)",
      author: " ",
    },
    {
      quote: "감사할 줄 모르는 자식을 갖는다는 것은 뱀의 이에 물리는 것보다 더 따가운 일이다. (셰익스피어)",
      author: " ",
    },
    {
      quote: "감사하는 사람은 젊어진다. (칼 힐티)",
      author: " ",
    },
    {
      quote: "세상에서 감사를 표하는 이의 행동보다 더 아름다운 것은 없다. (라 브뤼에르) 감사 기도는 가장 강력한 위력이 있다. (칼빈)",
      author: " ",
    },
    {
      quote: "교만은 감사의 마음을 죽인다. 그러나 겸손한 마음은 감사가 자연히 자라게 하는 토양이다. (헨리 워드 비처)",
      author: " ",
    },
    {
      quote: "다른 공부보다 먼저 감사할 줄 아는 방법부터 배우라. 감사의 기술을 배울 때 그대는 비로소 행복해진다. (제임스 깁슨)",
      author: " ",
    },
    {
      quote: "사람이 얼마나 행복한 가는 그의 감사의 깊이에 달려 있다. (존 밀러)",
      author: " ",
    },
    {
      quote: "나의 주된 인생관은 모든 것을 감사함으로 받고 당연한 것으로 여기지 않도록 연습하는 것이다. (체스터튼)",
      author: " ",
    },
    {
      quote: "세찬 겨울 눈보라도 감사하지 않은 사람의 마음보다 모질지는 않다. (셰익스피어)",
      author: " ",
    },
    {
      quote: "위로받기보다는 위로할 수 있어서 감사합니다.",
      author: " ",
    },
    {
      quote: "이해받기보다는 이해할 수 있어서 감사합니다.",
      author: " ",
    },
    {
      quote: "사랑받기보다는 사랑할 수 있어서 감사합니다.",
      author: " ",
    },
    {
      quote: "용서받기보다는 용서할 수 있어서 감사합니다.",
      author: " ",
    },
    {
      quote: "칭찬받기보다는 칭찬할 수 있어서 감사합니다.",
      author: " ",
    },
    {
      quote: "긍정적인 생각을 가진 사람은 무슨 일이든지 무조건 받아들이고 감사한다. (가나모리 우라코)",
      author: " ",
    },
    {
      quote: "감사는 과거에 주는 덕행이라기보다 미래를 살찌게 하는 덕행이다. (영국 속담)",
      author: " ",
    },
    {
      quote: "나는 감사할 줄 모르면서 행복한 사람을 한 번도 만나보지 못했다. (지그 지글러)",
      author: " ",
    },
    {
      quote: "우리가 평생 [감사합니다.]라는 기도만 해도 그것으로 충분하다. (마이스터 에카르트)",
      author: " ",
    },
    {
      quote: "감사할 줄 모르는 자를 벌할 법은 없다. 감사할 줄 모르는 삶 자체가 벌이기 때문이다. (라이피 곱스)",
      author: " ",
    },
    {
      quote: "이 세상에서 가장 상큼한 과일은 감사다. (메난드로스)",
      author: " ",
    },
    {
      quote: "항상 즐겁게 생활하고 싶으면 사소한 일에 화내지 말 것이며, 내 몫으로 돌아온 것이 비록 작더라도 만족하고 감사하게 여겨라. (스마일즈)",
      author: " ",
    },
    {
      quote: "우리는 기도가 응답되기를 바라는 것처럼 열심히 감사해야 한다. (시몬즈)",
      author: " ",
    },
    {
      quote: "믿음의 동산에 피는 꽃 중에 가장 사랑스러운 꽃은 감사의 꽃이다. 마음의 동산에 감사가 사라질 때 그 사람은 죽은 사람과 다름없다. (밥 존스)",
      author: " ",
    },
    {
      quote: "감사를 표현하는 가장 좋은 방법은 모든 것을 기쁨으로 받아들이는 것이다. (마더 테레사)",
      author: " ",
    },
    {
      quote: "행복은 바로 감사하는 마음이다. (조셉 우드 크루치)",
      author: " ",
    },
    {
      quote: "모든 미국인이 과자를 먹으러 고향으로 돌아가 예전보다 현관 가까이에 있는 낡은 펌프를 보고 놀라워하는 날, 추수감사절은 순수한 미국인으로 돌아가는 날이다. (O. 헨리)",
      author: " ",
    },
    {
      quote: "감사하는 마음이란 마음에 새겨둔 기억을 말한다. (마슈)",
      author: " ",
    },
    {
      quote: "사람들이 안심하고 소중하며 감사하다고 느끼게 되면 더 커 보일 목적으로 남들의 콧대를 꺾을 필요는 더 이상 없을 것이다. (버지니아 어캐슬)",
      author: " ",
    },
    {
      quote: "감사하는 마음은 가장 훌륭한 미덕이며 다른 모든 덕의 어버이다. (키케로)",
      author: " ",
    },
    {
      quote: "감사하는 마음에는 사탄이 슬픔의 씨앗을 뿌릴 수 없다. (노르웨이 속담)",
      author: " ",
    },
    {
      quote: "비위에 맞을 때 하는 수천 번의 감사보다 이와 어긋날 때 드리는 한 번의 감사가 더 값지다. (아빌라)",
      author: " ",
    },
    {
      quote: "아침에 일어날 때마다 그날 해야 할 일이 있음을 감사하라. (킹슬리)",
      author: " ",
    },
    {
      quote: "가장 축복받는 사람이 되려면 가장 감사하는 사람이 되어라. (C. 쿨리지)",
      author: " ",
    },
    {
      quote: "오늘 하루를 알차게 보내면 편히 잘 수 있고, 주어진 삶을 알차게 보내면 행복한 죽음을 맞이할 수 있다. (레오나르도 다 빈치)",
      author: " ",
    },
    {
      quote: "특별한 아픔이 특별한 감사를 부른다. (벤 존슨)",
      author: " ",
    },
    {
      quote: "불행할 때 감사하면 불행이 끝이 나고 형통할 때 감사하면 형통이 연장된다. (찰스 스펄전) 감사의 마음은 창조적인 반응과 삶의 힘을 증진시켜준다. (스트라잇)",
      author: " ",
    },
    {
      quote: "어려운 일을 만났을 때는 우선 감사할 만한 것을 구해, 그것에 대해 정직하게 감사하라. (칼 힐티)",
      author: " ",
    },
    {
      quote: "감사하는 마음은 타인을 향하는 감정이 아니라 자신을 향하는 감정이다. (이어령)",
      author: " ",
    },
    {
      quote: "행복은 종종 열어둔 줄 몰랐던 문으로 살며시 들어온다. (존 배리모어)",
      author: " ",
    },
    {
      quote: "누군가는 먹을 것이 있어도 먹을 수 없고, 누군가는 먹고 싶어도 먹을 것이 없다. 그러나 우리는 먹을 것도 있고, 먹을 수도 있다. 그러니 신께 감사하라. (로버트 번스)",
      author: " ",
    },
    {
      quote: "감사는 최고의 항암제요, 해독제요, 방부제다. (존 헨리)",
      author: " ",
    },
    {
      quote: "의식 있는 사람은 자신이 갖지 못한 것에 대해 슬퍼하지 않고, 자신이 갖고 있는 것에 대해 기뻐한다. (에픽테토스)",
      author: " ",
    },
    {
      quote: "행복과 풍요로운 인생은 [감사합니다.]라고 하는 간단한 말로 시작하며, 그때부터 인생은 가볼 만한 여행이 된다. (린다 캐플런 탤러)",
      author: " ",
    },
    {
      quote: "감사의 마음은 창조적인 반응과 삶의 힘을 증진시켜준다. (스트라잇)",
      author: " ",
    },
    {
      quote: "감사하는 마음은 거만해지지 않도록 하며 조용하고 겸손한 인간을 만든다. (보도 새퍼)",
      author: " ",
    },
    {
      quote: "한 사람이 해변의 예쁜 조개껍질을 모두 주울 수는 없다. (앤 모로 린드버그)",
      author: " ",
    },
    {
      quote: "남은 것에 감사하라. 장애는 오히려 나에게 축복이 되었다. (헤럴드 러셀) ",
      author: " ",
    },
    {
      quote: "배은망덕은 자연스러운 들풀 같아서 가꾸지 않아도 무성하지만, 감사는 장미와 같아서 물을 주어 곱게 기르고 사랑해야만 자란다. (카네기)",
      author: " ",
    },
    {
      quote: "사랑으로 감사함을 전할 수 있는 선물이 가장 훌륭한 선물이다. (오비디우스)",
      author: " ",
    },
    {
      quote: "사람들이 감사하지 않을 때 인간성을 상실하게 된다. 사람의 됨됨이는 그 사람의 감사 태도로 알 수 있다. (엘리 바젤)",
      author: " ",
    },
    {
      quote: "우리는 너무 쉽게 얻는 것을 너무 가볍게 취급한다. (토머스 페인)",
      author: " ",
    },
    {
      quote: "마귀에게는 감사가 없다. 감사는 하나님께 속한 것이고, 불평은 마귀에게 속한 것이다. (마틴 루터 킹)",
      author: " ",
    },
    {
      quote: "사소한 것에 기뻐하도록 우리를 가르치소서. (러디어드 키플링)",
      author: " ",
    },
    {
      quote: "감사와 배은망덕 사이의 중립적 입장은 없다. 감사하지 않은 이들은 곧 모든 것을 불평하기 시작한다. 사랑하지 않은 이들은 미워한다. (토마스 머턴)",
      author: " ",
    },
    {
      quote: "없어진 것을 한탄할 것이 아니라 남아 있는 것을 헤아려 감사하라. (헤럴드 러셀)",
      author: " ",
    },
    {
      quote: "무력으로 얻은 재산은 지속되지 않지만, 은혜에 대한 감사는 영원하다. (Q.C.루프스)",
      author: " ",
    },
    {
      quote: "우리는 자신의 허물을 지적해주는 사람에게 감사할 줄 알아야 한다. 물론 허물이 없어지는 것은 아니지만 지적을 받음으로써 허물을 볼 수 있게 되기 때문이다. (블레즈 파스칼)",
      author: " ",
    },
    {
      quote: "앞날에 있는, 알지 못할 그 축복들에 감사하라. (아메리카 원주민 속담)",
      author: " ",
    },
    {
      quote: "원하는 것을 손에 넣을 수 없다면, 손 닿는 곳에 있는 것을 사랑하라. (프랑스 속담)",
      author: " ",
    },
    {
      quote: "조금도 감사하지 않다면 충분히 감사한 것이다. 의무를 다했기에 더 이상 할 것이 없는 것이다. (헨리 필딩)",
      author: " ",
    },
    {
      quote: "인간은 천성적으로 필요한 것보다 더 많은 것을 바란다. (마크 트웨인)",
      author: " ",
    },
    {
      quote: "모든 것을 순수하고 평화롭게 마음에 간직하는 것이 중요하다. 그러니 모든 맥박에 감사의 기도를 담고, 모든 숨에 감사의 노래를 담아라. (코나드 본 게스너)",
      author: " ",
    },
    {
      quote: "행복해지려고 애쓰는 걸 멈출 수 있다면 우리는 행복해진다. (에디스 와튼)",
      author: " ",
    },
    {
      quote: "심호흡을 한 뒤 신발을 벗어던져버린 채 춤을 출 수 있는 기회는 날마다 온다. (오프라 윈프리)",
      author: " ",
    },
    {
      quote: "감사는 미래의 혜택에 대한 깊은 마음이다. (프랑스 속담)",
      author: " ",
    },
    {
      quote: "모든 상황에 내재한 선을 찾는 데 관심을 기울인다면 어느 순간 당신의 삶은 영혼을 살찌우는 감사로 충만할 것이다. (헤럴드 쿠시너)",
      author: " ",
    },
    {
      quote: "가난한 사람은 가진 게 적은 사람이 아니라 더 많은 것을 탐내는 사람이다. (세네카)",
      author: " ",
    },
    // {
    //   quote: "Life is either a daring adventure or nothing at all.",
    //   author: "Helen Keller",
    // },
    // {
    //   quote: "To Travel is to Live",
    //   author: "Hans Christian Andersen",
    // },
    // {
    //   quote: "Only a life lived for others is a life worthwhile.",
    //   author: "Albert Einstein",
    // },
    // {
    //   quote: "You only live once, but if you do it right, once is enough.",
    //   author: "Mae West",
    // },
    // {
    //   quote: "Never go on trips with anyone you do not love.",
    //   author: "Hemmingway",
    // },
    // {
    //   quote: "We wander for distraction, but we travel for fulfilment.",
    //   author: "Hilaire Belloc",
    // },
    // {
    //   quote: "Travel expands the mind and fills the gap.",
    //   author: "Sheda Savage",
    // },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  //const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  // author.innerText = todaysQuote.author;
  quote.style.color ="black";
  