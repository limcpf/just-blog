import Link from "next/link";
import type { PageInfo, PostListItem } from "@sssh-fresh-code/types-sssh";
import Pagination from "~/components/Paging/Pagination";

interface PostsProps {
  posts: PostListItem[];
  info: PageInfo;
  links?: { key: string, value: string }[]
}
export function Posts({ posts, info, links }: PostsProps) {
  return (
    <>
      {posts.map(p => (
        <section key={p.id} style={{ display: "flex", margin: "1rem 0" }}>
          <small style={{ paddingTop: "0.5rem" }}>{p.id}</small>&nbsp;&nbsp;&nbsp;
          <div style={{ color: "darkgray" }}>
            <Link href={`/p/${encodeURIComponent(p.title)}`}>
              <h2 style={{ margin: "0" }}>
                {p.title.replaceAll("_", " ")}
              </h2>
              <p>
                <small style={{ textDecoration: "none" }}>{p.description}</small>
              </p>
            </Link>
            <span>
              <small>날짜 : {new Date(p.createdAt).toLocaleDateString()}&nbsp;&nbsp;&nbsp;</small>
              <small>주제 : <Link href={`/t/${p.topic.name}`}>{p.topic.name}</Link>&nbsp;&nbsp;&nbsp;</small>
              {p.series && (<small>시리즈 : <Link href={`/s/${p.series.id}`}>{p.series.name}</Link></small>)}

            </span>
          </div>
        </section>

      ))}
      <Pagination info={info} links={links} />
    </>);
}
