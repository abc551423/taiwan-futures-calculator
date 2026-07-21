import type { Article } from "@/types/article";

export const lesson07: Article = {
  slug: "futures-profit-calculation",
  lesson: 7,
  title: "期貨損益怎麼算？做多、做空與淨損益完整教學",
  description:
    "學會計算期貨做多、做空、多口部位的毛損益，以及扣除手續費與期交稅後的實際淨損益。",
  readingTime: 7,
  updatedAt: "2026-07-22",
  keywords: [
    "期貨損益計算",
    "台指期損益計算",
    "期貨一點多少錢",
    "期貨做多損益",
    "期貨做空損益",
    "期貨淨損益",
    "期貨報酬率",
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "Lesson 7",
      title: "方向、點數、每點價值與口數，決定期貨損益",
      description:
        "期貨損益的基本概念並不複雜。只要先判斷做多或做空，再計算進出場相差多少點，最後乘上商品每點價值與交易口數，就能得到毛損益。",
      align: "left",
    },

    {
      type: "heading",
      id: "four-elements",
      content: "計算期貨損益需要哪些資料？",
    },
    {
      type: "paragraph",
      content:
        "計算一筆期貨交易的損益前，需要先知道交易方向、進場價格、出場價格、商品每點價值與交易口數。",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          label: "交易方向",
          value: "做多／做空",
          description: "決定價格上漲或下跌時是獲利還是虧損",
        },
        {
          label: "價格差距",
          value: "進出場點差",
          description: "出場價格與進場價格之間的差距",
        },
        {
          label: "每點價值",
          value: "元／點",
          description: "不同期貨商品具有不同的每點金額",
        },
        {
          label: "交易規模",
          value: "持倉口數",
          description: "口數增加，獲利與虧損會等比例放大",
        },
      ],
    },
    {
      type: "formula",
      formula: "期貨毛損益 ＝ 價格變動點數 × 每點價值 × 口數",
      description:
        "做多與做空的差別，在於價格變動點數的計算方向不同。",
    },

    {
      type: "heading",
      id: "long-position",
      content: "期貨做多的損益怎麼算？",
    },
    {
      type: "paragraph",
      content:
        "做多代表交易人預期價格上漲，先買進期貨契約，再透過賣出平倉。出場價格高於進場價格時獲利，低於進場價格時虧損。",
    },
    {
      type: "formula",
      formula:
        "做多毛損益 ＝（出場價格 − 進場價格）× 每點價值 × 口數",
      description:
        "計算結果為正數代表獲利，負數代表虧損。",
    },
    {
      type: "infoCard",
      tone: "emerald",
      icon: "up",
      title: "小台做多範例",
      content:
        "以 23,000 點買進 1 口小台，於 23,120 點賣出平倉。價格上漲 120 點，小台每點價值為 50 元，因此毛利為 120 × 50 × 1 ＝ 6,000 元。",
    },
    {
      type: "formula",
      formula: "（23,120 − 23,000）× 50 × 1 ＝ 6,000 元",
      description: "尚未扣除進出場手續費與期貨交易稅。",
    },

    {
      type: "heading",
      id: "long-loss",
      content: "做多遇到下跌時怎麼算？",
    },
    {
      type: "paragraph",
      content:
        "做多之後，如果出場價格低於進場價格，價格差距就會呈現負數，因此計算結果會是虧損。",
    },
    {
      type: "infoCard",
      tone: "rose",
      icon: "down",
      title: "小台做多虧損範例",
      content:
        "以 23,000 點買進 1 口小台，於 22,920 點賣出平倉。價格下跌 80 點，因此毛損益為負 80 × 50 ＝負 4,000 元。",
    },
    {
      type: "formula",
      formula: "（22,920 − 23,000）× 50 × 1 ＝ −4,000 元",
      description: "負號代表這筆交易產生虧損。",
    },

    {
      type: "heading",
      id: "short-position",
      content: "期貨做空的損益怎麼算？",
    },
    {
      type: "paragraph",
      content:
        "做空代表交易人預期價格下跌，先賣出期貨契約，再透過買進平倉。出場價格低於進場價格時獲利，出場價格高於進場價格時虧損。",
    },
    {
      type: "formula",
      formula:
        "做空毛損益 ＝（進場價格 − 出場價格）× 每點價值 × 口數",
      description:
        "做空的價格相減順序與做多相反，應使用進場價格減去出場價格。",
    },
    {
      type: "infoCard",
      tone: "blue",
      icon: "down",
      title: "小台做空範例",
      content:
        "以 23,000 點賣出 1 口小台，於 22,850 點買進平倉。價格下跌 150 點，因此毛利為 150 × 50 × 1 ＝ 7,500 元。",
    },
    {
      type: "formula",
      formula: "（23,000 − 22,850）× 50 × 1 ＝ 7,500 元",
      description: "做空時行情下跌，交易人獲利。",
    },

    {
      type: "heading",
      id: "short-loss",
      content: "做空遇到上漲時怎麼算？",
    },
    {
      type: "paragraph",
      content:
        "做空之後，如果市場價格上漲，平倉價格會高於原本的賣出價格，因此計算結果會呈現負數。",
    },
    {
      type: "infoCard",
      tone: "rose",
      icon: "up",
      title: "小台做空虧損範例",
      content:
        "以 23,000 點賣出 1 口小台，於 23,100 點買進平倉。價格上漲 100 點，因此毛損益為負 100 × 50 ＝負 5,000 元。",
    },
    {
      type: "formula",
      formula: "（23,000 − 23,100）× 50 × 1 ＝ −5,000 元",
      description: "做空時行情上漲，交易人產生虧損。",
    },

    {
      type: "heading",
      id: "long-short-comparison",
      content: "做多與做空的計算差異",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "做多",
          subtitle: "先買進，再賣出",
          description:
            "預期市場價格上漲。出場價格高於進場價格時獲利。",
          tone: "emerald",
          icon: "up",
          items: [
            "公式：出場價減進場價",
            "價格上漲時獲利",
            "價格下跌時虧損",
          ],
        },
        {
          title: "做空",
          subtitle: "先賣出，再買進",
          description:
            "預期市場價格下跌。出場價格低於進場價格時獲利。",
          tone: "rose",
          icon: "down",
          items: [
            "公式：進場價減出場價",
            "價格下跌時獲利",
            "價格上漲時虧損",
          ],
        },
      ],
    },
    {
      type: "tip",
      title: "不必死背兩個公式",
      content:
        "可以先思考行情是否朝持倉有利方向移動，再計算相差點數。方向正確就是正數，方向錯誤就是負數，最後再乘上每點價值與口數。",
    },

    {
      type: "heading",
      id: "multiple-contracts",
      content: "交易多口期貨時怎麼算？",
    },
    {
      type: "paragraph",
      content:
        "期貨損益會隨交易口數等比例增加。相同價格變動下，交易 2 口的損益是 1 口的兩倍，交易 5 口則是五倍。",
    },
    {
      type: "infoCard",
      tone: "amber",
      icon: "calculator",
      title: "多口小台範例",
      content:
        "以 23,000 點買進 3 口小台，於 23,100 點平倉。每口獲利 100 × 50 ＝ 5,000 元，3 口毛利合計為 15,000 元。",
    },
    {
      type: "formula",
      formula: "（23,100 − 23,000）× 50 × 3 ＝ 15,000 元",
      description:
        "口數會同時放大獲利與虧損，不應只因保證金足夠就增加口數。",
    },
    {
      type: "warning",
      title: "口數不是免費放大獲利",
      content:
        "當行情方向判斷錯誤時，虧損同樣會依口數等比例增加。決定口數前，應先計算停損發生時的最大可能損失。",
    },

    {
      type: "heading",
      id: "gross-net-profit",
      content: "毛損益與淨損益有什麼不同？",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "毛損益",
          subtitle: "尚未扣除交易成本",
          description:
            "只計算進出場價格差距、商品每點價值與交易口數。",
          tone: "blue",
          icon: "calculator",
          items: [
            "反映價格變動造成的損益",
            "未扣除手續費",
            "未扣除期貨交易稅",
          ],
        },
        {
          title: "淨損益",
          subtitle: "實際交易結果",
          description:
            "從毛損益中扣除手續費、期貨交易稅及其他相關成本。",
          tone: "emerald",
          icon: "scale",
          items: [
            "已扣除交易成本",
            "更接近帳戶實際變化",
            "應作為評估交易成果的依據",
          ],
        },
      ],
    },
    {
      type: "formula",
      formula: "淨損益 ＝ 毛損益 − 手續費 − 期貨交易稅",
      description:
        "即使毛損益為正，扣除成本後的實際淨利也會比較低。",
    },

    {
      type: "heading",
      id: "net-profit-example",
      content: "淨損益計算範例",
    },
    {
      type: "paragraph",
      content:
        "假設某筆交易的毛利為 5,000 元，進出場手續費合計為 80 元，期貨交易稅合計為 25 元。",
    },
    {
      type: "formula",
      formula: "5,000 − 80 − 25 ＝ 4,895 元",
      description: "這筆交易扣除成本後的淨利為 4,895 元。",
    },
    {
      type: "callout",
      title: "短線交易尤其要注意成本",
      content:
        "當每筆交易只賺少量點數時，手續費與期交稅占毛利的比例會更高。交易次數越多，累積成本對績效的影響也越明顯。",
    },

    {
      type: "heading",
      id: "unrealized-realized",
      content: "未實現損益與已實現損益",
    },
    {
      type: "comparison",
      columns: [
        {
          title: "未實現損益",
          subtitle: "部位尚未平倉",
          description:
            "依目前市場價格估算的浮動損益，會隨行情持續變化。",
          tone: "amber",
          icon: "info",
          items: [
            "尚未完成交易",
            "行情變動時會持續變化",
            "會影響帳戶權益與可用保證金",
          ],
        },
        {
          title: "已實現損益",
          subtitle: "部位已經平倉",
          description:
            "完成平倉後確定下來的交易結果，不再受到後續行情影響。",
          tone: "slate",
          icon: "book",
          items: [
            "交易已經結束",
            "損益金額已確定",
            "後續行情不再影響該筆部位",
          ],
        },
      ],
    },
    {
      type: "warning",
      title: "帳面獲利不等於已經賺到",
      content:
        "只要部位尚未平倉，未實現獲利仍可能因行情反轉而縮小，甚至轉為虧損。實際結果應以平倉後的已實現淨損益為準。",
    },

    {
      type: "heading",
      id: "margin-return",
      content: "期貨報酬率怎麼算？",
    },
    {
      type: "paragraph",
      content:
        "期貨交易常以實際使用的保證金作為資金基礎，計算這筆交易相對於投入資金的報酬率。",
    },
    {
      type: "formula",
      formula: "保證金報酬率 ＝ 淨損益 ÷ 使用保證金 × 100%",
      description:
        "保證金報酬率可以反映資金變化幅度，但不代表契約標的本身上漲或下跌相同百分比。",
    },
    {
      type: "infoCard",
      tone: "blue",
      icon: "scale",
      title: "保證金報酬率範例",
      content:
        "假設使用 100,000 元保證金建立部位，平倉後淨利為 5,000 元，保證金報酬率為 5%。若淨虧損 5,000 元，報酬率則為負 5%。",
    },
    {
      type: "formula",
      formula: "5,000 ÷ 100,000 × 100% ＝ 5%",
      description:
        "期貨具有槓桿，因此保證金報酬率的波動可能明顯大於標的指數的漲跌幅。",
    },

    {
      type: "heading",
      id: "break-even",
      content: "價格回到進場點，為什麼還是虧錢？",
    },
    {
      type: "paragraph",
      content:
        "如果進場與出場價格完全相同，價格變動造成的毛損益是零，但交易人仍然需要支付手續費與期貨交易稅，因此淨損益會是負數。",
    },
    {
      type: "infoCard",
      tone: "rose",
      icon: "down",
      title: "真正的損益兩平點",
      content:
        "行情必須先朝有利方向移動足以覆蓋全部交易成本，淨損益才會到達零。只回到原始進場價格，並不代表實際損益兩平。",
    },

    {
      type: "heading",
      id: "common-errors",
      content: "新手常見的損益計算錯誤",
    },
    {
      type: "checklist",
      title: "計算時應避免這些錯誤",
      columns: 2,
      items: [
        "做空時仍使用出場價減進場價",
        "忘記乘上商品每點價值",
        "交易多口卻只計算一口損益",
        "把毛損益當成實際淨損益",
        "只扣手續費，忘記期貨交易稅",
        "把保證金誤認為最大虧損",
        "只計算獲利情境，沒有計算停損損失",
        "用未實現獲利評估最終交易成果",
      ],
    },

    {
      type: "heading",
      id: "calculation-process",
      content: "期貨損益計算步驟",
    },
    {
      type: "checklist",
      title: "依照這個順序計算",
      columns: 1,
      items: [
        "確認交易方向是做多還是做空",
        "計算進場與出場之間相差多少點",
        "確認交易商品的每點價值",
        "乘上實際持有的交易口數",
        "得到尚未扣除成本的毛損益",
        "扣除進出場手續費與期貨交易稅",
        "以淨損益評估實際交易結果",
      ],
    },

    {
      type: "calculator",
      title: "直接試算期貨淨損益",
      content:
        "選擇大台、小台或微台，輸入進場價格、交易方向與口數，即可查看不同出場價格下的淨損益與保證金報酬率。",
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
        "做多使用出場價格減去進場價格",
        "做空使用進場價格減去出場價格",
        "價格點差需要乘上每點價值與口數",
        "交易口數會等比例放大獲利與虧損",
        "毛損益尚未扣除交易成本",
        "淨損益才是實際交易結果",
        "未平倉部位顯示的是未實現損益",
        "保證金報酬率不等於指數漲跌幅",
      ],
    },
  ],
};

export default lesson07;