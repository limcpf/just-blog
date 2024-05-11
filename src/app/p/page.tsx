import type { Page, PostListItem } from "@sssh-fresh-code/types-sssh";
import { Posts } from "../../components/Posts/Posts";
import Head from "next/head";
import { ErrorPage } from "~/components/Common/ErrorPage";
import { api } from "~/util/api";

export const metadata = {
  title: "게시글 목록 - 백엔드 개발자가 만든 개발 블로그",
  description: "백엔드 개발자가 만든 개발 블로그의 게시글 목록입니다.",
  metadata: {
    title: "게시글 목록 - 백엔드 개발자가 만든 개발 블로그",
    description: "백엔드 개발자가 만든 개발 블로그의 게시글 목록입니다.",
  }
};

async function getPosts(params: { [key: string]: string | string[] | undefined }) {
  const page = params["page"] ? `page=${params["page"]}` : 'page=1';
  const topic = params["topic"] ? `where__topicName=${params["topic"]}` : '';
  const series = params["series"] ? `where__seriesId=${params["series"]}` : '';

  const querys = [page, topic, series].filter(q => q !== '');

  const req = await api(`/posts?${querys.join('&')}`, "GET");

  if (!req.ok) throw new Error("서버에서 에러가 발생했습니다.");

  return await req.json() as Page<PostListItem>;
}

interface PostPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function PostPage({ searchParams }: PostPageProps) {
  let posts: Page<PostListItem>;

  try {
    posts = await getPosts(searchParams);
  } catch (e) {
    return <ErrorPage />
  }

  const { data, info } = posts;

  const links = [];
  let title = "▶ 글 목록"

  if (searchParams["series"] && typeof searchParams["series"] === "string") {
    links.push({ key: "series", value: searchParams["series"] })
    title = `▶ 해당 시리즈의 글 목록`
  } else if (searchParams["topic"] && typeof searchParams["topic"] === "string") {
    links.push({ key: "topic", value: searchParams["topic"] })
    title = `▶ ${searchParams["topic"]} 주제의 글 목록`
  };

  return (
    <main>
      <h3>{title}</h3>
      <Posts posts={data} info={info} links={links} />
    </main>
  );
}

