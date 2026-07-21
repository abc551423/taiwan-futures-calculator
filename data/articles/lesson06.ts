import type { Article } from "@/types/article";

export const lesson06: Article = {
  slug: "futures-fees",
  lesson: 6,
  title: "期貨手續費、期交稅怎麼算？一口台指期實際成本解析",
  description:
    "了解台指期、小台、微台的交易成本，包括手續費、期貨交易稅，以及實際淨損益的計算方式。",
  readingTime: 6,
  updatedAt: "2026-07-22",
  keywords: [
    "期貨手續費",
    "期交稅",
    "台指期交易成本",
    "台指期手續費",
    "小台手續費",
    "微台手續費",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 6",
      title: "交易成本比你想像的重要",
      description:
        "很多新手只計算獲利點數，卻忽略了每次交易都需要支付手續費與期交稅。若頻繁交易，累積的成本可能大幅影響最終報酬。",
      align: "left",
    },

    {
      type: "heading",
      id: "cost",
      content: "交易期貨有哪些成本？",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "手續費",
          subtitle: "支付給期貨商",
          description:
            "每次買進與賣出通常都需要支付手續費，不同期貨商的收費標準可能不同。",
          tone: "blue",
          icon: "calculator",
          items: [
            "每家期貨商不同",
            "開倉、平倉都會收",
            "交易越頻繁成本越高",
          ],
        },
        {
          title: "期交稅",
          subtitle: "政府課徵",
          description:
            "依成交契約價值計算，由交易所代收並依法繳納。",
          tone: "amber",
          icon: "scale",
          items: [
            "依法課徵",
            "依成交金額計算",
            "每次成交都需支付",
          ],
        },
      ],
    },

    {
      type: "heading",
      id: "fee",
      content: "什麼是期貨手續費？",
    },
    {
      type: "paragraph",
      content:
        "手續費是交易人支付給期貨商的交易服務費，每家期貨商與不同優惠方案都可能不同，因此沒有固定金額。",
    },
    {
      type: "callout",
      title: "不要只比較手續費",
      content:
        "選擇期貨商時，也應考慮交易平台、下單速度、客服與風險控管等因素，而不是只看最低手續費。",
    },

    {
      type: "heading",
      id: "tax",
      content: "什麼是期貨交易稅？",
    },
    {
      type: "paragraph",
      content:
        "期貨交易稅由政府依法課徵，目前台股期貨商品依規定稅率計算，每次成交都會產生。",
    },
    {
      type: "formula",
      formula: "期交稅 ＝ 成交金額 × 稅率",
      description:
        "成交價格越高，期交稅也會跟著增加。",
    },

    {
      type: "heading",
      id: "profit",
      content: "真正賺到的是淨損益",
    },
    {
      type: "formula",
      formula:
        "淨損益 = 毛損益 − 手續費 − 期交稅",
      description:
        "計算交易成果時，應以淨損益作為實際獲利，而不是只看點數。",
    },

    {
      type: "infoCard",
      tone: "emerald",
      icon: "info",
      title: "你的計算機已經幫你算好了",
      content:
        "本站的期貨損益計算機會自動計入期交稅與交易成本，直接顯示淨損益，不需要自行另外計算。",
    },

    {
      type: "heading",
      id: "mistake",
      content: "新手常犯錯誤",
    },
    {
      type: "checklist",
      columns: 2,
      items: [
        "只看毛利不看淨利",
        "忽略進出場都有手續費",
        "忘記期交稅",
        "短線交易卻沒算成本",
        "以為每家期貨商收費都相同",
        "過度交易造成成本累積",
      ],
    },

    {
      type: "calculator",
      title: "立即試算交易成本",
      content:
        "輸入商品、價格與口數，直接查看扣除手續費與期交稅後的淨損益。",
      href: "/#calculator",
      buttonText: "使用期貨損益計算機",
    },

    {
      type: "heading",
      id: "summary",
      content: "本課重點整理",
    },
    {
      type: "checklist",
      columns: 2,
      items: [
        "交易成本包含手續費與期交稅",
        "手續費依期貨商而不同",
        "期交稅依法課徵",
        "淨損益才是真正獲利",
        "交易越頻繁，成本影響越大",
        "下單前先估算交易成本",
      ],
    },
  ],
};

export default lesson06;