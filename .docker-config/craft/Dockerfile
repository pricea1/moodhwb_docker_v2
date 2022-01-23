FROM composer:2 as vendor
COPY ./site/composer.json composer.json
COPY ./site/composer.lock composer.lock
RUN composer install --ignore-platform-reqs --no-interaction --prefer-dist

FROM craftcms/nginx:8.0

ENV PHP_UPLOAD_MAX_FILESIZE=200M
ENV PHP_POST_MAX_SIZE=200M

USER root

RUN apk update update && apk upgrade && \
    apk add --no-cache \
    ssmtp mailx

RUN mkdir -p ./ssl && \
    openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Moodhwb, Inc./CN=moodhwb.org" \
    -addext "subjectAltName=DNS:moodhwb.org" \
    -newkey rsa:2048 \
    -keyout ./ssl/nginx-selfsigned.key \
    -out ./ssl/nginx-selfsigned.crt;

RUN chown -R www-data:www-data ./ssl

COPY ./.docker-config/craft/default.conf /etc/nginx/conf.d/default.conf

# the user is `www-data`, so we copy the files using the user and group
COPY --chown=www-data:www-data ./site .
COPY --chown=www-data:www-data --from=vendor /app/vendor/ /app/vendor/

USER www-data
RUN mkdir -p ./config/project/

RUN mkdir -p ./storage/rebrand && \
    mkdir -p ./storage/runtime/mutex && \
    mkdir -p ./storage/logs