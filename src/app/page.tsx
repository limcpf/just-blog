import PostPage from "./p/page";

export const metadata = {
  title: "백엔드 개발자가 만든 개발 블로그",
  description: "남자는 백엔드제 ㅋㅋ",
  opengraph: {
    title: "백엔드 개발자가 만든 개발 블로그",
    description: "남자는 백엔드제 ㅋㅋ",
  }
}
export default function HomePage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <main>
      <PostPage searchParams={searchParams} />
    </main>
  );
}
