import {slugify} from "../../utils/strings";
import {useLocalize} from "../Locale/Locale";

const TOC_LEVELS = 2;

const localizations = {
  toc: {
    en: "Page contents",
    es: "En esta página"
  },
};

export type NavHeading = {level: number, title: string, id?: string, sub: NavHeading[]};
export type TableOfContentsProps = {
  headings: NavHeading[];
  onHeadingClicked: () => void;
};

const renderSub = (level: number, sub: NavHeading[], onClickHandler: () => void) => {
  return sub.length == 0 || level > TOC_LEVELS ? null : (
    <ol>
      {sub.map((hdg, i) =>
        <li key={i}>
          <a href={`#${hdg.id ?? slugify(hdg.title)}`} onClick={onClickHandler}>{hdg.title}</a>
          {renderSub(level + 1, hdg.sub, onClickHandler)}
        </li>
      )}
    </ol>
  );
};

export default function TableOfContents(props: TableOfContentsProps) {
  const {localize} = useLocalize(localizations);
  return (
    <nav class="toc">
      <h2>{localize("toc")}</h2>
      {renderSub(1, props.headings, props.onHeadingClicked)}
    </nav>
  );
};
