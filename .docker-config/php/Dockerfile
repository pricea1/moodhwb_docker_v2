FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
        libfreetype6-dev libjpeg62-turbo-dev \
        libmcrypt-dev libpng-dev libbz2-dev \
        libssl-dev autoconf \
        ca-certificates curl g++ libicu-dev \
        libzip-dev

RUN docker-php-ext-install \
        bcmath bz2 exif \
        ftp gd gettext opcache \
        shmop sockets sysvmsg sysvsem sysvshm \
        zip iconv pdo_mysql intl

RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/

RUN apt-get install -y --no-install-recommends libmagickwand-dev && \
        pecl install imagick-3.4.3 && \
        docker-php-ext-enable imagick

COPY --chown=www-data:www-data ./site/config /var/www/html/config
COPY --chown=www-data:www-data ./site/modules /var/www/html/modules
COPY --chown=www-data:www-data ./site/templates /var/www/html/templates
COPY --chown=www-data:www-data ./site/translations /var/www/html/translations
COPY --chown=www-data:www-data ./site/web /var/www/html/web
COPY --chown=www-data:www-data ./site/composer.json /var/www/html/composer.json
COPY --chown=www-data:www-data ./site/craft /var/www/html/craft

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer

RUN echo "upload_max_filesize = 10M" > /usr/local/etc/php/php.ini && \
    echo "post_max_size = 10M" >> /usr/local/etc/php/php.ini && \
    echo "max_execution_time = 300" >> /usr/local/etc/php/php.ini && \
    echo "memory_limit = 256M" >> /usr/local/etc/php/php.ini && \
    echo "error_reporting = E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED" >> /usr/local/etc/php/php.ini

RUN mkdir -p /var/www/html/storage/rebrand && \
    mkdir -p /var/www/html/storage/runtime/mutex && \
    mkdir -p /var/www/html/storage/logs && \
    chown -R www-data:www-data /var/www/html/storage

RUN composer install -d /var/www/html/ && \
    chown -R www-data:www-data /var/www/html/vendor && \
    chown -R www-data:www-data /var/www/html/composer.lock
