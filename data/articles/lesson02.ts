import type { Article } from "@/types/article";

export const lesson02: Article = {
  slug: "tx-mtx-tmf",

  lesson: 2,

  title: "大台、小台、微台有什麼差別？新手該怎麼選？",

  description:
    "完整比較大台、小台與微台的每點價值、契約規模、損益變化與適合族群，幫助期貨新手選擇合適商品。",

  readingTime: 8,

  updatedAt: "2026-07-19",

  keywords: [
    "大台小台微台差別",
    "大台",
    "小台",
    "微台",
    "台指期貨",
    "台指期貨新手",
    "TX MTX TMF",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "台指期貨商品比較",
      title: "同樣漲跌 100 點，為什麼損益可能差到 20 倍？",
      description:
        "大台、小台與微台的價格走勢十分接近，但每點價值、契約規模與單口風險完全不同。選錯商品，即使方向判斷正確，也可能承受超出預期的波動。",
    },

    {
      type: "paragraph",
      content:
        "很多新手第一次打開期貨交易軟體時，都會看到大台、小台與微台。三種商品名稱不同，價格走勢卻十分接近，最主要的差別並不是行情方向，而是每一點價格變化所代表的實際損益。",
    },

    {
      type: "heading",
      id: "same-index",
      content: "三種商品追蹤的是同一個市場",
    },

    {
      type: "paragraph",
      content:
        "大台、小台與微台都與臺灣加權股價指數的走勢相關。它們並不是三個完全不同的市場，而是使用不同契約規模，讓交易人能依照資金與風險承受能力選擇商品。",
    },

    {
      type: "blockquote",
      content:
        "大台、小台與微台的行情方向通常相近，但相同點數變化所產生的損益金額不同。",
    },

    {
      type: "heading",
      id: "point-value",
      content: "最大的差別：每點價值",
    },

    {
      type: "comparison",
      columns: [
        {
          title: "大台指",
          subtitle: "TX",
          description:
            "每點價值最高，相同行情波動下，單口獲利與虧損變化最快。",
          tone: "rose",
          icon: "up",
          items: [
            "每點價值：200 元",
            "契約規模最大",
            "單口波動較高",
          ],
        },
        {
          title: "小台指",
          subtitle: "MTX",
          description:
            "契約規模約為大台的四分之一，是一般交易人常見的台指期貨商品。",
          tone: "blue",
          icon: "scale",
          items: [
            "每點價值：50 元",
            "契約規模中等",
            "部位調整較有彈性",
          ],
        },
        {
          title: "微台指",
          subtitle: "TMF",
          description:
            "每點價值最低，適合希望降低單口風險或細緻控制部位的交易人。",
          tone: "emerald",
          icon: "down",
          items: [
            "每點價值：10 元",
            "契約規模最小",
            "單口波動較低",
          ],
        },
      ],
    },

    {
      type: "table",
      headers: ["商品", "代號", "每點價值", "單口風險"],
      rows: [
        ["大台指", "TX", "200 元", "較高"],
        ["小台指", "MTX", "50 元", "中等"],
        ["微台指", "TMF", "10 元", "較低"],
      ],
    },

    {
      type: "paragraph",
      content:
        "每點價值代表行情每移動一點，單口部位會增加或減少多少損益。每點價值愈高，行情變動時的獲利與虧損速度也愈快。",
    },

    {
      type: "heading",
      id: "one-hundred-point-example",
      content: "行情變動 100 點，三者差多少？",
    },

    {
      type: "formula",
      formula: "價格變動點數 × 每點價值 × 口數",
      description:
        "以下先不考慮手續費與期貨交易稅，只比較一口契約的毛損益。",
    },

    {
      type: "stats",
      columns: 3,
      items: [
        {
          value: "20,000 元",
          label: "一口大台",
          description: "100 點 × 每點 200 元",
        },
        {
          value: "5,000 元",
          label: "一口小台",
          description: "100 點 × 每點 50 元",
        },
        {
          value: "1,000 元",
          label: "一口微台",
          description: "100 點 × 每點 10 元",
        },
      ],
    },

    {
      type: "paragraph",
      content:
        "三種商品面對的是相同的 100 點行情變化，但因為每點價值不同，最後產生的單口損益差距很大。一口大台的損益變化是小台的四倍，也是微台的二十倍。",
    },

    {
      type: "heading",
      id: "margin-difference",
      content: "保證金需求也不同",
    },

    {
      type: "paragraph",
      content:
        "契約規模愈大，通常需要準備的保證金也愈高。大台的資金需求最高，小台次之，微台則相對較低。",
    },

    {
      type: "infoCard",
      title: "保證金不是最大可承受虧損",
      content:
        "保證金只是建立與維持部位所需的資金擔保。實際損益仍會依照每點價值與行情變動持續計算。",
      tone: "blue",
      icon: "scale",
    },

    {
      type: "warning",
      title: "保證金可能隨市場狀況調整",
      content:
        "交易所可能因市場波動調整保證金標準。實際交易前，應確認臺灣期貨交易所或所屬期貨商公布的最新資料。",
    },

    {
      type: "heading",
      id: "which-product",
      content: "新手應該選大台、小台還是微台？",
    },

    {
      type: "paragraph",
      content:
        "商品選擇不應只看哪一種最容易賺錢，也不應只看帳戶裡的資金是否剛好足以放進一口，而應根據資金規模、停損距離與單筆可承受虧損決定。",
    },

    {
      type: "comparison",
      columns: [
        {
          title: "大台",
          subtitle: "較高契約規模",
          description:
            "適合資金較充足、已有交易經驗，而且能承受較大單口波動的交易人。",
          tone: "rose",
          icon: "up",
          items: [
            "損益變化速度快",
            "單口部位較大",
            "需要更嚴格的風險管理",
          ],
        },
        {
          title: "小台",
          subtitle: "中等契約規模",
          description:
            "適合已有基本交易經驗，希望在契約規模與資金效率之間取得平衡的交易人。",
          tone: "blue",
          icon: "scale",
          items: [
            "一般交易人常見選擇",
            "單口風險低於大台",
            "仍需留意槓桿波動",
          ],
        },
        {
          title: "微台",
          subtitle: "較小契約規模",
          description:
            "適合新手、小資族，或希望更細緻安排加碼、減碼與停損部位的交易人。",
          tone: "emerald",
          icon: "down",
          items: [
            "每點價值最低",
            "方便拆分部位",
            "較容易控制單筆風險",
          ],
        },
      ],
    },

    {
      type: "tip",
      title: "不要只看保證金",
      content:
        "真正重要的是停損發生時會損失多少，而不是帳戶裡的資金剛好能不能建立一口期貨部位。",
    },

    {
      type: "heading",
      id: "stop-loss-example",
      content: "用停損距離反推適合商品",
    },

    {
      type: "paragraph",
      content:
        "假設你的交易策略停損距離是 100 點，不考慮交易成本時，大台單口風險約為 20,000 元、小台約為 5,000 元、微台約為 1,000 元。",
    },

    {
      type: "formula",
      formula: "停損點數 × 每點價值 × 口數＝單筆預估風險",
      description:
        "先計算停損被觸發時可能產生的虧損，再確認這筆金額是否符合你的風險預算。",
    },

    {
      type: "infoCard",
      title: "商品選擇的核心",
      content:
        "先決定單筆最多能承受多少虧損，再選擇符合風險預算的商品與口數，而不是先選商品之後才思考如何停損。",
      tone: "amber",
      icon: "info",
    },

    {
      type: "heading",
      id: "position-adjustment",
      content: "微台可以用來細緻調整部位",
    },

    {
      type: "paragraph",
      content:
        "較小的契約可以讓交易人更細緻地控制部位。例如覺得一口小台的部位太大時，可以使用數口微台取代，讓加碼、減碼與停損安排更有彈性。",
    },

    {
      type: "callout",
      title: "部位拆分範例",
      content:
        "交易人可以分批建立數口微台，並在不同價位逐步減碼，而不必一次平掉整個小台部位。",
    },

    {
      type: "heading",
      id: "cost",
      content: "契約較小，不代表交易成本一定較低",
    },

    {
      type: "paragraph",
      content:
        "每一口期貨通常都會產生手續費與交易稅。如果使用多口微台達到與一口小台接近的部位規模，總交易口數增加後，整體交易成本也可能不同。",
    },

    {
      type: "infoCard",
      title: "部位規模與交易成本要一起比較",
      content:
        "不要只比較每點價值，也要把實際口數、手續費、交易稅與可能的成交價差納入考量。",
      tone: "slate",
      icon: "calculator",
    },

    {
      type: "cta",
      title: "直接比較大台、小台與微台的實際損益",
      content:
        "使用 Vertex 台灣期貨損益計算機，輸入進場價格、方向、口數與交易方式，即可比較不同商品的淨損益、交易成本與保證金收益率。",
      href: "/#calculator",
      buttonText: "開啟期貨損益計算機",
    },

    {
      type: "heading",
      id: "summary",
      content: "重點整理",
    },

    {
      type: "checklist",
      columns: 2,
      items: [
        "大台、小台與微台都與臺灣加權股價指數相關。",
        "三者最大的差別是每點價值與契約規模。",
        "大台每點 200 元，小台每點 50 元，微台每點 10 元。",
        "契約愈大，相同點數變化所產生的損益愈大。",
        "商品選擇應從停損距離與單筆風險反推。",
        "微台適合降低單口風險，或更細緻地拆分部位。",
        "保證金不是最大虧損，也不代表商品本身的完整價值。",
        "多口小型契約可能增加整體手續費與交易成本。",
      ],
    },
  ],
};