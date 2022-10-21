const comments = [
    {
        id: 0,
        productId : 0,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 1,
        productId : 0,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 2,
        productId : 0,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 3,
        productId : 1,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.8,
        likeCounts: 15,
        disLikeCounts: 6,   
    },
    {
        id: 4,
        productId : 1,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1.5,
        likeCounts: 16,
        disLikeCounts: 1,   
    },
    {
        id: 5,
        productId : 1,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 6,
        productId : 1,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 7,
        productId : 2,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 8,
        productId : 2,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 9,
        productId : 3,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 10,
        productId : 3,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 11,
        productId : 3,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 12,
        productId : 4,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 13,
        productId : 5,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 14,
        productId : 5,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 15,
        productId : 5,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 16,
        productId : 5,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 17,
        productId : 6,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 18,
        productId : 6,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 19,
        productId : 6,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 20,
        productId : 6,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 21,
        productId : 7,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 22,
        productId : 7,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 23,
        productId : 7,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 24,
        productId : 8,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 25,
        productId : 8,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 26,
        productId : 8,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
    {
        id: 27,
        productId : 9,
        title: "گوشی خوبیه",
        detail: "برای مادرم خریدم گوشی خوبیه",
        averageRating: 4.9,
        likeCounts: 19,
        disLikeCounts: 4,   
    },
    {
        id: 28,
        productId : 9,
        title: "خیلی مزخرفه بود",
        detail: "این گوشی رو اصلا توصیه نمیکنم",
        averageRating: 1,
        likeCounts: 10,
        disLikeCounts: 9,   
    },
    {
        id: 29,
        productId : 9,
        title: "بد نبود",
        detail: "گوشی رو خریدم اونجور که از گوشی بد تعریف میکردن نبود",
        averageRating: 4,
        likeCounts: 30,
        disLikeCounts: 3,   
    },
];

export default comments;