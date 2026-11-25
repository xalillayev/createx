
// BLOG POSTS
const blogPosts = [
    {
        type: "podcast",
        category: "Marketing",
        date: "2020-09-04",
        duration: "36 min",
        titleKey: "post1Title",
        descriptionKey: "post1Description",
        actionKey: "listen",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "article",
        category: "Development",
        date: "2020-09-01",
        duration: "",
        titleKey: "post2Title",
        descriptionKey: "post2Description",
        actionKey: "read",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "video",
        category: "Design",
        date: "2020-08-08",
        duration: "40 min",
        titleKey: "post3Title",
        descriptionKey: "post3Description",
        actionKey: "watch",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "article",
        category: "HR & Recruiting",
        date: "2020-08-03",
        duration: "",
        titleKey: "post4Title",
        descriptionKey: "post4Description",
        actionKey: "read",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "video",
        category: "Management",
        date: "2020-08-02",
        duration: "45 min",
        titleKey: "post5Title",
        descriptionKey: "post5Description",
        actionKey: "watch",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "podcast",
        category: "Design",
        date: "2020-07-28",
        duration: "36 min",
        titleKey: "post6Title",
        descriptionKey: "post6Description",
        actionKey: "listen",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "video",
        category: "Management",
        date: "2020-07-15",
        duration: "45 min",
        titleKey: "post7Title",
        descriptionKey: "post7Description",
        actionKey: "watch",
        image: "/pages/pages/image/image.png"
    },
    {
        type: "article",
        category: "Marketing",
        date: "2020-07-09",
        duration: "",
        titleKey: "post8Title",
        descriptionKey: "post8Description",
        actionKey: "read",
        image: "/pages/pages/image/image.png"
    }
];





// ELEMENTS
const blogGrid = document.getElementById("blogGrid");
const blogSearch = document.getElementById("blogSearch");
const blogCategory = document.getElementById("blogCategory");
const blogPagination = document.getElementById("blogPagination");

const blogTabs = document.querySelectorAll(".blog-tab");

// NO RESULTS ELEMENT
let noBlogResults = document.getElementById("noBlogResults");

if (!noBlogResults && blogGrid) {
    noBlogResults = document.createElement("p");
    noBlogResults.id = "noBlogResults";
    noBlogResults.className = "hidden text-center text-gray-500 py-10";
    blogGrid.after(noBlogResults);
}


// SETTINGS
let activeType = "all";
let currentPage = 1;

const postsPerPage = 8;


// LANGUAGE
function getBlogLanguage() {
    const language = localStorage.getItem("language") || "uz";

    return blogPostTranslations[language]
        ? language
        : "uz";
}

function getBlogText(key) {
    const language = getBlogLanguage();

    return blogPostTranslations[language][key] || key;
}


// CATEGORY KEYS
const categoryKeys = {
    Marketing: "marketing",
    Development: "development",
    Design: "design",
    "HR & Recruiting": "hrRecruiting",
    Management: "management"
};


// TYPE ICONS
const typeIcons = {
    article: "article",
    video: "play_circle",
    podcast: "mic"
};


// FILTER
function getFilteredPosts() {
    const language = getBlogLanguage();

    const searchValue = blogSearch.value
        .toLowerCase()
        .trim();

    const categoryValue = blogCategory.value;

    return blogPosts.filter(post => {

        const matchesType =
            activeType === "all" ||
            post.type === activeType;

        const matchesCategory =
            categoryValue === "all" ||
            post.category === categoryValue;

        const title = getBlogText(post.titleKey).toLowerCase();

        const description = getBlogText(post.descriptionKey).toLowerCase();

        const category = getBlogText(
            categoryKeys[post.category]
        ).toLowerCase();

        const matchesSearch =
            title.includes(searchValue) ||
            description.includes(searchValue) ||
            category.includes(searchValue);

        return matchesType && matchesCategory && matchesSearch;
    });
}


// DATE FORMAT
function formatBlogDate(date) {
    const language = getBlogLanguage();

    const locales = {
        uz: "uz-UZ",
        en: "en-US",
        ru: "ru-RU"
    };

    return new Date(date + "T12:00:00").toLocaleDateString(
        locales[language],
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );
}


