import type { Article } from "@/types/article";

export const lesson08: Article = {
  slug: "futures-leverage",
  lesson: 8,
  title: "期貨槓桿怎麼算？契約價值與資金風險完整解析",
  description:
    "了解期貨槓桿如何形成、契約價值與保證金的關係，以及為什麼指數小幅波動可能造成帳戶資金大幅變化。",
  readingTime: 8,
  updatedAt: "2026-07-22",
  keywords: [
    "期貨槓桿",
    "台指期槓桿",
    "期貨槓桿怎麼算",
    "期貨契約價值",
    "保證金槓桿",
    "期貨風險",
    "有效槓桿",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 8",
      title: "槓桿不是額外獲利，而是放大資金波動",
      description:
        "期貨交易只需要準備部分保證金，就能控制價值更高的契約。這種資金與契約價值之間的倍數關係，就是槓桿。槓桿不會提高判斷正確率，只會讓獲利與虧損更快反映在帳戶上。",
      align: "left",
    },

    {
      type: "heading",
      id: "what-is-leverage",
      content: "什麼是期貨槓桿？",
    },
    {
      type: "paragraph",
      content:
        "期貨槓桿是指交易人使用較少的實際資金，控制價值更高的期貨契約。交易人不需要支付完整契約價值，只需要存入符合規定的保證金，就能建立一整口期貨部位。",
    },
    {
      type: "paragraph",
      content:
        "雖然下單時只使用部分資金，但期貨損益仍然按照完整契約的價格變動計算。因此，行情只要出現小幅波動，相對於帳戶資金的獲利率或虧損率就可能非常明顯。",
    },
    {
      type: "callout",
      title: "槓桿不會改變每點價值",
      content:
        "不論帳戶放入多少資金，大台、小台與微台的每點價值都不會改變。資金越少，只代表相同損益占帳戶資金的比例越高。",
    },

    {
      type: "heading",
      id: "contract-value",
      content: "先了解期貨契約價值",
    },
    {
      type: "paragraph",
      content:
        "計算槓桿前，必須先知道一口期貨部位實際控制多少市場價值。台指期的契約價值由指數點位、每點價值與交易口數共同決定。",
    },
    {
      type: "formula",
      formula: "契約價值 ＝ 期貨點位 × 每點價值 × 口數",
      description:
        "契約價值也可稱為名目價值，代表部位實際參與價格波動的金額。",
    },
    {
      type: "infoCard",
      tone: "blue",
      icon: "calculator",
      title: "小台契約價值範例",
      content:
        "假設小台指數為 23,000 點，每點價值為 50 元。交易 1 口小台的契約價值為 23,000 × 50 ＝ 1,150,000 元。",
    },
    {
      type: "formula",
      formula: "23,000 × 50 × 1 ＝ 1,150,000 元",
      description:
        "這不代表交易人需要支付 115 萬元，而是這一口部位控制約 115 萬元的名目價值。",
    },

    {
      type: "heading",
      id: "leverage-formula",
      content: "期貨槓桿倍數怎麼算？",
    },
    {
      type: "formula",
      formula: "槓桿倍數 ＝ 契約價值 ÷ 實際投入資金",
      description:
        "投入資金可以依分析目的使用保證金、帳戶權益，或實際分配給該筆交易的資金。",
    },
    {
      type: "infoCard",
      tone: "amber",
      icon: "scale",
      title: "槓桿計算範例",
      content:
        "假設一口小台的契約價值為 1,150,000 元，交易人使用 115,000 元資金持有部位，名目槓桿約為 10 倍。",
    },
    {
      type: "formula",
      formula: "1,150,000 ÷ 115,000 ＝ 10 倍",
      description:
        "代表契約價格變動 1% 時，相對於投入資金的損益幅度約為 10%，尚未考慮交易成本與其他因素。",
    },

    {
      type: "heading",
      id: "price-movement",
      content: "為什麼指數只動一點，帳戶卻變動很多？",
    },
    {
      type: "paragraph",
      content:
        "期貨損益是依照完整契約價值計算，但交易人實際投入的資金通常只是契約價值的一部分。這使得標的價格的小幅波動，換算成資金報酬率後會被放大。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "標的價格變化",
          subtitle: "以完整契約價值計算",
          description:
            "指數上漲或下跌的幅度，反映期貨契約本身的價格變化。",
          tone: "blue",
          icon: "book",
          items: [
            "例如指數變動 1%",
            "依完整契約價值產生損益",
            "不會因帳戶資金較少而縮小",
          ],
        },
        {
          title: "帳戶資金變化",
          subtitle: "相對投入資金計算",
          description:
            "同一筆損益占投入資金的比例，會隨槓桿倍數增加而放大。",
          tone: "amber",
          icon: "scale",
          items: [
            "10 倍槓桿約放大為 10%",
            "20 倍槓桿約放大為 20%",
            "獲利與虧損都會被放大",
          ],
        },
      ],
    },
    {
      type: "formula",
      formula: "資金報酬率約等於標的漲跌幅 × 槓桿倍數",
      description:
        "這是簡化估算，實際結果仍會受到進出場價格、交易成本、資金變化與保證金制度影響。",
    },

    {
      type: "heading",
      id: "leverage-example",
      content: "槓桿放大損益的實際範例",
    },
    {
      type: "paragraph",
      content:
        "假設交易人以 115,000 元資金持有一口契約價值 1,150,000 元的小台，槓桿約為 10 倍。",
    },
    {
      type: "stats",
      columns: 3,
      items: [
        {
          label: "契約價值",
          value: "115 萬元",
          description: "一口小台實際控制的名目價值",
        },
        {
          label: "投入資金",
          value: "11.5 萬元",
          description: "實際用於承擔部位風險的資金",
        },
        {
          label: "槓桿倍數",
          value: "約 10 倍",
          description: "契約價值除以投入資金",
        },
      ],
    },
    {
      type: "infoCard",
      tone: "emerald",
      icon: "up",
      title: "行情朝有利方向變動",
      content:
        "若契約價值上漲約 1%，部位毛利約為 11,500 元。相對於 115,000 元投入資金，報酬率約為正 10%。",
    },
    {
      type: "infoCard",
      tone: "rose",
      icon: "down",
      title: "行情朝不利方向變動",
      content:
        "若契約價值下跌約 1%，部位毛損失約為 11,500 元。相對於 115,000 元投入資金，虧損率約為負 10%。",
    },
    {
      type: "warning",
      title: "市場不用大跌，帳戶就可能重傷",
      content:
        "在高槓桿狀態下，標的只要出現數個百分點的不利變動，就可能造成帳戶資金大幅虧損，甚至接近追繳或強制平倉標準。",
    },

    {
      type: "heading",
      id: "nominal-effective-leverage",
      content: "名目槓桿與實際槓桿有什麼差別？",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "名目槓桿",
          subtitle: "依最低或實際保證金計算",
          description:
            "用契約價值除以下單所使用的保證金，常用來描述商品制度提供的槓桿程度。",
          tone: "blue",
          icon: "calculator",
          items: [
            "反映制度上的資金門檻",
            "容易用來比較不同商品",
            "不一定等於交易人的真實風險",
          ],
        },
        {
          title: "實際槓桿",
          subtitle: "依整體帳戶資金計算",
          description:
            "用所有持倉的契約價值，除以帳戶實際權益，更能反映交易人承擔的整體風險。",
          tone: "amber",
          icon: "scale",
          items: [
            "會隨帳戶權益變動",
            "增加口數時會提高",
            "虧損後可能被動升高",
          ],
        },
      ],
    },
    {
      type: "formula",
      formula: "實際槓桿 ＝ 全部持倉契約價值 ÷ 帳戶權益",
      description:
        "評估整體風險時，使用帳戶權益計算通常比只看最低保證金更有意義。",
    },

    {
      type: "heading",
      id: "same-position-different-risk",
      content: "同樣一口期貨，風險為什麼可能不同？",
    },
    {
      type: "paragraph",
      content:
        "兩位交易人即使持有完全相同的一口期貨，因為帳戶資金不同，實際槓桿與可承受波動也會不同。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "帳戶資金較充足",
          subtitle: "實際槓桿較低",
          description:
            "相同損益占帳戶資金的比例較小，能承受較大的短期價格波動。",
          tone: "emerald",
          icon: "up",
          items: [
            "資金緩衝較大",
            "較不容易接近追繳門檻",
            "仍然需要停損與風險控制",
          ],
        },
        {
          title: "帳戶只放最低資金",
          subtitle: "實際槓桿較高",
          description:
            "相同損益占帳戶資金的比例較大，小幅不利波動就可能明顯侵蝕權益。",
          tone: "rose",
          icon: "down",
          items: [
            "可承受波動較小",
            "容易出現保證金不足",
            "較可能被迫提前平倉",
          ],
        },
      ],
    },
    {
      type: "callout",
      title: "商品相同，不代表資金風險相同",
      content:
        "真正影響帳戶風險的，不只是交易哪一種商品，還包括口數、帳戶權益、停損距離與資金配置。",
    },

    {
      type: "heading",
      id: "lower-margin",
      content: "保證金越低，交易越划算嗎？",
    },
    {
      type: "paragraph",
      content:
        "較低的保證金只能降低建立部位的資金門檻，不會降低契約本身的損益速度。若交易人因此增加口數或減少帳戶資金，實際槓桿反而會提高。",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "降低資金門檻",
          subtitle: "提高資金使用效率",
          description:
            "交易人不需要支付完整契約價值，可以保留部分資金作為其他用途或風險緩衝。",
          tone: "blue",
          icon: "calculator",
          items: [
            "資金運用較靈活",
            "可使用較少資金建立部位",
            "適合具備風控能力的交易人",
          ],
        },
        {
          title: "提高槓桿風險",
          subtitle: "帳戶對波動更敏感",
          description:
            "若只存入最低所需資金，相同點數損益會占帳戶更高比例。",
          tone: "rose",
          icon: "down",
          items: [
            "虧損率快速放大",
            "可用保證金下降更快",
            "容易受到短期波動影響",
          ],
        },
      ],
    },
    {
      type: "warning",
      title: "最低保證金不是建議投入資金",
      content:
        "最低保證金只是建立部位的制度門檻，不代表這個金額足以承受正常行情波動，也不代表交易人最多只會虧損這筆金額。",
    },

    {
      type: "heading",
      id: "position-size",
      content: "槓桿和交易口數有什麼關係？",
    },
    {
      type: "paragraph",
      content:
        "在帳戶資金不變的情況下，持倉口數越多，總契約價值越高，實際槓桿也會同步提高。",
    },
    {
      type: "formula",
      formula: "總契約價值 ＝ 單口契約價值 × 持倉口數",
      description:
        "口數增加一倍，總契約價值、每點損益與整體風險通常也會增加一倍。",
    },
    {
      type: "infoCard",
      tone: "amber",
      icon: "scale",
      title: "增加口數的影響",
      content:
        "假設帳戶權益為 300,000 元，一口小台契約價值為 1,150,000 元。持有一口時實際槓桿約為 3.83 倍，增加至三口後，實際槓桿便提高至約 11.5 倍。",
    },
    {
      type: "formula",
      formula: "1,150,000 × 3 ÷ 300,000 ＝ 11.5 倍",
      description:
        "即使帳戶仍足以支付保證金，整體風險可能已大幅提高。",
    },

    {
      type: "heading",
      id: "loss-increases-leverage",
      content: "虧損為什麼會讓槓桿越來越高？",
    },
    {
      type: "paragraph",
      content:
        "持倉產生未實現虧損時，帳戶權益會下降。如果部位口數與契約價值沒有同步降低，分母變小後，實際槓桿就會被動升高。",
    },
    {
      type: "formula",
      formula: "實際槓桿 ＝ 契約價值 ÷ 下降後的帳戶權益",
      description:
        "帳戶權益越低，相同部位所形成的槓桿越高，後續行情波動對帳戶的影響也越大。",
    },
    {
      type: "warning",
      title: "虧損部位加碼可能造成槓桿失控",
      content:
        "帳戶權益已經下降時，再增加相同方向的部位，會同時提高契約價值並降低資金緩衝，使實際槓桿快速上升。",
    },

    {
      type: "heading",
      id: "leverage-and-stop-loss",
      content: "槓桿應該如何搭配停損？",
    },
    {
      type: "paragraph",
      content:
        "交易人不應只用保證金決定可以下幾口，而應先決定單筆交易最多願意承受多少損失，再依停損點數與每點價值反推合理口數。",
    },
    {
      type: "formula",
      formula: "預估停損金額 ＝ 停損點數 × 每點價值 × 口數",
      description:
        "停損金額應落在交易人可以承受的範圍內，再確認帳戶保證金是否足夠。",
    },
    {
      type: "infoCard",
      tone: "blue",
      icon: "calculator",
      title: "先決定風險，再決定口數",
      content:
        "假設交易人單筆最多願意虧損 5,000 元，小台預計停損 100 點，每口風險為 100 × 50 ＝ 5,000 元，因此這筆交易最多只能使用一口小台。",
    },
    {
      type: "formula",
      formula: "5,000 ÷（100 × 50）＝ 1 口",
      description:
        "這種方式比單純用帳戶可以支付多少保證金來決定口數更合理。",
    },

    {
      type: "heading",
      id: "common-mistakes",
      content: "新手常見的槓桿錯誤",
    },
    {
      type: "checklist",
      title: "這些觀念容易造成風險失控",
      columns: 2,
      items: [
        "把最低保證金當成最大可能虧損",
        "帳戶能下幾口就全部下滿",
        "只計算獲利放大，忽略虧損也會放大",
        "只看商品名稱，不計算總契約價值",
        "使用當沖保證金後增加過多口數",
        "帳戶虧損後仍維持相同部位",
        "虧損時繼續加碼導致實際槓桿升高",
        "沒有根據停損金額決定交易口數",
      ],
    },

    {
      type: "heading",
      id: "leverage-checklist",
      content: "下單前的槓桿檢查清單",
    },
    {
      type: "checklist",
      title: "建立部位前先確認",
      columns: 2,
      items: [
        "單口契約目前的名目價值",
        "全部持倉合計的契約價值",
        "帳戶目前的實際權益",
        "持倉後的實際槓桿倍數",
        "每跳一點會產生多少損益",
        "預設停損點數與停損金額",
        "帳戶是否保留足夠資金緩衝",
        "極端行情下是否仍能承受損失",
      ],
    },

    {
      type: "calculator",
      title: "先看看行情波動會造成多少損益",
      content:
        "選擇期貨商品、輸入進場價格與持倉口數，查看不同價格變化下的淨損益與保證金報酬率。",
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
        "槓桿來自契約價值高於實際投入資金",
        "契約價值等於點位乘以每點價值與口數",
        "槓桿倍數等於契約價值除以投入資金",
        "槓桿會同時放大獲利與虧損",
        "帳戶資金越少，實際槓桿通常越高",
        "持倉口數增加會提高總契約價值",
        "虧損降低帳戶權益後，實際槓桿可能被動升高",
        "應先決定可承受損失，再決定交易口數",
      ],
    },
  ],
};

export default lesson08;