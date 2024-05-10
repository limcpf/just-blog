import Link from "next/link";
import { PageInfoProps } from "./Pagination";

export function PageMoveBtn({ info, links }: PageInfoProps) {
  const { current, last } = info;

  let link = "";

  if (links) {
    link = links.map(({ key, value }) => `${key}=${value}`).join("&");
  }

  const getLinks = (page: number) => `?page=${page}${link ? `&${link}` : ""}`;

  return (
    <center>
      <div>
        {current !== 1 && <Link href={getLinks(current - 1)} >◀ </Link>}
        <span>
          {current} / {last}
        </span>
        {current !== last && <Link href={getLinks(current + 1)} > ▶</Link>}
      </div>
      <form>
        {
          links?.map(({ key, value }) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))
        }
        <input
          name="page"
          min={1}
          max={last}
          placeholder={`${current}`}
          type="number" />
        <button type="submit">
          이동
        </button>
      </form>
    </center >
  );
}
