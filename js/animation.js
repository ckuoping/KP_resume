let programming_skill = c3.generate({
    bindto: '#programming-skill',
    data: {
        columns: [
            ['網頁開發', 30],
            ['大數據分析', 25],
            ['用戶體驗設計', 25],
            ['軟體專案管理', 20],

        ],
        type: "donut",
        colors: {
            "網頁開發": '#17A589',
            "大數據分析": '#FFC300',
            "用戶體驗設計": '#FF5733',
            "軟體專案管理": '#C70039'
        }
    },
    donut: {
        title: "工作能力"
    }
});



let front_end_skill = c3.generate({
    bindto: '#design-skill',
    data: {
        x: 'x',
        columns: [
            ['x', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Linux', 'Unity C#'],
            ['程式開發能力', 95, 90, 85, 85, 60, 65, 70]
        ],
        type: 'bar',
        colors: { '程式開發能力': '#5DADE2' }
    },
    axis: {
        rotated: true,
        x: {
            type: 'category'
        }
    },
});