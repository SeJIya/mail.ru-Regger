# mail.ru-Regger
Chrome extension for semi-auto registrations mail accounts in mail.ru and save in database

1. Download this repository
2. Edit MySQL database information in [line](https://github.com/SeJIya/mail.ru-Regger/blob/41d28ec904965bd2e3f97464d7941a5f93a0ba9c/web/api/inc/config.php#L1)
3. Change API key in [line](https://github.com/SeJIya/mail.ru-Regger/blob/06fe4c14b73532c1c0f72f30cd3c94e33b4ff341/web/api/instal.php#L4) and [here](https://github.com/SeJIya/mail.ru-Regger/blob/41d28ec904965bd2e3f97464d7941a5f93a0ba9c/extension/js/verify.js#L11)
4. Upload folder 'api' to your host
5. Go http://yourhost.com/api/install.php
6. Add [permission](https://github.com/SeJIya/mail.ru-Regger/blob/41d28ec904965bd2e3f97464d7941a5f93a0ba9c/extension/manifest.json#L23) for your host 
7. Edit url to POST request [here](https://github.com/SeJIya/mail.ru-Regger/blob/41d28ec904965bd2e3f97464d7941a5f93a0ba9c/extension/js/verify.js#L10)
8. Install extension for your browser in developers mode
9. View [video](https://youtu.be/bCQxa__V_dk)
