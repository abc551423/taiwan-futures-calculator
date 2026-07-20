import type { Article } from "@/types/article";

export const lesson03: Article = {
  slug: "futures-trading-hours",
  lesson: 3,

  title: "台指期交易時間完整整理｜日盤、夜盤幾點開始？",

  description:
    "完整整理台指期、大台、小台與微台的日盤及夜盤交易時間，並說明盤後交易、跨日歸屬、最後交易日與休市規則。",

  readingTime: 6,

  updatedAt: "2026-07-20",

  keywords: [
    "台指期交易時間",
    "期貨交易時間",
    "台指期夜盤",
    "小台交易時間",
    "微台交易時間",
    "期貨日盤夜盤",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 03",
      title: "期貨交易時間：日盤與夜盤",
      description:
        "台指期不只在台股開盤期間可以交易。除了白天的日盤之外，投資人也能透過夜盤，因應美股走勢與國際市場消息。",
      align: "left",
    },

    {
      type: "heading",
      id: "how-long-can-futures-trade",
      content: "台指期一天可以交易多久？",
    },

    {
      type: "paragraph",
      content:
        "台灣股票市場主要在白天交易，但國際金融市場並不會在台股收盤後停止運作。歐洲股市、美國股市、匯率、原油與重要經濟數據，都可能在台灣晚間持續影響市場。",
    },

    {
      type: "paragraph",
      content:
        "因此，臺灣期貨交易所除了提供一般交易時段，也設有盤後交易時段，通常被投資人稱為夜盤。",
    },

    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "08:45",
          label: "日盤開盤",
          description: "比台灣股票市場提早 15 分鐘開盤",
        },
        {
          value: "13:45",
          label: "日盤收盤",
          description: "比台灣股票市場晚 15 分鐘收盤",
        },
        {
          value: "15:00",
          label: "夜盤開盤",
          description: "日盤結束後重新開始交易",
        },
        {
          value: "05:00",
          label: "夜盤收盤",
          description: "持續交易至次日上午",
        },
      ],
    },

    {
      type: "heading",
      id: "tx-trading-hours",
      content: "台指期日盤與夜盤交易時間",
    },

    {
      type: "table",
      headers: ["交易時段", "交易時間", "主要特性"],
      rows: [
        [
          "一般交易時段（日盤）",
          "08:45–13:45",
          "與台灣股票市場同步，市場參與者與成交量通常較集中",
        ],
        [
          "盤後交易時段（夜盤）",
          "15:00–次日 05:00",
          "反映歐美股市、國際消息與晚間經濟數據",
        ],
      ],
    },

    {
      type: "callout",
      title: "適用商品",
      content:
        "臺股期貨、大型臺指期貨、小型臺指期貨與微型臺指期貨，主要交易時間皆為日盤 08:45–13:45，以及夜盤 15:00–次日 05:00。",
    },

    {
      type: "heading",
      id: "why-futures-open-earlier",
      content: "為什麼台指期比台股更早開盤、也更晚收盤？",
    },

    {
      type: "paragraph",
      content:
        "台灣股票市場的交易時間通常為 09:00–13:30，而台指期日盤從 08:45 開始，到 13:45 結束，因此前後各多出 15 分鐘。",
    },

    {
      type: "infoCard",
      title: "開盤前的 15 分鐘",
      content:
        "08:45–09:00 期間，股票市場尚未正式開盤，但台指期已經開始交易。市場會先反映前一晚美股走勢、國際消息與開盤前的多空預期。",
      tone: "blue",
      icon: "info",
    },

    {
      type: "infoCard",
      title: "收盤後的 15 分鐘",
      content:
        "13:30 台股收盤後，台指期仍會交易至 13:45。這段期間可能反映現貨收盤結果、法人部位調整與市場對後續行情的預期。",
      tone: "slate",
      icon: "info",
    },

    {
      type: "warning",
      title: "期貨價格不等於現貨指數",
      content:
        "台指期與臺灣加權股價指數通常高度相關，但兩者仍是不同商品。受到利率、股息、到期時間與市場預期影響，期貨價格可能高於或低於現貨指數。",
    },

    {
      type: "heading",
      id: "day-session-vs-night-session",
      content: "日盤與夜盤有什麼差別？",
    },

    {
      type: "comparison",
      columns: [
        {
          title: "日盤",
          subtitle: "08:45–13:45",
          description:
            "日盤與台灣股票市場同步，現貨與期貨之間的互動通常最直接。",
          tone: "blue",
          icon: "up",
          items: [
            "與台灣股票市場同步交易",
            "現貨市場與期貨市場互相影響",
            "法人與一般交易人參與較集中",
            "成交量通常較為穩定",
            "主要反映台股個股與盤中消息",
          ],
        },
        {
          title: "夜盤",
          subtitle: "15:00–次日 05:00",
          description:
            "夜盤主要承接海外市場與國際消息，部分時段可能出現快速波動。",
          tone: "slate",
          icon: "down",
          items: [
            "台股現貨市場已經收盤",
            "較容易受到歐美股市影響",
            "重要經濟數據常在夜盤公布",
            "不同時段的成交量差異可能較大",
            "突發國際消息會直接反映在價格上",
          ],
        },
      ],
    },

    {
      type: "paragraph",
      content:
        "日盤與夜盤並不是兩個完全獨立的市場。兩者交易的是相同月份的期貨契約，部位與損益也會延續，不會因為日盤收盤就自動結束。",
    },

    {
      type: "heading",
      id: "why-night-session-matters",
      content: "夜盤為什麼重要？",
    },

    {
      type: "paragraph",
      content:
        "台股收盤之後，全球市場仍持續運作。夜盤讓交易人可以在重大消息發生時調整部位，而不必等到隔天早上。",
    },

    {
      type: "infoCard",
      title: "美國股市走勢",
      content:
        "美股主要交易時間落在台灣晚間。道瓊、標普 500、那斯達克與費城半導體指數的波動，常會影響台指期夜盤。",
      tone: "blue",
      icon: "info",
    },

    {
      type: "infoCard",
      title: "重要經濟數據",
      content:
        "美國消費者物價指數、非農就業、零售銷售與生產者物價指數等資料，通常在台灣晚間公布，公布前後可能出現明顯波動。",
      tone: "amber",
      icon: "info",
    },

    {
      type: "infoCard",
      title: "聯準會與企業財報",
      content:
        "聯準會利率決議、主席談話，以及大型科技公司的財報，都可能在台灣深夜或凌晨影響市場。",
      tone: "rose",
      icon: "info",
    },

    {
      type: "checklist",
      title: "夜盤常見的國際影響因素",
      columns: 2,
      items: [
        "美國股市開盤與盤中走勢",
        "美國通膨與就業數據",
        "聯準會利率決議及官員談話",
        "大型科技公司財報",
        "國際戰爭、政治與突發事件",
        "美元、債券、原油與其他國際市場波動",
      ],
    },

    {
      type: "heading",
      id: "night-session-trading-date",
      content: "夜盤是算今天，還是算隔天？",
    },

    {
      type: "paragraph",
      content:
        "夜盤雖然在前一天下午 15:00 開始，但交易資料通常歸屬於次一個交易日。這也是許多新手查看行情資料時最容易混淆的地方。",
    },

    {
      type: "formula",
      formula: "前一日 15:00 → 當日 05:00",
      description:
        "例如星期一 15:00 開始，到星期二 05:00 結束的夜盤，通常歸屬於星期二的交易資料。",
    },

    {
      type: "callout",
      title: "跨日不代表產生新的部位",
      content:
        "如果你在夜盤建立部位，部位會持續存在，直到你反向沖銷、契約到期，或因風險控管而被強制平倉。凌晨跨過午夜並不會自動結算或平倉。",
    },

    {
      type: "heading",
      id: "friday-night-session",
      content: "星期五晚上有夜盤嗎？",
    },

    {
      type: "paragraph",
      content:
        "星期五日盤結束後，原則上仍有星期五 15:00 開始的盤後交易，但該盤後交易歸屬於下一個交易日。若下一個交易日為星期一，便可理解為星期一交易日的夜盤時段。",
    },

    {
      type: "paragraph",
      content:
        "夜盤在次日上午 05:00 結束後，星期六與星期日通常不會繼續交易，直到下一個有效交易時段開始。",
    },

    {
      type: "warning",
      title: "連續假期前要特別注意",
      content:
        "遇到週末或連續假期時，台灣期貨市場可能休市，但海外市場仍可能持續交易。休市期間累積的國際行情，可能在下一次開盤時一次反映，造成跳空風險。",
    },

    {
      type: "heading",
      id: "holiday-trading",
      content: "國定假日一定沒有期貨交易嗎？",
    },

    {
      type: "paragraph",
      content:
        "期貨是否休市，不能只看一般行事曆判斷，應以臺灣期貨交易所公布的年度行事曆與臨時公告為準。",
    },

    {
      type: "checklist",
      title: "判斷是否開盤時，應確認",
      columns: 1,
      items: [
        "當天是否為期貨交易所營業日",
        "是否有國定假日或補假安排",
        "是否發布天然災害休市公告",
        "夜盤所歸屬的下一交易日是否正常營業",
        "交易商品是否具有盤後交易時段",
      ],
    },

    {
      type: "heading",
      id: "last-trading-day-hours",
      content: "最後交易日的時間不一樣",
    },

    {
      type: "paragraph",
      content:
        "台指期契約具有到期月份。當契約進入最後交易日，交易時間會和一般交易日不同。",
    },

    {
      type: "table",
      headers: ["情況", "交易時間"],
      rows: [
        ["一般交易日的日盤", "08:45–13:45"],
        ["到期月份契約最後交易日", "08:45–13:30"],
        ["到期月份契約最後交易日夜盤", "沒有盤後交易時段"],
        ["非到期月份契約", "依一般規則繼續交易"],
      ],
    },

    {
      type: "warning",
      title: "只有到期月份契約受到影響",
      content:
        "最後交易日提早收盤以及沒有夜盤，主要是針對當月到期的契約。較遠月份契約仍可能依正常交易時間繼續交易。",
    },

    {
      type: "heading",
      id: "night-session-volume",
      content: "夜盤成交量一定比較小嗎？",
    },

    {
      type: "paragraph",
      content:
        "夜盤的成交量並不是整晚都相同。剛開盤、美股開盤前後，以及重大經濟數據公布時，成交通常較為活躍；到了市場消息較少的深夜或凌晨，成交可能下降。",
    },

    {
      type: "comparison",
      columns: [
        {
          title: "較活躍時段",
          description:
            "國際市場開盤、重要數據公布或重大消息發生時，成交量與波動通常會增加。",
          tone: "emerald",
          icon: "up",
          items: [
            "15:00 夜盤剛開盤",
            "歐洲市場開始交易",
            "美國經濟數據公布前後",
            "美股開盤前後",
            "重大國際消息發生時",
          ],
        },
        {
          title: "可能較清淡的時段",
          description:
            "市場缺乏消息時，成交量可能下降，買賣價差也可能擴大。",
          tone: "slate",
          icon: "down",
          items: [
            "市場缺乏重大消息時",
            "美股波動較小時",
            "深夜部分交易時段",
            "連續假期前後",
            "遠月份或較冷門契約",
          ],
        },
      ],
    },

    {
      type: "tip",
      title: "成交量較小不只影響成交速度",
      content:
        "流動性不足時，買價與賣價之間的差距可能擴大。即使畫面上顯示某個價格，也不代表你的委託一定能在該價格成交。",
    },

    {
      type: "heading",
      id: "night-session-risks",
      content: "夜盤交易需要注意什麼？",
    },

    {
      type: "checklist",
      title: "夜盤交易前的風險檢查",
      columns: 2,
      items: [
        "確認夜盤是否有重大經濟數據或利率決議",
        "注意美股開盤前後可能出現的快速波動",
        "不要因為保證金足夠就忽略實際契約價值",
        "成交量較低時，留意買賣價差與滑價",
        "持倉過夜前，先評估停損與可承受虧損",
        "連續假期前，注意海外行情造成的跳空風險",
      ],
    },

    {
      type: "callout",
      title: "夜盤不是比較簡單的日盤",
      content:
        "夜盤提供更多交易與避險機會，但也代表交易人需要面對國際消息、流動性變化與跨日持倉風險。交易時間變長，不代表每個時段都適合進場。",
    },

    {
      type: "heading",
      id: "summary",
      content: "重點整理",
    },

    {
      type: "checklist",
      title: "你需要記住的交易時間",
      columns: 1,
      items: [
        "台指期日盤交易時間為 08:45–13:45",
        "台指期夜盤交易時間為 15:00–次日 05:00",
        "夜盤交易資料通常歸屬於下一個交易日",
        "夜盤部位不會因為跨過午夜自動平倉",
        "到期月份契約最後交易日只交易至 13:30",
        "到期月份契約最後交易日沒有夜盤",
        "假日與臨時休市應以期交所公告為準",
      ],
    },
  ],
};