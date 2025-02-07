import { Inter } from "next/font/google";
import { useLocale } from "@/locales/local";
import { DefaultHead } from "@/components/myhead";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useLocale();
  return (
    <>
      <DefaultHead />
      <main>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <Image
              className="rounded-full w-40 h-40 mt-24"
              width={200}
              height={200}
              src="/my_face.jpeg"
              alt="face_img"
            ></Image>
            <p className="text-4xl pt-4">{t.MY_NAME}</p>
            <p className="text-xl text-gray-400 pt-1 pb-4">ML Engineer</p>

            <div className="flex flex-row justify-center pb-4">
              <a
                href="https://www.linkedin.com/in/umeco/"
                target="_blank"
                className="p-1"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="transform w-8 h-8 hover:fill-blue-500 hover:scale-125"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/umepy"
                target="_blank"
                className="p-1"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="transform w-8 h-8 hover:fill-blue-500 hover:scale-125"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://booklog.jp/users/umecoco"
                target="_blank"
                className="p-1"
                rel="noopener noreferrer"
                title="Booklog"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 24 24"
                  className="transform w-8 h-8 hover:fill-blue-500 hover:scale-125"
                >
                  <path d="M22 24h-17c-1.657 0-3-1.343-3-3v-18c0-1.657 1.343-3 3-3h17v24zm-2-4h-14.505c-1.375 0-1.375 2 0 2h14.505v-2zm0-18h-3v9l-2-1.547-2 1.547v-9h-8v16h15v-16z" />
                </svg>
              </a>
              <a
                href="https://speakerdeck.com/umeco"
                target="_blank"
                className="p-1"
                rel="noopener noreferrer"
                title="Speaker Deck"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="transform w-8 h-8 hover:fill-blue-500 hover:scale-125"
                >
                  <path d="M16.488 20l3.414 4h-2.627l-3.42-4h2.633zm1.512-14h-4v1h4v-1zm-7 18h2v-4h-2v4zm-6.918 0h2.628l3.42-4h-2.633l-3.415 4zm13.918-16h-4v1h4v-1zm0 2h-4v1h4v-1zm-8.5 3c1.762 0 3.205-1.306 3.45-3h-3.95v-3.95c-1.694.245-3 1.688-3 3.45 0 1.933 1.567 3.5 3.5 3.5zm.5-6.95v2.95h2.95c-.221-1.529-1.421-2.729-2.95-2.95zm8 5.95h-4v1h4v-1zm5-9h-1v15h-20v-15h-1v-3h22v3zm-3 0h-16v13h16v-13z" />
                </svg>
              </a>
            </div>

            <div>
              <p className="text-3xl text-text_gray font-bold p-2">Biography</p>
              <p className="text-xl text-text_gray p-2 pb-10">{t.BIOGRAPHY}</p>
              <p className="text-3xl text-text_gray font-bold p-2">NEWS</p>
              <p className="text-xl text-text_gray p-2 pb-10">{t.CONTACT}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-centerp-2">
          <div className="flex flex-col justify-center md:w-1/2">
            <div>
              <p className="text-3xl font-bold text-text_gray pt-4 pb-2">
                Skills
              </p>
            </div>
            <div className="flex flex-col items-cente">
              <p className="text-xl text-text_gray p-2">
                {t.PROGRAMMING_LANGUAGE}
              </p>
              <p className="text-xl text-text_gray p-2">{t.CLOUD}</p>
              <p className="text-xl text-text_gray p-2">{t.FRAMEWORK}</p>
              <p className="text-xl text-text_gray p-2 pb-10">{t.RESEARCH}</p>
            </div>
            <p className="text-3xl font-bold text-text_gray pt-4 pb-2">
              Prizes/Certifications
            </p>
            <p className="text-xl text-text_gray p-2 pb-10 whitespace-pre-line">
              {t.PRIZES}
            </p>
            <p className="text-3xl font-bold text-text_gray pt-4 pb-2">
              Career
            </p>
            <p className="text-xl text-text_gray p-2 pb-10 whitespace-pre-line">
              {t.CAREER}
            </p>
            <div>
              <p className="text-3xl font-bold text-text_gray pt-4 pb-2">
                Pubilications
              </p>
              <div className="flex flex-wrap">
                <div className="sm:basis-full md:basis-1/3">
                  <div className="p-4 m-1">
                    <p className="text-xl pb-2">
                      学習の安定化のために方策の埋め込みを利用する強化学習手法の検討
                    </p>
                    <p className="text-sm text-gray-500">
                      梅本晴弥，豊田哲也，大原剛三：学習の安定化のために方策の埋め込みを利用する強化学習手法の検討，知識ベースシステム研究会(SIG-KBS)
                      (2019).
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="https://www.jstage.jst.go.jp/article/jsaikbs/118/0/118_03/_article/-char/ja/"
                        target="_blank"
                        className="pt-4"
                        rel="noopener noreferrer"
                      >
                        <button className="border-2 hover:border-blue-400 hover:text-blue-400 px-4 py-2 rounded">
                          READ MORE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:basis-full md:basis-1/3">
                  <div className="p-4 m-1">
                    <p className="text-xl pb-2">
                      食材名の分散表現学習を用いた料理レシピの栄養推定手法
                    </p>
                    <p className="text-sm text-gray-500">
                      梅本晴弥，豊田哲也，大原剛三：食材名の分散表現学習を用いた料理レシピの栄養推定手法，行動変容と社会システム
                      vol.05 (2019).
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=194770&item_no=1&page_id=13&block_id=8"
                        target="_blank"
                        className="pt-4"
                        rel="noopener noreferrer"
                      >
                        <button className="border-2 hover:border-blue-400 hover:text-blue-400 px-4 py-2 rounded">
                          READ MORE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:basis-full md:basis-1/3">
                  <div className="p-4 m-1">
                    <p className="text-xl pb-2">
                      k-NN Based Forecast of Short-Term Foreign Exchange Rates
                    </p>
                    <p className="text-sm text-gray-500">
                      Umemoto, Haruya, Tetsuya Toyota, and Kouzou Ohara.
                      &ldquo;k-NN Based Forecast of Short-Term Foreign Exchange
                      Rates.&ldquo; Pacific Rim Knowledge Acquisition Workshop.
                      Springer, Cham, 2018.
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="https://link.springer.com/chapter/10.1007/978-3-319-97289-3_11"
                        target="_blank"
                        className="pt-4"
                        rel="noopener noreferrer"
                      >
                        <button className="border-2 hover:border-blue-400 hover:text-blue-400 px-4 py-2 rounded">
                          READ MORE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:basis-full md:basis-1/3">
                  <div className="p-4 m-1">
                    <p className="text-xl pb-2">
                      料理レシピの分散表現を用いた代替食材の発見手法
                    </p>
                    <p className="text-sm text-gray-500">
                      梅本晴弥，豊田哲也，大原剛三：料理レシピの分散表現を用いた代替食材の発見手法，行動変容と社会システム
                      vol.03 (2018).
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=185896&item_no=1&page_id=13&block_id=8"
                        target="_blank"
                        className="pt-4"
                        rel="noopener noreferrer"
                      >
                        <button className="border-2 hover:border-blue-400 hover:text-blue-400 px-4 py-2 rounded">
                          READ MORE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:basis-full md:basis-1/3">
                  <div className="p-4 m-1">
                    <p className="text-xl pb-2">
                      過去の変動に対する類似検索を用いた短時間USD/JPY為替レート予測
                    </p>
                    <p className="text-sm text-gray-500">
                      梅本晴弥，豊田哲也，大原剛三：過去の変動に対する類似検索を用いた短時間USD/JPY為替レート予測，研究報告知能システム（ICS），2017-ICS-186，pp.
                      1-7 (2017).
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=177687&item_no=1&page_id=13&block_id=8"
                        target="_blank"
                        className="pt-4"
                        rel="noopener noreferrer"
                      >
                        <button className="border-2 hover:border-blue-400 hover:text-blue-400 px-4 py-2 rounded">
                          READ MORE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold text-text_gray pt-4 pb-2">
                Slides
              </p>
              <ul className="list-disc px-10 pb-20">
                <li>
                  <a
                    href="https://www.slideshare.net/ArithmerInc/transformer-248613529"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【勉強会資料】全力解説！Transformer
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakerdeck.com/umeco/cookpad-r-and-d-internship-2018-byumeco"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【Cookpad Intern】レシピの分散表現を用いたアレンジ度の算出
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakerdeck.com/umeco/wssit2019-shi-cai-ming-falsefen-san-biao-xian-xue-xi-woyong-italiao-li-resipifalserong-yang-tui-ding-shou-fa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【WSSIT2019】食材名の分散表現学習を用いた料理レシピの栄養推定手法
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakerdeck.com/umeco/wssit2018-liao-li-resipifalsefen-san-biao-xian-woyong-itadai-ti-shi-cai-falsefa-jian-shou-fa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【WSSIT2018】料理レシピの分散表現を用いた代替食材の発見手法
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakerdeck.com/umeco/jpywei-ti-retoyu-ce"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【WSSIT2017】過去の変動に対する類似検索を用いた短時間USD/JPY為替レート予測
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakerdeck.com/umeco/distributed-prioritized-experience-replay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【研究室論文紹介】Distributed prioritized experience
                      replay
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://speakerdeck.com/umeco/using-an-artificial-financial-market-for-studying-a-cryptocurrency-market"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【研究室論文紹介】Using an Artificial Financial Market for
                      studying a Cryptocurrency Market
                    </span>
                  </a>
                </li>
              </ul>

              <p className="text-3xl font-bold text-text_gray pt-4 pb-2">
                執筆した記事
              </p>
              <ul className="list-disc px-10 pb-20">
                <li>
                  <a
                    href="https://qiita.com/Umeco_co/items/8a434b0e72202d4532ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【16万View✨】生成AIで会社の要件定義プロセスを100倍高速化した話
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/how-to-ai-project-guide/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      AIプロジェクトは事前計画が大事！失敗しない進め方を解説
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/gigcomet-prodcutdev-background-interview/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【インタビュー】AI開発プロジェクトを支援するサービスGigCometの開発背景に迫る！
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/make_ai_chat_app_from_scratch_deploy_cloud/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【初心者向け】１時間で自分だけのAIチャットアプリを作ろう！〜クラウドデプロイ編〜
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/make_ai_chat_app_from_scratch_with_localllm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【初心者向け】１時間で自分だけのAIチャットアプリを作ろう！〜ローカルLLM編〜
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/make_ai_chat_app_from_scratch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【初心者向け】１時間で自分だけのAIチャットアプリを作ろう！〜基礎編〜
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/paper-introduction-musiq/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      任意の解像度/アスペクト比の画像をそのまま入力できるTransformer「MUSIQ」解説！
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tc3.co.jp/how-to-build-ai-environment-on-gcp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hover:text-blue-400 py-1">
                      【2023】爆速でGCPにリモートAI開発環境を構築する方法🔥
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