// CREATE BLOG CARD
function createBlogCard(post, index) {

    const card = document.createElement("article");

    card.className = `blog-card ${index === 3 || index === 4 ? "wide" : ""
        }`;

    const category = getBlogText(
        categoryKeys[post.category]
    );

    const type = getBlogText(post.type);

    const title = getBlogText(post.titleKey);

    const description = getBlogText(post.descriptionKey);

    const action = getBlogText(post.actionKey);

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

                ${type}

            </span>

        </div>

        <div class="blog-card-content">

            <div class="blog-meta">

                <span>${category}</span>

                <span>|</span>

                <span class="material-symbols-outlined">
                    calendar_today
                </span>

                <span>${formatBlogDate(post.date)}</span>

                ${post.duration
            ? `
                        <span>|</span>
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                        <span>${post.duration}</span>
                    `
            : ""
        }

            </div>

            <h3 class="blog-card-title">
                ${title}
            </h3>

            <p class="blog-description">
                ${description}
            </p>

            <a href="#" class="blog-action">

                ${action}

                <span class="material-symbols-outlined">
                    arrow_forward
                </span>

            </a>

        </div>
    `;

    return card;
}


// PAGINATION
function renderPagination(totalPages) {

    blogPagination.innerHTML = "";

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {

        const button = document.createElement("button");

        button.textContent = i;

        button.className = `
            w-9 h-9 rounded-sm text-sm font-semibold
            transition duration-200
            ${currentPage === i
                ? "bg-[#ff3f22] text-white"
                : "text-gray-600 hover:bg-[#ffddd5]"
            }
        `;

        button.addEventListener("click", () => {

            currentPage = i;

            renderBlogs();

        });

        blogPagination.appendChild(button);
    }
}


// MAIN RENDER
function renderBlogs() {

    if (!blogGrid) return;

    const filteredPosts = getFilteredPosts();

    const totalPages = Math.ceil(
        filteredPosts.length / postsPerPage
    );

    if (currentPage > totalPages) {
        currentPage = Math.max(1, totalPages);
    }

    const startIndex = (currentPage - 1) * postsPerPage;

    const currentPosts = filteredPosts.slice(
        startIndex,
        startIndex + postsPerPage
    );

    blogGrid.innerHTML = "";

    currentPosts.forEach((post, index) => {

        blogGrid.appendChild(
            createBlogCard(post, index)
        );

    });

    noBlogResults.textContent = getBlogText("noResults");

    noBlogResults.classList.toggle(
        "hidden",
        filteredPosts.length !== 0
    );

    renderPagination(totalPages);
}


// BLOG SECTION TRANSLATION
function translateBlogSection() {

    const language = getBlogLanguage();

    const translations = blogPostTranslations[language];

    // HTML TEXTS
    document.querySelectorAll("[data-blog-key]").forEach(element => {

        const key = element.dataset.blogKey;

        // UI translations are in the previous blogTranslations object.
        const uiTranslations =
            typeof blogTranslations !== "undefined"
                ? blogTranslations[language]
                : {};

        const value = translations[key] || uiTranslations?.[key];

        if (value) {
            element.textContent = value;
        }

    });

    // PLACEHOLDERS
    document.querySelectorAll("[data-blog-placeholder]").forEach(element => {

        const key = element.dataset.blogPlaceholder;

        const uiTranslations =
            typeof blogTranslations !== "undefined"
                ? blogTranslations[language]
                : {};

        if (uiTranslations?.[key]) {
            element.placeholder = uiTranslations[key];
        }

    });

    // CATEGORY OPTIONS
    Array.from(blogCategory.options).forEach(option => {

        if (option.value === "all") return;

        const key = categoryKeys[option.value];

        if (key && translations[key]) {
            option.textContent = translations[key];
        }

    });

    renderBlogs();
}


// TAB FILTER
blogTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        blogTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        activeType = tab.dataset.type;

        currentPage = 1;

        renderBlogs();

    });

});



// CATEGORY FILTER
blogCategory.addEventListener("change", () => {

    currentPage = 1;

    renderBlogs();

});


// LANGUAGE CHANGE
window.addEventListener("storage", event => {

    if (event.key === "language") {
        translateBlogSection();
    }

});


// INITIAL RENDER
translateBlogSection();

