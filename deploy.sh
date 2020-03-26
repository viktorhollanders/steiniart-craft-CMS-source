git fetch origin
git reset --hard origin/master

composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader
composer dump-autoload