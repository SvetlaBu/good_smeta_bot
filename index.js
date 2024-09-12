const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('7491959261:AAEndfyoYMAs2FkmvQ-V3U9TDsf7p7ywY7s', 
{
  polling: {
    interval: 300,
    timeout: 2,
    autoStart: true
  }
});

//конфиг клавиатуры
const keyboard = [
    [
      {
        text: 'Сметное дело для начинающих', // текст на кнопке
        url: 'https://online.academia-bti.ru/kns?utm_source=gk_kab',
        callback_data: 'part_1'
      }
    ],
    [
        {
          text: 'Переподготовка инженера сметчика',
          url: 'https://online.academia-bti.ru/cours?utm_source=gk_kab',
          callback_data: 'part_2'
        }
    ],
    [
        {
          text: 'Вебинар на самые актуальные темы сметного дела 12.09.2024',
          url: 'https://academia-bti.ru/5factorov_rim',
          callback_data: 'part_3'
        }
      ]
  ];

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'Здравствуйте! Мы подготовили для вас:', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});
