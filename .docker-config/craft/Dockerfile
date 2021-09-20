FROM composer:2 as vendor
COPY ./site/composer.json composer.json
COPY ./site/composer.lock composer.lock
RUN composer install --ignore-platform-reqs --no-interaction --prefer-dist

FROM craftcms/nginx:8.0

RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Moodhwb, Inc./CN=moodhwb.org" \
    -addext "subjectAltName=DNS:moodhwb.org" \
    -newkey rsa:2048 \
    -keyout /etc/ssl/private/nginx-selfsigned.key \
    -out /etc/ssl/certs/nginx-selfsigned.crt;

COPY ./.docker-config/craft/default.conf /etc/nginx/conf.d/default.conf

# the user is `www-data`, so we copy the files using the user and group
COPY --chown=www-data:www-data ./site .
COPY --chown=www-data:www-data --from=vendor /app/vendor/ /app/vendor/

RUN mkdir -p ./config/project/

RUN mkdir -p ./storage/rebrand && \
    mkdir -p ./storage/runtime/mutex && \
    mkdir -p ./storage/logs