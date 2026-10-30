const LRI = '\u2066'; // Left-to-Right Isolate
const PDI = '\u2069'; // Pop Directional Isolate

const f = (tex) => `${LRI}$${tex}$${PDI}`; // helper برای ساخت فرمول ایزوله

const questionsArray = [
  {
    "id": 1,
    "question": `حاصل عبارت ${f('|3 - 7|')} کدام است؟`,
    "image": null,
    "options": [f('4'), f('-4'), f('10'), f('-10')],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": `حاصل عبارت ${f('|-5| + |2|')} کدام است؟`,
    "image": null,
    "options": [f('-3'), f('3'), f('7'), f('-7')],
    "correctAnswer": 2
  },
  {
    "id": 3,
    "question": `اگر ${f('x < 0')} باشد، حاصل ${f('|x|')} برابر است با:`,
    "image": null,
    "options": [f('x'), f('-x'), f('0'), f('x^2')],
    "correctAnswer": 1
  },
  {
    "id": 4,
    "question": `حاصل عبارت ${f('\\sqrt{(-6)^2}')} کدام است؟`,
    "image": null,
    "options": [f('-6'), f('6'), f('36'), f('-36')],
    "correctAnswer": 1
  },
  {
    "id": 5,
    "question": `عبارت ${f('|2 - \\sqrt{5}|')} برابر است با:`,
    "image": null,
    "options": [f('2 - \\sqrt{5}'), f('\\sqrt{5} - 2'), f('2 + \\sqrt{5}'), f('\\sqrt{5} + 2')],
    "correctAnswer": 1
  },
  {
    "id": 6,
    "question": `اگر ${f('|a| = 4')} باشد، مقدار ${f('a')} کدام می‌تواند باشد؟`,
    "image": null,
    "options": [`فقط ${f('4')}`, `فقط ${f('-4')}`, `${f('4')} یا ${f('-4')}`, f('0')],
    "correctAnswer": 2
  },
  {
    "id": 7,
    "question": `حاصل عبارت ${f('|-3| \\times |4|')} کدام است؟`,
    "image": null,
    "options": [f('-12'), f('12'), f('7'), f('-7')],
    "correctAnswer": 1
  },
  {
    "id": 8,
    "question": "کدام گزینه در مورد قدر مطلق نادرست است؟",
    "image": null,
    "options": [
      f('|x| \\geq 0'),
      f('|x| = |-x|'),
      f('|x \\cdot y| = |x| \\cdot |y|'),
      `${f('|x + y| = |x| + |y|')} (همیشه)`
    ],
    "correctAnswer": 3
  },
  {
    "id": 9,
    "question": `حاصل ${f('\\left| \\frac{-8}{2} \\right|')} کدام است؟`,
    "image": null,
    "options": [f('-4'), f('4'), f('-16'), f('16')],
    "correctAnswer": 1
  },
  {
    "id": 10,
    "question": `فاصله عدد ${f('3')} تا ${f('-2')} روی محور اعداد برابر است با:`,
    "image": null,
    "options": [f('1'), f('5'), f('-5'), f('6')],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "question": `اگر ${f('|x - 2| = 3')} باشد، مقدار ${f('x')} کدام است؟`,
    "image": null,
    "options": [f('5'), f('-1'), `${f('5')} یا ${f('-1')}`, `${f('3')} یا ${f('-3')}`],
    "correctAnswer": 2
  },
  {
    "id": 12,
    "question": `حاصل عبارت ${f('|1 - \\sqrt{2}| + |\\sqrt{2} - 2|')} کدام است؟`,
    "image": null,
    "options": [f('1'), f('2\\sqrt{2} - 3'), f('3 - 2\\sqrt{2}'), f('1 - 2\\sqrt{2}')],
    "correctAnswer": 0
  },
  {
    "id": 13,
    "question": `اگر ${f('a = -2')} و ${f('b = 5')} باشد، حاصل ${f('|a + b|')} کدام است؟`,
    "image": null,
    "options": [f('3'), f('-3'), f('7'), f('-7')],
    "correctAnswer": 0
  },
  {
    "id": 14,
    "question": "کدام عدد قدر مطلق بزرگتری دارد؟",
    "image": null,
    "options": [f('-10'), f('8'), f('-12'), f('0')],
    "correctAnswer": 2
  },
  {
    "id": 15,
    "question": `حاصل ${f('\\sqrt{x^2}')} وقتی ${f('x < 0')} باشد، برابر است با:`,
    "image": null,
    "options": [f('x'), f('-x'), f('x^2'), f('-x^2')],
    "correctAnswer": 1
  },
  {
    "id": 16,
    "question": `عبارت ${f('|x| + |-x|')} به ازای هر عدد حقیقی ${f('x')}:`,
    "image": null,
    "options": ["همیشه صفر است", "همیشه مثبت است", "همیشه نامنفی است", "همیشه منفی است"],
    "correctAnswer": 2
  },
  {
    "id": 17,
    "question": `اگر ${f('|x| = 0')} باشد، آنگاه:`,
    "image": null,
    "options": [f('x = 1'), f('x = -1'), f('x = 0'), `${f('x')} هر عددی می‌تواند باشد`],
    "correctAnswer": 2
  },
  {
    "id": 18,
    "question": `حاصل ${f('|2 - 5| - |5 - 2|')} کدام است؟`,
    "image": null,
    "options": [f('6'), f('-6'), f('0'), f('4')],
    "correctAnswer": 2
  },
  {
    "id": 19,
    "question": `اگر ${f('x')} عددی بین ${f('-1')} و ${f('0')} باشد، ${f('|x|')} برابر است با:`,
    "image": null,
    "options": [f('x'), f('-x'), f('1'), f('0')],
    "correctAnswer": 1
  },
  {
    "id": 20,
    "question": `حاصل ${f('\\left|-\\frac{3}{4}\\right| + \\left|\\frac{1}{4}\\right|')} کدام است؟`,
    "image": null,
    "options": [f('-\\frac{1}{2}'), f('\\frac{1}{2}'), f('1'), f('-1')],
    "correctAnswer": 2
  }
];

window.questionsArray = questionsArray;