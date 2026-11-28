const menuBtn = document.querySelector('#menuBtn')
const closeBtn = document.querySelector('#closeBtn')
const mobileMenu = document.querySelector('#mobileMenu')

if (menuBtn && closeBtn && mobileMenu) {
	menuBtn.addEventListener('click', function () {
		mobileMenu.classList.remove('hidden')
		menuBtn.classList.add('hidden')
		closeBtn.classList.remove('hidden')
	})

	closeBtn.addEventListener('click', function () {
		mobileMenu.classList.add('hidden')
		closeBtn.classList.add('hidden')
		menuBtn.classList.remove('hidden')
	})
}



const blogPosts = [
	{
		type: 'podcast',
		categoryKey: 'Marketing',
		category: { en: 'Marketing', ru: 'Маркетинг', uz: 'Marketing' },
		date: {
			en: 'September 4, 2020',
			ru: '4 сентября, 2020',
			uz: '4-sentabr, 2020',
		},
		duration: { en: '36 min', ru: '36 мин', uz: '36 daqiqa' },
		title: {
			en: 'What is traffic arbitrage and does it really make money?',
			ru: 'Что такое арбитраж трафика и можно ли на нём реально заработать?',
			uz: 'Trafik arbitraji nima va undan haqiqatan ham pul ishlash mumkinmi?',
		},
		description: {
			en: 'Learn how traffic buying works, which traffic sources are the most effective, and how to avoid wasting your advertising budget...',
			ru: 'Узнайте, как работает закупка трафика, какие источники трафика наиболее эффективны и как избежать потери рекламного бюджета...',
			uz: 'Trafik sotib olish qanday ishlashi, qaysi trafik manbalari samaraliroq ekani va reklama byudjetini behuda sarflamaslik yo‘llarini bilib oling...',
		},
		action: { en: 'Listen', ru: 'Слушать', uz: 'Tinglash' },
		image: '/pages/pages/image/image.svg',
	},
	{
		type: 'article',
		categoryKey: 'Development',
		category: { en: 'Development', ru: 'Разработка', uz: 'Dasturlash' },
		date: {
			en: 'September 1, 2020',
			ru: '1 сентября, 2020',
			uz: '1-sentabr, 2020',
		},
		duration: { en: '', ru: '', uz: '' },
		title: {
			en: 'How to choose the first programming language for a beginner',
			ru: 'Как выбрать первый язык программирования для новичка',
			uz: 'Yangi boshlovchi uchun birinchi dasturlash tilini qanday tanlash kerak',
		},
		description: {
			en: 'Analysis of Popular Programming Languages: Python, JavaScript, and C#. Which One Is Easier to Start an IT Career With?',
			ru: 'Анализ популярных языков программирования: Python, JavaScript и C#. С какого языка легче начать карьеру в IT?',
			uz: 'Mashhur dasturlash tillari tahlili: Python, JavaScript va C#. IT sohasidagi karyerani qaysi biridan boshlash osonroq?',
		},
		action: { en: 'Read', ru: 'Читать', uz: 'O‘qish' },
		image: '/pages/pages/image/imge.png',
	},
	{
		type: 'video',
		categoryKey: 'Design',
		category: { en: 'Design', ru: 'Дизайн', uz: 'Dizayn' },
		date: {
			en: 'August 8, 2020',
			ru: '8 августа, 2020',
			uz: '8-avgust, 2020',
		},
		duration: { en: '40 min', ru: '40 мин', uz: '40 daqiqa' },
		title: {
			en: 'Should you choose a creative profession if you are attracted to creativity?',
			ru: 'Стоит ли выбирать творческую профессию, если вас тянет к креативу?',
			uz: 'Agar ijodkorlikka qiziqsangiz, kreativ kasbni tanlash kerakmi?',
		},
		description: {
			en: 'The pros and cons of working in creative industries, finding inspiration, and balancing creativity with deadlines...',
			ru: 'Плюсы и минусы работы в креативных индустриях, поиск вдохновения и баланс между творчеством и дедлайнами...',
			uz: 'Kreativ sohalarda ishlashning afzalliklari va kamchiliklari, ilhom topish hamda ijodkorlik va muddatlar o‘rtasidagi muvozanat...',
		},
		action: { en: 'Watch', ru: 'Смотреть', uz: 'Ko‘rish' },
		image: '/pages/pages/image/imag(1).png',
	},
	{
		type: 'article',
		categoryKey: 'HR & Recruiting',
		category: {
			en: 'HR & Recruiting',
			ru: 'HR и рекрутинг',
			uz: 'HR va rekruting',
		},
		date: {
			en: 'August 3, 2020',
			ru: '3 августа, 2020',
			uz: '3-avgust, 2020',
		},
		duration: { en: '', ru: '', uz: '' },
		title: {
			en: 'HR statistics: job search, interviews, hiring and recruiting',
			ru: 'HR-статистика: поиск работы, собеседования, найм и рекрутинг',
			uz: 'HR statistikasi: ish qidirish, suhbatlar, ishga olish va rekruting',
		},
		description: {
			en: 'Current labor market statistics and trends: how long does it take to find candidates and what matters most to job seekers...',
			ru: 'Актуальные цифры и тренды рынка труда: сколько времени занимает поиск кандидатов и что важно соискателям...',
			uz: 'Mehnat bozoridagi dolzarb raqamlar va tendensiyalar: nomzodlarni topish qancha vaqt oladi va ish izlovchilar uchun nimalar muhim...',
		},
		action: { en: 'Read', ru: 'Читать', uz: 'O‘qish' },
		image: '/pages/pages/image/image(s1).png',
	},
	{
		type: 'video',
		categoryKey: 'Management',
		category: { en: 'Management', ru: 'Менеджмент', uz: 'Menejment' },
		date: {
			en: 'August 2, 2020',
			ru: '2 августа, 2020',
			uz: '2-avgust, 2020',
		},
		duration: { en: '45 min', ru: '45 мин', uz: '45 daqiqa' },
		title: {
			en: 'What to do and who to talk to if you want to get feedback on the product',
			ru: 'Что делать и с кем общаться, чтобы получить обратную связь о продукте',
			uz: 'Mahsulot haqida fikr-mulohaza olish uchun nima qilish va kim bilan gaplashish kerak',
		},
		description: {
			en: 'How to conduct in-depth user interviews and improve a product based on real feedback...',
			ru: 'Как правильно проводить глубинные интервью с пользователями и улучшать продукт на основе реальных отзывов...',
			uz: 'Foydalanuvchilar bilan chuqur suhbatlar o‘tkazish va haqiqiy fikr-mulohazalar asosida mahsulotni yaxshilash usullari...',
		},
		action: { en: 'Watch', ru: 'Смотреть', uz: 'Ko‘rish' },
		image: '/pages/pages/image/image.jpg',
	},
	{
		type: 'podcast',
		categoryKey: 'Design',
		category: { en: 'Design', ru: 'Дизайн', uz: 'Dizayn' },
		date: {
			en: 'July 28, 2020',
			ru: '28 июля, 2020',
			uz: '28-iyul, 2020',
		},
		duration: { en: '36 min', ru: '36 мин', uz: '36 daqiqa' },
		title: {
			en: 'What are color profiles and how they work in graphic design',
			ru: 'Что такое цветовые профили и как они работают в графическом дизайне',
			uz: 'Rang profillari nima va ular grafik dizaynda qanday ishlaydi',
		},
		description: {
			en: 'The difference between RGB, CMYK, and sRGB: how to adjust colors so that a design looks the same on screen and in print...',
			ru: 'Разница между RGB, CMYK и sRGB: как настроить цвета, чтобы макет одинаково выглядел на экране и в печати...',
			uz: 'RGB, CMYK va sRGB o‘rtasidagi farq: dizayn ekranda ham, bosma nashrda ham bir xil ko‘rinishi uchun ranglarni qanday sozlash kerak...',
		},
		action: { en: 'Listen', ru: 'Слушать', uz: 'Tinglash' },
		image: '/pages/pages/image/image(aa).png',
	},
	{
		type: 'video',
		categoryKey: 'Management',
		category: { en: 'Management', ru: 'Менеджмент', uz: 'Menejment' },
		date: {
			en: 'July 15, 2020',
			ru: '15 июля, 2020',
			uz: '15-iyul, 2020',
		},
		duration: { en: '45 min', ru: '45 мин', uz: '45 daqiqa' },
		title: {
			en: 'Startup: how to build a team that will live longer than a year',
			ru: 'Стартап: как собрать команду, которая проживёт дольше года',
			uz: 'Startap: bir yildan ortiq yashaydigan jamoani qanday qurish mumkin',
		},
		description: {
			en: 'How to find like-minded people, assign roles, and stay motivated during the early stages of launching a project...',
			ru: 'Как искать единомышленников, распределять роли и сохранять мотивацию на ранних этапах запуска проекта...',
			uz: 'Hamfikrlarni topish, vazifalarni taqsimlash va loyihani ishga tushirishning dastlabki bosqichlarida motivatsiyani saqlab qolish...',
		},
		action: { en: 'Watch', ru: 'Смотреть', uz: 'Ko‘rish' },
		image: '/pages/pages/image/image(abd).png',
	},
	{
		type: 'article',
		categoryKey: 'Marketing',
		category: { en: 'Marketing', ru: 'Маркетинг', uz: 'Marketing' },
		date: {
			en: 'July 9, 2020',
			ru: '9 июля, 2020',
			uz: '9-iyul, 2020',
		},
		duration: { en: '', ru: '', uz: '' },
		title: {
			en: 'How to get customers to love your business from the start',
			ru: 'Как сделать так, чтобы клиенты полюбили ваш бизнес с самого старта',
			uz: 'Mijozlar biznesingizni boshidanoq sevib qolishi uchun nima qilish kerak',
		},
		description: {
			en: 'Customer service secrets, building trust, and creating a strong first impression of a brand...',
			ru: 'Секреты клиентского сервиса, построение доверия и создание сильного первого впечатления о бренде...',
			uz: 'Mijozlarga xizmat ko‘rsatish sirlari, ishonch qozonish va brend haqida kuchli birinchi taassurot qoldirish...',
		},
		action: { en: 'Read', ru: 'Читать', uz: 'O‘qish' },
		image: '/pages/pages/image/image(k).png',
	},
];

