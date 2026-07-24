import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隱私權政策｜台灣期貨當沖損益計算機",
  description:
    "台灣期貨當沖損益計算機的隱私權政策，說明本站使用 Google Analytics、Google AdSense、Cookie 與相關資料的方式。",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GOOGLE_PRIVACY_URL = "https://policies.google.com/privacy?hl=zh-TW";
const GOOGLE_PARTNER_URL =
  "https://policies.google.com/technologies/partner-sites?hl=zh-TW";
const GOOGLE_AD_SETTINGS_URL = "https://adssettings.google.com/";
const GOOGLE_ANALYTICS_OPTOUT_URL =
  "https://tools.google.com/dlpage/gaoptout";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          ← 返回首頁
        </Link>

        <header className="mt-8 border-b border-slate-800 pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Privacy Policy
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            隱私權政策
          </h1>

          <p className="mt-5 leading-8 text-slate-400">
            台灣期貨當沖損益計算機重視您的隱私。本政策說明您使用本站時，
            本站及第三方服務可能蒐集、處理及使用哪些資訊。
          </p>

          <p className="mt-4 text-sm text-slate-500">
            最後更新日期：2026 年 7 月 24 日
          </p>
        </header>

        <article className="space-y-12 py-12 leading-8">
          <PolicySection title="一、適用範圍">
            <p>
              本隱私權政策適用於「台灣期貨當沖損益計算機」網站及其所提供的
              計算工具、文章與相關功能。
            </p>

            <p>
              本政策不適用於經由本站連結前往的其他網站或第三方服務。
              第三方網站的資料處理方式，應以其各自公布的隱私權政策為準。
            </p>
          </PolicySection>

          <PolicySection title="二、本站可能處理的資訊">
            <p>
              本站目前不要求使用者註冊帳戶，也不會要求您提供身分證字號、
              銀行帳戶、信用卡或期貨交易帳戶等敏感資料。
            </p>

            <p>當您瀏覽本站時，系統或第三方服務可能自動取得下列資訊：</p>

            <ul className="list-disc space-y-2 pl-6 marker:text-cyan-400">
              <li>瀏覽器類型、作業系統及裝置類型。</li>
              <li>造訪頁面、停留時間及操作紀錄。</li>
              <li>來源頁面及流量來源。</li>
              <li>IP 位址及由此推估的概略地理位置。</li>
              <li>Cookie、裝置識別碼及類似技術產生的資訊。</li>
            </ul>

            <p>
              若您主動透過電子郵件或其他聯絡方式提供資訊，本站僅會在回覆、
              處理問題或維護服務所必要的範圍內使用。
            </p>
          </PolicySection>

          <PolicySection title="三、Google Analytics">
            <p>
              本站使用 Google Analytics 分析網站流量及使用情況，協助了解
              訪客如何使用網站、改善內容品質、修正功能問題及提升使用體驗。
            </p>

            <p>
              Google Analytics 可能使用 Cookie 或類似技術處理裝置資訊、
              瀏覽行為、流量來源及概略地理位置。相關資料將依 Google
              的服務條款與隱私權政策處理。
            </p>

            <ExternalLink href={GOOGLE_ANALYTICS_OPTOUT_URL}>
              下載 Google Analytics 停用瀏覽器外掛程式
            </ExternalLink>
          </PolicySection>

          <PolicySection title="四、Google AdSense 與廣告 Cookie">
            <p>
              本站使用或預計使用 Google AdSense 提供廣告服務。包括 Google
              在內的第三方廣告供應商，可能使用 Cookie，依據使用者先前造訪
              本站或其他網站的紀錄放送廣告。
            </p>

            <p>
              Google 使用廣告 Cookie，使 Google 及其合作夥伴得以根據使用者
              造訪本站或網際網路上其他網站的情況，提供個人化或非個人化廣告、
              衡量廣告成效、限制廣告重複顯示，以及防範詐欺與濫用。
            </p>

            <p>
              使用者可以前往 Google 廣告設定，管理或停用個人化廣告。
              停用個人化廣告不代表不再看到廣告，而是廣告不再主要依據您的
              興趣與過往瀏覽行為進行個人化。
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExternalLink href={GOOGLE_AD_SETTINGS_URL}>
                Google 廣告設定
              </ExternalLink>

              <ExternalLink href={GOOGLE_PARTNER_URL}>
                Google 如何使用合作網站提供的資訊
              </ExternalLink>

              <ExternalLink href={GOOGLE_PRIVACY_URL}>
                Google 隱私權政策
              </ExternalLink>
            </div>
          </PolicySection>

          <PolicySection title="五、Cookie 的管理">
            <p>
              您可以透過瀏覽器設定檢視、封鎖或刪除 Cookie。停用 Cookie
              後，本站的部分分析、偏好設定或廣告功能可能無法正常運作，
              但基本網站內容通常仍可瀏覽。
            </p>

            <p>
              不同瀏覽器的設定方式有所不同，請參考您所使用瀏覽器的說明文件。
            </p>
          </PolicySection>

          <PolicySection title="六、資料使用目的">
            <p>本站可能在以下目的所必要的範圍內處理相關資訊：</p>

            <ul className="list-disc space-y-2 pl-6 marker:text-cyan-400">
              <li>提供並維護網站及計算工具。</li>
              <li>分析流量及改善網站內容與操作體驗。</li>
              <li>偵測錯誤、資安事件、異常流量及濫用行為。</li>
              <li>放送廣告及衡量廣告成效。</li>
              <li>回覆使用者提出的問題或意見。</li>
              <li>遵守適用的法律義務及主管機關要求。</li>
            </ul>
          </PolicySection>

          <PolicySection title="七、第三方服務">
            <p>
              本站可能使用 Google Analytics、Google AdSense、Vercel
              及其他網站維運服務。這些服務可能依其功能處理技術資訊、
              流量資訊或 Cookie。
            </p>

            <p>
              各第三方服務如何蒐集、保存及處理資料，應以其各自的服務條款
              與隱私權政策為準。
            </p>
          </PolicySection>

          <PolicySection title="八、外部連結">
            <p>
              本站文章或頁面可能包含外部網站連結。當您離開本站後，
              該網站的內容、安全性及隱私措施不在本站控制範圍內，
              請自行閱讀該網站的隱私權政策。
            </p>
          </PolicySection>

          <PolicySection title="九、資料安全與保存">
            <p>
              本站會採取合理的技術與管理措施維護網站安全，但網際網路傳輸
              或電子儲存方式無法保證百分之百安全。
            </p>

            <p>
              本站僅在提供服務、處理聯絡事項、維護安全或符合法律要求所必要
              的期間內保留相關資訊。由第三方服務處理的資料，其保存期間依
              該服務供應商的政策辦理。
            </p>
          </PolicySection>

          <PolicySection title="十、使用者的選擇與權利">
            <p>
              您可以透過瀏覽器刪除或封鎖 Cookie，並透過 Google
              廣告設定管理個人化廣告。若您曾主動提供個人資料，也可以聯絡本站，
              請求查詢、更正或刪除相關資料；本站將依適用法令及實際保存情況處理。
            </p>
          </PolicySection>

          <PolicySection title="十一、未成年人">
            <p>
              本站內容主要提供一般期貨知識與計算工具，並非特別以兒童為服務對象。
              未成年人使用本站時，應由法定代理人或監護人提供適當指導。
            </p>
          </PolicySection>

          <PolicySection title="十二、免責說明">
            <p>
              本站提供的計算結果及文章僅供資訊、教育與試算用途，不構成投資建議、
              交易邀約、獲利保證或任何形式的財務顧問服務。
            </p>

            <p>
              實際交易成本、稅率、手續費、保證金及成交結果，仍應以期貨商、
              交易所及主管機關公布的資訊為準。
            </p>
          </PolicySection>

          <PolicySection title="十三、政策更新">
            <p>
              本站可能因服務內容、第三方工具或法律要求變更而更新本政策。
              更新後的內容將公布於本頁，並修改頁面上方的最後更新日期。
            </p>
          </PolicySection>

          <PolicySection title="十四、聯絡方式">
            <p>
              對本隱私權政策或資料處理方式有任何問題，請透過以下電子郵件聯絡：
            </p>

            <a
              href="mailto:vertex.futures.tw@gmail.com"
              className="font-medium text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
            >
              vertex.futures.tw@gmail.com
            </a>
          </PolicySection>
        </article>

        <div className="border-t border-slate-800 pt-8">
          <Link
            href="/"
            className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            返回台灣期貨當沖損益計算機
          </Link>
        </div>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 text-xl font-semibold text-white sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-slate-300">{children}</div>
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit font-medium text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
    >
      {children}
      <span aria-hidden="true">&nbsp;↗</span>
    </a>
  );
}