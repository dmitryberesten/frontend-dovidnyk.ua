let jokes = [
  {
    joke: "Раніше бабусі просили онуків просилити нитку в голку, а в майбутньому проситимуть увести капчу.",
  },
  {
    joke: "Будь ласка, не виганяйте студентів з Гарварда. Дайте їм доучитися! А то вони потім Wіndоws роблять.",
  },
  {
    joke: "Для догляду за літнім програмістом потрібна приємна жінка, що говорить на JАVА, LІSР і С++.",
  },
  {
    joke: "Переїхав програміст із України в Північну Америку. Надсилає своїм родичам звідти посилку. Родичі здивувались – він зазвичай тільки на Новий Рік посилки шле, а тут до Нового Року ще 2 місяці, та й посилка ще в такій коробці, що може слона вмістити. Відкривають коробку, вона виявляється всередині пуста, тільки на самому дні якийсь папірець лежить. Дістають вони її й бачать, що на тому папірці написано: Теst.",
  },
  {
    joke: "Не компілюй мені мізки!",
  },
  {
    joke: "Якби я не був програмістом, я б, напевне, став би хірургом: люблю, знаєте, покопирсатись у різній незрозумілій балабурді.",
  },
  {
    joke: "М'язова пам'ять — це коли сторінка ще не завантажилася, а ти вже поставив мишку на те місце, куди треба клацнути.",
  },
  {
    joke: "Немає неприступних жінок... Є різні рівні доступу!",
  },
  {
    joke: "Їдуть два програмісти в тролейбусі, доїздять до кінцевої. Водій відчиняє передні двері й починає перевіряти квитки. Перший програміст: — Уперше бачу, що драйвер може працювати контролером!",
  },
  {
    joke: "Чим відрізняється закінчений програміст від простого користувача? Користувач думає, що в кілобайті 1000 байт, а Програміст думає, що в кілометрі 1024 метри.",
  },
  {
    joke: "Коли комп’ютери були великими — програми були маленькими.",
  },
  {
    joke: "Заходить програміст у ліфт, йому треба їхати на 12 поверх. Натискає 1, потім 2 і починає гарячково шукати Еntеr.",
  },
  {
    joke: "Робота програміста й шамана має багато загального: обоє бурмочуть незрозумілі слова, обоє роблять незрозумілі дії й обоє не можуть пояснити, як це працює!",
  },
  {
    joke: "Питання: Скільки програмістів потрібно, щоб закрутити лампочку? Жодного. Це апаратна проблема, яка не стосується програмістів.",
  },
  {
    joke: "Одного разу молодий сисадмін познайомився з веб-дизайнершею. За звичкою він відразу ж запитав, яка у неї ір-адреса, але почувши, що ір-адреса у неї динамічна, тут же втратив до неї будь-який інтерес.",
  },
  {
    joke: "Важко бути програмістом. Приходиш відпочити до людей в гості, а тобі відразу показують домашній комп'ютер і просять розібратися з його проблемами. Уявляю, як важко приходиться проктологам...",
  },
  {
    joke: "Справжній програміст, як відомо, ставить на ніч поруч із собою дві склянки — одну з водою на випадок, якщо він захоче пити, а другу без води на випадок, якщо не захоче. А от справжній адмін ставить чотири склянки. Другі дві — на випадок відмови першої системи.",
  },
  {
    joke: "Швидкісний Інтернет – це коли файл простіше знову витягнути, ніж знайти його на жорсткому дискові.",
  },
  {
    joke: "Штирліц сидів дома. З вікна дуло. Штирліц натиснув Аlt+F4 — вікно зникло.",
  },
  {
    joke: "Програміст після напруженого трудового дня заглядає в холодильник, бере пачку масла, читає на обгортці: Масло вершкове. 72%. У голові майнула думка: О! Незабаром завантажиться! Повертає масло в холодильник. Зачиняє двері.",
  },
  {
    joke: "Вирішив зайнятися спортом. Вибрав біг. Добіг до комп'ютера. Сиджу. Бігаю очима по монітору. Я прямо відчуваю: Спорт — це моє!",
  },
  {
    joke: "Існує звичай, що коли одружуються два програмісти, тещею вважається материнська плата комп’ютера жінки.",
  },
  {
    joke: "Більшість користувачів упевнена, що якщо при завантаженні Wіndоws водити курсором по кругу, то комп'ютер завантажиться швидше.",
  },
  {
    joke: "Із комбінації лінощів і логіки виходять програмісти.",
  },
  {
    joke: "Терміново потрібен хакер з великим досвідом! Резюме залишати на робочому столі комп'ютера нашого директора.",
  },
  {
    joke: "Програміст — компіляція ліні та логіки.",
  },
  {
    joke: "У Росії та США одночасно створені самонавчачі комп'ютери зі штучним інтелектом. Рівно через 1 рік 22 дні 13 годин 25 хвилин 34 сек. Американський комп'ютер зламав управління ядерними ракетами та знищив усе живе. Російському ж комп'ютеру було байдуже - він спився десь місяців за 5-6 до цього.",
  },
  {
    joke: "-Ну що, хто знайшов симпатичного айтішника, що отримує далари? - Боже, ти курс бачив? Навіщо симпатичного?",
  },
  {
    joke: "Оголошення: 55-річна жінка, мати трьох програмістів, просить когось не психованного навчити її користуватись інтернетом.",
  },
  {
    joke: "Програміст не став креативити і назвав дітей Новий син(1) та Новий син(2).",
  },
  {
    joke: `- Учора довго намагалася пояснити бабусі, що працюю програмістом. <br>
- Чи вдалося? <br>
- Коротше, зійшлися на тому, що лагоджу телевізори і розводжу мишей.
`,
  },
  {
    joke: `Чому програмісти не живуть окремо від батьків? <br>
- Не хочуть, щоб відключилася функція авто заповнення холодильника.`,
  },
  {
    joke: `Зараз колега дістав молоко, підійшов до QA і запитав "спробуй, воно не пропало?"`,
  },
  {
    joke: "6 годин дебаггінгу можуть урятувати вас від 5 хвилин читання документації.",
  },
  {
    joke: `В резюме: стресостійкість. <br>
В житті: кричиш на ексель файл`,
  },
  {
    joke: `Розробник: У нас проблема. <br>
Тімдід: Пам'ятайте, що немає проблем, є можливості. <br>
Розробник: Що ж, тоді у нас DDOS можливості.`,
  },
  {
    joke: "Як програміст підтримує баланс у своєму житті? Він використовує двійкову систему.",
  },
  {
    joke: `Як програміст вітається на Різдво? <br>
"Hello, World!"`,
  },
  {
    joke: `Як веб-розробник може прогуляти своє весілля? <br>
Він створює веб-сторінку з весільними фотографіями і встановлює запитання безпеки: "Яка дата була нашого весілля?".`,
  },
  {
    joke: `Як розробник сайту може переконати свою кохану, що він її справжній герой?
Він каже: "Ти знаєш, дорога, якщо ти мене не бачиш протягом 5 секунд, просто онови сторінку і спробуй знову".`,
  },
  {
    joke: `Як розробник реагує на знайдену помилку? <br>
Він каже: "Вітаю, мій новий підопічний! Я назвав тебе багом, і ти станеш частиною мого життя".`,
  },
  {
    joke: `Якщо номер 666 - зло.
То, виходить, що корінь всього зла 25,8069?`,
  },
  {
    joke: "Після новорічних свят, робота в офісі була паралізована. Так ніхто і не пригадав пароль на вхід в свій комп'ютер.",
  },
  {
    joke: "Починається демонстрація нового комп'ютера, керованого голосом. Винахідник просить зал дотримуватись тиші. Тільки-но він відкриває рот, із залу крик: — FОRМАТ С: !!! ЕNТЕR!!! ЕNТЕR!!!",
  },
  {
    joke: `В Інтернеті з’явився новий вірус під назвою "Бомж". Систему не зачіпає, тільки порпається в смітнику.`,
  },
  {
    joke: `– Я помітив, що мені дуже подобається повідомлення на екрані комп’ютера: "99% виконано". Але тільки перші півгодини...`,
  },
  {
    joke: "Знаєте, чому кішки люблять програмістів? Тому що їх руки пахнуть мишками!",
  },
  {
    joke: `– А пароль який? <br>
– Без пароля. <br>
– Не пускає... <br>
– "Без" з великої букви.
`,
  },
  {
    joke: "Перша ознака того, що програміст гальмує — це коли включає комп, і здається, що той працює швидше...",
  },
  {
    joke: `У зоопарку дитина, збуджено тицяючи пальцем на клітку з приматами, кричить: <br>
— Мамо! Мамо! Поглянь — програмісти! <br>
— Чому ти так вирішив? <br>
— Вони як тато! — немиті, кошлаті й мозоль на попі!`,
  },
  {
    joke: "Верх завзятості: набирати невірний пароль, поки комп'ютер не погодиться.",
  },
  {
    joke: `Починається запій у програмера, починає буйствувати, приставати до всіх. Відразу дружина бере качалку і як дасть йому по голові. Програмер, зрозуміло, відключається. Подруга здивовано запитує: <br> 
— Ти що його так? <br>
— Перезавантажиться — заспокоїться.`,
  },
  {
    joke: `Влаштовується програміст на роботу. Секретарка представляється йому і простягає руку: <br>
 — Клава! <br>
— Ніфіга собі! Тебе б ще Мишкою назвали!`,
  },
  {
    joke: "Якби я не був програмістом, мабуть, став би хірургом: люблю, знаєте, поколупатися у всякій незрозумілій балабурді.",
  },
  {
    joke: "Сьогодні ми з подругою заїжджали до нової квартири і вона згадала, що в нове житло треба пускати першим кота. Подруга відкрила гіфку з котом, поклала телефон на поріг. Ми зачекали 10 секунд і зі спокійною душею ввійшли. Так кібермайбутнє поєдналося зі старовірним минулим.",
  },
  {
    joke: `Щоб написав програміст-песиміст? <br>
- "Goodbye World"`,
  },
  {
    joke: "Який ти розробник, якщо твоя тестувальниця плаче?",
  },
  {
    joke: `- Хлопці, як там справи з новою версією? <br>
- Я накотив. <br>
- Це я бачу, а з релізом що?`,
  },
  {
    joke: `В ІТ є два види спеціалістів: <br>
- я нічого не вмію (вміє дуже багато) <br>
- я все вмію (нічого не вміє)`,
  },
  {
    joke: `- Скажіть мені написати додаток і я це зроблю за день, дайте мені двох напарників і ми це зробимо за два дні. <br>
- Дайте мені команду і ми це зробимо всього-навсього за півроку!`,
  },
  {
    joke: "Терористи захопили головний офіс нашого замовника, і вже третій день не можуть сформулювати свої вимоги.",
  },
  {
    joke: "Чому девопси не ходять на обід до їдальні? Тому що вони приносять їжу у контейнерах.",
  },
  {
    joke: "Є дві гілки в репозиторії: одна прод ломає, інша базу стирає. Яку в майстер увіллєш, а яку тімліду зашлеш?)",
  },
  {
    joke: "У мене є секрет, який дозволяє мені боротися із синдромом самозванця, але він підійде не всім. Я визнала - так, я тупа, і що ви мені зробите? З інтелектом в ІТ працювати будь-який дурень зможе, ви спробуйте без нього!",
  },
  {
    joke: `1. Прокидаюся. <br>
2. Лаюся на код, тому що він фіг знає чому не хоче працювати. <br>
3. Намагаюся виправити. <br>
4. Не виходить. <br>
5. Лягаю спати.`,
  },
  {
    joke: "Пояснював дідові, хто такий тімлід, він каже – ааа, групенфюрер. Поставлю собі підпис у робочому емейлі.",
  },
  {
    joke: "Тільки уявіть. Вечір після важкого робочого дня. Закриваєте ноутбук. Замовляєте улюблену їжу. Сідаєте на улюблений диван. Включаєте улюблений величезний 4К-телек. І дивитесь запис двогодинного зідзвону, який пропустили через інший зідзвон.",
  },
  {
    joke: "Якщо ваш сервіс зроблений із гівна і палиць, потрібно щонайменше три типи тестів: на гівно, на палиці та інтеграційні.",
  },
  {
    joke: "Інтим - (ім.) робота у команді  (in team)",
  },
  {
    joke: "Підвищили на роботі. Відчуття, що я всіх обдурив і якимось чином змусив повірити, що знаю як треба працювати. А я не знаю.",
  },
  {
    joke: "В ІТ-компаніях як? Хто перший в команді фреймворк вивчив - той і головний розробник.",
  },
  {
    joke: `- Техпідтримка. Чим можу допомогти? <br>
- У мене виникла проблема. Ваша програма каже мені придбати змію, але я цього не хочу. <br>
- Вибачте? <br>
- Програма видає мені повідомлення, що для запуску потрібна змія. <br>
- Скопіюйте це повідомлення, будь ласка. <br>
- Error: Python required to run the script.`,
  },
  {
    joke: `Фінальні виправлення (іменник) - "поверніть все як було".`,
  },
  {
    joke: "У казці для програмістів поросята рятуються в будиночку з гівна і палок, який вони ремонтують швидше, ніж вовк його ломає.",
  },
  {
    joke: `Коли хтось називає себе "альфа-самцем", я чую це в контексті програмного забезпечення, де альфа-версії нестабільні, позбавлені важливих функцій, сповнені недоліків і не підходять для широкого загалу.`,
  },
  {
    joke: "Зізнаюся, завжди брешу про досвід - не розповідаю про 6 років 1С. Якщо питають, чим займався з випуску з універу до першої роботи, говорю, що сидів на героїні. Так менше засудження в очах інтерв'юерів.",
  },
  {
    joke: `Неважливо: <br>
- наскільки ти зламав код; <br>
- скільки грошей втратив; <br>
- наскільки погано написав старий код.  <br>
Завжди можна втішати себе тим, що ти не відповідаєш за код, яким керується кардіостимулятор.`,
  },
  {
    joke: `- Інтернет раніше потрібно було купувати за картками, але ночами з 2 до 7 він був безкоштовний, тільки додзвонитися було складно. <br>
- Куди? <br>
- В інтернет. <br>
- Мам, здається, дідусь таблетки свої забув прийняти.`,
  },
  {
    joke: "Ось іноді відкриваєш туторіал на ютубі, чуєш просто вбивчий індійський акцент і одразу заспокоюєшся – ти в руках професіонала, через 10 хвилин ти отримаєш відповіді на всі запитання",
  },
  {
    joke: `У мене так багато робочих дзвінків у зумі, що може здатися, що я заробляю веб-камом.`,
  },
  {
    joke: "Одного разу нам потрібно було 2 ТБ хмарного сховища. І щоб отримати їх, я створив 130 облікових записів в Google з 15ГБ безкоштовного сховища кожного.",
  },
  {
    joke: "Програмісти, ось вам секрет: якщо правильно написати, то все працює. Не дякуйте.",
  },
  {
    joke: "Придумаю свою мову програмування і назву її Pomidor. Буду Senior Pomidor Developer.",
  },
];