const typeLabels = {
	article: { en: 'Article', ru: 'Статья', uz: 'Maqola' },
	video: { en: 'Video', ru: 'Видео', uz: 'Video' },
	podcast: { en: 'Podcast', ru: 'Подкаст', uz: 'Podkast' },
};

const blogGrid = document.getElementById('blogGrid');
const blogSearch = document.getElementById('blogSearch');
const blogCategory = document.getElementById('blogCategory');
const noBlogResults = document.getElementById('noBlogResults');
const blogTabs = document.querySelectorAll('.blog-tab');

let activeType = 'all';

const typeIcons = {
	article: 'article',
	video: 'play_circle',
	podcast: 'mic',
};

// Tanlangan tilni aniqlash
function getCurrentLang() {
	const selectEl =
		document.getElementById('languageSelect') ||
		document.getElementById('language') ||
		document.querySelector('select[id*="lang"]');

	let lang = selectEl?.value;

	if (!lang) {
		lang =
			localStorage.getItem('language') ||
			localStorage.getItem('lang') ||
			'en';
	}

	lang = lang.toLowerCase();

	return ['uz', 'ru', 'en'].includes(lang) ? lang : 'en';
}

// Faqat All Articles / Articles / Videos / Podcasts bo‘yicha ajratish
// Search va Category filtrlariga bog‘lanmagan
function getFilteredPosts() {
	return blogPosts.filter(post => {
		return activeType === 'all' || post.type === activeType;
	});
}

