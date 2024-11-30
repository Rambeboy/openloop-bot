### OPENLOOP DECENTRALIZED BANDWIDTH

![banner](assets/image.png)

OpenLoop Network is a decentralized wireless network built to enhance Internet service delivery, making it more efficient, accessible, and rewarding for everyone.

- Link [Website](https://openloop.so/)
- Link [Twitter](https://x.com/openloop_so)
- Link [Telegram](https://t.me/openloop_updates)
- Link [Discord](https://discord.com/)

## BOT FEATURE

- Automated Register Accounts.
- Load Existing Tokens: Load pre-existing tokens if you already have account.
- Auto Ping.
- Auto Referral.
- Support Multy Accounts.
- Support Proxy.

## PREREQUISITE

- Git
- Node.js: Ensure you have Node.js installed.
- npm: Ensure you have npm installed.

## SETUP ACCOUNTS

- If you already have account you can put `access-token` to `token.txt`.

- Put your proxy in file `proxy.txt` format:
  ```bash
  http://username:password@hostname:port
  ```

  ![intro](assets/image-1.png)

## INSTALLATION

1. Clone this repository:
   ```bash
   git clone https://github.com/Rambeboy/openloop-bot.git && cd openloop-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure proxy folder:
   ```bash
   cp accounts/proxy_list_tmp.js proxy.txt
   ```
4. Configure the proxy:
   ```bash
   nano proxy.txt
   ```
5. Setup to create accounts and get Tokens:
   ```bash
   npm run setup
   ```
6. Run auto referral:
   ```bash
   npm run autoreff
   ```
7. Run The Script:
   ```bash
   npm run start
   ```

## DISCLAIMER

This bot is for educational purposes only. Use at your own risk. Please follow Openloop terms of service.

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
