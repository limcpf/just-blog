import { PageMoveBtn } from "./PageMoveBtn";
import type { PageInfo } from "@sssh-fresh-code/types-sssh";

export interface PageInfoProps {
  info: PageInfo;
  links?: { key: string, value: string }[]
}

export default function Pagination({ info, links = [] }: PageInfoProps) {
  return (
    <div className="flex flex-col gap-3">
      <PageMoveBtn info={info} links={links} />
    </div>
  )
}

