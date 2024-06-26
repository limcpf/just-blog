import Link from "next/link";
import { Page, TopicListItem } from "@sssh-fresh-code/types-sssh";
import Pagination from "~/components/Paging/Pagination";
import { api } from "~/util/api";
import { ErrorPage } from "~/components/Common/ErrorPage";

export const metadata = {
  title: "주제 목록 - 백엔드 개발자가 만든 개발 블로그",
  description: "백엔드 개발자가 만든 개발 블로그의 주제 목록입니다.",
  metadata: {
    title: "주제 목록 - 백엔드 개발자가 만든 개발 블로그",
    description: "백엔드 개발자가 만든 개발 블로그의 주제 목록입니다.",
  }
};

async function getTopics(params: { [key: string]: string | string[] | undefined }) {
  const page = params["page"] ?? "1";

  const req = await api(`/topics?page=${page}`, "GET", {
    next: {
      revalidate: 300
    }
  });

  if (!req.ok) throw new Error("서버에서 에러가 발생했습니다.");

  return await req.json() as Page<TopicListItem>;
}

export default async function TopicsPage({
  searchParams
}: {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}) {
  let topics: Page<TopicListItem>;

  try {
    topics = await getTopics(searchParams);
  } catch (e) {
    return <ErrorPage />
  }

  const { data, info } = topics;

  return (
    <main>
      <h3>▶ 주제 목록</h3>
      {
        data.map(t => (
          <section key={t.id} style={{ display: "flex", margin: "1rem 0" }} >
            <small style={{ paddingTop: "0.5rem" }}>{t.id}</small>&nbsp;&nbsp;&nbsp;
            <div style={{ color: "darkgray" }}>
              <Link href={`/t/${encodeURIComponent(t.name)}`}>
                <h2 style={{ margin: "0" }}>
                  {t.name.replaceAll("_", " ")}
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
