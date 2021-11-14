import axios from "axios";
import { FC, memo, useEffect, useState } from "react";

interface Props {
  title: string;
  link: string;
  time: string;
  description: string;
  image: string;
}

const NewsTile: FC<Props> = (props) => {
  const [showContent, setShowContent] = useState(false);
  const visiblity = showContent ? "" : " hidden";

  return (
    <div className="flex flex-col p-4 border-2 rounded-xl">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col justify-between text-justify ">
          <div>
            <h3
              onClick={() => {
                setShowContent(!showContent);
              }}
              className="text-xl font-bold inline mr-4 hover:text-gray-500 cursor-pointer"
            >
              Chorus To Take Back Kangana Ranaut's Padma Award, Congress Seeks
              Legal Action Against Actress
            </h3>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://news.google.com/__i/rss/rd/articles/CBMiW2h0dHBzOi8vaW5kaWFuZXhwcmVzcy5jb20vYXJ0aWNsZS9pbmRpYS9jb3JvbmF2aXJ1cy1pbmRpYS1saXZlLXVwZGF0ZXMtc2Vjb25kLXdhdmUtNzI4ODAxNy_SAWBodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvaW5kaWEvY29yb25hdmlydXMtaW5kaWEtbGl2ZS11cGRhdGVzLXNlY29uZC13YXZlLTcyODgwMTcvbGl0ZS8?oc=5"
            >
              Link
            </a>
          </div>
          <h2>Time: 2021-04-25 05:12:50</h2>
        </div>
        <img
          className="w-48 h-36 bg-yellow-600 rounded-md"
          src="https://www.telegraph.co.uk/content/dam/global-health/2021/04/25/TELEMMGLPICT000256827032_trans_NvBQzQNjv4BqM37qcIWR9CtrqmiMdQVx7Lz15pYf9gWQ0mJPVyrrflw.jpeg"
          alt="Photo not available"
        />
      </div>

      <h3 className={"mt-4" + visiblity}>
        Description: Coronavirus India Live Updates: India records 3.49 lakh new
        Covid cases, 2,767 deaths The Indian ExpressIndia's COVID woes worsen
        amid continued oxygen shortage Al Jazeera EnglishCovid-19: Daily cases
        touch 3.5 lakh; 2,760 die in 24 hours Times of IndiaBreathless in India:
        The price of inaction The New Indian ExpressCovid-19: Is this a
        political turning point? Hindustan TimesView Full coverage on Google
        News
      </h3>
    </div>
  );
};

NewsTile.defaultProps = {};

export default memo(NewsTile);
