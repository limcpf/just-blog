import Link from "next/link";
import type { Page, SeriseListItem } from "@sssh-fresh-code/types-sssh";
import Pagination from "~/components/Paging/Pagination";

export const metadata = {
  title: "시리즈 목록 - 백엔드 개발자가 만든 개발 블로그",
  description: "백엔드 개발자가 만든 개발 블로그의 시리즈 목록입니다.",
  metadata: {
    title: "시리즈 목록 - 백엔드 개발자가 만든 개발 블로그",
    description: "백엔드 개발자가 만든 개발 블로그의 시리즈 목록입니다.",
  }
};

async function getSeriesList(params: { [key: string]: string | string[] | undefined }) {
  const page = params["page"] ? `page=${params["page"]}` : 'page=1';
  const topic = params["topic"] ? `where__topicName=${params["topic"]}` : '';

  const querys = [page, topic].filter(q => q !== '');

  const req = await fetch(`${process.env.API_URL}/series?${querys.join('&')}`, {
    method: "GET",
  });

  if (!req.ok) throw new Error("서버에서 에러가 발생했습니다.");

  return await req.json() as Page<SeriseListItem>;
}

export default async function TopicsPage({
  searchParams
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) {
  const { data, info } = await getSeriesList(searchParams);

  let title = "▶ 시리즈 목록";
  const links = [];

  if (searchParams["topic"] && typeof searchParams["topic"] === "string") {
    links.push({ key: "topic", value: searchParams["topic"] })
    title = `▶ ${searchParams["topic"]} 주제의 시리즈 목록`
  };

  return (
    <main>
      <h3>{title}</h3>
      {
        data.map(s => (
          <section key={s.id} style={{ display: "flex", margin: "1rem 0" }} >
            <small style={{ paddingTop: "0.5rem" }}>{s.id}</small>&nbsp;&nbsp;&nbsp;
            <div style={{ color: "grey" }}>
              <small>{s.topic.name}</small>
              <Link href={`/s/${s.id}`}>
                <h2 style={{ margin: "0" }}>
                  {s.name.replaceAll("_", " ")}
                </h2>
              </Link>
            </div>
          </section>
        ))
      }
      <Pagination info={info} />
    </main>
  );
}
