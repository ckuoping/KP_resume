let programming_skill = c3.generate({
    bindto: '#programming-skill',
    data: {
        columns: [
            ['網頁開發', 30],
            ['數據分析', 10],
            ['UIUX設計', 30],
            ['軟體專案管理', 30],

        ],
        type: "donut",
        colors: {
            "網頁開發": '#17A589',
            "數據分析": '#FFC300',
            "UIUX設計": '#FF5733',
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
            ['x', 'HTML', 'CSS', 'JavaScript', 'Angular', 'Python', 'Adobe XD'],
            ['程式開發能力', 95, 90, 85, 85, 70, 95, ]
        ],
        type: 'bar',
        colors: { '程式與軟體能力': '#5DADE2' }
    },
    axis: {
        rotated: true,
        x: {
            type: 'category'
        }
    },
});