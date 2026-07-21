import type { Article } from "@/types/article";

export const lesson05: Article = {
  slug: "futures-margin",
  lesson: 5,
  title: "期貨保證金是什麼？原始保證金、維持保證金完整解析",
  description:
    "了解期貨保證金的用途，以及原始保證金、維持保證金、追繳與強制平倉之間的關係。",
  readingTime: 7 ,
  updatedAt: "2026-07-22",
  keywords: [
    "期貨保證金",
    "台指期保證金",
    "小台保證金",
    "微台保證金",
    "原始保證金",
    "維持保證金",
    "期貨追繳",
    "期貨強制平倉",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 5",
      title: "保證金不是商品價格，而是履約擔保",
      description:
        "交易期貨時，不需要支付整張契約的完整價值，而是先存入一筆保證金作為履約擔保。這讓交易人能用較少資金參與較大的契約，但同時也放大了獲利與虧損。",
      align: "left",
    },

    {
      type: "heading",
      id: "what-is-margin",
      content: "什麼是期貨保證金？",
    },
    {
      type: "paragraph",
      content:
        "期貨保證金是交易人建立期貨部位時，存放在期貨帳戶中的履約擔保金。它不是購買商品所支付的價格，也不是手續費。",
    },
    {
      type: "paragraph",
      content:
        "期貨契約具有槓桿效果。交易人只需要準備契約總價值的一部分，就能持有一整口期貨部位，因此保證金也是期貨風險管理制度的重要核心。",
    },
    {
      type: "callout",
      title: "保證金仍然是你的資金",
      content:
        "保證金並不是交給期貨商的費用。只要沒有產生虧損、欠款或其他應扣款項，平倉後未被使用的資金仍會留在期貨帳戶中。",
    },

    {
      type: "heading",
      id: "margin-is-not-price",
      content: "保證金不等於契約價值",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "契約價值",
          subtitle: "部位實際控制的市場價值",
          description:
            "由期貨指數點位、每點價值與交易口數共同決定。",
          tone: "blue",
          icon: "calculator",
          items: [
            "代表部位的名目價值",
            "行情變動會依整張契約計算損益",
            "通常遠高於實際存入的保證金",
          ],
        },
        {
          title: "保證金",
          subtitle: "建立部位所需的履約擔保",
          description:
            "交易人不必支付完整契約價值，但必須維持足夠的帳戶權益。",
          tone: "slate",
          icon: "scale",
          items: [
            "不是契約購買價格",
            "不是交易手續費",
            "金額可能由交易所或期貨商調整",
          ],
        },
      ],
    },
    {
      type: "formula",
      formula: "契約價值 ＝ 期貨點位 × 每點價值 × 口數",
      description:
        "例如小台每點價值為 50 元，因此小台的契約價值會隨台指期點位變動。",
    },

    {
      type: "heading",
      id: "three-margin-levels",
      content: "常見的三種保證金",
    },
    {
      type: "stats",
      columns: 3,
      items: [
        {
          label: "原始保證金",
          value: "建立部位",
          description: "新倉所需的基本保證金門檻",
        },
        {
          label: "維持保證金",
          value: "持有部位",
          description: "帳戶持續持有部位時的最低權益標準",
        },
        {
          label: "結算保證金",
          value: "結算會員",
          description: "主要用於期貨商與結算會員之間的風險管理",
        },
      ],
    },

    {
      type: "heading",
      id: "initial-margin",
      content: "什麼是原始保證金？",
    },
    {
      type: "paragraph",
      content:
        "原始保證金是建立新期貨部位時所需要準備的金額。當交易人下單後，期貨商會依商品、口數與適用的保證金標準，檢查帳戶可用資金是否足夠。",
    },
    {
      type: "infoCard",
      tone: "blue",
      icon: "info",
      title: "買進和賣出都需要保證金",
      content:
        "期貨不論做多或做空，都具有履約義務，因此建立多單和空單時都必須準備保證金。",
    },
    {
      type: "warning",
      title: "保證金金額並非永久固定",
      content:
        "交易所可能依市場波動、商品風險與其他因素調整保證金。不同期貨商也可能在交易所標準之上，採用較高的內部風控標準。",
    },

    {
      type: "heading",
      id: "maintenance-margin",
      content: "什麼是維持保證金？",
    },
    {
      type: "paragraph",
      content:
        "維持保證金是持有期貨部位期間，帳戶權益需要維持的最低標準。當行情朝不利方向移動，未實現虧損會使帳戶權益下降。",
    },
    {
      type: "paragraph",
      content:
        "如果帳戶權益低於規定標準，交易人可能收到追繳通知，或觸發期貨商的風險處理機制。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "權益高於維持標準",
          subtitle: "帳戶仍有足夠緩衝",
          description:
            "部位通常可以繼續持有，但仍需注意行情變化與可用資金。",
          tone: "emerald",
          icon: "up",
          items: [
            "尚未觸及追繳門檻",
            "仍可能因行情變動快速惡化",
            "不代表部位沒有風險",
          ],
        },
        {
          title: "權益低於維持標準",
          subtitle: "可能進入追繳或風控程序",
          description:
            "交易人需要補足資金、降低部位，或依期貨商規定處理。",
          tone: "amber",
          icon: "down",
          items: [
            "可能收到追繳通知",
            "可用保證金可能不足",
            "嚴重時可能遭到強制平倉",
          ],
        },
      ],
    },

    {
      type: "heading",
      id: "account-equity",
      content: "帳戶權益如何變化？",
    },
    {
      type: "formula",
      formula: "帳戶權益 ＝ 帳戶餘額 ＋ 未實現損益",
      description:
        "當持倉獲利時，帳戶權益增加；當持倉虧損時，帳戶權益下降。",
    },
    {
      type: "paragraph",
      content:
        "期貨損益會隨行情即時變動，因此帳戶權益也會不斷改變。保證金足夠下單，不代表之後一定能安全持有。",
    },
    {
      type: "infoCard",
      tone: "rose",
      icon: "down",
      title: "虧損會直接侵蝕帳戶權益",
      content:
        "假設帳戶存入 200,000 元，持倉產生 30,000 元未實現虧損，在不考慮其他款項的情況下，帳戶權益會下降到約 170,000 元。",
    },

    {
      type: "heading",
      id: "margin-call",
      content: "什麼是保證金追繳？",
    },
    {
      type: "paragraph",
      content:
        "當帳戶權益低於期貨商規定的維持標準時，可能產生保證金追繳。交易人通常需要在規定期限內補入資金，或降低持有部位。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "補繳資金",
          subtitle: "提高帳戶權益",
          description:
            "將額外資金匯入期貨帳戶，使帳戶恢復到規定的保證金標準。",
          tone: "blue",
          icon: "up",
          items: [
            "提高資金緩衝",
            "部位仍持續承擔市場風險",
            "補錢不代表虧損已經消失",
          ],
        },
        {
          title: "減少部位",
          subtitle: "降低保證金需求",
          description:
            "平掉部分或全部部位，降低帳戶所需的保證金與後續風險。",
          tone: "slate",
          icon: "scale",
          items: [
            "降低持倉口數",
            "部分損益會正式實現",
            "減少行情繼續不利的影響",
          ],
        },
      ],
    },
    {
      type: "warning",
      title: "不要把追繳當成固定等待時間",
      content:
        "市場快速波動時，期貨商可能依風險狀況提前處理部位。實際追繳與強制平倉規則，應以開戶期貨商的契約及風控制度為準。",
    },

    {
      type: "heading",
      id: "forced-liquidation",
      content: "保證金不足會直接強制平倉嗎？",
    },
    {
      type: "paragraph",
      content:
        "當帳戶風險達到期貨商設定的標準時，期貨商可能取消未成交委託，並平掉部分或全部持倉，以避免虧損繼續擴大。",
    },
    {
      type: "callout",
      title: "強制平倉不保證剛好停在零",
      content:
        "若行情跳空、流動性不足或波動過快，實際成交價格可能比預期更差。極端情況下，平倉後帳戶仍可能出現負數或欠款。",
    },

    {
      type: "heading",
      id: "day-trading-margin",
      content: "當沖保證金為什麼比較低？",
    },
    {
      type: "paragraph",
      content:
        "部分期貨商品與交易方式可能適用較低的當沖保證金。這是因為部位原則上必須在指定交易時段內平倉，不允許持有到下一個交易時段。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "一般保證金",
          subtitle: "可依規定持有跨時段部位",
          description:
            "需要準備較完整的風險緩衝，以承擔收盤後或隔夜行情變動。",
          tone: "blue",
          icon: "book",
          items: [
            "可持有較長時間",
            "可能承擔跳空風險",
            "所需保證金通常較高",
          ],
        },
        {
          title: "當沖保證金",
          subtitle: "限定當日沖銷",
          description:
            "通常需要在期貨商規定時間前完成平倉，否則可能被代為處理。",
          tone: "amber",
          icon: "calculator",
          items: [
            "資金門檻可能較低",
            "不能任意留倉",
            "必須確認強制平倉時間",
          ],
        },
      ],
    },
    {
      type: "warning",
      title: "較低保證金不代表較低風險",
      content:
        "契約每跳動一點的損益不會因保證金較低而縮小。使用較低保證金，反而代表同樣的行情波動會造成更高的資金報酬率與虧損率。",
    },

    {
      type: "heading",
      id: "leverage",
      content: "保證金如何產生槓桿？",
    },
    {
      type: "formula",
      formula: "槓桿倍數 ＝ 契約價值 ÷ 實際使用資金",
      description:
        "實際使用資金越少，名目槓桿通常越高，帳戶對行情波動也越敏感。",
    },
    {
      type: "paragraph",
      content:
        "例如一張契約價值為 1,000,000 元，而交易人只使用 100,000 元保證金建立部位，名目槓桿約為 10 倍。",
    },
    {
      type: "infoCard",
      tone: "amber",
      icon: "scale",
      title: "槓桿會同時放大獲利與虧損",
      content:
        "當契約價值變動 1% 時，相對於投入保證金的資金報酬率可能遠高於 1%。行情方向判斷錯誤時，虧損也會以相同方式被放大。",
    },

    {
      type: "heading",
      id: "common-mistakes",
      content: "新手常見的保證金錯誤",
    },
    {
      type: "checklist",
      title: "下單前應避免的觀念",
      columns: 2,
      items: [
        "把保證金誤認為最大可能虧損",
        "帳戶剛好足夠一口就全部下單",
        "只看保證金，不看契約每點價值",
        "不知道原始保證金與維持保證金的差異",
        "誤以為收到追繳後一定有充足時間補錢",
        "使用當沖保證金卻不知道最後平倉時間",
        "忽略期貨商可能採用更高的風控標準",
        "市場劇烈波動時仍維持過高槓桿",
      ],
    },

    {
      type: "heading",
      id: "risk-buffer",
      content: "帳戶應該只放最低保證金嗎？",
    },
    {
      type: "paragraph",
      content:
        "最低保證金只代表建立或維持部位的基本門檻，不代表適合拿來當作完整交易資金。",
    },
    {
      type: "paragraph",
      content:
        "若帳戶只放剛好足夠下單的金額，小幅不利波動就可能大幅降低可用資金，甚至快速接近追繳或強制平倉標準。",
    },
    {
      type: "tip",
      title: "預留波動空間",
      content:
        "交易人應依停損距離、商品每點價值、持倉口數與可承受損失，預留額外資金，而不是只用最低保證金決定可以下幾口。",
    },

    {
      type: "heading",
      id: "before-trading",
      content: "交易前的保證金檢查清單",
    },
    {
      type: "checklist",
      title: "建立部位前先確認",
      columns: 2,
      items: [
        "目前商品最新的原始保證金",
        "目前商品最新的維持保證金",
        "期貨商是否加收額外保證金",
        "一般交易或當沖交易的適用條件",
        "每口契約的每點價值",
        "預計停損點數與最大可能損失",
        "帳戶是否保留足夠的資金緩衝",
        "期貨商追繳與強制平倉規則",
      ],
    },

    {
      type: "calculator",
      title: "不要只看保證金，也要先算可能損益",
      content:
        "輸入商品、進場價格、口數與行情變動範圍，查看不同價格下的淨損益與保證金報酬率。",
      href: "/#calculator",
      buttonText: "使用期貨損益計算機",
    },

    {
      type: "heading",
      id: "key-points",
      content: "本課重點整理",
    },
    {
      type: "checklist",
      columns: 2,
      items: [
        "保證金是履約擔保，不是契約的完整價格",
        "期貨多單與空單都需要保證金",
        "原始保證金用於建立部位",
        "維持保證金是持倉期間的最低權益標準",
        "未實現虧損會降低帳戶權益",
        "保證金不足可能造成追繳或強制平倉",
        "當沖保證金較低，但契約損益不會因此縮小",
        "最低保證金不等於合理的交易資金",
      ],
    },
  ],
};

export default lesson05;