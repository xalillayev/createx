
const eventSwiper = new Swiper(".eventSwiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    loop:true,
    navigation: {
        nextEl: ".event-next",
        prevEl: ".event-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    },
});


const menuBtn = document.querySelector('#menuBtn');
const closeBtn = document.querySelector('#closeBtn');
const mobileMenu = document.querySelector('#mobileMenu');

// Menu ochish
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden');

    menuBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
});

// Menu yopish
closeBtn.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');

    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
});



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