// Blog kartochkasini yaratish
function createBlogCard(post, index) {
	const lang = getCurrentLang();
	const card = document.createElement('article');

	const title = post.title[lang] || post.title.en;
	const category = post.category[lang] || post.category.en;
	const date = post.date[lang] || post.date.en;
	const duration = post.duration[lang] || post.duration.en;
	const description = post.description[lang] || post.description.en;

	// Listen / Read / Watch tarjimasi
	const action = post.action[lang] || post.action.en;

	const typeText = typeLabels[post.type]?.[lang] || post.type;

	card.className = `blog-card ${index === 3 || index === 4 ? 'wide' : ''}`;

	card.innerHTML = `
        <div class="relative overflow-hidden rounded-sm">
            <img
                src="${post.image}"
                alt="${title}"
                class="blog-image transition duration-500 hover:scale-105"
                loading="lazy"
            >

            <span class="absolute top-2 left-2 bg-white text-gray-600
                text-[9px] px-2 py-1 rounded-sm flex items-center gap-1">

                <span class="material-symbols-outlined text-[12px]">
                    ${typeIcons[post.type]}
                </span>

                ${typeText}
            </span>
        </div>

        <div class="blog-card-content">

            <div class="blog-meta">
                <span>${category}</span>
                <span>|</span>

                <span class="material-symbols-outlined">
                    calendar_today
                </span>

                <span>${date}</span>

                ${duration
			? `
                            <span>|</span>
                            <span class="material-symbols-outlined">
                                schedule
                            </span>
                            <span>${duration}</span>
                        `
			: ''
		}
            </div>

            <h3 class="blog-card-title">
                ${title}
            </h3>

            <p class="blog-description">
                ${description}
            </p>

            <a href="course.html" class="blog-action">
                ${action}

                <span class="material-symbols-outlined">
                    arrow_forward
                </span>
            </a>

        </div>
    `;

	return card;
}

