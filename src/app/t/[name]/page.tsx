import type { TopicItem } from "@sssh-fresh-code/types-sssh";
import { ErrorPage } from "../../../components/Common/ErrorPage";
import Link from "next/link";
import { api } from "~/util/api";

export let metadata: any = {};

async function getTopics(name: string) {
  const req = await api(`/topics/${name}`, "GET");

  if (!req.ok) throw new Error("서버에서 에러가 발생했습니다.");

  return await req.json() as TopicItem;
}

export default async function Page({
  params,
}: {
  params: {
    [key: string]: string | string[] | undefined
  },
}) {
  const name = params["name"];

  if (!name || typeof name !== "string") return <ErrorPage />;

  let data: TopicItem;

  try {
    data = await getTopics(name);
  } catch (e) {
    return <ErrorPage />
  }

  const vName = data.name.replaceAll("_", " ");

  metadata = {
    title: `${vName} - 주제 상세 페이지`,
    description: `${vName} - 해당 주제 상세 페이지입니다.`,
    opengraph: {
      title: `${vName} - 주제 상세 페이지`,
      description: `${vName} - 해당 주제 상세 페이지입니다.`,
    }
  }

  return (
    <main>
      <h1>{data.name.replaceAll("_", " ")}</h1>
      <ul>
        <li><Link href={`/s?topic=${name}`} title="클릭하면 해당 주제로 쓰여진 시리즈 목록으로 이동합니다." >해당 주제로 쓰여진 <b>시리즈</b> 개수 : <b>{data.seriesCnt}</b> 개</Link></li>
        <br />
        <li><Link href={`/p?topic=${name}`} title="클릭하면 해당 주제로 쓰여진 게시글 목록으로 이동합니다." >해당 주제로 쓰여진 <b>게시글</b> 개수 : <b>{data.postsCnt}</b> 개</Link></li>
      </ul>
    </main>
  )
}