import Link from "next/link";
import type { PostItem } from "@sssh-fresh-code/types-sssh";
import { marked } from "marked";
import { api } from "~/util/api";
import { ErrorPage } from "~/components/Common/ErrorPage";

export let metadata: any = {};

async function getPost(title: string) {
  const req = await api(`/posts/${title}`, "GET");

  if (!req.ok) throw new Error("서버에서 에러가 발생했습니다.");

  return await req.json() as PostItem;
}

type Parmas = {
  params: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params }: Parmas) {

  const title = params["title"];


  if (!title || typeof title !== "string") return <ErrorPage />;

  let data: PostItem

  try {
    data = await getPost(title);
  } catch (e) {
    return <ErrorPage />
  }

  metadata = {
    title: data.title.replaceAll("_", " "),
    description: data.description,
    opengraph: {
      title: data.title.replaceAll("_", " "),
      description: data.description,
    }
  }

  const contents = await marked.parse(data.contents);

  const { topic, series, author } = data;

  return (
    <main style={{ padding: "2em" }}>
      <h1>{data.title.replaceAll("_", " ")}</h1>
      <div>
        <small>주제 :</small> <Link href={`/t/${topic.name}`}>{topic.name}</Link>
        {series && <> | <small>시리즈 :</small> <Link href={`/s/${series.id}`}>{series.name}</Link></>}
        &nbsp;| {new Date().toLocaleDateString()}
        &nbsp;| {author.userName}
      </div>
      <hr />
      <article dangerouslySetInnerHTML={{ __html: contents }} />
    </main>
  )
}

