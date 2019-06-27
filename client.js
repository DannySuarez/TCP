const { createConnection } = require('net');

const from = 'futuredanny@gmail.com';
const to = 'suarezd10@gmail.com';

const email = `From: "Futre Danny" <${from}>
To: "Danny <${to}
Date: ${new Date()}
Subject: Hello

Did you get this?\r\n.\r\n`;

const mailServerAddress = 'gmail-smtp-in.l.google.com';

const client = createConnection(25, mailServerAddress, () => {
  console.log('connected');
});

const steps = [
  'HELO danny.com\n',
  `MAIL FROM:<${from}>\n`,
  `RCPT TO:<${to}>\n`,
  'DATA\n',
  email,
  'QUIT\n'
];

let step = 0;

client.on('data', data => {
  console.log(data.toString());
  if(step === steps.length) return client.end();
  client.write(steps[step]);
  step++;
});
