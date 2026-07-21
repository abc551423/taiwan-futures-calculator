import type { Article } from "@/types/article";

export const lesson09: Article = {
  slug: "futures-stop-loss",
  lesson: 9,
  title: "期貨停損怎麼設？新手一定要學會的風險控制",
  description:
    "了解停損的重要性、如何設定合理停損、停損金額如何計算，以及避免一次虧掉整個帳戶。",
  readingTime: 8,
  updatedAt: "2026-07-22",
  keywords: [
    "期貨停損",
    "台指期停損",
    "停損設定",
    "期貨風險控制",
    "停損點數",
    "交易風險",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 9",
      title: "停損不是讓你少賺，而是讓你活下來",
      description:
        "市場沒有百分之百正確的交易。真正能長期存活的交易人，不是每次都看對方向，而是每次都把虧損控制在可承受範圍內。",
      align: "left",
    },

    {
      type: "heading",
      id: "why",
      content: "為什麼一定要停損？",
    },
    {
      type: "paragraph",
      content:
        "任何交易策略都有失敗的機率。如果沒有停損，一筆錯誤交易就可能讓前面累積的獲利全部消失，甚至導致追繳保證金。",
    },
    {
      type: "callout",
      title: "交易的第一目標不是賺錢",
      content:
        "第一目標是保住本金。只有本金還在，未來才有繼續交易的機會。",
    },

    {
      type: "heading",
      id: "risk",
      content: "先決定願意虧多少",
    },
    {
      type: "paragraph",
      content:
        "專業交易人通常不是先找可以賺多少，而是先決定這筆交易最多可以虧多少。",
    },
    {
      type: "formula",
      formula: "停損金額 = 停損點數 × 每點價值 × 口數",
      description:
        "先算停損金額，再決定是否值得進場。",
    },

    {
      type: "heading",
      id: "example",
      content: "停損範例",
    },
    {
      type: "infoCard",
      tone: "blue",
      icon: "calculator",
      title: "小台停損 80 點",
      content:
        "假設交易 1 口小台，每點 50 元，停損設定 80 點，最大預估虧損約為 4,000 元（未扣交易成本）。",
    },
    {
      type: "formula",
      formula: "80 × 50 × 1 = 4,000 元",
      description: "如果無法接受 4,000 元虧損，就應減少口數或縮小停損。",
    },

    {
      type: "heading",
      id: "mistakes",
      content: "新手最常犯的停損錯誤",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "有停損",
          subtitle: "接受小虧",
          tone: "emerald",
          icon: "up",
          description: "控制單筆損失，等待下一次機會。",
          items: [
            "保住本金",
            "情緒較穩定",
            "容易長期交易",
          ],
        },
        {
          title: "不停損",
          subtitle: "期待反彈",
          tone: "rose",
          icon: "down",
          description: "虧損可能快速擴大。",
          items: [
            "容易越套越深",
            "可能追繳保證金",
            "帳戶容易爆掉",
          ],
        },
      ],
    },

    {
      type: "heading",
      id: "move",
      content: "停損可以一直改嗎？",
    },
    {
      type: "paragraph",
      content:
        "交易人可以依照自己的交易計畫調整停損，但不建議因為害怕認賠，而在行情不利時一再把停損往更遠的位置移動。",
    },
    {
      type: "warning",
      title: "最危險的習慣",
      content:
        "不停把停損往後移，最後往往不是小虧，而是一次巨大虧損。",
    },

    {
      type: "heading",
      id: "position",
      content: "停損與口數的關係",
    },
    {
      type: "paragraph",
      content:
        "如果停損距離很大，可以考慮降低交易口數，而不是取消停損。",
    },
    {
      type: "formula",
      formula: "口數 = 可承受虧損 ÷（停損點數 × 每點價值）",
      description:
        "口數應由風險決定，而不是帳戶可以下幾口就下幾口。",
    },

    {
      type: "heading",
      id: "psychology",
      content: "停損最大的敵人其實是自己",
    },
    {
      type: "paragraph",
      content:
        "很多交易人不是不知道要停損，而是希望行情會回來，因此遲遲不願執行停損。",
    },
    {
      type: "callout",
      title: "市場不會因為你的成本價而反轉",
      content:
        "價格只會依照市場供需波動，不會因為你希望它上漲就改變方向。",
    },

    {
      type: "heading",
      id: "tips",
      content: "建立停損習慣",
    },
    {
      type: "checklist",
      columns: 2,
      items: [
        "進場前先決定停損",
        "停損金額先算好",
        "不要凹單",
        "不要攤平虧損",
        "控制每筆交易風險",
        "虧損後重新評估策略",
        "不要情緒化交易",
        "保留充足資金",
      ],
    },

    {
      type: "calculator",
      title: "先試算停損金額",
      content:
        "利用本站損益計算機，快速估算不同停損點數與口數下的最大可能損失。",
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
        "每筆交易都應設定停損",
        "先決定風險再決定口數",
        "停損金額可以事先計算",
        "不要不停移動停損",
        "保住本金比追求暴利重要",
        "停損是交易成本的一部分",
        "控制虧損才能長期交易",
        "紀律比預測市場更重要",
      ],
    },
  ],
};

export default lesson09;