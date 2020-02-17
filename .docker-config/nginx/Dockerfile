FROM nginx:1.13

RUN apt-get update && apt-get install -y cron vim curl

# Copy hello-cron file to the cron.d directory
COPY ./.docker-config/nginx/cron-moodhwb /etc/cron.d/cron-moodhwb

COPY ./.docker-config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./site/web /var/www/html/web

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/cron-moodhwb

# Apply cron job
RUN crontab /etc/cron.d/cron-moodhwb

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

RUN service cron start
RUN update-rc.d cron defaults
