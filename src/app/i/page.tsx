export const metadata = {
  title: "블로그 소개 페이지",
  description: "남자는 백엔드제 ㅋㅋ",
  metadata: {
    title: "블로그 소개 페이지",
    description: "남자는 백엔드제 ㅋㅋ",
  }
};

export default function Page() {
  return (
    <main>
      <h1>뺄꺼 빼고 의미전달만 하고 싶은 블로그입니다.</h1>
      <del>절대로 귀찮아서 CSS를 안하는건 아닙니다. 이거 관리하는 사이트가 여기보다 이쁨</del>
      <br />
      <hr />
      <small>
        혹시라도 아래 내용에 대해 문의하고 싶다면 언제든 아래 이메일로 문의주세요.
        <ul>
          <li>블로그 내용에 대한 오류 정정 요구</li>
          <li>각종 개발 관련 질문(블로그 글 내용에 관한 것이 아니어도 좋습니다.)</li>
          <li><del>개발 후배에게 따끔하게 혼을 내고싶으신 선배님들(참고로 저는 4년차 백엔드 개발자입니다.)</del></li>
        </ul>
        문의 이메일 : limcdevblog@gmail.com
      </small>
      <hr />
      <p>
        개발에 관련해서 궁금한게 생기면 검색을 합니다.
        <br />
        <br />
        요즘 들어 대부분의 블로그를 들어가면 아래와 같은 광고들이 자주 뜹니다.
        <br />
      </p>
      <center>
        <img src="https://imgs.limc.dev/info/ad1.avif" alt="보기 싫은 광고들1" title="보기 싫은 광고들1" width={500} height={300} />
        <br />
        <small>이제 제목 하나 봤는데...</small>
        <br />
        <br />
        <img src="https://imgs.limc.dev/info/ad2.avif" alt="보기 싫은 광고들2" title="보기 싫은 광고들2" width={500} height={300} />
        <br />
        <small>팝업 대신 화면 전체를 덮는 모달을 띄우거나...</small>
        <br />
        <br />
      </center>
      <p>
        예전엔 저도 블로그에 광고를 달고 부수입을 노리고 싶었지만, <del>게을러서 실패했습니다.</del>
        <br />
        <br />
        그냥 정보 전달만 할 수 있는 블로그를 만드려고 합니다.
        <br />
        <br />
        정보 전달이라 거창하게 들리지만, 제 개인적 의견이나 생각을 적는 글이 더 많을 것 같습니다.
        <br />
        <small>
          <del>그리고 유지하기 부담스러우면 저도 광고달거에요.</del>
          <br />
          <del>물론 글 읽는데 방해는 최대한 없게...</del>
        </small>
      </p>
      <p>
        그래서 css도 간소하게 사용하고, 글 내용도 단순한 markdown 형식으로 작성하려고 합니다.
        <br />
        <br />
        물론 다양한 기능들을 추가하면서 블로그가 복잡해질 수 있지만...
        <br />
        <br />
        최대한 단순하게 유지하려고 노력하겠습니다.
        <br />
        <br />
        별거 아닌 내용 읽어주셔서 감사합니다.
        <br />
        <br />
      </p>
    </main>
  );
}