FROM composer:2 as vendor
COPY ./site/composer.json composer.json
COPY ./site/composer.lock composer.lock
RUN composer install --ignore-platform-reqs --no-interaction --prefer-dist

FROM craftcms/nginx:8.0

# the user is `www-data`, so we copy the files using the user and group
COPY --chown=www-data:www-data ./site .
COPY --chown=www-data:www-data --from=vendor /app/vendor/ /app/vendor/

RUN mkdir -p ./config/project/

RUN mkdir -p ./storage/rebrand && \
    mkdir -p ./storage/runtime/mutex && \
    mkdir -p ./storage/logs