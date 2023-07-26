const lang_btn = document.querySelector('.lang-btn')
const lang_obj = 
[
    {
        item : document.getElementById('my-projects'),
        chinese : '作品專案',
        english : 'Projects'
    },
    {
        item : document.getElementById('my-skills'),
        chinese : '專業技能',
        english : 'Skills'
    },
    {
        item : document.getElementById('my-jobs'),
        chinese : '工作經歷',
        english : 'Experience'
    },
    {
        item : document.getElementById('my-education'),
        chinese : '教育研習',
        english : 'Education'
    },
    {
        item : document.querySelector('.personal-text-info .title'),
        chinese : 'UIUX設計 | 前端開發 | 資料分析視覺化',
        english : 'UIUX | Web Development | Data Visualization'
    },
    {
        item : document.querySelector('.personal-text-info .description'),
        chinese : '你好，我是張國屏，我擁有UIUX與前端開發的實務經驗與開發能力。歡迎參考以下連結了解我的互動介面設計、程式與資料分析相關作品。',
        english : 'My name is Kuo-Ping (Marvin Chang). I am a UI developer with over 5 year experience in UIUX and Web development. Feel free to read my online resume.'
    },
    {
        item : document.querySelector('.expertise-text-info .expertise-title'),
        chinese : '工作技能與專業能力',
        english : 'Expertise'.toUpperCase() 
    },
    {
        item : document.querySelector('.expertise-text-info .expertise-description'),
        chinese : '專長軟體系統的UIUX設計與開發；負責過的系統包含桌上型應用程式、網頁應用程式以及ARVR平台。因應工作性質與自我精進，我具備使用者研究、原型設計與程式開發等工作能力。',
        english : 'Marvin is specialized at UIUX design and UI development. He is equipped with the skill of user research, design and programming. He has experienced with design among deskop applications, web applications and ARVR installations. Currently, he worked as a deputy project manager and senior UIUX designer for Moldex3D Studio.'
    },
    {
        item : document.querySelector('.expertise-text-info .box1 span'),
        chinese : 'UIUX設計',
        english : 'UIUX\nDesign'
    },
    {
        item : document.querySelector('.expertise-text-info .box2 span'),
        chinese : '前端開發',
        english : 'Web\nDevelopment'
    },
    {
        item : document.querySelector('.expertise-text-info .box3 span'),
        chinese : '專案管理',
        english : 'Project\nManagement'
    },
    {
        item : document.querySelector('.expertise-text-info .box4 span'),
        chinese : '數據分析',
        english : 'Data\nAnalysis'
    },
    {
        item : document.querySelector('.portfolio-text-info .portfolio-title'),
        chinese : '來看看我的Portfolios吧!',
        english : 'Portfolio'.toUpperCase() 
    },
    {
        item : document.querySelector('.portfolio-text-info .portfolio-description'),
        chinese : '我平時喜歡研究各種介面互動行為和UI元件，並應用在前端程式上；定期規畫主題性的小專案製作UIUX Prototypes。更多內容可以參考我的Github:',
        english : 'Marvin is enthusiastic about studying different UI components and their interactive responses. Unlike typical designers, Marvin is able to implement his design ideas as side projects on his Github:'
    },
    {
        item : document.querySelector('.skill-section .skill-title'),
        chinese : '專業技能',
        english : 'Skills'
    },
    {
        item : document.querySelector('.skill-section .skills .skill .skill-name .skill-1'),
        chinese : '網頁程式開發',
        english : 'Web Development'
    },
    {
        item : document.querySelector('.skill-section .skills .skill .skill-description.skill-1'),
        chinese : '具備前端網頁的開發能力。熟悉Angular、HTML、CSS 和 JavaScript；擅長網頁切版、RWD、操作 DOM 事件、串接 API取得即時JSON資料，並使用Flask架站。',
        english : 'Skilled in web page layout, document object model(DOM), and responsive design(RWD). Experienced with Node.js to integrate with RESTful APIs for complete web applications. Developed with frameworks such as Angluar, Bootstrap and Chart.js.'
    },
    {
        item : document.querySelector('.skill-section .skills .skill .skill-name .skill-2'),
        chinese : 'UIUX設計',
        english : 'UIUX Research and Design'
    },
    {
        item : document.querySelector('.skill-section .skills .skill .skill-description.skill-2'),
        chinese : '擅長使用者經驗研究和評估法。熟悉AdobeXD與相關系列軟體製作Wireframe和Mockup。也具有Leap Motion和Unity製作虛實整合與人機互動的經驗。',
        english : 'Strong in user analysis to define user needs and product requirements. Experienced with usability tests to evaluate the platform functionality. Good at translating ideas into wireframes and mockups that lead to intuitive UX.'
    }
    ,
    {
        item : document.querySelector('.skill-section .skills .skill .skill-name .skill-3'),
        chinese : '專案管理',
        english : 'Project Management'
    },
    {
        item : document.querySelector('.skill-section .skills .skill .skill-description.skill-3'),
        chinese : '在各工作階段也身兼專案管理者，平衡與客戶廠商的應對以及內部的開發需求。此外也具備Python資料分析、機器學習與視覺化的相關經驗。',
        english : 'Experienced with Objective and Key Results(OKR) for program management. Good at communicating with cross-functional teams. Strong in delivering spec documents and scheduling development plan.'
    },
    {
        item : document.querySelector('.experience-section .work-title'),
        chinese : '工作經歷',
        english : 'Experience'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .job-title.work-1'),
        chinese : '高級設計師',
        english : 'Deputy Project Manager'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .company .work-1'),
        chinese : 'Moldex3D 科盛科技',
        english : 'Moldex3D'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .duration .work-1'),
        chinese : '2020 年 9 月 - 在職中',
        english : 'Sep 2020 to Present'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .experience-detail.work-1'),
        chinese : '1. CAE模流分析桌上型應用程式的UIUX設計與功能優化。\n2. Angular網頁應用程式前端開發(網站內容為高分子材料的檢索)。\n3. 交大資工UIUX產學合作負責。',
        english : '1. Front-end development and UIUX of Moldx3D Material Wizard.\n2. UI design and implementation of Moldex3D Everything(auto-analysis).\n3. User research on CAD and CAE users.'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .check-project .work-1'),
        chinese : '工作成果',
        english : 'Demo'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .job-title.work-2'),
        chinese : 'VR研究計畫助理',
        english : 'Research Assistant'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .company .work-2'),
        chinese : '臺灣師範大學',
        english : 'NTNU'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .duration .work-2'),
        chinese : '2019 年 1 月 - 2019 年 10 月',
        english : 'Jan 2019 to Oct 2019'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .experience-detail.work-2'),
        chinese : '1. VR師資培訓系統之交互介面設計與操作行為研究。\n2. 虛擬實境應用於教師課堂管理能力訓練之研究計畫管理。',
        english : '1. UIUX and user research of VR classroom for teacher training.\n2. Spec documents, development plan and evaluation of user needs.'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .check-project .work-2'),
        chinese : '工作成果',
        english : 'Demo'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .job-title.work-3'),
        chinese : '研發工程師',
        english : 'R&D Engineer'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .company .work-3'),
        chinese : '工業技術研究院',
        english : 'ITRI'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .duration .work-3'),
        chinese : '2017 年 11 月 - 2019 年 1 月',
        english : 'Nov 2017 to Jan 2019'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .experience-detail.work-3'),
        chinese : '1. OLED顯示面板UIUX設計與Unity互動效果開發。\n2. Python和PyQt影像資料視覺化UI設計開發。\n3. OLED透明顯示器結合影像辨識之專利發表。',
        english : '1. UI developmenot of transparent display system using PyQt and VTK.\n2. User and marketing research of transparent display.\n3. Patent drafting and paper publication.'
    },
    {
        item : document.querySelector('.experience-section .experience .experience-item .check-project .work-3'),
        chinese : '工作成果',
        english : 'Demo'
    },
    {
        item : document.querySelector('.education-text-info .education-title'),
        chinese : '研習與學術經歷',
        english : 'Education'
    },
    {
        item : document.querySelector('.education-text-info .edu-5 .edu-org'),
        chinese : '大數據分析 自強工業科學基金會',
        english : 'Big Data and Cloud Computing, TCFST'
    },
    {
        item : document.querySelector('.education-text-info .edu-5 .edu-descript'),
        chinese : '錄取清華大學自強基金會的大數據分析師養成班，完成368小時、約莫3個月的資料分析訓練。使用python進行機器學習完成美國之貸款人呆帳率預測，並獨立開發網站。',
        english : 'Admitted to Big Data Analyst Development Program at TCFST, NTHU. During the program, I received training in data analysis and machine learning to develop a predictive model for loan default rates using Python and a website for  data visualization.'
    },
    {
        item : document.querySelector('.education-text-info .edu-5 .edu-demo'),
        chinese : '網站成果',
        english : 'Demo'
    },
    {
        item : document.querySelector('.education-text-info .edu-4 .edu-org'),
        chinese : '文化替代役 國立台灣美術館',
        english : 'Alternative Service, NTMOFA'
    },
    {
        item : document.querySelector('.education-text-info .edu-4 .edu-descript'),
        chinese : '於台中的國立台灣美術館服役。協助國家級美術單位使用科技與設計創作達到文化平權(身心障礙者的藝術體驗)的目的。',
        english : 'Served at the National Taiwan Museum of Fine Arts in Taichung. My role was to use technology and design to achieve cultural equality, specifically in providing artistic experiences for people with disabilities.'
    },
    {
        item : document.querySelector('.education-text-info .edu-3 .edu-org'),
        chinese : '互動設計所 台夫特科技大學',
        english : 'Design for Interaction, TU Delft'
    },
    {
        item : document.querySelector('.education-text-info .edu-3 .edu-descript'),
        chinese : '錄取教育部2015年藝術與設計菁英海外培訓全額獎學金前往荷蘭 TU Delft 就讀互動設計所，鑽研用戶的正面情感體驗提升。',
        english : 'Awarded a full scholarship by the Ministry of Education in 2015 to pursue a master degree in Interaction Design at TU Delft in the Netherlands. The focus of my studies was on enhancing users positive emotional experiences.'
    },
    {
        item : document.querySelector('.education-text-info .edu-3 .edu-demo'),
        chinese : '網站成果',
        english : 'Demo'
    },
    {
        item : document.querySelector('.education-text-info .edu-2 .edu-org'),
        chinese : '工業設計所 國立成功大學',
        english : 'Ergonomics and Design, NCKU'
    },
    {
        item : document.querySelector('.education-text-info .edu-2 .edu-descript'),
        chinese : '研究擴增實境應用於高齡者認知能力的訓練與提升。論文成果為完成一座以浮空顯像為技術的認知復健裝置，並架設於長青中心提供高齡者使用。',
        english : 'Focused on the application of AR for training and enhancing cognitive abilities in older adults. The outcome of my research was the development of a cognitive rehabilitation device utilizing holographic projection technology, which was installed and made available for use by older adults at a senior center.'
    },
    {
        item : document.querySelector('.education-text-info .edu-2 .edu-demo'),
        chinese : '網站成果',
        english : 'Demo'
    },
    {
        item : document.querySelector('.education-text-info .edu-1 .edu-org'),
        chinese : '工業設計系 國立成功大學',
        english : 'Industrial Design, NCKU'
    },
    {
        item : document.querySelector('.education-text-info .edu-1 .edu-descript'),
        chinese : '以全年級第二名的成績畢業。畢業專題研究心智障礙者的肢體人因與認知能力因素，設計一套適合他們工作使用的烘焙用具，並獲得2013新一代設計獎銅獎。',
        english : 'Graduated with the 2nd-highest ranking in my class. For my graduation project, I conducted research on the physical and cognitive factors in individuals with intellectual disabilities, and designed a set of baking utensils for their work use. This project was recognized with a Bronze Award at the 2013 New Generation Design Awards.'
    }
]


let lang_flag = 1

lang_btn.addEventListener('click',function(){
    
    if(lang_flag == 1){

        lang_obj.forEach(e=>{
            e.item.innerText = e.english;
        })        
    }
    else
    {
        lang_obj.forEach(e=>{
            e.item.innerText = e.chinese;
        })
    }
    
    lang_flag = lang_flag*-1
})