// Bloglarni chiqarish
function renderBlogs() {
	if (!blogGrid) return;

	const filteredPosts = getFilteredPosts();

	blogGrid.innerHTML = '';

	filteredPosts.forEach((post, index) => {
		blogGrid.appendChild(createBlogCard(post, index));
	});

	if (noBlogResults) {
		noBlogResults.classList.toggle(
			'hidden',
			filteredPosts.length !== 0
		);
	}
}

window.renderBlogs = renderBlogs;

// Blog tab tugmalari
blogTabs.forEach(tab => {
	tab.addEventListener('click', () => {
		blogTabs.forEach(item => {
			item.classList.remove('active');
		});

		tab.classList.add('active');

		activeType = tab.dataset.type;

		renderBlogs();
	});
});

// Til o‘zgarganda blog kartochkalarini qayta chiqarish
document.addEventListener('change', event => {
	if (
		event.target.id === 'languageSelect' ||
		event.target.id === 'language'
	) {
		renderBlogs();
	}
});

renderBlogs();


// registr js

const modal = document.createElement('div');

modal.id = 'authModal';

modal.className = `
    fixed inset-0 z-[100] hidden
    items-center justify-center
    bg-[#1e212c]/80 px-4 py-6
`;

modal.innerHTML = `
    <div id="modalBox"
        class="relative bg-white w-full max-w-[400px]
        rounded-sm shadow-xl overflow-hidden">

        <button id="closeModal" type="button"
            aria-label="Close modal"
            class="absolute top-4 right-5 text-2xl
            text-gray-500 hover:text-red-500">

            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" height="24px"
                width="24px" fill="#1f1f1f">
                <path d="M6.4,19L5,17.6L10.6,12L5,6.4L6.4,5L12,10.6L17.6,5L19,6.4L13.4,12L19,17.6L17.6,19L12,13.4L6.4,19Z"/>
            </svg>
        </button>

        <div class="px-7 sm:px-8 pt-8 pb-5">

            <h2 id="formTitle" data-key="signIn"
                class="text-2xl font-bold text-center text-[#1e212c]">
                Sign in
            </h2>

            <p id="formDescription" data-key="signInDescription"
                class="text-xs text-gray-400 text-center mt-5 mb-6 leading-5">
                Sign in to your account using email and password provided during registration.
            </p>

            <form id="authForm" class="flex flex-col gap-4">

                <div id="nameBox" class="hidden">
                    <label class="text-xs text-gray-700"
                        for="fullName" data-key="fullNameLabel">
                        Full Name
                    </label>

                    <input id="fullName" type="text"
                        data-placeholder="yourFullName"
                        placeholder="Your full name"
                        class="w-full border border-gray-300 px-3 py-3 mt-2 text-xs outline-none focus:border-orange-500">
                </div>

                <div>
                    <label class="text-xs text-gray-700"
                        for="email" data-key="emailLabel">
                        Email
                    </label>

                    <input required id="email"
                        type="email"
                        data-placeholder="yourWorkingEmail"
                        placeholder="Your working email"
                        class="w-full border border-gray-300 px-3 py-3 mt-2 text-xs outline-none focus:border-orange-500">
                </div>

                <div>
                    <label class="text-xs text-gray-700"
                        for="password" data-key="passwordLabel">
                        Password
                    </label>

                    <input required id="password"
                        type="password"
                        data-placeholder="passwordPlaceholder"
                        placeholder="Password"
                        class="w-full border border-gray-300 px-3 py-3 mt-2 text-xs outline-none focus:border-orange-500">
                </div>

                <div id="confirmBox" class="hidden">
                    <label class="text-xs text-gray-700"
                        for="confirmPassword" data-key="confirmPasswordLabel">
                        Confirm Password
                    </label>

                    <input id="confirmPassword"
                        type="password"
                        data-placeholder="confirmPasswordPlaceholder"
                        placeholder="Confirm password"
                        class="w-full border border-gray-300 px-3 py-3 mt-2 text-xs outline-none focus:border-orange-500">
                </div>

                <div id="rememberBox"
                    class="flex items-center justify-between text-[11px]">

                    <label class="flex items-center gap-2">
                        <input type="checkbox"
                            id="rememberMe"
                            class="accent-[#ff3f22]">

                        <span data-key="keepSignedIn">
                            Keep me signed in
                        </span>
                    </label>

                    <button type="button" id="forgotPassword"
                        class="text-[#ff3f22] hover:underline"
                        data-key="forgotPassword">
                        Forgot password?
                    </button>
                </div>

                <button id="submitBtn" type="submit"
                    data-key="signIn"
                    class="w-full py-3 mt-1 text-xs font-bold text-white bg-gradient-to-r from-[#ff3f22] to-[#ff5722] hover:opacity-90 transition">
                    Sign in
                </button>

            </form>

            <p id="message"
                class="text-xs text-center mt-3"></p>

            <p class="text-xs text-gray-700 mt-5">

                <span id="switchText" data-key="noAccount">
                    Don't have an account?
                </span>

                <button type="button" id="switchBtn"
                    class="text-[#ff3f22] hover:underline"
                    data-key="signUp">
                    Sign up
                </button>

            </p>

        </div>

        <div class="border-t border-gray-100 py-5">

            <p class="text-center text-xs text-gray-400 mb-4"
                data-key="orSignInWith">
                Or sign in with
            </p>

            <div class="flex items-center justify-center gap-4">

                <a href="#" aria-label="Facebook">
                    <img src="pages/pages/image/Facebook.svg" alt="Facebook">
                </a>

                <a href="#" aria-label="Google">
                    <img src="pages/pages/image/Instagram.svg" alt="Google">
                </a>

                <a href="#" aria-label="Twitter">
                    <img src="pages/pages/image/Twitter.svg" alt="Twitter">
                </a>

                <a href="#" aria-label="LinkedIn">
                    <img src="pages/pages/image/Linked-In.svg" alt="LinkedIn">
                </a>

            </div>

        </div>

    </div>
`;

