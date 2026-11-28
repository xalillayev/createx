const menuBtn = document.querySelector('#menuBtn')
const closeBtn = document.querySelector('#closeBtn')
const mobileMenu = document.querySelector('#mobileMenu')

// Menu ochish
menuBtn.addEventListener('click', function () {
	mobileMenu.classList.remove('hidden')

	menuBtn.classList.add('hidden')
	closeBtn.classList.remove('hidden')
})

// Menu yopish
closeBtn.addEventListener('click', function () {
	mobileMenu.classList.add('hidden')

	closeBtn.classList.add('hidden')
	menuBtn.classList.remove('hidden')
})

// filter js


const courses = [
    {
        id: 1,
        title: 'The Ultimate Google Ads Training Course',
        category: 'marketing',
        price: 100,
        author: 'Jerome Bell',
        image: 'pages/pages/image/image1.png',
    },
    {
        id: 2,
        title: 'Product Management Fundamentals',
        category: 'management',
        price: 480,
        author: 'Marvin McKinney',
        image: 'pages/pages/image/image2.png',
    },
    {
        id: 3,
        title: 'HR Management and Analytics',
        category: 'hr',
        price: 200,
        author: 'Leslie Alexander Li',
        image: 'pages/pages/image/image3.png',
    },
    {
        id: 4,
        title: 'Brand Management & PR Communications',
        category: 'marketing',
        price: 530,
        author: 'Kristin Watson',
        image: 'pages/pages/image/image4.png',
    },
    {
        id: 5,
        title: 'Graphic Design Basic',
        category: 'design',
        price: 500,
        author: 'Guy Hawkins',
        image: 'pages/pages/image/image5.png',
    },
    {
        id: 6,
        title: 'Business Development Management',
        category: 'management',
        price: 400,
        author: 'Dianne Russell',
        image: 'pages/pages/image/image6.png',
    },
    {
        id: 7,
        title: 'Highload Software Architecture',
        category: 'development',
        price: 600,
        author: 'Brooklyn Simmons',
        image: 'pages/pages/image/image4.png',
    },
    {
        id: 8,
        title: 'Human Resources - Selection and Recruitment',
        category: 'hr',
        price: 150,
        author: 'Kathryn Murphy',
        image: 'pages/pages/image/image5.png',
    },
    {
        id: 9,
        title: 'User Experience. Human-centered Design',
        category: 'design',
        price: 240,
        author: 'Cody Fisher',
        image: 'pages/pages/image/image6.png',
    },
];



// TRANSLATIONS


const courseTranslations = {

    en: {
        readyToLearn: 'ENJOY YOUR STUDYING!',
        featuredCourses: 'Our online courses',
        all: 'All',
        marketing: 'Marketing',
        management: 'Management',
        hr: 'HR & Recruiting',
        design: 'Design',
        development: 'Development',
        search: 'Search course...',
        noResults: 'No courses found.',
        by: 'by',

        course_1: 'The Ultimate Google Ads Training Course',
        course_2: 'Product Management Fundamentals',
        course_3: 'HR Management and Analytics',
        course_4: 'Brand Management & PR Communications',
        course_5: 'Graphic Design Basic',
        course_6: 'Business Development Management',
        course_7: 'Highload Software Architecture',
        course_8: 'Human Resources - Selection and Recruitment',
        course_9: 'User Experience. Human-centered Design',
    },

    uz: {
        readyToLearn: 'O‘QISH JARAYONIDAN ROHATLANING!',
        featuredCourses: 'Bizning onlayn kurslarimiz',
        all: 'Barchasi',
        marketing: 'Marketing',
        management: 'Menejment',
        hr: 'HR va Rekruting',
        design: 'Dizayn',
        development: 'Dasturlash',
        search: 'Kurs qidirish...',
        noResults: 'Kurslar topilmadi.',
        by: 'Muallif:',

        course_1: 'Google Ads bo‘yicha mukammal o‘quv kursi',
        course_2: 'Mahsulot boshqaruvi asoslari',
        course_3: 'HR boshqaruvi va tahlil',
        course_4: 'Brend boshqaruvi va PR kommunikatsiyalari',
        course_5: 'Grafik dizayn asoslari',
        course_6: 'Biznesni rivojlantirish boshqaruvi',
        course_7: 'Highload dasturiy arxitekturasi',
        course_8: 'Kadrlarni tanlash va ishga qabul qilish',
        course_9: 'Foydalanuvchiga yo‘naltirilgan UX dizayn',
    },

    ru: {
        readyToLearn: 'НАСЛАЖДАЙТЕСЬ ОБУЧЕНИЕМ!',
        featuredCourses: 'Наши онлайн-курсы',
        all: 'Все',
        marketing: 'Маркетинг',
        management: 'Менеджмент',
        hr: 'HR и рекрутинг',
        design: 'Дизайн',
        development: 'Разработка',
        search: 'Поиск курса...',
        noResults: 'Курсы не найдены.',
        by: 'Автор:',

        course_1: 'Полный курс обучения Google Ads',
        course_2: 'Основы управления продуктом',
        course_3: 'Управление персоналом и аналитика',
        course_4: 'Управление брендом и PR-коммуникации',
        course_5: 'Основы графического дизайна',
        course_6: 'Управление развитием бизнеса',
        course_7: 'Архитектура высоконагруженных систем',
        course_8: 'Подбор и найм персонала',
        course_9: 'UX-дизайн, ориентированный на пользователя',
    }

};



