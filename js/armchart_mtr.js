am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    var data = {
      value: 0,
      children: [
        {
          name: "比較材料",
          children: [
            {
              name: "範圍設定",
              value: 10
            },
            {
                name: "數量不限",
                children: [
                    {
                      name: "材料數量",
                      value: 12
                    },
                    {
                      name: "曲線數量",
                      value: 12
                    }
                  ]
              },

            {
                name: "表格性質",
                children: [
                    {
                      name: "機械性質",
                      value: 12
                    },
                    {
                      name: "加工資訊",
                      value: 12
                    },
                    {
                      name: "來源資訊",
                      value: 12
                    }
                  ]
              },
              {
                name: "曲線性質",
                value: 12
              },
          ]
        },
        {
          name: "搜尋材料",
          children: [
            {
              name: "搜尋母體",
              children: [
                {
                  name: "Moldex3D材料庫",
                  value: 3
                },
                {
                  name: "自訂材料庫",
                  value: 3
                },
                {
                  name: "所有材料庫",
                  value: 3
                }
              ]
            },
            {
              name: "搜尋條件",
              children: [
                {
                  name: "填料有無",
                  value: 20
                },
                {
                  name: "來源資訊",
                  value: 20
                },
                {
                  name: "熔融指數",
                  value: 3
                }
              ]
            },
            {
              name: "排序結果",
              value:8
            },
            {
              name: "分頁顯示",
              value:12
            }
          ]
        },
        {
          name: "編輯材料",
          children: [
            {
              name: "全域加密",
              value:12
            },
            {
              name: "跳選步驟",
              value:36
            },
            {
              name: "跨製程",
              children: [
                {
                    name: "射出成型",
                    value:4
                  },
                  {
                    name: "化學發泡",
                    value:3
                  },
                  {
                    name: "粉末射注",
                    value:3
                  },
                  {
                    name: "IC封裝",
                    value:3
                  },
              ]
            },
            {
                name: "單位調整",
                value:10
              },
              {
                name: "鍵盤貼上",
                value:14
              },
          ]
        },
        {
          name: "新增材料",
          children: [
            {
              name: "依類型新增",
              value: 18
            },
            {
              name: "全域加密",
              value: 18
            }
          ]
        },
        {
          name: "檢視材料",
          children: [
            {
              name: "範圍設定",
              children: [
                {
                  name: "模型切換",
                  value: 15
                },
                {
                  name: "軸上下限",
                  value: 25
                },
                {
                  name: "小數位",
                  value: 15
                }
              ]
            },
            {
              name: "風格設定",
              children: [
                {
                  name: "筆畫粗細",
                  value: 5
                },
                {
                  name: "符號顯示",
                  value: 5
                },
                {
                  name: "圖標位置",
                  value: 5
                }
              ]
            }
            ,
            {
              name: "擷取畫面",
              children: [
                {
                  name: "剪貼簿",
                  value: 7.5
                },
                {
                  name: "另存圖檔",
                  value: 7.5
                }
              ]
            },
            {
                name: "方程式",
                value:12
              },
              {
                name: "檢查材料",
                value:20
              },
          ]
        },
        {
            name: "匯入材料",
            children: [
              {
                name: "匯單筆",
                value:10
              },
              {
                name: "匯材料庫",
                value:10
              }
              ,
              {
                name: "路徑修正",
                value:10
              }
            ]
        },
        {
            name: "系統設定",
            children: [
              {
                name: "單位設定",
                value:10
              },
              {
                name: "預設值",
                value:10
              }
              ,
              {
                name: "求助",
                value:10
              }
            ]
        },
        {
            name: "多國語言",
            value: 40
        },
      ]
    };
    
    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
      singleBranchOnly: false,
      downDepth: 2,
      topDepth: 1,
      initialDepth: 1,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      idField: "name",
      linkWithField: "linkWith",
      manyBodyStrength: -10,
      centerStrength: 0.8
    }));
    
    series.get("colors").setAll({
      step: 2
    });
    
    series.links.template.set("strength", 0.5);
    
    series.data.setAll([data]);
    
    series.set("selectedDataItem", series.dataItems[0]);
    
    
    // Make stuff animate on load
    series.appear(1000, 100);
    
    }); // end am5.ready()