var swiperBlogs = new Swiper('.swiper-comments', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
var swiperEducational = new Swiper('.swiper-educational', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
var swiperCourses = new Swiper('.swiper-courses', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});
var swiperCourses = new Swiper('.swiper-partnerships', {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        390: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    }
});
var swiperTeacherComments = new Swiper('.swiper-teacher-comments', {
    slidesPerView: 1,
    spaceBetween: 5,
    autoHeight: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});
var swiperBlogPreview = new Swiper('.swiper-blog-preview', {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});