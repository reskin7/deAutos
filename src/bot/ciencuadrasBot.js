const TOKEN = "5248734432:AAE2PXyV8qEniQMAKu2CSOL42I0c7zOK0Oo";

const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

//https://api.telegram.org/bot5248734432:AAE2PXyV8qEniQMAKu2CSOL42I0c7zOK0Oo/sendMessage

//chat id caro 1519487961
//chat id alan 2036886011

export const sendMessage = async (message, chatId) => {
  const body = JSON.stringify({
    chat_id: chatId,
    text: message,
  });

  const url = `${TELEGRAM_API}/sendMessage`;
  const resp = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body,
  });
  console.log(resp)
//   const { ok } = await resp.json();
};
