FROM ruby:2.7.4-alpine

RUN apk add --no-cache --update build-base linux-headers tzdata

WORKDIR /app

COPY Gemfile* ./

RUN bundle install
