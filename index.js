const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('7491959261:AAEndfyoYMAs2FkmvQ-V3U9TDsf7p7ywY7s', 
{
  polling: {
    interval: 300,
    delay: 2,
    autoStart: true
  }
});

//конфиг клавиатуры
const keyboard = [
    [
      {
        text: 'Сметное дело для начинающих', // текст на кнопке
        callback_data: 'part1' // данные для обработчика событий
      }
    ],
    [
        {
          text: 'Переподготовка инженера сметчика',
          callback_data: 'part2'
        }
    ],
    [
        {
          text: 'Вебинар на самые актуальные темы сметного дела 12.09.2024',
          callback_data: 'part3' //внешняя ссылка
        }
      ]
  ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'Здравствуйте! Мы на связи!', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let message = '';

    if (query.data === 'part1') { // если кот
        message = 'Получите востребованную профессию инженера-сметчика за 12 недель по доступной цене и сразу начинайте зарабатывать на своих знаниях https://online.academia-bti.ru/kns?utm_source=gk_kab';
    }

    if (query.data === 'part2') { // если пёс
        message = 'За 2 недели освой основные изменения в сметном деле 2024 и стань высокоэффективным и востребованным сметчиком, который влияет на прибыль компании и зарабатывай на 30% больше https://online.academia-bti.ru/cours?utm_source=gk_kab';
    }

    if (query.data === 'part3') { // если пёс
        message = '5 ключевых факторов при составлении смет ресурсно - индексным методом https://academia-bti.ru/5factorov_rim';
    }

    if (message) {
        bot.sendPhoto(chatId, message, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } else {
        bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    }
  });