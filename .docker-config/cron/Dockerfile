FROM alpine:3.6

RUN apk add --no-cache curl

# Copy hello-cron file to the cron.d directory
COPY ./.docker-config/cron/cron-moodhwb /etc/crontabs/root

# start crond with log level 8 in foreground, output to stderr
CMD ["crond", "-f", "-d", "8"]