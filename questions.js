const questionsArray = [
  {
    "id": 1,
    "question": "مجموعه $A = \\{1, 2, 3\\}$ چند زیرمجموعه دارد؟",
    "image": null,
    "options": [
      "$8$",
      "$6$",
      "$4$",
      "$3$"
    ],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": "اگر $A = \\{1, 2, 3\\}$ و $B = \\{3, 4, 5\\}$ باشد، $A \\cap B$ کدام است؟",
    "image": null,
    "options": [
      "$\\{1, 2, 3, 4, 5\\}$",
      "$\\{3\\}$",
      "$\\emptyset$",
      "$\\{1, 2, 4, 5\\}$"
    ],
    "correctAnswer": 1
  },
  {
    "id": 3,
    "question": "اگر $A = \\{1, 2, 3\\}$ و $B = \\{3, 4, 5\\}$ باشد، $A \\cup B$ کدام است؟",
    "image": null,
    "options": [
      "$\\{3\\}$",
      "$\\{4, 5\\}$",
      "$\\{1, 2\\}$",
      "$\\{1, 2, 3, 4, 5\\}$"
    ],
    "correctAnswer": 3
  },
  {
    "id": 4,
    "question": "مجموعه $\\{x \\in \\mathbb{Z} \\mid -2 < x \\le 2\\}$ کدام است؟",
    "image": null,
    "options": [
      "$\\{-1, 0, 1\\}$",
      "$\\{-1, 0, 1, 2\\}$",
      "$\\{-2, -1, 0, 1, 2\\}$",
      "$\\{0, 1, 2\\}$"
    ],
    "correctAnswer": 1
  },
  {
    "id": 5,
    "question": "کدام یک از مجموعه‌های زیر تهی است؟",
    "image": null,
    "options": [
      "اعداد زوج",
      "اعداد اول یک‌رقمی",
      "اعداد طبیعی کوچک‌تر از ۱",
      "اعداد صحیح بین $-1$ و $1$"
    ],
    "correctAnswer": 2
  },
  {
    "id": 6,
    "question": "مجموعه اعداد طبیعی ($\\mathbb{N}$) شامل کدام است؟",
    "image": null,
    "options": [
      "$\\{0, 1, 2, \\dots\\}$",
      "$\\{1, 2, 3, \\dots\\}$",
      "$\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$",
      "$\\{1, 3, 5, \\dots\\}$"
    ],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "question": "اگر $A = \\{a, b, c\\}$ باشد، کدام گزینه درست است؟",
    "image": null,
    "options": [
      "$a \\subseteq A$",
      "$\\{a\\} \\in A$",
      "$b \\notin A$",
      "$a \\in A$"
    ],
    "correctAnswer": 3
  },
  {
    "id": 8,
    "question": "تعداد زیرمجموعه‌های یک مجموعه ۴ عضوی چقدر است؟",
    "image": null,
    "options": [
      "$16$",
      "$8$",
      "$4$",
      "$32$"
    ],
    "correctAnswer": 0
  },
  {
    "id": 9,
    "question": "اگر $A \\subseteq B$ و $B \\subseteq A$ باشد، آنگاه:",
    "image": null,
    "options": [
      "$A \\subset B$",
      "$B \\subset A$",
      "$A \\cap B = \\emptyset$",
      "$A = B$"
    ],
    "correctAnswer": 3
  },
  {
    "id": 10,
    "question": "مجموعه $\\{x \\in \\mathbb{N} \\mid x < 5\\}$ کدام است؟",
    "image": null,
    "options": [
      "$\\{0, 1, 2, 3, 4\\}$",
      "$\\{1, 2, 3, 4, 5\\}$",
      "$\\{1, 2, 3, 4\\}$",
      "$\\{0, 1, 2, 3\\}$"
    ],
    "correctAnswer": 2
  },
  {
    "id": 11,
    "question": "اگر $A = \\{1, 2\\}$ و $B = \\{2, 3\\}$ باشد، $A - B$ کدام است؟",
    "image": null,
    "options": [
      "$\\{1\\}$",
      "$\\{2\\}$",
      "$\\{3\\}$",
      "$\\{1, 3\\}$"
    ],
    "correctAnswer": 0
  },
  {
    "id": 12,
    "question": "کدام یک مجموعه نیست؟",
    "image": null,
    "options": [
      "اعداد اول",
      "اعداد بزرگ",
      "اعداد زوج",
      "اعداد طبیعی"
    ],
    "correctAnswer": 1
  },
  {
    "id": 13,
    "question": "مجموعه $\\{\\emptyset\\}$ چند عضو دارد؟",
    "image": null,
    "options": [
      "$0$",
      "$1$",
      "$2$",
      "بی‌شمار"
    ],
    "correctAnswer": 1
  },
  {
    "id": 14,
    "question": "اگر $A = \\{1, 2, 3, 4, 5\\}$ و $B = \\{2, 4\\}$ باشد، $B \\subseteq A$؟",
    "image": null,
    "options": [
      "خیر",
      "بله",
      "فقط اگر $2 \\in A$",
      "نمی‌دانیم"
    ],
    "correctAnswer": 1
  },
  {
    "id": 15,
    "question": "اگر $A = \\{1, 2, 3\\}$ و $B = \\{4, 5\\}$ باشد، $A \\cap B$ کدام است؟",
    "image": null,
    "options": [
      "$\\{1\\}$",
      "$\\{1, 2, 3, 4, 5\\}$",
      "$\\emptyset$",
      "$\\{0\\}$"
    ],
    "correctAnswer": 2
  },
  {
    "id": 16,
    "question": "اگر $A = \\{1, 2, 3\\}$ باشد، کدام گزینه نادرست است؟",
    "image": null,
    "options": [
      "$1 \\in A$",
      "$\\{1\\} \\subseteq A$",
      "$1 \\subseteq A$",
      "$\\emptyset \\subseteq A$"
    ],
    "correctAnswer": 2
  },
  {
    "id": 17,
    "question": "مجموعه $\\{x \\in \\mathbb{Z} \\mid -3 \\le x < 0\\}$ کدام است؟",
    "image": null,
    "options": [
      "$\\{-3, -2, -1\\}$",
      "$\\{-3, -2, -1, 0\\}$",
      "$\\{-2, -1, 0\\}$",
      "$\\{-2, -1\\}$"
    ],
    "correctAnswer": 0
  },
  {
    "id": 18,
    "question": "اگر $A = \\{1, 2\\}$ و $B = \\{1, 2, 3\\}$ باشد، کدام درست است؟",
    "image": null,
    "options": [
      "$B \\subset A$",
      "$A = B$",
      "$A \\subset B$",
      "$A \\cap B = \\emptyset$"
    ],
    "correctAnswer": 2
  },
  {
    "id": 19,
    "question": "مجموعه $\\{x \\in \\mathbb{Z} \\mid x^2 = 4\\}$ کدام است؟",
    "image": null,
    "options": [
      "$\\{2\\}$",
      "$\\{-2\\}$",
      "$\\{-2, 2\\}$",
      "$\\{4\\}$"
    ],
    "correctAnswer": 2
  },
  {
    "id": 20,
    "question": "کدام نماد برای «عضو نیست» استفاده می‌شود؟",
    "image": null,
    "options": [
      "$\\in$",
      "$\\subseteq$",
      "$\\subset$",
      "$\\notin$"
    ],
    "correctAnswer": 3
  }
];

window.questionsArray = questionsArray;