document.body.appendChild(modal);

// ELEMENTLAR

const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');

const formTitle = document.getElementById('formTitle');
const formDescription = document.getElementById('formDescription');

const authForm = document.getElementById('authForm');

const nameBox = document.getElementById('nameBox');
const confirmBox = document.getElementById('confirmBox');
const rememberBox = document.getElementById('rememberBox');

const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const submitBtn = document.getElementById('submitBtn');
const switchText = document.getElementById('switchText');
const switchBtn = document.getElementById('switchBtn');

const message = document.getElementById('message');

const loginBtns = document.querySelectorAll('.loginBtn');

// TARJIMA

function translateAuthModal() {

	const currentLang =
		document.getElementById('languageSelect')?.value ||
		localStorage.getItem('language') ||
		'en';

	// Asosiy saytdagi tarjima funksiyasi
	if (typeof window.translate === 'function') {
		window.translate(currentLang);
	}

	// Modal tarjimasi
	const languageData = window.translations?.[currentLang];

	if (!languageData) return;

	authModal.querySelectorAll('[data-key]').forEach(element => {

		const key = element.dataset.key;

		if (languageData[key] !== undefined) {
			element.textContent = languageData[key];
		}

	});

	authModal.querySelectorAll('[data-placeholder]').forEach(element => {

		const key = element.dataset.placeholder;

		if (languageData[key] !== undefined) {
			element.placeholder = languageData[key];
		}

	});
}