// ELEMENTS


const filterButtons = document.querySelectorAll('.filter-btn');
const box = document.getElementById('box');
const search = document.getElementById('search');
const noResults = document.getElementById('noResults');

let selectedCategory = 'all';



// CURRENT LANGUAGE


function getCourseLanguage() {

    const languageSelect = document.getElementById('languageSelect');

    const selectedLanguage =
        languageSelect?.value ||
        localStorage.getItem('language') ||
        'en';

    return courseTranslations[selectedLanguage]
        ? selectedLanguage
        : 'en';
}

function translateCourses() {

    const lang = getCourseLanguage();
    const texts = courseTranslations[lang];

    // Static text
    document.querySelectorAll('[data-course-key]').forEach(element => {

        const key = element.dataset.courseKey;

        if (texts[key] !== undefined) {
            element.textContent = texts[key];
        }

    });

    // Filter buttons
    filterButtons.forEach(button => {

        const category = button.dataset.category;

        if (texts[category] !== undefined) {
            button.textContent = texts[category];
        }

    });

    // Search placeholder
    search.placeholder = texts.search;

    // Course cards
    document.querySelectorAll('#box [data-course-key]').forEach(element => {

        const key = element.dataset.courseKey;

        if (texts[key] !== undefined) {
            element.textContent = texts[key];
        }
        

    });

}

function renderWorkers() {

    const lang = getCourseLanguage();
    const texts = courseTranslations[lang];

    const searchValue = search.value
        .toLowerCase()
        .trim();

    const filteredCourses = courses.filter(course => {

        const categoryMatch =
            selectedCategory === 'all' ||
            course.category === selectedCategory;

        const translatedTitle = texts[`course_${course.id}`];

        const searchMatch =
            course.title.toLowerCase().includes(searchValue) ||
            translatedTitle.toLowerCase().includes(searchValue) ||
            course.author.toLowerCase().includes(searchValue);

        return categoryMatch && searchMatch;

    });

    box.innerHTML = '';


    filteredCourses.forEach(course => {

        const courseItem = document.createElement('div');

        courseItem.className = `
            bg-white shadow-md overflow-hidden
            hover:shadow-xl transition duration-300
        `;

        courseItem.innerHTML = `

            <div class="h-[180px] bg-[#ffcf32] flex items-center justify-center">

                <img
                    src="${course.image}"
                    alt="${texts[`course_${course.id}`]}"
                    class="h-full object-contain"
                    loading="lazy"
                >

            </div>

            <div class="p-4">

                <span
                    data-course-key="${course.category}"
                    class="text-xs text-white bg-[#03cea4] px-2 py-1"
                >
                    ${texts[course.category]}
                </span>

                <h3
                    data-course-key="course_${course.id}"
                    class="font-bold text-sm mt-3 mb-2"
                >
                    ${texts[`course_${course.id}`]}
                </h3>

                <p class="text-xs text-gray-500">

                    <span class="text-[#ff4242] font-bold">
                        $${course.price}
                    </span>

                    |

                    <span data-course-key="by">
                        ${texts.by}
                    </span>

                    ${course.author}

                </p>

            </div>

        `;

        box.appendChild(courseItem);

    });

    translateCourses();

}



function handleChangeCategory(category) {

    selectedCategory = category;

    filterButtons.forEach(button => {

        const isActive =
            button.dataset.category === category;

        button.classList.toggle('bg-[#FF5753]', isActive);
        button.classList.toggle('text-white', isActive);

        button.classList.toggle('text-[#FF5753]', !isActive);

    });

    renderWorkers();

}

// FILTER BUTTON EVENTS

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        handleChangeCategory(button.dataset.category);

    });

});


function initCourses() {

    // Saqlangan tilni olish
    const savedLanguage = localStorage.getItem('language');

    if (languageSelect && savedLanguage &&
        courseTranslations[savedLanguage]) {

        languageSelect.value = savedLanguage;

    }

    handleChangeCategory('all');

}

if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', initCourses);

} else {

    initCourses();

}



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