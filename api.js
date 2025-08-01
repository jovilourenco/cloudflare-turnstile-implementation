const SECRET_KEY = ""; // COLOCAR O SECRET AQUI 

async function validateToken() {
  const token = ""; // QUANDO CLICAR EM "TESTE" NO INDEX, PEGAR O TOKEN NO CONSOLE E COLOCAR AQUI

  let formData = new FormData();
  formData.append("secret", SECRET_KEY);
  formData.append("response", token);

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: formData,
    method: "POST",
  });

  const outcome = await result.json();
  if (outcome.success) {
    console.log(outcome)
  }
  else {
    console.log('error: invalid token!')
  }
}

validateToken()