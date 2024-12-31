# discord-voice-chat-notification-bot

A Discord bot to notify users voice chat
 status changes

### Getting started

```bash
# Set up nvm if it's not installed
export nvm_v_latest="$(curl -sL https://api.github.com/repos/nvm-sh/nvm/releases/latest | jq -r '.tag_name')"
nvm -v || curl -o- "https://raw.githubusercontent.com/nvm-sh/nvm/${nvm_v_latest}/install.sh" | bash
exec bash
nvm -v

# Install libpcap-dev
sudo apt-get install libpcap-dev

# Clone repository
git clone https://github.com/cygnan/slack-stopwatch.git
cd slack-stopwatch

# Install Node.js and its libraries
nvm install
nvm use
node -v
npm ci

# Fill in Slack conversationId and token
cp .env.sample .env
vi .env

# Build
npm run build

# Run
sudo su -
cd /path/to/slack-stopwatch
pm2 start ecosystem.config.js
pm2 save
```