// MODAL OCHISH

function openAuthModal() {

	authModal.classList.remove('hidden');
	authModal.classList.add('flex');

	updateAuthMode();
	translateAuthModal();


	document.getElementById('mobileMenu')?.classList.add('hidden');

	document.getElementById('menuBtn')?.classList.remove('hidden');

	document.getElementById('closeBtn')?.classList.add('hidden');
}

loginBtns.forEach(button => {

	button.addEventListener('click', openAuthModal);

});

// MODAL YOPISH

function closeAuthModal() {

	authModal.classList.add('hidden');
	authModal.classList.remove('flex');

	message.textContent = '';

}

closeModal.addEventListener('click', closeAuthModal);

// Orqa fon bosilganda yopish

authModal.addEventListener('click', event => {

	if (event.target === authModal) {
		closeAuthModal();
	}

});

// SIGN IN / SIGN UP

let isSignUp = false;

function updateAuthMode() {

	message.textContent = '';

	authForm.reset();

	if (isSignUp) {

		nameBox.classList.remove('hidden');
		confirmBox.classList.remove('hidden');

		rememberBox.classList.add('hidden');

		fullName.required = true;
		confirmPassword.required = true;

		formTitle.dataset.key = 'signUp';
		formDescription.dataset.key = 'signUpDescription';

		submitBtn.dataset.key = 'signUp';

		switchText.dataset.key = 'haveAccount';
		switchBtn.dataset.key = 'signIn';

	} else {

		nameBox.classList.add('hidden');
		confirmBox.classList.add('hidden');

		rememberBox.classList.remove('hidden');

		fullName.required = false;
		confirmPassword.required = false;

		formTitle.dataset.key = 'signIn';
		formDescription.dataset.key = 'signInDescription';

		submitBtn.dataset.key = 'signIn';

		switchText.dataset.key = 'noAccount';
		switchBtn.dataset.key = 'signUp';

	}

	translateAuthModal();

}

// Rejimni almashtirish

switchBtn.addEventListener('click', () => {

	isSignUp = !isSignUp;

	updateAuthMode();

});


// TIL O'ZGARGANDA

const languageSelect = document.getElementById('languageSelect');

if (languageSelect) {

	languageSelect.addEventListener('change', () => {

		if (typeof window.renderFilterButtons === 'function') {
			window.renderFilterButtons();
		}

		if (typeof window.renderWorkers === 'function') {
			window.renderWorkers();
		}

		translateAuthModal();

	});

}

updateAuthMode();