import lungmei from './assets/lungmei.png'
import iam from './assets/iam.png'
import maili from './assets/maili.PNG'
import app360 from './assets/360.png'
import brookliving from './assets/brookliving.png'
import caco from './assets/caco.jpg'
import opmm from './assets/opmm.png'
import notion from './assets/notion.png'
import resume from './assets/resume.png'
export const profolioList = [
	{
		title: '公司專案',

		project: [
			{
				title: '窗簾品牌購物網站',
				company: '類神經股份有限公司',
				res: '購物前台/CMS/LINE客製系統功能開發及維護',
				webLink: 'https://www.lungmei.com.tw/tw',
				stack: ['Angular/Typescript', 'Material UI', 'Firebase SDK', 'LINE SDK'],
				resDetail: ['維護並依客戶需求做功能添加及文案/版面調整', 'nodejs api撰寫', 'line pay功能串接', 'line notify/webhook整合'],
				des: '以LINE會員/生態系為主的電商購物網站，並提供客戶商品/會員/表單管理/LINE推播等等管理後台。',
				image: lungmei,
			},
			{
				title: '地區性教堂會員管理/報到系統',
				company: '智禾數位有限公司',
				des: '以掃描Qrcode方式管理地區性教堂的會員報到/受洗/彌撒時間等紀錄。',
				res: '此網站的會員登入/驗證功能 & 所有Table陳列資訊與資料的CRUD & 頁面切版',
				resDetail: ['使用者報到前台切版/功能串接', '管理員後台切版/功能串接'],
				stack: ['React', 'Styled-component', 'Chakra UI', 'Redux'],
				image: iam,
			},
			{
				title: '教堂搜尋Web APP',
				company: '智禾數位有限公司',
				des: '協助使用者搜尋離使用者最近的教堂位置，並提供該教堂聯絡資訊/電話/地址/禮拜時間及圖片。',
				webLink: 'https://mai-li.app/church/48',
				resDetail: ['網頁切版/所有功能串接', 'SSR Dynamic Metatag'],
				stack: ['NextJS', 'Chakra UI', 'Styled-component'],
				image: maili,
			},
			{
				title: '問卷調查系統',
				company: '智禾數位有限公司',

				des: '讓客戶可在後台以上傳EXCEL檔案的方式新增問卷，包括題型/問題/受訪者名單的設定，並針對特定群體關係做人格特質調查/分析，且提供客戶EXCEL檔案下載輸出問卷調查結果(包含初步統計/平均)做進一步分析數據。',
				resDetail: ['前台問卷功能切版/功能串接', '後台切版/功能串接', '前後台會員驗證機制', '問卷答題統計並匯出Excel檔案功能'],
				stack: ['NextJS', 'Chakra UI', 'Styled-component', 'XLSX套件(匯入/匯出EXCEL檔案)'],
				image: app360,
			},
		],
	},
	{
		title: '個人接案',
		project: [
			{ title: '多種電商活動頁面', company: '個人接案', des: '依客戶所提供之設計稿(AI、sketch、figma)切版', resDetail: ['頁面切版'], stack: ['Vanilla JS', 'CSS', 'Html'], image: caco },
			{
				title: '商品形象網頁',
				image: brookliving,
				company: '個人接案',
				des: '依客戶所提供之設計稿(AI、sketch、figma)切版',
				webLink: 'https://livin.brookaccessory.com/product/wirecare',
				resDetail: ['網頁切版'],
				stack: ['Webpack', 'Pug', 'PostCss'],
			},
			{
				title: 'POS system',
				des: '提供客戶全客製的管理後台，以便客戶管理各店面的銷售/退貨/進貨內容，及提供客戶員工定點打卡與各式數據統計功能',
				company: '個人接案',
				image: opmm,
				resDetail: ['所有頁面切版/功能串接', '定位打卡功能', '銷售圖表功能', '各式項目的CRUD', '熱感應標籤機串接'],
				stack: ['React', 'Redux', 'ChartJS', 'Chakra UI', 'Styled-component'],
			},
			{
				title: '其他',
				des: '有保密合約不方便公開，若有需要可現場DEMO，有銀行商品網站、知名化妝品形象網站等等...',
				company: '個人接案',
				image: 'https://fakeimg.pl/650x250/?text=Not_Available',
				resDetail: ['所有頁面切版/功能串接'],
				stack: ['依客戶需求'],
			},
		],
	},
	{
		title: '個人資料',
		project: [
			{ title: '履歷', image: resume, company: '個人資料', webLink: 'https://www.cakeresume.com/s--MZ2fi97MuY8-F2k4w1lQbQ--/henry60412' },
			{
				title: 'Notion專案/開發進度管理',
				company: '個人資料',
				image: notion,
				des: '由於專案與客戶需求眾多，除了使用git & github flow做分支開發管理以外，還需要對需求的來龍去脈做紀錄，自從轉換到前端工程師之後，便開始訓練自己紀錄所有細節的習慣',
			},
		],
	},
]
