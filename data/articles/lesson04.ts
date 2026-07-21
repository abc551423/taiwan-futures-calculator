import type { Article } from "@/types/article";

export const lesson04: Article = {
  slug: "futures-settlement-day",
  lesson: 4,
  title: "台指期結算日完整解析｜第三個星期三會發生什麼事？",
  description:
    "了解台指期、小台與微台的結算日規則、最後交易日、最後結算價，以及持倉到期時會發生什麼事。",
  readingTime: "6 分鐘",
  updatedAt: "2026-07-22",
  keywords: [
    "台指期結算日",
    "期貨結算日",
    "台指期第三個星期三",
    "台指期最後交易日",
    "期貨到期",
    "期貨轉倉",
    "最後結算價",
  ],

  sections: [
    {
      type: "hero",
      title: "期貨契約不是永久存在",
      subtitle: "每一個月份的期貨契約，都有自己的到期日",
      description:
        "當契約來到最後交易日，尚未平倉的部位將依最後結算價進行現金結算。因此，交易期貨不只要看行情，也必須知道自己交易的是哪一個月份，以及該契約何時到期。",
    },

    {
      type: "heading",
      id: "what-is-settlement-day",
      content: "什麼是期貨結算日？",
    },
    {
      type: "paragraph",
      content:
        "期貨是一種具有到期日的契約。交易人買進或賣出的不是永久持有的商品，而是某一個特定交割月份的契約。",
    },
    {
      type: "paragraph",
      content:
        "當契約來到最後交易日後，這個月份的契約便會停止交易。仍然持有的未平倉部位，將依交易所公布的最後結算價計算最終損益。",
    },
    {
      type: "callout",
      title: "台指期採現金結算",
      content:
        "台指期、小台與微台不會真的交付一籃子股票，而是依最後結算價與交易人持倉價格之間的差額，以現金完成結算。",
    },

    {
      type: "heading",
      id: "settlement-date",
      content: "台指期什麼時候結算？",
    },
    {
      type: "stats",
      items: [
        {
          label: "結算頻率",
          value: "每月一次",
          description: "每個月份契約都有自己的最後交易日",
        },
        {
          label: "通常日期",
          value: "第三個星期三",
          description: "以該契約的交割月份計算",
        },
        {
          label: "交割方式",
          value: "現金結算",
          description: "依最後結算價計算損益差額",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "台股期貨、小型臺指期貨與微型臺指期貨的月契約，最後交易日原則上是交割月份的第三個星期三，最後結算日與最後交易日為同一天。",
    },
    {
      type: "tip",
      title: "不是每個月固定同一個日期",
      content:
        "結算日是依照星期計算，而不是固定在每月 15 日或 20 日。實際日期仍應以臺灣期貨交易所公布的行事曆為準。",
    },

    {
      type: "heading",
      id: "contract-example",
      content: "如何看懂期貨契約月份？",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "近月契約",
          subtitle: "最接近到期的月份",
          description:
            "通常成交量最大、流動性最好，也是多數短線交易人主要交易的契約。",
          tone: "blue",
          icon: "📅",
          items: [
            "距離結算日較近",
            "通常交易最活躍",
            "到期前需要留意轉倉",
          ],
        },
        {
          title: "遠月契約",
          subtitle: "較晚到期的月份",
          description:
            "距離最後交易日較遠，但成交量與市場深度通常可能低於近月契約。",
          tone: "slate",
          icon: "🗓️",
          items: [
            "距離到期較久",
            "價格可能與近月不同",
            "流動性通常較低",
          ],
        },
      ],
    },
    {
      type: "infoCard",
      title: "契約月份範例",
      content:
        "假設目前市場主要交易 2026 年 8 月契約，代表這張契約將在 2026 年 8 月的最後交易日到期。它不是指你必須持有到 8 月，而是你最晚只能交易到該契約的最後交易日。",
    },

    {
      type: "heading",
      id: "what-happens",
      content: "持倉放到結算日會發生什麼事？",
    },
    {
      type: "paragraph",
      content:
        "若交易人在最後交易日前自行平倉，損益會依進場價與平倉價計算。若一直持有到契約到期，未平倉部位則會依最後結算價完成結算。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "結算前自行平倉",
          subtitle: "主動結束部位",
          description:
            "交易人自行選擇平倉時間，損益依實際平倉成交價格計算。",
          tone: "emerald",
          icon: "✓",
          items: [
            "可自行選擇平倉時機",
            "價格以實際成交價為準",
            "不必等到契約到期",
          ],
        },
        {
          title: "持有到契約到期",
          subtitle: "由交易所進行結算",
          description:
            "尚未平倉的部位會依最後結算價計算差額，完成現金結算。",
          tone: "amber",
          icon: "!",
          items: [
            "無法自行決定結算價格",
            "依交易所最後結算價處理",
            "結算後原契約不再存在",
          ],
        },
      ],
    },

    {
      type: "heading",
      id: "final-settlement-price",
      content: "最後結算價是什麼？",
    },
    {
      type: "paragraph",
      content:
        "最後結算價不是台指期最後一筆成交價，也不是現貨市場的單一收盤點位。",
    },
    {
      type: "paragraph",
      content:
        "台指期的最後結算價，是依最後結算日臺灣證券交易所交易時間收盤前 30 分鐘內，標的指數數值的簡單算術平均價計算。",
    },
    {
      type: "formula",
      formula:
        "最後結算損益 ＝（最後結算價 − 進場價）× 每點價值 × 口數",
      description:
        "做多使用最後結算價減去進場價；做空則將方向反過來計算。",
    },
    {
      type: "warning",
      title: "最後結算價可能與你看到的行情不同",
      content:
        "因為最後結算價採一段時間內的指數平均值計算，所以可能與台指期最後成交價、現貨最後收盤指數存在差異。",
    },

    {
      type: "heading",
      id: "settlement-example",
      content: "結算損益範例",
    },
    {
      type: "infoCard",
      title: "小台多單持有到結算",
      content:
        "假設交易人以 23,000 點買進 1 口小台，最後結算價為 23,100 點。行情上漲 100 點，小台每點價值為 50 元，因此結算毛利為 100 × 50 ＝ 5,000 元。",
    },
    {
      type: "formula",
      formula: "（23,100 − 23,000）× 50 × 1 ＝ 5,000 元",
      description:
        "此處為尚未扣除手續費與期貨交易稅的毛損益。",
    },

    {
      type: "heading",
      id: "rollover",
      content: "什麼是期貨轉倉？",
    },
    {
      type: "paragraph",
      content:
        "交易人若想在近月契約到期後繼續保有相同方向的部位，通常會先平掉即將到期的契約，再建立下一個月份的新部位，這個動作稱為轉倉。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "平倉",
          subtitle: "結束目前交易",
          description:
            "將原有部位反向沖銷，完成該筆交易，不再建立新的期貨部位。",
          tone: "slate",
          icon: "■",
          items: ["部位歸零", "損益確定", "不再承擔後續行情風險"],
        },
        {
          title: "轉倉",
          subtitle: "將部位移到下個月份",
          description:
            "先平掉即將到期的契約，再買進或賣出下一個月份的契約。",
          tone: "blue",
          icon: "→",
          items: [
            "舊契約部位結束",
            "建立新月份部位",
            "需承擔兩次交易成本",
          ],
        },
      ],
    },
    {
      type: "callout",
      title: "轉倉不是免費延長契約",
      content:
        "不同月份的期貨價格可能不同，因此轉倉不只是平倉後重新下單，也可能產生月份價差、滑價、手續費與期貨交易稅。",
    },

    {
      type: "heading",
      id: "settlement-risks",
      content: "結算日前要注意什麼？",
    },
    {
      type: "checklist",
      title: "持有近月契約時的檢查清單",
      items: [
        "確認自己持有的是哪一個契約月份",
        "確認該月份的最後交易日",
        "決定要在到期前平倉，還是持有到結算",
        "需要延續部位時，提前規劃轉倉",
        "留意近月與遠月契約之間的價差",
        "確認期貨商是否有額外的到期部位處理規則",
        "避免誤把最後成交價當成最後結算價",
      ],
    },
    {
      type: "warning",
      title: "不要等到最後一刻才處理",
      content:
        "接近結算時，市場價格、流動性與近遠月價差可能快速變動。若沒有持有到結算的計畫，應事先確認平倉或轉倉時間。",
    },

    {
      type: "heading",
      id: "key-points",
      content: "本課重點整理",
    },
    {
      type: "checklist",
      items: [
        "期貨契約具有到期日，不會永久存在",
        "台指期月契約通常在交割月份第三個星期三到期",
        "最後交易日與最後結算日為同一天",
        "未平倉部位會依最後結算價進行現金結算",
        "最後結算價不是期貨最後一筆成交價",
        "繼續持有相同方向時，可以透過轉倉移到下一月份",
      ],
    },
  ],
};

export default lesson04;