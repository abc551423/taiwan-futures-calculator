import type { Article } from "@/types/article";

export const lesson10: Article = {
  slug: "futures-margin-call-liquidation",
  lesson: 10,
  title: "期貨追繳保證金與強制平倉是什麼？一次搞懂風險機制",
  description:
    "了解什麼情況會收到追繳保證金通知、什麼是強制平倉，以及如何避免因資金不足而被迫出場。",
  readingTime: 8,
  updatedAt: "2026-07-22",
  keywords: [
    "期貨追繳",
    "期貨追繳保證金",
    "期貨強制平倉",
    "期貨斷頭",
    "維持保證金",
    "期貨風險",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 10",
      title: "真正讓交易人出局的，通常不是看錯方向",
      description:
        "許多交易人不是因為一次判斷失誤，而是因為沒有控制風險，導致帳戶權益低於維持保證金，最後收到追繳通知甚至遭到強制平倉。",
      align: "left",
    },

    {
      type: "heading",
      id: "margin-call",
      content: "什麼是追繳保證金？",
    },
    {
      type: "paragraph",
      content:
        "當持倉虧損導致帳戶權益低於維持保證金時，期貨商可能通知交易人補足資金，使帳戶恢復到符合規定的保證金水準。",
    },
    {
      type: "callout",
      title: "追繳不是罰款",
      content:
        "追繳保證金只是要求補足部位所需的保證金，並不是另外收取的費用。",
    },

    {
      type: "heading",
      id: "maintenance",
      content: "什麼是維持保證金？",
    },
    {
      type: "paragraph",
      content:
        "建立期貨部位後，帳戶必須維持一定的最低權益。若權益跌破維持保證金，就可能需要補繳保證金。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "權益高於維持保證金",
          subtitle: "正常持倉",
          tone: "emerald",
          icon: "up",
          description:
            "帳戶資金仍符合持倉要求。",
          items: [
            "可正常持有部位",
            "無須補繳資金",
            "仍需持續控制風險",
          ],
        },
        {
          title: "權益低於維持保證金",
          subtitle: "可能追繳",
          tone: "rose",
          icon: "down",
          description:
            "若未改善帳戶狀況，可能面臨強制平倉。",
          items: [
            "可能收到通知",
            "需要補足資金",
            "風險快速增加",
          ],
        },
      ],
    },

    {
      type: "heading",
      id: "liquidation",
      content: "什麼是強制平倉？",
    },
    {
      type: "paragraph",
      content:
        "若交易人未能在規定條件下補足保證金，或帳戶風險已達期貨商規定，期貨商可能依契約將部分或全部持倉平倉，以降低風險。",
    },
    {
      type: "warning",
      title: "強制平倉不一定發生在你希望的價格",
      content:
        "強制平倉通常是依當時市場成交狀況執行，實際成交價格可能與交易人預期不同，尤其在行情快速波動時更可能出現差異。",
    },

    {
      type: "heading",
      id: "process",
      content: "一般可能經歷的流程",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          label: "建立部位",
          value: "Step 1",
          description: "存入保證金並建立持倉",
        },
        {
          label: "持續虧損",
          value: "Step 2",
          description: "帳戶權益逐漸下降",
        },
        {
          label: "低於維持保證金",
          value: "Step 3",
          description: "可能收到追繳通知",
        },
        {
          label: "未改善",
          value: "Step 4",
          description: "可能遭部分或全部平倉",
        },
      ],
    },

    {
      type: "heading",
      id: "avoid",
      content: "如何避免追繳保證金？",
    },
    {
      type: "checklist",
      columns: 2,
      items: [
        "不要使用滿倉交易",
        "保留足夠可用資金",
        "設定停損",
        "控制交易口數",
        "避免凹單",
        "避免過度加碼",
        "定期檢查帳戶權益",
        "了解商品保證金規定",
      ],
    },

    {
      type: "heading",
      id: "misunderstanding",
      content: "新手常見迷思",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "正確觀念",
          subtitle: "風險管理",
          tone: "emerald",
          icon: "book",
          description:
            "停損與資金控管能有效降低被追繳的機率。",
          items: [
            "先控制風險",
            "預留資金",
            "降低槓桿",
          ],
        },
        {
          title: "錯誤觀念",
          subtitle: "一直補錢",
          tone: "rose",
          icon: "down",
          description:
            "補資金並不能改變原本錯誤的交易方向。",
          items: [
            "不停補保證金",
            "不願停損",
            "持續攤平",
          ],
        },
      ],
    },

    {
      type: "heading",
      id: "relation",
      content: "追繳、停損與槓桿的關係",
    },
    {
      type: "paragraph",
      content:
        "前一課提到停損可以限制單筆交易虧損，而槓桿會放大帳戶資金波動。如果槓桿過高又沒有停損，帳戶權益可能迅速下降，更容易接近追繳或強制平倉的門檻。",
    },
    {
      type: "callout",
      title: "真正要避免的是風險失控",
      content:
        "大多數情況下，只要交易人妥善控制口數、槓桿與停損，就能大幅降低追繳保證金與強制平倉的機率。",
    },

    {
      type: "heading",
      id: "common-errors",
      content: "最容易導致追繳的行為",
    },
    {
      type: "checklist",
      columns: 2,
      items: [
        "使用過高槓桿",
        "不停攤平",
        "沒有停損",
        "滿倉交易",
        "帳戶沒有預留資金",
        "虧損後繼續加碼",
        "忽略帳戶權益",
        "只看保證金，不看風險",
      ],
    },

    {
      type: "calculator",
      title: "先估算可能的虧損",
      content:
        "利用本站期貨損益計算機，估算不同停損點數、口數與價格變化下的資金風險。",
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
        "追繳保證金不是罰款",
        "維持保證金不足可能被追繳",
        "強制平倉是降低風險的機制",
        "停損可以降低追繳機率",
        "降低槓桿有助於控制風險",
        "不要滿倉交易",
        "保留資金緩衝",
        "風險管理比預測行情更重要",
      ],
    },
  ],
};

export default lesson10;